// ==UserScript==
// @name        facebook.com - Clean up UI
// @description Clean up Facebook UI
// @namespace   yuriy.ershov@gmail.com
// @match       *://*.facebook.com/*
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

  let e=0;
  for (i of ["rightCol", "pagelet_sidebar", "pagelet_dock", "video_chats"]) {
    try{
      document.getElementById(i).childNodes[0].remove();
    } catch(e) {}
  }
  for (i of document.getElementsByClassName("mts")) {
    i.remove();
  }
  for (i of document.getElementsByTagName("a")) {
    if (i.href.indexOf("/onthisday/") != -1) {
      p=i;
      for (j=0; j<8; j++,p=p.parentNode) {
        if (p.getAttribute("data-ft")) {
          p.remove();
          break;
  } } } }
  for (n of ["ego_feed_column", "uiLikePageButton", ]) {
    for (i of document.getElementsByClassName(n)) {
      i.parentNode.parentNode.parentNode.parentNode.remove();
  } }
  document.querySelectorAll("[aria-label='Message from Facebook']").forEach(e=>e.remove());
})();
