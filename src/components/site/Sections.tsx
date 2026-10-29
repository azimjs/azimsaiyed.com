import {
  CASES,
  EDUCATION,
  FOCUS_MARQUEE,
  HERO_WORDS,
  IMPACT,
  NAV,
  PILLARS,
  PRINCIPLES,
  PROFILE,
  ROLES,
  STACK_MARQUEE,
  type CaseStudy,
  type PillarIcon,
} from '@/lib/site-content';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

function Arrow() {
  return <span className="arr">&rarr;</span>;
}

export function Aside() {
  return (
    <aside className="aside" aria-label="Profile">
      <div className="aside-top">
        <a href="#top" className="me" aria-label={`${PROFILE.name} home`}>
          <span className="mark">AS</span>
          <span>
            <b>{PROFILE.name}</b>
            <small>{PROFILE.role}</small>
          </span>
        </a>
      </div>

      <div className="leading">
        <span>Leading Growth Engineering at</span>
        <a href={PROFILE.collective} {...ext} aria-label="Collective">
          <img src="/logos/collective-black.svg" alt="Collective" width={112} height={28} />
        </a>
      </div>

      <div className="big-stat">
        <div className="v">
          10<span>+</span>
        </div>
        <div className="l">years building in fintech and SaaS</div>
      </div>

      <nav className="side-nav" aria-label="Primary">
        {NAV.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label} <i>{item.key}</i>
          </a>
        ))}
      </nav>

      <div className="side-foot">
        <span className="status">
          <span className="pulse" />
          {PROFILE.location} <span id="clock" />
        </span>
        <a className="side-mail" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <div className="side-links">
          <a href={PROFILE.linkedin} {...ext}>
            LinkedIn &#8599;
          </a>
          <a href={PROFILE.github} {...ext}>
            GitHub &#8599;
          </a>
        </div>
      </div>
    </aside>
  );
}

function Marquee({ items, alt }: { items: string[]; alt?: boolean }) {
  return (
    <div className={alt ? 'marquee alt' : 'marquee'} aria-hidden="true">
      <div className="track">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="kicker">10+ years &#183; Eng x Product x Growth</span>
        <h1 className="headline" aria-label="I build engines that make products grow.">
          <span className="line">
            <span>I build engines</span>
          </span>
          <span className="line">
            <span>
              that make <span className="serif">products</span>
            </span>
          </span>
          <span className="line">
            <span>
              <span className="swap" id="swap">
                {HERO_WORDS.map((word, i) => (
                  <i key={word} className={i === 0 ? 'on' : undefined}>
                    {word}
                  </i>
                ))}
              </span>
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-lede rv">
            I&apos;m <strong>{PROFILE.name}</strong>, Growth Engineering Manager at <strong>Collective</strong>, the back
            office for solopreneurs. My team turns experiments, funnels, and data into <strong>members who stay</strong>.
          </p>
          <div className="hero-ctas rv d1">
            <a href="#work" className="btn btn-accent">
              See the work <Arrow />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="portrait rv d2">
            <img src="/profile-thumbnail.jpg" alt={`Portrait of ${PROFILE.name}`} width={230} height={288} />
          </div>
        </div>
      </div>

      <Marquee items={FOCUS_MARQUEE} />
      <Marquee items={STACK_MARQUEE} alt />
    </section>
  );
}

function SectionHead({ num, fill, eyebrow, children, sub }: {
  num: string;
  fill?: boolean;
  eyebrow: string;
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="sec-head">
      <div className={fill ? 'num fill rv' : 'num rv'}>{num}</div>
      <div className="rv d1">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="h2">{children}</h2>
        {sub && <p className="sub">{sub}</p>}
      </div>
    </div>
  );
}

const ICONS: Record<PillarIcon, React.ReactNode> = {
  flask: (
    <>
      <path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3" />
      <path d="M7 15h10" />
    </>
  ),
  funnel: <path d="M3 4h18l-7 8v6l-4 2v-8z" />,
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 6-7" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M16 14.2c2.9-.3 5 1.9 5 4.8" />
    </>
  ),
};

