/*
 * Amo — hover interaction helpers
 * The core library is CSS-first. This file only adds pointer-position effects
 * that cannot be expressed cleanly with CSS alone.
 */
(function (global) {
  "use strict";

  function each(selector, fn, root) {
    (root || document).querySelectorAll(selector).forEach(fn);
  }

  function position(el, ev, xKey, yKey) {
    var r = el.getBoundingClientRect();
    el.style.setProperty(xKey, (((ev.clientX - r.left) / r.width) * 100) + "%");
    el.style.setProperty(yKey, (((ev.clientY - r.top) / r.height) * 100) + "%");
  }

  function init(root) {
    root = root || document;
    if (global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    each(".fx-ripple", function (el) {
      el.addEventListener("pointerenter", function (ev) { position(el, ev, "--rx", "--ry"); });
    }, root);

    each(".fx-magnetic", function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width;
        var y = (ev.clientY - r.top) / r.height;
        el.style.setProperty("--mx", ((x - .5) * 10) + "px");
        el.style.setProperty("--my", ((y - .5) * 8) + "px");
        el.style.setProperty("--mry", ((x - .5) * 16) + "deg");
        el.style.setProperty("--mrx", ((.5 - y) * 16) + "deg");
      });
      el.addEventListener("pointerleave", function () {
        ["--mx", "--my", "--mrx", "--mry"].forEach(function (k) { el.style.removeProperty(k); });
      });
    }, root);

    each(".cd-tilt", function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        var x = (ev.clientX - r.left) / r.width;
        var y = (ev.clientY - r.top) / r.height;
        el.style.setProperty("--ry", ((x - .5) * 14) + "deg");
        el.style.setProperty("--rx", ((.5 - y) * 14) + "deg");
        el.style.setProperty("--gx", (x * 100) + "%");
        el.style.setProperty("--gy", (y * 100) + "%");
      });
      el.addEventListener("pointerleave", function () {
        ["--rx", "--ry"].forEach(function (k) { el.style.removeProperty(k); });
      });
    }, root);

    each(".cd-spot", function (el) {
      el.addEventListener("pointermove", function (ev) { position(el, ev, "--mx", "--my"); });
    }, root);

    each(".cd-parallax, .im-parallax", function (el) {
      el.addEventListener("pointermove", function (ev) {
        var r = el.getBoundingClientRect();
        el.style.setProperty("--px", ((ev.clientX - r.left) / r.width - .5) * 2);
        el.style.setProperty("--py", ((ev.clientY - r.top) / r.height - .5) * 2);
      });
      el.addEventListener("pointerleave", function () {
        ["--px", "--py"].forEach(function (k) { el.style.removeProperty(k); });
      });
    }, root);

    each(".nv-group", function (group) {
      var items = Array.from(group.querySelectorAll(".nv-group__item"));
      function place(el) {
        var gr = group.getBoundingClientRect();
        var r = el.getBoundingClientRect();
        group.style.setProperty("--gx", (r.left - gr.left) + "px");
        group.style.setProperty("--gw", r.width + "px");
        group.style.setProperty("--gon", "1");
      }
      items.forEach(function (item) {
        item.addEventListener("pointerenter", function () { place(item); });
        item.addEventListener("focus", function () { place(item); });
      });
      group.addEventListener("pointerleave", function () { group.style.setProperty("--gon", "0"); });
    }, root);

    each(".tx-scramble", function (el) {
      var out = el.firstElementChild;
      if (!out) return;
      var word = out.textContent;
      var glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&@";
      el.addEventListener("pointerenter", function () {
        el.style.minInlineSize = el.offsetWidth + "px";
        clearInterval(el._amoTimer);
        var frame = 0;
        el._amoTimer = setInterval(function () {
          frame++;
          var done = Math.floor(frame / 18 * word.length);
          out.textContent = Array.from(word).map(function (c, i) {
            return c === " " || i < done ? c : glyphs[Math.random() * glyphs.length | 0];
          }).join("");
          if (frame >= 18) {
            clearInterval(el._amoTimer);
            out.textContent = word;
          }
        }, 40);
      });
    }, root);
  }

  global.Amo = global.Amo || {};
  global.Amo.init = init;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { init(document); });
  } else {
    init(document);
  }
})(window);
