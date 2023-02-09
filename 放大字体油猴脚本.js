// ==UserScript==
// @name         新东方词库单词字体放大
// @namespace    http://tampermonkey.net/
// @version      0.2.8
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
    element.style.margin = "30px 15px"
  }

  //单词详情
  //单词
  document.querySelector(".content-box iframe").style.display = 'none'
  document.querySelector(".content-wrap").querySelector(".left-content").querySelector(".word-title").querySelector(".word-spell").style.fontSize = "100px"
  //声音
  for (const elementelement of document.querySelectorAll(".word-spell-audio")) {
    elementelement.style.height = "70px"
    elementelement.style.width = "40px"
    elementelement.style.margin = "0 20px"
    elementelement.style.borderRadius = '5px'
    elementelement.style.backgroundColor = '#ffffff'
  }
  //翻译
  document.querySelector(".details-content-title-box p").style.fontSize = "50px"
  document.querySelector(".details-content-title-box p").style.lineHeight = "70px"
  //例句
  var boxdivol = document.querySelectorAll(".details-content-title-box div ol")
  //for (const elementelement of boxdivol[boxdivol.length-1].querySelectorAll("li")) {
  //    elementelement.style.fontSize = "50px"
  //    elementelement.style.lineHeight = "70px"
  //    elementelement.style.margin = "40px 0"
  //}
  //for (const elementelement of boxdivol[boxdivol.length-2].querySelectorAll("li")) {
  //    elementelement.style.fontSize = "50px"
  //    elementelement.style.lineHeight = "70px"
  //   elementelement.style.margin = "40px 0"
  //}
  for (const element of boxdivol) {
    for (const elementelement of element.querySelectorAll("li")) {
      elementelement.style.fontSize = "50px"
      elementelement.style.lineHeight = "70px"
      elementelement.style.margin = "40px 0"
    }
  }
  //打印
  //console.log(document.querySelectorAll(".details-content-title-box div ol")[1].querySelectorAll("li"))

})();