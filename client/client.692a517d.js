function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,p=!1;function m(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=t[e].claim_order,i=(o>0&&t[n[o]].claim_order<=s?o+1:m(1,o,(e=>t[n[e]].claim_order),s))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,o=Math.max(a,o)}const s=[],i=[];let a=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(s.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);s.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<s.length&&i[t].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function $(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function x(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function E(){return w(" ")}function S(){return w("")}function A(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function T(e){return function(t){return t.preventDefault(),e.call(this,t)}}function L(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:L(e,r,t[r])}function R(e){return Array.from(e.childNodes)}function N(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function I(e,t,n,r,o=!1){N(e);const s=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o||(e.claim_info.last_index=r),s}}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,s}}return r()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function k(e,t,n,r){return I(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function O(e,t,n){return k(e,t,n,b)}function C(e,t,n){return k(e,t,n,x)}function U(e,t){return I(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>w(t)),!0)}function j(e){return U(e," ")}function M(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function D(e){const t=M(e,"HTML_TAG_START",0),n=M(e,"HTML_TAG_END",t);if(t===n)return new J;N(e);const r=e.splice(t,n+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new J(o)}function H(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function q(e,t){e.value=null==t?"":t}function G(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function B(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=b("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=G();let o;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=A(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{o=A(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||o&&n.contentWindow)&&o(),v(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class J extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=b(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)$(this.t,this.n[t],e)}}function K(e){h=e}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function W(e){V().$$.on_mount.push(e)}function F(e){V().$$.after_update.push(e)}function Y(e){V().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function re(e){Z.push(e)}const oe=new Set;let se=0;function ie(){const e=h;do{for(;se<X.length;){const e=X[se];se++,K(e),ae(e.$$)}for(K(null),X.length=0,se=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];oe.has(t)||(oe.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,oe.clear(),K(e)}function ae(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function fe(){le.r||o(le.c),le=le.p}function de(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function pe(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function _e(e,t){e&&e.l(t)}function $e(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||re((()=>{const t=c.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(re)}function ve(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ie)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(t,n,s,i,a,c,l,u=[-1]){const f=h;K(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),m&&ye(t,e)),n})):[],d.update(),m=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const e=R(n.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&de(t.$$.fragment),$e(t,n.target,n.anchor,n.customElement),p=!1,ie()}K(f)}class xe{$destroy(){ve(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const we=[];function Ee(t,n=e){let r;const o=new Set;function s(e){if(i(t,e)&&(t=e,r)){const e=!we.length;for(const e of o)e[1](),we.push(e,t);if(e){for(let e=0;e<we.length;e+=2)we[e][0](we[e+1]);we.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const c=[i,a];return o.add(c),1===o.size&&(r=n(s)||e),i(t),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const Se={};var Ae={owner:"axislinux",repo:"status",skipDescriptionUpdate:!0,skipTopicsUpdate:!0,skipHomepageUpdate:!0,commitMessages:{commitAuthorName:"Axis Linux Bot",commitAuthorEmail:"mail@axislinux.org"},sites:[{name:"Axis Linux",url:"https://axislinux.org",icon:"https://axislinux.org/img/favicon/favicon.ico"},{name:"Axis Linux Docs",url:"https://docs.axislinux.org",icon:"https://docs.axislinux.org/img/favicon/favicon.ico"},{name:"Axis Linux Status",url:"https://status.axislinux.org",icon:"https://status.axislinux.org/img/favicon/favicon.ico"},{name:"Axis Linux Repo",url:"https://repo.axislinux.org",icon:"https://axislinux.org/img/favicon/favicon.ico"}],assignees:["XXCoreRangerX"],path:"https://axislinux.github.io/status",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Te(t){let n,r,o,s,i;return{c(){n=b("nav"),r=b("div"),o=E(),s=b("ul"),i=E(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=R(n);r=O(t,"DIV",{class:!0});var a=R(r);o=j(a),s=O(a,"UL",{class:!0});var c=R(s);i=j(c),c.forEach(v),a.forEach(v),t.forEach(v),this.h()},h(){L(s,"class","svelte-a08hsz"),L(r,"class","container svelte-a08hsz"),L(n,"class","svelte-a08hsz")},m(e,t){$(e,n,t),g(n,r),g(r,o),g(r,s),g(s,i)},p(e,[t]){},i:e,o:e,d(e){e&&v(n)}}}function Le(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Pe extends xe{constructor(e){super(),be(this,e,Le,Te,i,{segment:0})}}var Re={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ne(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ie(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ke(e,t){var n,r,o,s,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Re[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=a.exec(e);)r=e.substring(f,o.index),f=a.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((i=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+Ne(Ie(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=o[6])?(i.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=ke(Ne(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+s+"</"+i+">"):o[8]?n='<img src="'+Ie(o[8])+'" alt="'+Ie(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+Ie(o[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(i="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+ke(o[12]||o[15],u)+"</"+i+">":o[16]?n="<code>"+Ie(o[16])+"</code>":(o[17]||o[1])&&(n=d(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Oe(t){let n;return{c(){n=b("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){L(n,"rel","stylesheet"),L(n,"href",`${Ae.path}/themes/light.css`)},m(e,t){$(e,n,t)},p:e,d(e){e&&v(n)}}}function Ce(t){let n,r,o,s,i,a,c,u,f,d,h,p,m,_,y,x,w,A,T=ke(Ae.i18n.footer.replace(/\$REPO/,`https://github.com/${Ae.owner}/${Ae.repo}`))+"";let P=Oe(t),N=Ae["status-website"].css&&function(t){let n,r,o=`<style>${Ae["status-website"].css}</style>`;return{c(){n=new J,r=S(),this.h()},l(e){n=D(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&v(r),e&&n.d()}}}(),I=Ae["status-website"].js&&function(t){let n,r,o=`<script>${Ae["status-website"].js}<\/script>`;return{c(){n=new J,r=S(),this.h()},l(e){n=D(e),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),$(e,r,t)},p:e,d(e){e&&v(r),e&&n.d()}}}();p=new Pe({props:{segment:t[0]}});const k=t[2].default,C=function(e,t,n,r){if(e){const o=l(e,t,n,r);return e[0](o)}}(k,t,t[1],null);return{c(){n=S(),P.c(),r=b("link"),o=b("link"),s=b("link"),i=S(),a=S(),c=S(),N&&N.c(),u=S(),I&&I.c(),f=S(),d=E(),h=E(),ge(p.$$.fragment),m=E(),_=b("main"),C&&C.c(),y=E(),x=b("footer"),w=b("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);n=S(),P.l(t),r=O(t,"LINK",{rel:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),s=O(t,"LINK",{rel:!0,type:!0,href:!0}),i=S(),a=S(),c=S(),N&&N.l(t),u=S(),I&&I.l(t),f=S(),t.forEach(v),d=j(e),h=j(e),_e(p.$$.fragment,e),m=j(e),_=O(e,"MAIN",{class:!0});var l=R(_);C&&C.l(l),l.forEach(v),y=j(e),x=O(e,"FOOTER",{class:!0});var g=R(x);w=O(g,"P",{}),R(w).forEach(v),g.forEach(v),this.h()},h(){L(r,"rel","stylesheet"),L(r,"href",`${Ae.path}/global.css`),L(o,"rel","icon"),L(o,"type","image/svg"),L(o,"href","https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),L(s,"rel","icon"),L(s,"type","image/png"),L(s,"href","/logo-192.png"),L(_,"class","container"),L(x,"class","svelte-jbr799")},m(e,t){g(document.head,n),P.m(document.head,null),g(document.head,r),g(document.head,o),g(document.head,s),g(document.head,i),g(document.head,a),g(document.head,c),N&&N.m(document.head,null),g(document.head,u),I&&I.m(document.head,null),g(document.head,f),$(e,d,t),$(e,h,t),$e(p,e,t),$(e,m,t),$(e,_,t),C&&C.m(_,null),$(e,y,t),$(e,x,t),g(x,w),w.innerHTML=T,A=!0},p(e,[t]){P.p(e,t),Ae["status-website"].css&&N.p(e,t),Ae["status-website"].js&&I.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),C&&C.p&&(!A||2&t)&&function(e,t,n,r,o,s){if(o){const i=l(t,n,r,s);e.p(i,o)}}(C,k,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(k,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(de(p.$$.fragment,e),de(C,e),A=!0)},o(e){he(p.$$.fragment,e),he(C,e),A=!1},d(e){v(n),P.d(e),v(r),v(o),v(s),v(i),v(a),v(c),N&&N.d(e),v(u),I&&I.d(e),v(f),e&&v(d),e&&v(h),ve(p,e),e&&v(m),e&&v(_),C&&C.d(e),e&&v(y),e&&v(x)}}}function Ue(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class je extends xe{constructor(e){super(),be(this,e,Ue,Ce,i,{segment:0})}}function Me(e){let t,n,r=e[1].stack+"";return{c(){t=b("pre"),n=w(r)},l(e){t=O(e,"PRE",{});var o=R(t);n=U(o,r),o.forEach(v)},m(e,r){$(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&H(n,r)},d(e){e&&v(t)}}}function De(t){let n,r,o,s,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Me(t);return{c(){r=E(),o=b("h1"),s=w(t[0]),i=E(),a=b("p"),c=w(f),l=E(),d&&d.c(),u=S(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(v),r=j(e),o=O(e,"H1",{class:!0});var n=R(o);s=U(n,t[0]),n.forEach(v),i=j(e),a=O(e,"P",{class:!0});var h=R(a);c=U(h,f),h.forEach(v),l=j(e),d&&d.l(e),u=S(),this.h()},h(){L(o,"class","svelte-17w3omn"),L(a,"class","svelte-17w3omn")},m(e,t){$(e,r,t),$(e,o,t),g(o,s),$(e,i,t),$(e,a,t),g(a,c),$(e,l,t),d&&d.m(e,t),$(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&H(s,e[0]),2&t&&f!==(f=e[1].message+"")&&H(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Me(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&v(r),e&&v(o),e&&v(i),e&&v(a),e&&v(l),d&&d.d(e),e&&v(u)}}}function He(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class qe extends xe{constructor(e){super(),be(this,e,He,De,i,{status:0,error:1})}}function Ge(e){let n,r,o;const s=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ge(n.$$.fragment),r=S()},l(e){n&&_e(n.$$.fragment,e),r=S()},m(e,t){n&&$e(n,e,t),$(e,r,t),o=!0},p(e,t){const o=16&t?pe(s,[me(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{ve(e,1)})),fe()}i?(n=new i(a()),ge(n.$$.fragment),de(n.$$.fragment,1),$e(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&de(n.$$.fragment,e),o=!0)},o(e){n&&he(n.$$.fragment,e),o=!1},d(e){e&&v(r),n&&ve(n,e)}}}function Be(e){let t,n;return t=new qe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,r){$e(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(de(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function ze(e){let t,n,r,o;const s=[Be,Ge],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){i[t].m(e,n),$(e,r,n),o=!0},p(e,o){let c=t;t=a(e),t===c?i[t].p(e,o):(ue(),he(i[c],1,1,(()=>{i[c]=null})),fe(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),de(n,1),n.m(r.parentNode,r))},i(e){o||(de(n),o=!0)},o(e){he(n),o=!1},d(e){i[t].d(e),e&&v(r)}}}function Je(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[ze]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new je({props:s}),{c(){ge(n.$$.fragment)},l(e){_e(n.$$.fragment,e)},m(e,t){$e(n,e,t),r=!0},p(e,[t]){const r=12&t?pe(o,[4&t&&{segment:e[2][0]},8&t&&me(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(de(n.$$.fragment,e),r=!0)},o(e){he(n.$$.fragment,e),r=!1},d(e){ve(n,e)}}}function Ke(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return F(l),u=Se,f=r,V().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,i,a,c,r,l]}class Ve extends xe{constructor(e){super(),be(this,e,Ke,Je,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const We=[],Fe=[{js:()=>Promise.all([import("./index.789437bd.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.e37966d6.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.ba0bb517.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.d29fc8c1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.9ed112e6.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Ye=(Xe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Xe(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Xe(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Xe;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Qe(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function Ze(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let et,tt=1;const nt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},rt={};let ot,st;function it(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function at(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ot))return null;let t=e.pathname.slice(ot.length);if(""===t&&(t="/"),!We.some((e=>e.test(t))))for(let n=0;n<Ye.length;n+=1){const r=Ye[n],o=r.pattern.exec(t);if(o){const n=it(e.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:o,page:a}}}}function ct(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Ze(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=at(o);if(s){ft(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),nt.pushState({id:et},"",o.href)}}function lt(){return{x:pageXOffset,y:pageYOffset}}function ut(e){if(rt[et]=lt(),e.state){const t=at(new URL(location.href));t?ft(t,e.state.id):location.href=location.href}else!function(e){tt=e}(tt+1),function(e){et=e}(tt),nt.replaceState({id:et},"",location.href)}function ft(e,t,n,r){return Qe(this,void 0,void 0,(function*(){const o=!!t;if(o)et=t;else{const e=lt();rt[et]=e,et=t=++tt,rt[et]=n?e:{x:0,y:0}}if(yield st(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=rt[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),rt[et]=n,n&&(o||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function dt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let ht,pt=null;function mt(e){const t=Ze(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=at(new URL(e,dt(document)));if(t)pt&&e===pt.href||(pt={href:e,promise:It(t)}),pt.promise}(t.href)}function gt(e){clearTimeout(ht),ht=setTimeout((()=>{mt(e)}),20)}function _t(e,t={noscroll:!1,replaceState:!1}){const n=at(new URL(e,dt(document)));if(n){const r=ft(n,null,t.noscroll);return nt[t.replaceState?"replaceState":"pushState"]({id:et},"",e),r}return location.href=e,new Promise((()=>{}))}const $t="undefined"!=typeof __SAPPER__&&__SAPPER__;let vt,yt,bt,xt=!1,wt=[],Et="{}";const St={page:function(e){const t=Ee(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ee(null),session:Ee($t&&$t.session)};let At,Tt,Lt;function Pt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Rt(e){return Qe(this,void 0,void 0,(function*(){vt&&St.preloading.set(!0);const t=function(e){return pt&&pt.href===e.href?pt.promise:It(e)}(e),n=yt={},r=yield t,{redirect:o}=r;if(n===yt)if(o)yield _t(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Nt(n,t,Pt(t,e.page))}}))}function Nt(e,t,n){return Qe(this,void 0,void 0,(function*(){St.page.set(n),St.preloading.set(!1),vt?vt.$set(t):(t.stores={page:{subscribe:St.page.subscribe},preloading:{subscribe:St.preloading.subscribe},session:St.session},t.level0={props:yield bt},t.notify=St.page.notify,vt=new Ve({target:Lt,props:t,hydrate:!0})),wt=e,Et=JSON.stringify(n.query),xt=!0,Tt=!1}))}function It(e){return Qe(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!bt){const e=()=>({});bt=$t.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},At)}let a,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>Qe(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==Et)return!0;const o=wt[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let h;if(Tt||u||!wt[a]||wt[a].part!==t.i){u=!1;const{default:r,preload:o}=yield Fe[t.i].js();let s;s=xt||!$t.preloaded[a+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},At):{}:$t.preloaded[a+1],h={component:r,props:s,segment:f,match:l,part:t.i}}else h=wt[a];return s[`level${d}`]=h})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var kt,Ot,Ct;St.session.subscribe((e=>Qe(void 0,void 0,void 0,(function*(){if(At=e,!xt)return;Tt=!0;const t=at(new URL(location.href)),n=yt={},{redirect:r,props:o,branch:s}=yield It(t);n===yt&&(r?yield _t(r.location,{replaceState:!0}):yield Nt(s,o,Pt(o,t.page)))})))),kt={target:document.querySelector("#sapper")},Ot=kt.target,Lt=Ot,Ct=$t.baseUrl,ot=Ct,st=Rt,"scrollRestoration"in nt&&(nt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{nt.scrollRestoration="auto"})),addEventListener("load",(()=>{nt.scrollRestoration="manual"})),addEventListener("click",ct),addEventListener("popstate",ut),addEventListener("touchstart",mt),addEventListener("mousemove",gt),$t.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:i}=$t;bt||(bt=o&&o[0]);const a={error:i,status:s,session:r,level0:{props:bt},level1:{props:{status:s,error:i},component:qe},segments:o},c=it(n);Nt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;nt.replaceState({id:tt},"",t);const n=at(new URL(location.href));if(n)return ft(n,tt,!0,e)}));export{ve as A,A as B,o as C,Q as D,D as E,c as F,f as G,J as H,z as I,x as J,C as K,_t as L,q as M,T as N,ke as O,t as P,P as Q,pe as R,xe as S,F as T,Y as U,u as V,me as W,re as X,B as Y,R as a,U as b,O as c,v as d,b as e,L as f,$ as g,g as h,be as i,E as j,j as k,ue as l,he as m,e as n,fe as o,de as p,W as q,Ae as r,i as s,w as t,H as u,S as v,y as w,ge as x,_e as y,$e as z};

import __inject_styles from './inject_styles.803b7e80.js';