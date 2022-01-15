goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__42025,res){
var map__42030 = p__42025;
var map__42030__$1 = cljs.core.__destructure_map(map__42030);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42030__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42030__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__42035 = res;
var G__42035__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42035,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__42035);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42035__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__42035__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__42051 = arguments.length;
switch (G__42051) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__42064,msg,handlers,timeout_after_ms){
var map__42065 = p__42064;
var map__42065__$1 = cljs.core.__destructure_map(map__42065);
var runtime = map__42065__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42065__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42623 = arguments.length;
var i__4865__auto___42624 = (0);
while(true){
if((i__4865__auto___42624 < len__4864__auto___42623)){
args__4870__auto__.push((arguments[i__4865__auto___42624]));

var G__42626 = (i__4865__auto___42624 + (1));
i__4865__auto___42624 = G__42626;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42092,ev,args){
var map__42093 = p__42092;
var map__42093__$1 = cljs.core.__destructure_map(map__42093);
var runtime = map__42093__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__42095 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42098 = null;
var count__42099 = (0);
var i__42100 = (0);
while(true){
if((i__42100 < count__42099)){
var ext = chunk__42098.cljs$core$IIndexed$_nth$arity$2(null,i__42100);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42627 = seq__42095;
var G__42628 = chunk__42098;
var G__42629 = count__42099;
var G__42630 = (i__42100 + (1));
seq__42095 = G__42627;
chunk__42098 = G__42628;
count__42099 = G__42629;
i__42100 = G__42630;
continue;
} else {
var G__42631 = seq__42095;
var G__42632 = chunk__42098;
var G__42633 = count__42099;
var G__42634 = (i__42100 + (1));
seq__42095 = G__42631;
chunk__42098 = G__42632;
count__42099 = G__42633;
i__42100 = G__42634;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42095);
if(temp__5753__auto__){
var seq__42095__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42095__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42095__$1);
var G__42635 = cljs.core.chunk_rest(seq__42095__$1);
var G__42636 = c__4679__auto__;
var G__42637 = cljs.core.count(c__4679__auto__);
var G__42638 = (0);
seq__42095 = G__42635;
chunk__42098 = G__42636;
count__42099 = G__42637;
i__42100 = G__42638;
continue;
} else {
var ext = cljs.core.first(seq__42095__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42639 = cljs.core.next(seq__42095__$1);
var G__42640 = null;
var G__42641 = (0);
var G__42642 = (0);
seq__42095 = G__42639;
chunk__42098 = G__42640;
count__42099 = G__42641;
i__42100 = G__42642;
continue;
} else {
var G__42643 = cljs.core.next(seq__42095__$1);
var G__42644 = null;
var G__42645 = (0);
var G__42646 = (0);
seq__42095 = G__42643;
chunk__42098 = G__42644;
count__42099 = G__42645;
i__42100 = G__42646;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq42078){
var G__42079 = cljs.core.first(seq42078);
var seq42078__$1 = cljs.core.next(seq42078);
var G__42080 = cljs.core.first(seq42078__$1);
var seq42078__$2 = cljs.core.next(seq42078__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42079,G__42080,seq42078__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__42169,p__42170){
var map__42171 = p__42169;
var map__42171__$1 = cljs.core.__destructure_map(map__42171);
var runtime = map__42171__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42172 = p__42170;
var map__42172__$1 = cljs.core.__destructure_map(map__42172);
var msg = map__42172__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__42175 = cljs.core.deref(state_ref);
var map__42175__$1 = cljs.core.__destructure_map(map__42175);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42175__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42175__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__42189){
var map__42190 = p__42189;
var map__42190__$1 = cljs.core.__destructure_map(map__42190);
var runtime = map__42190__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42190__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__42203,msg){
var map__42205 = p__42203;
var map__42205__$1 = cljs.core.__destructure_map(map__42205);
var runtime = map__42205__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42205__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__42227,key,p__42228){
var map__42229 = p__42227;
var map__42229__$1 = cljs.core.__destructure_map(map__42229);
var state = map__42229__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42229__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__42230 = p__42228;
var map__42230__$1 = cljs.core.__destructure_map(map__42230);
var spec = map__42230__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42230__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__42299,key,spec){
var map__42300 = p__42299;
var map__42300__$1 = cljs.core.__destructure_map(map__42300);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42300__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__42306_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__42306_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__42307_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__42307_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__42308_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__42308_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__42309_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__42309_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__42310_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__42310_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__42364,key){
var map__42365 = p__42364;
var map__42365__$1 = cljs.core.__destructure_map(map__42365);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__42419,msg){
var map__42421 = p__42419;
var map__42421__$1 = cljs.core.__destructure_map(map__42421);
var runtime = map__42421__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42421__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__42439,p__42440){
var map__42442 = p__42439;
var map__42442__$1 = cljs.core.__destructure_map(map__42442);
var runtime = map__42442__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42443 = p__42440;
var map__42443__$1 = cljs.core.__destructure_map(map__42443);
var msg = map__42443__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42443__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42443__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__42546 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42548 = null;
var count__42549 = (0);
var i__42550 = (0);
while(true){
if((i__42550 < count__42549)){
var map__42593 = chunk__42548.cljs$core$IIndexed$_nth$arity$2(null,i__42550);
var map__42593__$1 = cljs.core.__destructure_map(map__42593);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42593__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42741 = seq__42546;
var G__42742 = chunk__42548;
var G__42743 = count__42549;
var G__42744 = (i__42550 + (1));
seq__42546 = G__42741;
chunk__42548 = G__42742;
count__42549 = G__42743;
i__42550 = G__42744;
continue;
} else {
var G__42745 = seq__42546;
var G__42746 = chunk__42548;
var G__42747 = count__42549;
var G__42748 = (i__42550 + (1));
seq__42546 = G__42745;
chunk__42548 = G__42746;
count__42549 = G__42747;
i__42550 = G__42748;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42546);
if(temp__5753__auto__){
var seq__42546__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42546__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__42546__$1);
var G__42749 = cljs.core.chunk_rest(seq__42546__$1);
var G__42750 = c__4679__auto__;
var G__42751 = cljs.core.count(c__4679__auto__);
var G__42752 = (0);
seq__42546 = G__42749;
chunk__42548 = G__42750;
count__42549 = G__42751;
i__42550 = G__42752;
continue;
} else {
var map__42611 = cljs.core.first(seq__42546__$1);
var map__42611__$1 = cljs.core.__destructure_map(map__42611);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42757 = cljs.core.next(seq__42546__$1);
var G__42758 = null;
var G__42759 = (0);
var G__42760 = (0);
seq__42546 = G__42757;
chunk__42548 = G__42758;
count__42549 = G__42759;
i__42550 = G__42760;
continue;
} else {
var G__42761 = cljs.core.next(seq__42546__$1);
var G__42762 = null;
var G__42763 = (0);
var G__42764 = (0);
seq__42546 = G__42761;
chunk__42548 = G__42762;
count__42549 = G__42763;
i__42550 = G__42764;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
