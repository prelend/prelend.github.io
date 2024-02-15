"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9361],{15446:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(30120),o=t(64288),i=t(85893),a=function(e){var n=e.children;return(0,i.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,i.jsx)(o.Z,{children:n})})}},87369:function(e,n,t){t.d(n,{d:function(){return l}});var r=t(62097),o=t(61225),i=t(30120),a=t(29630),s=t(91655),c=t(85893),l=function(e){var n=e.icon,t=e.title,l=e.titleIcon,u=e.children,d=e.hideIcon,p=e.variant,f=void 0===p?"dark":p,m=e.withLine,x=e.loading,v=e.withoutIconWrapper,h=(0,r.Z)(),b=(0,o.Z)(h.breakpoints.up("sm"));return(0,c.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",width:{xs:"calc(50% - 12px)",xsm:"unset"}},children:[m&&(0,c.jsx)(i.Z,{sx:{mr:8,my:"auto",width:"1px",bgcolor:"#F2F3F729",height:"37px"}}),!d&&(v?n&&n:(0,c.jsx)(i.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",border:"1px solid #EBEBED1F",borderRadius:"12px",bgcolor:"#383D51",boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",width:42,height:42,mr:3},children:n&&n})),(0,c.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,c.jsxs)(i.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,c.jsx)(a.Z,{sx:{color:"dark"===f?"#A5A8B6":"#62677B"},variant:b?"description":"caption",component:"div",children:t}),l&&l]}),x?(0,c.jsx)(s.Z,{width:60,height:b?28:24,sx:{background:"#383D51"}}):u]})]})}},3765:function(e,n,t){t.d(n,{p:function(){return d}});var r=t(49501),o=t(75084),i=t(5152),a=t(26074),s=t(8656),c=t(57609),l=t(85893),u=(0,i.default)((function(){return Promise.resolve().then(t.bind(t,58294)).then((function(e){return e.WalletModal}))}),{loadableGenerated:{webpack:function(){return[58294]}}}),d=function(e){var n=e.funnel,t=(0,a.q)().setWalletModalOpen,i=(0,s.Yh)((function(e){return e.trackEvent}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{variant:"contained",onClick:function(){i(c.Bp.CONNECT_WALLET,{funnel:n}),t(!0)},children:(0,l.jsx)(r.cC,{id:"Connect wallet"})}),(0,l.jsx)(u,{})]})}},41024:function(e,n,t){t.d(n,{J:function(){return p},B:function(){return m}});var r=t(59499),o=t(4730),i=t(1279),a=t(29630),s=t(85893),c=["value","symbol","visibleDecimals","compact","percent","symbolsVariant","symbolsColor","roundDown","compactThreshold"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=["","K","M","B","T","P","E","Z","Y"],p=function(e){var n=e.value,t=e.visibleDecimals,r=void 0===t?2:t,o=e.roundDown,a=e.compactThreshold,s=(0,i.hE)(n),c=s.toFixed(0).length;a&&Number(n)<=a&&(c=0);var l=Math.min(Math.floor(c?(c-1)/3:0),d.length-1),u=d[l],p=(0,i.pV)(s,3*l).toNumber();return o&&(p=Math.trunc(Number(p)*Math.pow(10,r))/Math.pow(10,r)),{prefix:new Intl.NumberFormat("en-US",{maximumFractionDigits:r,minimumFractionDigits:r}).format(p),postfix:u}};function f(e){var n=e.value,t=e.visibleDecimals,r=e.roundDown,o=p({value:n,visibleDecimals:t,roundDown:r}),i=o.prefix,a=o.postfix;return(0,s.jsxs)(s.Fragment,{children:[i,a]})}function m(e){var n=e.value,t=e.symbol,r=e.visibleDecimals,i=e.compact,l=e.percent,d=e.symbolsVariant,p=e.symbolsColor,m=e.roundDown,x=e.compactThreshold,v=(0,o.Z)(e,c),h=l?100*Number(n):Number(n),b=null!==r&&void 0!==r?r:0;0===h?b=0:void 0===r&&(b=h>1||l||"USD"===t?2:7);var g=Math.pow(10,-b),y=0!==h&&Math.abs(h)<Math.abs(g),j=y?g:h,w=!1!==i&&(i||h>99999);return m&&!w&&(j=Math.trunc(Number(j)*Math.pow(10,b))/Math.pow(10,b)),(0,s.jsxs)(a.Z,u(u({},v),{},{sx:u({display:"inline-flex",flexDirection:"row",alignItems:"center",position:"relative"},v.sx),noWrap:!0,children:[y&&(0,s.jsx)(a.Z,{component:"span",sx:{mr:.5},variant:d||v.variant,color:p||"text.secondary",children:"<"}),"usd"===(null===t||void 0===t?void 0:t.toLowerCase())&&!l&&(0,s.jsx)(a.Z,{component:"span",sx:{mr:.5},variant:d||v.variant,color:p||"text.secondary",children:"$"}),w?(0,s.jsx)(f,{value:j,visibleDecimals:b,roundDown:m,compactThreshold:x}):new Intl.NumberFormat("en-US",{maximumFractionDigits:b,minimumFractionDigits:b}).format(j),l&&(0,s.jsx)(a.Z,{component:"span",sx:{ml:.5},variant:d||v.variant,color:p||"text.secondary",children:"%"}),"usd"!==(null===t||void 0===t?void 0:t.toLowerCase())&&"undefined"!==typeof t&&(0,s.jsx)(a.Z,{component:"span",sx:{ml:.5},variant:d||v.variant,color:p||"text.secondary",children:t})]}))}},72667:function(e,n,t){t.d(n,{Js:function(){return v},T1:function(){return y}});var r=t(83618),o=t(59499),i=t(4730),a=t(89722),s=t(30120),c=t(60082),l=t(67294),u=t(85893),d=["symbol","aToken"],p=["symbols","badgeSymbol"],f=["symbol"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n=e.symbol,t=e.onImageGenerated,r=e.aToken,o=(0,l.useRef)(null),i=(0,l.useRef)(null),a=(0,l.useState)(!0),s=a[0],c=a[1];return(0,l.useEffect)((function(){var e;if(!s&&o.current&&null!==(e=o.current)&&void 0!==e&&e.contentDocument)if(r){var n,a,c,l,u=null===(n=o.current)||void 0===n||null===(a=n.contentDocument)||void 0===a||null===(c=a.childNodes)||void 0===c?void 0:c[0],d=u.getAttribute("width"),p=u.getAttribute("height"),f=u.getAttribute("viewBox");u.setAttribute("x",25),u.setAttribute("width",206),u.setAttribute("y",25),u.setAttribute("height",206),f||u.setAttribute("viewBox","0 0 ".concat(d," ").concat(p)),null===(l=i.current)||void 0===l||l.appendChild(u);var m=(new XMLSerializer).serializeToString(i.current);t("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(m)))))}else{var x,v=(new XMLSerializer).serializeToString(null===(x=o.current)||void 0===x?void 0:x.contentDocument);t("data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(v)))))}}),[s,r]),(0,u.jsxs)("div",{style:{visibility:"hidden",height:0,width:0,overflow:"hidden"},children:[(0,u.jsx)("object",{style:{opacity:1},ref:o,id:"svg",data:"/icons/tokens/".concat(n.toLowerCase(),".svg"),onLoad:function(){return c(!1)}}),r&&(0,u.jsx)(h,{ref:i})]})}var h=(0,l.forwardRef)((function(e,n){var t=e.symbol;return(0,u.jsxs)("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:n,id:"Group_30952",width:"256",height:"256",viewBox:"0 0 256 256",children:[(0,u.jsxs)("defs",{id:"defs10",children:[(0,u.jsxs)("linearGradient",{id:"linear-gradient",x1:".843",x2:".206",y1:".135",y2:".886",gradientUnits:"objectBoundingBox",children:[(0,u.jsx)("stop",{offset:"0",stopColor:"#3d550c",id:"stop2"}),(0,u.jsx)("stop",{offset:"1",stopColor:"#81b622",id:"stop4"})]}),(0,u.jsx)("linearGradient",{id:"linear-gradient-2",x1:".907",x2:".163",y1:".227",y2:".853"})]}),(0,u.jsxs)("g",{id:"Group_29109",children:[(0,u.jsx)("path",{id:"Subtraction_108",fill:"url(#linear-gradient)",d:"M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z"}),t&&(0,u.jsx)("image",{x:"25",y:"25",href:"/icons/tokens/".concat(t.toLowerCase(),".svg"),width:"206",height:"206"})]})]})}));function b(e){var n=e.symbol,t=e.aToken,r=(0,i.Z)(e,d);return(0,u.jsx)(a.Z,x(x({},r),{},{sx:x({display:"flex",position:"relative",borderRadius:"50%"},r.sx),children:t?(0,u.jsx)(h,{symbol:n}):(0,u.jsx)("img",{src:"/icons/tokens/".concat(n.toLowerCase(),".svg"),width:"100%",height:"100%",alt:"".concat(n," icon")})}))}function g(e){var n=e.symbols,t=e.badgeSymbol,r=(0,i.Z)(e,p);return t?(0,u.jsx)(c.Z,{badgeContent:(0,u.jsx)(b,{symbol:t,sx:{border:"1px solid #fff"},fontSize:"small"}),sx:{".MuiBadge-anchorOriginTopRight":{top:9}},children:n.map((function(e,n){return(0,l.createElement)(b,x(x({},r),{},{key:e,symbol:e,sx:x({ml:0===n?0:"calc(-1 * 0.5em)"},r.sx)}))}))}):(0,u.jsx)(s.Z,{sx:{display:"inline-flex",position:"relative"},children:n.map((function(e,n){return(0,l.createElement)(b,x(x({},r),{},{key:e,symbol:e,sx:x({ml:0===n?0:"calc(-1 * 0.5em)"},r.sx)}))}))})}function y(e){var n=e.symbol,t=(0,i.Z)(e,f),o=n.split("_");if(o.length>1){var a=(0,r.Z)(o),s=a[0],c=a.slice(1);return(0,u.jsx)(g,x(x({},t),{},{symbols:c,badgeSymbol:"/pools/"+s}))}return(0,u.jsx)(b,x({symbol:n},t))}h.displayName="ATokenIcon"},90290:function(e,n,t){t.d(n,{f:function(){return w}});var r=t(49501),o=t(56707),i=t(75084),a=t(81645),s=t(67294),c=t(50029),l=t(87794),u=t.n(l),d=t(8656),p=t(57609),f=t(56365),m=t(29630),x=t(30120),v=t(31959),h=t(46930),b=t(77537),g=[],y=t(85893),j=function(e){var n=e.cryptoSymbol,t=e.open,o=e.close,s=(0,b.Z)().currentAccount,c=(0,d.Yh)((function(e){return e.trackEvent})),l=(0,h.f)().currentNetworkConfig.name;return(0,y.jsxs)(v.P,{open:t,setOpen:o,children:[(0,y.jsx)(m.Z,{variant:"h2",children:(0,y.jsx)(r.cC,{id:"Buy Crypto with Fiat"})}),(0,y.jsx)(m.Z,{sx:{my:6},children:g.length&&1===g.length?(0,y.jsx)(r.cC,{id:"{0} on-ramp service is provided by External Provider and by selecting you agree to Terms of the Provider. Your access to the service might be reliant on the External Provider being operational.",values:{0:g[0].name}}):(0,y.jsx)(r.cC,{id:"Choose one of the on-ramp services"})}),(0,y.jsx)(x.Z,{children:g.map((function(e){var t=e.name,o=e.makeLink,u=e.icon;return(0,y.jsx)(i.Z,{variant:"outlined",size:"large",endIcon:(0,y.jsx)(a.Z,{children:(0,y.jsx)(f.Z,{})}),fullWidth:!0,sx:{px:4,"&:not(:first-of-type)":{mt:4}},href:o({cryptoSymbol:n,network:l,walletAddress:s}),target:"_blank",rel:"noopener",onClick:function(){return c(p.vh.BUY_WITH_FIAT,{token:n,network:l,onrampname:g[0].name})},children:(0,y.jsxs)(x.Z,{sx:{display:"flex",flexGrow:1},children:[(0,y.jsx)(a.Z,{sx:{mr:2},children:u}),(0,y.jsx)(r.cC,{id:"{0}{name}",values:{0:1===g.length?"Continue with ":null,name:t}})]})},t)}))})]})},w=function(e){var n=e.cryptoSymbol,t=e.networkMarketName,l=e.funnel,f=function(e,n){var t=(0,s.useState)(!1),r=t[0],o=t[1];return(0,s.useEffect)((function(){(0,c.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,fetch("".concat("","/cryptocoverage/api/v1/public/partner/crypto-currencies?symbol=").concat(e,"&network=").concat(n));case 4:r=t.sent,o(r.ok),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o(!1);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}),[e,n]),{isAvailable:r}}(n,t),m=f.isAvailable,x=(0,s.useState)(null),v=x[0],h=x[1],b=Boolean(v),g=(0,d.Yh)((function(e){return e.trackEvent}));return m?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Z,{variant:"outlined",size:"small",onClick:function(e){g(p.vh.OPEN_MODAL,{modal:"Buy crypto with fiat",assetName:n,funnel:l}),h(e.currentTarget)},startIcon:(0,y.jsx)(a.Z,{sx:{mr:-1},children:(0,y.jsx)(o.Z,{})}),children:(0,y.jsx)(r.cC,{id:"Buy {cryptoSymbol} with Fiat",values:{cryptoSymbol:n}})}),(0,y.jsx)(j,{cryptoSymbol:n,open:b,close:function(){h(null)}})]}):null}},31001:function(e,n,t){t.d(n,{B:function(){return o},g:function(){return i}});var r=t(90116),o={governance:["governance"],staking:["staking"],pool:["pool"],incentives:["incentives"],gho:["gho"],market:function(e){return[e.chainId,!!e.isFork,e.market]},user:function(e){return[e]},powers:function(e,n){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),[n,"powers"])},voteOnProposal:function(e,n,t){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(t)),[n,"voteOnProposal"])},votingPowerAt:function(e,n,t){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),(0,r.Z)(t),[n,"votingPowerAt"])},governanceRepresentatives:function(e){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),["representatives"])},governanceTokens:function(e,n){return[].concat((0,r.Z)(o.governance),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["governanceTokens"])},transactionHistory:function(e,n){return[].concat((0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["transactionHistory"])},poolTokens:function(e,n){return[].concat((0,r.Z)(o.pool),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),["poolTokens"])},poolReservesDataHumanized:function(e){return[].concat((0,r.Z)(o.pool),(0,r.Z)(o.market(e)),["poolReservesDataHumanized"])},generalStakeUiData:function(e,n,t){return[].concat((0,r.Z)(o.staking),(0,r.Z)(o.market(e)),[n,t,"generalStakeUiData"])},userStakeUiData:function(e,n,t,i){return[].concat((0,r.Z)(o.staking),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(n)),[t,i,"userStakeUiData"])},paraswapRates:function(e,n,t,i,a){return[].concat((0,r.Z)(o.user(a)),[e,n,t,i,"paraswapRates"])},gasPrices:function(e){return[e,"gasPrices"]},poolApprovedAmount:function(e,n,t){return[].concat((0,r.Z)(o.pool),(0,r.Z)(o.user(e)),(0,r.Z)(o.market(t)),[n,"poolApprovedAmount"])},approvedAmount:function(e,n,t,i){return[].concat((0,r.Z)(o.user(e)),(0,r.Z)(o.market(i)),[n,t,"approvedAmount"])},tokenPowers:function(e,n,t){return[].concat((0,r.Z)(o.user(e)),[n,t,"tokenPowers"])},tokenDelegatees:function(e,n,t){return[].concat((0,r.Z)(o.user(e)),[n,t,"tokenDelegatees"])}},i=6e4}}]);