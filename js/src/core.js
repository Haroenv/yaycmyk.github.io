!function(){"use strict";function a(a,b){function c(g){var h=g-d;if(h>=b)window.scroll(0,a);else{var i=e+h/b*f;window.scroll(0,i),requestAnimationFrame(c)}}var d=performance.now(),e=window.scrollY,f=a-e;requestAnimationFrame(c)}!function(){for(var a=0,b=["webkit","moz"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(),function(){if("undefined"==typeof window.performance&&(window.performance={}),!window.performance.now){var a=Date.now();performance.timing&&performance.timing.navigationStart&&(a=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-a}}}(),window.onload=function(){function b(){g||(g=!0,d=d||c(),window.scrollY>=d&&-1===e.className.indexOf("stuck")?e.className+=" stuck":window.scrollY<d&&-1!==e.className.indexOf("stuck")&&(e.className=e.className.replace(" stuck","")),g=!1)}function c(){d=f.offsetTop+f.clientHeight-e.clientHeight}var d,e=document.querySelector("nav"),f=document.querySelector("header"),g=!1;window.addEventListener("scroll",b,!1),window.addEventListener("resize",c,!1),[].forEach.call(e.childNodes,function(b){b.addEventListener("click",function(c){c.preventDefault();var d=document.querySelector(b.getAttribute("href"));a(d.offsetTop,200)})})}}();