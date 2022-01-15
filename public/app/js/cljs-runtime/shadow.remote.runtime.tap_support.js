goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45613,p__45614){
var map__45615 = p__45613;
var map__45615__$1 = cljs.core.__destructure_map(map__45615);
var svc = map__45615__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45615__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45615__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45615__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45616 = p__45614;
var map__45616__$1 = cljs.core.__destructure_map(map__45616);
var msg = map__45616__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45616__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45616__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45616__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45616__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45625,p__45626){
var map__45627 = p__45625;
var map__45627__$1 = cljs.core.__destructure_map(map__45627);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45627__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45628 = p__45626;
var map__45628__$1 = cljs.core.__destructure_map(map__45628);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45628__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45632,p__45633){
var map__45634 = p__45632;
var map__45634__$1 = cljs.core.__destructure_map(map__45634);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45634__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45634__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45635 = p__45633;
var map__45635__$1 = cljs.core.__destructure_map(map__45635);
var msg = map__45635__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45635__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45636,tid){
var map__45639 = p__45636;
var map__45639__$1 = cljs.core.__destructure_map(map__45639);
var svc = map__45639__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45639__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45649 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45650 = null;
var count__45651 = (0);
var i__45652 = (0);
while(true){
if((i__45652 < count__45651)){
var vec__45661 = chunk__45650.cljs$core$IIndexed$_nth$arity$2(null,i__45652);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45661,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45661,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45673 = seq__45649;
var G__45674 = chunk__45650;
var G__45675 = count__45651;
var G__45676 = (i__45652 + (1));
seq__45649 = G__45673;
chunk__45650 = G__45674;
count__45651 = G__45675;
i__45652 = G__45676;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45649);
if(temp__5753__auto__){
var seq__45649__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45649__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45649__$1);
var G__45677 = cljs.core.chunk_rest(seq__45649__$1);
var G__45678 = c__4679__auto__;
var G__45679 = cljs.core.count(c__4679__auto__);
var G__45680 = (0);
seq__45649 = G__45677;
chunk__45650 = G__45678;
count__45651 = G__45679;
i__45652 = G__45680;
continue;
} else {
var vec__45665 = cljs.core.first(seq__45649__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45665,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45665,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45681 = cljs.core.next(seq__45649__$1);
var G__45682 = null;
var G__45683 = (0);
var G__45684 = (0);
seq__45649 = G__45681;
chunk__45650 = G__45682;
count__45651 = G__45683;
i__45652 = G__45684;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45643_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45643_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45644_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45644_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45645_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45645_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45646_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45646_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45668){
var map__45669 = p__45668;
var map__45669__$1 = cljs.core.__destructure_map(map__45669);
var svc = map__45669__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45669__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45669__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
