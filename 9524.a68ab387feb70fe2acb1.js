(()=>{"use strict";const e="tt-media-progressive",t="tt-assets",s=("undefined"!=typeof window&&window.innerHeight,Math.round(425),new Set(["newMessage","newScheduledMessage","deleteMessages","deleteScheduledMessages","deleteHistory"]),new Set(["image/png","image/gif","image/jpeg"])),a=new Set(["video/mp4"]);new Set(["audio/mp3","audio/ogg","audio/wav","audio/mpeg","audio/flac","audio/aac","audio/m4a","audio/mp4","audio/x-m4a"]),new Set([...s,...a]),new Set(["AU","BD","CA","CO","EG","HN","IE","IN","JO","MX","MY","NI","NZ","PH","PK","SA","SV","US"]);const n=e=>new Promise((t=>{setTimeout((()=>t()),e)})),i=524288,o=new Map;async function r(t){const{url:s}=t.request,a=t.request.headers.get("range"),r=/^bytes=(\d+)-(\d+)?$/g.exec(a||""),c=Number(r[1]);let d=Number(r[2]);if((!d||d-c+1>i)&&(d=c+i-1),0===c&&1===d){const e=t.request.url.match(/fileSize=(\d+)&mimeType=([\w/]+)/),s=e&&Number(e[1]),a=null==e?void 0:e[2];if(s&&a)return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:[["Content-Range",`bytes 0-1/${s}`],["Accept-Ranges","bytes"],["Content-Length","2"],["Content-Type",a]]})}const l=`${s}?start=${c}&end=${d}`,[u,f]=await async function(t){const s=await self.caches.open(e);return Promise.all([s.match(`${t}&type=arrayBuffer`).then((e=>e?e.arrayBuffer():void 0)),s.match(`${t}&type=headers`).then((e=>e?e.json():void 0))])}(l);if(u)return new Response(u,{status:206,statusText:"Partial Content",headers:f});let g;try{g=await async function(e,t){if(!e.clientId)return;const s=await self.clients.get(e.clientId);if(!s)return;const a=(e=>{let t;do{t=String(Math.random()).replace("0.","id")}while(e.hasOwnProperty(t));return t})(o),i={},r=Promise.race([n(6e4).then((()=>Promise.reject(new Error("ERROR_PART_TIMEOUT")))),new Promise(((e,t)=>{Object.assign(i,{resolve:e,reject:t})}))]);return o.set(a,i),r.catch((()=>{})).finally((()=>{o.delete(a)})),s.postMessage({type:"requestPart",messageId:a,params:t}),r}(t,{url:s,start:c,end:d})}catch(e){}if(!g)return new Response("",{status:500,statusText:"Failed to fetch progressive part"});const{arrayBuffer:p,fullSize:w,mimeType:h}=g,m=Math.min(d-c+1,p.byteLength);d=c+m-1;const y=p.slice(0,m),v=[["Content-Range",`bytes ${c}-${d}/${w}`],["Accept-Ranges","bytes"],["Content-Length",String(m)],["Content-Type",h]];return m<=524288&&d<2097151&&async function(t,s,a){const n=await self.caches.open(e);Promise.all([n.put(new Request(`${t}&type=arrayBuffer`),new Response(s)),n.put(new Request(`${t}&type=headers`),new Response(JSON.stringify(a)))])}(l,y,v),new Response(y,{status:206,statusText:"Partial Content",headers:v})}async function c(e){const s=await async function(s,a){let i=!1;try{return await Promise.race([n(3e3).then((()=>i?void 0:Promise.reject(new Error("TIMEOUT")))),(async()=>{const s=await self.caches.open(t),a=await s.match(e.request);return{cache:s,cached:a}})()])}catch(e){return void console.error(e)}finally{i=!0}}(),{cache:a,cached:i}=s||{};if(a&&i){if(i.ok)return i;await a.delete(e.request)}const o=await fetch(e.request);return o.ok&&a&&a.put(e.request,o.clone()),o}var d,l;self.addEventListener("message",(e=>{const{type:t,messageId:s,result:a}=e.data;if("partResponse"===t){const e=o.get(s);e&&e.resolve(a)}})),(l=d||(d={})).True="1",l.False="0";let u=(new Date).valueOf();const f=new Set,g={};function p(e){return e.custom.from_id?e.custom.from_id:e.custom.chat_id||e.custom.channel_id?`-${e.custom.chat_id||e.custom.channel_id}`:void 0}function w(e){if(e.custom.msg_id)return parseInt(e.custom.msg_id,10)}async function h(){const e=new URL(self.registration.scope).origin;return(await self.clients.matchAll({type:"window"})).filter((t=>new URL(t.url).origin===e))}async function m(e){const t=(await h())[0];t&&t.postMessage({type:"playNotificationSound",payload:{id:e}})}function y(e){let{chatId:t,messageId:s,body:a,title:n,icon:i,reaction:o,shouldReplaceHistory:r}=e;const c=(new Date).valueOf()-u<1e3,d={body:a,data:{chatId:t,messageId:s,reaction:o,count:1,shouldReplaceHistory:r},icon:i||"icon-192x192.png",badge:"icon-192x192.png",tag:String(c?0:t||0),vibrate:[200,100,200]};return Promise.all([o?void 0:m(String(s)||t||""),self.registration.showNotification(n,d)])}async function v(e,t){if(t.chatId&&(e.postMessage({type:"focusMessage",payload:t}),!e.focused))try{await e.focus()}catch(e){}}self.addEventListener("sync",(()=>{u=Date.now()}));const I=/[\da-f]{20}.*\.(js|css|woff2?|svg|png|jpg|jpeg|tgs|json|wasm)$/;self.addEventListener("install",(e=>{e.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(e=>{e.waitUntil(Promise.race([n(3e3),Promise.all([self.caches.delete(t),self.clients.claim()])]))})),self.addEventListener("fetch",(e=>{const{url:t}=e.request;return t.includes("/progressive/")?(e.respondWith(r(e)),!0):!(!t.startsWith("http")||!t.match(I)||(e.respondWith(c(e)),0))})),self.addEventListener("push",(function(e){const t=function(e){try{return e.data.json()}catch(e){return}}(e);if(!t||t.mute===d.True)return;const s=function(e){return{chatId:p(e),messageId:w(e),title:e.title||"Telegram WebZ",body:e.description}}(t);f.has(s.messageId)?f.delete(s.messageId):e.waitUntil(y(s))})),self.addEventListener("notificationclick",(function(e){const t=self.registration.scope;e.notification.close();const{data:s}=e.notification;e.waitUntil((async()=>{const e=await h();if(await Promise.all(e.map((e=>(g[e.id]=s,v(e,s))))),self.clients.openWindow&&!(e.length>0)){g[0]=s;try{const e=await self.clients.openWindow(t);e&&(g[e.id]=s)}catch(e){}}})())})),self.addEventListener("message",(function(e){if(!e.data)return;const t=e.source;if("clientReady"===e.data.type){const s=g[t.id]||g[0];s&&(delete g[t.id],delete g[0],e.waitUntil(v(t,s)))}if("showMessageNotification"===e.data.type){const t=e.data.payload;e.waitUntil((async()=>(t.chatId&&(await self.registration.getNotifications({tag:t.chatId})).forEach((e=>e.close())),f.add(t.messageId),y(t)))())}"closeMessageNotifications"===e.data.type&&e.waitUntil(async function(e){let{chatId:t,lastReadInboxMessageId:s}=e;const a=await self.registration.getNotifications(),n=s||Number.MAX_VALUE;a.forEach((e=>{("0"===e.tag||e.data.chatId===t&&e.data.messageId<=n)&&e.close()}))}(e.data.payload))}))})();
//# sourceMappingURL=9524.a68ab387feb70fe2acb1.js.map