"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[186],{5758:function(n,t,e){e.a(n,(async function(n,o){try{e(7658);var a=e(3396),c=e(4870),i=e(2483),s=e(5174),l=e(1237),u=e(3532),r=e(4739),d=n([l]);l=(d.then?(await d)():d)[0];const f="CreamPlayer",h="Setting",w="homeTheme",y="darkTheme";t.Z={__name:"Home",setup(n){const t=(0,i.tv)(),e=(0,c.iH)(1),o=(0,c.iH)(!0);function d(n){(0,s.xz)(f,h,w,e,n)}function m(n){1===n.button&&(n.preventDefault(),document.body.classList.toggle("dark"),(0,s.xz)(f,h,y,o,!o.value))}function v(n){if(n.includes("playlist")){if(n.includes("id=")){let t=n.match(/id=(.*?)$/)[1];console.log(t),(0,l.o)(t)}}else if(n.includes("song")){if(n.includes("id=")){let t=n.match(/id=(.*?)$/)[1];console.log(t),(0,l.x)(t)}}else t.push({name:"search",params:{q:n}})}return(0,a.bv)((async()=>{(0,s.Xx)(f,h,w,e),await(0,s.Xx)(f,h,y,o),o.value&&!document.body.classList.contains("dark")&&document.body.classList.toggle("dark")})),(0,a.bv)((()=>{window.addEventListener("mousedown",m)})),(0,a.Ah)((()=>{window.removeEventListener("mousedown",m)})),(n,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[1==e.value?((0,a.wg)(),(0,a.j4)(u.Z,{key:0,onSearch:v,onSwitch:d})):(0,a.kq)("",!0),2==e.value?((0,a.wg)(),(0,a.j4)(r.Z,{key:1,onSearch:v,onSwitch:d})):(0,a.kq)("",!0)],64))}},o()}catch(f){o(f)}}))},1237:function(n,t,e){e.a(n,(async function(n,o){try{e.d(t,{o:function(){return r},x:function(){return d}});var a=e(7877),c=n([a]);async function s(n){let t;return await a.ZP.getPlaylistDetails(n).then((n=>{t=n["playlist"]["trackIds"]})).catch((n=>{console.error("Failed to get playlist details:",n)})),t}async function l(n){try{return a.ZP.loadSongDetails(n)}catch(t){console.error("API request failed:",t),setTimeout((()=>{a.ZP.loadSongDetails(n)}),777)}}async function u(n){let t;console.log("Downloading");try{await a.ZP.getSongUrl(n.id).then((n=>{t=n["data"][0]["url"]}))}catch(e){console.error("Get Song URL fail:",e),t=0}console.log(t),a.ZP.downloadSongFile("netease",t,n.cover,(0,a.Am)(n.id),n.id,n.title,n.artist,n.album,n.publishTime)}async function r(n){let t=await s(n);console.log(t);for(const e of t){const n=await l(e.id);console.log(n),await u(n)}}async function d(n){const t=await l(n);console.log(t),await u(t)}a=(c.then?(await c)():c)[0],o()}catch(i){o(i)}}))},3532:function(n,t,e){e.d(t,{Z:function(){return f}});var o=e(3396),a=e(9242),c=e(4870);const i=["onContextmenu"],s={class:"home-search"},l=["onKeyup"];var u={__name:"1",emits:["switch","search"],setup(n,{emit:t}){const e=(0,c.iH)(""),u=(0,c.iH)(null);function r(){t("switch",1)}function d(){t("search",e.value)}function f(){u.value.focus()}return(n,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"home",onContextmenu:(0,a.iM)(r,["prevent"]),onClick:f},[(0,o._)("div",s,[(0,o.wy)((0,o._)("input",{class:"home-input",placeholder:"歌曲名或歌单歌曲链接","onUpdate:modelValue":t[0]||(t[0]=n=>e.value=n),onKeyup:(0,a.D2)(d,["enter"]),autofocus:"",ref_key:"inputRef",ref:u},null,40,l),[[a.nr,e.value]])])],40,i))}},r=e(89);const d=(0,r.Z)(u,[["__scopeId","data-v-df52087a"]]);var f=d},4739:function(n,t,e){function o(n,t){return null}e.d(t,{Z:function(){return s}});var a=e(89);const c={},i=(0,a.Z)(c,[["render",o]]);var s=i},4186:function(n,t,e){e.a(n,(async function(n,o){try{e.r(t);var a=e(4508),c=n([a]);a=(c.then?(await c)():c)[0];const i=a.Z;t["default"]=i,o()}catch(i){o(i)}}))},4508:function(n,t,e){e.a(n,(async function(n,o){try{e.d(t,{Z:function(){return a.Z}});var a=e(5758),c=n([a]);a=(c.then?(await c)():c)[0],o()}catch(i){o(i)}}))}}]);
//# sourceMappingURL=186.d7092e9c.js.map