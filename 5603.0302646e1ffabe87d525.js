(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[5603],{28987:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],s=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],c=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],i=["arguments","this","super","console","window","document","localStorage","module","global"],o=[].concat(r,s,c);function l(e){const l=e.regex,b=n,d={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,t=e.input[a];if("<"===t||","===t)return void n.ignoreMatch();let s;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1);return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch()),(s=e.input.substr(a).match(/^\s+extends\s+/))&&0===s.index&&n.ignoreMatch()}},g={$pattern:n,keyword:a,literal:t,built_in:o,"variable.language":i},u="\\.([0-9](_?[0-9])*)",m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={className:"number",variants:[{begin:`(\\b(${m})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${m})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},A={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"css"}},f={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,y]},p={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},N=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,A,_,f,E];y.contains=N.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(N)});const h=[].concat(p,y.contains),v=h.concat([{begin:/\(/,end:/\)/,keywords:g,contains:["self"].concat(h)}]),w={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:v},S={variants:[{match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...s,...c]}},R={variants:[{match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[w],illegal:/%/},x={match:l.concat(/\b/,(O=[...r,"super"],l.concat("(?!",O.join("|"),")")),b,l.lookahead(/\(/)),className:"title.function",relevance:0};var O;const C={begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},I={match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},w]},T="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",M={match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(T)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[w]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:v,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,A,_,f,p,E,k,{className:"attr",begin:b+l.lookahead(":"),relevance:0},M,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[p,e.REGEXP_MODE,{className:"function",begin:T,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:v}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},R,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[w,e.inherit(e.TITLE_MODE,{begin:b,className:"title.function"})]},{match:/\.\.\./,relevance:0},C,{match:"\\$"+b,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[w]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},S,I,{match:/\$[(.]/}]}}e.exports=function(e){const s=l(e),c=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],r={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[s.exports.CLASS_REFERENCE]},b={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:c},contains:[s.exports.CLASS_REFERENCE]},d={$pattern:n,keyword:a.concat(["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"]),literal:t,built_in:o.concat(c),"variable.language":i},g={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},u=(e,n,a)=>{const t=e.contains.findIndex((e=>e.label===n));if(-1===t)throw new Error("can not find mode to replace");e.contains.splice(t,1,a)};return Object.assign(s.keywords,d),s.exports.PARAMS_CONTAINS.push(g),s.contains=s.contains.concat([g,r,b]),u(s,"shebang",e.SHEBANG()),u(s,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),s.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(s,{name:"TypeScript",aliases:["ts","tsx"]}),s}}}]);
//# sourceMappingURL=5603.0302646e1ffabe87d525.js.map