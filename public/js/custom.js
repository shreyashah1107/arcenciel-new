(()=>{var e,r={562:()=>{function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,i){if(!e)return;if("string"==typeof e)return r(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,i)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,t=new Array(r);i<r;i++)t[i]=e[i];return t}$(document).ready((function(){$("#footer").load("footer.html"),$(window).on("scroll",(function(e){$(window).scrollTop()<245?$("header").removeClass("sticky"):$("header").addClass("sticky")}));new Swiper(".amenities-slider--suggestions",{slidesPerView:4,spaceBetween:20,speed:1e3,delay:5e3,breakpoints:{0:{slidesPerView:1.2},768:{slidesPerView:2.2},1024:{slidesPerView:3},1200:{slidesPerView:4}}}),new Swiper(".amenities-slider--kids",{slidesPerView:4,spaceBetween:20,autoplay:!0,speed:1e3,delay:5e3,breakpoints:{0:{slidesPerView:1.2},768:{slidesPerView:2.2},1024:{slidesPerView:3},1200:{slidesPerView:4}}}),new Swiper(".amenities-slider--parents",{slidesPerView:4,spaceBetween:20,autoplay:!0,speed:1e3,delay:5e3,breakpoints:{0:{slidesPerView:1.2},768:{slidesPerView:2.2},1024:{slidesPerView:3},1200:{slidesPerView:4}}});var r=function(r){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r=r.trim(),i?e(document.querySelectorAll(r)):document.querySelector(r)},i=function(e,i,t){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=r(i,n);o&&(n?o.forEach((function(r){return r.addEventListener(e,t)})):o.addEventListener(e,t))},t=function(e,r){e.addEventListener("scroll",r)},n=r("#navbar li a",!0),o=function(){var e=window.scrollY+200;n.forEach((function(i){if(i.hash){var t=r(i.hash);t&&(e>=t.offsetTop&&e<=t.offsetTop+t.offsetHeight?i.classList.add("active"):i.classList.remove("active"))}}))};window.addEventListener("load",o),t(document,o);var s=function(e){var i=r("header"),t=i.offsetHeight;i.classList.contains("header-scrolled")||(t-=20);var n=r(e).offsetTop;window.scrollTo({top:n-t,behavior:"smooth"})},a=r("header");if(a){var l=function(){window.scrollY>100?a.classList.add("header-scrolled"):a.classList.remove("header-scrolled")};window.addEventListener("load",l),t(document,l)}i("click",".mobile-nav-toggle",(function(e){r("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("is-active")})),i("click",".navbar li a",(function(e){if(r(this.hash)){e.preventDefault();var i=r("#navbar");if(i.classList.contains("navbar-mobile"))i.classList.remove("navbar-mobile"),r(".mobile-nav-toggle").classList.toggle("is-active");s(this.hash)}}),!0),window.addEventListener("load",(function(){window.location.hash&&r(window.location.hash)&&s(window.location.hash)}))}))},50:()=>{}},i={};function t(e){var n=i[e];if(void 0!==n)return n.exports;var o=i[e]={exports:{}};return r[e](o,o.exports,t),o.exports}t.m=r,e=[],t.O=(r,i,n,o)=>{if(!i){var s=1/0;for(c=0;c<e.length;c++){for(var[i,n,o]=e[c],a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(t.O).every((e=>t.O[e](i[l])))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var d=n();void 0!==d&&(r=d)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={458:0,384:0};t.O.j=r=>0===e[r];var r=(r,i)=>{var n,o,[s,a,l]=i,d=0;if(s.some((r=>0!==e[r]))){for(n in a)t.o(a,n)&&(t.m[n]=a[n]);if(l)var c=l(t)}for(r&&r(i);d<s.length;d++)o=s[d],t.o(e,o)&&e[o]&&e[o][0](),e[s[d]]=0;return t.O(c)},i=self.webpackChunkarcenciel_new=self.webpackChunkarcenciel_new||[];i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i))})(),t.O(void 0,[384],(()=>t(562)));var n=t.O(void 0,[384],(()=>t(50)));n=t.O(n)})();
//# sourceMappingURL=custom.js.map