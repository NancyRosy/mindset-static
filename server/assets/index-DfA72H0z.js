import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
const logo = "/assets/logo-CkcnHm4H.png";
const links = [
  { href: "#apropos", label: "À propos" },
  { href: "#programmes", label: "Programmes" },
  { href: "#galerie", label: "Galerie" },
  { href: "#impact", label: "Impact" },
  { href: "#localiser", label: "Nous localiser" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `mx-auto max-w-7xl px-5 lg:px-8 transition-all duration-500 ${scrolled ? "glass-dark rounded-2xl" : ""}`,
          style: scrolled ? { marginLeft: "1rem", marginRight: "1rem" } : {},
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3 group", children: [
                /* @__PURE__ */ jsx("img", { src: logo, alt: "Mindset Univers", className: "h-10 w-10 object-contain drop-shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-transform group-hover:scale-110" }),
                /* @__PURE__ */ jsxs("div", { className: "leading-none", children: [
                  /* @__PURE__ */ jsx("div", { className: `font-display text-lg font-bold tracking-tight ${scrolled ? "text-white" : "text-white"}`, children: "Mindset Univers" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-gold-light/80", children: "Reprogramme ton cerveau" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-8", children: [
                links.map((l) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: l.href,
                    className: "text-sm text-white/85 hover:text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-fire after:transition-all hover:after:w-full",
                    children: l.label
                  },
                  l.href
                )),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "ml-2 inline-flex items-center justify-center rounded-full bg-fire px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform",
                    children: "Rejoindre"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  "aria-label": "Menu",
                  className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass-dark text-white",
                  onClick: () => setOpen((v) => !v),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Menu" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}` }),
                      /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}` }),
                      /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}` })
                    ] })
                  ]
                }
              )
            ] }),
            open && /* @__PURE__ */ jsxs("nav", { className: "lg:hidden mt-4 glass-dark rounded-2xl p-4 flex flex-col gap-1 animate-fade-in", children: [
              links.map((l) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "px-3 py-2.5 rounded-lg text-white/90 hover:bg-white/10 text-sm",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsx("a", { href: "#contact", onClick: () => setOpen(false), className: "mt-2 inline-flex items-center justify-center rounded-full bg-fire px-5 py-3 text-sm font-semibold text-white shadow-glow", children: "Rejoindre le mouvement" })
            ] })
          ]
        }
      )
    }
  );
}
const hero = "/assets/hero-Cmg7qf7V.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: hero,
        alt: "Jeunesse africaine inspirée et déterminée",
        className: "absolute inset-0 h-full w-full object-cover scale-110 animate-[fade-in_1.4s_ease-out]",
        width: 1920,
        height: 1080
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/60 to-navy-deep", style: { background: "linear-gradient(180deg, oklch(0.16 0.08 268 / 0.85) 0%, oklch(0.22 0.09 268 / 0.55) 40%, oklch(0.16 0.08 268 / 0.95) 100%)" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full", style: { background: "radial-gradient(circle, oklch(0.78 0.16 65 / 0.4), transparent 70%)" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full", style: { background: "radial-gradient(circle, oklch(0.58 0.21 12 / 0.45), transparent 70%)" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 noise opacity-30" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 mb-8 animate-[fade-up_0.8s_ease-out]", children: [
        /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-gold animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-gold-light", children: "Mouvement Mindset Univers" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.02] text-white animate-[fade-up_1s_ease-out]", children: [
        "Transforme ton mental.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Transforme ton avenir." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-2xl text-lg lg:text-xl text-white/80 leading-relaxed animate-[fade-up_1.2s_ease-out]", children: "Mindset Univers accompagne la jeunesse vers une nouvelle vision du succès, du leadership et de l'ambition. Une renaissance intérieure, une révolution collective." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4 animate-[fade-up_1.4s_ease-out]", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contact",
            className: "group relative inline-flex items-center justify-center gap-2 rounded-full bg-fire px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-[0_30px_80px_-10px_color-mix(in_oklab,var(--gold)_70%,transparent)]",
            children: [
              "Rejoindre le mouvement",
              /* @__PURE__ */ jsx("svg", { className: "h-4 w-4 transition-transform group-hover:translate-x-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 5l7 7-7 7" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#programmes",
            className: "inline-flex items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-base font-semibold text-white hover:bg-white/15 transition",
            children: "Découvrir nos programmes"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("dl", { className: "mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl animate-[fade-up_1.6s_ease-out]", children: [
        { v: "+500", l: "Jeunes impactés" },
        { v: "+50", l: "Ateliers" },
        { v: "+20", l: "Événements" }
      ].map((s) => /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-4", children: [
        /* @__PURE__ */ jsx("dt", { className: "font-display text-3xl sm:text-4xl text-gradient font-bold", children: s.v }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-xs sm:text-sm text-white/60 uppercase tracking-wider", children: s.l })
      ] }, s.l)) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "Défiler" }),
      /* @__PURE__ */ jsx("div", { className: "h-10 w-6 rounded-full border border-white/30 flex items-start justify-center p-1", children: /* @__PURE__ */ jsx("div", { className: "h-2 w-1 rounded-full bg-gold animate-[float_2s_ease-in-out_infinite]" }) })
    ] })
  ] });
}
const pillars = [
  {
    title: "Notre Vision",
    text: "Bâtir une génération africaine consciente, ambitieuse et libre — capable de transformer son destin et celui de son continent.",
    icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "h-6 w-6", children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "9" }),
      /* @__PURE__ */ jsx("path", { d: "M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" })
    ] })
  },
  {
    title: "Notre Mission",
    text: "Reprogrammer les mentalités à travers le coaching, la formation et l'inspiration pour libérer le potentiel de chaque jeune.",
    icon: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { d: "M12 2l2.4 6.6L21 10l-5 4.5L17.5 22 12 18 6.5 22 8 14.5 3 10l6.6-1.4L12 2z" }) })
  },
  {
    title: "Nos Valeurs",
    text: "Excellence, discipline, intégrité, audace et fraternité. Nous croyons à la puissance d'un mental forgé dans la vérité.",
    icon: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { d: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" }) })
  },
  {
    title: "Notre Impact",
    text: "Plus de 500 jeunes accompagnés, des dizaines de communautés réveillées, et un mouvement qui ne fait que commencer.",
    icon: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { d: "M3 17l6-6 4 4 8-8M14 7h7v7" }) })
  }
];
function About() {
  return /* @__PURE__ */ jsxs("section", { id: "apropos", className: "relative py-28 lg:py-40 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 h-96 w-96 rounded-full -translate-x-1/3 -translate-y-1/3", style: { background: "radial-gradient(circle, oklch(0.78 0.16 65 / 0.15), transparent 70%)" } }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold", children: "À propos" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep", children: [
          "Un mouvement né d'une ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "conviction profonde" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Mindset Univers n'est pas une organisation. C'est une révolution silencieuse — une école de la pensée qui prépare la jeunesse à conquérir sa vie, son leadership et son avenir." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "Nous croyons que tout commence par le mental. Que chaque jeune porte en lui une grandeur en sommeil. Notre rôle : la réveiller, la former, et l'envoyer changer le monde." }),
        /* @__PURE__ */ jsxs("a", { href: "#programmes", className: "mt-8 inline-flex items-center gap-2 text-navy-deep font-semibold hover:text-crimson transition", children: [
          "Découvrir notre univers",
          /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 5l7 7-7 7" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-5", children: pillars.map((p, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "reveal group relative overflow-hidden rounded-3xl bg-card p-7 shadow-luxe border border-border/60 hover:-translate-y-2 transition-all duration-500",
          style: { transitionDelay: `${i * 100}ms` },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 -top-1 h-1 bg-fire opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fire text-white shadow-glow", children: p.icon }),
            /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl font-bold text-navy-deep", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.text })
          ]
        },
        p.title
      )) })
    ] }) })
  ] });
}
const g1 = "/assets/gallery-1-kSOhcP76.jpg";
const g2 = "/assets/gallery-2-DRL92V53.jpg";
const g3 = "/assets/gallery-3-Du0Y54CY.jpg";
const g4 = "/assets/gallery-4-hca9tKgM.jpg";
const programs = [
  { title: "Leadership", desc: "Forger des leaders capables d'inspirer, décider et bâtir l'avenir avec courage.", img: g1, tag: "Programme phare" },
  { title: "Développement personnel", desc: "Une transformation intérieure profonde pour révéler la meilleure version de soi.", img: g3, tag: "Best-seller" },
  { title: "Entrepreneuriat", desc: "De l'idée à l'impact — bâtir des projets viables, audacieux et porteurs de sens.", img: g2, tag: "Bootcamp" },
  { title: "Coaching mindset", desc: "Reprogrammer les croyances limitantes et installer une mentalité de gagnant.", img: g3, tag: "1-to-1" },
  { title: "Formation jeunesse", desc: "Des modules immersifs pour préparer les jeunes aux réalités du monde moderne.", img: g2, tag: "Académie" },
  { title: "Motivation & discipline", desc: "Construire une discipline d'élite : la clé invisible derrière chaque grand succès.", img: g4, tag: "Masterclass" }
];
function Programs() {
  return /* @__PURE__ */ jsxs("section", { id: "programmes", className: "relative py-28 lg:py-40 bg-night text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 noise opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full", style: { background: "radial-gradient(circle, oklch(0.58 0.21 12 / 0.3), transparent 70%)" } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold", children: "Nos programmes" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight", children: [
          "Des parcours conçus pour ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "élever, former" }),
          " et libérer."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-white/70", children: "Chaque programme est une étape vers une nouvelle version de toi — pensée, construite et délivrée par des mentors qui croient à ton potentiel." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: programs.map((p, i) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "reveal group relative overflow-hidden rounded-3xl glass-dark hover:-translate-y-2 transition-all duration-500",
          style: { transitionDelay: `${i * 80}ms` },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
              /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" }),
              /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 inline-flex items-center rounded-full bg-fire px-3 py-1 text-[10px] uppercase tracking-wider text-white font-semibold", children: p.tag })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/70 leading-relaxed", children: p.desc }),
              /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2 text-sm font-semibold text-gold-light group-hover:gap-3 transition-all", children: [
                "En savoir plus",
                /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 5l7 7-7 7" }) })
              ] })
            ] })
          ]
        },
        p.title
      )) })
    ] })
  ] });
}
const items$1 = [
  { img: g1, label: "Conférence inspirante", span: "lg:row-span-2" },
  { img: g4, label: "Événement public" },
  { img: g2, label: "Atelier entrepreneuriat" },
  { img: hero, label: "La nouvelle génération", span: "lg:col-span-2" },
  { img: g3, label: "Mentorat individuel" }
];
function Gallery() {
  return /* @__PURE__ */ jsx("section", { id: "galerie", className: "relative py-28 lg:py-40 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold", children: "Galerie" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep", children: [
          "Des moments qui ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "changent des vies" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-md text-muted-foreground", children: "Conférences, ateliers, formations et célébrations — chaque image raconte une transformation réelle." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] lg:auto-rows-[260px] gap-4", children: items$1.map((it, i) => /* @__PURE__ */ jsxs(
      "figure",
      {
        className: `reveal group relative overflow-hidden rounded-3xl shadow-luxe ${it.span ?? ""}`,
        style: { transitionDelay: `${i * 90}ms` },
        children: [
          /* @__PURE__ */ jsx("img", { src: it.img, alt: it.label, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-90 group-hover:opacity-100 transition" }),
          /* @__PURE__ */ jsxs("figcaption", { className: "absolute bottom-4 left-5 right-5 text-white", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-gold-light", children: "Mindset Univers" }),
            /* @__PURE__ */ jsx("div", { className: "font-display text-lg lg:text-xl font-semibold", children: it.label })
          ] })
        ]
      },
      i
    )) })
  ] }) });
}
const stats = [
  { v: 500, suffix: "+", l: "Jeunes impactés", icon: "M16 11a4 4 0 10-8 0 4 4 0 008 0zM3 21a9 9 0 0118 0" },
  { v: 50, suffix: "+", l: "Ateliers réalisés", icon: "M4 6h16M4 12h16M4 18h10" },
  { v: 20, suffix: "+", l: "Événements organisés", icon: "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" },
  { v: 100, suffix: "+", l: "Accompagnements", icon: "M12 2l2 7h7l-5.5 4.5L17 21l-5-4-5 4 1.5-7.5L3 9h7z" }
];
function Counter({ to, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function Impact() {
  return /* @__PURE__ */ jsxs("section", { id: "impact", className: "relative py-28 lg:py-40 bg-night text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 noise opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full", style: { background: "radial-gradient(ellipse, oklch(0.78 0.16 65 / 0.2), transparent 70%)" } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold reveal", children: "Notre impact" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight reveal", children: [
        "Des chiffres. ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Des vies. Une mission." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl mx-auto text-white/70 reveal", children: "Derrière chaque chiffre, il y a un visage, une histoire, une renaissance." }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "reveal group relative overflow-hidden rounded-3xl glass-dark p-8 hover:-translate-y-2 transition",
          style: { transitionDelay: `${i * 100}ms` },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition", style: { background: "radial-gradient(circle at 50% 0%, oklch(0.78 0.16 65 / 0.25), transparent 60%)" } }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-fire shadow-glow", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "h-7 w-7 text-white", children: /* @__PURE__ */ jsx("path", { d: s.icon }) }) }),
              /* @__PURE__ */ jsx("div", { className: "mt-6 font-display text-5xl lg:text-6xl font-bold text-gradient", children: /* @__PURE__ */ jsx(Counter, { to: s.v, suffix: s.suffix }) }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm uppercase tracking-wider text-white/70", children: s.l })
            ] })
          ]
        },
        s.l
      )) })
    ] })
  ] });
}
const t1 = "/assets/testi-1-D6TSShRg.jpg";
const t2 = "/assets/testi-2-BCmzbqYZ.jpg";
const t3 = "/assets/testi-3-BovT8jim.jpg";
const items = [
  {
    quote: "La personnalité des femmes à succès est le véritable frein d'attraction des hommes vers eux. Il n'en ait toujours pas question d'argent. ",
    name: "Andréa MANFOUNDOU",
    img: t1
  },
  {
    quote: "Ce que tu crois possible définit tes actions. Et tes actions créent ta réalité. Tant que ton subconscient est programmée ainsi, ta réalité restera vérité. ",
    name: "Roméo DEXTAIRE",
    img: t2
  },
  {
    quote: "Quand la vie decide de te faire grandir, elle te pousse à bout pour que tu réalises tes limites. Elle chamboule ton quotidien pour que tu oses tout recommencer. ",
    name: "Andresse MAK",
    img: t3
  }
];
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative py-28 lg:py-40 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 h-96 w-96 rounded-full translate-x-1/3", style: { background: "radial-gradient(circle, oklch(0.58 0.21 12 / 0.18), transparent 70%)" } }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold", children: "Témoignages" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep", children: [
          "Ce qu'ils disent du ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "mouvement" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 max-w-4xl mx-auto reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex transition-transform duration-700 ease-out", style: { transform: `translateX(-${i * 100}%)` }, children: items.map((t) => /* @__PURE__ */ jsx("div", { className: "min-w-full px-2", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-card shadow-luxe p-8 lg:p-12 border border-border/60 relative", children: [
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 32 32", className: "absolute -top-4 left-8 h-12 w-12 text-crimson/20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M10 8c-3 0-5 2-5 5v9h9v-9h-5c0-2 1-4 4-4V6c-1 0-3 0-3 2zm14 0c-3 0-5 2-5 5v9h9v-9h-5c0-2 1-4 4-4V6c-1 0-3 0-3 2z" }) }),
          /* @__PURE__ */ jsxs("p", { className: "font-display text-2xl lg:text-3xl leading-snug text-navy-deep", children: [
            "« ",
            t.quote,
            " »"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "h-14 w-14 rounded-full object-cover ring-2 ring-gold/40" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-navy-deep", children: t.name }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: t.role })
            ] })
          ] })
        ] }) }, t.name)) }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center gap-2", children: items.map((_, k) => /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": `Témoignage ${k + 1}`,
            onClick: () => setI(k),
            className: `h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-fire" : "w-3 bg-border"}`
          },
          k
        )) })
      ] })
    ] })
  ] });
}
const COORDS = [-4.818035, 11.899485];
const ADDRESS = "Pointe-Noire, République du Congo";
function MapSection() {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    let map;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { zoomControl: true, scrollWheelZoom: false }).setView(COORDS, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(map);
      const icon = L.divIcon({
        className: "",
        html: `<div style="position:relative;width:56px;height:56px;transform:translate(-28px,-56px);">
          <div style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle, oklch(0.78 0.16 65 / 0.5), transparent 70%);animation:pulse-glow 2s ease-in-out infinite;"></div>
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg, oklch(0.58 0.21 12), oklch(0.78 0.16 65));box-shadow:0 10px 30px -5px oklch(0.58 0.21 12 / 0.6);display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;border:3px solid white;">MU</div>
        </div>`
      });
      L.marker(COORDS, { icon }).addTo(map).bindPopup("<b>Mindset Univers</b><br/>Reprogramme ton cerveau");
    })();
    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "localiser", className: "relative py-28 lg:py-40 bg-night text-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 noise opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs uppercase tracking-[0.3em] text-gold font-semibold", children: "Nous localiser" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight", children: [
          "Viens nous ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "rencontrer" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl mx-auto text-white/70", children: "Notre porte est ouverte à chaque jeune ambitieux, à chaque partenaire visionnaire, à chaque institution engagée." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 grid lg:grid-cols-5 gap-6 reveal", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 rounded-3xl glass-dark p-8 flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-gold-light", children: "Adresse" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 font-display text-2xl font-bold", children: "Mindset Univers" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-white/75", children: ADDRESS })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-px bg-white/10" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-gold-light", children: "Téléphone" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+242000000000", className: "mt-2 block text-lg font-semibold hover:text-gold-light transition", children: "+242 00 000 00 00" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-gold-light", children: "Email" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:contact@mindsetunivers.com", className: "mt-2 block text-lg font-semibold hover:text-gold-light transition", children: "contact@mindsetunivers.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-gold-light", children: "Horaires" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 text-white/80 text-sm leading-relaxed", children: [
              "Lundi – Vendredi : 9h00 – 18h00",
              /* @__PURE__ */ jsx("br", {}),
              "Samedi : 10h00 – 14h00",
              /* @__PURE__ */ jsx("br", {}),
              "Dimanche : Fermé"
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://www.google.com/maps/dir/?api=1&destination=${COORDS[0]},${COORDS[1]}`,
              target: "_blank",
              rel: "noreferrer",
              className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-fire px-6 py-3 font-semibold text-white shadow-glow hover:scale-105 transition",
              children: [
                "Itinéraire",
                /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 5l7 7-7 7" }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 rounded-3xl overflow-hidden shadow-luxe ring-1 ring-white/10 relative", style: { minHeight: "480px" }, children: /* @__PURE__ */ jsx("div", { ref, className: "absolute inset-0" }) })
      ] })
    ] })
  ] });
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-28 lg:py-40 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 right-0 h-[500px] w-[500px] rounded-full", style: { background: "radial-gradient(circle, oklch(0.78 0.16 65 / 0.18), transparent 70%)" } }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs uppercase tracking-[0.3em] text-crimson font-semibold", children: "Contact" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl lg:text-6xl font-bold leading-tight text-navy-deep", children: [
          "Prêt à ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "passer à l'action" }),
          " ?"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Que tu sois un jeune en quête de transformation, un partenaire visionnaire ou une institution engagée — écris-nous. Une nouvelle histoire commence ici." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "https://wa.me/242000000000", target: "_blank", rel: "noreferrer", className: "flex items-center gap-4 rounded-2xl glass p-5 hover:-translate-y-1 transition shadow-luxe", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fire text-white shadow-glow", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { d: "M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 005.7 1.5C18.6 23.8 24 18.5 24 11.9c0-3.2-1.2-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 01-1.5-5.3C2 6.5 6.5 2 12 2s10 4.5 10 9.9c0 5.5-4.5 9.9-10 9.9z" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-navy-deep", children: "WhatsApp" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Réponse rapide, 7j/7" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:contact@mindsetunivers.com", className: "flex items-center gap-4 rounded-2xl glass p-5 hover:-translate-y-1 transition shadow-luxe", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-deep text-white", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", className: "h-6 w-6", children: /* @__PURE__ */ jsx("path", { d: "M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-navy-deep", children: "contact@mindsetunivers.com" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Pour les partenariats & médias" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 pt-2", children: [
            { l: "Instagram", d: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z" },
            { l: "Facebook", d: "M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.4A28 28 0 0014.5 1C11.7 1 10 2.7 10 5.7V10H7v4h3v8h3z" },
            { l: "TikTok", d: "M16 3v3a5 5 0 005 5v3a8 8 0 01-5-2v6a6 6 0 11-6-6v3a3 3 0 103 3V3h3z" },
            { l: "LinkedIn", d: "M4 3a2 2 0 110 4 2 2 0 010-4zm-1 6h2v12H3V9zm6 0h2v2c.5-1 2-2 4-2 3 0 4 2 4 5v7h-2v-6c0-2-1-3-2.5-3S11 13 11 15v6H9V9z" }
          ].map((s) => /* @__PURE__ */ jsx("a", { href: "#", "aria-label": s.l, className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-navy-deep hover:text-white hover:border-navy-deep transition", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "h-4 w-4", children: /* @__PURE__ */ jsx("path", { d: s.d }) }) }, s.l)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
          },
          className: "reveal rounded-3xl bg-card shadow-luxe p-8 lg:p-10 border border-border/60 space-y-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsx(Field, { label: "Nom complet", name: "name", placeholder: "Ton nom" }),
              /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "ton@email.com" })
            ] }),
            /* @__PURE__ */ jsx(Field, { label: "Téléphone", name: "phone", placeholder: "+242 ..." }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-navy-deep mb-2", children: "Sujet" }),
              /* @__PURE__ */ jsxs("select", { className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold", children: [
                /* @__PURE__ */ jsx("option", { children: "Rejoindre un programme" }),
                /* @__PURE__ */ jsx("option", { children: "Devenir partenaire" }),
                /* @__PURE__ */ jsx("option", { children: "Inviter Mindset Univers" }),
                /* @__PURE__ */ jsx("option", { children: "Autre" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-navy-deep mb-2", children: "Message" }),
              /* @__PURE__ */ jsx("textarea", { rows: 4, placeholder: "Parle-nous de ton projet, de ta vision, de ton rêve...", className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-fire px-8 py-4 text-base font-semibold text-white shadow-glow hover:scale-[1.02] transition",
                children: sent ? "Message envoyé ✓" : "Envoyer mon message"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: "En soumettant, tu acceptes d'être recontacté par notre équipe." })
          ]
        }
      )
    ] }) })
  ] });
}
function Field({ label, name, type = "text", placeholder }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "block text-sm font-medium text-navy-deep mb-2", children: label }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, placeholder, className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-night text-white pt-20 pb-10 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full", style: { background: "radial-gradient(ellipse, oklch(0.78 0.16 65 / 0.12), transparent 70%)" } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "Mindset Univers", className: "h-12 w-12 object-contain" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-bold", children: "Mindset Univers" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-gold-light", children: "Reprogramme ton cerveau" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-sm text-white/70 leading-relaxed", children: "Un mouvement dédié à la transformation mentale, au leadership et à l'éveil de la jeunesse africaine. Bâtir aujourd'hui les leaders de demain." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-gold-light mb-4", children: "Navigation" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/75", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#apropos", className: "hover:text-white", children: "À propos" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#programmes", className: "hover:text-white", children: "Programmes" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#galerie", className: "hover:text-white", children: "Galerie" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#impact", className: "hover:text-white", children: "Impact" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#localiser", className: "hover:text-white", children: "Nous localiser" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-gold-light mb-4", children: "Contact" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-white/75", children: [
            /* @__PURE__ */ jsx("li", { children: "Pointe-Noire, République du Congo" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+242000000000", className: "hover:text-white", children: "+242 00 000 00 00" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:contact@mindsetunivers.com", className: "hover:text-white", children: "contact@mindsetunivers.com" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Mindset Univers — Tous droits réservés."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Mentions légales" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Politique de confidentialité" })
        ] })
      ] })
    ] })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/221770000000?text=Bonjour%20Mindset%20Univers%20!",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Contacter sur WhatsApp",
      className: "fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-glow animate-pulse-glow hover:scale-110 transition",
      style: { background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" },
      children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "h-7 w-7", children: /* @__PURE__ */ jsx("path", { d: "M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7a12 12 0 005.7 1.5C18.6 23.8 24 18.5 24 11.9c0-3.2-1.2-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 01-1.5-5.3C2 6.5 6.5 2 12 2s10 4.5 10 9.9c0 5.5-4.5 9.9-10 9.9zm5.5-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.3 2.5 3.8 6 5.3 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.3-.2-.6-.4z" }) })
    }
  );
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxs("main", { className: "overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Programs, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(Impact, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(MapSection, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppFab, {})
  ] });
}
export {
  Index as component
};
