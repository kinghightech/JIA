import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from './ui/button'

const SERIF = "'Instrument Serif', serif"

/* ------------------------------------------------------------------ */
/* Starfield                                                           */
/* ------------------------------------------------------------------ */
function Stars({ count = 90 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2.5,
      })),
    [count],
  )

  return (
    <div className="stars-layer" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
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

export default function Onboarding() {
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
              />
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
