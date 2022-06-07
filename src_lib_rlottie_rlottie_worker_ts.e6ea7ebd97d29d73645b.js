(()=>{"use strict";var e,r,t={52993:(e,r,t)=>{var a=t(35802);"undefined"!=typeof window&&window.innerHeight,Math.round(425),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]);const n=new Set(["image/png","image/gif","image/jpeg"]),o=new Set(["video/mp4"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...n,...o]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]),self.onerror=e=>{console.error(e),i({type:"unhandledError",error:{message:e.error.message||"Uncaught exception in worker"}})},self.addEventListener("unhandledrejection",(e=>{console.error(e),i({type:"unhandledError",error:{message:e.reason.message||"Uncaught rejection in worker"}})}));const s=new Map;function i(e,r){r?postMessage(e,r):postMessage(e)}let c;self.importScripts("rlottie-wasm.js");const d=new Promise((e=>{Module.onRuntimeInitialized=()=>{c={init:Module.cwrap("lottie_init","",[]),destroy:Module.cwrap("lottie_destroy","",["number"]),resize:Module.cwrap("lottie_resize","",["number","number","number"]),buffer:Module.cwrap("lottie_buffer","number",["number"]),render:Module.cwrap("lottie_render","",["number","number"]),loadFromData:Module.cwrap("lottie_load_from_data","number",["number","number"])},e()}})),l=new Map;async function u(e){const r=await fetch(e),t=r.headers.get("Content-Type");if(null!=t&&t.startsWith("text/"))return r.text();const n=await r.arrayBuffer();return(0,a.inflate)(n,{to:"string"})}function m(e,r,t){const a=r?30:60,n=JSON.parse(e).fr||a,o=n%a==0?n/a:1;return{reduceFactor:o,msPerFrame:1e3/(n/o),reducedFramesCount:Math.ceil(t/o)}}var p;p={init:async function(e,r,t,a,n){c||await d;const o=await u(r),s=allocate(intArrayFromString(o),"i8",0),i=c.init(),p=c.loadFromData(i,s);c.resize(i,t,t);const{reduceFactor:f,msPerFrame:g,reducedFramesCount:w}=m(o,a,p);l.set(e,{imgSize:t,reduceFactor:f,handle:i}),n(f,g,w)},changeData:async function(e,r,t,a){c||await d;const n=await u(r),o=allocate(intArrayFromString(n),"i8",0),{handle:s}=l.get(e),i=c.loadFromData(s,o),{reduceFactor:p,msPerFrame:f,reducedFramesCount:g}=m(n,t,i);a(p,f,g)},renderFrames:async function(e,r,t,a){c||await d;const{imgSize:n,reduceFactor:o,handle:s}=l.get(e);for(let e=r;e<=t;e++){const r=e*o;c.render(s,r);const t=c.buffer(s),i=Module.HEAPU8.subarray(t,t+n*n*4);a(e,new Uint8ClampedArray(i).buffer)}},destroy:function(e){const r=l.get(e);c.destroy(r.handle),l.delete(e)}},onmessage=async e=>{const{data:r}=e;switch(r.type){case"callMethod":{const{messageId:e,name:t,args:a}=r;try{if(e){const r=function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];const n=t[t.length-1];i({type:"methodCallback",messageId:e,callbackArgs:t},n instanceof ArrayBuffer?[n]:void 0)};s.set(e,r),a.push(r)}const[r,n]=await p[t](...a)||[];e&&i({type:"methodResponse",messageId:e,response:r},n)}catch(r){e&&i({type:"methodResponse",messageId:e,error:{message:r.message}})}e&&s.delete(e);break}case"cancelProgress":{const e=s.get(r.messageId);e&&(e.isCanceled=!0);break}}}}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,n.x=()=>{var e=n.O(void 0,["vendors-node_modules_pako_dist_pako_inflate_js"],(()=>n(52993)));return n.O(e)},e=[],n.O=(r,t,a,o)=>{if(!t){var s=1/0;for(l=0;l<e.length;l++){for(var[t,a,o]=e[l],i=!0,c=0;c<t.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var d=a();void 0!==d&&(r=d)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,a,o]},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+".8a7ccadf5c5a9d5942fc.js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={src_lib_rlottie_rlottie_worker_ts:1};n.f.i=(r,t)=>{e[r]||importScripts(n.p+n.u(r))};var r=self.webpackChunktelegram_t=self.webpackChunktelegram_t||[],t=r.push.bind(r);r.push=r=>{var[a,o,s]=r;for(var i in o)n.o(o,i)&&(n.m[i]=o[i]);for(s&&s(n);a.length;)e[a.pop()]=1;t(r)}})(),r=n.x,n.x=()=>n.e("vendors-node_modules_pako_dist_pako_inflate_js").then(r),n.x()})();
//# sourceMappingURL=src_lib_rlottie_rlottie_worker_ts.e6ea7ebd97d29d73645b.js.map