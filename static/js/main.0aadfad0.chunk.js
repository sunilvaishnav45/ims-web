(this["webpackJsonpims-frontend"]=this["webpackJsonpims-frontend"]||[]).push([[0],{112:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(86),a(87),a(25)),i=a(27),s=a(11),u=a(33),m=a(13),d=a(12),v=(a(88),a(14)),p=a(15),E=(r.a.Component,function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.call(this)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"list-group w-100 h-100"},r.a.createElement(l.b,{to:"/?active=dashboard"},r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{className:"mr-1"},r.a.createElement(v.a,{icon:p.e}))," Dashboard")),r.a.createElement(l.b,{to:"/product?active=product"},r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{className:"mr-1"},r.a.createElement(v.a,{icon:p.g}))," Product")),r.a.createElement(l.b,{to:"/brand?active=brand"},r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{className:"mr-1"},r.a.createElement(v.a,{icon:p.a}))," Brand")),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{className:"mr-1"},r.a.createElement(v.a,{icon:p.a}))," Overview"),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{className:"mr-1"},r.a.createElement(v.a,{icon:p.d}))," Event"),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{className:"mr-1"},r.a.createElement(v.a,{icon:p.j}))," Profile"),r.a.createElement("div",{className:"list-group-item"},r.a.createElement("span",{className:"mr-1"},r.a.createElement(v.a,{icon:p.b}))," Status"))}}]),a}(n.Component)),h=a(31),b=a(10),f=a(171),g=a(168),O=a(169);var w=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],o=function(){return c(!1)},l=Object(n.useState)({name:"",status:"active"}),i=Object(b.a)(l,2),s=i[0],u=i[1],m=function(e){e.preventDefault(),console.log("product",s),o()};return r.a.createElement("div",{style:{padding:10}},r.a.createElement("h4",null,"Product"),r.a.createElement(f.a,{variant:"outline-success",onClick:function(){return c(!0)}}," Add product"),r.a.createElement(g.a,{show:a,onHide:o},r.a.createElement(g.a.Header,{closeButton:!0},r.a.createElement(g.a.Title,null,"Add Product")),r.a.createElement(g.a.Body,null,r.a.createElement(O.a,{onSubmit:m},r.a.createElement(O.a.Group,{controlId:"formBasicEmail"},r.a.createElement(O.a.Label,null,"Product Name"),r.a.createElement(O.a.Control,{type:"text",placeholder:"Name",value:s.name,onChange:function(e){return u(Object(h.a)({},s,{name:e.target.value}))}})),r.a.createElement(O.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(O.a.Label,null,"Status"),r.a.createElement(O.a.Control,{as:"select",custom:!0,value:s.status,onChange:function(e){return u(Object(h.a)({},s,{status:e.target.value}))}},r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"inactive"},"Inactive"))))),r.a.createElement(g.a.Footer,null,r.a.createElement(f.a,{variant:"primary",type:"submit",onClick:m},"Save Changes"),r.a.createElement(f.a,{variant:"secondary",onClick:o},"Close"))))},j=a(30),S=a.n(j),k=a(48),N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getLoginTokenKey=function(){return e.token_cookie_name},e.getLoginToken=function(){var t=e.cookies.get(e.token_cookie_name);return null!=t?t.data:null},e.requestToLoginUser=function(t){if(null!=t){e.postRequest("https://inventory-managment-gateway.herokuapp.com/api/user-service/login",t).then((function(t){return e.onLoginSuccess(t)})).catch((function(t){return e.onLoginFailed(t)}))}},e.postRequest=function(e,t){return S()({method:"POST",url:e,data:t}).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))},e.onLoginSuccess=function(t){e.cookies.set(e.token_cookie_name,t,{path:"/"}),window.location.href="/"},e.onLoginFailed=function(e){e.response&&(400==e.response.status?alert("Enter valid caredentials"):alert("Somthing went wrong please try leter"))},e.isUserLoggedIn=function(){return!!e.getLoginToken()},e.cookies=new k.a,e.token_cookie_name="IMS_LOGIN_TOKEN",e}return a}(r.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).logout=function(){e.removeToken(),window.location.href=e.loginPageUrl,window.location.reload()},e.removeToken=function(){e.cookies.remove(e.loginService.getLoginTokenKey())},e.loginService=new N,e.cookies=new k.a,e.REACT_APP_ROOT_CONTEXT="ims-web",e.loginPageUrl=e.REACT_APP_ROOT_CONTEXT+"/#/login",e}return a}(r.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).logoutService=new y,e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark pr-0 pl-0"},r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-8"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"IMS")),r.a.createElement("div",{className:"col-4 text-right align-self-center pr-0"},r.a.createElement("div",{className:"text-white cp",onClick:function(){return e.logoutService.logout()}},"  ",r.a.createElement(v.a,{icon:p.h})," ")))))}}]),a}(n.Component),P=a(166),T=a(170),L=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getRequest=function(e){var t=this,a={token:this.loginService.getLoginToken()};return S()({method:"GET",url:e,headers:a}).then((function(e){return Promise.resolve(e.data)})).catch((function(e){return t.handleError(e)}))},e.postRequest=function(e,t){var a=this,n={token:this.loginService.getLoginToken()};return S()({method:"POST",url:e,data:t,headers:n}).then((function(e){return Promise.resolve(e.data)})).catch((function(e){return a.handleError(e)}))},e.deleteRequest=function(e,t){var a=this,n={token:this.loginService.getLoginToken()};return S()({method:"DELETE",url:e,data:t,headers:n}).then((function(e){return Promise.resolve(e.data)})).catch((function(e){return a.handleError(e)}))},e.updateRequest=function(e,t){var a=this,n={token:this.loginService.getLoginToken()};return S()({method:"PUT",url:e,data:t,headers:n}).then((function(e){return Promise.resolve(e.data)})).catch((function(e){return a.handleError(e)}))},e.handleError=function(t){var a=t.response;if(!a||void 0==a)return Promise.reject(t);var n=a.status;if(!n||void 0==n||401!=n)return Promise.reject(t);e.logoutService.logout()},e.logoutService=new y,e.loginService=new N,e}return a}(r.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).findBrandById=function(e){var t="https://inventory-managment-gateway.herokuapp.com/api/product-service/brand/?brandIds="+e;this.requestService.getRequest(t).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))},e.findAllBrand=function(){return this.requestService.getRequest("https://inventory-managment-gateway.herokuapp.com/api/product-service/brand/").then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))},e.saveBrand=function(e){this.requestService.postRequest("https://inventory-managment-gateway.herokuapp.com/api/product-service/brand/",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))},e.deleteBrand=function(e){return this.requestService.deleteRequest("https://inventory-managment-gateway.herokuapp.com/api/product-service/brand/",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))},e.updateBrand=function(e){return this.requestService.updateRequest("https://inventory-managment-gateway.herokuapp.com/api/product-service/brand/",e).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))},e.requestService=new L,e}return a}(r.a.Component);a(112);var x=function(e){var t=e.updatedBrand,a=new B,c=Object(n.useContext)(R),o=Object(n.useState)({id:0,brand:"",available:!0}),l=Object(b.a)(o,2),i=l[0],s=l[1],u=function(){return c.showDispatch("handleHide")},m=function(){return c.dispatchAlert("noAlert")},d=function(){return c.dispatchAlert("alert")};Object(n.useEffect)((function(){console.log("updatedBrand",t),c.isUpdate?s(t):s({id:0,brand:"",available:!0})}),[c.showState]);var v=function(e){e.preventDefault(),d(),s(Object(h.a)({},i,{id:i.id+1})),a.saveBrand(i),s({id:0,brand:"",available:!0}),setTimeout((function(){return u()}),0),m()};return r.a.createElement("div",{className:"p-2"},r.a.createElement(g.a,{show:c.showState},r.a.createElement(g.a.Header,{closeButton:!0,onClick:u},r.a.createElement(g.a.Title,null,t?"Update Brand":"Add Brand")),r.a.createElement(g.a.Body,null,r.a.createElement(O.a,{onSubmit:v},r.a.createElement(O.a.Group,{controlId:"formBasicEmail"},r.a.createElement(O.a.Label,null,"Product Name"),r.a.createElement(O.a.Control,{type:"text",placeholder:"Add new brand.ex: Addidas",value:i.brand,onChange:function(e){return s(Object(h.a)({},i,{brand:e.target.value}))}})),r.a.createElement(O.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(O.a.Label,null,"Status"),r.a.createElement(O.a.Control,{as:"select",custom:!0,value:i.available,onChange:function(e){return s(Object(h.a)({},i,{available:e.target.value}))}},r.a.createElement("option",{value:"true"},"Active"),r.a.createElement("option",{value:"false"},"Inactive"))))),r.a.createElement(g.a.Footer,null,t?r.a.createElement(f.a,{variant:"success",type:"submit",onClick:function(e){e.preventDefault(),d(),a.updateBrand(i),setTimeout((function(){return u()}),0),m()}},"Update"):r.a.createElement(f.a,{variant:"primary",type:"submit",onClick:v},"Save Changes"),r.a.createElement(f.a,{variant:"secondary",onClick:u},"Close"))))},A=a(76),U=a.n(A),q=a(167);var I=function(){var e=Object(n.useContext)(R),t=new B,a=Object(n.useState)([]),c=Object(b.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),s=Object(b.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!0),E=Object(b.a)(d,2),h=(E[0],E[1],Object(n.useState)([])),f=Object(b.a)(h,2),g=f[0],O=f[1],w=Object(n.useState)(""),j=Object(b.a)(w,2),S=j[0],k=j[1],N=Object(n.useState)(!1),y=Object(b.a)(N,2),C=y[0],L=y[1];function A(){return t.findAllBrand().then((function(e){l(e),setTimeout((function(){return m(!0)}),1e3)}))}var I=o.filter((function(e){return e.brand.toLowerCase().includes(S.toLowerCase())}));function _(e){return r.a.createElement(P.a,Object.assign({id:"button-tooltip"},e),"Delete brand")}function D(e){return r.a.createElement(P.a,Object.assign({id:"button-tooltip"},e),"Update brand")}return Object(n.useEffect)((function(){A(),setTimeout((function(){return e.dispatchAlert("alert")}),3e3)}),[e.showState]),r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),C?r.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show"},"Successfully Deleted."):null,e.alert?null:e.isUpdate?r.a.createElement("div",{className:"alert alert-primary alert-dismissible fade show"},"Successfully Updated."):r.a.createElement("div",{className:"alert alert-success alert-dismissible fade show"},"Successfully Saved."),r.a.createElement(q.a,{id:"standard-basic",label:"Search Brand",type:"text",value:S,onChange:function(e){k(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row mt-2"},u?r.a.createElement("div",{className:"col-10 col-md-10 col-lg-10 col-xl-10 mb-2",key:o.id},r.a.createElement("table",{className:"table "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Brand"),r.a.createElement("th",{scope:"col"},"Status"),r.a.createElement("th",null))),I.map((function(a){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a.brand),r.a.createElement("td",null,a.available?r.a.createElement("span",{className:"badge badge-success"},"Active"):r.a.createElement("span",{className:"badge badge-danger"},"Inactive")),r.a.createElement("div",{className:"position-relative"},r.a.createElement("div",{className:"position-absolute delete-button d-inline-block cp delete-btn-position rounded-circle",onClick:function(){return function(e){L(!0),t.deleteBrand(e),A(),setTimeout((function(){return L(!1)}),3e3)}(a)}},r.a.createElement(T.a,{placement:"left",delay:{show:10,hide:10},overlay:_},r.a.createElement("div",{className:"icon-center"},"  ",r.a.createElement(v.a,{icon:p.i,size:"xs"})," "))),r.a.createElement("div",{className:"position-absolute update-button d-inline-block cp update-btn-position rounded-circle",onClick:function(){return function(t){O(t),e.dispatchUpdate("update"),e.showDispatch("handleShow")}(a)}},r.a.createElement(T.a,{placement:"left",delay:{show:10,hide:10},overlay:D},r.a.createElement("div",{className:"icon-center"},"  ",r.a.createElement(v.a,{icon:p.c,size:"xs"})," "))))))})))):r.a.createElement("div",{className:"col-12 text-center pt-5"},r.a.createElement(U.a,{type:"TailSpin",color:"#0056b3",height:80,width:80}))),r.a.createElement(x,{updatedBrand:g}))},R=(a(133),r.a.createContext()),_=function(e,t){switch(t){case"handleShow":return!0;case"handleHide":return!1;default:return e}},D=function(e,t){switch(t){case"update":return!0;case"noUpdate":default:return!1}},F=function(e,t){switch(t){case"alert":return!0;case"noAlert":default:return!1}};var G=function(){var e=Object(n.useReducer)(_,!1),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useReducer)(D,!1),l=Object(b.a)(o,2),i=l[0],s=l[1],u=Object(n.useReducer)(F,!0),m=Object(b.a)(u,2),d=m[0],E=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.Provider,{value:{showState:a,showDispatch:c,isUpdate:i,dispatchUpdate:s,alert:d,dispatchAlert:E}},r.a.createElement("div",{className:"p-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-8 mb-2 mb-sm-0"}," ",r.a.createElement("h4",null,"Brand")," "),r.a.createElement("div",{className:"col-12 col-sm-4 mb-2 mb-sm-0 text-right"},r.a.createElement("div",{className:"rounded-circle wd-35 ht-35 text-white ml-auto position-relative add-bx cp",onClick:function(){s("noUpdate"),c("handleShow"),console.log("1",i)}},r.a.createElement("span",{className:"position-absolute add-button"},r.a.createElement(T.a,{placement:"left",delay:{show:250,hide:400},overlay:function(e){return r.a.createElement(P.a,Object.assign({id:"button-tooltip"},e),"Add brand")}},r.a.createElement(v.a,{icon:p.f})))))),r.a.createElement(I,null),i?null:r.a.createElement(x,null))))},z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).setState({}),e.brandService=new B,e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("https://inventory-managment-gateway.herokuapp.com/api/")}},{key:"render",value:function(){return r.a.createElement("div",{style:{padding:10}},r.a.createElement("h4",null,"Dashboard"))}}]),a}(n.Component),H=a(49),K=new N,M=function(e){var t=e.component,a=Object(H.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return K.isUserLoggedIn()?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}}))},J=a(74),W=a(75);a(134);function X(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),i=l[0],s=l[1],u=new N;return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={email:a,password:i};u.requestToLoginUser(t)}},r.a.createElement(J.a,{controlId:"email",bsSize:"large"},"Email",r.a.createElement(W.a,{autoFocus:!0,type:"email",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement(J.a,{controlId:"password",bsSize:"large"},"Password",r.a.createElement(W.a,{value:i,onChange:function(e){return s(e.target.value)},type:"password"})),r.a.createElement(f.a,{block:!0,bsSize:"large",disabled:!(a.length>0&&i.length>0),type:"submit"},"Login")))}function $(){var e=new y;return Object(n.useEffect)((function(){e.logout()})),r.a.createElement(r.a.Fragment,null)}var Q=new N,V=function(e){var t=e.component,a=e.restricted,n=Object(H.a)(e,["component","restricted"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return Q.isUserLoggedIn()&&a?r.a.createElement(i.a,{to:"ims-web"}):r.a.createElement(t,e)}}))},Y=new N;var Z=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(l.a,null,Y.isUserLoggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-12 bg-dark"},r.a.createElement(C,null)),r.a.createElement("div",{className:"col-md-2 bg-dark p-0"},r.a.createElement(E,null))):null,r.a.createElement("div",{className:"col-md-10"},r.a.createElement(i.d,null,r.a.createElement(M,{restricted:!1,path:"/",exact:!0,component:z}),r.a.createElement(M,{restricted:!1,path:"/product",exact:!0,component:w}),r.a.createElement(M,{restricted:!1,path:"/brand",exact:!0,component:G}),r.a.createElement(M,{restricted:!1,path:"/logout",exact:!0,component:$}),r.a.createElement(V,{restricted:!0,component:X,path:"/login",exact:!0}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(135);o.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a(136)},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.0aadfad0.chunk.js.map