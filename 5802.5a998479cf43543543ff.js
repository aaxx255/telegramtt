/*! For license information please see 5802.5a998479cf43543543ff.js.LICENSE.txt */
(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[5802],{35802:function(e,t){!function(e){"use strict";var t=(e,t,i,n)=>{let a=65535&e|0,r=e>>>16&65535|0,s=0;for(;0!==i;){s=i>2e3?2e3:i,i-=s;do{a=a+t[n++]|0,r=r+a|0}while(--s);a%=65521,r%=65521}return a|r<<16|0};const i=new Uint32Array((()=>{let e,t=[];for(var i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t})());var n=(e,t,n,a)=>{const r=i,s=a+n;e^=-1;for(let i=a;i<s;i++)e=e>>>8^r[255&(e^t[i])];return-1^e};var a=function(e,t){let i,n,a,r,s,o,l,d,h,c,f,u,w,b,k,m,_,g,v,p,x,y,E,A;const R=e.state;i=e.next_in,E=e.input,n=i+(e.avail_in-5),a=e.next_out,A=e.output,r=a-(t-e.avail_out),s=a+(e.avail_out-257),o=R.dmax,l=R.wsize,d=R.whave,h=R.wnext,c=R.window,f=R.hold,u=R.bits,w=R.lencode,b=R.distcode,k=(1<<R.lenbits)-1,m=(1<<R.distbits)-1;e:do{u<15&&(f+=E[i++]<<u,u+=8,f+=E[i++]<<u,u+=8),_=w[f&k];t:for(;;){if(g=_>>>24,f>>>=g,u-=g,g=_>>>16&255,0===g)A[a++]=65535&_;else{if(!(16&g)){if(0==(64&g)){_=w[(65535&_)+(f&(1<<g)-1)];continue t}if(32&g){R.mode=12;break e}e.msg="invalid literal/length code",R.mode=30;break e}v=65535&_,g&=15,g&&(u<g&&(f+=E[i++]<<u,u+=8),v+=f&(1<<g)-1,f>>>=g,u-=g),u<15&&(f+=E[i++]<<u,u+=8,f+=E[i++]<<u,u+=8),_=b[f&m];i:for(;;){if(g=_>>>24,f>>>=g,u-=g,g=_>>>16&255,!(16&g)){if(0==(64&g)){_=b[(65535&_)+(f&(1<<g)-1)];continue i}e.msg="invalid distance code",R.mode=30;break e}if(p=65535&_,g&=15,u<g&&(f+=E[i++]<<u,u+=8,u<g&&(f+=E[i++]<<u,u+=8)),p+=f&(1<<g)-1,p>o){e.msg="invalid distance too far back",R.mode=30;break e}if(f>>>=g,u-=g,g=a-r,p>g){if(g=p-g,g>d&&R.sane){e.msg="invalid distance too far back",R.mode=30;break e}if(x=0,y=c,0===h){if(x+=l-g,g<v){v-=g;do{A[a++]=c[x++]}while(--g);x=a-p,y=A}}else if(h<g){if(x+=l+h-g,g-=h,g<v){v-=g;do{A[a++]=c[x++]}while(--g);if(x=0,h<v){g=h,v-=g;do{A[a++]=c[x++]}while(--g);x=a-p,y=A}}}else if(x+=h-g,g<v){v-=g;do{A[a++]=c[x++]}while(--g);x=a-p,y=A}for(;v>2;)A[a++]=y[x++],A[a++]=y[x++],A[a++]=y[x++],v-=3;v&&(A[a++]=y[x++],v>1&&(A[a++]=y[x++]))}else{x=a-p;do{A[a++]=A[x++],A[a++]=A[x++],A[a++]=A[x++],v-=3}while(v>2);v&&(A[a++]=A[x++],v>1&&(A[a++]=A[x++]))}break}}break}}while(i<n&&a<s);v=u>>3,i-=v,u-=v<<3,f&=(1<<u)-1,e.next_in=i,e.next_out=a,e.avail_in=i<n?n-i+5:5-(i-n),e.avail_out=a<s?s-a+257:257-(a-s),R.hold=f,R.bits=u};const r=15,s=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),o=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),l=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),d=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var h=(e,t,i,n,a,h,c,f)=>{const u=f.bits;let w,b,k,m,_,g,v=0,p=0,x=0,y=0,E=0,A=0,R=0,Z=0,S=0,T=0,O=null,U=0;const D=new Uint16Array(16),B=new Uint16Array(16);let C,N,I,z=null,F=0;for(v=0;v<=r;v++)D[v]=0;for(p=0;p<n;p++)D[t[i+p]]++;for(E=u,y=r;y>=1&&0===D[y];y--);if(E>y&&(E=y),0===y)return a[h++]=20971520,a[h++]=20971520,f.bits=1,0;for(x=1;x<y&&0===D[x];x++);for(E<x&&(E=x),Z=1,v=1;v<=r;v++)if(Z<<=1,Z-=D[v],Z<0)return-1;if(Z>0&&(0===e||1!==y))return-1;for(B[1]=0,v=1;v<r;v++)B[v+1]=B[v]+D[v];for(p=0;p<n;p++)0!==t[i+p]&&(c[B[t[i+p]]++]=p);if(0===e?(O=z=c,g=19):1===e?(O=s,U-=257,z=o,F-=257,g=256):(O=l,z=d,g=-1),T=0,p=0,v=x,_=h,A=E,R=0,k=-1,S=1<<E,m=S-1,1===e&&S>852||2===e&&S>592)return 1;for(;;){C=v-R,c[p]<g?(N=0,I=c[p]):c[p]>g?(N=z[F+c[p]],I=O[U+c[p]]):(N=96,I=0),w=1<<v-R,b=1<<A,x=b;do{b-=w,a[_+(T>>R)+b]=C<<24|N<<16|I|0}while(0!==b);for(w=1<<v-1;T&w;)w>>=1;if(0!==w?(T&=w-1,T+=w):T=0,p++,0==--D[v]){if(v===y)break;v=t[i+c[p]]}if(v>E&&(T&m)!==k){for(0===R&&(R=E),_+=x,A=v-R,Z=1<<A;A+R<y&&(Z-=D[A+R],!(Z<=0));)A++,Z<<=1;if(S+=1<<A,1===e&&S>852||2===e&&S>592)return 1;k=T&m,a[k]=E<<24|A<<16|_-h|0}}return 0!==T&&(a[_+T]=v-R<<24|64<<16|0),f.bits=E,0},c={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{Z_FINISH:f,Z_BLOCK:u,Z_TREES:w,Z_OK:b,Z_STREAM_END:k,Z_NEED_DICT:m,Z_STREAM_ERROR:_,Z_DATA_ERROR:g,Z_MEM_ERROR:v,Z_BUF_ERROR:p,Z_DEFLATED:x}=c,y=12,E=30,A=e=>(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24);function R(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Z=e=>{if(!e||!e.state)return _;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,b},S=e=>{if(!e||!e.state)return _;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,Z(e)},T=(e,t)=>{let i;if(!e||!e.state)return _;const n=e.state;return t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?_:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,S(e))},O=(e,t)=>{if(!e)return _;const i=new R;e.state=i,i.window=null;const n=T(e,t);return n!==b&&(e.state=null),n};let U,D,B=!0;const C=e=>{if(B){U=new Int32Array(512),D=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(h(1,e.lens,0,288,U,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;h(2,e.lens,0,32,D,0,e.work,{bits:5}),B=!1}e.lencode=U,e.lenbits=9,e.distcode=D,e.distbits=5},N=(e,t,i,n)=>{let a;const r=e.state;return null===r.window&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),n>=r.wsize?(r.window.set(t.subarray(i-r.wsize,i),0),r.wnext=0,r.whave=r.wsize):(a=r.wsize-r.wnext,a>n&&(a=n),r.window.set(t.subarray(i-n,i-n+a),r.wnext),(n-=a)?(r.window.set(t.subarray(i-n,i),0),r.wnext=n,r.whave=r.wsize):(r.wnext+=a,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=a))),0};var I=S,z=O,F=(e,i)=>{let r,s,o,l,d,c,R,Z,S,T,O,U,D,B,I,z,F,L,M,H,j,P,K=0;const Y=new Uint8Array(4);let X,G;const W=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return _;r=e.state,r.mode===y&&(r.mode=13),d=e.next_out,o=e.output,R=e.avail_out,l=e.next_in,s=e.input,c=e.avail_in,Z=r.hold,S=r.bits,T=c,O=R,P=b;e:for(;;)switch(r.mode){case 1:if(0===r.wrap){r.mode=13;break}for(;S<16;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(2&r.wrap&&35615===Z){r.check=0,Y[0]=255&Z,Y[1]=Z>>>8&255,r.check=n(r.check,Y,2,0),Z=0,S=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&Z)<<8)+(Z>>8))%31){e.msg="incorrect header check",r.mode=E;break}if((15&Z)!==x){e.msg="unknown compression method",r.mode=E;break}if(Z>>>=4,S-=4,j=8+(15&Z),0===r.wbits)r.wbits=j;else if(j>r.wbits){e.msg="invalid window size",r.mode=E;break}r.dmax=1<<r.wbits,e.adler=r.check=1,r.mode=512&Z?10:y,Z=0,S=0;break;case 2:for(;S<16;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(r.flags=Z,(255&r.flags)!==x){e.msg="unknown compression method",r.mode=E;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=E;break}r.head&&(r.head.text=Z>>8&1),512&r.flags&&(Y[0]=255&Z,Y[1]=Z>>>8&255,r.check=n(r.check,Y,2,0)),Z=0,S=0,r.mode=3;case 3:for(;S<32;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}r.head&&(r.head.time=Z),512&r.flags&&(Y[0]=255&Z,Y[1]=Z>>>8&255,Y[2]=Z>>>16&255,Y[3]=Z>>>24&255,r.check=n(r.check,Y,4,0)),Z=0,S=0,r.mode=4;case 4:for(;S<16;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}r.head&&(r.head.xflags=255&Z,r.head.os=Z>>8),512&r.flags&&(Y[0]=255&Z,Y[1]=Z>>>8&255,r.check=n(r.check,Y,2,0)),Z=0,S=0,r.mode=5;case 5:if(1024&r.flags){for(;S<16;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}r.length=Z,r.head&&(r.head.extra_len=Z),512&r.flags&&(Y[0]=255&Z,Y[1]=Z>>>8&255,r.check=n(r.check,Y,2,0)),Z=0,S=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(U=r.length,U>c&&(U=c),U&&(r.head&&(j=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(s.subarray(l,l+U),j)),512&r.flags&&(r.check=n(r.check,s,U,l)),c-=U,l+=U,r.length-=U),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===c)break e;U=0;do{j=s[l+U++],r.head&&j&&r.length<65536&&(r.head.name+=String.fromCharCode(j))}while(j&&U<c);if(512&r.flags&&(r.check=n(r.check,s,U,l)),c-=U,l+=U,j)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===c)break e;U=0;do{j=s[l+U++],r.head&&j&&r.length<65536&&(r.head.comment+=String.fromCharCode(j))}while(j&&U<c);if(512&r.flags&&(r.check=n(r.check,s,U,l)),c-=U,l+=U,j)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;S<16;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(Z!==(65535&r.check)){e.msg="header crc mismatch",r.mode=E;break}Z=0,S=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=y;break;case 10:for(;S<32;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}e.adler=r.check=A(Z),Z=0,S=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=d,e.avail_out=R,e.next_in=l,e.avail_in=c,r.hold=Z,r.bits=S,m;e.adler=r.check=1,r.mode=y;case y:if(i===u||i===w)break e;case 13:if(r.last){Z>>>=7&S,S-=7&S,r.mode=27;break}for(;S<3;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}switch(r.last=1&Z,Z>>>=1,S-=1,3&Z){case 0:r.mode=14;break;case 1:if(C(r),r.mode=20,i===w){Z>>>=2,S-=2;break e}break;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=E}Z>>>=2,S-=2;break;case 14:for(Z>>>=7&S,S-=7&S;S<32;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if((65535&Z)!=(Z>>>16^65535)){e.msg="invalid stored block lengths",r.mode=E;break}if(r.length=65535&Z,Z=0,S=0,r.mode=15,i===w)break e;case 15:r.mode=16;case 16:if(U=r.length,U){if(U>c&&(U=c),U>R&&(U=R),0===U)break e;o.set(s.subarray(l,l+U),d),c-=U,l+=U,R-=U,d+=U,r.length-=U;break}r.mode=y;break;case 17:for(;S<14;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(r.nlen=257+(31&Z),Z>>>=5,S-=5,r.ndist=1+(31&Z),Z>>>=5,S-=5,r.ncode=4+(15&Z),Z>>>=4,S-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=E;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;S<3;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}r.lens[W[r.have++]]=7&Z,Z>>>=3,S-=3}for(;r.have<19;)r.lens[W[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,X={bits:r.lenbits},P=h(0,r.lens,0,19,r.lencode,0,r.work,X),r.lenbits=X.bits,P){e.msg="invalid code lengths set",r.mode=E;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;K=r.lencode[Z&(1<<r.lenbits)-1],I=K>>>24,z=K>>>16&255,F=65535&K,!(I<=S);){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(F<16)Z>>>=I,S-=I,r.lens[r.have++]=F;else{if(16===F){for(G=I+2;S<G;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(Z>>>=I,S-=I,0===r.have){e.msg="invalid bit length repeat",r.mode=E;break}j=r.lens[r.have-1],U=3+(3&Z),Z>>>=2,S-=2}else if(17===F){for(G=I+3;S<G;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}Z>>>=I,S-=I,j=0,U=3+(7&Z),Z>>>=3,S-=3}else{for(G=I+7;S<G;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}Z>>>=I,S-=I,j=0,U=11+(127&Z),Z>>>=7,S-=7}if(r.have+U>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=E;break}for(;U--;)r.lens[r.have++]=j}}if(r.mode===E)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=E;break}if(r.lenbits=9,X={bits:r.lenbits},P=h(1,r.lens,0,r.nlen,r.lencode,0,r.work,X),r.lenbits=X.bits,P){e.msg="invalid literal/lengths set",r.mode=E;break}if(r.distbits=6,r.distcode=r.distdyn,X={bits:r.distbits},P=h(2,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,X),r.distbits=X.bits,P){e.msg="invalid distances set",r.mode=E;break}if(r.mode=20,i===w)break e;case 20:r.mode=21;case 21:if(c>=6&&R>=258){e.next_out=d,e.avail_out=R,e.next_in=l,e.avail_in=c,r.hold=Z,r.bits=S,a(e,O),d=e.next_out,o=e.output,R=e.avail_out,l=e.next_in,s=e.input,c=e.avail_in,Z=r.hold,S=r.bits,r.mode===y&&(r.back=-1);break}for(r.back=0;K=r.lencode[Z&(1<<r.lenbits)-1],I=K>>>24,z=K>>>16&255,F=65535&K,!(I<=S);){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(z&&0==(240&z)){for(L=I,M=z,H=F;K=r.lencode[H+((Z&(1<<L+M)-1)>>L)],I=K>>>24,z=K>>>16&255,F=65535&K,!(L+I<=S);){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}Z>>>=L,S-=L,r.back+=L}if(Z>>>=I,S-=I,r.back+=I,r.length=F,0===z){r.mode=26;break}if(32&z){r.back=-1,r.mode=y;break}if(64&z){e.msg="invalid literal/length code",r.mode=E;break}r.extra=15&z,r.mode=22;case 22:if(r.extra){for(G=r.extra;S<G;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}r.length+=Z&(1<<r.extra)-1,Z>>>=r.extra,S-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;K=r.distcode[Z&(1<<r.distbits)-1],I=K>>>24,z=K>>>16&255,F=65535&K,!(I<=S);){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(0==(240&z)){for(L=I,M=z,H=F;K=r.distcode[H+((Z&(1<<L+M)-1)>>L)],I=K>>>24,z=K>>>16&255,F=65535&K,!(L+I<=S);){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}Z>>>=L,S-=L,r.back+=L}if(Z>>>=I,S-=I,r.back+=I,64&z){e.msg="invalid distance code",r.mode=E;break}r.offset=F,r.extra=15&z,r.mode=24;case 24:if(r.extra){for(G=r.extra;S<G;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}r.offset+=Z&(1<<r.extra)-1,Z>>>=r.extra,S-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=E;break}r.mode=25;case 25:if(0===R)break e;if(U=O-R,r.offset>U){if(U=r.offset-U,U>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=E;break}U>r.wnext?(U-=r.wnext,D=r.wsize-U):D=r.wnext-U,U>r.length&&(U=r.length),B=r.window}else B=o,D=d-r.offset,U=r.length;U>R&&(U=R),R-=U,r.length-=U;do{o[d++]=B[D++]}while(--U);0===r.length&&(r.mode=21);break;case 26:if(0===R)break e;o[d++]=r.length,R--,r.mode=21;break;case 27:if(r.wrap){for(;S<32;){if(0===c)break e;c--,Z|=s[l++]<<S,S+=8}if(O-=R,e.total_out+=O,r.total+=O,O&&(e.adler=r.check=r.flags?n(r.check,o,O,d-O):t(r.check,o,O,d-O)),O=R,(r.flags?Z:A(Z))!==r.check){e.msg="incorrect data check",r.mode=E;break}Z=0,S=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;S<32;){if(0===c)break e;c--,Z+=s[l++]<<S,S+=8}if(Z!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=E;break}Z=0,S=0}r.mode=29;case 29:P=k;break e;case E:P=g;break e;case 31:return v;default:return _}return e.next_out=d,e.avail_out=R,e.next_in=l,e.avail_in=c,r.hold=Z,r.bits=S,(r.wsize||O!==e.avail_out&&r.mode<E&&(r.mode<27||i!==f))&&N(e,e.output,e.next_out,O-e.avail_out),T-=e.avail_in,O-=e.avail_out,e.total_in+=T,e.total_out+=O,r.total+=O,r.wrap&&O&&(e.adler=r.check=r.flags?n(r.check,o,O,e.next_out-O):t(r.check,o,O,e.next_out-O)),e.data_type=r.bits+(r.last?64:0)+(r.mode===y?128:0)+(20===r.mode||15===r.mode?256:0),(0===T&&0===O||i===f)&&P===b&&(P=p),P},L=e=>{if(!e||!e.state)return _;let t=e.state;return t.window&&(t.window=null),e.state=null,b},M=(e,t)=>{if(!e||!e.state)return _;const i=e.state;return 0==(2&i.wrap)?_:(i.head=t,t.done=!1,b)},H=(e,i)=>{const n=i.length;let a,r,s;return e&&e.state?(a=e.state,0!==a.wrap&&11!==a.mode?_:11===a.mode&&(r=1,r=t(r,i,n,0),r!==a.check)?g:(s=N(e,i,n,n),s?(a.mode=31,v):(a.havedict=1,b))):_};const j=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var P=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(const t in i)j(i,t)&&(e[t]=i[t])}}return e},K=e=>{let t=0;for(let i=0,n=e.length;i<n;i++)t+=e[i].length;const i=new Uint8Array(t);for(let t=0,n=0,a=e.length;t<a;t++){let a=e[t];i.set(a,n),n+=a.length}return i};let Y=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){Y=!1}const X=new Uint8Array(256);for(let e=0;e<256;e++)X[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;X[254]=X[254]=1;var G=e=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(e);let t,i,n,a,r,s=e.length,o=0;for(a=0;a<s;a++)i=e.charCodeAt(a),55296==(64512&i)&&a+1<s&&(n=e.charCodeAt(a+1),56320==(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),a++)),o+=i<128?1:i<2048?2:i<65536?3:4;for(t=new Uint8Array(o),r=0,a=0;r<o;a++)i=e.charCodeAt(a),55296==(64512&i)&&a+1<s&&(n=e.charCodeAt(a+1),56320==(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),a++)),i<128?t[r++]=i:i<2048?(t[r++]=192|i>>>6,t[r++]=128|63&i):i<65536?(t[r++]=224|i>>>12,t[r++]=128|i>>>6&63,t[r++]=128|63&i):(t[r++]=240|i>>>18,t[r++]=128|i>>>12&63,t[r++]=128|i>>>6&63,t[r++]=128|63&i);return t},W=(e,t)=>{const i=t||e.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(e.subarray(0,t));let n,a;const r=new Array(2*i);for(a=0,n=0;n<i;){let t=e[n++];if(t<128){r[a++]=t;continue}let s=X[t];if(s>4)r[a++]=65533,n+=s-1;else{for(t&=2===s?31:3===s?15:7;s>1&&n<i;)t=t<<6|63&e[n++],s--;s>1?r[a++]=65533:t<65536?r[a++]=t:(t-=65536,r[a++]=55296|t>>10&1023,r[a++]=56320|1023&t)}}return((e,t)=>{if(t<65534&&e.subarray&&Y)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let i="";for(let n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i})(r,a)},q=(e,t)=>{(t=t||e.length)>e.length&&(t=e.length);let i=t-1;for(;i>=0&&128==(192&e[i]);)i--;return i<0||0===i?t:i+X[e[i]]>t?i:t},J={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var Q=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};var V=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const $=Object.prototype.toString,{Z_NO_FLUSH:ee,Z_FINISH:te,Z_OK:ie,Z_STREAM_END:ne,Z_NEED_DICT:ae,Z_STREAM_ERROR:re,Z_DATA_ERROR:se,Z_MEM_ERROR:oe}=c;function le(e){this.options=P({chunkSize:65536,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Q,this.strm.avail_out=0;let i=z(this.strm,t.windowBits);if(i!==ie)throw new Error(J[i]);if(this.header=new V,M(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=G(t.dictionary):"[object ArrayBuffer]"===$.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(i=H(this.strm,t.dictionary),i!==ie)))throw new Error(J[i])}function de(e,t){const i=new le(t);if(i.push(e),i.err)throw i.msg||J[i.err];return i.result}le.prototype.push=function(e,t){const i=this.strm,n=this.options.chunkSize,a=this.options.dictionary;let r,s,o;if(this.ended)return!1;for(s=t===~~t?t:!0===t?te:ee,"[object ArrayBuffer]"===$.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;;){for(0===i.avail_out&&(i.output=new Uint8Array(n),i.next_out=0,i.avail_out=n),r=F(i,s),r===ae&&a&&(r=H(i,a),r===ie?r=F(i,s):r===se&&(r=ae));i.avail_in>0&&r===ne&&i.state.wrap>0&&0!==e[i.next_in];)I(i),r=F(i,s);switch(r){case re:case se:case ae:case oe:return this.onEnd(r),this.ended=!0,!1}if(o=i.avail_out,i.next_out&&(0===i.avail_out||r===ne))if("string"===this.options.to){let e=q(i.output,i.next_out),t=i.next_out-e,a=W(i.output,e);i.next_out=t,i.avail_out=n-t,t&&i.output.set(i.output.subarray(e,e+t),0),this.onData(a)}else this.onData(i.output.length===i.next_out?i.output:i.output.subarray(0,i.next_out));if(r!==ie||0!==o){if(r===ne)return r=L(this.strm),this.onEnd(r),this.ended=!0,!0;if(0===i.avail_in)break}}return!0},le.prototype.onData=function(e){this.chunks.push(e)},le.prototype.onEnd=function(e){e===ie&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=K(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var he=le,ce=de,fe=function(e,t){return(t=t||{}).raw=!0,de(e,t)},ue=de,we=c,be={Inflate:he,inflate:ce,inflateRaw:fe,ungzip:ue,constants:we};e.Inflate=he,e.constants=we,e.default=be,e.inflate=ce,e.inflateRaw=fe,e.ungzip=ue,Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=5802.5a998479cf43543543ff.js.map