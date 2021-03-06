// ==UserScript==
// @name        youtube.com - Dark Mode
// @description Automatically switch on dark mode. Useful for incognito tabs.
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

  let IsDark = ()=>!!document.querySelector("html[dark]");
  let IsSpinner = ()=>{
    let e = document.querySelector("ytd-popup-container iron-dropdown div#spinner");
    return !e || getComputedStyle(e).display != "none";
  }
  let HasSettings = ()=>!!document.querySelector("button#button[aria-label=Settings]");
  let ClickSettings = ()=>
    [...document.querySelectorAll("button#button[aria-label=Settings]")].forEach(e=>e.click());
  let ClickDarkModeMenu = ()=>
    [...document.querySelectorAll("ytd-toggle-theme-compact-link-renderer")].
      filter(e=>e.innerText=="Dark theme: Off").
      forEach(e=>e.click());
  let ClickDarkModeSwitch = ()=>
    [...document.querySelectorAll("div#submenu div#caption-container")].
      filter(e=>e.innerText=="DARK THEME").
      forEach(e=>
        [...e.querySelectorAll("div#toggleButton")].forEach(e=>e.click()))

  if (IsDark()) return;

  let WaitSettings = ()=>{
    if (!HasSettings()) {
      setTimeout(WaitSettings, 300);
      return;
    }
    ClickSettings();
    let WaitNoSpinner = ()=>{
      if (IsSpinner()) {
        setTimeout(WaitNoSpinner, 1000);
        return;
      }
      ClickDarkModeMenu();
      ClickDarkModeSwitch();
      setTimeout(()=>document.body.click(), 500);
    };
    setTimeout(WaitNoSpinner, 500);
  };

  setTimeout(WaitSettings, 1000);
})();
