var Graupl=function(){"use strict";var q=Object.defineProperty;var F=(d,a,_)=>a in d?q(d,a,{enumerable:!0,configurable:!0,writable:!0,value:_}):d[a]=_;var r=(d,a,_)=>F(d,typeof a!="symbol"?a+"":a,_);function d(e,t){try{if(typeof t!="object"){const s=typeof t;throw new TypeError(`Elements given to isValidInstance() must be inside of an object. "${s}" given.`)}for(const s in t)if(!(t[s]instanceof e)){const i=typeof t[s];throw new TypeError(`${s} must be an instance of ${e.name}. "${i}" given.`)}return{status:!0,error:null}}catch(s){return{status:!1,error:s}}}function a(e,t){try{if(typeof t!="object"){const s=typeof t;throw new TypeError(`Values given to isValidType() must be inside of an object. "${s}" given.`)}for(const s in t){const i=typeof t[s];if(i!==e)throw new TypeError(`${s} must be a ${e}. "${i}" given.`)}return{status:!0,error:null}}catch(s){return{status:!1,error:s}}}function _(e){try{if(typeof e!="object"){const t=typeof e;throw new TypeError(`Values given to isQuerySelector() must be inside of an object. "${t}" given.`)}for(const t in e)try{if(e[t]===null)throw new Error;document.querySelector(e[t])}catch{throw new TypeError(`${t} must be a valid query selector. "${e[t]}" given.`)}return{status:!0,error:null}}catch(t){return{status:!1,error:t}}}function h(e){try{if(typeof e!="object"||Array.isArray(e)){const t=typeof e;throw new TypeError(`Values given to isValidClassList() must be inside of an object. "${t}" given.`)}for(const t in e){const s=typeof e[t];if(s!=="string")if(Array.isArray(e[t]))e[t].forEach(i=>{if(typeof i!="string")throw new TypeError(`${t} must be a string or an array of strings. An array containing non-strings given.`)});else throw new TypeError(`${t} must be a string or an array of strings. "${s}" given.`);else{const i={};i[t]=e[t],_(i)}}return{status:!0,error:null}}catch(t){return{status:!1,error:t}}}function y(e,t){if(a("string",{tagName:e}).status&&d(HTMLElement,t).status){const s=e.toLowerCase();let i=!0;for(const n in t)t[n].tagName.toLowerCase()!==s&&(i=!1);return i}else return!1}function u(e,t){e===""||e.length===0||(typeof e=="string"?t.classList.add(e):t.classList.add(...e))}function c(e,t){e===""||e.length===0||(typeof e=="string"?t.classList.remove(e):t.classList.remove(...e))}function m(e){try{const t=e.key||e.keyCode,s={Enter:t==="Enter"||t===13,Space:t===" "||t==="Spacebar"||t===32,Escape:t==="Escape"||t==="Esc"||t===27,ArrowUp:t==="ArrowUp"||t==="Up"||t===38,ArrowRight:t==="ArrowRight"||t==="Right"||t===39,ArrowDown:t==="ArrowDown"||t==="Down"||t===40,ArrowLeft:t==="ArrowLeft"||t==="Left"||t===37,Home:t==="Home"||t===36,End:t==="End"||t===35,Tab:t==="Tab"||t===9};return Object.keys(s).find(i=>s[i]===!0)||""}catch{return""}}function C(e){e.preventDefault(),e.stopPropagation()}class g{constructor({alertElement:t,controllerElement:s=null,showClass:i="show",hideClass:n="hide",transitionClass:l="transitioning",transitionTimer:p=150,isHidden:f=!1,initialize:o=!1}){r(this,"_dom",{alert:null,controller:null});r(this,"_hidden",!1);r(this,"_showClass","");r(this,"_hideClass","");r(this,"_transitionClass","");r(this,"_transitionTimer",150);r(this,"_errors",[]);r(this,"_showEvent",new CustomEvent("grauplAlertShow",{bubbles:!0,detail:{alert:this}}));r(this,"_hideEvent",new CustomEvent("grauplAlertHide",{bubbles:!0,detail:{alert:this}}));this._dom.alert=t,this._dom.controller=s,this._showClass=i||"",this._hideClass=n||"",this._transitionClass=l||"",this._transitionTimer=p,this._hidden=f,o&&this.initialize()}initialize(){try{if(!this._validate())throw new Error(`Graupl Alert: cannot initialize alert. The following errors have been found:
 - ${this.errors.join(`
 - `)}`);this._handleClick(),this._handleKeydown(),this._handleKeyup()}catch(t){console.error(t)}}get dom(){return this._dom}get showClass(){return this._showClass}get hideClass(){return this._hideClass}get transitionClass(){return this._transitionClass}get transitionTimer(){return this._transitionTimer}set showClass(t){h({showClass:t}),this._showClass!==t&&(this._showClass=t)}set hideClass(t){h({hideClass:t}),this._hideClass!==t&&(this._hideClass=t)}set transitionClass(t){h({transitionClass:t}),this._transitionClass!==t&&(this._transitionClass=t)}set transitionTimer(t){a("number",{transitionTimer:t}),this._transitionTimer!==t&&(this._transitionTimer=t)}_validate(){let t=!0,s;if(this._dom.controller!==null?s=d(HTMLElement,{alertElement:this._dom.alert,controllerElement:this._dom.controller}):s=d(HTMLElement,{alertElement:this._dom.alert}),s.status||(this._errors.push(s.message),t=!1),this._showClass!==""){const l=h({showClass:this._showClass});l.status||(this._errors.push(l.message),t=!1)}if(this._hideClass!==""){const l=h({hideClass:this._hideClass});l.status||(this._errors.push(l.message),t=!1)}if(this._transitionClass!==""){const l=h({transitionClass:this._transitionClass});l.status||(this._errors.push(l.message),t=!1)}const i=a("number",{transitionTimer:this._transitionTimer});i.status||(this._errors.push(i.message),t=!1);const n=a("boolean",{isHidden:this._hidden});return n.status||(this._errors.push(n.message),t=!1),t}show(t=!0){this._hidden&&(this.transitionClass!==""?(u(this.transitionClass,this.dom.alert),requestAnimationFrame(()=>{this.hideClass!==""&&c(this.hideClass,this.dom.alert),requestAnimationFrame(()=>{this.showClass!==""&&u(this.showClass,this.dom.alert),requestAnimationFrame(()=>{c(this.transitionClass,this.dom.alert)})})})):(this.showClass!==""&&u(this.showClass,this.dom.alert),this.hideClass!==""&&c(this.hideClass,this.dom.alert)),this._hidden=!1,t&&this.dom.alert.dispatchEvent(this._hideEvent))}hide(t=!0){this._hidden||(this.transitionClass!==""?(u(this.transitionClass,this.dom.alert),requestAnimationFrame(()=>{this.showClass!==""&&c(this.showClass,this.dom.alert),requestAnimationFrame(()=>{this.transitionTimer>0?setTimeout(()=>{this.hideClass!==""&&u(this.hideClass,this.dom.alert),requestAnimationFrame(()=>{c(this.transitionClass,this.dom.alert)})},this.transitionTimer):(this.hideClass!==""&&u(this.hideClass,this.dom.alert),requestAnimationFrame(()=>{c(this.transitionClass,this.dom.alert)}))})})):(this.hideClass!==""&&u(this.hideClass,this.dom.alert),this.showClass!==""&&c(this.showClass,this.dom.alert)),this._hidden=!0,t&&this.dom.alert.dispatchEvent(this._hideEvent))}_handleClick(){this.dom.controller!==null&&this.dom.controller.addEventListener("pointerup",()=>this.hide())}_handleKeydown(){this.dom.controller!==null&&this.dom.controller.addEventListener("keydown",t=>{const s=m(t);(s==="Space"||s==="Enter")&&C(t)})}_handleKeyup(){this.dom.controller!==null&&this.dom.controller.addEventListener("keyup",t=>{const s=m(t);(s==="Space"||s==="Enter")&&this.hide()})}}class b{constructor({carouselElement:t,carouselItemSelector:s=".carousel-item",carouselItemContainerSelector:i=".carousel-item-container",carouselControlSelector:n=".carousel-control",carouselControlContainerSelector:l=".carousel-control-container",carouselTabSelector:p=".carousel-tab",carouselTabContainerSelector:f=".carousel-tab-container",autoplaySelector:o=".autoplay",nextSelector:E=".next",previousSelector:T=".previous",activeClass:I="active",previousClass:v="previous",nextClass:w="next",playClass:A="play",pauseClass:k="pause",autoplay:x=!0,transitionDelay:D=1e4,transitionDuration:L=500,playText:S="Play",pauseText:$="Pause",prefix:M="graupl-",initialize:O=!1}){r(this,"_dom",{carousel:null,carouselItems:[],carouselItemContainer:null,carouselControls:[],carouselControlContainer:null,carouselTabs:[],carouselTabContainer:null,autoplay:null,next:null,previous:null});r(this,"_selectors",{carouselItems:"",carouselItemContainer:"",carouselControls:"",carouselControlContainer:"",carouselTabs:"",carouselTabContainer:"",autoplay:"",next:"",previous:""});r(this,"_activeClass","active");r(this,"_previousClass","previous");r(this,"_nextClass","next");r(this,"_playClass","play");r(this,"_pauseClass","pause");r(this,"_currentItem",0);r(this,"_autoplay",!0);r(this,"_transitionDelay",1e4);r(this,"_transitionDuration",500);r(this,"_playText","Play");r(this,"_pauseText","Pause");r(this,"_currentAction","next");r(this,"_autoplayInterval",null);r(this,"_prefix","graupl-");r(this,"_errors",[]);this._dom.carousel=t,this._selectors.carouselItems=s,this._selectors.carouselItemContainer=i,this._selectors.carouselControls=n,this._selectors.carouselControlContainer=l,this._selectors.carouselTabs=p,this._selectors.carouselTabContainer=f,this._selectors.autoplay=o,this._selectors.next=E,this._selectors.previous=T,this._activeClass=I||"",this._previousClass=v||"",this._nextClass=w||"",this._playClass=A||"",this._pauseClass=k||"",this._autoplay=x,this._transitionDelay=D,this._transitionDuration=L,this._playText=S||"",this._pauseText=$||"",this._prefix=M||"",O&&this.initialize()}initialize(){try{if(!this._validate())throw new Error(`Graupl Carousel: cannot initialize carousel. The following errors have been found:
 - ${this.errors.join(`
 - `)}`);this._setDOMElements(),this._setIds(),this._setAriaAttributes(),this.activateFirstItem(),this._setTransitionDuration(),this._handleAutoplay(),this._handleFocus(),this._handleClick(),this._handleHover(),this._handleKeydown(),this._handleKeyup()}catch(t){console.error(t)}}get dom(){return this._dom}get selectors(){return this._selectors}get activeClass(){return this._activeClass}get previousClass(){return this._previousClass}get nextClass(){return this._nextClass}get playClass(){return this._playClass}get pauseClass(){return this._pauseClass}get currentItem(){return this._currentItem}get currentCarouselItem(){return this.dom.carouselItems[this.currentItem]}get currentCarouselTab(){return this.dom.carouselTabs[this.currentItem]}get autoplay(){return this._autoplay}get transitionDelay(){return this._transitionDelay}get transitionDuration(){return this._transitionDuration}get playText(){return this._playText}get pauseText(){return this._pauseText}get prefix(){return this._prefix}get currentAction(){return this._currentAction}get errors(){return this._errors}set currentItem(t){if(a("number",{value:t}),t===this.currentItem)return;t<0?this._currentItem=0:t>=this.dom.carouselItems.length?this._currentItem=this.dom.carouselItems.length-1:this._currentItem=t,this._dom.carousel.querySelectorAll(this.selectors.carouselTab)&&this.dom.carouselItems.forEach((i,n)=>{i.setAttribute("aria-selected",n===this._currentItem)})}set autoplay(t){a("boolean",{value:t}),this._autoplay!==t&&(this._autoplay=t)}set activeClass(t){h({activeClass:t}),this._activeClass!==t&&(this._activeClass=t)}set previousClass(t){h({previousClass:t}),this._previousClass!==t&&(this._previousClass=t)}set nextClass(t){h({nextClass:t}),this._nextClass!==t&&(this._nextClass=t)}set playClass(t){h({playClass:t}),this._playClass!==t&&(this._playClass=t)}set pauseClass(t){h({pauseClass:t}),this._pauseClass!==t&&(this._pauseClass=t)}set transitionDelay(t){a("number",{value:t}),t!==this.transitionDelay&&t>=0&&(this._currentItem=t)}set transitionDuration(t){a("number",{value:t}),this._transitionDuration!==t&&t>=0&&(this._transitionDuration=t,this._setTransitionDuration())}set playText(t){a("string",{value:t}),this._playText!==t&&(this._playText=t)}set pauseText(t){a("string",{value:t}),this._pauseText!==t&&(this._pauseText=t)}set prefix(t){a("string",{value:t}),this._prefix!==t&&(this._prefix=t)}_validate(){let t=!0;const s=d(HTMLElement,{carousel:this.dom.carousel});s||(this._errors.push(s.message),t=!1);const i=_({carouselItemsSelector:this._selectors.carouselItems,carouselItemContainerSelector:this._selectors.carouselItemContainer,carouselControlsSelector:this._selectors.carouselControls,carouselControlContainerSelector:this._selectors.carouselControlContainer,carouselTabsSelector:this._selectors.carouselTabs,carouselTabContainerSelector:this._selectors.carouselTabContainer,autoplaySelector:this._selectors.autoplay,nextSelector:this._selectors.next,previousSelector:this._selectors.previous});i||(this._errors.push(i.message),t=!1);const n=a("boolean",{autoplay:this.autoplay});n||(this._errors.push(n.message),t=!1);const l=a("number",{transitionDelay:this._transitionDelay});l||(this._errors.push(l.message),t=!1);const p=a("number",{transitionDuration:this._transitionDuration});if(p||(this._errors.push(p.message),t=!1),this._activeClass!==""){const o=h({activeClass:this._activeClass});o||(this._errors.push(o.message),t=!1)}if(this._previousClass!==""){const o=h({previousClass:this._previousClass});o||(this._errors.push(o.message),t=!1)}if(this._nextClass!==""){const o=h({nextClass:this._nextClass});o||(this._errors.push(o.message),t=!1)}if(this._playClass!==""){const o=h({playClass:this._playClass});o||(this._errors.push(o.message),t=!1)}if(this._pauseClass!==""){const o=h({pauseClass:this._pauseClass});o||(this._errors.push(o.message),t=!1)}if(this._playText!==""){const o=a("string",{playText:this._playText});o||(this._errors.push(o.message),t=!1)}if(this._pauseText!==""){const o=a("string",{pauseText:this._pauseText});o||(this._errors.push(o.message),t=!1)}const f=a("string",{prefix:this._prefix});return f||(this._errors.push(f.message),t=!1),t}_setDOMElementType(t,s=this.dom.carousel,i=!0){if(typeof this.selectors[t]=="string"){if(t==="carousel")throw new Error(`Graupl Carousel: "${t}" element cannot be set through _setDOMElementType.`);if(s!==this.dom.carousel&&d(HTMLElement,{base:s}),Array.isArray(this._dom[t])){const l=Array.from(s.querySelectorAll(this.selectors[t])).filter(p=>p.parentElement===s);i?this._dom[t]=l:this._dom[t]=[...this._dom[t],...l]}else{const n=s.querySelector(this.selectors[t]);if(n&&n.parentElement!==s)return;i&&(this._dom[t]=n)}}else throw new Error(`Graupl Carousel: "${t}" is not a valid element type within the carousel.`)}_resetDOMElementType(t){if(typeof this.selectors[t]=="string"){if(t==="carousel")throw new Error(`Graupl Carousel: "${t}" element cannot be reset through _resetDOMElementType.`);Array.isArray(this._dom[t])?this._dom[t]=[]:this._dom[t]=null}else throw new Error(`Graupl Carousel: "${t}" is not a valid element type within the carousel.`)}_setDOMElements(){this._setDOMElementType("carouselItemContainer"),this._setDOMElementType("carouselControlContainer"),this._setDOMElementType("carouselTabContainer"),this.dom.carouselItemContainer&&this._setDOMElementType("carouselItems",this.dom.carouselItemContainer),this.dom.carouselControlContainer&&(this._setDOMElementType("carouselControls",this.dom.carouselControlContainer),this._setDOMElementType("autoplay",this.dom.carouselControlContainer),this._setDOMElementType("next",this.dom.carouselControlContainer),this._setDOMElementType("previous",this.dom.carouselControlContainer)),this._dom.carouselTabContainer&&this._setDOMElementType("carouselTabs",this.dom.carouselTabContainer)}_setIds(){const t=Math.random().toString(36).replace(/[^a-z]+/g,"").substring(0,10);this.dom.carouselItems.forEach((s,i)=>{s.id=s.id||`carousel-item-${t}-${i}`}),this.dom.carouselTabs.forEach((s,i)=>{s.id=s.id||`carousel-tab-${t}-${i}`})}_setAriaAttributes(){!y("section",{carousel:this.dom.carousel})&&!this.dom.carousel.getAttribute("role")!=="region"&&this.dom.carousel.setAttribute("role","group"),this._dom.carousel.setAttribute("aria-roledescription","carousel"),this.dom.carouselTabContainer&&this.dom.carouselTabContainer.setAttribute("role","tablist"),this.dom.carouselTabs.forEach((t,s)=>{y("button",{tab:t})||t.setAttribute("role","button"),t.setAttribute("aria-selected",s===0),t.setAttribute("aria-controls",this.dom.carouselItems[s].id)})}_setInterval(){this._clearInterval(),this._autoplayInterval=setInterval(()=>{this.activateNextItem()},this.transitionDelay)}_clearInterval(){clearInterval(this._autoplayInterval)}_handleAutoplay(){this.autoplay?(u(this.pauseClass,this.dom.autoplay),c(this.playClass,this.dom.autoplay),this.dom.autoplay.setAttribute("aria-label",this.pauseText),this.dom.carousel.setAttribute("aria-live","off"),this._setInterval()):(u(this.playClass,this.dom.autoplay),c(this.pauseClass,this.dom.autoplay),this.dom.autoplay.setAttribute("aria-label",this.playText),this.dom.carousel.setAttribute("aria-live","polite"),this._clearInterval())}_handleFocus(){this.dom.carousel.addEventListener("focusin",()=>{this.autoplay&&this._clearInterval()}),this.dom.carousel.addEventListener("focusout",()=>{this.autoplay&&this._setInterval()})}_handleClick(){this.dom.next.addEventListener("pointerup",()=>{this.activateNextItem()}),this.dom.previous.addEventListener("pointerup",()=>{this.activatePreviousItem()}),this.dom.autoplay.addEventListener("pointerup",()=>{this.toggleAutoplay()}),this.dom.carouselTabs.forEach((t,s)=>{t.addEventListener("pointerup",()=>{this.currentItem>s?this._currentAction="previous":this._currentAction="next",this.activateItem(s)})})}_handleHover(){this.dom.carousel.addEventListener("pointerover",()=>{this.autoplay&&this._clearInterval()}),this.dom.carousel.addEventListener("pointerleave",()=>{this.autoplay&&this._setInterval()})}_handleKeydown(){this.dom.carouselControls.forEach(t=>{t.addEventListener("keydown",s=>{switch(m(s)){case"Space":case"Enter":C(s);break}})}),this.dom.carouselTabs.forEach(t=>{t.addEventListener("keydown",s=>{switch(m(s)){case"Space":case"Enter":C(s);break}})})}_handleKeyup(){this.dom.next.addEventListener("keyup",t=>{switch(m(t)){case"Space":case"Enter":this.activateNextItem(),C(t);break}}),this.dom.previous.addEventListener("keyup",t=>{switch(m(t)){case"Space":case"Enter":this.activatePreviousItem(),C(t);break}}),this.dom.autoplay.addEventListener("keyup",t=>{switch(m(t)){case"Space":case"Enter":this.toggleAutoplay(),C(t);break}}),this.dom.carouselTabs.forEach((t,s)=>{t.addEventListener("keyup",i=>{switch(m(i)){case"Space":case"Enter":this.activateItem(s),C(i);break}})})}_setTransitionDuration(){this.dom.carousel.style.setProperty(`--${this.prefix}carousel-transition-duration`,`${this.transitionDuration}ms`)}activateCurrentItem(){u(this.activeClass,this.currentCarouselItem),this.currentCarouselTab&&(this.currentCarouselTab.setAttribute("aria-selected",!0),u(this.activeClass,this.currentCarouselTab))}deactivateCurrentItem(){c(this.activeClass,this.currentCarouselItem),this.currentCarouselTab&&(this.currentCarouselTab.setAttribute("aria-selected",!1),c(this.activeClass,this.currentCarouselTab))}activateItem(t){const s=this.currentItem;this.dom.carousel.dataset.grauplAction=this._currentAction,this.autoplay&&this._clearInterval(),u(this.previousClass,this.currentCarouselItem),u(this.nextClass,this.dom.carouselItems[t]),requestAnimationFrame(()=>{this.deactivateCurrentItem(),this.currentItem=t,this.activateCurrentItem(),requestAnimationFrame(()=>{setTimeout(()=>{c(this.previousClass,this.dom.carouselItems[s]),c(this.nextClass,this.currentCarouselItem)},this.transitionDuration)})}),this.autoplay&&this._setInterval()}activateFirstItem(){this.activateItem(0)}activateLastItem(){this.activateItem(this.dom.carouselItems.length-1)}activateNextItem(){this._currentAction="next",this.currentItem+1>=this.dom.carouselItems.length?this.activateFirstItem():this.activateItem(this.currentItem+1)}activatePreviousItem(){this._currentAction="previous",this.currentItem-1<0?this.activateLastItem():this.activateItem(this.currentItem-1)}toggleAutoplay(){this.autoplay=!this.autoplay,this._handleAutoplay()}}return{Alert:g,Carousel:b}}();
