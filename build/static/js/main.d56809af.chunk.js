(this.webpackJsonpmy_friday_project=this.webpackJsonpmy_friday_project||[]).push([[0],{10:function(e,t,r){e.exports={regWrapper:"Registration_regWrapper__3eYe6",regBox:"Registration_regBox__2LMQ5",regInner:"Registration_regInner__2bNiO",regTitle:"Registration_regTitle__1PNOM",regSubTitle:"Registration_regSubTitle__4lqAC",regError:"Registration_regError__mtUxR",error:"Registration_error__16Q5O",link:"Registration_link__2rOW4",dark:"Registration_dark__2oETZ",light:"Registration_light__3o2_o"}},17:function(e,t,r){e.exports={wrap:"Profile_wrap__2U5i-",profileBox:"Profile_profileBox__37dqy",name:"Profile_name__1TN_T",packs:"Profile_packs__1xaPA",nameAccent:"Profile_nameAccent__1zeMj",packLink:"Profile_packLink__wPtDM",avatar:"Profile_avatar__3g_k8",editBox:"Profile_editBox__5XrR7",editIcon:"Profile_editIcon__3D0aC"}},20:function(e,t,r){e.exports={box:"NewPassword_box__2Ax-K",newPassInner:"NewPassword_newPassInner__39cJv",newPassTitle:"NewPassword_newPassTitle__2yJIM",newPassSubTitle:"NewPassword_newPassSubTitle__Em4s4",newPassError:"NewPassword_newPassError__3-Cgd",newPassSuccess:"NewPassword_newPassSuccess__1KhTL"}},25:function(e,t,r){e.exports={box:"PasswordRecovery_box__jW_ju",recInner:"PasswordRecovery_recInner__2kOyL",recTitle:"PasswordRecovery_recTitle__1ZwAl",recSubTitle:"PasswordRecovery_recSubTitle__1HAp7",recError:"PasswordRecovery_recError__2VQ_4",recSuccess:"PasswordRecovery_recSuccess__lrdzO"}},26:function(e,t,r){e.exports={loader:"Initializing_loader__2ioxk",inner:"Initializing_inner__3_bfS",one:"Initializing_one__2-D2y","rotate-one":"Initializing_rotate-one__2FwRQ",two:"Initializing_two__16xNL","rotate-two":"Initializing_rotate-two__XeFLW",three:"Initializing_three__1bt-9","rotate-three":"Initializing_rotate-three__1B8Gj"}},27:function(e,t,r){e.exports={switcherBtn:"Theme_switcherBtn__15pv2",dark:"Theme_dark__Fa-1D",light:"Theme_light__1Dv7f",emoji:"Theme_emoji__2T0ug",btnBox:"Theme_btnBox__scJx2"}},32:function(e,t,r){e.exports={superInput:"SuperInputText_superInput__1pt1r",dark:"SuperInputText_dark__3SgRZ",light:"SuperInputText_light__1QI5s",errorInput:"SuperInputText_errorInput__36R50",error:"SuperInputText_error__VSKlq"}},33:function(e,t,r){e.exports={spanClassName:"SuperCheckbox_spanClassName__1LNW5",check:"SuperCheckbox_check__31jrR",checkbox:"SuperCheckbox_checkbox__22YVf",dark:"SuperCheckbox_dark__aD32l",light:"SuperCheckbox_light__1i1LY"}},35:function(e,t,r){e.exports={app:"App_app__2rHSZ",container:"App_container__3SJ_N",dark:"App_dark__1smCU",light:"App_light__1y1rg"}},36:function(e,t,r){e.exports={default:"SuperButton_default__3JbaB",dark:"SuperButton_dark__3wEGX",light:"SuperButton_light__20g5N",classname:"SuperButton_classname__vnq3c",red:"SuperButton_red__3MBya"}},4:function(e,t,r){e.exports={navBox:"Header_navBox__2Bnme",navList:"Header_navList__1WXT7",navItem:"Header_navItem__16O1Z",link:"Header_link__1fLiS",selected:"Header_selected__jrnNx",dark:"Header_dark__1fITA",light:"Header_light__zlVzw"}},60:function(e,t,r){e.exports={packsBox:"Packs_packsBox__1QKY0"}},61:function(e,t,r){e.exports={logout:"Logout_logout__2b4_L"}},66:function(e,t,r){},9:function(e,t,r){e.exports={loginWrapper:"Login_loginWrapper__2SbJm",loginBox:"Login_loginBox__okndB",loginInner:"Login_loginInner__3ud_A",loginCheckboxInner:"Login_loginCheckboxInner__31lab",loginLabel:"Login_loginLabel__1Qscv",loginTitle:"Login_loginTitle__30RJV",error:"Login_error__NP8bH",link:"Login_link__2lXZg",dark:"Login_dark__2w5zM",light:"Login_light__2zLuW"}},91:function(e,t,r){},92:function(e,t,r){"use strict";r.r(t);var a,n=r(1),s=r.n(n),c=r(38),o=r.n(c),i=(r(66),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,93)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))}),l=r(6),u=r(3),d=r(31),j=r(56),_=r(2),b=r(18),h=r.n(b),p=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),O=function(e){return p.post("auth/login",e)},m=function(){return p.post("auth/me")},g=function(){return p.delete("auth/me")};!function(e){e.SET_IS_LOGGED_IN="SET_IS_LOGGED_IN",e.SIGN_IN_ERROR="SIGN_IN_ERROR",e.SET_STATUS_LOGOUT="SET_STATUS_LOGOUT",e.SET_STATUS_LOGIN="SET_STATUS_LOGIN"}(a||(a={}));var f,S={isLoggedIn:!1,loginError:null,logoutStatus:"idle",loginStatus:"idle"},x=function(e){return{type:a.SET_IS_LOGGED_IN,value:e}},v=function(e){return{type:a.SET_STATUS_LOGOUT,status:e}},T=function(e){return function(t){t(v("loading")),O(e).then((function(e){t(x(!0)),t(w(e.data)),t(N(e.data._id))})).catch((function(e){var r=e.response?e.response.data.error:e.message+", more details in the console";t(function(e){return{type:a.SIGN_IN_ERROR,error:e}}(r))})).finally((function(){t(v("succeeded"))}))}};!function(e){e.SET_USER_PROFILE="SET_USER_PROFILE",e.SET_MY_ID="SET_MY_ID",e.SET_ERROR="SET_ERROR"}(f||(f={}));var E,k={profile:{_id:null,email:null,name:null,avatar:null,publicCardPacksCount:null,created:null,updated:null,isAdmin:null,verified:null,rememberMe:null,error:null},myId:null,error:null},w=function(e){return{type:f.SET_USER_PROFILE,profile:e}},N=function(e){return{type:f.SET_MY_ID,myId:e}},P=function(){return function(e){return m().then((function(t){200===t.status&&(e(x(!0)),e(w(t.data)),e(N(t.data._id)))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";console.log(r),e(function(e){return{type:f.SET_ERROR,error:e}}(r))}))}};!function(e){e.SET_STATUS="SET-STATUS",e.SET_ERROR="SET_ERROR",e.SET_INITIALIZED="SET_INITIALIZED"}(E||(E={}));var R,I,y={status:"idle",error:null,initialized:!1},C=function(e){return{type:E.SET_STATUS,status:e}},L=function(){return function(e){var t=e(P());console.log(t),Promise.all([t]).then((function(){console.log(t),e({type:E.SET_INITIALIZED})}))}},A=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),U=function(e){return A.post("auth/register",e)};(I=R||(R={})).SIGN_UP="SIGN_UP",I.SIGN_UP_ERROR="SIGN_UP_ERROR";var G,F={isRegistration:!1,registrationError:null},B=function(e){return function(t){t(C("loading")),U(e).then((function(e){var r;t((r=!0,{type:R.SIGN_UP,isRegistration:r}))})).catch((function(e){var r=e.response?e.response.data.error:e.message+", more details in the console";t(function(e){return{type:R.SIGN_UP_ERROR,error:e}}(r))})).finally((function(){t(C("succeeded"))}))}},D=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),M=function(e){return D.post("auth/forgot",{email:e,from:"mariya.syrokvash@yandex.ru",message:"<div style=\"background-color: #FFC300; padding: 30px; border-radius: 20px\">\n\t\t\t\t\t\t\t\t\t\t<p>Please, click on the link and enter a new password</p>\n\t\t\t\t\t\t\t\t\t\t<a href='https://mariasyrokvash.github.io/fridayTask/#/new_pass/$token$'>Go to recovery password</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t"})};!function(e){e.SET_ERROR="SET_ERROR",e.SET_SUCCESS="SET_SUCCESS",e.SET_STATUS="SET_STATUS"}(G||(G={}));var W,K={status:"idle",recoveryError:"",recoverySuccess:""},z=function(e){return{type:G.SET_STATUS,status:e}},q=function(e){return function(t){t(z("loading")),M(e).then((function(e){var r;200===e.status&&t((r=e.data.info,{type:G.SET_SUCCESS,recoverySuccess:r}))})).catch((function(e){var r=e.response?e.response.data.error:e.message+", more details in the console";t(function(e){return{type:G.SET_ERROR,error:e}}(r))})).finally((function(){t(z("succeeded"))}))}},V=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),Y=function(e,t){return V.post("auth/set-new-password",{password:e,resetPasswordToken:t})};!function(e){e.SET_ERROR="SET_ERROR",e.SET_SUCCESS="SET_SUCCESS",e.SET_STATUS="SET_STATUS"}(W||(W={}));var H,Z={status:"idle",error:"",successMessage:""},J=function(e){return{type:W.SET_STATUS,status:e}},Q=function(e,t){return function(r){r(J("loading")),Y(e,t).then((function(e){var t;console.log(e.data.message),r((t=e.data.message,{type:W.SET_SUCCESS,success:t}))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";r(function(e){return{type:W.SET_ERROR,error:e}}(t))})).finally((function(){r(J("succeeded"))}))}},X=r(22),$=r.n(X),ee=r(34),te=h.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),re={getPacksData:function(){var e=Object(ee.a)($.a.mark((function e(t,r,a,n){var s,c,o,i,l=arguments;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=l.length>4&&void 0!==l[4]?l[4]:1,c=l.length>5&&void 0!==l[5]?l[5]:15,o=l.length>6?l[6]:void 0,e.next=5,te.get("cards/pack?pageCount=".concat(c,"&page=").concat(s,"&packName=").concat(t,"&sortPacks=").concat(n,"&min=").concat(r,"&max=").concat(a,"&user_id=").concat(null===o?"":o));case 5:return i=e.sent,e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)})));return function(t,r,a,n){return e.apply(this,arguments)}}(),addNewPack:function(){var e=Object(ee.a)($.a.mark((function e(t){var r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.post("cards/pack",{cardsPack:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deletePack:function(){var e=Object(ee.a)($.a.mark((function e(t){var r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.delete("cards/pack?id=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updatePack:function(){var e=Object(ee.a)($.a.mark((function e(t){var r;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.put("cards/pack",{cardsPack:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.SET_PACKS="SET_PACKS",e.SET_STATUS_PACKS="SET_STATUS_PACKS",e.SET_ERROR_PACKS="SET_ERROR_PACKS"}(H||(H={}));var ae={error:null,status:"idle",packs:[],searchName:"",min:0,max:24,sortPacks:"",page:1,packsPerPage:10,currentPage:1,totalPacksCount:0,minCardsCount:0,maxCardsCount:24},ne=function(e){return{type:H.SET_STATUS_PACKS,status:e}},se=Object(d.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SET_STATUS:return Object(_.a)(Object(_.a)({},e),{},{status:t.status});case E.SET_ERROR:return Object(_.a)(Object(_.a)({},e),{},{error:t.error});case E.SET_INITIALIZED:return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.SIGN_UP:return Object(_.a)(Object(_.a)({},e),{},{isRegistration:t.isRegistration});case R.SIGN_UP_ERROR:return Object(_.a)(Object(_.a)({},e),{},{registrationError:t.error});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_IS_LOGGED_IN:return Object(_.a)(Object(_.a)({},e),{},{isLoggedIn:t.value});case a.SIGN_IN_ERROR:return Object(_.a)(Object(_.a)({},e),{},{loginError:t.error});case a.SET_STATUS_LOGOUT:return Object(_.a)(Object(_.a)({},e),{},{logoutStatus:t.status});case a.SET_STATUS_LOGIN:return Object(_.a)(Object(_.a)({},e),{},{loginStatus:t.status});default:return e}},recoveryPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.SET_STATUS:return Object(_.a)(Object(_.a)({},e),{},{status:t.status});case G.SET_ERROR:return Object(_.a)(Object(_.a)({},e),{},{recoveryError:t.error});case G.SET_SUCCESS:return Object(_.a)(Object(_.a)({},e),{},{recoverySuccess:t.recoverySuccess});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.SET_ERROR:return Object(_.a)(Object(_.a)({},e),{},{error:t.error});case W.SET_STATUS:return Object(_.a)(Object(_.a)({},e),{},{status:t.status});case W.SET_SUCCESS:return Object(_.a)(Object(_.a)({},e),{},{successMessage:t.success});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SET_USER_PROFILE:return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});case f.SET_MY_ID:return Object(_.a)(Object(_.a)({},e),{},{myId:t.myId});case f.SET_ERROR:return Object(_.a)(Object(_.a)({},e),{},{error:t.error});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.SET_PACKS:return Object(_.a)(Object(_.a)({},e),{},{packs:t.packs});default:return e}}}),ce=Object(d.d)(se,Object(d.a)(j.a));window.store=ce;var oe=r(35),ie=r.n(oe),le=r(29),ue=r(7),de=r(17),je=r.n(de),_e=r.p+"static/media/user.3b7fc895.svg",be=r.p+"static/media/edit.e4aa39bd.svg",he=r(0),pe=function(e){var t=e.profile;return Object(he.jsxs)("div",{className:je.a.profileBox,children:[Object(he.jsx)("div",{className:je.a.editBox,children:Object(he.jsx)("img",{src:be,className:je.a.editIcon})}),Object(he.jsx)("div",{children:Object(he.jsx)("div",{children:Object(he.jsx)("img",{src:_e,alt:"userPhoto",className:je.a.avatar})})}),Object(he.jsxs)("div",{className:je.a.wrap,children:[Object(he.jsxs)("p",{className:je.a.name,children:["Hello, ",Object(he.jsx)("span",{className:je.a.nameAccent,children:t.name})]}),Object(he.jsxs)("p",{className:je.a.packs,children:["You have ",t.publicCardPacksCount,Object(he.jsx)(l.b,{to:$e.PACKS,className:je.a.packLink,children:Object(he.jsx)("span",{className:je.a.packsLinkText,children:" packs"})}),"."]})]})]})},Oe=function(){var e=Object(u.c)((function(e){return e.login.isLoggedIn})),t=Object(u.c)((function(e){return e.profile.profile}));return e?Object(he.jsx)("div",{children:Object(he.jsx)(pe,{profile:t})}):Object(he.jsx)(ue.a,{to:$e.LOGIN})},me=function(){return Object(he.jsx)("div",{})},ge=function(){return Object(he.jsx)(he.Fragment,{children:"cards"})},fe=r(9),Se=r.n(fe),xe=r(30),ve=r(32),Te=r.n(ve),Ee=function(e){var t=e.type,r=e.onChange,a=e.onChangeText,n=e.onKeyPress,s=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=e.theme,l=Object(xe.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","theme"]),u="".concat(Te.a.error," ").concat(o||""),d="".concat(c?Te.a.errorInput:Te.a.superInput," ").concat("dark"===i?Te.a.dark:Te.a.light);return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)("input",Object(_.a)({type:t||"text",onChange:function(e){r&&r(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&s&&s()},className:d},l)),c&&Object(he.jsx)("span",{className:u,children:"Please, type something.."})]})},ke=r(36),we=r.n(ke),Ne=function(e){var t=e.theme,r=e.red,a=e.className,n=Object(xe.a)(e,["theme","red","className"]),s="".concat(r?we.a.red:we.a.default," ").concat("dark"==t?we.a.dark:we.a.light," ").concat(a);return Object(he.jsx)("button",Object(_.a)({className:s},n))},Pe=r(23),Re=r(33),Ie=r.n(Re),ye=function(e){var t=e.theme,r=(e.type,e.onChange),a=e.onChangeChecked,n=e.className,s=(e.spanClassName,e.children),c=Object(xe.a)(e,["theme","type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Ie.a.checkbox," ").concat(n||""," ").concat("dark"===t?Ie.a.dark:Ie.a.light);return Object(he.jsxs)("label",{className:Ie.a.label,children:[Object(he.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){r&&r(e),a&&a(e.currentTarget.checked)},className:o},c)),s&&Object(he.jsx)("span",{className:Ie.a.spanClassName,children:s})]})},Ce=function(e){var t=e.theme,r=e.loginError,a=(e.status,Object(n.useState)(!1)),s=Object(le.a)(a,2),c=s[0],o=s[1],i=Object(u.b)(),d=Object(Pe.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email||(t.email="Email is required"),e.password||(t.password="Password is required"),(d.errors.email||d.errors.password)&&(0===Object.keys(t).length?o(!1):o(!0)),t},onSubmit:function(e){i(T(e)),o(!0),d.resetForm()}});return Object(he.jsxs)("div",{className:Se.a.loginWrapper,children:[Object(he.jsx)("h1",{className:Se.a.loginTitle,children:"Sign in"}),r?Object(he.jsx)("div",{className:Se.a.error,children:r}):null,Object(he.jsxs)("form",{className:Se.a.loginBox,onSubmit:d.handleSubmit,children:[Object(he.jsxs)("div",{className:Se.a.loginInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"e-mail",type:"email"},d.getFieldProps("email"))),d.touched.email&&d.errors.email?Object(he.jsx)("div",{className:Se.a.error,children:d.errors.email}):null]}),Object(he.jsxs)("div",{className:Se.a.loginInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"password",type:"password"},d.getFieldProps("password"))),d.touched.password&&d.errors.password?Object(he.jsx)("div",{className:Se.a.error,children:d.errors.password}):null]}),Object(he.jsxs)("div",{className:Se.a.loginCheckboxInner,children:[Object(he.jsx)("label",{htmlFor:"rememberMe",className:Se.a.loginLabel,children:"Remember me"}),Object(he.jsx)(ye,Object(_.a)({theme:t,id:"rememberMe",type:"rememberMe"},d.getFieldProps("rememberMe")))]}),Object(he.jsx)(Ne,{theme:t,disabled:c,children:"Sign in"})]}),Object(he.jsx)(l.b,{className:"".concat(Se.a.link," ").concat("dark"===t?Se.a.dark:Se.a.light),to:$e.RECOVERY_PASSWORD,children:"Forgot your password?"}),Object(he.jsx)(l.b,{className:"".concat(Se.a.link," ").concat("dark"===t?Se.a.dark:Se.a.light),to:$e.REGISTRATION,children:"Go to sign up"})]})},Le=(r(91),function(){return Object(he.jsxs)("div",{className:"lds-ellipsis",children:[Object(he.jsx)("div",{}),Object(he.jsx)("div",{}),Object(he.jsx)("div",{}),Object(he.jsx)("div",{})]})}),Ae=function(e){var t=e.theme,r=Object(u.c)((function(e){return e.login.isLoggedIn})),a=Object(u.c)((function(e){return e.login.loginStatus})),n=Object(u.c)((function(e){return e.login.loginError}));return r?Object(he.jsx)(ue.a,{to:$e.PROFILE}):"loading"===a?Object(he.jsx)(Le,{}):Object(he.jsx)(he.Fragment,{children:Object(he.jsx)(Ce,{theme:t,status:a,loginError:n})})},Ue=r(10),Ge=r.n(Ue),Fe=function(e){var t=e.theme,r=(e.status,e.registrationError),a=Object(u.b)(),s=Object(n.useState)(!1),c=Object(le.a)(s,2),o=c[0],i=c[1],d=Object(Pe.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email||(t.email="Email is required"),e.password||(t.password="Password is required"),e.confirmPassword||(t.confirmPassword="Password is required"),e.password!==e.confirmPassword&&(t.confirmPassword="Passwords are not equal"),(d.errors.email||d.errors.password||d.errors.confirmPassword)&&(0===Object.keys(t).length?i(!1):i(!0)),t},onSubmit:function(e){a(B(e)),i(!0),d.resetForm()}});return Object(he.jsxs)("div",{className:Ge.a.regWrapper,children:[Object(he.jsx)("h1",{className:Ge.a.regTitle,children:"Sign up"}),Object(he.jsx)("p",{className:Ge.a.regSubTitle,children:"Please fill in the form below"}),r?Object(he.jsx)("div",{className:Ge.a.regError,children:r}):null,Object(he.jsxs)("form",{className:Ge.a.regBox,onSubmit:d.handleSubmit,children:[Object(he.jsxs)("div",{className:Ge.a.regInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"e-mail",type:"email"},d.getFieldProps("email"))),d.touched.email&&d.errors.email?Object(he.jsx)("div",{className:Ge.a.error,children:d.errors.email}):null]}),Object(he.jsxs)("div",{className:Ge.a.regInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"password",type:"password"},d.getFieldProps("password"))),d.touched.password&&d.errors.password?Object(he.jsx)("div",{className:Ge.a.error,children:d.errors.password}):null]}),Object(he.jsxs)("div",{className:Ge.a.regInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"confirm password",type:"password"},d.getFieldProps("confirmPassword"))),d.touched.confirmPassword&&d.errors.confirmPassword?Object(he.jsx)("div",{className:Ge.a.error,children:d.errors.confirmPassword}):null]}),Object(he.jsx)(Ne,{theme:t,disabled:o,children:"Sign up"})]}),Object(he.jsx)(l.b,{className:"".concat(Ge.a.link," ").concat("dark"===t?Ge.a.dark:Ge.a.light),to:$e.LOGIN,children:"Go to sign in"})]})},Be=function(e){var t=e.theme,r=Object(u.c)((function(e){return e.app.status})),a=Object(u.c)((function(e){return e.registration.registrationError}));return Object(u.c)((function(e){return e.registration.isRegistration}))?Object(he.jsx)(ue.a,{to:$e.LOGIN}):"loading"===r?Object(he.jsx)(Le,{}):Object(he.jsx)(Fe,{registrationError:a,status:r,theme:t})},De=function(){return Object(he.jsx)("div",{children:"Error404"})},Me=r(25),We=r.n(Me),Ke=function(e){var t=e.theme,r=e.recoveryError,a=e.recoverySuccess,n=e.status,s=Object(u.b)(),c=Object(Pe.a)({initialValues:{email:""},validate:function(e){var t={};return e.email||(t.email="Email is required"),t},onSubmit:function(e){s(q(e.email)),c.resetForm()}});return Object(he.jsxs)("div",{className:We.a.box,children:[Object(he.jsx)("h1",{className:We.a.recTitle,children:"Recover Password"}),Object(he.jsx)("p",{className:We.a.recSubTitle,children:"Please, enter your email"}),r?Object(he.jsx)("div",{className:We.a.recError,children:r}):null,a?Object(he.jsx)("div",{className:We.a.recSuccess,children:a}):null,Object(he.jsxs)("form",{onSubmit:c.handleSubmit,children:[Object(he.jsxs)("div",{className:We.a.recInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"e-mail",type:"email"},c.getFieldProps("email"))),c.touched.email&&c.errors.email?Object(he.jsx)("div",{className:We.a.recError,children:c.errors.email}):null]}),Object(he.jsx)(Ne,{children:"Send"}),"loading"===n?Object(he.jsx)(Le,{}):null]})]})},ze=function(e){var t=e.theme,r=Object(u.c)((function(e){return e.recoveryPass.recoveryError})),a=Object(u.c)((function(e){return e.recoveryPass.recoverySuccess})),n=Object(u.c)((function(e){return e.recoveryPass.status}));return Object(he.jsx)(Ke,{theme:t,recoveryError:r,recoverySuccess:a,status:n})},qe=r(20),Ve=r.n(qe),Ye=function(e){var t=e.theme,r=e.successMessage,a=e.errorMessage,n=e.status,s=Object(u.b)(),c=Object(ue.g)().token,o=Object(Pe.a)({initialValues:{password:"",confirmPassword:""},validate:function(e){var t={};return e.password||(t.password="Password is required"),e.confirmPassword||(t.confirmPassword="Password is required"),e.password!==e.confirmPassword&&(t.confirmPassword="Passwords are not equal"),t},onSubmit:function(e){s(Q(e.password,c)),o.resetForm()}});return Object(he.jsxs)("div",{className:Ve.a.box,children:[Object(he.jsx)("h1",{className:Ve.a.newPassTitle,children:"New Password"}),Object(he.jsx)("p",{className:Ve.a.newPassSubTitle,children:"Please, enter your email"}),a?Object(he.jsx)("div",{className:Ve.a.newPassError,children:a}):null,r?Object(he.jsx)("div",{className:Ve.a.newPassSuccess,children:r}):null,Object(he.jsxs)("form",{onSubmit:o.handleSubmit,children:[Object(he.jsxs)("div",{className:Ve.a.newPassInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"password",type:"password"},o.getFieldProps("password"))),o.touched.password&&o.errors.password?Object(he.jsx)("div",{className:Ve.a.newPassError,children:o.errors.password}):null]}),Object(he.jsxs)("div",{className:Ve.a.newPassInner,children:[Object(he.jsx)(Ee,Object(_.a)({theme:t,placeholder:"confirm password",type:"password"},o.getFieldProps("confirmPassword"))),o.touched.confirmPassword&&o.errors.confirmPassword?Object(he.jsx)("div",{className:Ve.a.newPassError,children:o.errors.confirmPassword}):null]}),Object(he.jsx)(Ne,{children:"Send"}),"loading"===n?Object(he.jsx)(Le,{}):null]})]})},He=function(e){var t=e.theme,r=Object(u.c)((function(e){return e.newPassword.status})),a=Object(u.c)((function(e){return e.newPassword.successMessage})),n=Object(u.c)((function(e){return e.newPassword.error}));return Object(he.jsx)(he.Fragment,{children:Object(he.jsx)(Ye,{theme:t,successMessage:a,errorMessage:n,status:r})})},Ze=r(60),Je=r.n(Ze),Qe=function(){return Object(he.jsx)("div",{className:Je.a.packsBox,children:Object(he.jsx)("h1",{children:"Packs"})})},Xe=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.login.isLoggedIn})),r=Object(u.c)((function(e){return e.packs.packs}));return Object(n.useEffect)((function(){e(N(null)),e((function(e,t){e(ne("loading"));var r=t(),a=r.packs.searchName,n=r.packs.min,s=r.packs.max,c=r.packs.sortPacks,o=r.packs.page,i=r.packs.packsPerPage,l=r.profile.myId;re.getPacksData(a,n,s,c,o,i,l).then((function(e){console.log(e)})).catch((function(e){e.response?e.response.data.error:e.message})).finally((function(){e(ne("succeeded"))}))}))}),[e]),t?(console.log(r),Object(he.jsx)(Qe,{})):Object(he.jsx)(ue.a,{to:$e.LOGIN})},$e={LOGIN:"/login",REGISTRATION:"/registration",PROFILE:"/profile",ERROR_404:"/404",RECOVERY_PASSWORD:"/recovery_pass",NEW_PASSWORD:"/new_pass",TEST:"/test",PACKS:"/packs",CARDS:"/cards"},et=function(e){var t=e.theme;return Object(he.jsx)("div",{children:Object(he.jsxs)(ue.d,{children:[Object(he.jsx)(ue.b,{path:"/",exact:!0,render:function(){return Object(he.jsx)(ue.a,{to:$e.LOGIN})}}),Object(he.jsx)(ue.b,{path:$e.LOGIN,render:function(){return Object(he.jsx)(Ae,{theme:t})}}),Object(he.jsx)(ue.b,{path:$e.REGISTRATION,render:function(){return Object(he.jsx)(Be,{theme:t})}}),Object(he.jsx)(ue.b,{path:$e.PROFILE,render:function(){return Object(he.jsx)(Oe,{})}}),Object(he.jsx)(ue.b,{path:$e.ERROR_404,render:function(){return Object(he.jsx)(De,{})}}),Object(he.jsx)(ue.b,{path:$e.RECOVERY_PASSWORD,render:function(){return Object(he.jsx)(ze,{theme:t})}}),Object(he.jsx)(ue.b,{path:$e.NEW_PASSWORD,render:function(){return Object(he.jsx)(He,{theme:t})}}),Object(he.jsx)(ue.b,{path:$e.TEST,render:function(){return Object(he.jsx)(me,{})}}),Object(he.jsx)(ue.b,{path:$e.PACKS,render:function(){return Object(he.jsx)(Xe,{})}}),Object(he.jsx)(ue.b,{path:$e.CARDS+"/:id",render:function(){return Object(he.jsx)(ge,{})}}),Object(he.jsx)(ue.b,{render:function(){return Object(he.jsx)(De,{})}})]})})},tt=r(4),rt=r.n(tt),at=r(61),nt=r.n(at),st=function(){var e=Object(u.c)((function(e){return e.login.isLoggedIn})),t=Object(u.c)((function(e){return e.login.logoutStatus})),r=Object(u.b)(),a=Object(n.useCallback)((function(){r((function(e){e(C("loading")),g().then((function(){e(x(!1))})).catch((function(e){e.response?e.response.data.error:e.message})).finally((function(){e(C("succeeded"))}))}))}),[r]);return Object(he.jsxs)(he.Fragment,{children:["loading"===t?Object(he.jsx)(Le,{}):null,e&&Object(he.jsx)(Ne,{onClick:a,className:nt.a.logout,children:"Logout"})]})},ct=function(e){var t=e.theme;return Object(he.jsxs)("nav",{className:rt.a.navBox,children:[Object(he.jsxs)("ul",{className:rt.a.navList,children:[Object(he.jsx)("li",{className:rt.a.navItem,children:Object(he.jsx)(l.b,{activeClassName:rt.a.selected,className:"".concat(rt.a.link," ").concat("dark"===t?rt.a.dark:rt.a.light),to:$e.REGISTRATION,children:"Registration"})}),Object(he.jsx)("li",{className:rt.a.navItem,children:Object(he.jsx)(l.b,{className:"".concat(rt.a.link," ").concat("dark"===t?rt.a.dark:rt.a.light),activeClassName:rt.a.selected,to:$e.LOGIN,children:"Login"})}),Object(he.jsx)("li",{className:rt.a.navItem,children:Object(he.jsx)(l.b,{className:"".concat(rt.a.link," ").concat("dark"===t?rt.a.dark:rt.a.light),activeClassName:rt.a.selected,to:$e.PROFILE,children:"Profile"})}),Object(he.jsx)("li",{className:rt.a.navItem,children:Object(he.jsx)(l.b,{className:"".concat(rt.a.link," ").concat("dark"===t?rt.a.dark:rt.a.light),activeClassName:rt.a.selected,to:$e.RECOVERY_PASSWORD,children:"Recovery Password"})}),Object(he.jsx)("li",{className:rt.a.navItem,children:Object(he.jsx)(l.b,{className:"".concat(rt.a.link," ").concat("dark"===t?rt.a.dark:rt.a.light),activeClassName:rt.a.selected,to:$e.NEW_PASSWORD,children:"New Password"})}),Object(he.jsx)("li",{className:rt.a.navItem,children:Object(he.jsx)(l.b,{className:"".concat(rt.a.link," ").concat("dark"===t?rt.a.dark:rt.a.light),activeClassName:rt.a.selected,to:$e.PACKS,children:"Packs"})})]}),Object(he.jsx)(st,{})]})},ot=r(27),it=r.n(ot),lt=function(e){var t=e.theme,r=e.toggleTheme;return Object(he.jsx)("div",{className:it.a.btnBox,children:Object(he.jsx)(Ne,{onClick:r,className:"".concat(it.a.switcherBtn," ").concat("dark"===t?it.a.dark:it.a.light),children:"dark"===t?Object(he.jsx)("span",{className:it.a.emoji,children:"\ud83c\udf1a"}):Object(he.jsx)("span",{className:it.a.emoji,children:"\ud83c\udf1d"})})})},ut=r(26),dt=r.n(ut),jt=function(){return Object(he.jsxs)("div",{className:dt.a.loader,children:[Object(he.jsx)("div",{className:"".concat(dt.a.inner," ").concat(dt.a.one)}),Object(he.jsx)("div",{className:"".concat(dt.a.inner," ").concat(dt.a.two)}),Object(he.jsx)("div",{className:"".concat(dt.a.inner," ").concat(dt.a.three)})]})};var _t=function(){var e=function(){var e=Object(n.useState)("light"),t=Object(le.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("theme");e&&a(e)}),[]),{theme:r,toggleTheme:function(){"dark"!==r?(localStorage.setItem("theme","dark"),a("dark")):(localStorage.setItem("theme","light"),a("light"))}}}(),t=e.theme,r=e.toggleTheme,a=Object(u.b)(),s=Object(u.c)((function(e){return e.app.initialized}));return console.log(s,"initialized"),Object(n.useEffect)((function(){s||a(L())}),[s,a]),s?Object(he.jsx)("div",{className:"".concat(ie.a.app," ").concat("dark"===t?ie.a.dark:ie.a.light),children:Object(he.jsxs)("div",{className:ie.a.container,children:[Object(he.jsx)(lt,{theme:t,toggleTheme:r}),Object(he.jsx)(ct,{theme:t}),Object(he.jsx)(et,{theme:t})]})}):Object(he.jsx)(jt,{})};o.a.render(Object(he.jsx)(s.a.StrictMode,{children:Object(he.jsx)(l.a,{children:Object(he.jsx)(u.a,{store:ce,children:Object(he.jsx)(_t,{})})})}),document.getElementById("root")),i()}},[[92,1,2]]]);
//# sourceMappingURL=main.d56809af.chunk.js.map