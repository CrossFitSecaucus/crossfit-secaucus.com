webpackJsonp([0x5b0b3ecf1a7a],{85:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),i=l(o),c=a(13),u=(l(c),a(86)),d=l(u),m=function(e){function t(a){n(this,t);var l=r(this,e.call(this,a));return l.state={firstName:"",firstNameValid:!1,lastName:"",lastNameValid:!1,email:"",emailValid:!1,phone:"",phoneValid:!1,text:"",textValid:!1,recaptchaComplete:!1,inflight:!1,successMessage:null,errorMessage:null,formVersion:0},l.successMessageTimeout=null,l.errorMessageTimeout=null,l.successMessage=l.successMessage.bind(l),l.errorMessage=l.errorMessage.bind(l),l.resetForm=l.resetForm.bind(l),l.handleRecaptchaChange=l.handleRecaptchaChange.bind(l),l.handleFirstNameChange=l.handleFirstNameChange.bind(l),l.handleLastNameChange=l.handleLastNameChange.bind(l),l.handleEmailChange=l.handleEmailChange.bind(l),l.handlePhoneChange=l.handlePhoneChange.bind(l),l.handleTextChange=l.handleTextChange.bind(l),l.handleFormSubmission=l.handleFormSubmission.bind(l),l}return s(t,e),t.prototype.resetForm=function(){this.setState({firstName:"",firstNameValid:!1,lastName:"",lastNameValid:!1,email:"",emailValid:!1,phone:"",phoneValid:!1,text:"",textValid:!1,recaptchaComplete:!1,inflight:!1,formVersion:this.state.formVersion+1})},t.prototype.successMessage=function(e){var t=this;null!==this.successMessageTimeout&&(clearTimeout(this.successMessageTimeout),this.successMessageTimeout=null),this.successMessageTimeout=setTimeout(function(){t.setState({successMessage:null})},1e4),this.setState({successMessage:e,errorMessage:null})},t.prototype.errorMessage=function(e){var t=this;null!==this.errorMessageTimeout&&(clearTimeout(this.errorMessageTimeout),this.errorMessageTimeout=null),this.errorMessageTimeout=setTimeout(function(){t.setState({errorMessage:null})},5e3),this.setState({errorMessage:e,successMessage:null})},t.prototype.handleRecaptchaChange=function(e){this.setState({recaptcha:e,recaptchaComplete:null!==e})},t.prototype.handleFirstNameChange=function(e){var t=e.target.value;this.setState({firstName:t,firstNameValid:t.trim().length>0})},t.prototype.handleLastNameChange=function(e){var t=e.target.value;this.setState({lastName:t,lastNameValid:t.trim().length>0})},t.prototype.handleEmailChange=function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a=e.target.value;this.setState({email:a,emailValid:t.test(String(a).toLowerCase())})},t.prototype.handlePhoneChange=function(e){var t=String(e.target.value||"").replace(/[^\d().+ -]/g,"").replace(/\s+/," ");this.setState({phone:t,phoneValid:t.replace(/[^\d]/g,"").length>=10})},t.prototype.handleTextChange=function(e){var t=e.target.value,a=t.trim().length>10;this.setState({text:t,textValid:a})},t.prototype.handleFormSubmission=function(e){var t=this;e.preventDefault(),this.setState({inflight:!0});var a=this.state,l=a.firstName,n=a.lastName,r=a.email,s=a.phone,o=a.text,i=a.recaptcha;$.ajax({type:"POST",url:"https://us-central1-cs-site-209414.cloudfunctions.net/contactUsEmail",data:JSON.stringify({firstName:l,lastName:n,email:r,phone:s,text:(o||"")+"\n\n\n"+(this.props.messageAddition||""),recaptcha:i}),success:function(e){t.resetForm(),t.successMessage("Your message was successfully sent!")},dataType:"json",contentType:"application/json"}).fail(function(e){var a=e.responseJSON;t.errorMessage(a.message),window.scrollTo(0,0)}).always(function(){return t.setState({inflight:!1})})},t.prototype.render=function(){var e=this.state,t=e.firstName,a=e.firstNameValid,l=e.lastName,n=e.lastNameValid,r=e.email,s=e.emailValid,o=e.phone,c=e.phoneValid,u=e.text,m=e.textValid,f=e.recaptchaComplete,p=e.inflight,h=e.successMessage,g=e.errorMessage,b=a&&n&&s&&c&&m&&f;return i.default.createElement("div",{className:this.props.noCard?"":"card card-contact"},i.default.createElement("form",{id:"contact-form",method:"post"},this.props.title&&i.default.createElement("div",{className:"card-header card-header-raised card-header-primary text-center"},i.default.createElement("h4",{className:"card-title"},this.props.title||"Contact Us")),i.default.createElement("div",{className:"card-body"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col"},this.props.header||"")),i.default.createElement("div",{className:"row bmd-form-group"},i.default.createElement("div",{className:"col-md-6"},i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!p&&t.length>0?a?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"First name"),i.default.createElement("input",{type:"text",name:"name",className:"form-control",value:t,onChange:this.handleFirstNameChange,disabled:p}),i.default.createElement("span",{className:"material-input"}))),i.default.createElement("div",{className:"col-md-6"},i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!p&&l.length>0?n?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"Last name"),i.default.createElement("input",{type:"text",name:"name",className:"form-control",value:l,onChange:this.handleLastNameChange,disabled:p}),i.default.createElement("span",{className:"material-input"})))),i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!p&&r.length>0?s?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"Email address"),i.default.createElement("input",{type:"text",name:"email",className:"form-control",value:r,onChange:this.handleEmailChange,disabled:p}),i.default.createElement("span",{className:"material-input"})),i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!p&&o.length>0?c?"has-success":"has-danger":"")},i.default.createElement("label",{className:"bmd-label-floating"},"Phone number"),i.default.createElement("input",{type:"text",name:"phone",className:"form-control",value:o,onChange:this.handlePhoneChange,disabled:p}),i.default.createElement("span",{className:"material-input"})),i.default.createElement("div",{className:"form-group label-floating is-filled bmd-form-group "+(!p&&u.length>0?m?"has-success":"has-danger":"")},i.default.createElement("label",{htmlFor:"exampleMessage1",className:"bmd-label-floating"},"Your Message ",u.length>0&&!m&&" - Please elaborate on your request."),i.default.createElement("textarea",{name:"message",className:"form-control",id:"exampleMessage1",rows:"6",value:u,onChange:this.handleTextChange,disabled:p}),i.default.createElement("span",{className:"material-input"})),i.default.createElement("div",{className:"row bmd-form-group"},i.default.createElement(d.default,{formVersion:this.state.formVersion,id:"g-recaptcha-contact",sitekey:"6LcNJmUUAAAAAKJXj6v238WrsmD-Nf4au_XKmxF3",onRecaptchaChange:this.handleRecaptchaChange})),h&&i.default.createElement("div",{className:"alert alert-info"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"alert-icon"},i.default.createElement("i",{className:"material-icons"},"info_outline")),i.default.createElement("b",null,h))),g&&i.default.createElement("div",{className:"alert alert-danger"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"alert-icon"},i.default.createElement("i",{className:"material-icons"},"error_outline")),i.default.createElement("b",null,g)))),i.default.createElement("div",{className:"card-footer pull-right"},i.default.createElement("button",{type:"submit",className:"btn btn-primary pull-right",disabled:!b||p,onClick:this.handleFormSubmission},p?"Sending ...":this.props.submitLabel||"Send Message"))))},t}(i.default.Component);t.default=m,e.exports=t.default},86:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),i=l(o),c=a(7),u=l(c),d=function(e){function t(a){return n(this,t),r(this,e.call(this,a))}return s(t,e),t.prototype.componentDidUpdate=function(e){e.formVersion!==this.props.formVersion&&grecaptcha.reset(this._id)},t.prototype.componentDidMount=function(){var e=this,t=function(t){e.props.onRecaptchaChange(null),grecaptcha.reset(e._id)},a=setInterval(function(){"undefined"!=typeof grecaptcha&&"function"==typeof grecaptcha.render&&(clearInterval(a),e._id=grecaptcha.render(e.props.id,{sitekey:e.props.sitekey,callback:e.props.onRecaptchaChange,"expired-callback":t,"error-callback":t}))},500)},t.prototype.render=function(){return i.default.createElement("div",{id:this.props.id,style:{height:100,marginLeft:15}})},t}(i.default.Component);d.propTypes={id:u.default.string.isRequired,sitekey:u.default.string.isRequired,onRecaptchaChange:u.default.func.isRequired},t.default=d,e.exports=t.default},227:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i=a(1),c=l(i),u=a(20),d=a(85),m=l(d),f=function(e){var t=e.selected,a=e.label,l=e.quantity,n=e.cost,r=e.multiple,s=e.onQuantityChange,o=e.onSelectChange;return c.default.createElement("tr",null,c.default.createElement("td",{className:"text-center",style:{width:"3%"}},c.default.createElement("div",{className:"form-check"},c.default.createElement("label",{className:"form-check-label"},c.default.createElement("input",{className:"form-check-input",type:"checkbox",value:"",checked:t,onClick:o}),c.default.createElement("span",{className:"form-check-sign"},c.default.createElement("span",{className:"check"}))))),c.default.createElement("td",null,c.default.createElement("strong",null,a)),c.default.createElement("td",{className:"text-center"},t&&r&&c.default.createElement("button",{type:"button",className:"btn btn-info btn-round btn-just-icon btn-sm",onClick:function(){return s(parseInt(l)-1)}},c.default.createElement("i",{className:"material-icons"},"remove"),c.default.createElement("div",{className:"ripple-container"})),c.default.createElement("span",{style:{padding:"0 10px"}},l),t&&r&&c.default.createElement("button",{type:"button",className:"btn btn-info btn-round btn-just-icon btn-sm",onClick:function(){return s(parseInt(l)+1)}},c.default.createElement("i",{className:"material-icons"},"add"),c.default.createElement("div",{className:"ripple-container"}))),c.default.createElement("td",{className:"text-right"},"$ ",n))},p=function(e){function t(a){n(this,t);var l=r(this,e.call(this,a));return l.state={rentalItems:[{heading:"Barbells & Plates"},{label:"5 lbs plates (2)",cost:5,deposit:20},{label:"15 lbs plates (2)",cost:7,deposit:60},{label:"25 lbs plates (2)",cost:10,deposit:100},{label:"35 lbs plates (2)",cost:13,deposit:160},{label:"45 lbs plates (2)",cost:16,deposit:180,multiple:!0},{label:"silencer mats (2)",cost:10,deposit:150},{label:"Olympic barbell (45 lbs, 7 ft) with clips",cost:25,deposit:200},{label:"squat rack",cost:15,deposit:160},{label:"bench",cost:15,deposit:200},{heading:"Conditioning/Cardio"},{label:"Concept2 (PM5) rower",cost:100,deposit:400},{label:"Rogue Echo bike",cost:100,deposit:400},{heading:"Kettlebells"},{label:"18 lbs kettlebell",cost:5,deposit:40},{label:"26 lbs kettlebell",cost:5,deposit:50},{label:"53 lbs kettlebell",cost:5,deposit:80}]},l._handleSelectChange=l._handleSelectChange.bind(l),l._handleQuantityChange=l._handleQuantityChange.bind(l),l}return s(t,e),t.prototype.componentDidMount=function(){var e=this;window.fetch(this.props.wodUrl).then(function(e){var t=e.status;return t>=200&&t<400?e.text():null}).then(function(t){return e.setState({content:t})}).catch(function(t){return e.setState({failedFetch:!0})})},t.prototype._handleSelectChange=function(e){var t=this;return function(a){var l=t.state.rentalItems.map(function(t,l){return o({},t,l===e?{selected:a.target.checked,quantity:a.target.checked?1:0}:{})});t.setState({rentalItems:l})}},t.prototype._handleQuantityChange=function(e){var t=this;return function(a){var l=t.state.rentalItems.map(function(t,l){return o({},t,l===e?{quantity:a,selected:!!a&&t.selected}:{})});t.setState({rentalItems:l})}},t.prototype.render=function(){var e=this,t=this.state.rentalItems,a=0,l=0;return t.forEach(function(e){e.selected&&(a+=e.cost*e.quantity,e.deposit&&(l+=e.deposit*e.quantity))}),l>200&&l<500?l=200:l>=500&&(l=400),c.default.createElement("main",null,c.default.createElement(u.Helmet,null,c.default.createElement("meta",{charSet:"utf-8"}),c.default.createElement("title",null,"Equipment Rental"),c.default.createElement("meta",{name:"description",content:"Rent barbells, weights, rowers and air bikes."}),c.default.createElement("link",{rel:"canonical",href:"https://crossfit-secaucus.com/rental"})),c.default.createElement("section",{className:"section section-basic"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-8 offset-md-2 col-lg-6 offset-lg-3"},c.default.createElement("h2",{className:"title text-center"},"Equipment Rental"),c.default.createElement("p",null,"During the mandatory shutdown, we are making our training equipment available for rent. Complete this form as a first step to get your hands on what you need."),c.default.createElement("hr",null),c.default.createElement("h3",null,"Rental Overview"),c.default.createElement("ul",null,c.default.createElement("li",null,"Free home delivery within local area for rental of $100+/week"),c.default.createElement("li",null,"Rentals are week-to-week"),c.default.createElement("li",null,"Minimum rental period is 3 weeks"),c.default.createElement("li",null,"Equipment subject to availability. First come, first serve.")),c.default.createElement("hr",null),c.default.createElement("div",{className:"table-responsive"},c.default.createElement("table",{className:"table table-striped"},c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null),c.default.createElement("th",null,"Item"),c.default.createElement("th",{className:"text-center"},"Quantity"),c.default.createElement("th",{className:"text-right"},"Cost"))),c.default.createElement("tbody",null,t.map(function(t,a){return t.heading?c.default.createElement("tr",{key:a},c.default.createElement("td",{colSpan:"4"},c.default.createElement("h4",null,c.default.createElement("br",null),t.heading))):c.default.createElement(f,{key:a,label:t.label,cost:t.cost,quantity:t.quantity||"",selected:!!t.selected,multiple:t.multiple,onQuantityChange:e._handleQuantityChange(a),onSelectChange:e._handleSelectChange(a)})}))),!a&&c.default.createElement("div",null,c.default.createElement("hr",null),c.default.createElement("h3",{className:"text-center"},"☝️Select desired equipment from the list."),c.default.createElement("hr",null)),a>0&&c.default.createElement("div",null,c.default.createElement("hr",null),c.default.createElement("h3",{className:"text-center"},"Rate for all selected equipment: ",c.default.createElement("strong",null,"$",a,"/week")),c.default.createElement("p",{className:"text-center",style:{padding:0}},c.default.createElement("strong",null,"($"+l+" deposit required.)")),c.default.createElement("hr",null),a<35&&c.default.createElement("p",{className:"text-center",style:{padding:0}},c.default.createElement("strong",null,"⚠️ $35 minimum rental rate not met.")),a>=35&&c.default.createElement("p",{className:"text-center",style:{padding:0}},c.default.createElement("strong",null,a>=100?"🚚 Free home delivery":"🏢 Selection ready for pick-up weekdays at 6pm")),c.default.createElement("hr",null)),c.default.createElement(m.default,{messageAddition:t.filter(function(e){return e.selected}).map(function(e){return(e.quantity||1)+"x "+e.label+" ($"+e.cost+"/item)"}).join("\n")+("\n\nWeekly Rate: $"+a+" / Deposit $"+l),noCard:!0,header:c.default.createElement("div",null,c.default.createElement("h3",null,'"How do I get my hands on the equipment?"'),c.default.createElement("p",null,c.default.createElement("strong",null,"Let us know you're interested by selecting the equipment you want to rent above and submitting the form below.")),c.default.createElement("p",null,"For even faster service, after completing the form please ",c.default.createElement("a",{href:"http://register.crossfit-secaucus.com/",target:"_blank"},"create an account for yourself")," on our website and add your credit card information. (You won't get charged until you agree to the rental terms.)"),c.default.createElement("p",null,"You may pick up your equipment the same day (if your application is received before 3pm) or the next day at 6pm.")),submitLabel:"Send Rental Request"})))))))},t}(c.default.Component);t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-rental-js-cfe06af4cd85ae1dcb34.js.map