// Shared header, footer and small interactions for the concept site.
(function () {
  const IMG = "https://stjohn.ny.goarch.org/assets/images/";
  window.SJ_IMG = IMG;

  const pages = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["worship.html", "Worship & Visit"],
    ["gallery.html", "Iconography"],
    ["news.html", "News & Events"],
  ];
  const here = (location.pathname.split("/").pop() || "index.html");

  const icon = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.5V11H7v4h3v6h4v-6h3l1-4h-4V8.6c0-.4.3-.6.6-.6z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8zM10 15V9l5.2 3z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2.3 1.7 3.8 4 4v3.2a7.4 7.4 0 0 1-4-1.2v6.3A5.7 5.7 0 1 1 10.8 9.6v3.3a2.5 2.5 0 1 0 2.5 2.5V3z"/></svg>',
  };
  window.SJ_ICON = icon;

  const brand = `
    <a class="brand" href="index.html" aria-label="St. John the Baptist — home">
      <span class="brand-mark">☩</span>
      <span class="brand-text"><strong>St. John the Baptist</strong><small>Greek Orthodox Church · NYC</small></span>
    </a>`;

  const header = `
    <div class="topbar"><div class="wrap">
      <span>143 East 17th Street, New York, NY <span class="hide-sm">· Gramercy</span></span>
      <span><a href="tel:+12124730648">(212) 473-0648</a><span class="hide-sm"> · Sunday Liturgy 10:00 AM</span></span>
    </div></div>
    <header class="site-header"><div class="wrap">
      ${brand}
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
      <nav class="nav" aria-label="Main">
        ${pages.map(([href, label]) => `<a class="link${href === here ? " active" : ""}" href="${href}">${label}</a>`).join("")}
        <a class="btn btn-wine" href="support.html">Give</a>
      </nav>
    </div></header>`;

  const newsletter = `
    <div class="newsletter"><div class="wrap">
      <div>
        <p class="eyebrow">Stay connected</p>
        <h3>The weekly parish letter</h3>
        <p style="color:var(--ink-soft);margin-top:6px">Service times, readings, and parish news, once a week. Read the <a href="https://www.bulletinbuilder.org/stjohnbaptistgramercy/current">current bulletin</a> now.</p>
      </div>
      <form class="nl-form" onsubmit="event.preventDefault();const e=this.querySelector('input').value;location.href='mailto:saintjohn.churchnyc@gmail.com?subject='+encodeURIComponent('Please add me to the parish email list')+'&body='+encodeURIComponent('Please add '+e+' to the St. John the Baptist parish email list. Thank you!');">
        <input type="email" required placeholder="Your email address" aria-label="Email address">
        <button class="btn btn-wine" type="submit">Subscribe</button>
      </form>
    </div></div>`;

  const footer = `
    <footer class="site-footer">
      <div class="wrap">
        <div>
          ${brand}
          <p>A parish of the Greek Orthodox Archdiocese of America, Direct Archdiocesan District.</p>
          <div style="display:flex;gap:14px;margin-top:18px">
            <a href="https://www.facebook.com/StJohnBaptistGramercy/" aria-label="Facebook" style="width:20px">${icon.fb}</a>
          </div>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>143 East 17th Street<br>New York, NY 10003</li>
            <li>Between Third Ave &amp; Irving Pl</li>
            <li><a href="tel:+12124730648">(212) 473-0648</a></li>
            <li><a href="mailto:saintjohn.churchnyc@gmail.com">saintjohn.churchnyc@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4>Worship</h4>
          <ul>
            <li>Sunday Orthros · 8:45 AM</li>
            <li>Divine Liturgy · 10:00 AM</li>
            <li><a href="worship.html">Full schedule</a></li>
            <li><a href="https://www.bulletinbuilder.org/stjohnbaptistgramercy/current">Weekly bulletin</a></li>
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="about.html">Our history</a></li>
            <li><a href="gallery.html">Iconography</a></li>
            <li><a href="news.html">News &amp; events</a></li>
            <li><a href="support.html">Support St. John's</a></li>
            <li><a href="support.html#preservation">Preservation Fund</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-base"><div class="wrap">
        <span>© ${new Date().getFullYear()} Saint John the Baptist Greek Orthodox Church</span>
        <span><a href="https://www.goarch.org">Greek Orthodox Archdiocese of America</a></span>
      </div></div>
    </footer>
    <div class="concept-flag">Redesign concept · not the live site</div>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", newsletter + footer);

  // External links open in a new tab
  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    if (new URL(a.href).origin !== location.origin) { a.target = "_blank"; a.rel = "noopener"; }
  });

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // Reveal on scroll
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 })
    : null;
  document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

  // Broken-image fallback: replace with a tasteful placeholder
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const d = document.createElement("div");
      d.className = "placeholder-tile";
      d.innerHTML = `<div><strong>${img.dataset.fallback}</strong>Photo to come</div>`;
      img.replaceWith(d);
    });
  });
})();
