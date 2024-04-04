/*! © 2024 Yahoo Holdings, Inc. For license information, see js/gpt_sandbox_2cde0d7ff1ddd501d059.bundle.js.LICENSE.txt. */
(()=>{var e={p:""};(()=>{
if(!window.ymailAssetHost)throw new Error("window.ymailAssetHost must be set before running this application.")
;e.p=window.ymailAssetHost})(),(()=>{"use strict";function e(){
return e=Object.assign||function(e){for(var i=1;i<arguments.length;i++){
var n=arguments[i]
;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e
},e.apply(this,arguments)}function i(e,i,n){if(void 0===n&&(n={}),!e){
var t=new Error(i)
;throw t.name="Invariant",!n||0===Object.keys(n).length||(t.data=n),t}return e}
var n,t,d,o,a,r;!function(e){e.APP="APP",e.IFRAME="IFRAME"
}(n||(n={})),function(e){e.REQ="REQ",e.RES="RES"}(t||(t={})),function(e){
e.REFRESH="refresh",e.LOADED="loaded",e.INIT_ERROR="initError"
}(d||(d={})),function(e){e.MAIL="mail",e.BASIC_MAIL="basicMail",e.LOGIN="login",
e.AOL_LOGIN="aolLogin",e.AOL_MAIL="aolMail",e.AOL_BASIC_MAIL="aolBasicMail"
}(o||(o={})),function(e){
e.CLIENT="client",e.VERSION="version",e.LIMITED="limited",
e.HEADER_BIDDER="headerBidder",
e.YMREQID="ymreqid",e.HAQ="haq",e.CACHE="cache",e.BENJI="benji",
e.TEST_ID="testid",e.NCID="ncid"}(a||(a={})),function(e){e.CONFIG="config"
}(r||(r={}));var s,l="gpt-passback";!function(e){
e.SLOT_RENDER_ENDED="slotRenderEnded",
e.SLOT_REQUESTED="slotRequested",e.SLOT_RESPONSE_RECEIVED="slotResponseReceived",
e.IMPRESSION_VIEWABLE="impressionViewable"}(s||(s={}));var c,v="mid_center"
;!function(e){
e.LREC="LREC",e.LREC4="LREC4",e.MON="MON",e.SKY="SKY",e.FULL_PANE="FULL_PANE",
e.FULL_SCREEN="FULL_SCREEN",
e.HORIZON_DESKTOP="HORIZON_DESKTOP",e.BILLBOARD="BILLBOARD",
e.FLUID="FLUID",e.SPOTLIGHT="SPOTLIGHT"}(c||(c={}));var g={[c.LREC]:[300,250],
[c.LREC4]:[300,250],[c.MON]:[300,600],[c.SKY]:[160,600],
[c.FULL_PANE]:[1200,800],[c.FULL_SCREEN]:[1440,1024],[c.HORIZON_DESKTOP]:[3,1],
[c.SPOTLIGHT]:[3,2],[c.BILLBOARD]:[970,250],[c.FLUID]:["fluid"]
},u=(c.LREC,c.LREC4,c.MON,c.SKY,{[c.LREC]:"Slot300_250_1",
[c.LREC4]:"Slot300_250_2",[c.MON]:"Slot300_600",[c.SKY]:"Slot160_600"}),E={
lang:"lang",partner:"cobrand",bucket:"bucket",spaceId:"spaceid",
adLocation:"loc",adBlocker:"abk",AXId:"axid",gamTestId:"gamtestid",
refreshIndex:"ri",age:"bka",gender:"bkg",colo:"colo",lu:"lu",site:"site",
device:"device",region:"region",pageOrigin:"ypu",ncid:"ncid"},m={
[o.MAIL]:"8YHB7Y738",[o.BASIC_MAIL]:"8YHB7Y738",[o.AOL_MAIL]:"8YHB8EU59",
[o.AOL_BASIC_MAIL]:"8YHB8EU59",[o.LOGIN]:"8YHBS13WH",[o.AOL_LOGIN]:"8YHB8G319"
},w=(o.MAIL,
o.BASIC_MAIL,o.AOL_MAIL,o.AOL_BASIC_MAIL,o.LOGIN,o.AOL_LOGIN,1e3),p=12.1,I="",h="ros",R="hb.yahoo.net",f="desktop",L="RENDER_SUCCEEDED",O="RENDER_FAILED",b="SLOT_REQUESTED",S="SLOT_RESPONSE_RECEIVED",y="IMPRESSION_VIEWABLE",A="index",B=/^(https:\/\/([a-z0-9-]+[.])*(mail|login)\.(aol|yahoo)\.com)$/,C=/^(https:\/\/(?:norrin\.)?(alpha-|canary-)?(gpt|gam)\.mail\.(aol|yahoo|yahoosandbox)\.net)$/
;const _=class{constructor(e){
var t=e.mode,d=e.appName,o=e.targetOrigin,a=e.iframeRef
;this.messageId=0,this.listener=null,
t&&Object.keys(n).map((e=>n[e])).includes(t)||i(!1,"Valid 'mode' needs to be specified"),
o||i(!1,"Valid 'targetOrigin' needs to be specified"),
t!==n.APP||a||i(!1,"Valid 'iframeRef' needs to be specified"),
this.mode=t,this.targetOrigin=o,this.iframeRef=a,this.appName=d||"MAIL_APP"}
sendMessage(e){var i,t
;if(e.requestId=++this.messageId,this.mode===n.APP)null==(i=this.iframeRef)||null==(t=i.contentWindow)||t.postMessage(e,this.targetOrigin);else if(this.mode===n.IFRAME){
var d,o;null==(d=window)||null==(o=d.parent)||o.postMessage(e,this.targetOrigin)
}}sendRequestMessage(e,i){void 0===i&&(i={}),this.sendMessage({app:this.appName,
type:t.REQ,name:e,data:i})}isReceivedMessageValid(e){var i,t=this.mode
;return!!Object.keys(n).map((e=>n[e])).includes(t)&&(!!(t!==n.APP||C.test(e.origin)&&e.source===(null==(i=this.iframeRef)?void 0:i.contentWindow))&&!!(t!==n.IFRAME||B.test(e.origin)&&e.source===window.parent))
}attachListener(e){var i=i=>{this.isReceivedMessageValid(i)&&e(i)}
;this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null),window.addEventListener("message",i),this.listener=i}
detachListener(){
this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null)}};var x="devbox";function N(){
return"devbox"===x||"openhouse"===x}function M(e,i){
var n,t=document.createElement("script"),d=document.getElementsByTagName("script")[0]
;(t.type="text/javascript",
t.async=!0,t.src=e,t.id=i,d)&&(null==(n=d.parentNode)||n.insertBefore(t,d))}
function D(e,i,n,t){
void 0===n&&(n="none"),window.advBidxc=window.advBidxc||{},window.advBidxc.execute=window.advBidxc.execute||[],
window.advBidxc.execute.push((function(){var d,o
;null!=(d=window)&&null!=(o=d.advBidxc)&&o.setCustomKeyValues&&window.advBidxc.setCustomKeyValues({
k1:{key:"publisherblob",value:e},k2:{key:"bucket",value:i},k3:{key:"cobrand",
value:n},k4:{key:"lang",value:t}})}))}var T=(e,i)=>{
var n=Object.keys(u).find((i=>u[i]===e))||null;if(n)return n
;if(!Array.isArray(i)||!i)return null;if(0===i[0]&&0===i[1])return c.FLUID
;var t=Object.keys(g).find((e=>{var n=g[e];return n[0]===i[0]&&n[1]===i[1]}))
;return t||null},P=e=>{var i=document.getElementById(l);if(i&&e){
var n=null==i?void 0:i.children[0],t=null==n?void 0:n.children[0],d=window.innerWidth,o=((e,i)=>{
switch(i){case c.BILLBOARD:return e>=970?250:Math.floor(e/3.88)
;case c.HORIZON_DESKTOP:var n=e>480&&e<1360?4.44:5.33;return Math.floor(e/n)
;case c.SPOTLIGHT:return Math.floor(e/.89)}return 0})(innerWidth,e)
;n&&t&&(n.style.height=o+"px",
n.style.width="100%",t.height=o.toString(),t.width=d.toString())}},k=e=>{
var i=e.positions,n=void 0===i?[]:i,t=e.adUnitPath,d=e.size,o=e.div,a=void 0===o?l:o,r=e.targetingConfig
;return n.length||n.push({adUnitPath:t,adLocation:null==r?void 0:r.adLocation,
size:d,div:a}),n},U=e=>{var i=document.getElementById(l)
;Array.isArray(e)&&i&&(0===e[0]&&0===e[1]?i.setAttribute("style","width:600px;height:1024px;padding-left:200px;padding-right:800px;"):i.setAttribute("style","width:"+e[0]+"px;height:"+e[1]+"px"))
};function j(e){if(!e||"string"!=typeof e)return""
;for(var i,n="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",t="",d=0,o=0,a=0;a<e.length;)a+=("string"==typeof(i=e[a])&&(i=i.charCodeAt(0)),
d<0?o|=i>>-d:o=i<<d&248,d>3?(d-=8,1):(d<4&&(t+=n[o>>3],d+=5),0))
;return t+(d<0?n[o>>3]:"")}function H(e,i){if(null==e)return{}
;var n,t,d={},o=Object.keys(e)
;for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(d[n]=e[n]);return d}
var q=["slot","yieldGroupIds","isEmpty","size"],F=["slot","size","yieldGroupIds","isEmpty"],G=i=>{
var n,t=i.client,d=i.messageClient;return i=>{
var a=i.gptEvent,r=a.slot,l=a.size,v=(a.yieldGroupIds,
a.isEmpty),g=H(a,F),u=r.getSlotElementId(),E=T(u,l)
;if(v||(t===o.LOGIN||t===o.AOL_LOGIN?U(l):E===c.HORIZON_DESKTOP||E===c.BILLBOARD||E===c.SPOTLIGHT?(n&&window.removeEventListener("resize",n),
(n=()=>{P(E)
})(),window.addEventListener("resize",n)):n&&(window.removeEventListener("resize",n),
n=null)),d){var m=e({},g,{position:E,isEmpty:v,size:l})
;d.sendRequestMessage(s.SLOT_RENDER_ENDED,m)}}},V=e=>{
var i=e.benji,n=e.messageClient,t=e.client;i.on(b,(e=>{var i=e.messageClient
;return()=>{i.sendRequestMessage(s.SLOT_REQUESTED)}})({messageClient:n
})),i.on(L,G({client:t,messageClient:n})),i.on(O,G({client:t,messageClient:n})),
i.on(y,(e=>{var i=e.messageClient;return()=>{
i.sendRequestMessage(s.IMPRESSION_VIEWABLE)}})({messageClient:n})),i.on(S,(e=>{
var i=e.messageClient;return()=>{i.sendRequestMessage(s.SLOT_RESPONSE_RECEIVED)}
})({messageClient:n}))},z=(e,i)=>e===u[c.MON]?{loc:i,ri:"1",noads:"1"}:{loc:i,
ri:"1"},Y=function(i){return void 0===i&&(i=[]),i.reduce(((i,n)=>{
var t=n.div,d=n.adLocation,o=n.adUnitPath,a=n.size,r=n.stackGroup
;return i[t]=e({id:t,kvs:z(t,d),path:o,region:A,size:a},r?{stackGroup:r}:null),i
}),{})},K=function(e,i){void 0===e&&(e=[]),void 0===i&&(i=!0),e.forEach((e=>{
var n=e.div,t=e.stackGroup,d=document.getElementById(n)||t&&document.getElementById(n+"-collapse")
;if(!d){if((d=document.createElement("div")).id=n,t){
var o="ad-stacking-wrapper-"+t,a=document.getElementById(o)
;return a||((a=document.createElement("div")).id=o,
a.style.width="300px",a.style.height="600px",
a.style.overflow="hidden",document.body.appendChild(a)),
i&&n===u[c.MON]&&(d.id=n+"-collapse",
d.style.overflow="hidden"),void a.appendChild(d)}document.body.appendChild(d)}
}))},W=e=>{
var i,n=e.oldPositions,t=e.removeContainers,d=void 0===t||t,o=n.map((e=>e.div))
;null==(i=window.benji)||i.destroy(o),d&&function(e){
void 0===e&&(e=[]),e.forEach((e=>{var i,n,t=e.div,d=e.stackGroup
;null==(i=document.getElementById(t))||i.remove(),
d&&(null==(n=document.getElementById(t+"-collapse"))||n.remove())}))}(n)},Q=i=>{
var t,a=i.config,r=i.client,s=k(a),l=new _({mode:n.IFRAME,targetOrigin:a.pageUrl
}),c=!a.yahooPrebid
;a.positions=s,l.sendRequestMessage(d.LOADED),K(a.positions,c);var v=(i=>{
var n=i.config,t=i.client,d=void 0===t?o.MAIL:t,a=n.targetingConfig,r=void 0===a?{}:a,s=n.headerBidderConfig,l=void 0===s?{}:s,c=n.positions,v=void 0===c?[]:c,g=n.adStackingV2Enabled,u=void 0!==g&&g,E=n.headerBidder,w=void 0!==E&&E,p=n.yahooPrebid,I=void 0!==p&&p,h=n.limited,R=void 0!==h&&h,f=n.npa,L=void 0!==f&&f,O=n.pageUrl,b=void 0===O?"":O,S=r.age,y=void 0===S?0:S,A=r.gender,B=void 0===A?0:A,C=r.colo,_=void 0===C?"":C,x=r.lu,N=void 0===x?"":x,M=r.device,D=void 0===M?"":M,T=r.region,P=void 0===T?"":T,k=r.lang,U=void 0===k?"":k,j=r.spaceId,H=void 0===j?"":j,q=r.AXId,F=void 0===q?"":q,G=r.adBlocker,V=void 0===G?"":G,z=l,K=z.buckets,W=void 0===K?[]:K,Q=z.cobrand,X=void 0===Q?"":Q,Z=z.site,J=void 0===Z?"":Z,$=z.dv360,ee=void 0===$?"":$,ie=z.host,ne=void 0===ie?"mail.yahoo.com":ie
;return{i13n:e({bka:y.toString(),bkg:B.toString(),colo:_,lu:N,site:J,device:D,
region:P,lang:U,spaceid:H,axid:F,bucket:W,cobrand:X,url:b,axidDv360:ee},V?{abk:V
}:null),feature:e({headerBidding:!I&&w,enableYahooPrebid:I},I?{
enableRefreshDebounce:!0}:null,{enableNTSFallback:!1,enableEdgeToEdge:!1,
enableAdStacking:u,collapseWhenNoFill:!0,enablef10d509c:!0}),setting:{
renderOnStart:!0,headerBidder:{domain:ne,customerId:m[d]||m[o.MAIL]},consent:{
allowOnlyLimitedAds:R,allowOnlyNonPersonalizedAds:L},tracking:{debug:!0,
metrics:!0,performance:!0}},positions:Y(v),event:{}}})({config:a,client:r})
;void 0!==window.benji?window.benji.start(v):window.benji={benjiConfig:v
},null!=(t=window.benji)&&t.isReady?V({client:r,benji:window.benji,
messageClient:l}):window.addEventListener("benji:ready",(()=>{V({client:r,
benji:window.benji,messageClient:l})})),l.attachListener((e=>{var i
;if((null==e||null==(i=e.data)?void 0:i.name)===d.REFRESH){
var n,t=e.data.data,o=t.config,a=t.redefineTargeting,r=t.targetingConfig
;if(a&&r.spaceId)null==(n=window.benji)||n.updateI13N({spaceid:r.spaceId})
;var l,c=o.positions;if(s&&c&&c.length!==s.length)W({oldPositions:s,
removeContainers:!0}),(e=>{var i,n=e.renderConfig,t=!n.yahooPrebid
;K(n.positions,t);var d=Y(n.positions);null==(i=window.benji)||i.render(d)})({
renderConfig:o});else null==(l=window.benji)||l.refresh(A,{checkViewport:!1})}
}))},X=i=>{var n=i.client,t=i.messageClient,d=window.googletag.pubads()
;d.addEventListener(s.SLOT_RENDER_ENDED,(i=>{var n,t=i.client,d=i.messageClient
;return i=>{
var a=i.slot,r=(i.yieldGroupIds,i.isEmpty),l=i.size,v=H(i,q),g=a.getSlotElementId(),u=T(g,l)
;if(!1===r&&(t===o.LOGIN||t===o.AOL_LOGIN?U(l):u===c.HORIZON_DESKTOP||u===c.BILLBOARD||u===c.SPOTLIGHT?(n&&window.removeEventListener("resize",n),
(n=()=>{P(u)
})(),window.addEventListener("resize",n)):n&&(window.removeEventListener("resize",n),
n=null)),d){var E=e({},v,{position:u,isEmpty:r,size:l})
;d.sendRequestMessage(s.SLOT_RENDER_ENDED,E)}}})({client:n,messageClient:t
})),d.addEventListener(s.SLOT_REQUESTED,(e=>{var i=e.messageClient;return()=>{
i.sendRequestMessage(s.SLOT_REQUESTED)}})({messageClient:t
})),d.addEventListener(s.SLOT_RESPONSE_RECEIVED,(e=>{var i=e.messageClient
;return()=>{i.sendRequestMessage(s.SLOT_RESPONSE_RECEIVED)}})({messageClient:t
})),d.addEventListener(s.IMPRESSION_VIEWABLE,(e=>{var i=e.messageClient
;return()=>{i.sendRequestMessage(s.IMPRESSION_VIEWABLE)}})({messageClient:t}))
},Z=e=>{var i;for(i in e)if(void 0!==e[i]){var n="AXId"===i?j(e[i]):e[i]
;window.googletag.pubads().setTargeting(E[i],n)}},J=(e,i)=>{var n
;if(i)for(n in e)if(void 0!==e[n]){var t="AXId"===n?j(e[n]):e[n]
;i.setTargeting(E[n],t)}},$=e=>{new _({mode:n.IFRAME,targetOrigin:"*"
}).sendRequestMessage(d.INIT_ERROR,e)},ee=e=>{e.forEach((e=>{var i=e.div
;if(!document.getElementById(i)){var n=document.createElement("div")
;n.id=i===u[c.MON]?i+"-collapse":i,document.body.appendChild(n)}}))
},ie=(i,n,t)=>n.map((n=>{
var d=n.adUnitPath,o=n.adLocation,a=n.size,r=n.div,s=i.defineSlot(d,a,r)
;return s.addService(i.pubads()),t&&J(e({},t,{refreshIndex:"1",adLocation:o
}),s),s}));(()=>{var i,t,a;window.googletag=window.googletag||{cmd:[]}
;var r=(null==(i=window.location.hash)?void 0:i.substring(1))||"",s=(e=>{
var i={};if(e)for(var n=e.substring(1).split("&"),t=0;t<n.length;t++){
var d=n[t].split("=");i[decodeURIComponent(d[0])]=decodeURIComponent(d[1]||"")}
return i
})(window.location.search),c=s.ymreqid,g=1===parseInt(s.benji||"",10),u=s.client,E=1,L={}
;if(!r){var O="Config hash is empty";throw $({error:O,ymreqid:c}),new Error(O)}
try{if(r.indexOf("=")>-1){var b=r.split("=")[1]||"{}"
;L=JSON.parse(decodeURIComponent(b))}else L=JSON.parse(decodeURIComponent(r))
}catch(me){if($({error:"Failed to parse config",ymreqid:c}),N())throw me;return}
if(g)Q({config:L,client:u});else{
var S=L,y=S.size,A=S.div,B=void 0===A?l:A,C=S.pageUrl,x=S.npa,T=void 0!==x&&x,P=S.targetingConfig,U=S.PPId,j=S.headerBidderConfig,H=k(L)
;ee(H)
;var q=(null==(t=L)?void 0:t.limited)||!1,F=(null==(a=L)?void 0:a.headerBidder)||!1,G=new _({
mode:n.IFRAME,targetOrigin:C});if(F&&j){
var V=j.pblob,z=j.buckets,Y=j.host,K=j.cobrand,W=j.site,ne=j.region,te=void 0===ne?"us":ne,de=j.lang,oe=void 0===de?"en-US":de,ae=j.headerBidderVersion,re=j.dv360,se=void 0===re?"":re,le=j.AXId,ce=void 0===le?"":le
;V||G.sendRequestMessage(d.INIT_ERROR,{error:"pblob is missing",hash:r,ymreqid:c
}),!function(i,n){
var t=w,d=I,a=h,r=R,s=f,l=p,c=n||{},v=c.limitedAds,g=c.region,u=c.lang,E=c.site,L=c.client,O=c.headerBidderVersion,b=c.dv360,S=c.AXId
;window.advBidxc=window.advBidxc||{},
window.advBidxc.execute=window.advBidxc.execute||[],
window.advBidxc.timeout=t,window.advBidxc.customerId=m[L]||m[o.MAIL],
window.advBidxc.domain=i,
window.advBidxc.version=O||l,window.advBidxc.startTime=(new Date).getTime(),
window.advBidxc.mchnm=d,
window.advBidxc.section=a,window.advBidxc.limitedAds=v,window.advBidxc.region=g,
window.advBidxc.lang=u,window.advBidxc.site=E,window.advBidxc.device=s;var y=e({
section:a,region:g,lang:u,site:E,device:s},b?{axid_e:b}:null,S?{axid_l:S}:null)
;window.advBidxc.pub=y,window.advBidxc.loadGPT=window.setTimeout((function(){
window.advBidxc&&!window.advBidxc.isAdServerLoaded&&(M(window.advBidxc.limitedAds?"https://pagead2.googlesyndication.com/tag/js/gpt.js":"https://securepubads.g.doubleclick.net/tag/js/gpt.js","gpt-script"),
window.advBidxc.isAdServerLoaded=!0)
}),window.advBidxc.timeout),M("https://"+r+"/bidexchange.js?cid="+window.advBidxc.customerId+"&version="+window.advBidxc.version+"&dn="+encodeURIComponent(window.advBidxc.domain)+"&yregion="+encodeURIComponent(window.advBidxc.region)+"&ylang="+encodeURIComponent(window.advBidxc.lang)+"&ysite="+encodeURIComponent(window.advBidxc.site)+"&ydevice="+encodeURIComponent(window.advBidxc.device)+"&ysection="+window.advBidxc.section,"mnet-script")
}(Y,{limitedAds:(null==j?void 0:j.limited)||!1,site:W,region:te,lang:oe,
client:u,headerBidderVersion:ae,dv360:se,AXId:ce}),D(V,z,K,oe)}if(y){
var ve=function(e){var i=0,n=0
;return"fluid"===e||("number"==typeof e[0]&&"number"==typeof e[1]?(i=e[0],
n=e[1]):e.forEach((e=>{
Array.isArray(e)&&e[0]&&e[1]&&(i=Math.max(e[0],i),n=Math.max(e[1],n))}))),{
maxWidth:i,maxHeight:n}
}(y),ge=ve.maxWidth,ue=ve.maxHeight,Ee=document.getElementById(B)
;Ee&&ge&&ue&&Ee.setAttribute("style","width:"+ge+"px;height:"+ue+"px")}
G.sendRequestMessage(d.LOADED,{ymreqid:c}),window.googletag.cmd.push((()=>{
var e=window.googletag,i=ie(e,H,P);null!=i&&i.length?(X({client:u,
messageClient:G}),G.attachListener((n=>{if(n.data.name===d.REFRESH){
var t=n.data.data,o=t.config,a=t.redefineTargeting,r=t.targetingConfig;if(a&&r){
if(F&&j)D(j.pblob,j.buckets,j.cobrand,j.lang);Z(r)}var s=o.positions,l=!1
;if(H&&s&&(l=s.length!==H.length),l&&s){googletag.destroySlots(),E=1,ee(s)
;var v=ie(e,s,r)
;if(null==v||!v.length)return void G.sendRequestMessage(d.INIT_ERROR,{
error:"ROTATE: Error redefining ad slot",ymreqid:c});v.forEach((i=>{e.display(i)
}))}else i.forEach((e=>{J({refreshIndex:(++E).toString()},e)
})),window.googletag.pubads().refresh()}
})),e.pubads().enableSingleRequest(),e.enableServices(),
e.pubadsReady?(P&&Z(P),(null==P?void 0:P.adLocation)===v&&e.pubads().collapseEmptyDivs(!0),
e.pubads().set("page_url",C),
e.pubads().setForceSafeFrame(!0),U&&e.pubads().setPublisherProvidedId(U),
T?e.pubads().setPrivacySettings({nonPersonalizedAds:!0
}):q&&e.pubads().setPrivacySettings({limitedAds:!0,restrictDataProcessing:!0
}),i.forEach((i=>{e.display(i)}))):G.sendRequestMessage(d.INIT_ERROR,{
error:"PubAdsService failed to load",ymreqid:c
})):G.sendRequestMessage(d.INIT_ERROR,{error:"Error defining ad slot",ymreqid:c
})}))}})()})()})();