goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_43264 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_43264(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_43265 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_43265(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41715 = coll;
var G__41716 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41715,G__41716) : shadow.dom.lazy_native_coll_seq.call(null,G__41715,G__41716));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__41754 = arguments.length;
switch (G__41754) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__41771 = arguments.length;
switch (G__41771) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__41789 = arguments.length;
switch (G__41789) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__41812 = arguments.length;
switch (G__41812) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__41828 = arguments.length;
switch (G__41828) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__41855 = arguments.length;
switch (G__41855) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e41877){if((e41877 instanceof Object)){
var e = e41877;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41877;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__41910 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41912 = null;
var count__41913 = (0);
var i__41914 = (0);
while(true){
if((i__41914 < count__41913)){
var el = chunk__41912.cljs$core$IIndexed$_nth$arity$2(null,i__41914);
var handler_43289__$1 = ((function (seq__41910,chunk__41912,count__41913,i__41914,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41910,chunk__41912,count__41913,i__41914,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43289__$1);


var G__43290 = seq__41910;
var G__43291 = chunk__41912;
var G__43292 = count__41913;
var G__43293 = (i__41914 + (1));
seq__41910 = G__43290;
chunk__41912 = G__43291;
count__41913 = G__43292;
i__41914 = G__43293;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41910);
if(temp__5753__auto__){
var seq__41910__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41910__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41910__$1);
var G__43294 = cljs.core.chunk_rest(seq__41910__$1);
var G__43295 = c__4679__auto__;
var G__43296 = cljs.core.count(c__4679__auto__);
var G__43297 = (0);
seq__41910 = G__43294;
chunk__41912 = G__43295;
count__41913 = G__43296;
i__41914 = G__43297;
continue;
} else {
var el = cljs.core.first(seq__41910__$1);
var handler_43298__$1 = ((function (seq__41910,chunk__41912,count__41913,i__41914,el,seq__41910__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41910,chunk__41912,count__41913,i__41914,el,seq__41910__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43298__$1);


var G__43299 = cljs.core.next(seq__41910__$1);
var G__43300 = null;
var G__43301 = (0);
var G__43302 = (0);
seq__41910 = G__43299;
chunk__41912 = G__43300;
count__41913 = G__43301;
i__41914 = G__43302;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__41964 = arguments.length;
switch (G__41964) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__41996 = cljs.core.seq(events);
var chunk__41997 = null;
var count__41998 = (0);
var i__41999 = (0);
while(true){
if((i__41999 < count__41998)){
var vec__42014 = chunk__41997.cljs$core$IIndexed$_nth$arity$2(null,i__41999);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43305 = seq__41996;
var G__43306 = chunk__41997;
var G__43307 = count__41998;
var G__43308 = (i__41999 + (1));
seq__41996 = G__43305;
chunk__41997 = G__43306;
count__41998 = G__43307;
i__41999 = G__43308;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41996);
if(temp__5753__auto__){
var seq__41996__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41996__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41996__$1);
var G__43309 = cljs.core.chunk_rest(seq__41996__$1);
var G__43310 = c__4679__auto__;
var G__43311 = cljs.core.count(c__4679__auto__);
var G__43312 = (0);
seq__41996 = G__43309;
chunk__41997 = G__43310;
count__41998 = G__43311;
i__41999 = G__43312;
continue;
} else {
var vec__42027 = cljs.core.first(seq__41996__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42027,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43313 = cljs.core.next(seq__41996__$1);
var G__43314 = null;
var G__43315 = (0);
var G__43316 = (0);
seq__41996 = G__43313;
chunk__41997 = G__43314;
count__41998 = G__43315;
i__41999 = G__43316;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__42040 = cljs.core.seq(styles);
var chunk__42041 = null;
var count__42042 = (0);
var i__42043 = (0);
while(true){
if((i__42043 < count__42042)){
var vec__42060 = chunk__42041.cljs$core$IIndexed$_nth$arity$2(null,i__42043);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43317 = seq__42040;
var G__43318 = chunk__42041;
var G__43319 = count__42042;
var G__43320 = (i__42043 + (1));
seq__42040 = G__43317;
chunk__42041 = G__43318;
count__42042 = G__43319;
i__42043 = G__43320;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42040);
if(temp__5753__auto__){
var seq__42040__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42040__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42040__$1);
var G__43321 = cljs.core.chunk_rest(seq__42040__$1);
var G__43322 = c__4679__auto__;
var G__43323 = cljs.core.count(c__4679__auto__);
var G__43324 = (0);
seq__42040 = G__43321;
chunk__42041 = G__43322;
count__42042 = G__43323;
i__42043 = G__43324;
continue;
} else {
var vec__42071 = cljs.core.first(seq__42040__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42071,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43325 = cljs.core.next(seq__42040__$1);
var G__43326 = null;
var G__43327 = (0);
var G__43328 = (0);
seq__42040 = G__43325;
chunk__42041 = G__43326;
count__42042 = G__43327;
i__42043 = G__43328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__42090_43329 = key;
var G__42090_43330__$1 = (((G__42090_43329 instanceof cljs.core.Keyword))?G__42090_43329.fqn:null);
switch (G__42090_43330__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_43333 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_43333,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_43333,"aria-");
}
})())){
el.setAttribute(ks_43333,value);
} else {
(el[ks_43333] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__42137){
var map__42138 = p__42137;
var map__42138__$1 = cljs.core.__destructure_map(map__42138);
var props = map__42138__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42138__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__42140 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__42145 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__42145,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__42145;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__42151 = arguments.length;
switch (G__42151) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__42163){
var vec__42165 = p__42163;
var seq__42166 = cljs.core.seq(vec__42165);
var first__42167 = cljs.core.first(seq__42166);
var seq__42166__$1 = cljs.core.next(seq__42166);
var nn = first__42167;
var first__42167__$1 = cljs.core.first(seq__42166__$1);
var seq__42166__$2 = cljs.core.next(seq__42166__$1);
var np = first__42167__$1;
var nc = seq__42166__$2;
var node = vec__42165;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42173 = nn;
var G__42174 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42173,G__42174) : create_fn.call(null,G__42173,G__42174));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42177 = nn;
var G__42178 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42177,G__42178) : create_fn.call(null,G__42177,G__42178));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__42179 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42179,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42179,(1),null);
var seq__42184_43348 = cljs.core.seq(node_children);
var chunk__42185_43349 = null;
var count__42186_43350 = (0);
var i__42187_43351 = (0);
while(true){
if((i__42187_43351 < count__42186_43350)){
var child_struct_43352 = chunk__42185_43349.cljs$core$IIndexed$_nth$arity$2(null,i__42187_43351);
var children_43353 = shadow.dom.dom_node(child_struct_43352);
if(cljs.core.seq_QMARK_(children_43353)){
var seq__42263_43354 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43353));
var chunk__42265_43355 = null;
var count__42266_43356 = (0);
var i__42267_43357 = (0);
while(true){
if((i__42267_43357 < count__42266_43356)){
var child_43358 = chunk__42265_43355.cljs$core$IIndexed$_nth$arity$2(null,i__42267_43357);
if(cljs.core.truth_(child_43358)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43358);


var G__43359 = seq__42263_43354;
var G__43360 = chunk__42265_43355;
var G__43361 = count__42266_43356;
var G__43362 = (i__42267_43357 + (1));
seq__42263_43354 = G__43359;
chunk__42265_43355 = G__43360;
count__42266_43356 = G__43361;
i__42267_43357 = G__43362;
continue;
} else {
var G__43363 = seq__42263_43354;
var G__43364 = chunk__42265_43355;
var G__43365 = count__42266_43356;
var G__43366 = (i__42267_43357 + (1));
seq__42263_43354 = G__43363;
chunk__42265_43355 = G__43364;
count__42266_43356 = G__43365;
i__42267_43357 = G__43366;
continue;
}
} else {
var temp__5753__auto___43367 = cljs.core.seq(seq__42263_43354);
if(temp__5753__auto___43367){
var seq__42263_43368__$1 = temp__5753__auto___43367;
if(cljs.core.chunked_seq_QMARK_(seq__42263_43368__$1)){
var c__4679__auto___43369 = cljs.core.chunk_first(seq__42263_43368__$1);
var G__43370 = cljs.core.chunk_rest(seq__42263_43368__$1);
var G__43371 = c__4679__auto___43369;
var G__43372 = cljs.core.count(c__4679__auto___43369);
var G__43373 = (0);
seq__42263_43354 = G__43370;
chunk__42265_43355 = G__43371;
count__42266_43356 = G__43372;
i__42267_43357 = G__43373;
continue;
} else {
var child_43374 = cljs.core.first(seq__42263_43368__$1);
if(cljs.core.truth_(child_43374)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43374);


var G__43376 = cljs.core.next(seq__42263_43368__$1);
var G__43377 = null;
var G__43378 = (0);
var G__43379 = (0);
seq__42263_43354 = G__43376;
chunk__42265_43355 = G__43377;
count__42266_43356 = G__43378;
i__42267_43357 = G__43379;
continue;
} else {
var G__43380 = cljs.core.next(seq__42263_43368__$1);
var G__43381 = null;
var G__43382 = (0);
var G__43383 = (0);
seq__42263_43354 = G__43380;
chunk__42265_43355 = G__43381;
count__42266_43356 = G__43382;
i__42267_43357 = G__43383;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43353);
}


var G__43384 = seq__42184_43348;
var G__43385 = chunk__42185_43349;
var G__43386 = count__42186_43350;
var G__43387 = (i__42187_43351 + (1));
seq__42184_43348 = G__43384;
chunk__42185_43349 = G__43385;
count__42186_43350 = G__43386;
i__42187_43351 = G__43387;
continue;
} else {
var temp__5753__auto___43388 = cljs.core.seq(seq__42184_43348);
if(temp__5753__auto___43388){
var seq__42184_43389__$1 = temp__5753__auto___43388;
if(cljs.core.chunked_seq_QMARK_(seq__42184_43389__$1)){
var c__4679__auto___43390 = cljs.core.chunk_first(seq__42184_43389__$1);
var G__43391 = cljs.core.chunk_rest(seq__42184_43389__$1);
var G__43392 = c__4679__auto___43390;
var G__43393 = cljs.core.count(c__4679__auto___43390);
var G__43394 = (0);
seq__42184_43348 = G__43391;
chunk__42185_43349 = G__43392;
count__42186_43350 = G__43393;
i__42187_43351 = G__43394;
continue;
} else {
var child_struct_43395 = cljs.core.first(seq__42184_43389__$1);
var children_43397 = shadow.dom.dom_node(child_struct_43395);
if(cljs.core.seq_QMARK_(children_43397)){
var seq__42284_43398 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43397));
var chunk__42286_43399 = null;
var count__42287_43400 = (0);
var i__42288_43401 = (0);
while(true){
if((i__42288_43401 < count__42287_43400)){
var child_43402 = chunk__42286_43399.cljs$core$IIndexed$_nth$arity$2(null,i__42288_43401);
if(cljs.core.truth_(child_43402)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43402);


var G__43403 = seq__42284_43398;
var G__43404 = chunk__42286_43399;
var G__43405 = count__42287_43400;
var G__43406 = (i__42288_43401 + (1));
seq__42284_43398 = G__43403;
chunk__42286_43399 = G__43404;
count__42287_43400 = G__43405;
i__42288_43401 = G__43406;
continue;
} else {
var G__43407 = seq__42284_43398;
var G__43408 = chunk__42286_43399;
var G__43409 = count__42287_43400;
var G__43410 = (i__42288_43401 + (1));
seq__42284_43398 = G__43407;
chunk__42286_43399 = G__43408;
count__42287_43400 = G__43409;
i__42288_43401 = G__43410;
continue;
}
} else {
var temp__5753__auto___43411__$1 = cljs.core.seq(seq__42284_43398);
if(temp__5753__auto___43411__$1){
var seq__42284_43412__$1 = temp__5753__auto___43411__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42284_43412__$1)){
var c__4679__auto___43413 = cljs.core.chunk_first(seq__42284_43412__$1);
var G__43414 = cljs.core.chunk_rest(seq__42284_43412__$1);
var G__43415 = c__4679__auto___43413;
var G__43416 = cljs.core.count(c__4679__auto___43413);
var G__43417 = (0);
seq__42284_43398 = G__43414;
chunk__42286_43399 = G__43415;
count__42287_43400 = G__43416;
i__42288_43401 = G__43417;
continue;
} else {
var child_43418 = cljs.core.first(seq__42284_43412__$1);
if(cljs.core.truth_(child_43418)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43418);


var G__43419 = cljs.core.next(seq__42284_43412__$1);
var G__43420 = null;
var G__43421 = (0);
var G__43422 = (0);
seq__42284_43398 = G__43419;
chunk__42286_43399 = G__43420;
count__42287_43400 = G__43421;
i__42288_43401 = G__43422;
continue;
} else {
var G__43423 = cljs.core.next(seq__42284_43412__$1);
var G__43424 = null;
var G__43425 = (0);
var G__43426 = (0);
seq__42284_43398 = G__43423;
chunk__42286_43399 = G__43424;
count__42287_43400 = G__43425;
i__42288_43401 = G__43426;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43397);
}


var G__43427 = cljs.core.next(seq__42184_43389__$1);
var G__43428 = null;
var G__43429 = (0);
var G__43430 = (0);
seq__42184_43348 = G__43427;
chunk__42185_43349 = G__43428;
count__42186_43350 = G__43429;
i__42187_43351 = G__43430;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__42328 = cljs.core.seq(node);
var chunk__42329 = null;
var count__42330 = (0);
var i__42331 = (0);
while(true){
if((i__42331 < count__42330)){
var n = chunk__42329.cljs$core$IIndexed$_nth$arity$2(null,i__42331);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43438 = seq__42328;
var G__43439 = chunk__42329;
var G__43440 = count__42330;
var G__43441 = (i__42331 + (1));
seq__42328 = G__43438;
chunk__42329 = G__43439;
count__42330 = G__43440;
i__42331 = G__43441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42328);
if(temp__5753__auto__){
var seq__42328__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42328__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42328__$1);
var G__43442 = cljs.core.chunk_rest(seq__42328__$1);
var G__43443 = c__4679__auto__;
var G__43444 = cljs.core.count(c__4679__auto__);
var G__43445 = (0);
seq__42328 = G__43442;
chunk__42329 = G__43443;
count__42330 = G__43444;
i__42331 = G__43445;
continue;
} else {
var n = cljs.core.first(seq__42328__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43446 = cljs.core.next(seq__42328__$1);
var G__43447 = null;
var G__43448 = (0);
var G__43449 = (0);
seq__42328 = G__43446;
chunk__42329 = G__43447;
count__42330 = G__43448;
i__42331 = G__43449;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__42360 = arguments.length;
switch (G__42360) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__42371 = arguments.length;
switch (G__42371) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__42406 = arguments.length;
switch (G__42406) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43473 = arguments.length;
var i__4865__auto___43474 = (0);
while(true){
if((i__4865__auto___43474 < len__4864__auto___43473)){
args__4870__auto__.push((arguments[i__4865__auto___43474]));

var G__43476 = (i__4865__auto___43474 + (1));
i__4865__auto___43474 = G__43476;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__42446_43478 = cljs.core.seq(nodes);
var chunk__42447_43479 = null;
var count__42448_43480 = (0);
var i__42449_43481 = (0);
while(true){
if((i__42449_43481 < count__42448_43480)){
var node_43483 = chunk__42447_43479.cljs$core$IIndexed$_nth$arity$2(null,i__42449_43481);
fragment.appendChild(shadow.dom._to_dom(node_43483));


var G__43484 = seq__42446_43478;
var G__43485 = chunk__42447_43479;
var G__43486 = count__42448_43480;
var G__43487 = (i__42449_43481 + (1));
seq__42446_43478 = G__43484;
chunk__42447_43479 = G__43485;
count__42448_43480 = G__43486;
i__42449_43481 = G__43487;
continue;
} else {
var temp__5753__auto___43488 = cljs.core.seq(seq__42446_43478);
if(temp__5753__auto___43488){
var seq__42446_43489__$1 = temp__5753__auto___43488;
if(cljs.core.chunked_seq_QMARK_(seq__42446_43489__$1)){
var c__4679__auto___43490 = cljs.core.chunk_first(seq__42446_43489__$1);
var G__43491 = cljs.core.chunk_rest(seq__42446_43489__$1);
var G__43492 = c__4679__auto___43490;
var G__43493 = cljs.core.count(c__4679__auto___43490);
var G__43494 = (0);
seq__42446_43478 = G__43491;
chunk__42447_43479 = G__43492;
count__42448_43480 = G__43493;
i__42449_43481 = G__43494;
continue;
} else {
var node_43495 = cljs.core.first(seq__42446_43489__$1);
fragment.appendChild(shadow.dom._to_dom(node_43495));


var G__43496 = cljs.core.next(seq__42446_43489__$1);
var G__43497 = null;
var G__43498 = (0);
var G__43499 = (0);
seq__42446_43478 = G__43496;
chunk__42447_43479 = G__43497;
count__42448_43480 = G__43498;
i__42449_43481 = G__43499;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42437){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42437));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42461_43501 = cljs.core.seq(scripts);
var chunk__42462_43502 = null;
var count__42463_43503 = (0);
var i__42464_43504 = (0);
while(true){
if((i__42464_43504 < count__42463_43503)){
var vec__42483_43505 = chunk__42462_43502.cljs$core$IIndexed$_nth$arity$2(null,i__42464_43504);
var script_tag_43506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42483_43505,(0),null);
var script_body_43507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42483_43505,(1),null);
eval(script_body_43507);


var G__43509 = seq__42461_43501;
var G__43510 = chunk__42462_43502;
var G__43511 = count__42463_43503;
var G__43512 = (i__42464_43504 + (1));
seq__42461_43501 = G__43509;
chunk__42462_43502 = G__43510;
count__42463_43503 = G__43511;
i__42464_43504 = G__43512;
continue;
} else {
var temp__5753__auto___43513 = cljs.core.seq(seq__42461_43501);
if(temp__5753__auto___43513){
var seq__42461_43514__$1 = temp__5753__auto___43513;
if(cljs.core.chunked_seq_QMARK_(seq__42461_43514__$1)){
var c__4679__auto___43515 = cljs.core.chunk_first(seq__42461_43514__$1);
var G__43516 = cljs.core.chunk_rest(seq__42461_43514__$1);
var G__43517 = c__4679__auto___43515;
var G__43518 = cljs.core.count(c__4679__auto___43515);
var G__43519 = (0);
seq__42461_43501 = G__43516;
chunk__42462_43502 = G__43517;
count__42463_43503 = G__43518;
i__42464_43504 = G__43519;
continue;
} else {
var vec__42487_43520 = cljs.core.first(seq__42461_43514__$1);
var script_tag_43521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42487_43520,(0),null);
var script_body_43522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42487_43520,(1),null);
eval(script_body_43522);


var G__43524 = cljs.core.next(seq__42461_43514__$1);
var G__43525 = null;
var G__43526 = (0);
var G__43527 = (0);
seq__42461_43501 = G__43524;
chunk__42462_43502 = G__43525;
count__42463_43503 = G__43526;
i__42464_43504 = G__43527;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42490){
var vec__42491 = p__42490;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42491,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42491,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__42506 = arguments.length;
switch (G__42506) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__42536 = cljs.core.seq(style_keys);
var chunk__42537 = null;
var count__42538 = (0);
var i__42539 = (0);
while(true){
if((i__42539 < count__42538)){
var it = chunk__42537.cljs$core$IIndexed$_nth$arity$2(null,i__42539);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43530 = seq__42536;
var G__43531 = chunk__42537;
var G__43532 = count__42538;
var G__43533 = (i__42539 + (1));
seq__42536 = G__43530;
chunk__42537 = G__43531;
count__42538 = G__43532;
i__42539 = G__43533;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42536);
if(temp__5753__auto__){
var seq__42536__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42536__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42536__$1);
var G__43534 = cljs.core.chunk_rest(seq__42536__$1);
var G__43535 = c__4679__auto__;
var G__43536 = cljs.core.count(c__4679__auto__);
var G__43537 = (0);
seq__42536 = G__43534;
chunk__42537 = G__43535;
count__42538 = G__43536;
i__42539 = G__43537;
continue;
} else {
var it = cljs.core.first(seq__42536__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43538 = cljs.core.next(seq__42536__$1);
var G__43539 = null;
var G__43540 = (0);
var G__43541 = (0);
seq__42536 = G__43538;
chunk__42537 = G__43539;
count__42538 = G__43540;
i__42539 = G__43541;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k42553,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__42558 = k42553;
var G__42558__$1 = (((G__42558 instanceof cljs.core.Keyword))?G__42558.fqn:null);
switch (G__42558__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42553,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__42563){
var vec__42565 = p__42563;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42565,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42565,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42552){
var self__ = this;
var G__42552__$1 = this;
return (new cljs.core.RecordIter((0),G__42552__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42554,other42555){
var self__ = this;
var this42554__$1 = this;
return (((!((other42555 == null)))) && ((((this42554__$1.constructor === other42555.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42554__$1.x,other42555.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42554__$1.y,other42555.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42554__$1.__extmap,other42555.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k42553){
var self__ = this;
var this__4509__auto____$1 = this;
var G__42587 = k42553;
var G__42587__$1 = (((G__42587 instanceof cljs.core.Keyword))?G__42587.fqn:null);
switch (G__42587__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42553);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__42552){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__42590 = cljs.core.keyword_identical_QMARK_;
var expr__42591 = k__4511__auto__;
if(cljs.core.truth_((pred__42590.cljs$core$IFn$_invoke$arity$2 ? pred__42590.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42591) : pred__42590.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42591)))){
return (new shadow.dom.Coordinate(G__42552,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42590.cljs$core$IFn$_invoke$arity$2 ? pred__42590.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42591) : pred__42590.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42591)))){
return (new shadow.dom.Coordinate(self__.x,G__42552,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__42552),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__42552){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42552,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42556){
var extmap__4542__auto__ = (function (){var G__42607 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42556,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42556)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42607);
} else {
return G__42607;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42556),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42556),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k42618,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__42652 = k42618;
var G__42652__$1 = (((G__42652 instanceof cljs.core.Keyword))?G__42652.fqn:null);
switch (G__42652__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42618,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__42655){
var vec__42657 = p__42655;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42657,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42657,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42617){
var self__ = this;
var G__42617__$1 = this;
return (new cljs.core.RecordIter((0),G__42617__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42619,other42620){
var self__ = this;
var this42619__$1 = this;
return (((!((other42620 == null)))) && ((((this42619__$1.constructor === other42620.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42619__$1.w,other42620.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42619__$1.h,other42620.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42619__$1.__extmap,other42620.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k42618){
var self__ = this;
var this__4509__auto____$1 = this;
var G__42664 = k42618;
var G__42664__$1 = (((G__42664 instanceof cljs.core.Keyword))?G__42664.fqn:null);
switch (G__42664__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42618);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__42617){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__42667 = cljs.core.keyword_identical_QMARK_;
var expr__42668 = k__4511__auto__;
if(cljs.core.truth_((pred__42667.cljs$core$IFn$_invoke$arity$2 ? pred__42667.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42668) : pred__42667.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__42668)))){
return (new shadow.dom.Size(G__42617,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42667.cljs$core$IFn$_invoke$arity$2 ? pred__42667.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42668) : pred__42667.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__42668)))){
return (new shadow.dom.Size(self__.w,G__42617,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__42617),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__42617){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42617,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42622){
var extmap__4542__auto__ = (function (){var G__42892 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42622,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42622)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42892);
} else {
return G__42892;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42622),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42622),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__43586 = (i + (1));
var G__43587 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43586;
ret = G__43587;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42989){
var vec__42992 = p__42989;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42992,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42992,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43002 = arguments.length;
switch (G__43002) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__43602 = ps;
var G__43603 = (i + (1));
el__$1 = G__43602;
i = G__43603;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43016 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43016,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43016,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43016,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43020_43611 = cljs.core.seq(props);
var chunk__43021_43612 = null;
var count__43022_43613 = (0);
var i__43023_43614 = (0);
while(true){
if((i__43023_43614 < count__43022_43613)){
var vec__43041_43620 = chunk__43021_43612.cljs$core$IIndexed$_nth$arity$2(null,i__43023_43614);
var k_43621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43041_43620,(0),null);
var v_43622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43041_43620,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_43621);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43621),v_43622);


var G__43623 = seq__43020_43611;
var G__43624 = chunk__43021_43612;
var G__43625 = count__43022_43613;
var G__43626 = (i__43023_43614 + (1));
seq__43020_43611 = G__43623;
chunk__43021_43612 = G__43624;
count__43022_43613 = G__43625;
i__43023_43614 = G__43626;
continue;
} else {
var temp__5753__auto___43627 = cljs.core.seq(seq__43020_43611);
if(temp__5753__auto___43627){
var seq__43020_43628__$1 = temp__5753__auto___43627;
if(cljs.core.chunked_seq_QMARK_(seq__43020_43628__$1)){
var c__4679__auto___43629 = cljs.core.chunk_first(seq__43020_43628__$1);
var G__43630 = cljs.core.chunk_rest(seq__43020_43628__$1);
var G__43631 = c__4679__auto___43629;
var G__43632 = cljs.core.count(c__4679__auto___43629);
var G__43633 = (0);
seq__43020_43611 = G__43630;
chunk__43021_43612 = G__43631;
count__43022_43613 = G__43632;
i__43023_43614 = G__43633;
continue;
} else {
var vec__43055_43634 = cljs.core.first(seq__43020_43628__$1);
var k_43635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43055_43634,(0),null);
var v_43636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43055_43634,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_43635);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43635),v_43636);


var G__43637 = cljs.core.next(seq__43020_43628__$1);
var G__43638 = null;
var G__43639 = (0);
var G__43640 = (0);
seq__43020_43611 = G__43637;
chunk__43021_43612 = G__43638;
count__43022_43613 = G__43639;
i__43023_43614 = G__43640;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43077 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43077,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43077,(1),null);
var seq__43083_43641 = cljs.core.seq(node_children);
var chunk__43085_43642 = null;
var count__43086_43643 = (0);
var i__43087_43644 = (0);
while(true){
if((i__43087_43644 < count__43086_43643)){
var child_struct_43645 = chunk__43085_43642.cljs$core$IIndexed$_nth$arity$2(null,i__43087_43644);
if((!((child_struct_43645 == null)))){
if(typeof child_struct_43645 === 'string'){
var text_43646 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43646),child_struct_43645].join(''));
} else {
var children_43647 = shadow.dom.svg_node(child_struct_43645);
if(cljs.core.seq_QMARK_(children_43647)){
var seq__43155_43648 = cljs.core.seq(children_43647);
var chunk__43157_43649 = null;
var count__43158_43650 = (0);
var i__43159_43651 = (0);
while(true){
if((i__43159_43651 < count__43158_43650)){
var child_43652 = chunk__43157_43649.cljs$core$IIndexed$_nth$arity$2(null,i__43159_43651);
if(cljs.core.truth_(child_43652)){
node.appendChild(child_43652);


var G__43653 = seq__43155_43648;
var G__43654 = chunk__43157_43649;
var G__43655 = count__43158_43650;
var G__43656 = (i__43159_43651 + (1));
seq__43155_43648 = G__43653;
chunk__43157_43649 = G__43654;
count__43158_43650 = G__43655;
i__43159_43651 = G__43656;
continue;
} else {
var G__43659 = seq__43155_43648;
var G__43660 = chunk__43157_43649;
var G__43661 = count__43158_43650;
var G__43662 = (i__43159_43651 + (1));
seq__43155_43648 = G__43659;
chunk__43157_43649 = G__43660;
count__43158_43650 = G__43661;
i__43159_43651 = G__43662;
continue;
}
} else {
var temp__5753__auto___43663 = cljs.core.seq(seq__43155_43648);
if(temp__5753__auto___43663){
var seq__43155_43664__$1 = temp__5753__auto___43663;
if(cljs.core.chunked_seq_QMARK_(seq__43155_43664__$1)){
var c__4679__auto___43665 = cljs.core.chunk_first(seq__43155_43664__$1);
var G__43667 = cljs.core.chunk_rest(seq__43155_43664__$1);
var G__43668 = c__4679__auto___43665;
var G__43669 = cljs.core.count(c__4679__auto___43665);
var G__43670 = (0);
seq__43155_43648 = G__43667;
chunk__43157_43649 = G__43668;
count__43158_43650 = G__43669;
i__43159_43651 = G__43670;
continue;
} else {
var child_43673 = cljs.core.first(seq__43155_43664__$1);
if(cljs.core.truth_(child_43673)){
node.appendChild(child_43673);


var G__43674 = cljs.core.next(seq__43155_43664__$1);
var G__43675 = null;
var G__43676 = (0);
var G__43677 = (0);
seq__43155_43648 = G__43674;
chunk__43157_43649 = G__43675;
count__43158_43650 = G__43676;
i__43159_43651 = G__43677;
continue;
} else {
var G__43678 = cljs.core.next(seq__43155_43664__$1);
var G__43679 = null;
var G__43680 = (0);
var G__43681 = (0);
seq__43155_43648 = G__43678;
chunk__43157_43649 = G__43679;
count__43158_43650 = G__43680;
i__43159_43651 = G__43681;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43647);
}
}


var G__43682 = seq__43083_43641;
var G__43683 = chunk__43085_43642;
var G__43684 = count__43086_43643;
var G__43685 = (i__43087_43644 + (1));
seq__43083_43641 = G__43682;
chunk__43085_43642 = G__43683;
count__43086_43643 = G__43684;
i__43087_43644 = G__43685;
continue;
} else {
var G__43686 = seq__43083_43641;
var G__43687 = chunk__43085_43642;
var G__43688 = count__43086_43643;
var G__43689 = (i__43087_43644 + (1));
seq__43083_43641 = G__43686;
chunk__43085_43642 = G__43687;
count__43086_43643 = G__43688;
i__43087_43644 = G__43689;
continue;
}
} else {
var temp__5753__auto___43690 = cljs.core.seq(seq__43083_43641);
if(temp__5753__auto___43690){
var seq__43083_43691__$1 = temp__5753__auto___43690;
if(cljs.core.chunked_seq_QMARK_(seq__43083_43691__$1)){
var c__4679__auto___43692 = cljs.core.chunk_first(seq__43083_43691__$1);
var G__43693 = cljs.core.chunk_rest(seq__43083_43691__$1);
var G__43694 = c__4679__auto___43692;
var G__43695 = cljs.core.count(c__4679__auto___43692);
var G__43696 = (0);
seq__43083_43641 = G__43693;
chunk__43085_43642 = G__43694;
count__43086_43643 = G__43695;
i__43087_43644 = G__43696;
continue;
} else {
var child_struct_43697 = cljs.core.first(seq__43083_43691__$1);
if((!((child_struct_43697 == null)))){
if(typeof child_struct_43697 === 'string'){
var text_43698 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43698),child_struct_43697].join(''));
} else {
var children_43699 = shadow.dom.svg_node(child_struct_43697);
if(cljs.core.seq_QMARK_(children_43699)){
var seq__43174_43700 = cljs.core.seq(children_43699);
var chunk__43176_43701 = null;
var count__43177_43702 = (0);
var i__43178_43703 = (0);
while(true){
if((i__43178_43703 < count__43177_43702)){
var child_43704 = chunk__43176_43701.cljs$core$IIndexed$_nth$arity$2(null,i__43178_43703);
if(cljs.core.truth_(child_43704)){
node.appendChild(child_43704);


var G__43705 = seq__43174_43700;
var G__43706 = chunk__43176_43701;
var G__43707 = count__43177_43702;
var G__43708 = (i__43178_43703 + (1));
seq__43174_43700 = G__43705;
chunk__43176_43701 = G__43706;
count__43177_43702 = G__43707;
i__43178_43703 = G__43708;
continue;
} else {
var G__43709 = seq__43174_43700;
var G__43710 = chunk__43176_43701;
var G__43711 = count__43177_43702;
var G__43712 = (i__43178_43703 + (1));
seq__43174_43700 = G__43709;
chunk__43176_43701 = G__43710;
count__43177_43702 = G__43711;
i__43178_43703 = G__43712;
continue;
}
} else {
var temp__5753__auto___43713__$1 = cljs.core.seq(seq__43174_43700);
if(temp__5753__auto___43713__$1){
var seq__43174_43714__$1 = temp__5753__auto___43713__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43174_43714__$1)){
var c__4679__auto___43715 = cljs.core.chunk_first(seq__43174_43714__$1);
var G__43716 = cljs.core.chunk_rest(seq__43174_43714__$1);
var G__43717 = c__4679__auto___43715;
var G__43718 = cljs.core.count(c__4679__auto___43715);
var G__43719 = (0);
seq__43174_43700 = G__43716;
chunk__43176_43701 = G__43717;
count__43177_43702 = G__43718;
i__43178_43703 = G__43719;
continue;
} else {
var child_43720 = cljs.core.first(seq__43174_43714__$1);
if(cljs.core.truth_(child_43720)){
node.appendChild(child_43720);


var G__43721 = cljs.core.next(seq__43174_43714__$1);
var G__43722 = null;
var G__43723 = (0);
var G__43724 = (0);
seq__43174_43700 = G__43721;
chunk__43176_43701 = G__43722;
count__43177_43702 = G__43723;
i__43178_43703 = G__43724;
continue;
} else {
var G__43725 = cljs.core.next(seq__43174_43714__$1);
var G__43726 = null;
var G__43727 = (0);
var G__43728 = (0);
seq__43174_43700 = G__43725;
chunk__43176_43701 = G__43726;
count__43177_43702 = G__43727;
i__43178_43703 = G__43728;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43699);
}
}


var G__43729 = cljs.core.next(seq__43083_43691__$1);
var G__43730 = null;
var G__43731 = (0);
var G__43732 = (0);
seq__43083_43641 = G__43729;
chunk__43085_43642 = G__43730;
count__43086_43643 = G__43731;
i__43087_43644 = G__43732;
continue;
} else {
var G__43733 = cljs.core.next(seq__43083_43691__$1);
var G__43734 = null;
var G__43735 = (0);
var G__43736 = (0);
seq__43083_43641 = G__43733;
chunk__43085_43642 = G__43734;
count__43086_43643 = G__43735;
i__43087_43644 = G__43736;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43741 = arguments.length;
var i__4865__auto___43742 = (0);
while(true){
if((i__4865__auto___43742 < len__4864__auto___43741)){
args__4870__auto__.push((arguments[i__4865__auto___43742]));

var G__43743 = (i__4865__auto___43742 + (1));
i__4865__auto___43742 = G__43743;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43220){
var G__43221 = cljs.core.first(seq43220);
var seq43220__$1 = cljs.core.next(seq43220);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43221,seq43220__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43231 = arguments.length;
switch (G__43231) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29375__auto___43746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_43242){
var state_val_43243 = (state_43242[(1)]);
if((state_val_43243 === (1))){
var state_43242__$1 = state_43242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43242__$1,(2),once_or_cleanup);
} else {
if((state_val_43243 === (2))){
var inst_43239 = (state_43242[(2)]);
var inst_43240 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43242__$1 = (function (){var statearr_43247 = state_43242;
(statearr_43247[(7)] = inst_43239);

return statearr_43247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43242__$1,inst_43240);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29172__auto__ = null;
var shadow$dom$state_machine__29172__auto____0 = (function (){
var statearr_43249 = [null,null,null,null,null,null,null,null];
(statearr_43249[(0)] = shadow$dom$state_machine__29172__auto__);

(statearr_43249[(1)] = (1));

return statearr_43249;
});
var shadow$dom$state_machine__29172__auto____1 = (function (state_43242){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_43242);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e43250){var ex__29175__auto__ = e43250;
var statearr_43251_43752 = state_43242;
(statearr_43251_43752[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_43242[(4)]))){
var statearr_43252_43753 = state_43242;
(statearr_43252_43753[(1)] = cljs.core.first((state_43242[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43754 = state_43242;
state_43242 = G__43754;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
shadow$dom$state_machine__29172__auto__ = function(state_43242){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29172__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29172__auto____1.call(this,state_43242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29172__auto____0;
shadow$dom$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29172__auto____1;
return shadow$dom$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_43253 = f__29376__auto__();
(statearr_43253[(6)] = c__29375__auto___43746);

return statearr_43253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
