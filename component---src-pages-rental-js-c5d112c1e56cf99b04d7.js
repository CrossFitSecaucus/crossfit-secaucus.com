webpackJsonp([0x5b0b3ecf1a7a],{80:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(1),i=l(c),o=a(9),u=(l(o),a(44)),d=l(u),m=function(e){function t(a){n(this,t);var l=s(this,e.call(this,a));return l.state={firstName:"",firstNameValid:!1,lastName:"",lastNameValid:!1,email:"",emailValid:!1,phone:"",phoneValid:!1,text:"",textValid:!1,recaptchaComplete:!1,inflight:!1,successMessage:null,errorMessage:null,formVersion:0},l.successMessageTimeout=null,l.errorMessageTimeout=null,l.successMessage=l.successMessage.bind(l),l.errorMessage=l.errorMessage.bind(l),l.resetForm=l.resetForm.bind(l),l.handleRecaptchaChange=l.handleRecaptchaChange.bind(l),l.handleFirstNameChange=l.handleFirstNameChange.bind(l),l.handleLastNameChange=l.handleLastNameChange.bind(l),l.handleEmailChange=l.handleEmailChange.bind(l),l.handlePhoneChange=l.handlePhoneChange.bind(l),l.handleTextChange=l.handleTextChange.bind(l),l.handleFormSubmission=l.handleFormSubmission.bind(l),l}return r(t,e),t.prototype.resetForm=function(){this.setState({firstName:"",firstNameValid:!1,lastName:"",lastNameValid:!1,email:"",emailValid:!1,phone:"",phoneValid:!1,text:"",textValid:!1,recaptchaComplete:!1,inflight:!1,formVersion:this.state.formVersion+1})},t.prototype.successMessage=function(e){var t=this;null!==this.successMessageTimeout&&(clearTimeout(this.successMessageTimeout),this.successMessageTimeout=null),this.successMessageTimeout=setTimeout(function(){t.setState({successMessage:null})},1e4),this.setState({successMessage:e,errorMessage:null})},t.prototype.errorMessage=function(e){var t=this;null!==this.errorMessageTimeout&&(clearTimeout(this.errorMessageTimeout),this.errorMessageTimeout=null),this.errorMessageTimeout=setTimeout(function(){t.setState({errorMessage:null})},5e3),this.setState({errorMessage:e,successMessage:null})},t.prototype.handleRecaptchaChange=function(e){this.setState({recaptcha:e,recaptchaComplete:null!==e})},t.prototype.handleFirstNameChange=function(e){var t=e.target.value;this.setState({firstName:t,firstNameValid:t.trim().length>0})},t.prototype.handleLastNameChange=function(e){var t=e.target.value;this.setState({lastName:t,lastNameValid:t.trim().length>0})},t.prototype.handleEmailChange=function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=e.target.value;this.setState({email:a,emailValid:t.test(String(a).toLowerCase())})},t.prototype.handlePhoneChange=function(e){var t=String(e.target.value||"").replace(/[^\d().+ -]/g,"").replace(/\s+/," ");this.setState({phone:t,phoneValid:t.replace(/[^\d]/g,"").length>=10})},t.prototype.handleTextChange=function(e){var t=e.target.value,a=t.trim().length>10;this.setState({text:t,textValid:a})},t.prototype.handleFormSubmission=function(e){var t=this;e.preventDefault(),this.setState({inflight:!0});var a=this.state,l=a.firstName,n=a.lastName,s=a.email,r=a.phone,c=a.text,i=a.recaptcha;$.ajax({type:"POST",url:"https://us-central1-cs-site-209414.cloudfunctions.net/contactUsEmail",data:JSON.stringify({firstName:l,lastName:n,email:s,phone:r,text:(c||"")+"\n\n\n"+(this.props.messageAddition||""),recaptcha:i}),success:function(e){t.resetForm(),t.successMessage("Your message was successfully sent!")},dataType:"json",contentType:"application/json"}).fail(function(e){var a=e.responseJSON;t.errorMessage(a.message),window.scrollTo(0,0)}).always(function(){return t.setState({inflight:!1})})},t.prototype.render=function(){var e=this.state,t=e.firstName,a=e.firstNameValid,l=e.lastName,n=e.lastNameValid,s=e.email,r=e.emailValid,c=e.phone,o=e.phoneValid,u=e.text,m=e.textValid,f=e.recaptchaComplete,h=e.inflight,p=e.successMessage,b=e.errorMessage,g=a&&n&&r&&o&&m&&f;return i.default.createElement("div",{className:this.props.noCard?"":"card card-contact"},i.default.createElement("form",{id:"contact-form",method:"post"},this.props.title&&i.default.createElement("div",{className:"card-header card-header-raised card-header-primary text-center"},i.default.createElement("h4",{className:"card-title"},this.props.title||"Contact Us")),i.default.createElement("div",{className:"card-body"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col"},this.props.header||"")),i.default.createElement("div",{className:"row bmd-form-group"},i.default.createElement("div",{className:"col-md-6"},i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&t.length>0?a?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"First name"),i.default.createElement("input",{type:"text",name:"name",className:"form-control",value:t,onChange:this.handleFirstNameChange,disabled:h}),i.default.createElement("span",{className:"material-input"}))),i.default.createElement("div",{className:"col-md-6"},i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&l.length>0?n?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"Last name"),i.default.createElement("input",{type:"text",name:"name",className:"form-control",value:l,onChange:this.handleLastNameChange,disabled:h}),i.default.createElement("span",{className:"material-input"})))),i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&s.length>0?r?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"Email address"),i.default.createElement("input",{type:"text",name:"email",className:"form-control",value:s,onChange:this.handleEmailChange,disabled:h}),i.default.createElement("span",{className:"material-input"})),i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&c.length>0?o?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"Phone number"),i.default.createElement("input",{type:"text",name:"phone",className:"form-control",value:c,onChange:this.handlePhoneChange,disabled:h}),i.default.createElement("span",{className:"material-input"})),i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&u.length>0?m?"has-success":"has-danger":"")},i.default.createElement("label",{htmlFor:"exampleMessage1",className:"bmd-label-floating"},"Your Message ",u.length>0&&!m&&" - Please elaborate on your request."),i.default.createElement("textarea",{name:"message",className:"form-control",id:"exampleMessage1",rows:"6",value:u,onChange:this.handleTextChange,disabled:h}),i.default.createElement("span",{className:"material-input"})),i.default.createElement("div",{className:"row bmd-form-group"},i.default.createElement(d.default,{formVersion:this.state.formVersion,id:"g-recaptcha-contact",sitekey:"6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3",onRecaptchaChange:this.handleRecaptchaChange})),p&&i.default.createElement("div",{className:"alert alert-info"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"alert-icon"},i.default.createElement("i",{className:"material-icons"},"info_outline")),i.default.createElement("b",null,p))),b&&i.default.createElement("div",{className:"alert alert-danger"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"alert-icon"},i.default.createElement("i",{className:"material-icons"},"error_outline")),i.default.createElement("b",null,b)))),i.default.createElement("div",{className:"card-footer pull-right"},i.default.createElement("button",{type:"submit",className:"btn btn-primary pull-right",disabled:!g||h,onClick:this.handleFormSubmission},h?"Sending ...":this.props.submitLabel||"Send Message"))))},t}(i.default.Component);t.default=m,e.exports=t.default},44:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(1),i=l(c),o=a(7),u=l(o),d=function(e){function t(a){return n(this,t),s(this,e.call(this,a))}return r(t,e),t.prototype.componentDidUpdate=function(e){e.formVersion!==this.props.formVersion&&grecaptcha.reset(this._id)},t.prototype.componentDidMount=function(){var e=this,t=function(t){e.props.onRecaptchaChange(null),grecaptcha.reset(e._id)},a=setInterval(function(){"undefined"!=typeof grecaptcha&&"function"==typeof grecaptcha.render&&(clearInterval(a),e._id=grecaptcha.render(e.props.id,{sitekey:e.props.sitekey,callback:e.props.onRecaptchaChange,"expired-callback":t,"error-callback":t}))},500)},t.prototype.render=function(){return i.default.createElement("div",{id:this.props.id,style:{height:100,marginLeft:15}})},t}(i.default.Component);d.propTypes={id:u.default.string.isRequired,sitekey:u.default.string.isRequired,onRecaptchaChange:u.default.func.isRequired},t.default=d,e.exports=t.default},220:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i=a(1),o=l(i),u=a(11),d=a(80),m=l(d),f=function(e){var t=e.selected,a=e.label,l=e.quantity,n=e.cost,s=e.multiple,r=e.onQuantityChange,c=e.onSelectChange;return o.default.createElement("tr",null,o.default.createElement("td",{className:"text-center",style:{width:"3%"}},o.default.createElement("div",{className:"form-check"},o.default.createElement("label",{className:"form-check-label"},o.default.createElement("input",{className:"form-check-input",type:"checkbox",value:"",checked:t,onClick:c}),o.default.createElement("span",{className:"form-check-sign"},o.default.createElement("span",{className:"check"}))))),o.default.createElement("td",null,o.default.createElement("strong",null,a)),o.default.createElement("td",{className:"text-center"},t&&s&&o.default.createElement("button",{type:"button",className:"btn btn-info btn-round btn-just-icon btn-sm",onClick:function(){return r(parseInt(l)-1)}},o.default.createElement("i",{className:"material-icons"},"remove"),o.default.createElement("div",{className:"ripple-container"})),o.default.createElement("span",{style:{padding:"0 10px"}},l),t&&s&&o.default.createElement("button",{type:"button",className:"btn btn-info btn-round btn-just-icon btn-sm",onClick:function(){return r(parseInt(l)+1)}},o.default.createElement("i",{className:"material-icons"},"add"),o.default.createElement("div",{className:"ripple-container"}))),o.default.createElement("td",{className:"text-right"},"$ ",n))},h=function(e){function t(a){n(this,t);var l=s(this,e.call(this,a));return l.state={rentalItems:[{heading:"Kettlebells"},{label:"18 lbs kettlebell",cost:5},{label:"26 lbs kettlebell",cost:5},{label:"35 lbs kettlebell",cost:5},{label:"45 lbs kettlebell",cost:5},{label:"53 lbs kettlebell",cost:5},{heading:"Medicine Balls"},{label:"10 lbs med ball",cost:5},{label:"12 lbs med ball",cost:5},{label:"14 lbs med ball",cost:5},{label:"16 lbs med ball",cost:5},{label:"20 lbs med ball",cost:5},{heading:"Plyo Boxes"},{label:'12" box',cost:5},{label:'20" box',cost:5},{label:'24" box',cost:5},{heading:"Dumbbells"},{label:"10 lbs dumbbell (1)",cost:5,multiple:!0},{label:"15 lbs dumbbell (1)",cost:5,multiple:!0},{label:"20 lbs dumbbell (1)",cost:5,multiple:!0},{label:"30 lbs dumbbell (1)",cost:10,multiple:!0},{label:"45 lbs dumbbell (1)",cost:10,multiple:!0},{label:"50 lbs dumbbell (1)",cost:10,multiple:!1},{label:"70 lbs dumbbell (1)",cost:10,multiple:!0},{heading:"Barbells & Plates"},{label:"5 lbs plates (2)",cost:5},{label:"15 lbs plates (2)",cost:5},{label:"25 lbs plates (2)",cost:10},{label:"35 lbs plates (2)",cost:13},{label:"45 lbs plates (2)",cost:15,multiple:!0},{label:"silencer mats (2)",cost:10},{label:"barbell (45 lbs) with clips",cost:20},{label:"squat rack",cost:15},{label:"bench",cost:15},{heading:"Conditioning/Cardio"},{label:"Concept2 (PM5) rower",cost:100},{label:"Rogue Echo bike",cost:100}]},l._handleSelectChange=l._handleSelectChange.bind(l),l._handleQuantityChange=l._handleQuantityChange.bind(l),l}return r(t,e),t.prototype.componentDidMount=function(){var e=this;window.fetch(this.props.wodUrl).then(function(e){var t=e.status;return t>=200&&t<400?e.text():null}).then(function(t){return e.setState({content:t})}).catch(function(t){return e.setState({failedFetch:!0})})},t.prototype._handleSelectChange=function(e){var t=this;return function(a){var l=t.state.rentalItems.map(function(t,l){return c({},t,l===e?{selected:a.target.checked,quantity:a.target.checked?1:0}:{})});t.setState({rentalItems:l})}},t.prototype._handleQuantityChange=function(e){var t=this;return function(a){var l=t.state.rentalItems.map(function(t,l){return c({},t,l===e?{quantity:a,selected:!!a&&t.selected}:{})});t.setState({rentalItems:l})}},t.prototype.render=function(){var e=this,t=this.state.rentalItems,a=0;return t.forEach(function(e){e.selected&&(a+=e.cost*e.quantity)}),o.default.createElement("main",null,o.default.createElement(u.Helmet,null,o.default.createElement("meta",{charSet:"utf-8"}),o.default.createElement("title",null,"Equipment Rental"),o.default.createElement("meta",{name:"description",content:"Rent barbells, weights, rowers and air bikes."}),o.default.createElement("link",{rel:"canonical",href:"https://crossfit-secaucus.com/rental"})),o.default.createElement("section",{className:"section section-basic"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-8 offset-md-2 col-lg-6 offset-lg-3"},o.default.createElement("h2",{className:"title text-center"},"Equipment Rental"),o.default.createElement("p",null,"During the mandatory shutdown, we are making our training equipment available for rent. Complete this form as a first step to get your hands on what you need."),o.default.createElement("hr",null),o.default.createElement("h3",null,"Rental Overview"),o.default.createElement("ul",null,o.default.createElement("li",null,"Free home delivery within local area for rental of $50+/week"),o.default.createElement("li",null,"Rentals are week-to-week"),o.default.createElement("li",null,"Minimum rental period is 3 weeks"),o.default.createElement("li",null,"Equipment subject to availability. First come, first serve.")),o.default.createElement("hr",null),o.default.createElement("div",{className:"table-responsive"},o.default.createElement("table",{className:"table table-striped"},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null),o.default.createElement("th",null,"Item"),o.default.createElement("th",{className:"text-center"},"Quantity"),o.default.createElement("th",{className:"text-right"},"Cost"))),o.default.createElement("tbody",null,t.map(function(t,a){return t.heading?o.default.createElement("tr",{key:a},o.default.createElement("td",{colSpan:"4"},o.default.createElement("h4",null,o.default.createElement("br",null),t.heading))):o.default.createElement(f,{key:a,label:t.label,cost:t.cost,quantity:t.quantity||"",selected:!!t.selected,multiple:t.multiple,onQuantityChange:e._handleQuantityChange(a),onSelectChange:e._handleSelectChange(a)})}))),a>0&&o.default.createElement("div",null,o.default.createElement("hr",null),o.default.createElement("h3",{className:"text-center"},"Rate for all selected equipment: ",o.default.createElement("strong",null,"$",a,"/week")),o.default.createElement("p",{className:"text-center",style:{padding:0}},o.default.createElement("strong",null,a>=50?"🚚 Free home delivery":"🏢 Pick-up Only")),a>=150&&o.default.createElement("p",{className:"text-center",style:{padding:0}},o.default.createElement("strong",null,"📦 1 free case of 24 FitAid drinks ($72 value)")),o.default.createElement("hr",null)),o.default.createElement(m.default,{messageAddition:t.filter(function(e){return e.selected}).map(function(e){return(e.quantity||1)+"x "+e.label}).join("\n"),noCard:!0,header:o.default.createElement("div",null,o.default.createElement("h3",null,"Rental Request"),o.default.createElement("p",null,"After entering your contact information, please also include the delivery address, and the date and 2 hour time window during which we may deliver the equipment in the message field.")),submitLabel:"Send Rental Request"})))))))},t}(o.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-rental-js-c5d112c1e56cf99b04d7.js.map