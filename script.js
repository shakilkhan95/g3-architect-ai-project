/* ============================================================
   G3 ARCHITECTS — script.js
   Features:
   1. Sticky nav shadow on scroll
   2. Mobile hamburger toggle
   3. Scroll-reveal (IntersectionObserver)
   4. Counter animation on stats (IntersectionObserver)
   5. Smooth scroll for anchor links (JS fallback)
   6. Active nav link on scroll
   ============================================================ */

(function () {
  "use strict";

  /* ── 1. DOM References ──────────────────────────────────── */
  const navbar      = document.querySelector(".navbar");
  const hamburger   = document.getElementById("hamburger");
  const navLinks    = document.getElementById("nav-links");
  const allNavLinks = document.querySelectorAll(".nav-link");
  const reveals     = document.querySelectorAll(".reveal");
  const statNumbers = document.querySelectorAll(".stat-number");
  const sections    = document.querySelectorAll("section[id]");

  /* ── 2. Sticky Nav Shadow ───────────────────────────────── */
  function handleNavScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load

  /* ── 3. Mobile Hamburger Toggle ─────────────────────────── */
  hamburger.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close nav when a link is clicked on mobile
  navLinks.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Close nav when clicking outside
  document.addEventListener("click", function (e) {
    if (
      navLinks.classList.contains("open") &&
      !navbar.contains(e.target)
    ) {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  /* ── 4. Scroll Reveal ───────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ── 5. Counter Animation ───────────────────────────────── */
  let countersStarted = false;

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateCounter(el, target, duration) {
    const start     = performance.now();
    const startVal  = 0;

    function update(timestamp) {
      const elapsed  = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuad(progress);
      const current  = Math.floor(eased * (target - startVal) + startVal);

      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  }

  const statsSection = document.querySelector(".stats");

  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            statNumbers.forEach(function (el) {
              const target = parseInt(el.getAttribute("data-target"), 10);
              animateCounter(el, target, 2000);
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    statsObserver.observe(statsSection);
  }

  /* ── 6. Smooth Scroll (JS Fallback for older browsers) ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId  = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl  = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const offset = navbar.offsetHeight + 8;
      const top    = targetEl.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ── 7. Active Nav Link on Scroll ───────────────────────── */
  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          allNavLinks.forEach(function (link) {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            '.nav-link[href="#' + id + '"]'
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

})();
