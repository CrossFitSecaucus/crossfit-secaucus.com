webpackJsonp([0xa81ad8470e08],{223:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(1),s=n(c),u=a(13),i=function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.state={content:null,failedFetch:!1},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;window.fetch(this.props.wodUrl).then(function(e){var t=e.status;return t>=200&&t<400?e.text():null}).then(function(t){return e.setState({content:t})}).catch(function(t){return e.setState({failedFetch:!0})})},t.prototype.render=function(){var e=this.state,t=e.content,a=e.failedFetch,n=null!=t?s.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):s.default.createElement("h2",null,"No WODs currently posted.");return s.default.createElement("main",null,s.default.createElement(u.Helmet,null,s.default.createElement("meta",{charSet:"utf-8"}),s.default.createElement("title",null,"WOD - Workout of the Day"),s.default.createElement("meta",{name:"description",content:"View a basic summary of today's workout, so you can come to class prepared."}),s.default.createElement("link",{rel:"canonical",href:"https://crossfit-secaucus.com/wod"})),s.default.createElement("section",{className:"section section-basic"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"card bg-info"},s.default.createElement("div",{className:"card-body"},s.default.createElement("h5",{className:"card-category card-category-social"},s.default.createElement("i",{className:"material-icons"},""),s.default.createElement("strong",null," Get the CrossFit Secaucus app today!")),s.default.createElement("h4",{className:"card-title text-center",style:{marginBottom:20}},"View upcoming and historic workouts conventiently on your phone,",s.default.createElement("br",null),"and access your personal set weights for strength training sessions.")),s.default.createElement("div",{className:"card-footer justify-content-center"},s.default.createElement("a",{href:"https://itunes.apple.com/us/app/crossfit-secaucus/id1447284609",className:"btn btn-white btn-round",style:{margin:"0 20px"},target:"_blank"},s.default.createElement("i",{className:"fa fa-apple"}),s.default.createElement("span",{style:{paddingLeft:10}},"Download for iOS")),s.default.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.rokatu.burpee",className:"btn btn-white btn-round",style:{margin:"0 20px"},target:"_blank"},s.default.createElement("i",{className:"material-icons"},"android"),s.default.createElement("span",{style:{paddingLeft:10}},"Download for android")))),s.default.createElement("div",{className:"row d-none"},s.default.createElement("div",{className:"col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"},a?s.default.createElement("iframe",{src:this.props.wodUrl,style:{border:0,width:"100%",height:1e3}}):n,s.default.createElement("hr",null),s.default.createElement("p",{className:"text-muted text-small"},"Workouts are subject to change without prior notice."))))))},t}(s.default.Component);i.defaultProps={wodUrl:"https://storage.googleapis.com/cs-site/wod.html"},t.default=i,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-wod-js-601d5ef2619b3fa6dfce.js.map