(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(84)},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},37:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),i=a.n(c),s=(a(35),a(16)),l=a(7),u=a(8),o=a(10),h=a(9),d=a(11),p=a(86),m=(a(36),a(37),a(17)),f=(a(38),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="Weather: New York...";return this.props.data&&(e="Weather: "+this.props.data.city.name),console.log(this.props),r.a.createElement(p.a,{className:"page-header panel panel-default"},r.a.createElement("h2",null,e))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getData",value:function(){var e=this;if(!this.props.data)return null;var t=[];return this.props.data.list.forEach(function(a){var n=a.dt_txt,r=e.getValue(a);t.push([n,r])}),t}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-default chart-container"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",null,"Temperature")),r.a.createElement("div",{className:"panel-body"},r.a.createElement(m.a,{data:this.getData(),height:"600px",min:null,suffix:"\u2109"})))}},{key:"getValue",value:function(e){return e.main.temp}}]),t}(b),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-default chart-container"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",null,"Humidity")),r.a.createElement("div",{className:"panel-body"},r.a.createElement(m.a,{data:this.getData(),height:"600px",min:null,suffix:"%"})))}},{key:"getValue",value:function(e){return e.main.humidity}}]),t}(b),O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-default chart-container"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",null,"Wind Speed")),r.a.createElement("div",{className:"panel-body"},r.a.createElement(m.a,{data:this.getData(),height:"600px",min:null,suffix:"MPH"})))}},{key:"getValue",value:function(e){return e.wind.speed}}]),t}(b),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a.updateForecast=a.updateForecast.bind(Object(s.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"updateForecast",value:function(){var e=this;fetch("https://thundering-turtle.glitch.me/forecast?city=New+York,ny,us").then(function(e){return e.json()}).then(function(t){e.setState({status:t.status,forecast:t.data})})}},{key:"componentDidMount",value:function(){this.updateForecast(),setInterval(this.updateForecast,3e5)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{data:this.state.forecast}),r.a.createElement(v,{data:this.state.forecast}),r.a.createElement(j,{data:this.state.forecast}),r.a.createElement(O,{data:this.state.forecast}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.179e4d28.chunk.js.map