export function WhatIDo() {
  return (
    <section className="sec" id="do">
      <div className="wrap">
        <SectionHead num="01" eyebrow="What I do">
          Where engineering meets <span className="serif accent">growth.</span>
        </SectionHead>
        <div className="do-grid">
          {PILLARS.map((p, i) => (
            <article key={p.key} className={i % 2 ? 'do rv d1' : 'do rv'}>
              <div className="top">
                <div className="ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[p.icon]}
                  </svg>
                </div>
                <span className="k">{p.key}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <ul>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ metric, accent }: { metric: CaseStudy['metric']; accent: boolean }) {
  return (
    <div className={accent ? 'metric ac' : 'metric'}>
      {metric.count === undefined ? (
        metric.value
      ) : (
        <>
          {metric.prefix}
          <span data-count={metric.count}>{metric.count}</span>
          {metric.suffix}
        </>
      )}
      <small>{metric.label}</small>
    </div>
  );
}

export function Work() {
  return (
    <section className="sec" id="work">
      <div className="wrap">
        <SectionHead num="02" fill eyebrow="Selected work" sub="Growth bets at Collective, plus the infrastructure work that got me here.">
          Case studies, <span className="serif">not</span> slogans.
        </SectionHead>
        <div className="cases">
          {CASES.map((c, i) => {
            const classes = ['case', c.variant, c.wide && 'wide', 'rv', i % 2 && 'd1'].filter(Boolean).join(' ');
            return (
              <article key={c.title} className={classes}>
                <div>
                  <div className="case-top">
                    <span className="co">
                      {c.logo ? (
                        <img src={c.logo} alt={c.company} width={88} height={22} />
                      ) : (
                        <>
                          {c.icon && <img className="co-icon" src={c.icon} alt="" width={22} height={22} />}
                          {c.company}
                        </>
                      )}
                    </span>
                    <span className="pill">{c.pill}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <div className="tags">
                    {c.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <Metric metric={c.metric} accent={!c.variant || c.variant === 'tint'} />
              </article>
            );
          })}
          <article className="case case-cta wide rv">
            <div>
              <h3>Want the full story?</h3>
              <p>Happy to walk through any of these over coffee or a call.</p>
            </div>
            <a href="#contact" className="btn btn-accent">
              Let&apos;s talk <Arrow />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section className="sec" id="impact">
      <div className="wrap">
        <div className="eyebrow rv">Impact, in numbers</div>
        <div className="bento">
          {IMPACT.map((tile, i) => {
            const classes = ['tile', tile.size, tile.tint && 'tint', 'rv', i % 2 ? 'd1' : i > 0 && 'd2'].filter(Boolean).join(' ');
            return (
              <div key={tile.label} className={classes}>
                <span className="tag">{tile.tag}</span>
                <div>
                  <div className="v">
                    {tile.prefix}
                    <span data-count={tile.count}>{tile.count}</span>
                    <em>{tile.suffix}</em>
                  </div>
                  <div className="l">{tile.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Lead() {
  return (
    <section className="sec" id="lead">
      <div className="wrap">
        <SectionHead num="03" eyebrow="How I lead">
          Small team. <span className="serif accent">Big</span> surface area.
        </SectionHead>
        <ol className="lead-list">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="lead-item rv">
              <span className="n">P/0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Career() {
  return (
    <section className="sec" id="career">
      <div className="wrap">
        <SectionHead num="04" eyebrow="Career">
          10+ years, <span className="serif accent">one</span> through-line.
        </SectionHead>
        <div className="tl">
          {ROLES.map((r) => (
            <div key={r.company} className={r.now ? 'role now rv' : 'role rv'}>
              <span className="logo-chip">
                <img src={r.logo} alt={`${r.company} logo`} width={32} height={32} />
              </span>
              <div className="yr">{r.years}</div>
              <div className="who">
                <h3>
                  {r.company}
                  {r.now && <span className="badge">Now</span>}
                </h3>
                {r.steps ? (
                  <ol className="steps">
                    {r.steps.map((s) => (
                      <li key={s.title} className={s.current ? 'current' : undefined}>
                        <b>{s.title}</b>
                        <span>{s.years}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div className="t">
                    {r.title}
                    {r.location && (
                      <>
                        {' '}
                        <span>&#183;</span> {r.location}
                      </>
                    )}
                  </div>
                )}
              </div>
              <ul>
                {r.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="edu">
          {EDUCATION.map((e, i) => (
            <div key={e.degree} className={i ? 'rv d1' : 'rv'}>
              <span className="logo-chip">
                <img src={e.logo} alt={`${e.school} logo`} width={32} height={32} />
              </span>
              <span>
                <b>{e.degree}</b>
                <span>{e.school}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="eyebrow rv">05 / Contact</div>
      <h2 className="mega rv d1">
        Let&apos;s build
        <br />
        something that <span className="serif">grows.</span>
      </h2>
      <a className="mail rv d2" href={`mailto:${PROFILE.email}`}>
        {PROFILE.email}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
      <div className="socials rv d3">
        <a href={PROFILE.linkedin} {...ext}>
          LinkedIn &#8599;
        </a>
        <a href={PROFILE.github} {...ext}>
          GitHub &#8599;
        </a>
        <a href={PROFILE.collective} {...ext}>
          Collective &#8599;
        </a>
      </div>
      <div className="foot">
        <span>&#169; {new Date().getFullYear()} {PROFILE.name}</span>
        <span>{PROFILE.location}</span>
        <a href="#top">Back to top &#8593;</a>
      </div>
    </section>
  );
}
