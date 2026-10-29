'use client';

import { useEffect } from 'react';

// All motion is timer or IntersectionObserver driven. No scroll listeners, so scrolling stays native.
export function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shell = document.querySelector('.shell');
    const frame = requestAnimationFrame(() => shell?.classList.add('loaded'));
    const timers: number[] = [];
    const observers: IntersectionObserver[] = [];

    // Rotating hero word
    const words = Array.from(document.querySelectorAll<HTMLElement>('#swap i'));
    let idx = 0;
    if (!reduce && words.length > 1) {
      timers.push(
        window.setInterval(() => {
          const cur = words[idx];
          idx = (idx + 1) % words.length;
          const nxt = words[idx];
          cur.classList.remove('on');
          cur.classList.add('off');
          nxt.classList.remove('off');
          nxt.classList.add('on');
          window.setTimeout(() => cur.classList.remove('off'), 500);
        }, 2200),
      );
    }

    // Count-up numbers, run once when visible
    const runCount = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (reduce || Number.isNaN(target)) {
        el.textContent = String(target);
        return;
      }
      const duration = 900;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) ** 3;
        el.textContent = String(Math.round(target * eased));
        if (t < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    // One-time reveals
    const revealEls = document.querySelectorAll<HTMLElement>('.rv');
    const countEls = document.querySelectorAll<HTMLElement>('[data-count]');
    if (!('IntersectionObserver' in window) || reduce) {
      revealEls.forEach((el) => el.classList.add('in'));
      countEls.forEach((el) => {
        el.textContent = el.dataset.count ?? '';
      });
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) {
              return;
            }
            const el = e.target as HTMLElement;
            if (el.dataset.count) {
              runCount(el);
            } else {
              el.classList.add('in');
            }
            io.unobserve(el);
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
      );
      revealEls.forEach((el) => io.observe(el));
      countEls.forEach((el) => {
        el.textContent = '0';
        io.observe(el);
      });
      observers.push(io);

      // Nav active state
      const links = new Map<string, HTMLElement>();
      document.querySelectorAll<HTMLAnchorElement>('.side-nav a').forEach((a) => {
        links.set(a.getAttribute('href')!.slice(1), a);
      });
      const navIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const link = links.get(e.target.id);
            if (e.isIntersecting && link) {
              links.forEach((l) => l.classList.remove('active'));
              link.classList.add('active');
            }
          });
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      links.forEach((_, id) => {
        const section = document.getElementById(id);
        if (section) {
          navIO.observe(section);
        }
      });
      observers.push(navIO);
    }

    // Dallas clock
    const clock = document.getElementById('clock');
    const tick = () => {
      if (clock) {
        clock.textContent = `· ${new Date().toLocaleTimeString('en-US', {
          timeZone: 'America/Chicago',
          hour: 'numeric',
          minute: '2-digit',
        })}`;
      }
    };
    tick();
    timers.push(window.setInterval(tick, 30000));

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach((t) => window.clearInterval(t));
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
