(this.webpackJsonptask3=this.webpackJsonptask3||[]).push([[0],{2:function(e,t,r){e.exports={button:"randomQuote_button__nS8q4",quoteWrapper:"randomQuote_quoteWrapper__iLeIR",quoteTitle:"randomQuote_quoteTitle__1CaIm",quote:"randomQuote_quote__3kIoK",quoteAuthor:"randomQuote_quoteAuthor__2OeIb"}},23:function(e,t,r){e.exports=r(47)},47:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),u=r(16),o=r.n(u),c=r(6),s=r.n(c),i=r(17),l=r(18),m=r(19),p=r(22),h=r(21),v=r(20),d=r.n(v),f=r(2),b=r.n(f),q=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).state={quotes:{},currentQuote:"quote will appear here...",previousQuote:"",currentAuthor:"",previousAuthor:"",currentNum:0,previousNum:0,current:!0,counter:0},e.getRandomNum=function(){var t=e.state,r=t.quotes,n=t.currentNum,a=t.previousNum,u=(t.currentQuote,t.previousQuote,t.counter),o=Math.floor(102*Math.random());e.setState({previousNum:n}),e.setState({currentNum:o}),e.setState({currentQuote:r[n].quote}),e.setState({currentAuthor:r[n].author}),console.log(r[n]),u>=1&&(e.setState({previousQuote:r[a].quote}),e.setState({previousAuthor:r[a].author})),e.setState({current:!0}),e.setState({counter:u+1})},e.getPrevious=function(){var t=e.state.previousQuote;""===t?e.setState({current:!0}):""!==t&&e.setState({current:!1})},e.getCurrent=function(){e.setState({current:!0})},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").catch((function(e){console.log(e.response)}));case 2:t=e.sent,this.setState({quotes:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.currentQuote,n=t.currentAuthor,u=t.previousQuote,o=t.previousAuthor,c=t.current,s=t.counter;return a.a.createElement("div",null,a.a.createElement("button",{className:b.a.button,onClick:function(){return e.getRandomNum()}},"Get new random quote"),c?a.a.createElement("button",{className:b.a.button,onClick:function(){return e.getPrevious()}},"Show previous quote"):a.a.createElement("button",{className:b.a.button,onClick:function(){return e.getCurrent()}},"Show current quote"),a.a.createElement("div",null,0===s?"":c?a.a.createElement("h3",{className:b.a.quoteTitle},"this is current quote..."):a.a.createElement("h3",{className:b.a.quoteTitle},"this is previous quote..."),a.a.createElement("div",{className:b.a.quoteWrapper},a.a.createElement("h3",{className:b.a.quote},c?r:u),a.a.createElement("h3",{className:b.a.quoteAuthor},0===s?"":"~ ".concat(c?n:o)))))}}]),r}(n.Component),_=r(5),g=r.n(_);var N=function(){return a.a.createElement("div",{className:g.a.background},a.a.createElement("div",{className:g.a.wrapper},a.a.createElement("header",null,a.a.createElement("h3",{className:g.a.header},"Random quoter")),a.a.createElement(q,null)))},E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,48)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,u=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),u(e),o(e)}))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null)),document.getElementById("root")),E()},5:function(e,t,r){e.exports={background:"App_background__1vORB",wrapper:"App_wrapper__HY2Gl",header:"App_header__2Qnpk"}}},[[23,1,2]]]);
//# sourceMappingURL=main.d1a8e502.chunk.js.map