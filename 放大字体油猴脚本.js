// ==UserScript==
// @name         新东方词库单词字体放大
// @namespace    http://tampermonkey.net/
// @version      0.2.4
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

  //单词列表放大
  for (const element of document.querySelector(".word-box").querySelectorAll('.word')) {
    element.style.fontSize = "40px"
    element.style.padding = "10px"
    element.style.margin = "30px 0"
  }

  //单词详情
  //单词
  document.querySelector(".content-box iframe").style.display = 'none'
  document.querySelector(".content-wrap").querySelector(".left-content").querySelector(".word-title").querySelector(".word-spell").style.fontSize = "100px"
  //翻译
  document.querySelector(".details-content-title-box p").style.fontSize = "50px"
  document.querySelector(".details-content-title-box p").style.lineHeight = "70px"
  //例句
  document.querySelectorAll(".details-content-title-box div ol")[1].style.fontSize = "50px"
  document.querySelectorAll(".details-content-title-box div ol")[1].style.lineHeight = "70px"
  for (const element of document.querySelectorAll(".details-content-title-box div ol")[1].querySelectorAll("li")) {
    for (const elementelement of element.querySelectorAll("li")) {

      elementelement.style.margin = "40px 0"
    }
  }
  //打印
  //console.log(document.querySelectorAll(".details-content-title-box div ol")[1].querySelectorAll("li"))

})();