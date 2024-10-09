var Accordion=function(){"use strict";var F=Object.defineProperty;var q=(a,s,d)=>s in a?F(a,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[s]=d;var n=(a,s,d)=>q(a,typeof s!="symbol"?s+"":s,d);function a(e,t){try{if(typeof t!="object"){const i=typeof t;throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${i}" given.`)}for(const i in t)if(!(t[i]instanceof e)){const o=typeof t[i];throw new TypeError(`${i} must be an instance of ${e.name}. "${o}" given.`)}return{status:!0,error:null}}catch(i){return{status:!1,error:i}}}function s(e,t){try{if(typeof t!="object"){const i=typeof t;throw new TypeError(`Values given to isValidType() must be inside of an object. "${i}" given.`)}for(const i in t){const o=typeof t[i];if(o!==e)throw new TypeError(`${i} must be a ${e}. "${o}" given.`)}return{status:!0,error:null}}catch(i){return{status:!1,error:i}}}function d(e){try{if(typeof e!="object"){const t=typeof e;throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${t}" given.`)}for(const t in e)try{if(e[t]===null)throw new Error;document.querySelector(e[t])}catch{throw new TypeError(`${t} must be a valid query selector. "${e[t]}" given.`)}return{status:!0,error:null}}catch(t){return{status:!1,error:t}}}function g(e){try{if(typeof e!="object"||Array.isArray(e)){const t=typeof e;throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${t}" given.`)}for(const t in e){const i=typeof e[t];if(i!=="string")if(Array.isArray(e[t]))e[t].forEach(o=>{if(typeof o!="string")throw new TypeError(`${t} must be a string or an array of strings. An array containing non-strings given.`)});else throw new TypeError(`${t} must be a string or an array of strings. "${i}" given.`);else{const o={};o[t]=e[t],d(o)}}return{status:!0,error:null}}catch(t){return{status:!1,error:t}}}function p(e,t){if(s("string",{tagName:e}).status&&a(HTMLElement,t).status){const i=e.toLowerCase();let o=!0;for(const r in t)t[r].tagName.toLowerCase()!==i&&(o=!1);return o}else return!1}function u(e,t){e===""||e.length===0||(typeof e=="string"?t.classList.add(e):t.classList.add(...e))}function m(e,t){e===""||e.length===0||(typeof e=="string"?t.classList.remove(e):t.classList.remove(...e))}class _{constructor({accordionItemElement:t,accordionItemToggleElement:i,accordionItemContentElement:o,parentAccordion:r=null}){n(this,"_dom",{item:null,toggle:null,content:null});n(this,"_elements",{parentAccordion:null});n(this,"_open",!1);n(this,"_locked",!1);n(this,"_showEvent",new CustomEvent("grauplAccordionItemShow",{bubbles:!0,detail:{item:this}}));n(this,"_hideEvent",new CustomEvent("grauplAccordionItemHide",{bubbles:!0,detail:{item:this}}));this._dom.item=t,this._dom.toggle=i,this._dom.content=o,this._elements.parentAccordion=r}initialize(){this._setIds(),this._setAriaAttributes(),this.dom.toggle.getAttribute("aria-expanded")==="true"?this.show(!1,!1):this.hide(!1,!1)}get dom(){return this._dom}get elements(){return this._elements}get isOpen(){return this._open}get isLocked(){return this._locked}set isOpen(t){s("boolean",{value:t}),this._open!==t&&(this._open=t)}_setIds(){const{key:t}=this.elements.parentAccordion,i=this.elements.parentAccordion.dom.accordionItems.indexOf(this.dom.item),o=this.dom.item.id||`accordion-item-${t}-${i}`,r=this.dom.toggle.id||`accordion-item-toggle-${t}-${i}`,c=this.dom.content.id||`accordion-item-content-${t}-${i}`;this.dom.item.id=o,this.dom.toggle.id=r,this.dom.content.id=c}_setAriaAttributes(){p("button",{toggle:this.dom.toggle})||this.dom.toggle.setAttribute("role","button"),this.dom.toggle.getAttribute("aria-expanded")!=="true"&&this.dom.toggle.setAttribute("aria-expanded","false"),this.dom.toggle.setAttribute("aria-controls",this.dom.content.id),p("section",{content:this.dom.content})||this.dom.content.setAttribute("role","region"),this.dom.content.setAttribute("aria-labelledby",this.dom.toggle.id)}show(t=!0,i=!0){if(this._open)return;const{closeClass:o,openClass:r,transitionClass:c,openDuration:l}=this.elements.parentAccordion;this.dom.toggle.setAttribute("aria-expanded","true"),i&&c!==""?(u(c,this.dom.item),requestAnimationFrame(()=>{m(o,this.dom.item),this.dom.item.style.height=`${this.dom.toggle.getBoundingClientRect().height}px`,requestAnimationFrame(()=>{u(r,this.dom.item),this.dom.item.style.height=`${this.dom.toggle.getBoundingClientRect().height+this.dom.content.getBoundingClientRect().height}px`,requestAnimationFrame(()=>{setTimeout(()=>{m(c,this.dom.item),this.dom.item.style.height=""},l)})})})):(u(r,this.dom.item),m(o,this.dom.item)),this._open=!0,this.elements.parentAccordion.allowMultipleExpand||(this.unlockSiblings(),this.closeSiblings()),this.elements.parentAccordion.allowNoExpand||(this.elements.parentAccordion.openAccordionItems.length<=1?this.lock():this.unlockSiblings()),t&&this.dom.item.dispatchEvent(this._showEvent)}hide(t=!0,i=!0){if(!this._open||!this.elements.parentAccordion.allowNoExpand&&this.elements.parentAccordion.openAccordionItems.length<=1)return;const{closeClass:o,openClass:r,transitionClass:c,closeDuration:l}=this.elements.parentAccordion;this.dom.toggle.setAttribute("aria-expanded","false"),i&&c!==""?(u(c,this.dom.item),this.dom.item.style.height=`${this.dom.item.getBoundingClientRect().height}px`,requestAnimationFrame(()=>{m(r,this.dom.item),this.dom.item.style.height=`${this.dom.toggle.getBoundingClientRect().height}px`,requestAnimationFrame(()=>{u(o,this.dom.item),requestAnimationFrame(()=>{setTimeout(()=>{m(c,this.dom.item),this.dom.item.style.height=""},l)})})})):(u(o,this.dom.item),m(r,this.dom.item)),this._open=!1,!this.elements.parentAccordion.allowNoExpand&&this.elements.parentAccordion.openAccordionItems.length===1&&this.elements.parentAccordion.openAccordionItems[0].lock(),t&&this.dom.item.dispatchEvent(this._hideEvent)}toggle(){this.isOpen?this.hide():this.show()}focus(){this.dom.toggle.focus()}blur(){this.dom.toggle.blur()}lock(){this._locked=!0,this.dom.toggle.setAttribute("disabled","true")}unlock(){this._locked=!1,this.dom.toggle.removeAttribute("disabled")}closeSiblings(){this.elements.parentAccordion&&this.elements.parentAccordion.elements.accordionItems.forEach(t=>{t!==this&&t.hide()})}unlockSiblings(){this.elements.parentAccordion&&this.elements.parentAccordion.elements.accordionItems.forEach(t=>{t!==this&&t.unlock()})}}function w(e){try{const t=e.key||e.keyCode,i={Enter:t==="Enter"||t===13,Space:t===" "||t==="Spacebar"||t===32,Escape:t==="Escape"||t==="Esc"||t===27,ArrowUp:t==="ArrowUp"||t==="Up"||t===38,ArrowRight:t==="ArrowRight"||t==="Right"||t===39,ArrowDown:t==="ArrowDown"||t==="Down"||t===40,ArrowLeft:t==="ArrowLeft"||t==="Left"||t===37,Home:t==="Home"||t===36,End:t==="End"||t===35,Tab:t==="Tab"||t===9};return Object.keys(i).find(o=>i[o]===!0)||""}catch{return""}}function h(e){e.preventDefault(),e.stopPropagation()}function C(e=null){window.Graupl=window.Graupl||{},s("string",{type:e})&&(window.Graupl[e]=window.Graupl[e]||{})}function E(e=null){return s("string",{type:e})?window.Graupl[e]:window.Graupl}function A(e,t={}){s("string",{type:e})&&s("object",{data:t})&&(window.Graupl[e]=t)}function b(e){s("string",{type:e})&&(window.Graupl[e]={})}function I(e,t,i){s("string",{type:e,key:t})&&(window.Graupl[e][t]=i)}function D(e,t){return s("string",{type:e,key:t})?window.Graupl[e][t]:null}function k(e,t){s("string",{type:e,key:t})&&delete window.Graupl[e][t]}const y={initializeStorage:C,getStorage:E,setStorage:A,clearStorage:b,pushToStorage:I,getFromStorage:D,removeFromStorage:k};class ${constructor({accordionElement:t,accordionItemSelector:i=".accordion-item",accordionItemToggleSelector:o=".accordion-item-toggle",accordionItemContentSelector:r=".accordion-item-content",openClass:c="show",closeClass:l="hide",transitionClass:f="transitioning",transitionDuration:x=300,openDuration:T=-1,closeDuration:S=-1,optionalKeySupport:L=!1,allowMultipleExpand:M=!0,allowNoExpand:G=!0,key:K=null,initialize:O=!1,prefix:j="am-"}){n(this,"_dom",{accordion:null,accordionItems:[],accordionItemToggles:[],accordionItemContents:[]});n(this,"_domLock",["accordion"]);n(this,"_selectors",{accordionItems:"",accordionItemToggles:"",accordionItemContents:""});n(this,"_elements",{accordionItems:[]});n(this,"_openClass","show");n(this,"_closeClass","hide");n(this,"_transitionClass","transitioning");n(this,"_transitionDuration",300);n(this,"_openDuration",-1);n(this,"_closeDuration",-1);n(this,"_optionalKeySupport",!0);n(this,"_allowMultipleExpand",!0);n(this,"_allowNoExpand",!0);n(this,"_currentChild",0);n(this,"_prefix","graupl-");n(this,"_key","");n(this,"_errors",[]);this._dom.accordion=t,this._selectors.accordionItems=i,this._selectors.accordionItemToggles=o,this._selectors.accordionItemContents=r,this._openClass=c||"",this._closeClass=l||"",this._transitionClass=f||"",this._transitionDuration=x,this._openDuration=T,this._closeDuration=S,this._optionalKeySupport=L,this._allowMultipleExpand=M,this._allowNoExpand=G,this._prefix=j||"",this._key=K||"",O&&this.initialize()}initialize(){try{if(!this._validate())throw new Error(`Graupl Accordion: cannot initialize accordion. The following errors have been found:
 - ${this.errors.join(`
 - `)}`);this._generateKey(),this._setDOMElements(),this._setIds(),this._createChildElements(),this._handleFocus(),this._handleClick(),this._handleKeydown(),this._handleKeyup(),this._setTransitionDurations(),y.initializeStorage("accordions"),y.pushToStorage("accordions",this.dom.accordion.id,this)}catch(t){console.error(t)}}get openClass(){return this._openClass}get closeClass(){return this._closeClass}get transitionClass(){return this._transitionClass}get transitionDuration(){return this._transitionDuration}get openDuration(){return this._openDuration===-1?this.transitionDuration:this._openDuration}get closeDuration(){return this._closeDuration===-1?this.transitionDuration:this._closeDuration}get currentChild(){return this._currentChild}get dom(){return this._dom}get elements(){return this._elements}get selectors(){return this._selectors}get optionalKeySupport(){return this._optionalKeySupport}get currentAccordionItem(){return this.elements.accordionItems[this.currentChild]}get openAccordionItems(){return this.elements.accordionItems.filter(t=>t.isOpen)}get allowMultipleExpand(){return this._allowMultipleExpand}get allowNoExpand(){return this._allowNoExpand}get prefix(){return this._prefix}get key(){return this._key}get errors(){return this._errors}set openClass(t){g({openClass:t}),this._openClass!==t&&(this._openClass=t)}set closeClass(t){g({closeClass:t}),this._closeClass!==t&&(this._closeClass=t)}set transitionClass(t){g({transitionClass:t}),this._transitionClass!==t&&(this._transitionClass=t)}set transitionDuration(t){s("number",{value:t}),this._transitionDuration!==t&&(this._transitionDuration=t,this._setTransitionDurations())}set openDuration(t){s("number",{value:t}),this._openDuration!==t&&(this._openDuration=t,this._setTransitionDurations())}set closeDuration(t){s("number",{value:t}),this._closeDuration!==t&&(this._closeDuration=t,this._setTransitionDurations())}set currentChild(t){s("number",{value:t}),this._currentChild!==t&&t>=0&&t<this.elements.accordionItems.length&&(this._currentChild=t)}set accordionItems(t){s("object",{value:t}),t!=null&&t.isArray()&&t.every(i=>i instanceof _)&&(this._accordionItems=t)}set allowMultipleExpand(t){s("boolean",{value:t}),this._allowMultipleExpand!==t&&(this._allowMultipleExpand=t)}set allowNoExpand(t){s("boolean",{value:t}),this._allowNoExpand!==t&&(this._allowNoExpand=t)}set prefix(t){s("string",{value:t}),this._prefix!==t&&(this._prefix=t)}set key(t){s("string",{value:t}),this._key!==t&&(this._key=t)}_setDOMElementType(t,i=this.dom.accordion,o=!0,r=!1){if(typeof this.selectors[t]=="string"){if(this._domLock.includes(t))throw new Error(`Graupl ${this.contructor.name}: "${t}" element cannot be set through _setDOMElementType.`);i!==this.dom.accordion&&a(HTMLElement,{base:i});const l=Array.from(i.querySelectorAll(this.selectors[t])).filter(f=>r?f.parentElement===i:!0);o?this._dom[t]=l:this._dom[t]=[...this._dom[t],...l]}else throw new Error(`Graupl ${this.contructor.name}: "${t}" is not a valid element type.`)}_resetDOMElementType(t){if(typeof this.selectors[t]=="string"){if(this._domLock.includes(t))throw new Error(`Graupl ${this.contructor.name}: "${t}" element cannot be reset through _resetDOMElementType.`);Array.isArray(this._dom[t])?this._dom[t]=[]:this._dom[t]=null}else throw new Error(`Graupl ${this.contructor.name}: "${t}" is not a valid element type.`)}_setDOMElements(){this._setDOMElementType("accordionItems"),this._resetDOMElementType("accordionItemToggles"),this.dom.accordionItems.forEach(t=>{this._setDOMElementType("accordionItemToggles",t,!1),this._setDOMElementType("accordionItemContents",t,!1)})}_generateKey(t=!1){(this.key===""||t)&&(this.key=Math.random().toString(36).replace(/[^a-z]+/g,"").substring(0,10))}_setIds(){const t=this.dom.accordion.getAttribute("id")||`accordion-${this.key}`;this.dom.accordion.setAttribute("id",t)}_createChildElements(){this.dom.accordionItems.forEach((t,i)=>{const o=new _({accordionItemElement:t,accordionItemToggleElement:this.dom.accordionItemToggles[i],accordionItemContentElement:this.dom.accordionItemContents[i],parentAccordion:this});o.initialize(),this.elements.accordionItems.push(o)})}_validate(){return!0}_handleFocus(){this.elements.accordionItems.forEach((t,i)=>{t.dom.toggle.addEventListener("focus",()=>{this.currentChild=i})})}_handleClick(){this.elements.accordionItems.forEach((t,i)=>{t.dom.toggle.addEventListener("pointerup",()=>{this.currentChild=i,t.toggle()})})}_handleKeydown(){this.dom.accordionItemToggles.forEach(t=>{t.addEventListener("keydown",i=>{const o=w(i);(["Space","Enter"].includes(o)||this.optionalKeySupport&&["ArrowDown","ArrowUp","Home","End"].includes(o))&&h(i)})})}_handleKeyup(){this.dom.accordionItemToggles.forEach(t=>{t.addEventListener("keyup",i=>{const o=w(i);switch(o){case"Space":case"Enter":h(i),this.currentAccordionItem.toggle();break}if(this.optionalKeySupport)switch(o){case"Home":h(i),this.focusFirstChild();break;case"End":h(i),this.focusLastChild();break;case"ArrowDown":h(i),this.focusNextChild();break;case"ArrowUp":h(i),this.focusPreviousChild();break}})})}_setTransitionDurations(){this.dom.accordion.style.setProperty(`--${this.prefix}accordion-transition-duration`,`${this.transitionDuration}ms`),this.dom.accordion.style.setProperty(`--${this.prefix}accordion-open-transition-duration`,`${this.openDuration}ms`),this.dom.accordion.style.setProperty(`--${this.prefix}accordion-close-transition-duration`,`${this.closeDuration}ms`)}focusCurrentChild(){this.currentChild!==-1&&this.currentAccordionItem.focus()}focusChild(t){this.blurCurrentChild(),this.currentChild=t,this.focusCurrentChild()}focusFirstChild(){this.focusChild(0)}focusLastChild(){this.focusChild(this.elements.accordionItems.length-1)}focusNextChild(){this.currentChild<this.elements.accordionItems.length-1?this.focusChild(this.currentChild+1):this.focusCurrentChild()}focusPreviousChild(){this.currentChild>0?this.focusChild(this.currentChild-1):this.focusCurrentChild()}blurCurrentChild(){this.currentChild!==-1&&this.currentAccordionItem.blur()}}return $}();