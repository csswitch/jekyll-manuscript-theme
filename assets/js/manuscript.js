// Manuscript — Main JS
// Mobile nav, reading time, copy buttons, active nav
(function () {
  'use strict';

  // ── Mobile nav ──────────────────────────────────────────────────────────
  const toggle = document.querySelector('.ms-nav__toggle');
  const links = document.querySelector('.ms-nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!links.contains(e.target) && !toggle.contains(e.target)) links.classList.remove('open');
    });
  }

  // ── Active nav ───────────────────────────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.ms-nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path.startsWith(href) && href !== '/')) a.classList.add('active');
  });

  // ── Reading time ─────────────────────────────────────────────────────────
  const body = document.querySelector('.post-body');
  const rtEl = document.getElementById('reading-time');
  if (body && rtEl) {
    const words = body.textContent.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.round(words / 225));
    rtEl.textContent = mins + ' min read';
  }

  // ── Copy code ─────────────────────────────────────────────────────────────
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.style.cssText = [
      'position:absolute', 'top:10px', 'right:12px',
      'font-family:"IBM Plex Mono",monospace', 'font-size:0.6rem',
      'background:rgba(139,26,26,0.15)', 'color:#c44040',
      'border:1px solid rgba(139,26,26,0.3)', 'border-radius:2px',
      'padding:0.2rem 0.5rem', 'cursor:pointer'
    ].join(';');
    pre.style.position = 'relative';
    pre.appendChild(btn);
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
        btn.textContent = 'Copied';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
})();
