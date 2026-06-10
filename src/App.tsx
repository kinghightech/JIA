import { useEffect, useRef, useState } from 'react'
import { Button } from './components/ui/button'
import Onboarding from './components/Onboarding'
import logo from './assets/logo.png'

function App() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  // 'landing' → 'leaving' (fade out) → 'onboarding' → 'jainduo' (learning app)
  const [phase, setPhase] = useState<'landing' | 'leaving' | 'onboarding' | 'jainduo'>('landing')

  useEffect(() => {
    function setHeaderVar() {
      const h = headerRef.current?.offsetHeight ?? 96
      document.documentElement.style.setProperty('--header-h', `${h}px`)
    }

    setHeaderVar()
    window.addEventListener('resize', setHeaderVar)
    return () => window.removeEventListener('resize', setHeaderVar)
  }, [])

  function beginJourney() {
    setPhase('leaving')
    // Let the landing fade/scale out, then mount the onboarding.
    window.setTimeout(() => setPhase('onboarding'), 700)
  }

  // Demo reset: wipe all saved progress and return to the landing page.
  function restartDemo() {
    try {
      localStorage.clear()
    } catch {
      /* ignore */
    }
    window.location.reload()
  }

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

      <div className={`relative z-10 landing-stage${phase !== 'landing' ? ' is-leaving' : ''}`}>
        <header className="absolute left-0 right-0 top-0 z-20">
          <div ref={headerRef} className="mx-auto w-full max-w-7xl px-8 py-8 pt-10">
            <nav className="flex items-center justify-between gap-6">
              <a href="#top" className="flex items-center gap-3 text-3xl tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                <img src={logo} alt="AnuravtGo logo" width={52} height={52} className="inline-block" />
                <span className="leading-none">AnuravtGo</span>
              </a>
            </nav>
          </div>
        </header>

        <section className="hero-stage flex min-h-screen flex-col items-center justify-center px-6 text-center" style={{ paddingBottom: '30vh' }}>
          <h1
            className="hero-heading animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-[6.5rem]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Have the knowledge of a <span className="highlight-thousand">thousand</span> books at your fingertips
          </h1>

          {/* Hero subtext removed per request */}

          <Button
            onClick={beginJourney}
            className="hero-cta liquid-glass animate-fade-rise-delay-2 mt-10 cursor-pointer rounded-full px-20 py-7 text-xl text-foreground hover:scale-[1.03]"
          >
            Begin Journey
          </Button>
        </section>
      </div>

      {phase === 'onboarding' && (
        <div className="onboarding-enter absolute inset-0 z-30">
          <Onboarding onComplete={() => setPhase('jainduo')} />
        </div>
      )}

      {phase === 'jainduo' && (
        <iframe
          title="AnuravtGo"
          src="/jainduo/index.html"
          className="jainduo-frame onboarding-enter"
        />
      )}

      {/* Demo control: always on top, resets everything back to the landing page */}
      <button
        type="button"
        onClick={restartDemo}
        className="restart-demo"
        title="Restart demo from the landing page"
        aria-label="Restart demo"
      >
        <span aria-hidden="true">⟲</span> Restart demo
      </button>
    </main>
  )
}

export default App
