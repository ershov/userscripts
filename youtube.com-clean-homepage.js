// ==UserScript==
// @name        - youtube.com - Remove Homepage Clutter
// @namespace   Yury Ershov
// @match       *://www.youtube.com/*
// @run-at      document-idle
// @noframes
// @grant       none
// @version     1.0
// @author      Yury Ershov
// @description Clean up Youtube's homepage (recommended videos)
// @inject-into content
// ==/UserScript==

(function() {
  'use strict';

  [...document.querySelectorAll("ytd-browse[page-subtype=home]")].forEach(e=>e.remove());
})();
