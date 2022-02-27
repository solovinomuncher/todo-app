(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\nul {\n  list-style-type: none;\n}\n\n.project-list,\n.task-list,\n.task-view {\n  text-align: center;\n  border: 1px solid black;\n  height: 100vh;\n}\n\n.project-list > h2,\n.project-create > h2,\n.task-list > h2,\n.task-view > h2,\n.task-create > h2 {\n  padding: 10px;\n  text-decoration: underline;\n}\n\n.task-view,\n.project-list {\n  height: 50vh;\n}\n\n/* section > h2 {\n  padding: 10px;\n  text-decoration: underline;\n} */\n\n/* PROJECTS STYLE */\n.project-section {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.projects {\n  display: grid;\n  gap: 10px;\n  overflow: scroll;\n}\n\n.projects > li {\n  border: 1px solid red;\n  padding: 10px;\n  margin: 0 10px 10px 10px;\n}\n\n.selected-project {\n  background: lightskyblue;\n}\n\n.project-create {\n  text-align: center;\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  padding: 10px;\n  margin: 10px;\n}\n\n.project-create > ul {\n  display: grid;\n  gap: 20px;\n}\n\n/* PROJECT VIEW STYLE */\n.tasks {\n  display: grid;\n  gap: 10px;\n}\n\n.tasks > li {\n  border: 1px solid red;\n  padding: 10px;\n  margin: 0 10px 10px 10px;\n}\n\n.selected-task {\n  background: lightskyblue;\n}\n\n.task-overview {\n  padding: 50px;\n}\n\n/* TASK VIEW STYLE */\n.task-section {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.task-view {\n  overflow: scroll;\n}\n\n.btn-complete-task {\n  margin-top: 10px;\n  padding: 10px;\n}\n\n.task-create {\n  text-align: center;\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n  padding: 10px;\n  margin: 10px;\n}\n\n.task-create > ul {\n  display: grid;\n  gap: 20px;\n}\n\n.task-create > ul > li {\n  display: grid;\n}\n\n#task-title,\n#task-desc,\n#task-duedate,\n#task-priority,\n#task-submit {\n  justify-self: center;\n  width: 50%;\n}\n\n.task {\n  display: grid;\n  gap: 10px;\n}\n\n.task > li {\n  text-align: left;\n  border: 1px solid red;\n  padding: 10px;\n  margin: 0 10px 10px 10px;\n}\n",""]);const u=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var s=t[u],c=r.base?s[0]+r.base:s[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var f=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=a(h,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var s=r(t,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),s=n.n(u),c=n(216),d=n.n(c),l=n(589),f=n.n(l),h=n(426),m={};function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){return g(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function v(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function w(t){if(g(1,arguments),!p(t)&&"number"!=typeof t)return!1;var e=v(t);return!isNaN(Number(e))}m.styleTagTransform=f(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const x={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function T(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const k={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:T({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:T({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:T({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:T({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:T({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function M(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?D(s,(function(t){return t.test(u)})):S(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=e.slice(u.length);return{value:i,rest:d}}}function S(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function D(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var E,P={ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(E.matchPattern);if(!n)return null;var r=n[0],a=t.match(E.parsePattern);if(!a)return null;var o=E.valueCallback?E.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const U={code:"en-US",formatDistance:function(t,e,n){var r,a=y[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:x,formatRelative:function(t,e,n,r){return C[t]},localize:k,match:P,options:{weekStartsOn:0,firstWeekContainsDate:1}};function q(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function W(t,e){g(2,arguments);var n=v(t).getTime(),r=q(e);return new Date(n+r)}function j(t,e){g(2,arguments);var n=q(e);return W(t,-n)}var Y=864e5;function L(t){g(1,arguments);var e=1,n=v(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function N(t){g(1,arguments);var e=v(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=L(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=L(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function O(t){g(1,arguments);var e=N(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=L(n);return r}var F=6048e5;function H(t,e){g(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:q(a),i=null==n.weekStartsOn?o:q(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=v(t),s=u.getUTCDay(),c=(s<i?7:0)+s-i;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function A(t,e){g(1,arguments);var n=v(t),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:q(i),s=null==a.firstWeekContainsDate?u:q(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var d=H(c,e),l=new Date(0);l.setUTCFullYear(r,0,s),l.setUTCHours(0,0,0,0);var f=H(l,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function z(t,e){g(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:q(a),i=null==n.firstWeekContainsDate?o:q(n.firstWeekContainsDate),u=A(t,e),s=new Date(0);s.setUTCFullYear(u,0,i),s.setUTCHours(0,0,0,0);var c=H(s,e);return c}var Q=6048e5;function R(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const B=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return R("yy"===e?r%100:r,e.length)},G=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):R(n+1,2)},X=function(t,e){return R(t.getUTCDate(),e.length)},I=function(t,e){return R(t.getUTCHours()%12||12,e.length)},J=function(t,e){return R(t.getUTCHours(),e.length)},_=function(t,e){return R(t.getUTCMinutes(),e.length)},Z=function(t,e){return R(t.getUTCSeconds(),e.length)},V=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return R(Math.floor(r*Math.pow(10,n-3)),e.length)};var K={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return B(t,e)},Y:function(t,e,n,r){var a=A(t,r),o=a>0?a:1-a;return"YY"===e?R(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):R(o,e.length)},R:function(t,e){return R(N(t),e.length)},u:function(t,e){return R(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return R(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return R(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return G(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return R(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){g(1,arguments);var n=v(t),r=H(n,e).getTime()-z(n,e).getTime();return Math.round(r/Q)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):R(a,e.length)},I:function(t,e,n){var r=function(t){g(1,arguments);var e=v(t),n=L(e).getTime()-O(e).getTime();return Math.round(n/F)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):R(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):X(t,e)},D:function(t,e,n){var r=function(t){g(1,arguments);var e=v(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/Y)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):R(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return R(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return R(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return R(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return I(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):J(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):R(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):R(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):_(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Z(t,e)},S:function(t,e){return V(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return tt(a);case"XXXX":case"XX":return et(a);default:return et(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return tt(a);case"xxxx":case"xx":return et(a);default:return et(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+$(a,":");default:return"GMT"+et(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+$(a,":");default:return"GMT"+et(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return R(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return R((r._originalDate||t).getTime(),e.length)}};function $(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+R(o,2)}function tt(t,e){return t%60==0?(t>0?"-":"+")+R(Math.abs(t)/60,2):et(t,e)}function et(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+R(Math.floor(a/60),2)+n+R(a%60,2)}const nt=K;function rt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function at(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}const ot={p:at,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return rt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",rt(a,e)).replace("{{time}}",at(o,e))}};function it(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var ut=["D","DD"],st=["YY","YYYY"];function ct(t){return-1!==ut.indexOf(t)}function dt(t){return-1!==st.indexOf(t)}function lt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var ft=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ht=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,mt=/^'([^]*?)'?$/,gt=/''/g,pt=/[a-zA-Z]/;function vt(t,e,n){g(2,arguments);var r=String(e),a=n||{},o=a.locale||U,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:q(i),s=null==a.firstWeekContainsDate?u:q(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,d=null==c?0:q(c),l=null==a.weekStartsOn?d:q(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var f=v(t);if(!w(f))throw new RangeError("Invalid time value");var h=it(f),m=j(f,h),p={firstWeekContainsDate:s,weekStartsOn:l,locale:o,_originalDate:f},y=r.match(ht).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ot[e])(t,o.formatLong,p):t})).join("").match(ft).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return wt(n);var i=nt[r];if(i)return!a.useAdditionalWeekYearTokens&&dt(n)&&lt(n,e,t),!a.useAdditionalDayOfYearTokens&&ct(n)&&lt(n,e,t),i(m,n,o.localize,p);if(r.match(pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return y}function wt(t){return t.match(mt)[1].replace(gt,"'")}const yt=(t,e,n,r)=>({title:t,desc:e,dueDate:vt(new Date(n),"MMM d y"),priority:r});function bt(t,e){return{title:t,todoList:e}}const xt=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},Ct=yt("apple","a fruit","1 1 21","high"),Tt=bt("Fruit Basket",[]),kt=[];Tt.todoList.push(Ct),kt.push(Tt),document.querySelector(".btn-submit-task").addEventListener("click",(()=>{const t=document.querySelector("#task-title"),e=document.querySelector("#task-desc"),n=document.querySelector("#task-duedate"),r=document.querySelector("#task-priority");if(""===t.value||""===e.value||NaN===n.value||""===r.value)return;const a=yt(t.value,e.value,n.value,r.value);t.value="",e.value="",n.value="",r.value="",Mt(a)}));const Mt=t=>{const e=document.querySelector(".selected-project").textContent;kt.forEach((n=>{n.title===e&&n.todoList.push(t)})),St()},St=()=>{const t=document.querySelector(".tasks"),e=document.querySelector(".selected-project").textContent;xt(t),(t=>{for(let e=0;e<kt.length;e++)if(kt[e].title===t)return kt[e]})(e).todoList.forEach((e=>{const n=document.createElement("li"),r=document.createElement("p"),a=document.createElement("p");n.classList.add("task-overview"),r.textContent=e.title,a.textContent=e.dueDate,n.appendChild(r),n.appendChild(a),t.appendChild(n)})),document.querySelectorAll(".task-overview").forEach((t=>{t.addEventListener("click",Dt)}))},Dt=t=>{const e=document.querySelector(".selected-task");"P"!==t.target.nodeName&&(null===e||e.classList.toggle("selected-task"),t.target.classList.toggle("selected-task"),Et())},Et=()=>{const t=document.querySelector(".selected-project"),e=document.querySelector(".selected-task").firstElementChild;kt.forEach((n=>{n.title===t.textContent&&n.todoList.forEach((t=>{t.title===e.textContent&&Pt(t)}))}))},Pt=t=>{const e=document.querySelector(".task-view-title"),n=document.querySelector(".task-view-desc"),r=document.querySelector(".task-view-duedate"),a=document.querySelector(".task-view-priority");e.textContent=t.title,n.textContent=t.desc,r.textContent=t.dueDate,a.textContent=t.priority};document.querySelector(".btn-complete-task").addEventListener("click",(t=>{const e=document.querySelector(".task-view-title").textContent;for(let t=0;t<kt.length;t++)for(let n=0;n<kt[t].todoList.length;n++)kt[t].todoList[n].title===e&&kt[t].todoList.splice(n,1);St()}));const Ut=t=>{const e=document.querySelector(".selected-project");null===e||e.classList.toggle("selected-project"),t.target.classList.toggle("selected-project"),St()},qt=()=>{const t=document.querySelector(".projects");xt(t),kt.forEach((e=>{const n=document.createElement("li");n.textContent=e.title,n.classList.add("project-title"),t.appendChild(n)})),document.querySelectorAll(".project-title").forEach((t=>{t.addEventListener("click",Ut)}))};qt(),document.querySelector(".btn-submit-project").addEventListener("click",(()=>{const t=document.querySelector("#project-title");if(console.log(t),""===t.value)return;const e=bt(t.value,[]);kt.push(e),t.value="",qt()}))})()})();