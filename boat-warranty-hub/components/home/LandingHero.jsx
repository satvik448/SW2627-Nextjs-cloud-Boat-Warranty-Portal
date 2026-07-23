import Image from 'next/image';

export default function LandingHero() {
  return (
    /**
     * Root shell — exactly 100vh, fixed positioning context.
     * No overflow so the bear shoulders bleed below the fold intentionally.
     */
    <section
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ─────────────────────────────────────────────────────────
          LAYER 0 — Background: exact diagonal-streak texture
      ───────────────────────────────────────────────────────── */}
      <Image
        src="/bg-diagonal.png"
        alt=""
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />

      {/* ─────────────────────────────────────────────────────────
          LAYER 1 — Bear: centered, massive, dominant
          Face centered; shoulders below viewport (intentional crop)
      ───────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: '-8vh',         /* push shoulders below viewport */
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          maxWidth: '860px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/bear-hero.png"
          alt="boAt bear mascot wearing premium headphones"
          width={860}
          height={645}
          priority
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.15))',
          }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────
          LAYER 2 — Red slash accents (framing, not overlapping)
          Upper-left  |  Upper-right  |  Right-edge  |  Left-edge
      ───────────────────────────────────────────────────────── */}

      {/* Upper-left slashes (small, subtle) */}
      <div
        style={{
          position: 'absolute',
          top: '14vh',
          left: '2vw',
          width: '9vw',
          maxWidth: '120px',
          opacity: 0.9,
          zIndex: 3,
          pointerEvents: 'none',
          transform: 'scaleX(-1)',   /* mirror for left-side feel */
        }}
      >
        <Image src="/red-slashes.png" alt="" width={240} height={220}
          style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Left-edge mid slashes */}
      <div
        style={{
          position: 'absolute',
          top: '38vh',
          left: '-1vw',
          width: '7vw',
          maxWidth: '90px',
          opacity: 0.7,
          zIndex: 3,
          pointerEvents: 'none',
          transform: 'scaleX(-1) scale(0.7)',
        }}
      >
        <Image src="/red-slashes.png" alt="" width={180} height={165}
          style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Upper-right slashes (prominent, matches reference) */}
      <div
        style={{
          position: 'absolute',
          top: '10vh',
          right: '2vw',
          width: '13vw',
          maxWidth: '180px',
          opacity: 1,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        <Image src="/red-slashes.png" alt="" width={360} height={330}
          style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Right-edge mid slashes */}
      <div
        style={{
          position: 'absolute',
          top: '38vh',
          right: '-1vw',
          width: '8vw',
          maxWidth: '100px',
          opacity: 0.75,
          zIndex: 3,
          pointerEvents: 'none',
          transform: 'scale(0.75)',
        }}
      >
        <Image src="/red-slashes.png" alt="" width={200} height={185}
          style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Bottom-right slashes */}
      <div
        style={{
          position: 'absolute',
          bottom: '12vh',
          right: '3vw',
          width: '8vw',
          maxWidth: '100px',
          opacity: 0.65,
          zIndex: 3,
          pointerEvents: 'none',
          transform: 'scale(0.6) rotate(10deg)',
        }}
      >
        <Image src="/red-slashes.png" alt="" width={200} height={185}
          style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Bottom-left slashes */}
      <div
        style={{
          position: 'absolute',
          bottom: '12vh',
          left: '3vw',
          width: '8vw',
          maxWidth: '100px',
          opacity: 0.65,
          zIndex: 3,
          pointerEvents: 'none',
          transform: 'scaleX(-1) scale(0.6) rotate(10deg)',
        }}
      >
        <Image src="/red-slashes.png" alt="" width={200} height={185}
          style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* ─────────────────────────────────────────────────────────
          LAYER 3 — Bottom gradient: readability veil over bear's body
      ───────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '32vh',
          background:
            'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 40%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      {/* ─────────────────────────────────────────────────────────
          LAYER 4 — Hero Text Block (top center, above bear)
      ───────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: '10vh',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          textAlign: 'center',
          width: '100%',
          padding: '0 24px',
          pointerEvents: 'none',
        }}
      >
        {/* Primary heading */}
        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
            fontWeight: 900,
            fontStyle: 'normal',
            letterSpacing: '-2.5px',
            lineHeight: 1.0,
            color: '#0d0d0d',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          I am a{' '}
          <span
            style={{
              color: '#E31E24',
              fontStyle: 'italic',
            }}
          >
            boAt
          </span>
          head.
        </h1>

        {/* Secondary heading */}
        <p
          style={{
            marginTop: '18px',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#4a4a4a',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          WELCOME TO THE boAt WARRANTY HUB
        </p>

        {/* Tagline with red rule lines */}
        <div
          style={{
            marginTop: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '1.5px',
              background: '#E31E24',
              flexShrink: 0,
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: '0.78rem',
              fontWeight: 300,
              color: '#555',
              letterSpacing: '0.3px',
              fontFamily: "'Inter', sans-serif",
              whiteSpace: 'nowrap',
            }}
          >
            Your product.&nbsp; Our promise.&nbsp; Always covered.
          </p>
          <div
            style={{
              width: '30px',
              height: '1.5px',
              background: '#E31E24',
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          LAYER 5 — Bottom Feature Row (over gradient, white text)
      ───────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            width: '100%',
            maxWidth: '860px',
            padding: '0 24px',
          }}
        >
          {[
            {
              icon: (
                /* Shield outline */
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Secure & Reliable',
              desc: 'Your data is safe with us.',
            },
            {
              icon: (
                /* Headset outline */
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 18v-6a9 9 0 0118 0v6"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              title: '24/7 Support',
              desc: 'Assistance whenever you need it.',
            },
            {
              icon: (
                /* Check-circle outline */
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              title: 'Hassle Free Process',
              desc: 'Simple and transparent.',
            },
          ].map(({ icon, title, desc }, i, arr) => (
            <div
              key={title}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '22px 32px',
                borderRight:
                  i < arr.length - 1
                    ? '1px solid rgba(255,255,255,0.12)'
                    : 'none',
              }}
            >
              <div style={{ flexShrink: 0 }}>{icon}</div>
              <div>
                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.96)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-0.2px',
                    marginBottom: '3px',
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.58)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.1px',
                  }}
                >
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
