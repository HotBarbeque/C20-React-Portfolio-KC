(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(1413),i=(r(2791),r(1087)),s=r(7187),a=r(7892),o=r.n(a),u=r(184),c=function(t){var e=t.data,r=function(t){t.preventDefault(),window.open(e.link,"_blank","noopener noreferrer")};return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,onClick:r,target:"_blank",rel:"noopener noreferrer",children:e.title})}),(0,u.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",onClick:r,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("img",{src:"".concat("/C20-React-Portfolio-KC").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},l=[{title:"Movie Match Maker",subtitle:"Full Stack Bootcamp Group 1 Project",link:"https://adamhood15.github.io/movie-match-maker/",image:"/images/projects/MovieMatchMaker.png",date:"2023-04-10",desc:"This is an application to select a movie for someone."},{title:"BookTrackr",subtitle:"Full Stack Bootcamp Group 2 Project",link:"https://bookmanagement.herokuapp.com/",image:"/images/projects/BookTrackr.png",date:"2023-06-6",desc:"Book Management System allows users to keep track of their personal book collection. The application will provide a user-friendly interface for managing books, including adding new books, updating book details, and viewing the book collection."},{title:"Project 3",subtitle:"Full Stack Bootcamp Group 3 Project.",link:"",image:"/images/projects/ComingSoon.png",date:"2023-08-8",desc:"Coming Soon"}],f=function(){return(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Kyle Curry's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsx)("div",{className:"title",children:(0,u.jsx)("h2",{children:(0,u.jsx)(i.rU,{to:"/projects",children:"Projects"})})})}),l.map((function(t){return(0,u.jsx)(c,{data:(0,n.Z)((0,n.Z)({},t),{},{linkProps:{target:"_blank",rel:"noopener noreferrer"}})},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),s=r-i<0,a=e.clone().add(n+(s?-1:1),c);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:o,D:h,h:a,m:s,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=$;var M=function(t){return t instanceof D},k=function t(e,r,n){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();b[s]&&(i=s),r&&(b[s]=r,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,i=o}return!n&&i&&(y=i),i||!n&&y},j=function(t,e){if(M(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new D(r)},w=v;w.l=k,w.i=M,w.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function $(t){this.$L=k(t.locale,null,!0),this.parse(t)}var g=$.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var r=j(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return j(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<j(t)},g.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!w.u(e)||e,l=w.p(t),d=function(t,e){var i=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(o)},p=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,$=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case f:return n?d(1,0):d(31,11);case c:return n?d(1,$):d(0,$+1);case u:var y=this.$locale().weekStart||0,b=(m<y?m+7:m)-y;return d(n?g-b:g+(6-b),$);case o:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case s:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,u=w.p(t),l="set"+(this.$u?"UTC":""),d=(r={},r[o]=l+"Date",r[h]=l+"Date",r[c]=l+"Month",r[f]=l+"FullYear",r[a]=l+"Hours",r[s]=l+"Minutes",r[i]=l+"Seconds",r[n]=l+"Milliseconds",r)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===f){var m=this.clone().set(h,1);m.$d[d](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[w.p(t)]()},g.add=function(n,l){var h,d=this;n=Number(n);var p=w.p(l),m=function(t){var e=j(d);return w.w(e.date(e.date()+Math.round(t*n)),d)};if(p===c)return this.set(c,this.$M+n);if(p===f)return this.set(f,this.$y+n);if(p===o)return m(1);if(p===u)return m(7);var $=(h={},h[s]=e,h[a]=r,h[i]=t,h)[p]||1,g=this.$d.getTime()+n*$;return w.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=r.meridiem,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},h=function(t){return w.s(s%12||12,t,"0")},p=l||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return f(r.monthsShort,o,c,3);case"MMMM":return f(c,o);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(r.weekdaysMin,e.$W,u,2);case"ddd":return f(r.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(s,a,!0);case"A":return p(s,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,h,d){var p,m=this,$=w.p(h),g=j(n),v=(g.utcOffset()-this.utcOffset())*e,y=this-g,b=function(){return w.m(m,g)};switch($){case f:p=b()/12;break;case c:p=b();break;case l:p=b()/3;break;case u:p=(y-v)/6048e5;break;case o:p=(y-v)/864e5;break;case a:p=y/r;break;case s:p=y/e;break;case i:p=y/t;break;default:p=y}return d?p:w.a(p)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return b[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=k(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},$}(),S=D.prototype;return j.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",f],["$D",h]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,D,j),t.$i=!0),j},j.locale=k,j.isDayjs=M,j.unix=function(t){return j(1e3*t)},j.en=b[y],j.Ls=b,j.p={},j}()},4942:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r(9142);function i(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},1413:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(4942);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=161.95b96c74.chunk.js.map