(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),l=(a(13),a(22)),u=a(2),i="https://api.bolshakov.nomoredomains.xyz",s=function(e){return e.ok?e.json():Promise.reject(e.status)},p=function(e,t){return console.log(e,t),fetch("".concat(i,"/sign-up"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return s(e)})},m=function(e,t){return fetch("".concat(i,"/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return s(e)})},d=function(e){return fetch("".concat(i,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){return s(e)})},_=o.a.createContext(),f=a(1);var h=function(e){var t=e.name,a=e.isOpen,n=e.title,r=e.onClose,c=e.buttonText,l=e.children,u=e.onSubmit;return o.a.createElement("div",{className:"popup popup_type_".concat(t," ").concat(a&&"popup_open"),id:"".concat(t,"-popup")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button button_type_close-popup",onClick:r}),o.a.createElement("h2",{className:"popup__title"},n),o.a.createElement("form",{className:"popup__form",id:t,name:"popup-".concat(t,"-form"),onSubmit:u},l,o.a.createElement("button",{type:"submit","aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:"button button_type_submit"},c))))};var b=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useContext(_),c=o.a.useState(""),l=Object(u.a)(c,2),i=l[0],s=l[1],p=o.a.useState(""),m=Object(u.a)(p,2),d=m[0],f=m[1];return o.a.useEffect(function(){s(r.name),f(r.about)},[r,t]),o.a.createElement(h,{onSubmit:function(e){e.preventDefault(),n({name:i,about:d})},name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},o.a.createElement("input",{value:i||"",onChange:function(e){s(e.target.value)},id:"name-input",required:!0,type:"text",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input popup__input_type_name",minLength:"2",maxLength:"40"}),o.a.createElement("span",{className:"name-input-error popup__error"}),o.a.createElement("input",{value:d||"",onChange:function(e){f(e.target.value)},id:"job-input",required:!0,type:"text",name:"job",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",className:"popup__input popup__input_type_job",minLength:"2",maxLength:"200"}),o.a.createElement("span",{className:"job-input-error popup__error"}))};var g=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.useEffect(function(){r.current.value=""},[a]),o.a.createElement(h,{onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})},name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},o.a.createElement("input",{ref:r,id:"url-input",required:!0,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_job"}),o.a.createElement("span",{className:"url-input-error popup__error"}))},v=function(e){var t=e.loggedIn,a=e.children,n=e.path;return o.a.createElement(f.b,{path:n},t?a:o.a.createElement(f.a,{to:"/sign-in"}))};var E=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useState(""),c=Object(u.a)(r,2),l=c[0],i=c[1],s=o.a.useState(""),p=Object(u.a)(s,2),m=p[0],d=p[1];return o.a.useEffect(function(){i(""),d("")},[t]),o.a.createElement(h,{onSubmit:function(e){e.preventDefault(),n({name:l,link:m})},name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"},o.a.createElement("input",{onChange:function(e){i(e.target.value)},value:l||"",id:"place-input",required:!0,type:"text",name:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_name",minLength:"2",maxLength:"30"}),o.a.createElement("span",{className:"place-input-error popup__error"}),o.a.createElement("input",{onChange:function(e){d(e.target.value)},value:m||"",id:"url-input-place",required:!0,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_job"}),o.a.createElement("span",{className:"url-input-place-error popup__error"}))},k=a(17),y=a.n(k),C=a(18),N=a.n(C);var S=function(e){var t=e.onClose,a=e.isOpen,n=e.isRegister;return o.a.createElement("div",{className:"popup ".concat(a&&"popup_open"," ")},o.a.createElement("div",{className:"popup__container popup__conteiner_type_registr"},o.a.createElement("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button button_type_close-popup",onClick:t}),o.a.createElement("img",{className:"popup__register-image",src:n?y.a:N.a,alt:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),o.a.createElement("h2",{className:"popup__title"},"".concat(n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))))};var O=function(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"popup popup_type_image ".concat(t.name&&"popup_open"),id:"popup-image"},o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button button_type_close-popup",onClick:a}),o.a.createElement("img",{className:"popup__image",src:t.link,alt:t.name}),o.a.createElement("figcaption",{className:"popup__fig-caption"},t.name)))};var j=function(e){var t=e.title,a=e.buttonText,n=e.children,r=e.handleSubmit;return o.a.createElement("div",{className:"popup__container popup__container_type_auth"},o.a.createElement("h1",{className:"popup__title popup__title_type_auth"},t),o.a.createElement("form",{className:"popup__form",onSubmit:r},n,o.a.createElement("button",{className:"button button_type_submit button_type_submit-auth"},a)))},L=a(7);var T=function(e){var t=e.handleAuth,a=o.a.useState(""),n=Object(u.a)(a,2),r=n[0],c=n[1],l=o.a.useState(""),i=Object(u.a)(l,2),s=i[0],p=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{handleSubmit:function(e){e.preventDefault(),t(r,s)},title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},o.a.createElement("input",{className:"popup__input popup__input_type_auth",placeholder:"Email",value:r||"",onChange:function(e){c(e.target.value)}}),o.a.createElement("input",{className:"popup__input popup__input_type_auth",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:s||"",onChange:function(e){p(e.target.value)}})),o.a.createElement("p",{className:"popup__register-text"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",o.a.createElement(L.b,{className:"link",to:"/sign-in"},"\u0412\u043e\u0439\u0442\u0438")," "))},x=a(19),P=a(20),w=new(function(){function e(t){var a=t.baseUrl;Object(x.a)(this,e),this._url=a}return Object(P.a)(e,[{key:"_checkServerResponce",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfile",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(function(t){return e._checkServerResponce(t)})}},{key:"editProfile",value:function(e,t){var a=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(function(e){return a._checkServerResponce(e)})}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(function(e){return t._checkServerResponce(e)})}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(function(t){return e._checkServerResponce(t)})}},{key:"addCard",value:function(e,t){var a=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(function(e){return a._checkServerResponce(e)})}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(function(e){return t._checkServerResponce(e)})}},{key:"changeLikeCardStatus",value:function(e,t){var a=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:this._headers}).then(function(e){return a._checkServerResponce(e)})}},{key:"_headers",get:function(){return{authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}}}]),e}())({baseUrl:"https://api.bolshakov.nomoredomains.xyz"}),A=a(21),I=a.n(A);var R=function(e){var t=e.headerLink,a=e.userEmail,n=e.linkTitle,r=e.onLogOut,c=(a||{}).email;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:I.a,alt:"\u041c\u0435\u0441\u0442\u043e",className:"logo"}),o.a.createElement("div",{className:"nav-bar"},o.a.createElement("h2",{className:"header__email"},c),o.a.createElement(L.b,{className:"link header__link",to:"".concat(t),onClick:r},n," "))))};var D=function(e){return e.loggedIn,o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," Mesto Russia"))};var U=function(e){var t=e.handleAuth,a=o.a.useState(""),n=Object(u.a)(a,2),r=n[0],c=n[1],l=o.a.useState(""),i=Object(u.a)(l,2),s=i[0],p=i[1];return o.a.createElement(j,{handleSubmit:function(e){e.preventDefault(),t(r,s)},title:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438"},o.a.createElement("input",{className:"popup__input popup__input_type_auth",placeholder:"Email",value:r||"",onChange:function(e){c(e.target.value)}}),o.a.createElement("input",{className:"popup__input popup__input_type_auth",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:s||"",onChange:function(e){p(e.target.value)}}))};var F=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(_)._id,l=t.owner===c||t.owner._id===c,u=t.likes.some(function(e){return e===c}),i="button ".concat(u?"card__like-button_active":"card__like-button"),s="button  ".concat(l?"card__delete-button":"card__delete-button_inactive");return o.a.createElement("li",{className:"card"},o.a.createElement("img",{className:"card__image",src:t.link,onClick:function(){a(t)},alt:t.name}),o.a.createElement("button",{className:s,onClick:function(){r(t)}}),o.a.createElement("div",{className:"card__panel"},o.a.createElement("h2",{className:"card__city"},t.name),o.a.createElement("div",{className:"card__like-container"},o.a.createElement("button",{type:"button","aria-label":"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:i,onClick:function(){n(t)}}),o.a.createElement("span",{className:"card__like-count"},"".concat(t.likes.length)))))};var J=function(e){var t=e.onEditProfile,a=e.onEditAvatar,n=e.onAddPlace,r=e.onCardClick,c=e.cards,l=e.onCardLike,u=e.onCardDelete,i=o.a.useContext(_),s=i.name,p=i.about,m=i.avatar;return o.a.createElement("div",null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__about"},o.a.createElement("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",className:"button avatar-button button_type_change-avatar avatar-popup-button",onClick:a},m&&o.a.createElement("img",{alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__photo",src:m})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__container"},o.a.createElement("h1",{className:"profile__name"},s),o.a.createElement("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:" button button_type_edit-info profile-button profile-popup-button",onClick:t})),o.a.createElement("p",{className:"profile__description"},p))),o.a.createElement("button",{type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",className:"button place-button button_type_add-card place-popup-button",onClick:n})),o.a.createElement("section",{className:"cards"},o.a.createElement("ul",{className:"cards__list"},c.map(function(e){return o.a.createElement(F,{onCardClick:r,onCardLike:l,onCardDelete:u,card:e,key:e._id})}))))};var q=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(u.a)(r,2),i=c[0],s=c[1],k=o.a.useState(!1),y=Object(u.a)(k,2),C=y[0],N=y[1],j=o.a.useState(!1),L=Object(u.a)(j,2),x=L[0],P=L[1],A=o.a.useState({}),I=Object(u.a)(A,2),F=I[0],q=I[1],z=o.a.useState({}),B=Object(u.a)(z,2),H=B[0],M=B[1],G=o.a.useState([]),Y=Object(u.a)(G,2),K=Y[0],Q=Y[1],V=o.a.useState(!1),W=Object(u.a)(V,2),X=W[0],Z=W[1],$=o.a.useState(!1),ee=Object(u.a)($,2),te=ee[0],ae=ee[1],ne=o.a.useState(null),oe=Object(u.a)(ne,2),re=oe[0],ce=oe[1],le=i||a||C||F,ue=Object(f.g)();function ie(){n(!1),s(!1),N(!1),q({}),P(!1)}function se(){if(console.log("ldlldd",!0===localStorage.getItem("token")),localStorage.getItem("token")){var e=localStorage.getItem("token");d(e).then(function(e){e&&(ce({email:e.email}),Z(!0),ue.push("/"),console.log("checktoken",X))}).catch(function(e){return console.log(e)})}}return o.a.useEffect(function(){function e(e){"Escape"===e.key&&ie()}if(le)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[le]),o.a.useEffect(function(){function e(e){e.target.classList.contains("popup")&&ie()}if(le)return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}},[le]),o.a.useEffect(function(){if(X)return se(),void Promise.all([w.getProfile(),w.getInitialCards()]).then(function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];n.reverse(),M(a),Q(n)}).catch(function(e){return console.log(e)})},[X]),o.a.useEffect(function(){se()},[]),o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"content"},o.a.createElement(_.Provider,{value:H},o.a.createElement(f.d,null,o.a.createElement(v,{exact:!0,path:"/",loggedIn:X},o.a.createElement(R,{userEmail:re,onLogOut:function(){localStorage.removeItem("token"),Z(!1),console.log(X,localStorage)},loggedIn:X,headerLink:"/sign-in",linkTitle:"\u0412\u044b\u0439\u0442\u0438"}),o.a.createElement(J,{cards:K,onCardLike:function(e){var t=e.likes.some(function(e){return e===H._id});w.changeLikeCardStatus(e._id,!t).then(function(t){Q(function(a){return a.map(function(a){return a._id===e._id?t:a})})}).catch(function(e){return console.log(e)})},onCardDelete:function(e){w.deleteCard(e._id).then(function(){Q(function(t){return t.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.log(e)})},onCardClick:function(e){q(e)},onEditProfile:function(){n(!0)},onAddPlace:function(){N(!0)},onEditAvatar:function(){s(!0)}}),o.a.createElement(D,null),o.a.createElement(b,{isOpen:a,onClose:ie,onUpdateUser:function(e){w.editProfile(e.name,e.about).then(function(e){M(e),ie()}).catch(function(e){return console.log(e)})}}),o.a.createElement(g,{isOpen:i,onClose:ie,onUpdateAvatar:function(e){w.changeAvatar(e.avatar).then(function(e){M(e),ie()}).catch(function(e){return console.log(e)})}}),o.a.createElement(E,{isOpen:C,onClose:ie,onAddPlace:function(e){w.addCard(e.name,e.link).then(function(e){Q([e].concat(Object(l.a)(K))),ie()}).catch(function(e){return console.log(e)})}}),o.a.createElement(h,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),o.a.createElement(O,{card:F,onClose:ie})),o.a.createElement(f.b,{path:"/sign-up"},o.a.createElement(R,{loggedIn:X,headerLink:"/sign-in",linkTitle:"\u0412\u043e\u0439\u0442\u0438"}),o.a.createElement(T,{handleAuth:function(e,t){console.log("flflflfffffffff"),p(e,t).then(function(e){e&&(ue.push("/sign-in"),ae(!0))}).catch(function(e){console.log(e),ae(!1)}).finally(function(){P(!0)})}}),o.a.createElement(S,{isRegister:te,isOpen:x,onClose:ie})),o.a.createElement(f.b,{path:"/sign-in"},o.a.createElement(R,{loggedIn:X,headerLink:"/sign-up",linkTitle:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),o.a.createElement(U,{handleAuth:function(e,t){m(e,t).then(function(e){e&&(localStorage.setItem("token",e.token),ue.push("/"),Z(!0),console.log(X,localStorage))}).catch(function(e){ae(!1),P(!0),console.log(e)})},title:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438"}),o.a.createElement(S,{isRegister:te,isOpen:x,onClose:ie}))))))},z=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,101)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(L.a,null,o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)))),z()},13:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/successRegister.e38b395c.svg"},18:function(e,t,a){e.exports=a.p+"static/media/errorRegister.4072126c.svg"},21:function(e,t,a){e.exports=a.p+"static/media/Logo.7baba3c1.svg"},23:function(e,t,a){e.exports=a(100)}},[[23,3,2]]]);
//# sourceMappingURL=main.08f113bc.chunk.js.map