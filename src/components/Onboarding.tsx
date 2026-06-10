import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from './ui/button'

const SERIF = "'Instrument Serif', serif"

/* ------------------------------------------------------------------ */
/* Starfield                                                           */
/* ------------------------------------------------------------------ */
function Stars({ count = 220 }: { count?: number }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Weight toward many faint, distant stars with a few bright, close ones.
      const roll = Math.random()
      let tier: 'dim' | 'mid' | 'bright'
      if (roll > 0.93) tier = 'bright'
      else if (roll > 0.7) tier = 'mid'
      else tier = 'dim'

      const size =
        tier === 'bright'
          ? Math.random() * 1.6 + 2.2
          : tier === 'mid'
            ? Math.random() * 1.2 + 1.4
            : Math.random() * 1 + 0.6

      // Subtle warm/cool tint so they don't read as flat white.
      const hue = Math.random()
      const color =
        hue > 0.8 ? 'rgba(255, 244, 224, 1)' : hue < 0.2 ? 'rgba(214, 233, 255, 1)' : 'rgba(255, 255, 255, 1)'

      return {
        id: i,
        tier,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size,
        color,
        delay: Math.random() * 6,
        duration: Math.random() * 3.5 + 2.5,
      }
    })
  }, [count])

  return (
    <div className="stars-layer" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className={`star star--${s.tier}`}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            ['--star-color' as string]: s.color,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Typewriter                                                          */
/* ------------------------------------------------------------------ */
function Typewriter({
  text,
  speed = 42,
  startDelay = 350,
  onDone,
  className,
  style,
}: {
  text: string
  speed?: number
  startDelay?: number
  onDone?: () => void
  className?: string
  style?: React.CSSProperties
}) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    setShown('')
    setDone(false)
    let i = 0
    let tick: ReturnType<typeof setTimeout>

    const start = setTimeout(function type() {
      i += 1
      setShown(text.slice(0, i))
      if (i < text.length) {
        tick = setTimeout(type, speed)
      } else {
        setDone(true)
        onDoneRef.current?.()
      }
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearTimeout(tick)
    }
  }, [text, speed, startDelay])

  return (
    <span className={className} style={style}>
      {shown}
      <span className={`tw-cursor${done ? ' tw-cursor-blink' : ''}`}>|</span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Onboarding                                                          */
/* ------------------------------------------------------------------ */
type Step = 'intro' | 'name' | 'done'

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<Step>('intro')
  const [introReady, setIntroReady] = useState(false)
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Focus the name field once its screen mounts.
  useEffect(() => {
    if (step === 'name') {
      const t = setTimeout(() => inputRef.current?.focus(), 900)
      return () => clearTimeout(t)
    }
  }, [step])

  function submitName(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim().length === 0) return
    setStep('done')
  }

  const displayName = name.trim()

  // Hand the name to the learning app (same origin → shared localStorage),
  // then open it in-place once the thank-you message has been read.
  function enterJainduo() {
    try {
      const KEY = 'jinaPath.progress.v1'
      const existing = JSON.parse(localStorage.getItem(KEY) || '{}')
      localStorage.setItem(KEY, JSON.stringify({ ...existing, profileName: displayName }))
    } catch {
      /* localStorage unavailable — proceed without seeding the name */
    }
    window.setTimeout(onComplete, 1600)
  }

  return (
    <div className="onboarding-root" style={{ backgroundColor: '#013F60' }}>
      <Stars />

      <div className="onboarding-content">
        {/* ---------- Step 1: intro ---------- */}
        {step === 'intro' && (
          <div key="intro" className="onboarding-screen">
            <p className="onboarding-line" style={{ fontFamily: SERIF }}>
              <Typewriter
                text="We are AnuravtGo — your way of understanding Jainism."
                onDone={() => setIntroReady(true)}
              />
            </p>

            <div className={`onboarding-actions${introReady ? ' is-visible' : ''}`}>
              <Button
                onClick={() => setStep('name')}
                className="onboarding-btn liquid-glass cursor-pointer rounded-full px-14 py-6 text-lg text-foreground hover:scale-[1.03]"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {/* ---------- Step 2: name ---------- */}
        {step === 'name' && (
          <div key="name" className="onboarding-screen">
            <p className="onboarding-line" style={{ fontFamily: SERIF }}>
              <Typewriter text="Let’s start your learning journey." />
            </p>

            <form className="onboarding-form is-visible" onSubmit={submitName}>
              <input
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What should we call you?"
                aria-label="Your name"
                className="onboarding-input"
                style={{ fontFamily: SERIF }}
                autoComplete="given-name"
              />
              <Button
                type="submit"
                disabled={displayName.length === 0}
                className="onboarding-btn liquid-glass cursor-pointer rounded-full px-14 py-6 text-lg text-foreground hover:scale-[1.03] disabled:cursor-not-allowed"
              >
                Continue
              </Button>
            </form>
          </div>
        )}

        {/* ---------- Step 3: done ---------- */}
        {step === 'done' && (
          <div key="done" className="onboarding-screen">
            <p className="onboarding-line" style={{ fontFamily: SERIF }}>
              <Typewriter
                text={
                  displayName
                    ? `Thank you, ${displayName} — you’ve completed the onboarding.`
                    : 'Thank you — you’ve completed the onboarding.'
                }
                onDone={enterJainduo}
              />
            </p>
            <p className="onboarding-entering" style={{ fontFamily: SERIF }}>
              Entering your journey…
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
