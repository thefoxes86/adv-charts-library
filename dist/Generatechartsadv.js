(()=>{var t={},e=t&&t.__spreadArray||function(t,e,a){if(a||2===arguments.length)for(var n,o=0,s=e.length;o<s;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};t.__esModule=!0;var a,n,o,s,i={};a=i,n="CountUp",o=()=>c,s=t=>c=t,Object.defineProperty(a,n,{get:o,set:s,enumerable:!0,configurable:!0});var r,l=function(){return(l=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var o in e=arguments[a])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(){function t(t,e,a){var n=this;this.endVal=e,this.options=a,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){n.startTime||(n.startTime=t);var e=t-n.startTime;n.remaining=n.duration-e,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(e,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(e,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(e/n.duration);var a=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=a?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),e<n.duration?n.rAF=requestAnimationFrame(n.count):null!==n.finalEndVal?n.update(n.finalEndVal):n.callback&&n.callback()},this.formatNumber=function(t){var e,a,o,s,i=t<0?"-":"";e=Math.abs(t).toFixed(n.options.decimalPlaces);var r=(e+="").split(".");if(a=r[0],o=r.length>1?n.options.decimal+r[1]:"",n.options.useGrouping){s="";for(var l=0,c=a.length;l<c;++l)0!==l&&l%3==0&&(s=n.options.separator+s),s=a[c-l-1]+s;a=s}return n.options.numerals&&n.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]})),o=o.replace(/[0-9]/g,(function(t){return n.options.numerals[+t]}))),i+n.options.prefix+a+o+n.options.suffix},this.easeOutExpo=function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e},this.options=l(l({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return n.handleScroll(n)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,a=t.el.getBoundingClientRect(),n=a.top+a.height+window.pageYOffset;n<e&&n>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>n&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();r=function(t,e,a){e>0&&e<20&&(t[0].style.width="".concat(e/2*10,"%")),e>=20&&e<40&&(t[0].style.width="100%",setTimeout((function(){t[1].style.width="".concat((e-20)/2*10,"%")}),200)),e>=40&&e<60&&(t[0].style.width="100%",setTimeout((function(){t[1].style.width="100%"}),200),setTimeout((function(){t[2].style.width="".concat((e-40)/2*10,"%")}),400)),e>=60&&e<80&&(t[0].style.width="100%",setTimeout((function(){t[1].style.width="100%"}),200),setTimeout((function(){t[2].style.width="100%"}),400),setTimeout((function(){t[3].style.width="".concat((e-60)/2*10,"%")}),600)),e>=80&&(t[0].style.width="100%",setTimeout((function(){t[1].style.width="100%"}),200),setTimeout((function(){t[2].style.width="100%"}),400),setTimeout((function(){t[3].style.width="100%"}),600),setTimeout((function(){t[4].style.width="".concat((e-80)/2*10,"%")}),800))};var u=function(){function t(){this.chartCard=e([],document.querySelectorAll(".chart-card"),!0),this.update=!1,this.setLoading=!0,this.percValueText=[],this.percValue=[],this.titlePercValue=[],this.precValueHeaderTitleValue=null}return t.prototype.loading=function(t,e){this.setLoading=t,e.classList.contains("loading")&&e.classList.remove("loading")},t.prototype.init=function(t){this.objAdv=t,this.typedCard=this.chartCard.filter((function(e){return e.dataset.type===t.type})),this.iterateMainElement(this.typedCard)},t.prototype.reload=function(t){this.update=!0,this.init(t)},t.prototype.iterateMainElement=function(t){var a=this;t.forEach((function(t,n){var o,s;a.header=t.querySelector(".chart-card__header"),a.loading(!1,t);var l=a.objAdv.percValues[a.objAdv.percValues.length-1]>=0&&a.objAdv.percValues[a.objAdv.percValues.length-1]<a.objAdv.valueRangeColors[0]?"red":a.objAdv.percValues[a.objAdv.percValues.length-1]>=a.objAdv.valueRangeColors[0]&&a.objAdv.percValues[a.objAdv.percValues.length-1]<a.objAdv.valueRangeColors[1]?"orange":"green";if("type1"===a.objAdv.format){a.circle=t.querySelector(".circle-chart__circle"),a.header&&(a.header.classList.contains("red")&&a.header.classList.remove("red"),a.header.classList.contains("orange")&&a.header.classList.remove("orange"),a.header.classList.contains("green")&&a.header.classList.remove("green"),a.header.classList.add(l)),a.circle.style["stroke-dasharray"]="".concat(a.objAdv.percValues[a.objAdv.percValues.length-1]," 100");var c=document.getElementById("mainValuePerc-".concat(a.objAdv.type,"-").concat(n)),u="".concat(a.objAdv.realValues[a.objAdv.realValues.length-1]).concat(a.objAdv.valueLabels[a.objAdv.valueLabels.length-1]);if((null==c?void 0:c.innerHTML)!==u)if(a.update){null===(o=null==(v=a.percValue.find((function(t){return t.id===a.objAdv.type})))?void 0:v.data)||void 0===o||o.update(a.objAdv.realValues[a.objAdv.realValues.length-1]),a.update=!1}else{var d=a.objAdv.realValues[a.objAdv.realValues.length-1]-Math.floor(a.objAdv.realValues[a.objAdv.realValues.length-1])!=0,h=new i.CountUp("mainValuePerc-".concat(a.objAdv.type,"-").concat(n),a.objAdv.realValues[a.objAdv.realValues.length-1],{suffix:a.objAdv.valueLabels[a.objAdv.valueLabels.length-1],decimalPlaces:d?1:0,decimal:"."});a.percValue.push({id:a.objAdv.type,data:h}),h.start()}}if("type2"===a.objAdv.format){a.rowType=document.querySelector("[data-type=".concat(a.objAdv.type,"]")),a.bullet=a.rowType.querySelectorAll(".overlay__full");var p=a.objAdv.percValues[a.objAdv.percValues.length-1];if(a.loading(!1,a.rowType),a.bullet.forEach((function(t){t.style.background="".concat(l)})),r(a.bullet,p),console.log("ID","perc-title-".concat(a.objAdv.type),a.update),a.update){var v;null===(s=null==(v=a.titlePercValue.find((function(t){return t.id===a.objAdv.type})))?void 0:v.data)||void 0===s||s.update(a.objAdv.realValues[a.objAdv.realValues.length-1]),a.update=!1}else{d=a.objAdv.realValues[a.objAdv.realValues.length-1]-Math.floor(a.objAdv.realValues[a.objAdv.realValues.length-1])!=0,h=new i.CountUp("perc-title-".concat(a.objAdv.type),a.objAdv.realValues[a.objAdv.realValues.length-1],{suffix:a.objAdv.valueLabels[a.objAdv.valueLabels.length-1],decimalPlaces:d?1:0,decimal:"."});a.titlePercValue.push({id:a.objAdv.type,data:h}),h.start()}}a.contentRow=e([],t.querySelectorAll(".content__row"),!0),a.iterateRow(a.contentRow,n),t.classList.add("active")}))},t.prototype.iterateRow=function(t,e){var a=this;t.forEach((function(t,n){var o,s=a.objAdv.percValues[n]>=0&&a.objAdv.percValues[n]<a.objAdv.valueRangeColors[0]?"red":a.objAdv.percValues[n]>=a.objAdv.valueRangeColors[0]&&a.objAdv.percValues[n]<a.objAdv.valueRangeColors[1]?"orange":"green";("type1"===a.objAdv.format&&(a.barContent=t.querySelector(".bar__content"),a.barContent&&(a.barContent.classList.contains("red")&&a.barContent.classList.remove("red"),a.barContent.classList.contains("orange")&&a.barContent.classList.remove("orange"),a.barContent.classList.contains("green")&&a.barContent.classList.remove("green"),a.barContent.classList.add(s),a.barContent.style.width="".concat(a.objAdv.percValues[n],"%"))),"type2"===a.objAdv.format)&&t.querySelectorAll(".circle-chart__circle").forEach((function(t){t.style.stroke="".concat(s),t.style["stroke-dasharray"]="".concat(a.objAdv.percValues[n]," 100")}));var r=document.getElementById("perc-value-".concat(a.objAdv.type,"-").concat(e,"-row-").concat(n));if((null==r?void 0:r.innerHTML)!=="".concat(a.objAdv.realValues[n]).concat(a.objAdv.valueLabels[n]))if(a.update){var l=a.percValueText.find((function(t){return t.id==="".concat(a.objAdv.type,"-").concat(n)}));null===(o=null==l?void 0:l.data)||void 0===o||o.update(a.objAdv.realValues[n])}else{var c=a.objAdv.realValues[n]-Math.floor(a.objAdv.realValues[n])!=0,u=new i.CountUp("perc-value-".concat(a.objAdv.type,"-").concat(e,"-row-").concat(n),a.objAdv.realValues[n],{suffix:a.objAdv.valueLabels[n],decimalPlaces:c?1:0,decimal:"."});a.percValueText.push({id:"".concat(a.objAdv.type,"-").concat(n),data:u}),u.start()}a.textValue=document.getElementById("perc-value-".concat(a.objAdv.type,"-").concat(e,"-row-").concat(n)),a.textValue&&(a.textValue.classList.contains("red-text")&&a.textValue.classList.remove("red-text"),a.textValue.classList.contains("orange-text")&&a.textValue.classList.remove("orange-text"),a.textValue.classList.contains("green-text")&&a.textValue.classList.remove("green-text"),a.textValue.classList.add("".concat(s,"-text")))}))},t}();globalThis.Generatechartsadv=u,t.default=u})();
//# sourceMappingURL=Generatechartsadv.js.map
