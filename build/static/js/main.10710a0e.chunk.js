(this.webpackJsonpmy_friday_project=this.webpackJsonpmy_friday_project||[]).push([[0],{10:function(e,t,r){e.exports={regWrapper:"Registration_regWrapper__2G4xI",regBox:"Registration_regBox__21zCG",regInner:"Registration_regInner__w5sP4",regTitle:"Registration_regTitle__2x3rK",regSubTitle:"Registration_regSubTitle__1Vv3_",error:"Registration_error__34sZp",link:"Registration_link__3RPkv",dark:"Registration_dark__2gdmy",light:"Registration_light__2_S1T"}},2:function(e,t,r){e.exports={navBox:"Header_navBox__1Zp3P",navList:"Header_navList___cY6W",navItem:"Header_navItem__krW8c",link:"Header_link__2gyFV",selected:"Header_selected__3FvRc",dark:"Header_dark__2LRtT",light:"Header_light__1_Jye"}},20:function(e,t,r){e.exports={switcherBtn:"Theme_switcherBtn__ygAPK",dark:"Theme_dark__1wYNU",light:"Theme_light__15bll",emoji:"Theme_emoji__31DGd",btnBox:"Theme_btnBox__3GWWQ"}},25:function(e,t,r){e.exports={superInput:"SuperInputText_superInput__1pt1r",dark:"SuperInputText_dark__3SgRZ",light:"SuperInputText_light__1QI5s",errorInput:"SuperInputText_errorInput__36R50",error:"SuperInputText_error__VSKlq"}},26:function(e,t,r){e.exports={spanClassName:"SuperCheckbox_spanClassName__1LNW5",check:"SuperCheckbox_check__31jrR",checkbox:"SuperCheckbox_checkbox__22YVf",dark:"SuperCheckbox_dark__aD32l",light:"SuperCheckbox_light__1i1LY"}},27:function(e,t,r){e.exports={app:"App_app__3V4O1",container:"App_container__1DJFg",dark:"App_dark__2EM65",light:"App_light__1Ie9n"}},28:function(e,t,r){e.exports={default:"SuperButton_default__3JbaB",dark:"SuperButton_dark__3wEGX",light:"SuperButton_light__20g5N",classname:"SuperButton_classname__vnq3c",red:"SuperButton_red__3MBya"}},58:function(e,t,r){},8:function(e,t,r){e.exports={loginWrapper:"Login_loginWrapper__3x5er",loginBox:"Login_loginBox__17mDl",loginInner:"Login_loginInner__281qS",loginCheckboxInner:"Login_loginCheckboxInner__3mFfO",loginLabel:"Login_loginLabel__2k98A",loginTitle:"Login_loginTitle__2dbVm",error:"Login_error__2OIb7",link:"Login_link__2OaPM",dark:"Login_dark__5mq0D",light:"Login_light__Ia-i3"}},82:function(e,t,r){"use strict";r.r(t);var a,n=r(0),s=r.n(n),c=r(30),i=r.n(c),o=(r(58),r(27)),l=r.n(o),d=r(22),j=r(7),u=r(5),h=r(3),b=r(8),m=r.n(b),_=r(23),O=r(25),p=r.n(O),g=r(1),x=function(e){var t=e.type,r=e.onChange,a=e.onChangeText,n=e.onKeyPress,s=e.onEnter,c=e.error,i=(e.className,e.spanClassName),o=e.theme,l=Object(_.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","theme"]),d="".concat(p.a.error," ").concat(i||""),j="".concat(c?p.a.errorInput:p.a.superInput," ").concat("dark"===o?p.a.dark:p.a.light);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",Object(h.a)({type:t||"text",onChange:function(e){r&&r(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&s&&s()},className:j},l)),c&&Object(g.jsx)("span",{className:d,children:"Please, type something.."})]})},f=r(28),k=r.n(f),N=function(e){var t=e.theme,r=e.red,a=e.className,n=Object(_.a)(e,["theme","red","className"]),s="".concat(r?k.a.red:k.a.default," ").concat("dark"==t?k.a.dark:k.a.light," ").concat(a);return Object(g.jsx)("button",Object(h.a)({className:s},n))},v=r(34),S=r(26),I=r.n(S),R=function(e){var t=e.theme,r=(e.type,e.onChange),a=e.onChangeChecked,n=e.className,s=(e.spanClassName,e.children),c=Object(_.a)(e,["theme","type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(I.a.checkbox," ").concat(n||""," ").concat("dark"===t?I.a.dark:I.a.light);return Object(g.jsxs)("label",{className:I.a.label,children:[Object(g.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){r&&r(e),a&&a(e.currentTarget.checked)},className:i},c)),s&&Object(g.jsx)("span",{className:I.a.spanClassName,children:s})]})},E="APP/SET-STATUS",P="APP/SET_ERROR",w="APP/SET_INITIALIZED",T={status:"idle",error:null,initialized:!1},C=function(e){return{type:E,status:e}},L=r(50),y=r.n(L).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),A=function(e){return y.post("auth/login",e)};!function(e){e.SET_IS_LOGGED_IN="SET_IS_LOGGED_IN",e.SET_USER_PROFILE="SET_USER_PROFILE"}(a||(a={}));var F={isLoggedIn:!1,profile:null},G=function(e){return function(t){t(C("loading")),A(e).then((function(e){var r,n;t((r=!0,{type:a.SET_IS_LOGGED_IN,value:r})),t((n=e.data,{type:a.SET_USER_PROFILE,profile:n})),console.log(e.data)})).catch((function(e){var r;t((r=e.response.data.error,{type:P,error:r}))})).finally((function(){t(C("succeeded"))}))}},B=r(15),D=function(e){var t=e.theme,r=e.serverError,a=(e.status,Object(n.useState)(!0)),s=Object(d.a)(a,2),c=s[0],i=s[1],o=Object(B.b)(),l=Object(v.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email||(t.email="Email is required"),e.password||(t.password="Password is required"),(l.errors.email||l.errors.password)&&(0===Object.keys(t).length?i(!1):i(!0)),t},onSubmit:function(e){o(G(e)),i(!0),l.resetForm()}});return Object(g.jsxs)("div",{className:m.a.loginWrapper,children:[Object(g.jsx)("h1",{className:m.a.loginTitle,children:"Sign in"}),Object(g.jsxs)("form",{className:m.a.loginBox,onSubmit:l.handleSubmit,children:[Object(g.jsxs)("div",{className:m.a.loginInner,children:[Object(g.jsx)(x,Object(h.a)({theme:t,placeholder:"e-mail",type:"email"},l.getFieldProps("email"))),l.touched.email&&l.errors.email?Object(g.jsx)("div",{className:m.a.error,children:l.errors.email}):null]}),Object(g.jsxs)("div",{className:m.a.loginInner,children:[Object(g.jsx)(x,Object(h.a)({theme:t,placeholder:"password",type:"password"},l.getFieldProps("password"))),l.touched.password&&l.errors.password?Object(g.jsx)("div",{className:m.a.error,children:l.errors.password}):null]}),Object(g.jsxs)("div",{className:m.a.loginCheckboxInner,children:[Object(g.jsx)("label",{htmlFor:"rememberMe",className:m.a.loginLabel,children:"Remember me"}),Object(g.jsx)(R,Object(h.a)({theme:t,id:"rememberMe",type:"rememberMe"},l.getFieldProps("rememberMe")))]}),Object(g.jsx)(N,{theme:t,disabled:c,children:"Sign in"})]}),r?Object(g.jsx)("div",{className:m.a.error,children:r}):null,Object(g.jsx)(j.b,{className:"".concat(m.a.link," ").concat("dark"===t?m.a.dark:m.a.light),to:X.RECOVERY_PASSWORD,children:"Forgot your password?"}),Object(g.jsx)(j.b,{className:"".concat(m.a.link," ").concat("dark"===t?m.a.dark:m.a.light),to:X.REGISTRATION,children:"Go to sign up"})]})},W=function(e){var t=e.theme,r=Object(B.c)((function(e){return e.login.isLoggedIn})),a=Object(B.c)((function(e){return e.app.status})),n=Object(B.c)((function(e){return e.app.error}));return r?Object(g.jsx)(u.a,{to:X.PROFILE}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(D,{theme:t,status:a,serverError:n})})},V=function(){return Object(g.jsx)("div",{children:"ProfileContainer"})},q=function(){return Object(g.jsx)("div",{})},U=r(10),K=r.n(U),M=function(e){var t=e.theme,r=(e.status,e.serverError,Object(n.useState)(!1)),a=Object(d.a)(r,2),s=a[0],c=a[1],i=Object(v.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email||(t.email="Email is required"),e.password||(t.password="Password is required"),e.confirmPassword||(t.confirmPassword="Password is required"),e.password!==e.confirmPassword&&(t.confirmPassword="Passwords are not equal"),(i.errors.email||i.errors.password||i.errors.confirmPassword)&&(0===Object.keys(t).length?c(!1):c(!0)),t},onSubmit:function(e){alert(JSON.stringify(e)),c(!0),i.resetForm()}});return Object(g.jsxs)("div",{className:K.a.regWrapper,children:[Object(g.jsx)("h1",{className:K.a.regTitle,children:"Sign up"}),Object(g.jsx)("p",{className:K.a.regSubTitle,children:"Please fill in the form below"}),Object(g.jsxs)("form",{className:K.a.regBox,onSubmit:i.handleSubmit,children:[Object(g.jsxs)("div",{className:K.a.regInner,children:[Object(g.jsx)(x,Object(h.a)({theme:t,placeholder:"e-mail",type:"email"},i.getFieldProps("email"))),i.touched.email&&i.errors.email?Object(g.jsx)("div",{className:K.a.error,children:i.errors.email}):null]}),Object(g.jsxs)("div",{className:K.a.regInner,children:[Object(g.jsx)(x,Object(h.a)({theme:t,placeholder:"password",type:"password"},i.getFieldProps("password"))),i.touched.password&&i.errors.password?Object(g.jsx)("div",{className:K.a.error,children:i.errors.password}):null]}),Object(g.jsxs)("div",{className:K.a.regInner,children:[Object(g.jsx)(x,Object(h.a)({theme:t,placeholder:"confirm password",type:"password"},i.getFieldProps("confirmPassword"))),i.touched.confirmPassword&&i.errors.confirmPassword?Object(g.jsx)("div",{className:K.a.error,children:i.errors.confirmPassword}):null]}),Object(g.jsx)(N,{theme:t,disabled:s,children:"Sign up"})]}),Object(g.jsx)(j.b,{className:"".concat(K.a.link," ").concat("dark"===t?K.a.dark:K.a.light),to:X.LOGIN,children:"Go to sign in"})]})},Y=function(e){var t=e.theme,r=Object(B.c)((function(e){return e.app.status})),a=Object(B.c)((function(e){return e.app.error}));return Object(B.c)((function(e){return e.registration.isRegistration}))?Object(g.jsx)(u.a,{to:X.LOGIN}):Object(g.jsx)(M,{serverError:a,status:r,theme:t})},H=function(){return Object(g.jsx)("div",{children:"Error404"})},J=function(){return Object(g.jsx)("div",{})},z=function(){return Object(g.jsx)("div",{children:"PasswordRecoveryContainer"})},Z=function(){return Object(g.jsx)("div",{children:"PacksContainer"})},Q=function(){return Object(g.jsx)(g.Fragment,{children:"cards"})},X={LOGIN:"/login",REGISTRATION:"/registration",PROFILE:"/profile",ERROR_404:"/404",RECOVERY_PASSWORD:"/recovery_pass",NEW_PASSWORD:"/new_pass",TEST:"/test",PACKS:"/packs",CARDS:"/cards"},$=function(e){var t=e.theme;return Object(g.jsx)("div",{children:Object(g.jsxs)(u.d,{children:[Object(g.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(g.jsx)(u.a,{to:X.LOGIN})}}),Object(g.jsx)(u.b,{path:X.LOGIN,render:function(){return Object(g.jsx)(W,{theme:t})}}),Object(g.jsx)(u.b,{path:X.REGISTRATION,render:function(){return Object(g.jsx)(Y,{theme:t})}}),Object(g.jsx)(u.b,{path:X.PROFILE,render:function(){return Object(g.jsx)(V,{})}}),Object(g.jsx)(u.b,{path:X.ERROR_404,render:function(){return Object(g.jsx)(H,{})}}),Object(g.jsx)(u.b,{path:X.RECOVERY_PASSWORD,render:function(){return Object(g.jsx)(z,{})}}),Object(g.jsx)(u.b,{path:X.NEW_PASSWORD,render:function(){return Object(g.jsx)(J,{})}}),Object(g.jsx)(u.b,{path:X.TEST,render:function(){return Object(g.jsx)(q,{})}}),Object(g.jsx)(u.b,{path:X.PACKS,render:function(){return Object(g.jsx)(Z,{})}}),Object(g.jsx)(u.b,{path:X.CARDS+"/:id",render:function(){return Object(g.jsx)(Q,{})}}),Object(g.jsx)(u.b,{render:function(){return Object(g.jsx)(H,{})}})]})})},ee=r(2),te=r.n(ee),re=function(e){var t=e.theme;return Object(g.jsx)("nav",{className:te.a.navBox,children:Object(g.jsxs)("ul",{className:te.a.navList,children:[Object(g.jsx)("li",{className:te.a.navItem,children:Object(g.jsx)(j.b,{activeClassName:te.a.selected,className:"".concat(te.a.link," ").concat("dark"===t?te.a.dark:te.a.light),to:X.REGISTRATION,children:"Registration"})}),Object(g.jsx)("li",{className:te.a.navItem,children:Object(g.jsx)(j.b,{className:"".concat(te.a.link," ").concat("dark"===t?te.a.dark:te.a.light),activeClassName:te.a.selected,to:X.LOGIN,children:"Login"})}),Object(g.jsx)("li",{className:te.a.navItem,children:Object(g.jsx)(j.b,{className:"".concat(te.a.link," ").concat("dark"===t?te.a.dark:te.a.light),activeClassName:te.a.selected,to:X.PROFILE,children:"Profile"})}),Object(g.jsx)("li",{className:te.a.navItem,children:Object(g.jsx)(j.b,{className:"".concat(te.a.link," ").concat("dark"===t?te.a.dark:te.a.light),activeClassName:te.a.selected,to:X.RECOVERY_PASSWORD,children:"Recovery Password"})}),Object(g.jsx)("li",{className:te.a.navItem,children:Object(g.jsx)(j.b,{className:"".concat(te.a.link," ").concat("dark"===t?te.a.dark:te.a.light),activeClassName:te.a.selected,to:X.NEW_PASSWORD,children:"New Password"})}),Object(g.jsx)("li",{className:te.a.navItem,children:Object(g.jsx)(j.b,{className:"".concat(te.a.link," ").concat("dark"===t?te.a.dark:te.a.light),activeClassName:te.a.selected,to:X.PACKS,children:"Packs"})})]})})},ae=r(20),ne=r.n(ae),se=function(e){var t=e.theme,r=e.toggleTheme;return Object(g.jsx)("div",{className:ne.a.btnBox,children:Object(g.jsx)(N,{onClick:r,className:"".concat(ne.a.switcherBtn," ").concat("dark"===t?ne.a.dark:ne.a.light),children:"dark"===t?Object(g.jsx)("span",{className:ne.a.emoji,children:"\ud83c\udf1a"}):Object(g.jsx)("span",{className:ne.a.emoji,children:"\ud83c\udf1d"})})})};var ce,ie=function(){var e=function(){var e=Object(n.useState)("light"),t=Object(d.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("theme");e&&a(e)}),[]),{theme:r,toggleTheme:function(){"dark"!==r?(localStorage.setItem("theme","dark"),a("dark")):(localStorage.setItem("theme","light"),a("light"))}}}(),t=e.theme,r=e.toggleTheme;return Object(g.jsx)("div",{className:"".concat(l.a.app," ").concat("dark"===t?l.a.dark:l.a.light),children:Object(g.jsxs)("div",{className:l.a.container,children:[Object(g.jsx)(se,{theme:t,toggleTheme:r}),Object(g.jsx)(re,{theme:t}),Object(g.jsx)($,{theme:t})]})})},oe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,83)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))},le=r(24),de=r(53);(ce||(ce={})).ADD_NEW_USER="addNewUserAC";var je={isRegistration:!1},ue=Object(le.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(h.a)(Object(h.a)({},e),{},{status:t.status});case P:return Object(h.a)(Object(h.a)({},e),{},{error:t.error});case w:return Object(h.a)(Object(h.a)({},e),{},{initialized:t.initialized});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce.ADD_NEW_USER:return Object(h.a)(Object(h.a)({},e),{},{isRegistration:t.isRegistration});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_IS_LOGGED_IN:return Object(h.a)(Object(h.a)({},e),{},{isLoggedIn:t.value});case a.SET_USER_PROFILE:return Object(h.a)(Object(h.a)({},e),{},{profile:t.profile});default:return e}}}),he=Object(le.d)(ue,Object(le.a)(de.a));window.store=he,i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(j.a,{children:Object(g.jsx)(B.a,{store:he,children:Object(g.jsx)(ie,{})})})}),document.getElementById("root")),oe()}},[[82,1,2]]]);
//# sourceMappingURL=main.10710a0e.chunk.js.map