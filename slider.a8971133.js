parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wzuc":[function(require,module,exports) {
function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}document.addEventListener("DOMContentLoaded",function(){new e(".slider",{loop:!0,autoplay:!0,swipe:!0})});class e{constructor(i,s){t(this,"_autoplay",function(t){if(this._config.autoplay)return"stop"===t?(clearInterval(this._intervalId),void(this._intervalId=null)):void(null===this._intervalId&&(this._intervalId=setInterval(function(){this._direction="next",this._move()}.bind(this),this._config.interval)))}),this._el="string"==typeof i?document.querySelector(i):i,this._elWrapper=this._el.querySelector(e.SELECTOR_WRAPPER),this._elItems=this._el.querySelector(e.SELECTOR_ITEMS),this._elsItem=this._el.querySelectorAll(e.SELECTOR_ITEM),this._currentIndex=0,this._minOrder=0,this._maxOrder=0,this._$itemWithMinOrder=null,this._$itemWithMaxOrder=null,this._minTranslate=0,this._maxTranslate=0,this._direction="next",this._balancingItemsFlag=!1,this._transform=0,this._width=this._elWrapper.getBoundingClientRect().width,this._supportResizeObserver=void 0!==window.ResizeObserver,this._hasSwipeState=!1,this._swipeStartPosX=0,this._intervalId=null;if(this._config=Object.assign({autoplay:!1,loop:!0,indicators:!0,interval:3e3,swipe:!0},s),this._elItems.dataset.translate=0,this._elsItem.forEach((t,e)=>{t.dataset.order=e,t.dataset.index=e,t.dataset.translate=0}),this._config.loop){var n=this._elsItem.length-1,a=-this._elsItem.length;this._elsItem[n].dataset.order=-1,this._elsItem[n].dataset.translate=-this._elsItem.length;var r=a*this._width;this._elsItem[n].style.transform="translateX("+r+"px)"}this._addIndicators(),this._refreshExtremeValues(),this._setActiveClass(),this._addEventListener(),this._autoplay()}_setActiveClass(){const t=this._el.querySelector(e.SELECTOR_ITEM_ACTIVE);t&&t.classList.remove(e.CLASS_NAME_ITEM_ACTIVE);const i=this._el.querySelector(`[data-index="${this._currentIndex}"]`);i&&i.classList.add(e.CLASS_NAME_ITEM_ACTIVE);const s=this._el.querySelector(e.SELECTOR_INDICATOR_ACTIVE);s&&s.classList.remove(e.CLASS_NAME_INDICATOR_ACTIVE);const n=this._el.querySelector(`[data-slide-to="${this._currentIndex}"]`);n&&n.classList.add(e.CLASS_NAME_INDICATOR_ACTIVE);const a=this._el.querySelector(e.SELECTOR_CONTROL_PREV),r=this._el.querySelector(e.SELECTOR_CONTROL_NEXT);a&&a.classList.add(e.CLASS_NAME_CONTROL_SHOW),r&&r.classList.add(e.CLASS_NAME_CONTROL_SHOW),this._config.loop||0!==this._currentIndex?this._config.loop||this._currentIndex!==this._elsItem.length-1||r.classList.remove(e.CLASS_NAME_CONTROL_SHOW):a.classList.remove(e.CLASS_NAME_CONTROL_SHOW),this._el.dispatchEvent(new CustomEvent("active.itc.slider",{bubbles:!0}))}_move(t){var i;if(this._elItems.classList.remove(e.TRANSITION_NONE),!1===t&&this._elItems.classList.add(e.TRANSITION_NONE),"none"===this._direction)return i=this._transform*this._width,void(this._elItems.style.transform="translateX("+i+"px)");if(!this._config.loop){if(this._currentIndex+1>=this._elsItem.length&&"next"===this._direction)return void this._autoplay("stop");if(this._currentIndex<=0&&"prev"===this._direction)return}var s="next"===this._direction?-1:1,n=this._transform+s;"next"===this._direction?++this._currentIndex>this._elsItem.length-1&&(this._currentIndex-=this._elsItem.length):--this._currentIndex<0&&(this._currentIndex+=this._elsItem.length),this._transform=n,this._elItems.dataset.translate=n,i=n*this._width,this._elItems.style.transform="translateX("+i+"px)",this._elItems.dispatchEvent(new CustomEvent("transition-start",{bubbles:!0})),this._setActiveClass()}_moveTo(t,e){var i=this._currentIndex;this._direction=t>i?"next":"prev";for(var s=0;s<Math.abs(t-i);s++)this._move(e)}_addIndicators(){if(this._el.querySelector(e.SELECTOR_INDICATORS)||!this._config.indicators)return;let t="";for(let i=0,s=this._elsItem.length;i<s;i++)t+=`<li class="${e.CLASS_NAME_INDICATOR}" data-slide-to="${i}"></li>`;this._el.insertAdjacentHTML("beforeend",`<ol class="${e.CLASS_NAME_INDICATORS}">${t}</ol>`)}_refreshExtremeValues(){this._minOrder=parseInt(this._elsItem[0].dataset.order),this._maxOrder=this._minOrder,this._$itemWithMinOrder=this._elsItem[0],this._$itemWithMaxOrder=this._$itemWithMinOrder,this._minTranslate=parseInt(this._elsItem[0].dataset.translate),this._maxTranslate=this._minTranslate;for(var t=0,e=this._elsItem.length;t<e;t++){var i=this._elsItem[t],s=parseInt(i.dataset.order);s<this._minOrder?(this._minOrder=s,this._$itemWithMinOrder=i,this._minTranslate=parseInt(i.dataset.translate)):s>this._maxOrder&&(this._maxOrder=s,this._$itemWithMaxOrder=i,this._maxTranslate=parseInt(i.dataset.translate))}}_balancingItems(){if(this._balancingItemsFlag){var t,e,i=this._elWrapper.getBoundingClientRect(),s=i.width/2,n=this._elsItem.length;if("next"===this._direction){var a=i.left,r=this._$itemWithMinOrder;t=this._minTranslate,r.getBoundingClientRect().right<a-s&&(r.dataset.order=this._minOrder+n,t+=n,r.dataset.translate=t,e=t*this._width,r.style.transform="translateX("+e+"px)",this._refreshExtremeValues())}else if("prev"===this._direction){var _=i.right,h=this._$itemWithMaxOrder;t=this._maxTranslate,h.getBoundingClientRect().left>_+s&&(h.dataset.order=this._maxOrder-n,t-=n,h.dataset.translate=t,e=t*this._width,h.style.transform="translateX("+e+"px)",this._refreshExtremeValues())}requestAnimationFrame(this._balancingItems.bind(this))}}_addEventListener(){var t=this._elItems;function i(t){if(this._autoplay("stop"),!t.target.closest(e.CLASS_NAME_CONTROL)){var i=0===t.type.search("touch")?t.touches[0]:t;this._swipeStartPosX=i.clientX,this._swipeStartPosY=i.clientY,this._hasSwipeState=!0,this._hasSwiping=!1}}function s(t){if(this._hasSwipeState){var i=0===t.type.search("touch")?t.touches[0]:t,s=this._swipeStartPosX-i.clientX,n=this._swipeStartPosY-i.clientY;if(!this._hasSwiping){if(Math.abs(n)>Math.abs(s)||0===Math.abs(s))return void(this._hasSwipeState=!1);this._hasSwiping=!0}t.preventDefault(),this._config.loop||(this._currentIndex+1>=this._elsItem.length&&s>=0&&(s/=4),this._currentIndex<=0&&s<=0&&(s/=4));var a=s/this._elWrapper.getBoundingClientRect().width,r=this._transform-a;this._elItems.classList.add(e.TRANSITION_NONE),r*=this._width,this._elItems.style.transform="translateX("+r+"px)"}}function n(t){if(this._hasSwipeState){var i=0===t.type.search("touch")?t.changedTouches[0]:t,s=this._swipeStartPosX-i.clientX;if(0!==s){this._config.loop||(this._currentIndex+1>=this._elsItem.length&&s>=0&&(s/=7),this._currentIndex<=0&&s<=0&&(s/=7));var n=s/this._elWrapper.getBoundingClientRect().width*100;this._elItems.classList.remove(e.TRANSITION_NONE),n>e.SWIPE_THRESHOLD?(this._direction="next",this._move()):n<-e.SWIPE_THRESHOLD?(this._direction="prev",this._move()):(this._direction="none",this._move()),this._hasSwipeState=!1,this._config.loop&&this._autoplay()}else this._hasSwipeState=!1}}if(this._el.addEventListener("click",function(t){var i=t.target;if(this._autoplay("stop"),i.classList.contains(e.CLASS_NAME_CONTROL))t.preventDefault(),this._direction=i.dataset.slide,this._move();else if(i.dataset.slideTo){t.preventDefault();var s=parseInt(i.dataset.slideTo);this._moveTo(s)}this._config.loop&&this._autoplay()}.bind(this)),this._config.loop&&(t.addEventListener("transition-start",function(){this._balancingItemsFlag||(this._balancingItemsFlag=!0,window.requestAnimationFrame(this._balancingItems.bind(this)))}.bind(this)),t.addEventListener("transitionend",function(){this._balancingItemsFlag=!1,this._el.dispatchEvent(new CustomEvent("transition-end",{bubbles:!0}))}.bind(this))),this._config.autoplay&&(this._el.addEventListener("mouseenter",function(){this._autoplay("stop")}.bind(this)),this._el.addEventListener("mouseleave",function(){this._config.loop&&this._autoplay()}.bind(this))),this._config.swipe){var a=!1;try{var r=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("testPassiveListener",null,r)}catch(_){}this._el.addEventListener("touchstart",i.bind(this),!!a&&{passive:!1}),this._el.addEventListener("touchmove",s.bind(this),!!a&&{passive:!1}),this._el.addEventListener("mousedown",i.bind(this)),this._el.addEventListener("mousemove",s.bind(this)),document.addEventListener("touchend",n.bind(this)),document.addEventListener("mouseup",n.bind(this)),document.addEventListener("mouseout",n.bind(this))}(this._el.addEventListener("dragstart",function(t){t.preventDefault()}.bind(this)),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?this._autoplay("stop"):"visible"===document.visibilityState&&this._config.loop&&this._autoplay()}.bind(this)),this._supportResizeObserver)&&new ResizeObserver(function(t){var i,s=t[0].contentBoxSize,n=t[0].contentRect,a=n?n.width:(s[0]||s).inlineSize;if(this._width.toFixed(1)!==a.toFixed(1)){this._autoplay("stop"),this._elItems.classList.add(e.TRANSITION_NONE),this._width=parseInt(a.toFixed(1),10),i=a*parseInt(this._elItems.dataset.translate,10),this._elItems.style.transform="translateX("+i+"px)";for(var r=this._elsItem,_=0;_<r.length;_++)i=parseInt(r[_].dataset.translate)*a,r[_].style.transform="translateX("+i+"px)";this._config.loop&&this._autoplay()}}.bind(this)).observe(this._elWrapper)}next(){this._direction="next",this._move()}prev(){this._direction="prev",this._move()}autoplay(t){this._autoplay("stop")}moveTo(t,e){this._moveTo(t,e)}}t(e,"PREFIX","slider"),t(e,"CLASS_NAME_ITEM",`${e.PREFIX}__item`),t(e,"CLASS_NAME_ITEM_ACTIVE",`${e.PREFIX}__item--active`),t(e,"CLASS_NAME_ITEMS",`${e.PREFIX}__items`),t(e,"CLASS_NAME_INDICATOR",`${e.PREFIX}__indicator`),t(e,"CLASS_NAME_INDICATOR_ACTIVE",`${e.PREFIX}__indicator--active`),t(e,"CLASS_NAME_INDICATORS",`${e.PREFIX}__indicators`),t(e,"CLASS_NAME_CONTROL",`${e.PREFIX}__control`),t(e,"CLASS_NAME_CONTROL_PREV",`${e.PREFIX}__control--prev`),t(e,"CLASS_NAME_CONTROL_NEXT",`${e.PREFIX}__control--next`),t(e,"CLASS_NAME_CONTROL_SHOW",`${e.PREFIX}__control--show`),t(e,"SELECTOR_ITEMS",`.${e.CLASS_NAME_ITEMS}`),t(e,"SELECTOR_ITEM",`.${e.CLASS_NAME_ITEM}`),t(e,"SELECTOR_ITEM_ACTIVE",`.${e.CLASS_NAME_ITEM_ACTIVE}`),t(e,"SELECTOR_INDICATOR_ACTIVE",`.${e.CLASS_NAME_INDICATOR_ACTIVE}`),t(e,"SELECTOR_INDICATORS",`.${e.CLASS_NAME_INDICATORS}`),t(e,"SELECTOR_WRAPPER",`.${e.PREFIX}__wrapper`),t(e,"SELECTOR_CONTROL",`.${e.CLASS_NAME_CONTROL}`),t(e,"SELECTOR_CONTROL_NEXT",`.${e.CLASS_NAME_CONTROL_NEXT}`),t(e,"SELECTOR_CONTROL_PREV",`.${e.CLASS_NAME_CONTROL_PREV}`),t(e,"SWIPE_THRESHOLD",20),t(e,"TRANSITION_NONE","transition-none");
},{}]},{},["wzuc"], null)
//# sourceMappingURL=/IceCream-Project/slider.a8971133.js.map