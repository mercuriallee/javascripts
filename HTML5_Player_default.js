// ==UserScript==
// @name         HTML5 player default
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://v.youku.com/v_show/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==
windows.onload = function () {
    $('#ADT-PlayHTML5-btn').click();
}
