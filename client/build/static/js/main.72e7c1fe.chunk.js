(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(42)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),c=n.n(s),i=(n(30),n(22)),l=n(5),o=(n(31),n(6)),u=n(7),d=n(9),m=n(8),h=n(10);n(32),n(33);var p=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-default",role:"navigation"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("h1",{className:"navbar-brand"},"DrunkPass"))))},v=n(14),b=n.n(v),f=n(21),E=(n(35),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/random.php",e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({drinks:n.drinks[0],loading:!1}),console.log(n);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,this.state.loading||!this.state.drinks?r.a.createElement("div",null,"loading..."):r.a.createElement("div",null,r.a.createElement("div",{className:"card get-drink-div"},r.a.createElement("div",{className:"card-header"},"Drink UWU"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.drinks.strDrink),r.a.createElement("p",{className:"card-text"},"Category: ",this.state.drinks.strCategory),r.a.createElement("img",{src:this.state.drinks.strDrinkThumb,alt:"drink"}),r.a.createElement("p",{className:"card-text"},"Ingredients: ",this.state.drinks.strIngredient1," ",this.state.drinks.strIngredient2," ",this.state.drinks.strIngredient3," ",this.state.drinks.strIngredient4," ",this.state.drinks.strIngredient5," ",this.state.drinks.strIngredient6),r.a.createElement("p",{className:"card-text"},"Instructions: ",this.state.drinks.strInstructions),r.a.createElement("button",{className:"btn btn-mod"},"Drink and type")))))}}]),t}(a.Component)),g=n(36),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){if(e.preventDefault(),console.log("".concat(n.state.userInput)),console.log("".concat(n.state.word)),n.state.word===n.state.userInput)return console.log("yes"),r.a.createElement("div",null,E);console.log("no")},n.handleInputChange=function(e){n.setState({userInput:e.target.value})},n.word=function(){var e=g();n.setState({word:e}),console.log(e)},n.state={score:0,word:"",userInput:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.word()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{className:"card game-div"},r.a.createElement("div",{className:"card-header"},"Type the Word"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.word),r.a.createElement("input",{className:"form-control form-control-lg",type:"text",value:this.state.userInput,onChange:this.handleInputChange,placeholder:"Type the Word"}),r.a.createElement("button",{type:"submit",className:"btn btn-mod"},"Submit")))))}}]),t}(a.Component),w=(n(37),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Landing Page"))}}]),t}(r.a.Component));var y=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(l.a,{path:"/game",component:k}),r.a.createElement(l.a,{path:"/",exact:!0,component:w})))};c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.72e7c1fe.chunk.js.map