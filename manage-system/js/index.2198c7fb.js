var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,i=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))n.call(t,r)&&a(e,r,t[r]);return e},l=(e,s)=>t(e,r(s)),c=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&n.call(e,a)&&(r[a]=e[a]);return r};import{r as d,j as p,a as u,b as x,u as m,c as h,q as f,h as g,d as y,e as j,_ as b,S as v,U as w,M as I,C,L as P,D as _,f as k,A as S,g as R,i as N,k as E,m as q,P as T,l as O,n as F,F as z,o as A,B as L,p as $,R as B,s as U,t as M,v as D,I as K,w as H,x as V,y as W,z as G,E as Z,G as J,H as Y,J as Q,K as X,T as ee,N as te,O as re,Q as se,V as oe,W as ne,X as ae,Y as ie,Z as le,$ as ce,a0 as de,a1 as pe,a2 as ue,a3 as xe,a4 as me,a5 as he,a6 as fe,a7 as ge,a8 as ye,a9 as je}from"./vendor.d6539910.js";const be=undefined;(function e(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();var ve={default:{},local:{baseURL:"/api",fileUrl:"/api/files"},prod:{baseURL:"/api",fileUrl:"/api/files"}};const we="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ie=i(i({},ve.default||{}),ve[we.__app_mode__||"prod"]||{});we.__app_mode__;const Ce=d.exports.createContext(null),Pe=({value:e={},children:t})=>{const[r,s]=d.exports.useState(e),o=(e={})=>{s(i(i({},r),e))};return p.exports.jsx(Ce.Provider,{value:[r,o],children:t})},_e=()=>{const e=undefined;return d.exports.useContext(Ce)},ke={},Se={default:u.create(ke)};function Re(e){if(e){if(Se[e])return Se;Se[e]=u.create(ke)}return Se}const Ne=async function(e){try{const t=e.instanceName?e.instanceName:"default",r=Re()[t];if("function"!=typeof r)throw new Error(`unknown ${t} in request method`);const s=await r(e);return r.defaults.withFullResponse||e.withFullResponse?s:s.data}catch(t){throw console.error(t),t}};function Ee(e,t={}){const r=m(e,i({manual:!0,requestMethod:Ne},t)),{run:s}=r,o=c(r,["run"]);return i({request:s},o)}x.forEach(["delete","get","head","options"],(function e(t){Ne[t]=function(e,r){return Ne(x.merge(r||{},{method:t,url:e}))}})),x.forEach(["post","put","patch"],(function e(t){Ne[t]=function(e,r,s){return Ne(x.merge(s||{},{method:t,url:e,data:r}))}})),Ne.CancelToken=u.CancelToken,Ne.isCancel=u.isCancel;const qe=(e,t)=>`${e.toString()}\n\nThis is located at:${t}`,Te={display:"flex",flexDirection:"column",alignItems:"center",margin:"100px 0",color:"#ed3131"},Oe=({componentStack:e,error:t})=>p.exports.jsxs("div",{style:Te,title:qe(t,e),children:[p.exports.jsxs("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"843",width:"60",height:"60",children:[p.exports.jsx("path",{d:"M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512s229.23 512 512 512c117.41 0 228.826-39.669 318.768-111.313 10.79-8.595 12.569-24.308 3.975-35.097-8.594-10.789-24.308-12.568-35.097-3.974C718.47 938.277 618.002 974.049 512 974.049 256.818 974.049 49.951 767.182 49.951 512S256.818 49.951 512 49.951 974.049 256.818 974.049 512c0 87.493-24.334 171.337-69.578 243.96-7.294 11.708-3.716 27.112 7.992 34.405 11.707 7.294 27.11 3.716 34.405-7.991C997.014 701.88 1024 608.898 1024 512z","p-id":"844",fill:"#cdcdcd"}),p.exports.jsx("path",{d:"M337.17 499.512c34.485 0 62.44-27.955 62.44-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438z m374.635 0c34.484 0 62.439-27.955 62.439-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438zM352.788 704.785c43.377-34.702 100.364-55.425 171.7-55.425 71.336 0 128.322 20.723 171.7 55.425 26.513 21.21 42.695 42.786 50.444 58.284 6.168 12.337 1.168 27.34-11.17 33.508-12.337 6.169-27.34 1.168-33.508-11.17-0.918-1.834-3.462-6.024-7.788-11.793-7.564-10.084-17.239-20.269-29.183-29.824-34.671-27.737-80.71-44.478-140.495-44.478-59.786 0-105.824 16.74-140.496 44.478-11.944 9.555-21.619 19.74-29.182 29.824-4.327 5.769-6.87 9.959-7.788 11.794-6.169 12.337-21.171 17.338-33.509 11.17-12.337-6.17-17.338-21.172-11.169-33.509 7.75-15.498 23.931-37.074 50.444-58.284z","p-id":"845",fill:"#cdcdcd"})]}),p.exports.jsx("h3",{children:"Oops! Something went wrong."})]});class Fe extends d.exports.Component{constructor(e){super(e),this.state={error:null,info:{componentStack:""}}}componentDidCatch(e,t){const{onError:r}=this.props;if("function"==typeof r)try{r.call(this,e,t.componentStack)}catch(s){}this.setState({error:e,info:t})}render(){const{children:e,Fallback:t}=this.props,{error:r,info:s}=this.state;return null!==r&&"function"==typeof t?p.exports.jsx(t,{componentStack:s&&s.componentStack,error:r}):e||null}}Fe.defaultProps={Fallback:Oe},h({useEffect:d.exports.useEffect});var ze="";const Ae=({appConfig:e})=>{if(e.request){const{request:t={}}=e;if("[object Array]"===Object.prototype.toString.call(t))t.forEach((e=>{const t=e.instanceName?e.instanceName:"default";if(t){const r=undefined;Le(e,Re(t)[t])}}));else{const e=undefined;Le(t,Re().default)}}};function Le(e,t){const r=e,{interceptors:s={}}=r,o=c(r,["interceptors"]);Object.keys(o).forEach((e=>{t.defaults[e]=o[e]})),s.request&&t.interceptors.request.use(s.request.onConfig||function(e){return e},s.request.onError||function(e){return Promise.reject(e)}),s.response&&t.interceptors.response.use(s.response.onConfig||function(e){return e},s.response.onError||function(e){return Promise.reject(e)})}function $e(e){Ae({appConfig:e})}var Be=({appConfig:e,wrapperPageComponent:t,buildConfig:r,context:s,applyRuntimeAPI:o,getRuntimeValue:n,addProvider:a})=>{const{app:i={}}=e,{ErrorBoundaryFallback:l,onErrorBoundaryHandler:c,renderComponent:d,addProvider:p}=i;p&&a(p);const{parseSearchParams:u=!0}=i;u&&t(Ue(o)),t(De()),t(Me(l,c)),n("enableRouter")};function Ue(e){const t=undefined;return t=>{const{pageConfig:r}=t,s=undefined;return s=>{const o=e("getSearchParams");return p.exports.jsx(t,i({},Object.assign({},s,{searchParams:o,pageConfig:r})))}}}function Me(e,t){const r=undefined;return r=>{const{pageConfig:s={}}=r,o=undefined;return o=>s.errorBoundary?p.exports.jsx(Fe,{Fallback:e,onError:t,children:p.exports.jsx(r,i({},o))}):p.exports.jsx(r,i({},o))}}function De(){const e=undefined;return e=>{const{pageConfig:t}=e,{title:r,scrollToTop:s}=t||{},o=undefined;return t=>{const[o,n]=d.exports.useState(window.__ICE_PAGE_PROPS__);return d.exports.useEffect((()=>{r&&(document.title=r),s&&window.scrollTo(0,0),window.__ICE_PAGE_PROPS__?window.__ICE_PAGE_PROPS__=null:e.getInitialProps&&(async()=>{const{href:t,origin:r,pathname:s,search:o}=window.location,a=undefined,i=undefined,l=undefined,c={pathname:s,path:t.replace(r,""),query:f.parse(o),ssrError:window.__ICE_SSR_ERROR__},d=await e.getInitialProps(c);n(d)})()}),[]),p.exports.jsx(e,i({},Object.assign({},t,o)))}}}const Ke=()=>Ne({url:"/loginUserInfo",method:"get"}),He=()=>Ne({url:"/loginUserMenus",method:"get"}),Ve=e=>Ne({url:"/switchRole",method:"get",params:e,withFullResponse:!0}),We=()=>Ne({url:"/logout",method:"get"}),Ge=e=>Ne({url:"/sys/updatePwd",method:"put",data:e});var Ze;const Je=undefined;var Ye=y({user:{state:{userInfo:null},reducers:{update:(e,t)=>i({},t)},effects:e=>({async getUserInfo(){var t,r;const s=undefined;if(!localStorage.getItem("authorization"))return void(null==(r=g)||r.replace({pathname:"/login",search:`redirect=${null==(t=g)?void 0:t.location.pathname}`}));const[o,n]=await Promise.all([Ke(),He()]),{userName:a,userId:i,account:l}=o;e.user.update({userInfo:{userName:a,userId:i,account:l,userPermission:n}})}})}});function Qe(){const[e,t]=Ye.useModel("user"),{userInfo:r}=e,{nickName:s,userName:o,currentRole:n,roles:a}=r||{},[i,l]=d.exports.useState(!1),[c,u]=d.exports.useState(!1),[x,m]=d.exports.useState(""),h=j(),f=async()=>{const{pathname:e}=h.location;await We(),"/login"!==window.location.pathname&&h.replace({pathname:"/login",search:JSON.stringify({redirect:e})}),localStorage.clear()},g=e=>{const{key:t}=e;switch(t){case"logout":f();break;case"changeRole":l(!0);break;case"settings":u(!0)}},{loading:y,request:F}=Ee(Ve,{onSuccess:e=>{const{authorization:r}=e.headers;localStorage.setItem("authorization",r),l(!1),t.getUserInfo()}}),z=()=>{x&&x!==(null==n?void 0:n.id)?F({roleId:x}):A()},A=()=>{setTimeout((()=>l(!1)))},L=p.exports.jsxs(b,{selectedKeys:[],onClick:g,children:[p.exports.jsxs(b.Item,{children:[p.exports.jsx(v,{}),p.exports.jsx("span",{className:"ml10",children:"\u4fee\u6539\u5bc6\u7801"})]},"settings"),(null==a?void 0:a.length)>1?p.exports.jsxs(b.Item,{children:[p.exports.jsx(w,{}),p.exports.jsx("span",{className:"ml10",children:"\u5207\u6362\u89d2\u8272"}),p.exports.jsx(I,{title:"\u5207\u6362\u89d2\u8272",visible:i,destroyOnClose:!0,onCancel:A,onOk:z,confirmLoading:y,children:p.exports.jsx(C.Group,{size:"small",onChange:e=>{m(e)},defaultValue:n.id,children:a.map((e=>p.exports.jsx(C,{title:e.roleName,description:e.remark,value:e.id},e.id)))})})]},"changeRole"):"",p.exports.jsx(b.Divider,{}),p.exports.jsxs(b.Item,{children:[p.exports.jsx(P,{}),p.exports.jsx("span",{className:"ml10",children:"\u9000\u51fa\u767b\u5f55"})]},"logout")]});return p.exports.jsxs(p.exports.Fragment,{children:[p.exports.jsx(_,{overlay:L,children:p.exports.jsxs(k,{className:"hand",children:[p.exports.jsx(S,{shape:"square",size:"small",icon:p.exports.jsx(R,{})}),p.exports.jsx("span",{children:s||o}),p.exports.jsx("span",{children:n?n.roleName:""}),p.exports.jsx(N,{})]})}),p.exports.jsxs(E,{title:"\u4fee\u6539\u5bc6\u7801",autoFocusFirstInput:!0,visible:c,width:400,modalProps:{destroyOnClose:!0,maskClosable:!1,onCancel:()=>u(!1)},onFinish:async e=>{const{newPwd:t,oldPwd:r}=e;await Ge({newPwd:t,oldPwd:r}),q.success("\u4fee\u6539\u6210\u529f"),f()},children:[p.exports.jsx(T.Password,{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u539f\u59cb\u5bc6\u7801"}],name:"oldPwd",label:"\u539f\u5bc6\u7801"}),p.exports.jsx(T.Password,{name:"newPwd",label:"\u65b0\u5bc6\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u539f\u59cb\u5bc6\u7801"},{pattern:/^(\w){6,20}$/,message:"\u5bc6\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}]}),p.exports.jsx(O,{name:["newPwd"],children:({newPwd:e})=>p.exports.jsx(T.Password,{name:"comfirmPW",label:"\u786e\u8ba4\u65b0\u5bc6\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u539f\u59cb\u5bc6\u7801"},{validator:(t,r)=>r!==e?Promise.reject(new Error("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4")):Promise.resolve()}]})})]})]})}var Xe={ControlOutlined:F,FileMarkdownOutlined:z,ProfileOutlined:A};const et=e=>null==e?void 0:e.map((({permissionName:e,children:t,url:r,icon:s,type:o})=>({path:r,key:r,hideInMenu:"F"===o||"B"===o,name:e,icon:s&&Xe[s]&&d.exports.createElement(Xe[s]),children:t&&et(t)})));function tt({children:e,history:t}){const[r,s]=Ye.useModel("user"),{userInfo:o}=r;return d.exports.useEffect((()=>{s.getUserInfo()}),[s]),p.exports.jsx(L,{title:"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",style:{minHeight:"100vh"},location:{pathname:t.location.pathname},menuDataRender:()=>et(null==o?void 0:o.userPermission),menuItemRender:(e,t)=>e.path?p.exports.jsx($,{to:e.path,children:t}):t,rightContentRender:()=>p.exports.jsx(Qe,{}),children:p.exports.jsx("div",{style:{minHeight:"60vh",height:"100%"},children:e})})}function rt({history:e}){const[t]=Ye.useModel("user"),{userPermission:r}=(null==t?void 0:t.userInfo)||{};return d.exports.useEffect((()=>{r&&e.replace(r[0].url)}),[r,e]),p.exports.jsx("div",{children:"home"})}const st=undefined,ot=undefined,nt=undefined,at=undefined;var it="_login-x_ypqsa_1",lt="_login-content_ypqsa_8",ct="_title_ypqsa_28",dt="_sub-title_ypqsa_38",pt="_login-form_ypqsa_46",ut="_form-box_ypqsa_49",xt="_ant-form-item-label_ypqsa_56",mt="_verify-x_ypqsa_59",ht="_ant-input_ypqsa_64",ft="_ant-input-affix-wrapper_ypqsa_68",gt="_sub-x_ypqsa_72";const yt=e=>Ne({url:"/login",method:"post",data:e,withFullResponse:!0,instanceName:"loginRequest"}),jt=()=>Ne({url:"/captcha",method:"get",instanceName:"loginRequest"});function bt(){const[e]=M.useForm(),t=j(),{data:r,refresh:s}=Ee(jt,{manual:!1}),{uuid:o,data:n}=r||{},a=e=>yt(l(i({},e),{uuid:o})),{loading:c,request:d}=Ee(a,{onSuccess:e=>{if(200===e.data.code){const{authorization:r}=e.headers;localStorage.setItem("authorization",r);const{redirect:s}=D();s&&"/login"!==s?t.push(s):t.push("/")}else s()}}),u=async(e,t)=>t?/^[A-Za-z0-9]{3,5}$/.test(t)?Promise.resolve():Promise.reject(new Error("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9a8c\u8bc1\u7801")):Promise.reject(new Error("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"));return p.exports.jsx("div",{className:it,children:p.exports.jsx("div",{className:lt,children:p.exports.jsxs("div",{className:pt,children:[p.exports.jsx("div",{className:ct,children:"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),p.exports.jsxs(M,{form:e,className:ut,onFinish:d,validateTrigger:"onBlur",initialValues:{rememberMe:!1},children:[p.exports.jsx(M.Item,{name:"account",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7"}],children:p.exports.jsx(K,{autoComplete:"username",prefix:p.exports.jsx(R,{}),placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7"})}),p.exports.jsx(M.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:p.exports.jsx(K,{prefix:p.exports.jsx(H,{}),type:"password",autoComplete:"current-password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"})}),p.exports.jsx(M.Item,{children:p.exports.jsxs(k,{className:"code-x",children:[p.exports.jsx(M.Item,{name:"verifyCode",noStyle:!0,rules:[{validator:u}],children:p.exports.jsx(K,{placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"})}),p.exports.jsx("img",{className:mt,onClick:s,src:n})]})}),p.exports.jsx(M.Item,{name:"rememberMe",valuePropName:"checked",children:p.exports.jsx(V,{children:"\u8bb0\u4f4f\u6211\u4e00\u5468"})}),p.exports.jsx(U,{type:"primary",loading:c,block:!0,htmlType:"submit",className:gt,children:c?"\u767b\u5f55\u4e2d...":"\u767b\u5f55"})]})]})})})}const vt=undefined,wt=e=>Ne({url:"/role/getRoleList",method:"get",params:e}),It=e=>Ne({url:"/role/addRole",method:"post",data:e}),Ct=e=>Ne({url:"/role/updateRole",method:"put",data:e}),Pt=e=>Ne({url:"/role/deleteRole",method:"delete",params:e}),_t=()=>Ne({url:"/permission/getPermissionTree",method:"get"}),kt=e=>Ne({url:"/permission/updatePermission",method:"put",data:e}),St=e=>Ne({url:"/permission/addPermission",method:"post",data:e}),Rt=e=>Ne({url:"/permission/deletePermission",method:"delete",params:e}),Nt=e=>Ne({url:"/role/getPermissionTreeByRoleId",method:"get",params:e}),Et=e=>Ne({url:"/role/distributePermissions",method:"post",data:e}),qt=e=>Ne({url:"/user/getUserListPage",method:"get",params:e}),Tt=e=>Ne({url:"/user/addUser",method:"post",data:e}),Ot=e=>Ne({url:"/user/updateUser",method:"put",data:e}),Ft=e=>Ne({url:"/user/deleteUser",method:"delete",params:e}),zt=e=>Ne({url:"/user/resetPassword",method:"put",params:e});var At,Lt;const $t=(e,t=[])=>(e&&e.forEach((e=>{e.children?$t(e.children,t):t.push(e.permissionId)})),t),Bt=(e,t=[])=>(e&&e.forEach((e=>{e.children&&(t.push(e.permissionId),Bt(e.children,t))})),t),Ut=(e,t=[])=>(e&&e.forEach((e=>{t.push(e.permissionId),e.children&&Ut(e.children,t)})),t);function Mt(){const e=j(),t={C:{color:"blue",text:"\u76ee\u5f55"},M:{color:"green",text:"\u83dc\u5355"},F:{color:"volcano",text:"\u529f\u80fd"},B:{color:"",text:"\u6309\u94ae"}},[r,s]=d.exports.useState([]),[o,n]=d.exports.useState([]),[a,i]=d.exports.useState(!0),[l,c]=d.exports.useState([]),{id:u}=Y(),{data:x,loading:m}=Ee(_t,{manual:!1}),{data:h}=Ee((()=>Nt({roleId:u})),{manual:!1}),{loading:f,request:g}=Ee(Et),y=(e,t)=>{s([...e]),n([...e,...t.halfCheckedKeys]),i(!1)},b=async()=>{const e=o.join();await g({permissionIds:e,roleId:u}),q.success("\u83dc\u5355\u6743\u9650\u5206\u914d\u6210\u529f"),i(!0)},v=()=>{const e=x.map((e=>e.permissionId));s(e),n(Ut(x)),i(!1)},w=()=>{0===l.length?c(Bt(x)):c([])};return d.exports.useEffect((()=>{h&&(s($t(h)),c(Bt(x)))}),[h,x]),p.exports.jsx(Q,{className:"main-card",headerBordered:!0,bordered:!0,loading:m,title:p.exports.jsxs("span",{onClick:e.goBack,className:"c-title-x",children:[p.exports.jsx(X,{}),p.exports.jsx("span",{className:"c-title",children:"\u6743\u9650\u5206\u914d"})]}),extra:p.exports.jsxs(k,{size:20,children:[p.exports.jsx("a",{onClick:w,children:(0===l.length?"\u5c55\u5f00":"\u6536\u8d77")+"\u5168\u90e8"}),p.exports.jsx("a",{onClick:v,children:"\u5168\u9009"}),p.exports.jsx(U,{type:"primary",onClick:b,loading:f,disabled:a,children:"\u4fdd\u5b58"})]}),children:p.exports.jsx(ee,{checkable:!0,selectable:!1,onCheck:y,showLine:!0,treeData:x,checkedKeys:r,expandedKeys:l,onExpand:e=>c(e),titleRender:e=>p.exports.jsxs(k,{children:[p.exports.jsx("div",{children:e.permissionName}),p.exports.jsx(te,{color:t[e.type].color,children:t[e.type].text})]}),fieldNames:{key:"permissionId"}})})}var Dt;const Kt=e=>Ne({url:"/blog/list",method:"get",params:e}),Ht=e=>Ne({url:"/blog/saveOrUpdate",method:"post",data:e}),Vt=e=>Ne({url:"/blog/getById",method:"get",params:e}),Wt=e=>Ne({url:"/blog/removeByIds",method:"delete",params:e}),Gt=e=>Ne({headers:{"Content-Type":"multipart/form-data"},url:"/blog/upload",method:"post",data:e});var Zt,Jt="",Yt="";const Qt=({history:e})=>{const[t,r]=d.exports.useState(""),[s,o]=d.exports.useState(""),n=[se(),oe(),ne()],{id:a}=Y(),i=async r=>{if(!s)return void q.error("\u8bf7\u8f93\u5165\u6587\u7ae0\u6807\u9898");const o={title:s,content:t,status:r};a&&Object.assign(o,{id:a}),await Ht(o),q.success("\u4fdd\u5b58\u6210\u529f"),e.push("/blog/article")},l=async e=>{const t=e[0],r=new FormData;r.append("file",t,t.name);const s=await Gt(r);return[{url:`${Ie.fileUrl}${s.url}`,title:s.originalFilename}]};return d.exports.useEffect((()=>{a&&Vt({id:a}).then((e=>{r(e.content),o(e.title)}))}),[a]),p.exports.jsxs("div",{className:"ar-x",children:[p.exports.jsxs("div",{className:"ar-header",children:[p.exports.jsx(K,{placeholder:"\u8f93\u5165\u6587\u7ae0\u6807\u9898",maxLength:80,className:"edit-title",bordered:!1,value:s,onChange:e=>o(e.target.value)}),p.exports.jsx(U,{onClick:()=>e.push("/blog/article"),children:"\u8fd4\u56de\u6587\u7ae0\u5217\u8868"}),p.exports.jsx(U,{className:"submit-btn",onClick:()=>i("2"),type:"primary",ghost:!0,children:"\u4fdd\u5b58\u4e3a\u8349\u7a3f"}),p.exports.jsx(U,{className:"submit-btn",type:"primary",onClick:()=>i("1"),children:"\u53d1\u5e03"})]}),p.exports.jsx(ae,{locale:ie,value:t,plugins:n,uploadImages:l,onChange:e=>{r(e)}})]})},Xt=[{path:"/login",component:bt},{path:"/editor",component:Qt,exact:!0},{path:"/editor/:id",component:Qt,exact:!0},{path:"/",component:tt,children:[{path:"/home",component:rt},{path:"/system",children:[{path:"/user",component:()=>{const e=d.exports.useRef(),[t,r]=d.exports.useState([]),s=[{title:"\u7528\u6237\u540d\u79f0",dataIndex:"userName",formItemProps:()=>({rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"}]})},{title:"\u8d26\u53f7",dataIndex:"account",formItemProps:()=>({rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"},{pattern:/^[a-zA-Z0-9_-]{3,16}$/,message:"\u7528\u6237\u540d\u683c\u5f0f\u4e0d\u6b63\u786e"}]})},{title:"\u89d2\u8272",dataIndex:"roleList",valueType:"select",search:!1,request:async()=>{const e=undefined;return(await wt()).map((e=>({value:e.roleId,label:e.roleName})))},fieldProps:{mode:"multiple"},formItemProps:()=>({rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"}]}),renderText:(e,t)=>{var r;return null==(r=t.roles)?void 0:r.map((e=>e.roleId))},render:(e,t)=>{var r;return null==(r=t.roles)?void 0:r.map((e=>e.roleName)).join()}},{title:"\u7528\u6237\u72b6\u6001",dataIndex:"enabled",search:!1,valueType:"select",renderText:e=>String(e),valueEnum:{0:{text:"\u505c\u7528",status:"Error"},1:{text:"\u6b63\u5e38",status:"Success"}}},{title:"\u64cd\u4f5c",valueType:"option",dataIndex:"option",width:250,render:(e,t,r,s)=>[p.exports.jsx("a",{onClick:()=>{var e;null==(e=null==s?void 0:s.startEditable)||e.call(s,t.userId)},children:"\u7f16\u8f91"},"editable"),p.exports.jsx(Z,{title:"\u662f\u5426\u91cd\u7f6e\u6b64\u7528\u6237\u5bc6\u7801?",onConfirm:async()=>{await zt({userId:t.userId}),q.success("\u5bc6\u7801\u5df2\u91cd\u7f6e")},okText:"\u662f",cancelText:"\u5426",children:p.exports.jsx("a",{onClick:async()=>{},children:"\u91cd\u7f6e\u5bc6\u7801"})},"reset"),p.exports.jsx(Z,{title:"\u662f\u5426\u5220\u9664\u6b64\u7528\u6237?",onConfirm:async()=>{await Ft({userId:t.userId}),q.success("\u5220\u9664\u6210\u529f"),(null==s?void 0:s.reset)&&(null==s||s.reset())},okText:"\u662f",cancelText:"\u5426",children:p.exports.jsx("a",{children:"\u5220\u9664"})},"delete")]}],o=()=>{var t;null==(t=e.current)||t.addEditRecord({userId:Date.now(),userName:"",enabled:"1",isCreate:!0,roles:[]},{position:"top"})};return p.exports.jsx(W,{columns:s,actionRef:e,recordCreatorProps:!1,request:async e=>{const{current:t,pageSize:r,userName:s,account:o}=e,{records:n,total:a}=await qt({currentPage:t,pageSize:r,userName:s,account:o});return{data:n,success:!0,total:a}},editable:{editableKeys:t,onSave:async(t,r)=>{var s,o,n;const{userName:a,enabled:i,isCreate:l,userId:c,account:d,roleList:p}=r,u=l?"\u65b0\u589e":"\u7f16\u8f91",x=p.join(),m=`${d}123`;l?(await Tt({userName:a,enabled:i,account:d,unencryptPwd:m,roleIdsStr:x}),(null==(s=e.current)?void 0:s.reset)&&(null==(o=e.current)||o.reset())):(await Ot({userId:c,userName:a,enabled:i,account:d,roleIdsStr:x}),null==(n=e.current)||n.reload()),q.success(`${u}\u6210\u529f`)},onChange:r,actionRender:(e,t,r)=>[r.save,r.cancel]},search:{labelWidth:"auto"},pagination:{pageSize:10,hideOnSinglePage:!0},rowKey:e=>e.userId,options:!1,headerTitle:"\u7528\u6237\u7ba1\u7406",toolBarRender:()=>[p.exports.jsx(U,{icon:p.exports.jsx(G,{}),type:"primary",onClick:o,children:"\u65b0\u589e\u7528\u6237"},"button")]})},exact:!0},{path:"/auth",component:()=>{const e=d.exports.useRef(),[t,r]=d.exports.useState(!1),s=()=>({permissionName:"",url:"/",icon:"",isCreate:!0,type:"",permissionId:String(Date.now()),sort:0}),[o,n]=d.exports.useState(s()),a=d.exports.useRef(),[c,u]=d.exports.useState([]),x={C:{color:"blue",text:"\u76ee\u5f55"},M:{color:"green",text:"\u83dc\u5355"},F:{color:"volcano",text:"\u529f\u80fd"},B:{color:"",text:"\u6309\u94ae"}},m=Object.entries(x).map((e=>({value:e[0],label:e[1].text}))),h=[{title:"\u6743\u9650\u540d\u79f0",dataIndex:"permissionName",formItemProps:()=>({rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"}]})},{title:"URL",dataIndex:"url",formItemProps:()=>({rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"}]})},{title:"\u56fe\u6807",dataIndex:"icon"},{title:"\u7c7b\u578b",dataIndex:"type",editable:!1,render:(e,t)=>p.exports.jsx(te,{color:x[t.type].color,children:x[t.type].text})},{title:"\u6392\u5e8f",dataIndex:"sort"},{title:"\u64cd\u4f5c",valueType:"option",width:200,render:(e,t,o,a)=>[p.exports.jsx("a",{onClick:()=>{r(!0),n(l(i({},s()),{parentId:t.permissionId}))},children:"\u65b0\u589e\u5b50\u6743\u9650"},"create"),p.exports.jsx("a",{onClick:()=>{r(!0),n(l(i({},t),{isCreate:!1}))},children:"\u7f16\u8f91"},"editable"),p.exports.jsx(Z,{title:"\u662f\u5426\u5220\u9664\u6b64\u6743\u9650?",onConfirm:async()=>{await Rt({permissionId:t.permissionId}),null==a||a.reload(!0),q.success("\u5220\u9664\u6210\u529f")},okText:"\u662f",cancelText:"\u5426",children:p.exports.jsx("a",{children:"\u5220\u9664"})},"delete")]}],{request:f}=Ee(kt),{request:g}=Ee(St),y=()=>{r(!0),n(l(i({},s()),{type:"C"}))},j=()=>{r(!1),n(i({},s()))};return p.exports.jsxs("div",{className:"table-x",children:[p.exports.jsx(J,{rowKey:e=>e.permissionId,headerTitle:"\u6743\u9650\u7ba1\u7406",actionRef:e,name:"table",options:!1,expandable:{expandedRowKeys:c,onExpand:(e,t)=>{u(e?[...c,t.permissionId]:c.filter((e=>e!==t.permissionId)))}},request:async()=>{const e=undefined;return{data:await _t(),success:!0}},columns:h,toolBarRender:()=>[p.exports.jsx(U,{icon:p.exports.jsx(G,{}),type:"primary",onClick:y,children:"\u65b0\u589e\u76ee\u5f55"},"button")],search:!1,pagination:!1}),p.exports.jsxs(E,{title:(o.isCreate?"\u65b0\u589e":"\u7f16\u8f91")+"\u6743\u9650",autoFocusFirstInput:!0,visible:t,initialValues:o,formRef:a,modalProps:{destroyOnClose:!0,width:500,onCancel:()=>j()},onFinish:async t=>{var r;const{parentId:s,permissionId:n}=o;o.isCreate?await g(l(i({},t),{parentId:s})):await f(l(i({},t),{parentId:s,permissionId:n})),q.success("\u63d0\u4ea4\u6210\u529f"),j(),null==(r=e.current)||r.reload()},children:[p.exports.jsx(T,{name:"permissionName",label:"\u6743\u9650\u540d\u79f0",placeholder:"\u8bf7\u8f93\u5165\u6743\u9650\u540d\u79f0"}),p.exports.jsx(T,{name:"url",label:"URL",placeholder:"\u8bf7\u8f93\u5165URL"}),p.exports.jsx(T,{name:"icon",label:"\u56fe\u6807",placeholder:"\u8bf7\u8f93\u5165\u56fe\u6807\u540d\u79f0"}),p.exports.jsx(T,{name:"sort",label:"\u6392\u5e8f",placeholder:"\u8bf7\u8f93\u5165\u6392\u5e8f"}),p.exports.jsx(re,{name:"type",label:"\u7c7b\u578b",options:m,disabled:"C"===o.type})]})]})}},{path:"/role",component:()=>{const e=d.exports.useRef(),[t]=M.useForm(),r=()=>{var t;null==(t=e.current)||t.addEditRecord({roleId:(1e6*Math.random()).toFixed(0),roleKey:"",roleName:"",enabled:"1",isCreate:!0})},{request:s}=Ee(Pt,{onSuccess:()=>{var t;q.success("\u5220\u9664\u6210\u529f"),null==(t=e.current)||t.reload(!0)}}),o=[{title:"\u6743\u9650\u6807\u8bc6",dataIndex:"roleKey",formItemProps:()=>({rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"},{pattern:/^[a-zA-Z0-9]+$/,message:"\u6743\u9650\u6807\u8bc6\u53ea\u80fd\u662f\u82f1\u6587\u6216\u6570\u5b57\u5b57\u7b26"}]})},{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"roleName",formItemProps:()=>({rules:[{required:!0,message:"\u6b64\u9879\u4e3a\u5fc5\u586b\u9879"}]})},{title:"\u89d2\u8272\u72b6\u6001",dataIndex:"enabled",search:!1,renderText:e=>String(e),valueEnum:{0:{text:"\u505c\u7528",status:"Error"},1:{text:"\u6b63\u5e38",status:"Success"}}},{title:"\u64cd\u4f5c",valueType:"option",render:(e,t,r,o)=>1===t.modified?[p.exports.jsx("a",{onClick:()=>{var e;null==(e=null==o?void 0:o.startEditable)||e.call(o,t.roleId)},children:"\u7f16\u8f91"},"editable"),p.exports.jsx(Z,{title:"\u662f\u5426\u5220\u9664\u6b64\u89d2\u8272?",onConfirm:()=>s({roleId:t.roleId}),okText:"\u662f",cancelText:"\u5426",children:p.exports.jsx("a",{children:"\u5220\u9664"})},"del"),p.exports.jsx($,{to:`/system/role/${t.roleId}`,children:"\u5206\u914d\u6743\u9650"},"disturb")]:""}];return p.exports.jsx(J,{columns:o,actionRef:e,request:async()=>{const e=undefined;return{data:await wt(),success:!0}},rowKey:"roleId",search:!1,dateFormatter:"string",options:!1,headerTitle:"\u89d2\u8272\u7ba1\u7406",editable:{form:t,onSave:async(t,r)=>{var s;const{roleKey:o,roleName:n,isCreate:a,roleId:i,enabled:l}=r,c={roleKey:o,roleName:n,enabled:l};let d="";a?(await It(c),d="\u7f16\u8f91"):(Object.assign(c,{roleId:i}),await Ct(c),d="\u7f16\u8f91"),q.success(`${d}\u6210\u529f`),null==(s=e.current)||s.reload(!0)},actionRender:(e,t,r)=>[r.save,r.cancel]},pagination:{pageSize:10,hideOnSinglePage:!0},toolBarRender:()=>[p.exports.jsx(U,{icon:p.exports.jsx(G,{}),type:"primary",onClick:r,children:"\u65b0\u589e\u89d2\u8272"},"button")]})},exact:!0},{path:"/role/:id",component:Mt,exact:!0},{path:"",redirect:"/system/user"}]},{path:"/blog",children:[{path:"/article",component:({history:e})=>{const t=d.exports.useRef(),r=[{title:"\u6587\u7ae0\u6807\u9898",dataIndex:"title",ellipsis:!0,render:(e,t)=>p.exports.jsx($,{to:`/editor/${t.id}`,children:e})},{title:"\u6587\u7ae0\u63cf\u8ff0",dataIndex:"description",ellipsis:!0,search:!1},{title:"\u6587\u7ae0\u72b6\u6001",dataIndex:"status",valueEnum:{0:{text:"\u4e0b\u7ebf",status:"Default"},1:{text:"\u4e0a\u7ebf",status:"Processing"},2:{text:"\u8349\u7a3f",status:"Success"}},width:120},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime",valueType:"date",width:120,search:!1},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updateTime",valueType:"date",width:120,search:!1},{title:"\u66f4\u65b0\u65f6\u95f4\u533a\u95f4",dataIndex:"timeRange",valueType:"dateRange",hideInTable:!0},{title:"\u64cd\u4f5c",valueType:"option",dataIndex:"option",width:140,render:(t,r,s,o)=>{const n={0:{text:"\u4e0a\u7ebf",status:"1"},1:{text:"\u4e0b\u7ebf",status:"0"},2:{text:"\u53d1\u5e03",status:"1"}},{status:a,text:i}=n[r.status];return[p.exports.jsx("a",{onClick:()=>{e.push(`/editor/${r.id}`)},children:"\u7f16\u8f91"},"editable"),p.exports.jsx(Z,{title:`\u662f\u5426${i}\u6b64\u6587\u7ae0?`,onConfirm:async()=>{await Ht({id:r.id,status:a}),q.success(`${i}\u6210\u529f`),(null==o?void 0:o.reset)&&(null==o||o.reset())},okText:"\u662f",cancelText:"\u5426",children:p.exports.jsx("a",{children:i})},"stop"),p.exports.jsx(Z,{title:"\u662f\u5426\u5220\u9664\u6b64\u6587\u7ae0?",onConfirm:async()=>{await Wt({ids:r.id.toString()}),q.success("\u5220\u9664\u6210\u529f"),(null==o?void 0:o.reset)&&(null==o||o.reset())},okText:"\u662f",cancelText:"\u5426",children:p.exports.jsx("a",{children:"\u5220\u9664"})},"delete")]}}],s=()=>{e.push("/editor")};return p.exports.jsx(J,{columns:r,actionRef:t,request:async e=>{const{current:t,pageSize:r,title:s,status:o,timeRange:n}=e,[a,i]=n||[],{records:l,total:c}=await Kt({currentPage:t,pageSize:r,title:s,status:o,beginTime:a,endTime:i});return{data:l,success:!0,total:c}},search:{labelWidth:"auto"},pagination:{pageSize:10,hideOnSinglePage:!0},rowKey:"id",options:!1,headerTitle:"\u535a\u5ba2\u7ba1\u7406",toolBarRender:()=>[p.exports.jsx(U,{icon:p.exports.jsx(G,{}),type:"primary",onClick:s,children:"\u5199\u6587\u7ae0"},"button")]})}}]},{path:"/403",component:()=>p.exports.jsx(B,{status:"403",title:"403",subTitle:"Sorry, you don't have access to this page.",extra:p.exports.jsx(U,{type:"primary",onClick:()=>{var e;return null==(e=g)?void 0:e.push("/")},children:"Back Home"})})},{path:"",exact:!0,redirect:"/home"},{component:()=>p.exports.jsx(B,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:p.exports.jsx(U,{type:"primary",onClick:()=>{var e;return null==(e=g)?void 0:e.push("/")},children:"Back Home"})})}]}];function er(e,t){return(t||[]).reduce(((e,t)=>{const r=t(e);return e.pageConfig&&(r.pageConfig=e.pageConfig),e.getInitialProps&&(r.getInitialProps=e.getInitialProps),r}),e)}function tr(e,t){t&&["pageConfig","getInitialProps"].forEach((r=>{Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))}function rr(e,t,r,s){const{__LAZY__:o,dynamicImport:n,__LOADABLE__:a}=e||{};return a?pe(n,{resolveComponent:e=>{const s=e.default;return tr(s,r),er(s,t)},fallback:s}):o?d.exports.lazy((()=>n().then((e=>{if(t&&t.length){const s=e.default;return tr(s,r),l(i({},e),{default:er(s,t)})}return e})))):(tr(e,r),er(e,t))}function sr(e,t){return e.map((e=>{const r=e,{children:s,component:o,routeWrappers:n,wrappers:a}=r,l=c(r,["children","component","routeWrappers","wrappers"]);let d=s?[]:n;a&&a.length&&(d=d.concat(a));const p=i({},l);return o&&(p.component=rr(o,d,e,t)),s&&(p.children=sr(s,t)),p}))}function or(e){const t=e,{type:r,children:s}=t,o=c(t,["type","children"]);let n=s;if(!n&&e.routes){const t=sr(e.routes,e.fallback);n=p.exports.jsx(nr,{routes:t,fallback:e.fallback})}return"static"===r?p.exports.jsx(ue,l(i({},o),{children:n})):p.exports.jsx(xe,l(i({},o),{children:n}))}function nr({routes:e,fallback:t}){return p.exports.jsx(le,{children:e.map(((e,r)=>{const{children:s}=e;if(s){const s=e,{component:o,children:n}=s,a=c(s,["component","children"]),d=p.exports.jsx(nr,{routes:n,fallback:t}),u=e=>o?p.exports.jsx(o,l(i({},e),{children:d})):d;return p.exports.jsx(de,l(i({},a),{render:u}),r)}if(e.redirect){const t=e,{redirect:s}=t,o=c(t,["redirect"]);return p.exports.jsx(ce,i({from:e.path,to:s},o),r)}{const s=e,{component:o}=s,n=c(s,["component"]);if(o){const e=window.__ICE_SSR_ENABLED__?e=>p.exports.jsx(o,i({},e)):e=>p.exports.jsx(d.exports.Suspense,{fallback:t||p.exports.jsx("div",{children:"loading"}),children:p.exports.jsx(o,i({},e))});return p.exports.jsx(de,l(i({},n),{render:e}),r)}return console.error("[Router] component is required when config routes"),null}}))})}function ar(...e){if(0===e.length)return"";const t=[],r=e.filter((e=>""!==e));return r.forEach(((e,s)=>{if("string"!=typeof e)throw new Error(`Path must be a string. Received ${e}`);let o=e;s>0&&(o=o.replace(/^[/]+/,"")),o=s<r.length-1?o.replace(/[/]+$/,""):o.replace(/[/]+$/,"/"),t.push(o)})),t.join("/")}function ir(e,t){return e.map((e=>{const r={};if(e.path){const s=ar(t||"",e.path);r.path="/"===s?"/":s.replace(/\/$/,"")}if(e.children)r.children=ir(e.children,r.path||e.path);else if(e.component){const t=e.component;t.pageConfig=Object.assign({},t.pageConfig,{componentName:t.name})}return i(i({},e),r)}))}const lr=({setRenderApp:e,appConfig:t,modifyRoutes:r,modifyRoutesComponent:s,buildConfig:o,context:n,applyRuntimeAPI:a})=>{const{router:d={}}=t;r((()=>ir(d.routes||Xt,""))),s((()=>nr)),d.modifyRoutes&&r(d.modifyRoutes);const u=o&&o.router&&o.router.lazy,x=undefined;e(((e,t,r={})=>()=>{let s=i(l(i({},d),{lazy:u}),r);s.history||(s.history=a("createHistory",{type:d.type,basename:d.basename}));const o=s,{fallback:n}=o,x=c(o,["fallback"]);return p.exports.jsx(or,l(i({},x),{children:t?p.exports.jsx(t,{routes:sr(e,n),fallback:n}):null}))}))};var cr=({addProvider:e,appConfig:t,context:{initialData:r={},createElement:s}})=>{const o=({children:e})=>{const o=t.store||{};let n={};return r.initialStates?n=r.initialStates:o.initialStates&&(n=o.initialStates),s(Ye.Provider,{initialStates:n,children:e})};Ye&&Object.prototype.hasOwnProperty.call(Ye,"Provider")&&e(o)};const dr=e=>t=>{const{pageConfig:r={}}=t,s=undefined;return s=>{const[o]=_e(),n=r.auth;if(n&&!Array.isArray(n))throw new Error("pageConfig.auth must be an array");const a=undefined;return!Array.isArray(n)||!n.length||Object.keys(o).filter((e=>!!n.includes(e)&&o[e])).length?p.exports.jsx(t,i({},s)):e.NoAuthFallback?"function"==typeof e.NoAuthFallback?p.exports.jsx(e.NoAuthFallback,i({},Object.assign({},s,{pageConfig:r}))):e.NoAuthFallback:p.exports.jsx(p.exports.Fragment,{children:"No Auth"})}};var pr=({context:e,appConfig:t,addProvider:r,wrapperPageComponent:s})=>{const o=undefined,n=(e&&e.initialData?e.initialData:{}).auth||{},a=t.auth||{},i=undefined;r((({children:e})=>p.exports.jsx(Pe,{value:n,children:e}))),s(dr(a))};function ur(e){e.loadModule(Be),e.loadModule(lr),e.loadModule(cr),e.loadModule(pr)}const xr={mpa:!1,icestarkType:"es"},mr={enableRouter:!0},hr=me({loadRuntimeModules:ur,createElement:d.exports.createElement,runtimeAPI:{createHistory:he,getSearchParams:D},runtimeValue:mr});function fr(e){$e(e),fe&&fe(e),ge({appConfig:e,buildConfig:xr,ErrorBoundary:Fe,appLifecycle:{createBaseApp:hr,initAppLifeCycles:ye,emitLifeCycles:je}})}const gr={400:"\u9519\u8bef\u7684\u8bf7\u6c42",401:"\u8bf7\u91cd\u65b0\u767b\u5f55",403:"\u65e0\u6743\u8bbf\u95ee",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",405:"\u8bf7\u6c42\u65b9\u5f0f\u9519\u8bef",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"},yr=undefined;fr({app:{rootId:"ice-container"},router:{type:"hash"},request:[{baseURL:Ie.baseURL,interceptors:{request:{onConfig:e=>{var t,r;const s=localStorage.getItem("authorization");return"/login"!==(null==(t=g)?void 0:t.location.pathname)&&(s?Object.assign(e.headers,{authorization:s}):null==(r=g)||r.push("/login")),e},onError:e=>Promise.reject(e)},response:{onConfig:e=>{var t,r;const s=null==e?void 0:e.data.code;return 401===s&&(null==(r=g)||r.replace({pathname:"/login",search:`redirect=${null==(t=g)?void 0:t.location.pathname}`})),200!==s?(q.error(e.data.msg||"\u8bf7\u6c42\u9519\u8bef"),Promise.reject(e)):null==e?void 0:e.data},onError:e=>{const{status:t}=(null==e?void 0:e.response)||{},r=t?gr[t]:"\u8bf7\u6c42\u9519\u8bef";return q.destroy(),q.error(r||"\u8bf7\u6c42\u9519\u8bef"),Promise.reject(e)}}}},{instanceName:"loginRequest",baseURL:Ie.baseURL,interceptors:{request:{onError:e=>Promise.reject(e)},response:{onConfig:e=>(200!==(null==e?void 0:e.data.code)&&q.error(e.data.msg||"\u8bf7\u6c42\u9519\u8bef"),e),onError:e=>{var t,r;const{status:s}=(null==e?void 0:e.response)||{},o=s?gr[s]:"\u8bf7\u6c42\u9519\u8bef";return q.destroy(),q.error(o),401===s&&(null==(r=g)||r.replace({pathname:"/login",search:`redirect=${null==(t=g)?void 0:t.location.pathname}`})),Promise.reject(e)}}}}]});