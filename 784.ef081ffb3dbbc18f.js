"use strict";(self.webpackChunkstock_tracker=self.webpackChunkstock_tracker||[]).push([[784],{9784:(Hn,ut,l)=>{l.r(ut),l.d(ut,{QuoteModule:()=>Pn});var f=l(6895),R=l(4154),o=l(8256),H=l(4377),ye=l(9646),ct=l(4004),U=l(8275),ve=l(6765),Ce=l(2123);function Ve(n,e){if(1&n&&(o.ynx(0),o.TgZ(1,"div",7)(2,"p"),o._uU(3),o.ALo(4,"number"),o.qZA(),o.TgZ(5,"p"),o._uU(6),o.ALo(7,"currency"),o.qZA()(),o.TgZ(8,"div",7)(9,"p"),o._uU(10),o.ALo(11,"currency"),o.qZA(),o.TgZ(12,"p"),o._uU(13),o.ALo(14,"currency"),o.qZA()(),o.TgZ(15,"div",7),o._UZ(16,"span",8),o.qZA(),o.BQk()),2&n){const t=e.ngIf;let r,i,s,a,d;o.xp6(3),o.hij("Change today ",o.xi3(4,5,null!==(r=null==t?null:t.change)&&void 0!==r?r:0,"1.1-2"),"%"),o.xp6(3),o.hij("Opening price ",o.lcZ(7,8,null!==(i=null==t?null:t.openingPrice)&&void 0!==i?i:0),""),o.xp6(4),o.hij("Current price ",o.lcZ(11,10,null!==(s=null==t?null:t.currentPrice)&&void 0!==s?s:0),""),o.xp6(3),o.hij("High price ",o.lcZ(14,12,null!==(a=null==t?null:t.highPrice)&&void 0!==a?a:0),""),o.xp6(3),o.Q6J("change",null!==(d=null==t?null:t.change)&&void 0!==d?d:0)}}function Ae(n,e){1&n&&(o.TgZ(0,"div"),o._uU(1,"\u23f3 Loading ..."),o.qZA())}const Me=function(n){return[n]};let be=(()=>{class n{constructor(t){this.stockService=t,this.symbol="",this.quote$=(0,ye.of)(new U.pu)}ngOnInit(){this.quote$=this.stockService.getQuote(this.symbol).pipe((0,ct.U)(t=>t??new U.pu))}removeStock(){this.stockService.removeStock(this.symbol)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(H.q))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-quote-card"]],inputs:{symbol:"symbol"},decls:12,vars:8,consts:[[1,"card"],[1,"header"],[3,"symbol"],[3,"click"],[4,"ngIf","ngIfElse"],["loadingQuote",""],[1,"link-button",3,"routerLink"],[1,"quote"],["appTrendIndicator","",3,"change"]],template:function(t,r){if(1&t&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"app-company-name",2),o.TgZ(3,"button",3),o.NdJ("click",function(){return r.removeStock()}),o._uU(4,"X"),o.qZA()(),o.YNc(5,Ve,17,14,"ng-container",4),o.ALo(6,"async"),o.YNc(7,Ae,2,0,"ng-template",null,5,o.W1O),o.TgZ(9,"div")(10,"a",6),o._uU(11," Go to social sentiment details > "),o.qZA()()()),2&t){const i=o.MAs(8);o.xp6(2),o.Q6J("symbol",r.symbol),o.xp6(3),o.Q6J("ngIf",o.lcZ(6,4,r.quote$))("ngIfElse",i),o.xp6(5),o.Q6J("routerLink",o.VKq(6,Me,"/sentiment/"+r.symbol))}},dependencies:[f.O5,R.yS,ve.x,Ce.s,f.Ov,f.JJ,f.H9],styles:[".card[_ngcontent-%COMP%]{display:inline-block;width:550px;margin-right:16px}.header[_ngcontent-%COMP%]{overflow:hidden}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right}.quote[_ngcontent-%COMP%]{display:inline-block;margin-right:32px}"]}),n})();var De=l(2076),Fe=l(9751),Oe=l(4742),Ee=l(8421),Ne=l(7669),we=l(5403),Se=l(3268),Ge=l(1810);let dt=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends dt{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),ke={provide:h,useExisting:(0,o.Gpc)(()=>F),multi:!0},Ie=new o.OlP("CompositionEventMode");let F=(()=>{class n extends dt{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Te(){const n=(0,f.q)()?(0,f.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Ie,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([ke]),o.qOj]}),n})();function p(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function ft(n){return null!=n&&"number"==typeof n.length}const u=new o.OlP("NgValidators"),m=new o.OlP("NgAsyncValidators");function gt(n){return p(n.value)?{required:!0}:null}function O(n){return null}function At(n){return null!=n}function Mt(n){return(0,o.QGY)(n)?(0,De.D)(n):n}function bt(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function Dt(n,e){return e.map(t=>t(n))}function Ft(n){return n.map(e=>function He(n){return!n.validate}(e)?e:t=>e.validate(t))}function j(n){return null!=n?function Ot(n){if(!n)return null;const e=n.filter(At);return 0==e.length?null:function(t){return bt(Dt(t,e))}}(Ft(n)):null}function q(n){return null!=n?function Et(n){if(!n)return null;const e=n.filter(At);return 0==e.length?null:function(t){return function xe(...n){const e=(0,Ne.jO)(n),{args:t,keys:r}=(0,Oe.D)(n),i=new Fe.y(s=>{const{length:a}=t;if(!a)return void s.complete();const d=new Array(a);let v=a,V=a;for(let P=0;P<a;P++){let lt=!1;(0,Ee.Xf)(t[P]).subscribe((0,we.x)(s,Rn=>{lt||(lt=!0,V--),d[P]=Rn},()=>v--,void 0,()=>{(!v||!lt)&&(V||s.next(r?(0,Ge.n)(r,d):d),s.complete())}))}});return e?i.pipe((0,Se.Z)(e)):i}(Dt(t,e).map(Mt)).pipe((0,ct.U)(bt))}}(Ft(n)):null}function Nt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function L(n){return n?Array.isArray(n)?n:[n]:[]}function E(n,e){return Array.isArray(n)?n.includes(e):n===e}function Gt(n,e){const t=L(e);return L(n).forEach(i=>{E(t,i)||t.push(i)}),t}function xt(n,e){return L(e).filter(t=>!E(n,t))}class Bt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=j(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class c extends Bt{get formDirective(){return null}get path(){return null}}class g extends Bt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class kt{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Tt=(()=>{class n extends kt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(g,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),It=(()=>{class n extends kt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const A="VALID",w="INVALID",C="PENDING",M="DISABLED";function Z(n){return(S(n)?n.validators:n)||null}function Rt(n){return Array.isArray(n)?j(n):n||null}function z(n,e){return(S(e)?e.asyncValidators:n)||null}function Ht(n){return Array.isArray(n)?q(n):n||null}function S(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class qt{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=Rt(this._rawValidators),this._composedAsyncValidatorFn=Ht(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===w}get pending(){return this.status==C}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=Rt(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=Ht(e)}addValidators(e){this.setValidators(Gt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Gt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xt(e,this._rawAsyncValidators))}hasValidator(e){return E(this._rawValidators,e)}hasAsyncValidator(e){return E(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===C)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const t=Mt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?w:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(w)?w:A}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){S(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}}class Q extends qt{constructor(e,t,r){super(Z(t),z(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){(function jt(n,e,t){n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})})(this,0,e),Object.keys(e).forEach(r=>{(function Ut(n,e,t){const r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{const i=this.controls[r];i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}function b(n,e){J(n,e),e.valueAccessor.writeValue(n.value),n.disabled&&e.valueAccessor.setDisabledState?.(!0),function ze(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Lt(n,e)})}(n,e),function Je(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Qe(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Lt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Ze(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function B(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function J(n,e){const t=function wt(n){return n._rawValidators}(n);null!==e.validator?n.setValidators(Nt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=function St(n){return n._rawAsyncValidators}(n);null!==e.asyncValidator?n.setAsyncValidators(Nt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();B(e._rawValidators,i),B(e._rawAsyncValidators,i)}function Lt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}const nn={provide:c,useExisting:(0,o.Gpc)(()=>T)},D=(()=>Promise.resolve(null))();let T=(()=>{class n extends c{constructor(t,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new Q({},j(t),q(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){D.then(()=>{const r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),b(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){D.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){D.then(()=>{const r=this._findContainer(t.path),i=new Q({});(function Yt(n,e){J(n,e)})(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){D.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){D.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,function Wt(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,10),o.Y36(m,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([nn]),o.qOj]}),n})();function Zt(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function zt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const Qt=class extends qt{constructor(e=null,t,r){super(Z(t),z(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),S(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=zt(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Zt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Zt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){zt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}},sn={provide:g,useExisting:(0,o.Gpc)(()=>tt)},Kt=(()=>Promise.resolve(null))();let tt=(()=>{class n extends g{constructor(t,r,i,s,a){super(),this._changeDetectorRef=a,this.control=new Qt,this._registered=!1,this.update=new o.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function K(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===F?t=s:function tn(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||t||null}(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function X(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){b(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Kt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);Kt.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function G(n,e){return[...e.path,n]}(t,this._parent):[t]}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c,9),o.Y36(u,10),o.Y36(m,10),o.Y36(h,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([sn]),o.qOj,o.TTD]}),n})(),te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();function de(n){return"number"==typeof n?n:parseInt(n,10)}let y=(()=>{class n{constructor(){this._validator=O}ngOnChanges(t){if(this.inputName in t){const r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):O,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return null!=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const bn={provide:u,useExisting:(0,o.Gpc)(()=>I),multi:!0};let I=(()=>{class n extends y{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=t=>gt}enabled(t){return t}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([bn]),o.qOj]}),n})();const On={provide:u,useExisting:(0,o.Gpc)(()=>st),multi:!0};let st=(()=>{class n extends y{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=t=>de(t),this.createValidator=t=>function vt(n){return e=>p(e.value)||!ft(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("minlength",r._enabled?r.minlength:null)},inputs:{minlength:"minlength"},features:[o._Bn([On]),o.qOj]}),n})();const En={provide:u,useExisting:(0,o.Gpc)(()=>at),multi:!0};let at=(()=>{class n extends y{constructor(){super(...arguments),this.inputName="maxlength",this.normalizeInput=t=>de(t),this.createValidator=t=>function Ct(n){return e=>ft(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},features:[o._Bn([En]),o.qOj]}),n})(),wn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ne]}),n})(),Sn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[wn]}),n})(),xn=(()=>{class n{constructor(t){this.stockService=t,this.stock=new U.Wd}ngOnInit(){}onSubmit(t){const r=t.value;r.symbol=r.symbol.toUpperCase(),this.stockService.addStock(r),t.resetForm()}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(H.q))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-track-stock-form"]],decls:8,vars:1,consts:[[3,"ngSubmit"],["stockForm","ngForm"],["for","symbol"],["id","symbol","type","text","name","symbol","minlength","1","maxlength","5","required","",3,"ngModel"],["type","submit"]],template:function(t,r){if(1&t){const i=o.EpF();o.TgZ(0,"form",0,1),o.NdJ("ngSubmit",function(){o.CHM(i);const a=o.MAs(1);return o.KtG(r.onSubmit(a))}),o.TgZ(2,"label",2),o._uU(3,"Enter the symbol of a stock to track (i.e. AAPL, TSLA, GOOGL)"),o.qZA(),o.TgZ(4,"div"),o._UZ(5,"input",3),o.TgZ(6,"button",4),o._uU(7,"Track Stock"),o.qZA()()()}2&t&&(o.xp6(5),o.Q6J("ngModel",r.stock.symbol))},dependencies:[te,F,Tt,It,I,st,at,tt,T]}),n})();function Bn(n,e){1&n&&o._UZ(0,"app-quote-card",1),2&n&&o.Q6J("symbol",e.$implicit.symbol)}const kn=[{path:"",component:(()=>{class n{constructor(t){this.stockService=t,this.trackBySymbol=(r,i)=>i.symbol}get stocks(){return this.stockService.stocks}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(H.q))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-dashboard"]],decls:2,vars:2,consts:[[3,"symbol",4,"ngFor","ngForOf","ngForTrackBy"],[3,"symbol"]],template:function(t,r){1&t&&(o._UZ(0,"app-track-stock-form"),o.YNc(1,Bn,1,1,"app-quote-card",0)),2&t&&(o.xp6(1),o.Q6J("ngForOf",r.stocks)("ngForTrackBy",r.trackBySymbol))},dependencies:[f.sg,be,xn]}),n})()}];let Tn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[R.Bz.forChild(kn),R.Bz]}),n})();var In=l(4466);let Pn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[f.ez,Sn,Tn,In.m]}),n})()}}]);