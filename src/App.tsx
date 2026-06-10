import { Button } from './components/ui/button'

function App() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="mx-auto w-full max-w-7xl px-8 py-6">
          <nav className="flex items-center justify-between gap-6">
            <a href="#top" className="flex items-center gap-3 text-3xl tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              <img src="/src/assets/logo.png" alt="AnuravtGo logo" width={40} height={40} className="inline-block" />
              <span className="leading-none">AnuravtGo</span>
            </a>

            <div className="flex items-center">
              <Button asChild className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03]">
                <a href="#reach-us">Begin Journey</a>
              </Button>
            </div>
          </nav>
        </header>

        <section className="hero-stage flex flex-1 flex-col items-center justify-start px-6 pt-8 text-center sm:pt-12 md:pt-16">
          <h1
            className="hero-heading animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Have the knowledge of a thousand books at your fingertips
          </h1>

          <p className="hero-copy animate-fade-rise-delay mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We&apos;re designing tools for deep thinkers, bold creators, and quiet
            rebels. Amid the chaos, we build digital spaces for sharp focus and
            inspired work.
          </p>

          <Button
            asChild
            className="hero-cta liquid-glass animate-fade-rise-delay-2 mt-8 cursor-pointer rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03]"
          >
            <a href="#reach-us">Begin Journey</a>
          </Button>
        </section>
      </div>
    </main>
  )
}

export default App
