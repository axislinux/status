function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function c(e,t,n,r,o,s,i){const c=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,s);if(c){const o=a(t,n,r,i);e.p(o,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}let f,d,h=!1;function p(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function m(e,t){h?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=p(1,o+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;r[e]=n[s]+1;const i=s+1;n[i]=e,o=Math.max(i,o)}const s=[],i=[];let a=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(s.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);s.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<s.length&&i[t].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function g(e,t,n){h&&!n?m(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function v(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function x(){return b(" ")}function w(){return b("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function S(e){return function(t){return t.preventDefault(),e.call(this,t)}}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:A(e,r,t[r])}function L(e){return Array.from(e.childNodes)}function P(e,t,n,r,o=!1){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0});const s=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s))return n(s),e.splice(r,1),o||(e.claim_info.last_index=r),s}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s))return n(s),e.splice(r,1),o?e.claim_info.last_index--:e.claim_info.last_index=r,s}return r()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function R(e,t,n,r){return P(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r?v(t):_(t)))}function I(e,t){return P(e,(e=>3===e.nodeType),(e=>{e.data=""+t}),(()=>b(t)),!0)}function N(e){return I(e," ")}function O(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function k(e){const t=O(e,"HTML_TAG_START",0),n=O(e,"HTML_TAG_END",t);if(t===n)return new H;const r=e.splice(t,n+1);return $(r[0]),$(r[r.length-1]),new H(r.slice(1,r.length-1))}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function U(e,t){e.value=null==t?"":t}function j(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function M(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=_("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=j();let o;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=E(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{o=E(n.contentWindow,"resize",t)}),m(e,n),()=>{(r||o&&n.contentWindow)&&o(),$(n)}}function D(e,t=document.body){return Array.from(t.querySelectorAll(e))}class H{constructor(e){this.e=this.n=null,this.l=e}m(e,t,n=null){this.e||(this.e=_(t.nodeName),this.t=t,this.l?this.n=this.l:this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)g(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}function q(e){d=e}function G(){if(!d)throw new Error("Function called outside component initialization");return d}function B(e){G().$$.on_mount.push(e)}function J(e){G().$$.after_update.push(e)}function z(e){G().$$.on_destroy.push(e)}const K=[],V=[],F=[],W=[],Y=Promise.resolve();let X=!1;function Q(e){F.push(e)}let Z=!1;const ee=new Set;function te(){if(!Z){Z=!0;do{for(let e=0;e<K.length;e+=1){const t=K[e];q(t),ne(t.$$)}for(q(null),K.length=0;V.length;)V.pop()();for(let e=0;e<F.length;e+=1){const t=F[e];ee.has(t)||(ee.add(t),t())}F.length=0}while(K.length);for(;W.length;)W.pop()();X=!1,Z=!1,ee.clear()}}function ne(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}const re=new Set;let oe;function se(){oe={r:0,c:[],p:oe}}function ie(){oe.r||o(oe.c),oe=oe.p}function ae(e,t){e&&e.i&&(re.delete(e),e.i(t))}function ce(e,t,n,r){if(e&&e.o){if(re.has(e))return;re.add(e),oe.c.push((()=>{re.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function le(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],a=t[s];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[s]=a}else for(const e in i)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ue(e){return"object"==typeof e&&null!==e?e:{}}function fe(e){e&&e.c()}function de(e,t){e&&e.l(t)}function he(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||Q((()=>{const t=c.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(Q)}function pe(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){-1===e.$$.dirty[0]&&(K.push(e),X||(X=!0,Y.then(te)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(t,n,s,i,a,c,l=[-1]){const u=d;q(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),p&&me(t,e)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){h=!0;const e=L(n.target);f.fragment&&f.fragment.l(e),e.forEach($)}else f.fragment&&f.fragment.c();n.intro&&ae(t.$$.fragment),he(t,n.target,n.anchor,n.customElement),h=!1,te()}q(u)}class $e{$destroy(){pe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ye=[];function _e(t,n=e){let r;const o=[];function s(e){if(i(t,e)&&(t=e,r)){const e=!ye.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),ye.push(n,t)}if(e){for(let e=0;e<ye.length;e+=2)ye[e][0](ye[e+1]);ye.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,a=e){const c=[i,a];return o.push(c),1===o.length&&(r=n(s)||e),i(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const ve={};var be={owner:"axislinux",repo:"status",skipDescriptionUpdate:!0,skipTopicsUpdate:!0,skipHomepageUpdate:!0,commitMessages:{commitAuthorName:"Axis Linux Bot",commitAuthorEmail:"mail@axislinux.org"},sites:[{name:"Axis Linux",url:"https://axislinux.org",icon:"https://axislinux.org/img/favicon/favicon.ico"},{name:"Axis Linux Docs",url:"https://docs.axislinux.org",icon:"https://docs.axislinux.org/img/favicon/favicon.ico"},{name:"Axis Linux Status",url:"https://status.axislinux.org",icon:"https://status.axislinux.org/img/favicon/favicon.ico"},{name:"Axis Linux Repo",url:"https://repo.axislinux.org",icon:"https://axislinux.org/img/favicon/favicon.ico"}],assignees:["XXCoreRangerX"],path:"https://axislinux.github.io/status",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function xe(t){let n,r,o,s,i;return{c(){n=_("nav"),r=_("div"),o=x(),s=_("ul"),i=x(),this.h()},l(e){n=R(e,"NAV",{class:!0});var t=L(n);r=R(t,"DIV",{class:!0});var a=L(r);o=N(a),s=R(a,"UL",{class:!0});var c=L(s);i=N(c),c.forEach($),a.forEach($),t.forEach($),this.h()},h(){A(s,"class","svelte-a08hsz"),A(r,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(e,t){g(e,n,t),m(n,r),m(r,o),m(r,s),m(s,i)},p(e,[t]){},i:e,o:e,d(e){e&&$(n)}}}function we(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Ee extends $e{constructor(e){super(),ge(this,e,we,xe,i,{segment:0})}}var Se={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ae(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Te(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Le(e,t){var n,r,o,s,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Se[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");o=a.exec(e);)r=e.substring(f,o.index),f=a.lastIndex,n=o[0],r.match(/[^\\](\\\\)*\\$/)||((i=o[3]||o[4])?n='<pre class="code '+(o[4]?"poetry":o[2].toLowerCase())+'"><code'+(o[2]?' class="language-'+o[2].toLowerCase()+'"':"")+">"+Ae(Te(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=o[6])?(i.match(/\./)&&(o[5]=o[5].replace(/^\d+/gm,"")),s=Le(Ae(o[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+s+"</"+i+">"):o[8]?n='<img src="'+Te(o[8])+'" alt="'+Te(o[7])+'">':o[10]?(l=l.replace("<a>",'<a href="'+Te(o[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):o[9]?n="<a>":o[12]||o[14]?n="<"+(i="h"+(o[14]?o[14].length:o[13]>"="?1:2))+">"+Le(o[12]||o[15],u)+"</"+i+">":o[16]?n="<code>"+Te(o[16])+"</code>":(o[17]||o[1])&&(n=d(o[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Pe(t){let n;return{c(){n=_("link"),this.h()},l(e){n=R(e,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${be.path}/themes/light.css`)},m(e,t){g(e,n,t)},p:e,d(e){e&&$(n)}}}function Re(t){let n,r,o,s,i,l,u,f,d,h,p,y,v,b,E,S,T,P,I=Le(be.i18n.footer.replace(/\$REPO/,`https://github.com/${be.owner}/${be.repo}`))+"";let O=Pe(t),C=be["status-website"].css&&function(t){let n,r,o=`<style>${be["status-website"].css}</style>`;return{c(){n=new H,r=w(),this.h()},l(e){n=k(e),r=w(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),g(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}(),U=be["status-website"].js&&function(t){let n,r,o=`<script>${be["status-website"].js}<\/script>`;return{c(){n=new H,r=w(),this.h()},l(e){n=k(e),r=w(),this.h()},h(){n.a=r},m(e,t){n.m(o,e,t),g(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}();y=new Ee({props:{segment:t[0]}});const j=t[2].default,M=function(e,t,n,r){if(e){const o=a(e,t,n,r);return e[0](o)}}(j,t,t[1],null);return{c(){n=w(),O.c(),r=_("link"),o=_("link"),s=_("link"),i=w(),l=w(),u=w(),C&&C.c(),f=w(),U&&U.c(),d=w(),h=x(),p=x(),fe(y.$$.fragment),v=x(),b=_("main"),M&&M.c(),E=x(),S=_("footer"),T=_("p"),this.h()},l(e){const t=D('[data-svelte="svelte-ri9y7q"]',document.head);n=w(),O.l(t),r=R(t,"LINK",{rel:!0,href:!0}),o=R(t,"LINK",{rel:!0,type:!0,href:!0}),s=R(t,"LINK",{rel:!0,type:!0,href:!0}),i=w(),l=w(),u=w(),C&&C.l(t),f=w(),U&&U.l(t),d=w(),t.forEach($),h=N(e),p=N(e),de(y.$$.fragment,e),v=N(e),b=R(e,"MAIN",{class:!0});var a=L(b);M&&M.l(a),a.forEach($),E=N(e),S=R(e,"FOOTER",{class:!0});var c=L(S);T=R(c,"P",{}),L(T).forEach($),c.forEach($),this.h()},h(){A(r,"rel","stylesheet"),A(r,"href",`${be.path}/global.css`),A(o,"rel","icon"),A(o,"type","image/svg"),A(o,"href","https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(s,"rel","icon"),A(s,"type","image/png"),A(s,"href","/logo-192.png"),A(b,"class","container"),A(S,"class","svelte-jbr799")},m(e,t){m(document.head,n),O.m(document.head,null),m(document.head,r),m(document.head,o),m(document.head,s),m(document.head,i),m(document.head,l),m(document.head,u),C&&C.m(document.head,null),m(document.head,f),U&&U.m(document.head,null),m(document.head,d),g(e,h,t),g(e,p,t),he(y,e,t),g(e,v,t),g(e,b,t),M&&M.m(b,null),g(e,E,t),g(e,S,t),m(S,T),T.innerHTML=I,P=!0},p(e,[t]){O.p(e,t),be["status-website"].css&&C.p(e,t),be["status-website"].js&&U.p(e,t);const n={};1&t&&(n.segment=e[0]),y.$set(n),M&&M.p&&(!P||2&t)&&c(M,j,e,e[1],P?t:-1,null,null)},i(e){P||(ae(y.$$.fragment,e),ae(M,e),P=!0)},o(e){ce(y.$$.fragment,e),ce(M,e),P=!1},d(e){$(n),O.d(e),$(r),$(o),$(s),$(i),$(l),$(u),C&&C.d(e),$(f),U&&U.d(e),$(d),e&&$(h),e&&$(p),pe(y,e),e&&$(v),e&&$(b),M&&M.d(e),e&&$(E),e&&$(S)}}}function Ie(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class Ne extends $e{constructor(e){super(),ge(this,e,Ie,Re,i,{segment:0})}}function Oe(e){let t,n,r=e[1].stack+"";return{c(){t=_("pre"),n=b(r)},l(e){t=R(e,"PRE",{});var o=L(t);n=I(o,r),o.forEach($)},m(e,r){g(e,t,r),m(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&C(n,r)},d(e){e&&$(t)}}}function ke(t){let n,r,o,s,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Oe(t);return{c(){r=x(),o=_("h1"),s=b(t[0]),i=x(),a=_("p"),c=b(f),l=x(),d&&d.c(),u=w(),this.h()},l(e){D('[data-svelte="svelte-1moakz"]',document.head).forEach($),r=N(e),o=R(e,"H1",{class:!0});var n=L(o);s=I(n,t[0]),n.forEach($),i=N(e),a=R(e,"P",{class:!0});var h=L(a);c=I(h,f),h.forEach($),l=N(e),d&&d.l(e),u=w(),this.h()},h(){A(o,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(e,t){g(e,r,t),g(e,o,t),m(o,s),g(e,i,t),g(e,a,t),m(a,c),g(e,l,t),d&&d.m(e,t),g(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&C(s,e[0]),2&t&&f!==(f=e[1].message+"")&&C(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Oe(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&$(r),e&&$(o),e&&$(i),e&&$(a),e&&$(l),d&&d.d(e),e&&$(u)}}}function Ce(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class Ue extends $e{constructor(e){super(),ge(this,e,Ce,ke,i,{status:0,error:1})}}function je(e){let n,r,o;const s=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&fe(n.$$.fragment),r=w()},l(e){n&&de(n.$$.fragment,e),r=w()},m(e,t){n&&he(n,e,t),g(e,r,t),o=!0},p(e,t){const o=16&t?le(s,[ue(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){se();const e=n;ce(e.$$.fragment,1,0,(()=>{pe(e,1)})),ie()}i?(n=new i(a()),fe(n.$$.fragment),ae(n.$$.fragment,1),he(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(e){o||(n&&ae(n.$$.fragment,e),o=!0)},o(e){n&&ce(n.$$.fragment,e),o=!1},d(e){e&&$(r),n&&pe(n,e)}}}function Me(e){let t,n;return t=new Ue({props:{error:e[0],status:e[1]}}),{c(){fe(t.$$.fragment)},l(e){de(t.$$.fragment,e)},m(e,r){he(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){pe(t,e)}}}function De(e){let t,n,r,o;const s=[Me,je],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=s[t](e),{c(){n.c(),r=w()},l(e){n.l(e),r=w()},m(e,n){i[t].m(e,n),g(e,r,n),o=!0},p(e,o){let c=t;t=a(e),t===c?i[t].p(e,o):(se(),ce(i[c],1,1,(()=>{i[c]=null})),ie(),n=i[t],n?n.p(e,o):(n=i[t]=s[t](e),n.c()),ae(n,1),n.m(r.parentNode,r))},i(e){o||(ae(n),o=!0)},o(e){ce(n),o=!1},d(e){i[t].d(e),e&&$(r)}}}function He(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[De]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new Ne({props:s}),{c(){fe(n.$$.fragment)},l(e){de(n.$$.fragment,e)},m(e,t){he(n,e,t),r=!0},p(e,[t]){const r=12&t?le(o,[4&t&&{segment:e[2][0]},8&t&&ue(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ae(n.$$.fragment,e),r=!0)},o(e){ce(n.$$.fragment,e),r=!1},d(e){pe(n,e)}}}function qe(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return J(l),u=ve,f=r,G().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[o,s,i,a,c,r,l]}class Ge extends $e{constructor(e){super(),ge(this,e,qe,He,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Be=[],Je=[{js:()=>Promise.all([import("./index.06c9277d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.e688dc7c.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].c0a5590a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].5a9035db.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.90c59c14.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],ze=(Ke=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Ke(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Ke(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Ke;
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
function Ve(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function Fe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let We,Ye=1;const Xe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Qe={};let Ze,et;function tt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function nt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ze))return null;let t=e.pathname.slice(Ze.length);if(""===t&&(t="/"),!Be.some((e=>e.test(t))))for(let n=0;n<ze.length;n+=1){const r=ze[n],o=r.pattern.exec(t);if(o){const n=tt(e.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:o,page:a}}}}function rt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Fe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=nt(o);if(s){it(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),Xe.pushState({id:We},"",o.href)}}function ot(){return{x:pageXOffset,y:pageYOffset}}function st(e){if(Qe[We]=ot(),e.state){const t=nt(new URL(location.href));t?it(t,e.state.id):location.href=location.href}else!function(e){Ye=e}(Ye+1),function(e){We=e}(Ye),Xe.replaceState({id:We},"",location.href)}function it(e,t,n,r){return Ve(this,void 0,void 0,(function*(){const o=!!t;if(o)We=t;else{const e=ot();Qe[We]=e,We=t=++Ye,Qe[We]=n?e:{x:0,y:0}}if(yield et(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=Qe[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),Qe[We]=n,n&&(o||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function at(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let ct,lt=null;function ut(e){const t=Fe(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=nt(new URL(e,at(document)));if(t)lt&&e===lt.href||(lt={href:e,promise:Tt(t)}),lt.promise}(t.href)}function ft(e){clearTimeout(ct),ct=setTimeout((()=>{ut(e)}),20)}function dt(e,t={noscroll:!1,replaceState:!1}){const n=nt(new URL(e,at(document)));if(n){const r=it(n,null,t.noscroll);return Xe[t.replaceState?"replaceState":"pushState"]({id:We},"",e),r}return location.href=e,new Promise((()=>{}))}const ht="undefined"!=typeof __SAPPER__&&__SAPPER__;let pt,mt,gt,$t=!1,yt=[],_t="{}";const vt={page:function(e){const t=_e(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:_e(null),session:_e(ht&&ht.session)};let bt,xt,wt;function Et(e,t){const{error:n}=e;return Object.assign({error:n},t)}function St(e){return Ve(this,void 0,void 0,(function*(){pt&&vt.preloading.set(!0);const t=function(e){return lt&&lt.href===e.href?lt.promise:Tt(e)}(e),n=mt={},r=yield t,{redirect:o}=r;if(n===mt)if(o)yield dt(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield At(n,t,Et(t,e.page))}}))}function At(e,t,n){return Ve(this,void 0,void 0,(function*(){vt.page.set(n),vt.preloading.set(!1),pt?pt.$set(t):(t.stores={page:{subscribe:vt.page.subscribe},preloading:{subscribe:vt.preloading.subscribe},session:vt.session},t.level0={props:yield gt},t.notify=vt.page.notify,pt=new Ge({target:wt,props:t,hydrate:!0})),yt=e,_t=JSON.stringify(n.query),$t=!0,xt=!1}))}function Tt(e){return Ve(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!gt){const e=()=>({});gt=ht.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},bt)}let a,c=1;try{const o=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>Ve(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==_t)return!0;const o=yt[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let h;if(xt||u||!yt[a]||yt[a].part!==t.i){u=!1;const{default:r,preload:o}=yield Je[t.i].js();let s;s=$t||!ht.preloaded[a+1]?o?yield o.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},bt):{}:ht.preloaded[a+1],h={component:r,props:s,segment:f,match:l,part:t.i}}else h=yt[a];return s[`level${d}`]=h})))))}catch(e){s.error=e,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var Lt,Pt,Rt;vt.session.subscribe((e=>Ve(void 0,void 0,void 0,(function*(){if(bt=e,!$t)return;xt=!0;const t=nt(new URL(location.href)),n=mt={},{redirect:r,props:o,branch:s}=yield Tt(t);n===mt&&(r?yield dt(r.location,{replaceState:!0}):yield At(s,o,Et(o,t.page)))})))),Lt={target:document.querySelector("#sapper")},Pt=Lt.target,wt=Pt,Rt=ht.baseUrl,Ze=Rt,et=St,"scrollRestoration"in Xe&&(Xe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Xe.scrollRestoration="auto"})),addEventListener("load",(()=>{Xe.scrollRestoration="manual"})),addEventListener("click",rt),addEventListener("popstate",st),addEventListener("touchstart",ut),addEventListener("mousemove",ft),ht.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:i}=ht;gt||(gt=o&&o[0]);const a={error:i,status:s,session:r,level0:{props:gt},level1:{props:{status:s,error:i},component:Ue},segments:o},c=tt(n);At([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;Xe.replaceState({id:Ye},"",t);const n=nt(new URL(location.href));if(n)return it(n,Ye,!0,e)}));export{pe as A,E as B,o as C,V as D,k as E,u as F,D as G,H,v as I,dt as J,U as K,S as L,Le as M,t as N,T as O,le as P,J as Q,z as R,$e as S,l as T,ue as U,Q as V,M as W,L as a,I as b,R as c,$ as d,_ as e,A as f,g,m as h,ge as i,x as j,N as k,se as l,ce as m,e as n,ie as o,ae as p,B as q,be as r,i as s,b as t,C as u,w as v,y as w,fe as x,de as y,he as z};

import __inject_styles from './inject_styles.5607aec6.js';