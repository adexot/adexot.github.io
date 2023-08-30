function c_(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var t_={exports:{}};(function(a){const A=(()=>{const W={},N={font:"Standard",fontPath:"./fonts"};function M(t,L){let _={},e,T,n,l,i=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(e=L!==null?L:t,T=0,n=i.length;T<n;)l=i[T],e>=l[0]?(e=e-l[0],_[l[1]]=typeof _[l[1]]>"u"?l[2]:_[l[1]]):l[1]!=="vLayout"&&l[1]!=="hLayout"&&(_[l[1]]=!1),T++;return typeof _.hLayout>"u"?t===0?_.hLayout=1:t===-1?_.hLayout=0:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=3:_.hLayout=2:_.hLayout===2&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=3),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=3:_.vLayout=0:_.vLayout===2&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=3),_}function m(t,L,_){return t===L&&t!==_?t:!1}function f(t,L){let _="|/\\[]{}()<>";if(t==="_"){if(_.indexOf(L)!==-1)return L}else if(L==="_"&&_.indexOf(t)!==-1)return t;return!1}function d(t,L){let _="| /\\ [] {} () <>",e=_.indexOf(t),T=_.indexOf(L);if(e!==-1&&T!==-1&&e!==T&&Math.abs(e-T)!==1){const n=Math.max(e,T),l=n+1;return _.substring(n,l)}return!1}function p(t,L){let _="[] {} ()",e=_.indexOf(t),T=_.indexOf(L);return e!==-1&&T!==-1&&Math.abs(e-T)<=1?"|":!1}function k(t,L){let _="/\\ \\/ ><",e={0:"|",3:"Y",6:"X"},T=_.indexOf(t),n=_.indexOf(L);return T!==-1&&n!==-1&&n-T===1?e[T]:!1}function V(t,L,_){return t===_&&L===_?_:!1}function K(t,L){return t===L?t:!1}function X(t,L){let _="|/\\[]{}()<>";if(t==="_"){if(_.indexOf(L)!==-1)return L}else if(L==="_"&&_.indexOf(t)!==-1)return t;return!1}function Y(t,L){let _="| /\\ [] {} () <>",e=_.indexOf(t),T=_.indexOf(L);if(e!==-1&&T!==-1&&e!==T&&Math.abs(e-T)!==1){const n=Math.max(e,T),l=n+1;return _.substring(n,l)}return!1}function j(t,L){return t==="-"&&L==="_"||t==="_"&&L==="-"?"=":!1}function q(t,L){return t==="|"&&L==="|"?"|":!1}function v(t,L,_){return L===" "||L===""||L===_&&t!==" "?t:L}function E_(t,L,_){if(_.fittingRules.vLayout===0)return"invalid";let e,T=Math.min(t.length,L.length),n,l,i=!1,r;if(T===0)return"invalid";for(e=0;e<T;e++)if(n=t.substring(e,e+1),l=L.substring(e,e+1),n!==" "&&l!==" "){if(_.fittingRules.vLayout===1)return"invalid";if(_.fittingRules.vLayout===2)return"end";if(q(n,l)){i=i||!1;continue}if(r=!1,r=_.fittingRules.vRule1?K(n,l):r,r=!r&&_.fittingRules.vRule2?X(n,l):r,r=!r&&_.fittingRules.vRule3?Y(n,l):r,r=!r&&_.fittingRules.vRule4?j(n,l):r,i=!0,!r)return"invalid"}return i?"end":"valid"}function I_(t,L,_){let e=t.length,T=t.length;L.length;let n,l,i,r=1,E,h,R;for(;r<=e;){for(n=t.slice(Math.max(0,T-r),T),l=L.slice(0,Math.min(e,r)),i=l.length,R="",E=0;E<i;E++)if(h=E_(n[E],l[E],_),h==="end")R=h;else if(h==="invalid"){R=h;break}else R===""&&(R="valid");if(R==="invalid"){r--;break}if(R==="end")break;R==="valid"&&r++}return Math.min(e,r)}function A_(t,L,_){let e,T=Math.min(t.length,L.length),n,l,i="",r;for(e=0;e<T;e++)n=t.substring(e,e+1),l=L.substring(e,e+1),n!==" "&&l!==" "?_.fittingRules.vLayout===1||_.fittingRules.vLayout===2?i+=v(n,l):(r=!1,r=_.fittingRules.vRule5?q(n,l):r,r=!r&&_.fittingRules.vRule1?K(n,l):r,r=!r&&_.fittingRules.vRule2?X(n,l):r,r=!r&&_.fittingRules.vRule3?Y(n,l):r,r=!r&&_.fittingRules.vRule4?j(n,l):r,i+=r):i+=v(n,l);return i}function a_(t,L,_,e){let T=t.length,n=L.length,l=t.slice(0,Math.max(0,T-_)),i=t.slice(Math.max(0,T-_),T),r=L.slice(0,Math.min(_,n)),E,h,R,s=[],o,O=[];for(h=i.length,E=0;E<h;E++)E>=n?R=i[E]:R=A_(i[E],r[E],e),s.push(R);return o=L.slice(Math.min(_,n),n),O.concat(l,s,o)}function J(t,L){let _,e=t.length,T="";for(_=0;_<L;_++)T+=" ";for(_=0;_<e;_++)t[_]+=T}function u_(t,L,_){let e=t[0].length,T=L[0].length,n;return e>T?J(L,e-T):T>e&&J(t,T-e),n=I_(t,L,_),a_(t,L,n,_)}function s_(t,L,_){if(_.fittingRules.hLayout===0)return 0;let e,T=t.length,n=L.length,l=T,i=1,r=!1,E=!1,h,R,s,o;if(T===0)return 0;_:for(;i<=l;){const O=T-i;for(h=t.substring(O,O+i),R=L.substring(0,Math.min(i,n)),e=0;e<Math.min(i,n);e++)if(s=h.substring(e,e+1),o=R.substring(e,e+1),s!==" "&&o!==" "){if(_.fittingRules.hLayout===1){i=i-1;break _}else if(_.fittingRules.hLayout===2){(s===_.hardBlank||o===_.hardBlank)&&(i=i-1);break _}else if(r=!0,E=!1,E=_.fittingRules.hRule1?m(s,o,_.hardBlank):E,E=!E&&_.fittingRules.hRule2?f(s,o,_.hardBlank):E,E=!E&&_.fittingRules.hRule3?d(s,o,_.hardBlank):E,E=!E&&_.fittingRules.hRule4?p(s,o,_.hardBlank):E,E=!E&&_.fittingRules.hRule5?k(s,o,_.hardBlank):E,E=!E&&_.fittingRules.hRule6?V(s,o,_.hardBlank):E,!E){i=i-1;break _}}if(r)break;i++}return Math.min(l,i)}function B(t,L,_,e){let T,n,l=[],i,r,E,h,R,s,o,O;for(T=0;T<e.height;T++){o=t[T],O=L[T],R=o.length,s=O.length,i=R-_,r=o.substr(0,Math.max(0,i)),E="";const Q=Math.max(0,R-_);var y=o.substring(Q,Q+_),w=O.substring(0,Math.min(_,s));for(n=0;n<_;n++){var S=n<R?y.substring(n,n+1):" ",C=n<s?w.substring(n,n+1):" ";if(S!==" "&&C!==" ")if(e.fittingRules.hLayout===1)E+=v(S,C,e.hardBlank);else if(e.fittingRules.hLayout===2)E+=v(S,C,e.hardBlank);else{var c="";c=!c&&e.fittingRules.hRule1?m(S,C,e.hardBlank):c,c=!c&&e.fittingRules.hRule2?f(S,C,e.hardBlank):c,c=!c&&e.fittingRules.hRule3?d(S,C,e.hardBlank):c,c=!c&&e.fittingRules.hRule4?p(S,C,e.hardBlank):c,c=!c&&e.fittingRules.hRule5?k(S,C,e.hardBlank):c,c=!c&&e.fittingRules.hRule6?V(S,C,e.hardBlank):c,c=c||v(S,C,e.hardBlank),E+=c}else E+=v(S,C,e.hardBlank)}_>=s?h="":h=O.substring(_,_+Math.max(0,s-_)),l[T]=r+E+h}return l}function F(t){let L=[],_;for(_=0;_<t;_++)L[_]="";return L}const G=function(t){return Math.max.apply(Math,t.map(function(L,_){return L.length}))};function D(t,L,_){return t.reduce(function(e,T){return B(e,T.fig,T.overlap,_)},F(L))}function R_(t,L,_){const e={};for(let T=t.length;--T;){let n=D(t.slice(0,T),L,_);if(G(n)<=_.width){e.outputFigText=n,T<t.length?e.chars=t.slice(T):e.chars=[];break}}return e}function f_(t,L,_){let e,T,n=0,l,i,r,E=_.height,h=[],R,s,o=[],O,y,w,S,C;for(i=F(E),_.width>0&&_.whitespaceBreak&&(s={chars:[],overlap:n}),_.printDirection===1&&(t=t.split("").reverse().join("")),r=t.length,e=0;e<r;e++)if(O=t.substring(e,e+1),y=O.match(/\s/),T=L[O.charCodeAt(0)],S=null,T){if(_.fittingRules.hLayout!==0){for(n=1e4,l=0;l<_.height;l++)n=Math.min(n,s_(i[l],T[l],_));n=n===1e4?0:n}if(_.width>0&&(_.whitespaceBreak?(w=D(s.chars.concat([{fig:T,overlap:n}]),E,_),S=D(o.concat([{fig:w,overlap:s.overlap}]),E,_),R=G(S)):(S=B(i,T,n,_),R=G(S)),R>=_.width&&e>0&&(_.whitespaceBreak?(i=D(o.slice(0,-1),E,_),o.length>1&&(h.push(i),i=F(E)),o=[]):(h.push(i),i=F(E)))),_.width>0&&_.whitespaceBreak&&((!y||e===r-1)&&s.chars.push({fig:T,overlap:n}),y||e===r-1)){for(C=null;S=D(s.chars,E,_),R=G(S),R>=_.width;)C=R_(s.chars,E,_),s={chars:C.chars},h.push(C.outputFigText);R>0&&(C?o.push({fig:S,overlap:1}):o.push({fig:S,overlap:s.overlap})),y&&(o.push({fig:T,overlap:n}),i=F(E)),e===r-1&&(i=D(o,E,_)),s={chars:[],overlap:n};continue}i=B(i,T,n,_)}return G(i)>0&&h.push(i),_.showHardBlanks!==!0&&h.forEach(function(c){for(r=c.length,l=0;l<r;l++)c[l]=c[l].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),h}const o_=function(t,L){let _=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],e={},T;if(t==="default")for(T=0;T<_.length;T++)e[_[T]]=L.fittingRules[_[T]];else if(t==="full")e={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="fitted")e={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="controlled smushing")e={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(t==="universal smushing")e={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return e},h_=function(t,L){let _=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],e={},T;if(t==="default")for(T=0;T<_.length;T++)e[_[T]]=L.fittingRules[_[T]];else if(t==="full")e={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="fitted")e={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="controlled smushing")e={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(t==="universal smushing")e={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return e},Z=function(t,L,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let e=_.split(`
`),T=[],n,l,i;for(l=e.length,n=0;n<l;n++)T=T.concat(f_(e[n],W[t],L));for(l=T.length,i=T[0],n=1;n<l;n++)i=u_(i,T[n],L);return i?i.join(`
`):""};function z(t,L){let _=JSON.parse(JSON.stringify(t)),e,T;if(typeof L.horizontalLayout<"u"){e=o_(L.horizontalLayout,t);for(T in e)e.hasOwnProperty(T)&&(_.fittingRules[T]=e[T])}if(typeof L.verticalLayout<"u"){e=h_(L.verticalLayout,t);for(T in e)e.hasOwnProperty(T)&&(_.fittingRules[T]=e[T])}return _.printDirection=typeof L.printDirection<"u"?L.printDirection:t.printDirection,_.showHardBlanks=L.showHardBlanks||!1,_.width=L.width||-1,_.whitespaceBreak=L.whitespaceBreak||!1,_}const H=function(t,L,_){H.text(t,L,_)};return H.text=function(t,L,_){let e="";t=t+"",typeof arguments[1]=="function"&&(_=L,L={},L.font=N.font),typeof L=="string"?(e=L,L={}):(L=L||{},e=L.font||N.font),H.loadFont(e,function(T,n){if(T)return _(T);_(null,Z(e,z(n,L),t))})},H.textSync=function(t,L){let _="";t=t+"",typeof L=="string"?(_=L,L={}):(L=L||{},_=L.font||N.font);var e=z(H.loadFontSync(_),L);return Z(_,e,t)},H.metadata=function(t,L){t=t+"",H.loadFont(t,function(_,e){if(_){L(_);return}L(null,e,W[t].comment)})},H.defaults=function(t){if(typeof t=="object"&&t!==null)for(var L in t)t.hasOwnProperty(L)&&(N[L]=t[L]);return JSON.parse(JSON.stringify(N))},H.parseFont=function(t,L){L=L.replace(/\r\n/g,`
`).replace(/\r/g,`
`),W[t]={};var _=L.split(`
`),e=_.splice(0,1)[0].split(" "),T=W[t],n={};if(n.hardBlank=e[0].substr(5,1),n.height=parseInt(e[1],10),n.baseline=parseInt(e[2],10),n.maxLength=parseInt(e[3],10),n.oldLayout=parseInt(e[4],10),n.numCommentLines=parseInt(e[5],10),n.printDirection=e.length>=6?parseInt(e[6],10):0,n.fullLayout=e.length>=7?parseInt(e[7],10):null,n.codeTagCount=e.length>=8?parseInt(e[8],10):null,n.fittingRules=M(n.oldLayout,n.fullLayout),T.options=n,n.hardBlank.length!==1||isNaN(n.height)||isNaN(n.baseline)||isNaN(n.maxLength)||isNaN(n.oldLayout)||isNaN(n.numCommentLines))throw new Error("FIGlet header contains invalid values.");let l=[],i;for(i=32;i<=126;i++)l.push(i);if(l=l.concat(196,214,220,228,246,252,223),_.length<n.numCommentLines+n.height*l.length)throw new Error("FIGlet file is missing data.");let r,E,h=!1;for(T.comment=_.splice(0,n.numCommentLines).join(`
`),T.numChars=0;_.length>0&&T.numChars<l.length;){for(r=l[T.numChars],T[r]=_.splice(0,n.height),i=0;i<n.height;i++)typeof T[r][i]>"u"?T[r][i]="":(E=new RegExp("\\"+T[r][i].substr(T[r][i].length-1,1)+"+$"),T[r][i]=T[r][i].replace(E,""));T.numChars++}for(;_.length>0;){if(r=_.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(r))r=parseInt(r,16);else if(/^0[0-7]+$/.test(r))r=parseInt(r,8);else if(/^[0-9]+$/.test(r))r=parseInt(r,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(r))r=parseInt(r,16);else{if(r==="")break;console.log("Invalid data:"+r),h=!0;break}for(T[r]=_.splice(0,n.height),i=0;i<n.height;i++)typeof T[r][i]>"u"?T[r][i]="":(E=new RegExp("\\"+T[r][i].substr(T[r][i].length-1,1)+"+$"),T[r][i]=T[r][i].replace(E,""));T.numChars++}if(h===!0)throw new Error("Error parsing data.");return n},H.loadFont=function(t,L){if(W[t]){L(null,W[t].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(N.fontPath+"/"+t+".flf").then(function(_){if(_.ok)return _.text();throw console.log("Unexpected response",_),new Error("Network response was not ok.")}).then(function(_){L(null,H.parseFont(t,_))}).catch(L)},H.loadFontSync=function(t){if(W[t])return W[t].options;throw new Error("synchronous font loading is not implemented for the browser")},H.preloadFonts=function(t,L){let _=[];t.reduce(function(e,T){return e.then(function(){return fetch(N.fontPath+"/"+T+".flf").then(n=>n.text()).then(function(n){_.push(n)})})},Promise.resolve()).then(function(e){for(var T in t)t.hasOwnProperty(T)&&H.parseFont(t[T],_[T]);L&&L()})},H.figFonts=W,H})();a.exports=A})(t_);var N_=t_.exports;const T_=c_(N_),S_=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `;T_.parseFont("Standard",S_);T_.text("Welcome 👋🏾 here !!",{font:"Standard"},function(a,A){console.log(A)});const $=a=>history.replaceState(a,""),L_=!!document.startViewTransition,b=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),n_=a=>document.dispatchEvent(new Event(a)),r_=()=>n_("astro:page-load"),U="data-astro-transition-persist";let x=history.state?.index||0;!history.state&&b()&&$({index:x,scrollY:0});const d_=(a,A)=>{let I=!1,u=!1;return(...g)=>{if(I){u=!0;return}a(...g),I=!0,setTimeout(()=>{u&&(u=!1,a(...g)),I=!1},A)}};async function C_(a){const A=await fetch(a),I=await A.text();return{ok:A.ok,html:I}}function i_(){const a=document.querySelector('[name="astro-view-transitions-fallback"]');return a?a.getAttribute("content"):"animate"}function l_(){for(const a of document.scripts)a.dataset.astroExec=""}function H_(){let a=Promise.resolve();for(const A of Array.from(document.scripts)){if(A.dataset.astroExec==="")continue;const I=document.createElement("script");I.innerHTML=A.innerHTML;for(const u of A.attributes){if(u.name==="src"){const g=new Promise(P=>{I.onload=P});a=a.then(()=>g)}I.setAttribute(u.name,u.value)}I.dataset.astroExec="",A.replaceWith(I)}return a}const g_=new DOMParser;async function __(a,A,I){const u=g_.parseFromString(a,"text/html"),g=N=>{const M=N.getAttribute(U),m=M&&u.head.querySelector(`[${U}="${M}"]`);if(m)return m;if(N.matches("link[rel=stylesheet]")){const f=N.getAttribute("href");return u.head.querySelector(`link[rel=stylesheet][href="${f}"]`)}if(N.tagName==="SCRIPT"){let f=N;for(const d of u.scripts)if(f.textContent&&f.textContent===d.textContent||f.type===d.type&&f.src===d.src)return d}return null},P=()=>{u.querySelectorAll("head noscript").forEach(f=>f.remove());const N=document.documentElement,M=[...N.attributes].filter(({name:f})=>(N.removeAttribute(f),f.startsWith("data-astro-")));[...u.documentElement.attributes,...M].forEach(({name:f,value:d})=>N.setAttribute(f,d));for(const f of Array.from(document.head.children)){const d=g(f);d?d.remove():f.remove()}document.head.append(...u.head.children);const m=document.body;document.body.replaceWith(u.body);for(const f of m.querySelectorAll(`[${U}]`)){const d=f.getAttribute(U),p=document.querySelector(`[${U}="${d}"]`);p&&p.replaceWith(f)}if(scrollTo({left:0,top:0,behavior:"instant"}),A?.scrollY===0&&location.hash){const f=decodeURIComponent(location.hash.slice(1)),d=document.getElementById(f);d&&(A.scrollY=d.offsetTop,$(A),d.scrollIntoView())}else A&&A.scrollY!==0&&scrollTo(0,A.scrollY);n_("astro:after-swap")},W=[];for(const N of u.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${U}="${N.getAttribute(U)}"], link[rel=stylesheet]`)){const M=document.createElement("link");M.setAttribute("rel","preload"),M.setAttribute("as","style"),M.setAttribute("href",N.getAttribute("href")),W.push(new Promise(m=>{["load","error"].forEach(f=>M.addEventListener(f,m)),document.head.append(M)}))}if(W.length&&await Promise.all(W),I==="animate"){document.documentElement.dataset.astroTransitionFallback="old";const N=Promise.all(document.getAnimations().map(m=>m.finished)),M=()=>{P(),document.documentElement.dataset.astroTransitionFallback="new"};await N,M()}else P()}async function e_(a,A,I){let u;const{html:g,ok:P}=await C_(A);if(!P){location.href=A;return}document.documentElement.dataset.astroTransition=a,L_?u=document.startViewTransition(()=>__(g,I)).finished:u=__(g,I,i_());try{await u}finally{await H_(),l_(),r_()}}function M_(a){if(document.querySelector(`link[rel=prefetch][href="${a}"]`))return;if(navigator.connection){let I=navigator.connection;if(I.saveData||/(2|3)g/.test(I.effectiveType||""))return}let A=document.createElement("link");A.setAttribute("rel","prefetch"),A.setAttribute("href",a),document.head.append(A)}if(L_||i_()!=="none"){l_(),document.addEventListener("click",A=>{let I=A.target;if(I instanceof Element&&I.tagName!=="A"&&(I=I.closest("a")),!I||!(I instanceof HTMLAnchorElement)||I.dataset.astroReload!==void 0||!I.href||I.target&&I.target!=="_self"||I.origin!==location.origin||A.button!==0||A.metaKey||A.ctrlKey||A.altKey||A.shiftKey||A.defaultPrevented||!b())return;if(location.pathname===I.pathname&&location.search===I.search){if(I.hash)return;if(A.preventDefault(),$({...history.state,scrollY}),scrollTo({left:0,top:0,behavior:"instant"}),location.hash){const g={index:++x,scrollY:0};history.pushState(g,"",I.href)}return}A.preventDefault(),e_("forward",I.href,{index:++x,scrollY:0});const u={index:x,scrollY};$({index:x-1,scrollY}),history.pushState(u,"",I.href)}),addEventListener("popstate",A=>{if(!b()&&A.state){location.reload();return}if(A.state===null)return;const I=history.state,u=I?.index??x+1,g=u>x?"forward":"back";e_(g,location.href,I),x=u}),["mouseenter","touchstart","focus"].forEach(A=>{document.addEventListener(A,I=>{if(I.target instanceof HTMLAnchorElement){let u=I.target;u.origin===location.origin&&u.pathname!==location.pathname&&b()&&M_(u.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",r_);const a=()=>{history.state&&$({...history.state,scrollY})};"onscrollend"in window?addEventListener("scrollend",a):addEventListener("scroll",d_(a,300))}
