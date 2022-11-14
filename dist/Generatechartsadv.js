(()=>{var t={},a=t&&t.__spreadArray||function(t,a,e){if(e||2===arguments.length)for(var n,r=0,i=a.length;r<i;r++)!n&&r in a||(n||(n=Array.prototype.slice.call(a,0,r)),n[r]=a[r]);return t.concat(n||Array.prototype.slice.call(a))};t.__esModule=!0;var e,n,r,i,s={};e=s,n="CountUp",r=()=>l,i=t=>l=t,Object.defineProperty(e,n,{get:r,set:i,enumerable:!0,configurable:!0});var o=function(){return(o=Object.assign||function(t){for(var a,e=1,n=arguments.length;e<n;e++)for(var r in a=arguments[e])Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);return t}).apply(this,arguments)},l=function(){function t(t,a,e){var n=this;this.endVal=a,this.options=e,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){n.startTime||(n.startTime=t);var a=t-n.startTime;n.remaining=n.duration-a,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(a,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(a,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(a/n.duration);var e=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=e?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),a<n.duration?n.rAF=requestAnimationFrame(n.count):null!==n.finalEndVal?n.update(n.finalEndVal):n.callback&&n.callback()},this.formatNumber=function(t){var a,e,r,i,s=t<0?"-":"";a=Math.abs(t).toFixed(n.options.decimalPlaces);var o=(a+="").split(".");if(e=o[0],r=o.length>1?n.options.decimal+o[1]:"",n.options.useGrouping){i="";for(var l=0,u=e.length;l<u;++l)0!==l&&l%3==0&&(i=n.options.separator+i),i=e[u-l-1]+i;e=i}return n.options.numerals&&n.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]}))),s+n.options.prefix+e+r+n.options.suffix},this.easeOutExpo=function(t,a,e,n){return e*(1-Math.pow(2,-10*t/n))*1024/1023+a},this.options=o(o({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(a),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return n.handleScroll(n)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var a=window.innerHeight+window.scrollY,e=t.el.getBoundingClientRect(),n=e.top+e.height+window.pageYOffset;n<a&&n>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>n&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var a=t-this.startVal;if(Math.abs(a)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var a=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=a:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=a:this.el.innerHTML=a},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var a=Number(t);return this.ensureNumber(a)?a:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();globalThis.Generatechartsadv=function(){function t(t){this.chartCard=a([],document.querySelectorAll(".".concat(t)),!0)}return t.prototype.init=function(t){this.arrayAdv=t,this.typedCard=this.chartCard.filter((function(a){return a.dataset.type===t.type})),this.iterateMainElement(this.typedCard)},t.prototype.iterateMainElement=function(t){var e=this;t.forEach((function(t,n){e.header=t.querySelector(".chart-card__header"),e.circle=t.querySelector(".circle-chart__circle"),e.header.classList.add(e.arrayAdv.valueColors[e.arrayAdv.valueColors.length-1]),e.circle.style["stroke-dasharray"]="".concat(e.arrayAdv.percValues[e.arrayAdv.percValues.length-1]," 100");var r=document.getElementById("mainValuePerc-".concat(e.arrayAdv.type,"-").concat(n)),i="".concat(e.arrayAdv.realValues[e.arrayAdv.realValues.length-1]).concat(e.arrayAdv.valueLabels[e.arrayAdv.valueLabels.length-1]);(null==r?void 0:r.innerHTML)!==i&&(e.percValue=new s.CountUp("mainValuePerc-".concat(e.arrayAdv.type,"-").concat(n),e.arrayAdv.realValues[e.arrayAdv.realValues.length-1],{suffix:e.arrayAdv.valueLabels[e.arrayAdv.valueLabels.length-1]}),e.percValue.start()),e.contentRow=a([],t.querySelectorAll(".content__row"),!0),e.iterateRow(e.contentRow,n),t.classList.add("active")}))},t.prototype.iterateRow=function(t,a){var e=this;t.forEach((function(t,n){e.barContent=t.querySelector(".bar__content"),e.barContent.classList.add(e.arrayAdv.valueColors[n]),e.barContent.style.width="".concat(e.arrayAdv.percValues[n],"%");var r=document.getElementById("perc-value-".concat(e.arrayAdv.type,"-").concat(a,"-row-").concat(n));(null==r?void 0:r.innerHTML)!=="".concat(e.arrayAdv.realValues[n]).concat(e.arrayAdv.valueLabels[n])&&(e.percValueText=new s.CountUp("perc-value-".concat(e.arrayAdv.type,"-").concat(a,"-row-").concat(n),e.arrayAdv.realValues[n],{suffix:e.arrayAdv.valueLabels[n]}),e.percValueText.start()),e.textValue=document.getElementById("perc-value-".concat(e.arrayAdv.type,"-").concat(a,"-row-").concat(n)),e.textValue.classList.add("".concat(e.arrayAdv.valueColors[n],"-text"))}))},t}(),t.default=Generatechartsadv})();
//# sourceMappingURL=Generatechartsadv.js.map
