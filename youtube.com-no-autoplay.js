// ==UserScript==
// @name        - youtube.com - Automatically Switch Off Autoplay
// @namespace   Yury Ershov
// @match       *://www.youtube.com/*
// @run-at      document-idle
// @noframes
// @grant       none
// @version     1.0
// @author      Yury Ershov
// @description Switches off autoplay mode on Youtube.
// @inject-into content
// ==/UserScript==

(function() {
  'use strict';

  let NoAutoplay = ()=>{
    let e = document.querySelector("paper-toggle-button#toggle[checked]");
    if (e) {
      e.click();
      return;
    }
    if (!document.querySelector("paper-toggle-button#toggle")) {
      setTimeout(NoAutoplay, 100);
    }
  };
  setTimeout(NoAutoplay, 100);
})();
