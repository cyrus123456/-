// ==UserScript==
// @name         新东方词库单词字体放大
// @namespace    http://tampermonkey.net/
// @version      0.2.1.1
// @description  https://www.koolearn.com/单词字体放大
// @author       You
// @match        https://www.koolearn.com/dict/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=koolearn.com
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
  'use strict';
  // Your code here...
  for (const element of document.querySelector(".word-box").querySelectorAll('.word')) {
    element.style.fontSize = "40px"
    element.style.padding = "10px"
  }

  document.querySelector(".content-box iframe").style.display = 'none'
  document.querySelector(".content-wrap").querySelector(".left-content").querySelector(".word-title").querySelector(".word-spell").style.fontSize = "100px"
  //document.querySelector(".content-wrap").querySelector(".left-content").document.querySelector(".content-box").querySelector(".details-content").querySelector(".word-spell-box").querySelector(".word-spell-audio").style.width = "100px"
  //document.querySelector(".content-wrap").querySelector(".left-content").document.querySelector(".content-box").querySelector(".details-content").querySelector(".details-content-title-box").style.width = "100px"
  document.querySelector(".word-spell-audio").style.heigh = "100px"

  document.querySelector(".details-content-title-box p").style.fontSize = "50px"

  console.log(123313, document.querySelector(".details-content-title-box"))




  //document.querySelector(".content-wrap").querySelector(".left-content").style.width = '400px';
  // document.querySelector(".left-content").style.width = '400px';
})();