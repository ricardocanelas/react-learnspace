(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{25:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n(2),u=n(4),o=n(3),i=n(5),l=n(0),s=n.n(l),m=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).state={counter:0},n.increment=function(){n.setState(function(e){return{counter:e.counter+1}})},n.decrement=function(){n.setState(function(e){return{counter:e.counter-1}})},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.increment,t=this.decrement;return s.a.createElement("div",{className:"counter-container"},this.props.render({increment:e,decrement:t,counter:this.state.counter}))}}]),t}(s.a.Component),f=m,d=(r=function(e){return s.a.createElement("div",null,"Counter: ",e.counter,s.a.createElement("button",{onClick:e.increment},"+1"))},function(e){return s.a.createElement(m,{render:function(t){return s.a.createElement(r,Object.assign({},e,t))}})}),b=(n(25),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(f,{render:function(e){var t=e.counter,n=e.increment;return s.a.createElement("div",null,"Counter: ",t,s.a.createElement("button",{onClick:n},"Add +1"))}}),s.a.createElement(d,null))}}]),t}(l.Component));t.default=b}}]);
//# sourceMappingURL=1.4325edb7.chunk.js.map