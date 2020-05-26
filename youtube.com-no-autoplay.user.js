// ==UserScript==
// @name        youtube.com - No Autoplay
// @description Switches off autoplay mode on Youtube.
// @namespace   yuriy.ershov@gmail.com
// @match       *://www.youtube.com/*
// @run-at      document-idle
// @noframes
// @version     1.0
// @copyright   2020, Yury Ershov <yuriy.ershov@gmail.com>
// @license     MIT; https://spdx.org/licenses/
// @author      Yury Ershov <yuriy.ershov@gmail.com>

// @homepageURL  https://github.com/ershov/userscripts
// @homepageURL  https://greasyfork.org/en/scripts?q=ershov
// @homepageURL  https://openuserjs.org/scripts/ershov/
// @supportURL   https://github.com/ershov/userscripts/issues

// @grant       none
// @inject-into content
// ==/UserScript==

// ==OpenUserJS==
// @author       ershov
// @collaborator ershov
// ==/OpenUserJS==

/* jshint esversion: 6 */

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
