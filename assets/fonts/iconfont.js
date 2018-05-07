(function (window) {
  let svgSprite = '<svg><symbol id="icon-down" viewBox="0 0 1026 1024"><path d="M874.949857 188.813407 1023.706461 345.427828 512.722558 807.413275 0 345.427828 150.495259 191.455259 512.722558 550.160088Z"  ></path></symbol></svg>'; const script = (function () { const scripts = document.getElementsByTagName('script'); return scripts[scripts.length - 1] }()); const shouldInjectCss = script.getAttribute('data-injectcss'); const ready = function (fn) {
    if (document.addEventListener) { if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) { setTimeout(fn, 0) } else { var loadFn = function () { document.removeEventListener('DOMContentLoaded', loadFn, false); fn() }; document.addEventListener('DOMContentLoaded', loadFn, false) } } else if (document.attachEvent) { IEContentLoaded(window, fn) } function IEContentLoaded (w, fn) {
      let d = w.document,
        done = false,
        init = function () { if (!done) { done = true; fn() } }; var polling = function () { try { d.documentElement.doScroll('left') } catch (e) { setTimeout(polling, 50); return }init() }; polling(); d.onreadystatechange = function () { if (d.readyState == 'complete') { d.onreadystatechange = null; init() } }
    }
  }; const before = function (el, target) { target.parentNode.insertBefore(el, target) }; const prepend = function (el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } }; function appendSvg () {
    let div,
      svg; div = document.createElement('div'); div.innerHTML = svgSprite; svgSprite = null; svg = div.getElementsByTagName('svg')[0]; if (svg) { svg.setAttribute('aria-hidden', 'true'); svg.style.position = 'absolute'; svg.style.width = 0; svg.style.height = 0; svg.style.overflow = 'hidden'; prepend(svg, document.body) }
  } if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>') } catch (e) { console && console.log(e) } }ready(appendSvg)
}(window))
