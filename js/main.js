(function () {
  var S = window.SITE, P = S.profile;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Accent theme ---------- */
  function setAccent(a) {
    document.documentElement.setAttribute("data-accent", a);
    $$(".accent-picker button").forEach(function (b) { b.classList.toggle("on", b.dataset.accent === a); });
    try { localStorage.setItem("accent", a); } catch (e) {}
  }
  var saved = "emerald"; try { saved = localStorage.getItem("accent") || "emerald"; } catch (e) {}
  setAccent(saved);
  $$(".accent-picker button").forEach(function (b) { b.addEventListener("click", function () { setAccent(b.dataset.accent); }); });

  /* ---------- Basic fill ---------- */
  document.title = P.name + " | " + P.title;
  $("#heroName").textContent = P.name;
  $("#heroIntro").textContent = S.intro;
  $("#aLoc").textContent = P.location;
  $("#year").textContent = new Date().getFullYear();
  $("#cvTop").href = P.cv; $("#cvHero").href = P.cv;
  if (!P.openToWork) $("#openBadge").style.display = "none";
  $("#aboutText").innerHTML = S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("#avatarInitials").textContent = P.initials;
  if (P.photo) {
    var im = new Image(); im.alt = P.name; im.onload = function () { $("#avatar").innerHTML = ""; $("#avatar").appendChild(im); }; im.src = P.photo;
  }

  var ICONS = {
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.54h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.6 7H19.4L12 12.2zM4 9.1V17h16V9.1l-8 5.6-8-5.6z"/></svg>',
    behance: '<svg viewBox="0 0 24 24"><path d="M7.8 11.2c1-.5 1.6-1.4 1.6-2.7C9.4 6 7.6 5.5 5.6 5.5H0v13h6c2.1 0 4.2-1 4.2-3.6 0-1.6-.9-2.9-2.4-3.7zM3 7.8h2.3c.9 0 1.6.4 1.6 1.4 0 1-.8 1.4-1.7 1.4H3zm2.6 8.4H3v-3.3h2.8c1.1 0 1.9.5 1.9 1.7 0 1.2-.9 1.6-2.1 1.6zM19 8.2c-3 0-4.8 2-4.8 4.9 0 3 1.7 4.9 4.8 4.9 2.3 0 3.8-1.1 4.4-3.3h-2.3c-.2.6-.9 1.2-2 1.2-1.4 0-2.2-.8-2.3-2.4H24c.2-3.3-1.5-5.3-5-5.3zm-2.2 4c.1-1.2.9-2 2.1-2 1.2 0 1.9.8 2 2zM15.5 6h5.4v1.5h-5.4z"/></svg>'
  };
  var socials = [];
  if (P.github) socials.push(["GitHub", P.github, ICONS.github]);
  if (P.linkedin) socials.push(["LinkedIn", P.linkedin, ICONS.linkedin]);
  if (P.behance) socials.push(["Behance", P.behance, ICONS.behance]);
  socials.push(["Email", "mailto:" + P.email, ICONS.mail]);
  $("#socials").innerHTML = socials.map(function (s) { return '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' + s[2] + "</a></li>"; }).join("");

  /* ---------- Stats (count up) ---------- */
  var certCount = S.certificates.length;
  $("#stats").innerHTML = S.stats.map(function (s) {
    return '<div class="stat"><b data-v="' + s.value + '" data-s="' + esc(s.suffix) + '">0' + esc(s.suffix) + "</b><span>" + esc(s.label) + "</span></div>";
  }).join("");
  function countUp(el) {
    var v = +el.dataset.v, s = el.dataset.s, t0 = null;
    if (reduce) { el.textContent = v + s; return; }
    (function step(t) { t0 = t0 || t; var p = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(v * (1 - Math.pow(1 - p, 3))) + s; if (p < 1) requestAnimationFrame(step); })(performance.now());
  }

  /* ---------- Timeline ---------- */
  $("#timeline").innerHTML = S.timeline.map(function (t) {
    return '<li class="tl rv' + (t.education ? " edu" : "") + '"><span class="when">' + esc(t.period) + "</span><h4>" + esc(t.role) + '</h4><div class="org">' + esc(t.org) + " · " + esc(t.place) + "</div>" +
      (t.points && t.points.length ? "<ul>" + t.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") + "</li>";
  }).join("");

  /* ---------- Expertise ---------- */
  var SVG = {
    network: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12l-6 5M12 12l6 5"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
    code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-1-.9-1.4-.9-2.3 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.5 17 3 12 3z"/><path d="M7.5 11h.01M10 7.5h.01M14.5 7.5h.01"/>'
  };
  $("#expertiseCards").innerHTML = S.expertise.map(function (c) {
    return '<article class="card rv"><div class="ic"><svg viewBox="0 0 24 24">' + (SVG[c.icon] || SVG.code) + "</svg></div><h3>" + esc(c.title) + "</h3><p>" + esc(c.text) + '</p><div class="tags">' + c.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></article>";
  }).join("");
  $("#tools").innerHTML = S.tools.map(function (g) {
    return '<div class="tool-group rv"><h4>' + esc(g.group) + '</h4><div class="tags">' + g.items.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></div>";
  }).join("");

  /* ---------- Filters helper ---------- */
  function filters(el, keys, labels, onPick) {
    el.innerHTML = ["all"].concat(keys).map(function (k, i) { return '<button class="chip' + (i === 0 ? " on" : "") + '" data-k="' + esc(k) + '">' + esc(k === "all" ? "All" : (labels[k] || k)) + "</button>"; }).join("");
    el.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", el).forEach(function (c) { c.classList.toggle("on", c === b); });
      onPick(b.dataset.k);
    });
  }
  var uniq = function (a) { return a.filter(function (v, i) { return v && a.indexOf(v) === i; }); };

  /* ---------- Projects ---------- */
  var catLabels = { networking: "Networking", security: "Security", development: "Development", systems: "Systems", design: "Design" };
  function renderProjects(cat) {
    var list = S.projects.filter(function (p) { return cat === "all" || p.category === cat; });
    $("#projGrid").innerHTML = list.length ? list.map(function (p, i) {
      return '<article class="proj rv in"><div class="proj-top"><b>#' + String(i + 1).padStart(2, "0") + " · " + esc(catLabels[p.category] || p.category) + '</b><span class="pill">' + esc(p.status) + "</span></div><h3>" + esc(p.title) + '</h3><p class="prob">' + esc(p.problem) + '</p><p class="d">' + esc(p.text) + '</p><div class="tags">' + (p.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div>" +
        ((p.links && p.links.length) ? '<div class="links">' + p.links.map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>"; }).join("") + "</div>" : "") + "</article>";
    }).join("") : '<div class="empty"><b>No projects here yet</b>Add one in <code>data/content.js</code></div>';
  }
  filters($("#projFilters"), uniq(S.projects.map(function (p) { return p.category; })), catLabels, renderProjects);
  renderProjects("all");

  /* ---------- Design gallery ---------- */
  var g = $("#gallery");
  if (S.designs.length) {
    g.innerHTML = S.designs.map(function (d) {
      return '<figure class="art rv" data-src="' + esc(d.image) + '"><img loading="lazy" src="' + esc(d.image) + '" alt="' + esc(d.title) + '"><figcaption><small>' + esc(d.type || "") + "</small>" + esc(d.title) + "</figcaption></figure>";
    }).join("");
  } else {
    g.innerHTML = '<div class="empty"><b>Design gallery coming soon</b>Drop your posters, logos and social graphics into <code>assets/designs/</code> and list them in <code>data/content.js</code>.</div>';
  }
  var lb = $("#lightbox");
  document.addEventListener("click", function (e) {
    var a = e.target.closest(".art"), c = e.target.closest(".cert img");
    if (a || c) { lb.querySelector("img").src = a ? a.dataset.src : c.src; lb.hidden = false; }
    else if (e.target.closest("#lightbox")) lb.hidden = true;
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.hidden = true; });

  /* ---------- Certificates ---------- */
  var typeLabels = { certification: "Certifications", course: "Short courses" };
  function renderCerts(t) {
    var list = S.certificates.filter(function (c) { return t === "all" || c.type === t; });
    $("#certGrid").innerHTML = list.map(function (c) {
      var ong = /ongoing/i.test(c.status);
      return '<article class="cert rv in"><div class="meta"><span>' + esc(c.type === "course" ? "COURSE" : "CERTIFICATION") + '</span><span class="st' + (ong ? " ongoing" : "") + '">' + (ong ? "◐ " : "✓ ") + esc(c.status) + (c.year ? " · " + esc(c.year) : "") + "</span></div><h3>" + esc(c.title) + '</h3><div class="iss">' + esc(c.issuer) + "</div>" +
        (c.image ? '<img loading="lazy" src="' + esc(c.image) + '" alt="' + esc(c.title) + ' certificate">' : "") +
        (c.link ? '<a class="view" href="' + esc(c.link) + '" target="_blank" rel="noopener">View credential ↗</a>' : "") + "</article>";
    }).join("");
  }
  filters($("#certFilters"), uniq(S.certificates.map(function (c) { return c.type; })), typeLabels, renderCerts);
  renderCerts("all");

  /* ---------- Contact ---------- */
  var cl = [["Email", P.email, "mailto:" + P.email], ["Phone", P.phone, "tel:" + P.phone.replace(/\s/g, "")], ["LinkedIn", "teresia-kemunto", P.linkedin]];
  if (P.github) cl.push(["GitHub", P.github.replace(/^https?:\/\//, ""), P.github]);
  $("#contactList").innerHTML = cl.map(function (c) { return '<li><a href="' + esc(c[2]) + '"' + (c[2].indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + "><div><small>" + c[0] + "</small>" + esc(c[1]) + "</div></a></li>"; }).join("");

  $("#form").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, m = $("#formMsg"), d = new FormData(f);
    if (!d.get("name") || !/\S+@\S+\.\S+/.test(d.get("email")) || !d.get("message")) { m.className = "form-msg err"; m.textContent = "Please fill in your name, a valid email and a message."; return; }
    if (P.formEndpoint) {
      m.className = "form-msg"; m.textContent = "Sending…";
      fetch(P.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw 0; m.className = "form-msg ok"; m.textContent = "Thank you. Your message has been sent."; f.reset(); })
        .catch(function () { m.className = "form-msg err"; m.textContent = "Couldn't send. Please email me directly at " + P.email; });
    } else {
      var body = d.get("message") + "\n\n— " + d.get("name") + " (" + d.get("email") + ")";
      location.href = "mailto:" + P.email + "?subject=" + encodeURIComponent(d.get("subject") + " — " + d.get("name")) + "&body=" + encodeURIComponent(body);
      m.className = "form-msg ok"; m.textContent = "Opening your email app…";
    }
  });

  /* ---------- Nav ---------- */
  var nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", scrollY > 10); }, { passive: true });
  burger.addEventListener("click", function () { var o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

  var links = $$("#menu a");
  var spy = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); }); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(function (s) { spy.observe(s); });

  /* ---------- Reveal + counters ---------- */
  var rvObs = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); rvObs.unobserve(en.target); } }); }, { threshold: .12 });
  $$(".rv").forEach(function (el) { rvObs.observe(el); });
  var cObs = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { $$("b", en.target).forEach(countUp); cObs.disconnect(); } }); }, { threshold: .4 });
  cObs.observe($("#stats"));

  /* ---------- Role typewriter ---------- */
  var rt = $("#roleType"), ri = 0, ci = 0, del = false;
  (function tick() {
    var w = P.roles[ri];
    if (reduce) { rt.textContent = P.title; return; }
    rt.textContent = "> " + w.slice(0, ci);
    if (!del && ci === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && ci === 0) { del = false; ri = (ri + 1) % P.roles.length; }
    ci += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 75);
  })();

  /* ---------- Simulated NOC panel ---------- */
  var term = $("#term"), nodesEl = $("#nodes");
  var lines = [
    ['<span class="p">$</span> whoami', ""],
    ['<span class="ok">teresia.omae</span> · ' + esc(P.title), ""],
    ['<span class="p">$</span> noc --monitor --sites 50+', ""],
    ['<span class="dim">[poll]</span> 50 distribution points reachable', "ok"],
    ['<span class="warn">[warn]</span> node 23 latency spike, escalating', ""],
    ['<span class="ok">[ok]</span> LAN/WAN fault isolated, service restored', ""],
    ['<span class="p">$</span> status --open-to-work', ""],
    ['<span class="ok">ready</span> for the next incident<span class="caret">_</span>', ""]
  ];
  for (var n = 0; n < 48; n++) nodesEl.appendChild(document.createElement("i"));
  var nodeEls = $$("i", nodesEl);
  function printLines() {
    var i = 0; term.innerHTML = "";
    (function next() {
      if (i >= lines.length) return;
      var d = document.createElement("div"); d.innerHTML = lines[i][0]; term.appendChild(d); i++;
      setTimeout(next, reduce ? 0 : 650);
    })();
  }
  printLines();

  var series = []; for (var k = 0; k < 40; k++) series.push(22 + Math.random() * 10);
  function draw() {
    var w = 300, h = 70, max = 60, pts = series.map(function (v, i) { return [i / (series.length - 1) * w, h - (v / max) * h]; });
    var d = pts.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ");
    $("#sparkLine").setAttribute("d", d);
    $("#sparkFill").setAttribute("d", d + " L" + w + " " + h + " L0 " + h + " Z");
    $("#latNow").textContent = Math.round(series[series.length - 1]) + " ms";
  }
  draw();
  if (!reduce) {
    setInterval(function () {
      var spike = Math.random() < .08;
      series.push(spike ? 45 + Math.random() * 10 : 20 + Math.random() * 12); series.shift(); draw();
      var el = nodeEls[Math.floor(Math.random() * nodeEls.length)];
      if (spike) { el.classList.add("down"); setTimeout(function () { el.classList.remove("down"); }, 1800); }
    }, 900);
  }
})();
