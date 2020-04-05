webpackJsonp([0x5b0b3ecf1a7a],{80:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),c=l(o),i=a(9),u=(l(i),a(44)),m=l(u),d=function(e){function t(a){n(this,t);var l=s(this,e.call(this,a));return l.state={firstName:"",firstNameValid:!1,lastName:"",lastNameValid:!1,email:"",emailValid:!1,phone:"",phoneValid:!1,text:"",textValid:!1,recaptchaComplete:!1,inflight:!1,successMessage:null,errorMessage:null,formVersion:0},l.successMessageTimeout=null,l.errorMessageTimeout=null,l.successMessage=l.successMessage.bind(l),l.errorMessage=l.errorMessage.bind(l),l.resetForm=l.resetForm.bind(l),l.handleRecaptchaChange=l.handleRecaptchaChange.bind(l),l.handleFirstNameChange=l.handleFirstNameChange.bind(l),l.handleLastNameChange=l.handleLastNameChange.bind(l),l.handleEmailChange=l.handleEmailChange.bind(l),l.handlePhoneChange=l.handlePhoneChange.bind(l),l.handleTextChange=l.handleTextChange.bind(l),l.handleFormSubmission=l.handleFormSubmission.bind(l),l}return r(t,e),t.prototype.resetForm=function(){this.setState({firstName:"",firstNameValid:!1,lastName:"",lastNameValid:!1,email:"",emailValid:!1,phone:"",phoneValid:!1,text:"",textValid:!1,recaptchaComplete:!1,inflight:!1,formVersion:this.state.formVersion+1})},t.prototype.successMessage=function(e){var t=this;null!==this.successMessageTimeout&&(clearTimeout(this.successMessageTimeout),this.successMessageTimeout=null),this.successMessageTimeout=setTimeout(function(){t.setState({successMessage:null})},1e4),this.setState({successMessage:e,errorMessage:null})},t.prototype.errorMessage=function(e){var t=this;null!==this.errorMessageTimeout&&(clearTimeout(this.errorMessageTimeout),this.errorMessageTimeout=null),this.errorMessageTimeout=setTimeout(function(){t.setState({errorMessage:null})},5e3),this.setState({errorMessage:e,successMessage:null})},t.prototype.handleRecaptchaChange=function(e){this.setState({recaptcha:e,recaptchaComplete:null!==e})},t.prototype.handleFirstNameChange=function(e){var t=e.target.value;this.setState({firstName:t,firstNameValid:t.trim().length>0})},t.prototype.handleLastNameChange=function(e){var t=e.target.value;this.setState({lastName:t,lastNameValid:t.trim().length>0})},t.prototype.handleEmailChange=function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=e.target.value;this.setState({email:a,emailValid:t.test(String(a).toLowerCase())})},t.prototype.handlePhoneChange=function(e){var t=String(e.target.value||"").replace(/[^\d().+ -]/g,"").replace(/\s+/," ");this.setState({phone:t,phoneValid:t.replace(/[^\d]/g,"").length>=10})},t.prototype.handleTextChange=function(e){var t=e.target.value,a=t.trim().length>10;this.setState({text:t,textValid:a})},t.prototype.handleFormSubmission=function(e){var t=this;e.preventDefault(),this.setState({inflight:!0});var a=this.state,l=a.firstName,n=a.lastName,s=a.email,r=a.phone,o=a.text,c=a.recaptcha;$.ajax({type:"POST",url:"https://us-central1-cs-site-209414.cloudfunctions.net/contactUsEmail",data:JSON.stringify({firstName:l,lastName:n,email:s,phone:r,text:(o||"")+"\n\n\n"+(this.props.messageAddition||""),recaptcha:c}),success:function(e){t.resetForm(),t.successMessage("Your message was successfully sent!")},dataType:"json",contentType:"application/json"}).fail(function(e){var a=e.responseJSON;t.errorMessage(a.message),window.scrollTo(0,0)}).always(function(){return t.setState({inflight:!1})})},t.prototype.render=function(){var e=this.state,t=e.firstName,a=e.firstNameValid,l=e.lastName,n=e.lastNameValid,s=e.email,r=e.emailValid,o=e.phone,i=e.phoneValid,u=e.text,d=e.textValid,f=e.recaptchaComplete,h=e.inflight,p=e.successMessage,g=e.errorMessage,b=a&&n&&r&&i&&d&&f;return c.default.createElement("div",{className:this.props.noCard?"":"card card-contact"},c.default.createElement("form",{id:"contact-form",method:"post"},this.props.title&&c.default.createElement("div",{className:"card-header card-header-raised card-header-primary text-center"},c.default.createElement("h4",{className:"card-title"},this.props.title||"Contact Us")),c.default.createElement("div",{className:"card-body"},p&&c.default.createElement("div",{className:"alert alert-info"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"alert-icon"},c.default.createElement("i",{className:"material-icons"},"info_outline")),c.default.createElement("b",null,p))),g&&c.default.createElement("div",{className:"alert alert-danger"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"alert-icon"},c.default.createElement("i",{className:"material-icons"},"error_outline")),c.default.createElement("b",null,g))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col"},this.props.header||"")),c.default.createElement("div",{className:"row bmd-form-group"},c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&t.length>0?a?"has-success":"has-danger":"")},c.default.createElement("label",{className:"bmd-label-floating"},"First name"),c.default.createElement("input",{type:"text",name:"name",className:"form-control",value:t,onChange:this.handleFirstNameChange,disabled:h}),c.default.createElement("span",{className:"material-input"}))),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&l.length>0?n?"has-success":"has-danger":"")},c.default.createElement("label",{className:"bmd-label-floating"},"Last name"),c.default.createElement("input",{type:"text",name:"name",className:"form-control",value:l,onChange:this.handleLastNameChange,disabled:h}),c.default.createElement("span",{className:"material-input"})))),c.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&s.length>0?r?"has-success":"has-danger":"")},c.default.createElement("label",{className:"bmd-label-floating"},"Email address"),c.default.createElement("input",{type:"text",name:"email",className:"form-control",value:s,onChange:this.handleEmailChange,disabled:h}),c.default.createElement("span",{className:"material-input"})),c.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&o.length>0?i?"has-success":"has-danger":"")},c.default.createElement("label",{className:"bmd-label-floating"},"Phone number"),c.default.createElement("input",{type:"text",name:"phone",className:"form-control",value:o,onChange:this.handlePhoneChange,disabled:h}),c.default.createElement("span",{className:"material-input"})),c.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!h&&u.length>0?d?"has-success":"has-danger":"")},c.default.createElement("label",{htmlFor:"exampleMessage1",className:"bmd-label-floating"},"Your Message ",u.length>0&&!d&&" - Please elaborate on your request."),c.default.createElement("textarea",{name:"message",className:"form-control",id:"exampleMessage1",rows:"6",value:u,onChange:this.handleTextChange,disabled:h}),c.default.createElement("span",{className:"material-input"})),c.default.createElement("div",{className:"row bmd-form-group"},c.default.createElement(m.default,{formVersion:this.state.formVersion,id:"g-recaptcha-contact",sitekey:"6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3",onRecaptchaChange:this.handleRecaptchaChange}))),c.default.createElement("div",{className:"card-footer pull-right"},c.default.createElement("button",{type:"submit",className:"btn btn-primary pull-right",disabled:!b||h,onClick:this.handleFormSubmission},h?"Sending ...":this.props.submitLabel||"Send Message"))))},t}(c.default.Component);t.default=d,e.exports=t.default},44:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),c=l(o),i=a(7),u=l(i),m=function(e){function t(a){return n(this,t),s(this,e.call(this,a))}return r(t,e),t.prototype.componentDidUpdate=function(e){e.formVersion!==this.props.formVersion&&grecaptcha.reset(this._id)},t.prototype.componentDidMount=function(){var e=this,t=function(t){e.props.onRecaptchaChange(null),grecaptcha.reset(e._id)},a=setInterval(function(){"undefined"!=typeof grecaptcha&&"function"==typeof grecaptcha.render&&(clearInterval(a),e._id=grecaptcha.render(e.props.id,{sitekey:e.props.sitekey,callback:e.props.onRecaptchaChange,"expired-callback":t,"error-callback":t}))},500)},t.prototype.render=function(){return c.default.createElement("div",{id:this.props.id,style:{height:100,marginLeft:15}})},t}(c.default.Component);m.propTypes={id:u.default.string.isRequired,sitekey:u.default.string.isRequired,onRecaptchaChange:u.default.func.isRequired},t.default=m,e.exports=t.default},219:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c=a(1),i=l(c),u=a(13),m=a(80),d=l(m),f=function(e){var t=e.selected,a=e.label,l=e.quantity,n=e.cost,s=e.multiple,r=e.onQuantityChange,o=e.onSelectChange;return i.default.createElement("tr",null,i.default.createElement("td",{className:"text-center",style:{width:"3%"}},i.default.createElement("div",{className:"form-check"},i.default.createElement("label",{className:"form-check-label"},i.default.createElement("input",{className:"form-check-input",type:"checkbox",value:"",checked:t,onClick:o}),i.default.createElement("span",{className:"form-check-sign"},i.default.createElement("span",{className:"check"}))))),i.default.createElement("td",null,i.default.createElement("strong",null,a)),i.default.createElement("td",{className:"text-center"},t&&s&&i.default.createElement("button",{type:"button",className:"btn btn-info btn-round btn-just-icon btn-sm",onClick:function(){return r(parseInt(l)-1)}},i.default.createElement("i",{className:"material-icons"},"remove"),i.default.createElement("div",{className:"ripple-container"})),i.default.createElement("span",{style:{padding:"0 10px"}},l),t&&s&&i.default.createElement("button",{type:"button",className:"btn btn-info btn-round btn-just-icon btn-sm",onClick:function(){return r(parseInt(l)+1)}},i.default.createElement("i",{className:"material-icons"},"add"),i.default.createElement("div",{className:"ripple-container"}))),i.default.createElement("td",{className:"text-right"},"$ ",n))},h=function(e){function t(a){n(this,t);var l=s(this,e.call(this,a));return l.state={rentalItems:[{label:"18 lbs kettlebell",cost:5},{label:"26 lbs kettlebell",cost:5},{label:"35 lbs kettlebell",cost:5},{label:"53 lbs kettlebell",cost:5},{label:"15 lbs plates (set)",cost:5},{label:"25 lbs plates (set)",cost:10},{label:"45 lbs plates (set)",cost:15,multiple:!0},{label:"barbell with clips",cost:20},{label:"squat rack",cost:15},{label:"Concept2 rower",cost:100},{label:"Rogue Echo bike",cost:100}]},l._handleSelectChange=l._handleSelectChange.bind(l),l._handleQuantityChange=l._handleQuantityChange.bind(l),l}return r(t,e),t.prototype.componentDidMount=function(){var e=this;window.fetch(this.props.wodUrl).then(function(e){var t=e.status;return t>=200&&t<400?e.text():null}).then(function(t){return e.setState({content:t})}).catch(function(t){return e.setState({failedFetch:!0})})},t.prototype._handleSelectChange=function(e){var t=this;return function(a){var l=t.state.rentalItems.map(function(t,l){return o({},t,l===e?{selected:a.target.checked,quantity:a.target.checked?1:0}:{})});t.setState({rentalItems:l})}},t.prototype._handleQuantityChange=function(e){var t=this;return function(a){var l=t.state.rentalItems.map(function(t,l){return o({},t,l===e?{quantity:a,selected:!!a&&t.selected}:{})});t.setState({rentalItems:l})}},t.prototype.render=function(){var e=this,t=this.state.rentalItems,a=0;return t.forEach(function(e){e.selected&&(a+=e.cost*e.quantity)}),i.default.createElement("main",null,i.default.createElement(u.Helmet,null,i.default.createElement("meta",{charSet:"utf-8"}),i.default.createElement("title",null,"WOD - Workout of the Day"),i.default.createElement("meta",{name:"description",content:"View a basic summary of today's workout, so you can come to class prepared."}),i.default.createElement("link",{rel:"canonical",href:"https://crossfit-secaucus.com/wod"})),i.default.createElement("section",{className:"section section-basic"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-md-8 offset-md-2 col-lg-6 offset-lg-3"},i.default.createElement("h2",{className:"title text-center"},"Equipment Rental"),i.default.createElement("p",null,"During the mandatory shutdown, we are making our training equipment available for rent. Complete this form as a first step to get your hands on what you need."),i.default.createElement("hr",null),i.default.createElement("h3",null,"Rental Overview"),i.default.createElement("ul",null,i.default.createElement("li",null,"Free home delivery and pick-up within local area"),i.default.createElement("li",null,"Rentals are week-to-week"),i.default.createElement("li",null,"Minimum rental period is 3 weeks"),i.default.createElement("li",null,"Equipment subject to availability. First come, first serve.")),i.default.createElement("hr",null),i.default.createElement("div",{className:"table-responsive"},i.default.createElement("table",{className:"table table-striped"},i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"Selected"),i.default.createElement("th",null,"Item Name"),i.default.createElement("th",{className:"text-center"},"Quantity"),i.default.createElement("th",{className:"text-right"},"Weekly Cost"))),i.default.createElement("tbody",null,t.map(function(t,a){var l=t.label,n=t.cost,s=t.selected,r=t.quantity,o=t.multiple;return i.default.createElement(f,{key:a,label:l,cost:n,quantity:r||"",selected:!!s,multiple:o,onQuantityChange:e._handleQuantityChange(a),onSelectChange:e._handleSelectChange(a)})}))),a>0&&i.default.createElement("h3",{className:"text-right"},"$",a,"/week"),i.default.createElement(d.default,{noCard:!0,submitLabel:"Send Rental Request",messageAddition:t.filter(function(e){return e.selected}).map(function(e){return(e.quantity||1)+"x "+e.label}).join("\n")})))))))},t}(i.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-rental-js-83f7964ebf41b3f6d478.js.map