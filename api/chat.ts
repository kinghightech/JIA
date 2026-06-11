export const config = {
  runtime: 'edge',
};

export default async (request: Request) => {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { messages, model } = await request.json();

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Forward the request to OpenRouter with streaming
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': request.headers.get('origin') || 'https://anuvratgo.com',
        'X-Title': 'AnuvratGo',
      },
      body: JSON.stringify({
        model: model || 'ibm-granite/granite-4.1-8b',
        stream: true,
        max_tokens: 700,
        messages,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return new Response(
        JSON.stringify({ error: `OpenRouter error: ${error}` }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Pass through the streaming response with CORS headers
    const { readable, writable } = new TransformStream();
    
    response.body?.pipeTo(writable).catch(err => console.error('Stream error:', err));

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: String(error) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
