(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(13),o=t(2),c=t(0),r=t.n(c),u=t(14),l=t.n(u),i=function(e){return r.a.createElement("div",null,"Filter shown with ",r.a.createElement("input",{onChange:e.onChange}))},s=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.name,onChange:e.onChange[0]})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:e.number,onChange:e.onChange[1]})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add"))))},m=function(e){var n=e.persons,t=e.search,a=e.deletePerson;console.log("PERSONS",n);var o=n.filter((function(e){return e.name.toLocaleLowerCase().includes(t)&&e.name.toLocaleLowerCase().indexOf(t)<1}));return console.log("Filtered",o),r.a.createElement("div",null,o.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number," \xa0",r.a.createElement("button",{onClick:function(){return a(e.id)}}," Delete"))})))},f=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t},n)},d=t(3),b=t.n(d),h="api/persons",p=function(){return b.a.get(h).then((function(e){return e.data}))},O=function(e){return b.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e}))};t(37);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}l.a.render(r.a.createElement((function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],w=Object(c.useState)(""),j=Object(o.a)(w,2),y=j[0],S=j[1],C=Object(c.useState)(""),P=Object(o.a)(C,2),N=P[0],k=P[1],D=Object(c.useState)(0),L=Object(o.a)(D,2),T=L[0],x=L[1],A=Object(c.useState)(null),F=Object(o.a)(A,2),I=F[0],J=F[1],R=Object(c.useState)(null),B=Object(o.a)(R,2),M=B[0],U=B[1];Object(c.useEffect)((function(){p().then((function(e){u(e)}))}),[T]);var q=function(e){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{number:y});v(n.id,n).then((function(n){u(t.map((function(t){return t.id!==e?t:n}))),x(T+1)})).catch((function(e){U("Updating was not succesful."),setTimeout((function(){U(null),x(T+1)}),5e3)}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{message:I,className:"success"}),r.a.createElement(f,{message:M,className:"error"}),r.a.createElement(i,{onChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(s,{name:b,number:y,onChange:[function(e){h(e.target.value)},function(e){S(e.target.value)}],onSubmit:function(e){e.preventDefault();var n={name:b,number:y,id:Date.now()};if(t.find((function(e){return n.name.toLowerCase()===e.name.toLowerCase()}))){if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return n.name.toLowerCase()===e.name.toLowerCase()}));console.log(a),q(a),J("".concat(a.name,"'s telephone number was succesfully updated.")),setTimeout((function(){J(null)}),5e3)}}else O(n).then((function(e){console.log(e),u(t.concat(e)),J("".concat(e.name," was succesfully added to contact list.")),setTimeout((function(){J(null)}),5e3),h(""),S("")})).catch((function(e){U("New person could not be added. Make sure name-field & number-field are not empty!"),setTimeout((function(){U(null),x(T+1)}),5e3)}))}}),r.a.createElement("h2",null,"Numbers "),r.a.createElement(m,{persons:t,search:N,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&E(e).then((function(e){console.log("RESPONSE",e),x(T+1),J("".concat(n.name," has been succesfully deleted from contact list.")),setTimeout((function(){J(null)}),5e3)})).catch((function(e){U("Information of ".concat(n.name," has already been removed from the server.")),setTimeout((function(){U(null),x(T+1)}),5e3)}))}}))}),null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.593a0dae.chunk.js.map