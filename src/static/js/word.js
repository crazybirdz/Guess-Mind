(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.chooseWord=void 0;var words=["angle","ant","apple","arch","arm","army","baby","bag","ball","band","basin","basket","bath","bed","bee","bell","berry","bird","blade","board","boat","bone","book","boot","bottle","box","boy","brain","brake","branch","brick","bridge","brush","bucket","bulb","button","cake","camera","card","cart","carriage","cat","chain","cheese","chest","chin","church","circle","clock","cloud","coat","collar","comb","cord","cow","cup","curtain","cushion","dog","door","drain","drawer","dress","drop","ear","egg","engine","eye","face","farm","feather","finger","fish","flag","floor","fly","foot","fork","fowl","frame","garden","girl","glove","goat","gun","hair","hammer","hand","hat","head","heart","hook","horn","horse","hospital","house","island","jewel","kettle","key","knee","knife","knot","leaf","leg","library","line","lip","lock","map","match","monkey","moon","mouth","muscle","nail","neck","needle","nerve","net","nose","nut","office","orange","oven","parcel","pen","pencil","picture","pig","pin","pipe","plane","plate","plough","pocket","pot","potato","prison","pump","rail","rat","receipt","ring","rod","roof","root","sail","school","scissors","screw","seed","sheep","shelf","ship","shirt","shoe","skin","skirt","snake","sock","spade","sponge","spoon","spring","square","stamp","star","station","stem","stick","stocking","stomach","store","street","sun","table","tail","thread","throat","thumb","ticket","toe","tongue","tooth","town","train","tray","tree","trousers","umbrella","wall","watch","wheel","whip","whistle","window","wing","wire","worm"],chooseWord=function(){return words[Math.floor(Math.random()*words.length)]};exports.chooseWord=chooseWord;

},{}]},{},[1]);