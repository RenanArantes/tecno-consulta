(this["webpackJsonptecno-consulta"]=this["webpackJsonptecno-consulta"]||[]).push([[0],{36:function(e,n,t){e.exports=t.p+"static/media/logo.68993b76.png"},38:function(e,n,t){e.exports=t(68)},68:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(13),c=t.n(r),u=t(1),o=t(2);function i(){var e=Object(u.a)(["\n    * {\n        margin: 0;\n        padding: 0px 0px;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root {\n        min-height: 100%;\n    }\n\n    body {\n      background: rgb(255,0,0);\n      background: linear-gradient(180deg, rgba(255,0,0,1) 13%, rgba(255,0,0,0.4305214185393258) 100%);\n        -webkit-font-smoothing: antialiased important;\n    }\n\n    body, input, buttom {\n        color: #222;\n        font-size: 18px;\n        font-family: Arial, Helvetica, sans-serif;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);return i=function(){return e},e}var m=Object(o.a)(i()),s=t(10),E=t(6),d=t(14),p=t.n(d),f=t(32),b=t(7),g=t(33),h=t.n(g),x=t(34),v=t.n(x),y=t(17),j=t(35),w=t.n(j).a.create({baseURL:"https://www.receitaws.com.br/v1/cnpj/"}),O=function(e){return e.replace(/[^0-9]/g,"")},S=t(36),_=t.n(S);function k(){var e=Object(u.a)(["\n  margin: 5px 5px;\n  display: flexbox;\n  align-items: center;\n  align-self: center;\n\n  color: white;\n\n  img {\n    max-width: 50px;\n    height: auto;\n  }\n"]);return k=function(){return e},e}var F=o.c.div(k());function N(){return l.a.createElement(s.b,{to:"/tecno-consulta/",style:{textDecoration:"none"}},l.a.createElement(F,null,l.a.createElement("img",{alt:"Tecnodata",src:_.a}),l.a.createElement("div",null,l.a.createElement("h1",null,"Tecnodata"),l.a.createElement("h2",null,"Consulta Receita Federal"))))}function z(){var e=Object(u.a)(["\n    max-width: 700px;\n    background: #fff;\n    border-radius: 4px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n    padding: 30px;\n    margin: 10px auto;\n\n    h1 {\n        font-size: 20px;\n        display: flex;\n        flex-direction: row;\n    }\n\n    svg {\n        margin-right: 10px;\n    }\n\n    hr {\n      margin-top: 5px;\n      margin-bottom: 10px;\n    }\n"]);return z=function(){return e},e}var C=o.c.div(z());function q(){var e=Object(u.a)(["\n    svg {\n      animation: "," 2s linear infinite;\n    }\n  "]);return q=function(){return e},e}function J(){var e=Object(u.a)(["\n  background: #f01;\n  border: 0;\n  padding-left: 15px;\n  margin-left: 5px;\n  border-radius: 4px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return J=function(){return e},e}function P(){var e=Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n\n  } to {\n    transform: rotate(360deg);\n  }\n"]);return P=function(){return e},e}function R(){var e=Object(u.a)(["\n  margin-top: 30px;\n  display:flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid ",";\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n\n    transition: border 0.25s ease-out;\n  }\n"]);return R=function(){return e},e}var A=o.c.form.attrs((function(e){return{finded:e.finded}}))(R(),(function(e){return e.finded?"#ff6b6b":"#eee"})),B=Object(o.d)(P()),D=o.c.button.attrs((function(e){return{type:"submit",disabled:e.loading}}))(J(),(function(e){return e.loading&&Object(o.b)(q(),B)}));function L(e){var n=e.history,t=Object(a.useState)(""),r=Object(b.a)(t,2),c=(r[0],r[1]),u=Object(a.useState)(""),o=Object(b.a)(u,2),i=o[0],m=o[1],s=Object(a.useState)(!0),E=Object(b.a)(s,2),d=E[0],g=E[1],x=Object(a.useState)(!1),j=Object(b.a)(x,2),S=j[0],_=j[1];function k(){return(k=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),_(!0),g(!1),e.prev=3,""!==i){e.next=6;break}throw"Voce precisa digitar um CNPJ";case 6:return e.next=8,w.get("https://www.receitaws.com.br/v1/cnpj/".concat(O(i)),{adapter:v.a});case 8:a=e.sent,m(""),c(a.data),_(!1),n.push({pathname:"/tecno-consulta/query",data:a.data}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),_(!1);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(C,null,l.a.createElement("h1",null,"CNPJ"),l.a.createElement(A,{onSubmit:function(e){return k.apply(this,arguments)},finded:d},l.a.createElement(h.a,{mask:"99.999.999/9999-99",type:"text",placeholder:"Digite aqui um CNPJ",value:i,onChange:function(e){m(e.target.value)}}),l.a.createElement(D,{loading:S},S?l.a.createElement(y.b,{color:"#fff",size:25}):l.a.createElement(y.a,{color:"#fff",size:25})))))}var I=function(e){return Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)};function T(){var e=Object(u.a)([""]);return T=function(){return e},e}function Q(){var e=Object(u.a)(["\n  ol {\n    list-style-position: inside;\n    list-style-type: upper-roman;\n    margin-left: 15px;\n  }\n\n  ul {\n    margin-left: 35px;\n  }\n"]);return Q=function(){return e},e}function U(){var e=Object(u.a)(["\n  text-align: center;\n"]);return U=function(){return e},e}var V=o.c.h1(U()),W=o.c.text(Q()),H=o.c.strong(T());function M(e){var n=Object(a.useState)(),t=Object(b.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){e.history.location.data?(localStorage.setItem("dataQuery",JSON.stringify(e.history.location.data)),c(e.history.location.data)):c(JSON.parse(localStorage.getItem("dataQuery")))}),[e.history.location.data]),console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),r?l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null,l.a.createElement("h1",null,"Empresa: ",r.fantasia),l.a.createElement("hr",null),l.a.createElement(W,null,"CNPJ: ",l.a.createElement(H,null,r.cnpj)," Data de abertura: ",l.a.createElement(H,null,r.abertura)),l.a.createElement("br",null),l.a.createElement(W,null,"Nome empresarial: ",l.a.createElement(H,null,r.nome)),r.efr?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null)," ",l.a.createElement(W,null,"EFR: ",l.a.createElement(H,null,r.efr))," "):null,l.a.createElement("br",null),l.a.createElement(W,null,"Tipo: ",l.a.createElement(H,null,r.tipo)," Porte: ",l.a.createElement(H,null,r.porte)),l.a.createElement("br",null),l.a.createElement(W,null,"Natureza jur\xeddica: ",l.a.createElement(H,null,r.natureza_juridica))),l.a.createElement(C,null,l.a.createElement("h1",null,"Atividades"),l.a.createElement("hr",null),l.a.createElement(W,null,r.atividade_principal?r.atividade_principal.map((function(e){return l.a.createElement(W,null,"Atividade Principal: ",l.a.createElement(H,null,e.code)," - ",l.a.createElement(H,null,e.text))})):null),l.a.createElement("br",null),l.a.createElement(W,null,r.atividades_secundarias?l.a.createElement(W,null," Atividades Secund\xe1rias:",r.atividades_secundarias.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"CNAE: ",l.a.createElement(H,null,e.code)," - ",l.a.createElement(H,null,e.text)))}))):null)),l.a.createElement(C,null,l.a.createElement("h1",null,"Endere\xe7o"),l.a.createElement("hr",null),l.a.createElement(W,null,"Logradouro: ",l.a.createElement(H,null,r.logradouro)," Numero: ",l.a.createElement(H,null,r.numero)),r.complemento?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement(W,null,"Complemento: ",l.a.createElement(H,null,r.complemento))):null,l.a.createElement("br",null),l.a.createElement(W,null,"Bairro: ",l.a.createElement(H,null,r.bairro," "),"CEP: ",l.a.createElement(H,null,r.cep," "),"UF: ",l.a.createElement(H,null,r.uf," "))),r.telefone&&r.email?l.a.createElement(C,null,l.a.createElement("h1",null,"Contato"),l.a.createElement("hr",null),l.a.createElement(W,null,r.telefone?l.a.createElement(l.a.Fragment,null,"Telefone: ",l.a.createElement(H,null,r.telefone)," ",l.a.createElement("br",null)):null),l.a.createElement(W,null,r.email?l.a.createElement(l.a.Fragment,null,"Email: ",l.a.createElement(H,null,r.email)," ",l.a.createElement("br",null)):null)):null,l.a.createElement(C,null,l.a.createElement("h1",null,"Quadro Societ\xe1rio"),l.a.createElement("hr",null),l.a.createElement(W,null,l.a.createElement("ol",null,r.qsa?r.qsa.map((function(e){return l.a.createElement("li",null,l.a.createElement(H,null,e.qual)," - ",l.a.createElement(H,null,e.nome),e.pais_origem?l.a.createElement("ul",{className:"estrangeiro"},l.a.createElement("li",null,"S\xf3cio estrangeiro - Local: ",l.a.createElement(H,null,e.pais_origem)),e.qual_rep_legal?l.a.createElement("li",null,"Representante Legal: ",l.a.createElement(H,null,e.nome_rep_legal)," - Posi\xe7\xe3o: ",l.a.createElement(H,null,e.qual_rep_legal)):null):null)})):null)),l.a.createElement("br",null),l.a.createElement(W,null,"Capital Social: ",l.a.createElement(H,null,I(r.capital_social)))),l.a.createElement(C,null,l.a.createElement("h1",null,"Situa\xe7\xe3o: ",l.a.createElement(H,null,r.situacao)),l.a.createElement("hr",null),l.a.createElement(W,null,"Data da situa\xe7\xe3o: ",l.a.createElement(H,null,r.data_situacao)),l.a.createElement("br",null),l.a.createElement(W,null,"\xdaltima atualiza\xe7\xe3o: ",l.a.createElement(H,null,r.ultima_atualizacao," "),"Status: ",l.a.createElement(H,null,r.status)))):l.a.createElement(C,null,l.a.createElement(V,null,"Vazio")))}function $(){return l.a.createElement(s.a,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/tecno-consulta",exact:!0,component:L}),l.a.createElement(E.a,{path:"/tecno-consulta/query",component:M})))}var G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.131680c0.chunk.js.map