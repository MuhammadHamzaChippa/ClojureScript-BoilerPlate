goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46124 = arguments.length;
var i__4865__auto___46125 = (0);
while(true){
if((i__4865__auto___46125 < len__4864__auto___46124)){
args__4870__auto__.push((arguments[i__4865__auto___46125]));

var G__46126 = (i__4865__auto___46125 + (1));
i__4865__auto___46125 = G__46126;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45837){
var G__45838 = cljs.core.first(seq45837);
var seq45837__$1 = cljs.core.next(seq45837);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45838,seq45837__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45844 = cljs.core.seq(sources);
var chunk__45845 = null;
var count__45846 = (0);
var i__45847 = (0);
while(true){
if((i__45847 < count__45846)){
var map__45852 = chunk__45845.cljs$core$IIndexed$_nth$arity$2(null,i__45847);
var map__45852__$1 = cljs.core.__destructure_map(map__45852);
var src = map__45852__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45852__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45852__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45852__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45852__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45854){var e_46127 = e45854;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46127);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46127.message)].join('')));
}

var G__46128 = seq__45844;
var G__46129 = chunk__45845;
var G__46130 = count__45846;
var G__46131 = (i__45847 + (1));
seq__45844 = G__46128;
chunk__45845 = G__46129;
count__45846 = G__46130;
i__45847 = G__46131;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45844);
if(temp__5753__auto__){
var seq__45844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45844__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45844__$1);
var G__46132 = cljs.core.chunk_rest(seq__45844__$1);
var G__46133 = c__4679__auto__;
var G__46134 = cljs.core.count(c__4679__auto__);
var G__46135 = (0);
seq__45844 = G__46132;
chunk__45845 = G__46133;
count__45846 = G__46134;
i__45847 = G__46135;
continue;
} else {
var map__45856 = cljs.core.first(seq__45844__$1);
var map__45856__$1 = cljs.core.__destructure_map(map__45856);
var src = map__45856__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45856__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45856__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45856__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45857){var e_46136 = e45857;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46136);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46136.message)].join('')));
}

var G__46137 = cljs.core.next(seq__45844__$1);
var G__46138 = null;
var G__46139 = (0);
var G__46140 = (0);
seq__45844 = G__46137;
chunk__45845 = G__46138;
count__45846 = G__46139;
i__45847 = G__46140;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45858 = cljs.core.seq(js_requires);
var chunk__45859 = null;
var count__45860 = (0);
var i__45861 = (0);
while(true){
if((i__45861 < count__45860)){
var js_ns = chunk__45859.cljs$core$IIndexed$_nth$arity$2(null,i__45861);
var require_str_46141 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46141);


var G__46142 = seq__45858;
var G__46143 = chunk__45859;
var G__46144 = count__45860;
var G__46145 = (i__45861 + (1));
seq__45858 = G__46142;
chunk__45859 = G__46143;
count__45860 = G__46144;
i__45861 = G__46145;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45858);
if(temp__5753__auto__){
var seq__45858__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45858__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45858__$1);
var G__46146 = cljs.core.chunk_rest(seq__45858__$1);
var G__46147 = c__4679__auto__;
var G__46148 = cljs.core.count(c__4679__auto__);
var G__46149 = (0);
seq__45858 = G__46146;
chunk__45859 = G__46147;
count__45860 = G__46148;
i__45861 = G__46149;
continue;
} else {
var js_ns = cljs.core.first(seq__45858__$1);
var require_str_46150 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46150);


var G__46151 = cljs.core.next(seq__45858__$1);
var G__46152 = null;
var G__46153 = (0);
var G__46154 = (0);
seq__45858 = G__46151;
chunk__45859 = G__46152;
count__45860 = G__46153;
i__45861 = G__46154;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45863){
var map__45864 = p__45863;
var map__45864__$1 = cljs.core.__destructure_map(map__45864);
var msg = map__45864__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45864__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45865(s__45866){
return (new cljs.core.LazySeq(null,(function (){
var s__45866__$1 = s__45866;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45866__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__45871 = cljs.core.first(xs__6308__auto__);
var map__45871__$1 = cljs.core.__destructure_map(map__45871);
var src = map__45871__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45871__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45871__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__45866__$1,map__45871,map__45871__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45864,map__45864__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45865_$_iter__45867(s__45868){
return (new cljs.core.LazySeq(null,((function (s__45866__$1,map__45871,map__45871__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45864,map__45864__$1,msg,info,reload_info){
return (function (){
var s__45868__$1 = s__45868;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45868__$1);
if(temp__5753__auto____$1){
var s__45868__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45868__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45868__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45870 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45869 = (0);
while(true){
if((i__45869 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__45869);
cljs.core.chunk_append(b__45870,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46155 = (i__45869 + (1));
i__45869 = G__46155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45870),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45865_$_iter__45867(cljs.core.chunk_rest(s__45868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45870),null);
}
} else {
var warning = cljs.core.first(s__45868__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45865_$_iter__45867(cljs.core.rest(s__45868__$2)));
}
} else {
return null;
}
break;
}
});})(s__45866__$1,map__45871,map__45871__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45864,map__45864__$1,msg,info,reload_info))
,null,null));
});})(s__45866__$1,map__45871,map__45871__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__45864,map__45864__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45865(cljs.core.rest(s__45866__$1)));
} else {
var G__46156 = cljs.core.rest(s__45866__$1);
s__45866__$1 = G__46156;
continue;
}
} else {
var G__46157 = cljs.core.rest(s__45866__$1);
s__45866__$1 = G__46157;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45872_46158 = cljs.core.seq(warnings);
var chunk__45873_46159 = null;
var count__45874_46160 = (0);
var i__45875_46161 = (0);
while(true){
if((i__45875_46161 < count__45874_46160)){
var map__45878_46162 = chunk__45873_46159.cljs$core$IIndexed$_nth$arity$2(null,i__45875_46161);
var map__45878_46163__$1 = cljs.core.__destructure_map(map__45878_46162);
var w_46164 = map__45878_46163__$1;
var msg_46165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878_46163__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878_46163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878_46163__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878_46163__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46168)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46166),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46167),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46165__$1)].join(''));


var G__46169 = seq__45872_46158;
var G__46170 = chunk__45873_46159;
var G__46171 = count__45874_46160;
var G__46172 = (i__45875_46161 + (1));
seq__45872_46158 = G__46169;
chunk__45873_46159 = G__46170;
count__45874_46160 = G__46171;
i__45875_46161 = G__46172;
continue;
} else {
var temp__5753__auto___46173 = cljs.core.seq(seq__45872_46158);
if(temp__5753__auto___46173){
var seq__45872_46174__$1 = temp__5753__auto___46173;
if(cljs.core.chunked_seq_QMARK_(seq__45872_46174__$1)){
var c__4679__auto___46175 = cljs.core.chunk_first(seq__45872_46174__$1);
var G__46176 = cljs.core.chunk_rest(seq__45872_46174__$1);
var G__46177 = c__4679__auto___46175;
var G__46178 = cljs.core.count(c__4679__auto___46175);
var G__46179 = (0);
seq__45872_46158 = G__46176;
chunk__45873_46159 = G__46177;
count__45874_46160 = G__46178;
i__45875_46161 = G__46179;
continue;
} else {
var map__45879_46180 = cljs.core.first(seq__45872_46174__$1);
var map__45879_46181__$1 = cljs.core.__destructure_map(map__45879_46180);
var w_46182 = map__45879_46181__$1;
var msg_46183__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45879_46181__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45879_46181__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45879_46181__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45879_46181__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46186)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46184),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46185),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46183__$1)].join(''));


var G__46187 = cljs.core.next(seq__45872_46174__$1);
var G__46188 = null;
var G__46189 = (0);
var G__46190 = (0);
seq__45872_46158 = G__46187;
chunk__45873_46159 = G__46188;
count__45874_46160 = G__46189;
i__45875_46161 = G__46190;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45862_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45862_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45880){
var map__45881 = p__45880;
var map__45881__$1 = cljs.core.__destructure_map(map__45881);
var msg = map__45881__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45881__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45881__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__45882 = cljs.core.seq(updates);
var chunk__45884 = null;
var count__45885 = (0);
var i__45886 = (0);
while(true){
if((i__45886 < count__45885)){
var path = chunk__45884.cljs$core$IIndexed$_nth$arity$2(null,i__45886);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45996_46191 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46000_46192 = null;
var count__46001_46193 = (0);
var i__46002_46194 = (0);
while(true){
if((i__46002_46194 < count__46001_46193)){
var node_46195 = chunk__46000_46192.cljs$core$IIndexed$_nth$arity$2(null,i__46002_46194);
if(cljs.core.not(node_46195.shadow$old)){
var path_match_46196 = shadow.cljs.devtools.client.browser.match_paths(node_46195.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46196)){
var new_link_46197 = (function (){var G__46028 = node_46195.cloneNode(true);
G__46028.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46196),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46028;
})();
(node_46195.shadow$old = true);

(new_link_46197.onload = ((function (seq__45996_46191,chunk__46000_46192,count__46001_46193,i__46002_46194,seq__45882,chunk__45884,count__45885,i__45886,new_link_46197,path_match_46196,node_46195,path,map__45881,map__45881__$1,msg,updates,reload_info){
return (function (e){
var seq__46029_46198 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__46031_46199 = null;
var count__46032_46200 = (0);
var i__46033_46201 = (0);
while(true){
if((i__46033_46201 < count__46032_46200)){
var map__46037_46202 = chunk__46031_46199.cljs$core$IIndexed$_nth$arity$2(null,i__46033_46201);
var map__46037_46203__$1 = cljs.core.__destructure_map(map__46037_46202);
var task_46204 = map__46037_46203__$1;
var fn_str_46205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46037_46203__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46037_46203__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46207 = goog.getObjectByName(fn_str_46205,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46206)].join(''));

(fn_obj_46207.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46207.cljs$core$IFn$_invoke$arity$2(path,new_link_46197) : fn_obj_46207.call(null,path,new_link_46197));


var G__46208 = seq__46029_46198;
var G__46209 = chunk__46031_46199;
var G__46210 = count__46032_46200;
var G__46211 = (i__46033_46201 + (1));
seq__46029_46198 = G__46208;
chunk__46031_46199 = G__46209;
count__46032_46200 = G__46210;
i__46033_46201 = G__46211;
continue;
} else {
var temp__5753__auto___46212 = cljs.core.seq(seq__46029_46198);
if(temp__5753__auto___46212){
var seq__46029_46213__$1 = temp__5753__auto___46212;
if(cljs.core.chunked_seq_QMARK_(seq__46029_46213__$1)){
var c__4679__auto___46214 = cljs.core.chunk_first(seq__46029_46213__$1);
var G__46215 = cljs.core.chunk_rest(seq__46029_46213__$1);
var G__46216 = c__4679__auto___46214;
var G__46217 = cljs.core.count(c__4679__auto___46214);
var G__46218 = (0);
seq__46029_46198 = G__46215;
chunk__46031_46199 = G__46216;
count__46032_46200 = G__46217;
i__46033_46201 = G__46218;
continue;
} else {
var map__46038_46219 = cljs.core.first(seq__46029_46213__$1);
var map__46038_46220__$1 = cljs.core.__destructure_map(map__46038_46219);
var task_46221 = map__46038_46220__$1;
var fn_str_46222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46038_46220__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46038_46220__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46224 = goog.getObjectByName(fn_str_46222,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46223)].join(''));

(fn_obj_46224.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46224.cljs$core$IFn$_invoke$arity$2(path,new_link_46197) : fn_obj_46224.call(null,path,new_link_46197));


var G__46225 = cljs.core.next(seq__46029_46213__$1);
var G__46226 = null;
var G__46227 = (0);
var G__46228 = (0);
seq__46029_46198 = G__46225;
chunk__46031_46199 = G__46226;
count__46032_46200 = G__46227;
i__46033_46201 = G__46228;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46195);
});})(seq__45996_46191,chunk__46000_46192,count__46001_46193,i__46002_46194,seq__45882,chunk__45884,count__45885,i__45886,new_link_46197,path_match_46196,node_46195,path,map__45881,map__45881__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46196], 0));

goog.dom.insertSiblingAfter(new_link_46197,node_46195);


var G__46229 = seq__45996_46191;
var G__46230 = chunk__46000_46192;
var G__46231 = count__46001_46193;
var G__46232 = (i__46002_46194 + (1));
seq__45996_46191 = G__46229;
chunk__46000_46192 = G__46230;
count__46001_46193 = G__46231;
i__46002_46194 = G__46232;
continue;
} else {
var G__46233 = seq__45996_46191;
var G__46234 = chunk__46000_46192;
var G__46235 = count__46001_46193;
var G__46236 = (i__46002_46194 + (1));
seq__45996_46191 = G__46233;
chunk__46000_46192 = G__46234;
count__46001_46193 = G__46235;
i__46002_46194 = G__46236;
continue;
}
} else {
var G__46237 = seq__45996_46191;
var G__46238 = chunk__46000_46192;
var G__46239 = count__46001_46193;
var G__46240 = (i__46002_46194 + (1));
seq__45996_46191 = G__46237;
chunk__46000_46192 = G__46238;
count__46001_46193 = G__46239;
i__46002_46194 = G__46240;
continue;
}
} else {
var temp__5753__auto___46241 = cljs.core.seq(seq__45996_46191);
if(temp__5753__auto___46241){
var seq__45996_46242__$1 = temp__5753__auto___46241;
if(cljs.core.chunked_seq_QMARK_(seq__45996_46242__$1)){
var c__4679__auto___46243 = cljs.core.chunk_first(seq__45996_46242__$1);
var G__46244 = cljs.core.chunk_rest(seq__45996_46242__$1);
var G__46245 = c__4679__auto___46243;
var G__46246 = cljs.core.count(c__4679__auto___46243);
var G__46247 = (0);
seq__45996_46191 = G__46244;
chunk__46000_46192 = G__46245;
count__46001_46193 = G__46246;
i__46002_46194 = G__46247;
continue;
} else {
var node_46248 = cljs.core.first(seq__45996_46242__$1);
if(cljs.core.not(node_46248.shadow$old)){
var path_match_46249 = shadow.cljs.devtools.client.browser.match_paths(node_46248.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46249)){
var new_link_46250 = (function (){var G__46039 = node_46248.cloneNode(true);
G__46039.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46249),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46039;
})();
(node_46248.shadow$old = true);

(new_link_46250.onload = ((function (seq__45996_46191,chunk__46000_46192,count__46001_46193,i__46002_46194,seq__45882,chunk__45884,count__45885,i__45886,new_link_46250,path_match_46249,node_46248,seq__45996_46242__$1,temp__5753__auto___46241,path,map__45881,map__45881__$1,msg,updates,reload_info){
return (function (e){
var seq__46040_46251 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__46042_46252 = null;
var count__46043_46253 = (0);
var i__46044_46254 = (0);
while(true){
if((i__46044_46254 < count__46043_46253)){
var map__46048_46255 = chunk__46042_46252.cljs$core$IIndexed$_nth$arity$2(null,i__46044_46254);
var map__46048_46256__$1 = cljs.core.__destructure_map(map__46048_46255);
var task_46257 = map__46048_46256__$1;
var fn_str_46258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46048_46256__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46048_46256__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46260 = goog.getObjectByName(fn_str_46258,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46259)].join(''));

(fn_obj_46260.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46260.cljs$core$IFn$_invoke$arity$2(path,new_link_46250) : fn_obj_46260.call(null,path,new_link_46250));


var G__46261 = seq__46040_46251;
var G__46262 = chunk__46042_46252;
var G__46263 = count__46043_46253;
var G__46264 = (i__46044_46254 + (1));
seq__46040_46251 = G__46261;
chunk__46042_46252 = G__46262;
count__46043_46253 = G__46263;
i__46044_46254 = G__46264;
continue;
} else {
var temp__5753__auto___46265__$1 = cljs.core.seq(seq__46040_46251);
if(temp__5753__auto___46265__$1){
var seq__46040_46266__$1 = temp__5753__auto___46265__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46040_46266__$1)){
var c__4679__auto___46267 = cljs.core.chunk_first(seq__46040_46266__$1);
var G__46268 = cljs.core.chunk_rest(seq__46040_46266__$1);
var G__46269 = c__4679__auto___46267;
var G__46270 = cljs.core.count(c__4679__auto___46267);
var G__46271 = (0);
seq__46040_46251 = G__46268;
chunk__46042_46252 = G__46269;
count__46043_46253 = G__46270;
i__46044_46254 = G__46271;
continue;
} else {
var map__46049_46272 = cljs.core.first(seq__46040_46266__$1);
var map__46049_46273__$1 = cljs.core.__destructure_map(map__46049_46272);
var task_46274 = map__46049_46273__$1;
var fn_str_46275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46049_46273__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46049_46273__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46277 = goog.getObjectByName(fn_str_46275,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46276)].join(''));

(fn_obj_46277.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46277.cljs$core$IFn$_invoke$arity$2(path,new_link_46250) : fn_obj_46277.call(null,path,new_link_46250));


var G__46278 = cljs.core.next(seq__46040_46266__$1);
var G__46279 = null;
var G__46280 = (0);
var G__46281 = (0);
seq__46040_46251 = G__46278;
chunk__46042_46252 = G__46279;
count__46043_46253 = G__46280;
i__46044_46254 = G__46281;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46248);
});})(seq__45996_46191,chunk__46000_46192,count__46001_46193,i__46002_46194,seq__45882,chunk__45884,count__45885,i__45886,new_link_46250,path_match_46249,node_46248,seq__45996_46242__$1,temp__5753__auto___46241,path,map__45881,map__45881__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46249], 0));

goog.dom.insertSiblingAfter(new_link_46250,node_46248);


var G__46282 = cljs.core.next(seq__45996_46242__$1);
var G__46283 = null;
var G__46284 = (0);
var G__46285 = (0);
seq__45996_46191 = G__46282;
chunk__46000_46192 = G__46283;
count__46001_46193 = G__46284;
i__46002_46194 = G__46285;
continue;
} else {
var G__46286 = cljs.core.next(seq__45996_46242__$1);
var G__46287 = null;
var G__46288 = (0);
var G__46289 = (0);
seq__45996_46191 = G__46286;
chunk__46000_46192 = G__46287;
count__46001_46193 = G__46288;
i__46002_46194 = G__46289;
continue;
}
} else {
var G__46290 = cljs.core.next(seq__45996_46242__$1);
var G__46291 = null;
var G__46292 = (0);
var G__46293 = (0);
seq__45996_46191 = G__46290;
chunk__46000_46192 = G__46291;
count__46001_46193 = G__46292;
i__46002_46194 = G__46293;
continue;
}
}
} else {
}
}
break;
}


var G__46294 = seq__45882;
var G__46295 = chunk__45884;
var G__46296 = count__45885;
var G__46297 = (i__45886 + (1));
seq__45882 = G__46294;
chunk__45884 = G__46295;
count__45885 = G__46296;
i__45886 = G__46297;
continue;
} else {
var G__46298 = seq__45882;
var G__46299 = chunk__45884;
var G__46300 = count__45885;
var G__46301 = (i__45886 + (1));
seq__45882 = G__46298;
chunk__45884 = G__46299;
count__45885 = G__46300;
i__45886 = G__46301;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45882);
if(temp__5753__auto__){
var seq__45882__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45882__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45882__$1);
var G__46302 = cljs.core.chunk_rest(seq__45882__$1);
var G__46303 = c__4679__auto__;
var G__46304 = cljs.core.count(c__4679__auto__);
var G__46305 = (0);
seq__45882 = G__46302;
chunk__45884 = G__46303;
count__45885 = G__46304;
i__45886 = G__46305;
continue;
} else {
var path = cljs.core.first(seq__45882__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46050_46306 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46054_46307 = null;
var count__46055_46308 = (0);
var i__46056_46309 = (0);
while(true){
if((i__46056_46309 < count__46055_46308)){
var node_46310 = chunk__46054_46307.cljs$core$IIndexed$_nth$arity$2(null,i__46056_46309);
if(cljs.core.not(node_46310.shadow$old)){
var path_match_46311 = shadow.cljs.devtools.client.browser.match_paths(node_46310.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46311)){
var new_link_46312 = (function (){var G__46082 = node_46310.cloneNode(true);
G__46082.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46311),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46082;
})();
(node_46310.shadow$old = true);

(new_link_46312.onload = ((function (seq__46050_46306,chunk__46054_46307,count__46055_46308,i__46056_46309,seq__45882,chunk__45884,count__45885,i__45886,new_link_46312,path_match_46311,node_46310,path,seq__45882__$1,temp__5753__auto__,map__45881,map__45881__$1,msg,updates,reload_info){
return (function (e){
var seq__46083_46313 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__46085_46314 = null;
var count__46086_46315 = (0);
var i__46087_46316 = (0);
while(true){
if((i__46087_46316 < count__46086_46315)){
var map__46091_46317 = chunk__46085_46314.cljs$core$IIndexed$_nth$arity$2(null,i__46087_46316);
var map__46091_46318__$1 = cljs.core.__destructure_map(map__46091_46317);
var task_46319 = map__46091_46318__$1;
var fn_str_46320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46091_46318__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46091_46318__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46322 = goog.getObjectByName(fn_str_46320,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46321)].join(''));

(fn_obj_46322.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46322.cljs$core$IFn$_invoke$arity$2(path,new_link_46312) : fn_obj_46322.call(null,path,new_link_46312));


var G__46323 = seq__46083_46313;
var G__46324 = chunk__46085_46314;
var G__46325 = count__46086_46315;
var G__46326 = (i__46087_46316 + (1));
seq__46083_46313 = G__46323;
chunk__46085_46314 = G__46324;
count__46086_46315 = G__46325;
i__46087_46316 = G__46326;
continue;
} else {
var temp__5753__auto___46327__$1 = cljs.core.seq(seq__46083_46313);
if(temp__5753__auto___46327__$1){
var seq__46083_46328__$1 = temp__5753__auto___46327__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46083_46328__$1)){
var c__4679__auto___46329 = cljs.core.chunk_first(seq__46083_46328__$1);
var G__46330 = cljs.core.chunk_rest(seq__46083_46328__$1);
var G__46331 = c__4679__auto___46329;
var G__46332 = cljs.core.count(c__4679__auto___46329);
var G__46333 = (0);
seq__46083_46313 = G__46330;
chunk__46085_46314 = G__46331;
count__46086_46315 = G__46332;
i__46087_46316 = G__46333;
continue;
} else {
var map__46092_46334 = cljs.core.first(seq__46083_46328__$1);
var map__46092_46335__$1 = cljs.core.__destructure_map(map__46092_46334);
var task_46336 = map__46092_46335__$1;
var fn_str_46337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092_46335__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46092_46335__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46339 = goog.getObjectByName(fn_str_46337,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46338)].join(''));

(fn_obj_46339.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46339.cljs$core$IFn$_invoke$arity$2(path,new_link_46312) : fn_obj_46339.call(null,path,new_link_46312));


var G__46340 = cljs.core.next(seq__46083_46328__$1);
var G__46341 = null;
var G__46342 = (0);
var G__46343 = (0);
seq__46083_46313 = G__46340;
chunk__46085_46314 = G__46341;
count__46086_46315 = G__46342;
i__46087_46316 = G__46343;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46310);
});})(seq__46050_46306,chunk__46054_46307,count__46055_46308,i__46056_46309,seq__45882,chunk__45884,count__45885,i__45886,new_link_46312,path_match_46311,node_46310,path,seq__45882__$1,temp__5753__auto__,map__45881,map__45881__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46311], 0));

goog.dom.insertSiblingAfter(new_link_46312,node_46310);


var G__46344 = seq__46050_46306;
var G__46345 = chunk__46054_46307;
var G__46346 = count__46055_46308;
var G__46347 = (i__46056_46309 + (1));
seq__46050_46306 = G__46344;
chunk__46054_46307 = G__46345;
count__46055_46308 = G__46346;
i__46056_46309 = G__46347;
continue;
} else {
var G__46348 = seq__46050_46306;
var G__46349 = chunk__46054_46307;
var G__46350 = count__46055_46308;
var G__46351 = (i__46056_46309 + (1));
seq__46050_46306 = G__46348;
chunk__46054_46307 = G__46349;
count__46055_46308 = G__46350;
i__46056_46309 = G__46351;
continue;
}
} else {
var G__46352 = seq__46050_46306;
var G__46353 = chunk__46054_46307;
var G__46354 = count__46055_46308;
var G__46355 = (i__46056_46309 + (1));
seq__46050_46306 = G__46352;
chunk__46054_46307 = G__46353;
count__46055_46308 = G__46354;
i__46056_46309 = G__46355;
continue;
}
} else {
var temp__5753__auto___46356__$1 = cljs.core.seq(seq__46050_46306);
if(temp__5753__auto___46356__$1){
var seq__46050_46357__$1 = temp__5753__auto___46356__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46050_46357__$1)){
var c__4679__auto___46358 = cljs.core.chunk_first(seq__46050_46357__$1);
var G__46359 = cljs.core.chunk_rest(seq__46050_46357__$1);
var G__46360 = c__4679__auto___46358;
var G__46361 = cljs.core.count(c__4679__auto___46358);
var G__46362 = (0);
seq__46050_46306 = G__46359;
chunk__46054_46307 = G__46360;
count__46055_46308 = G__46361;
i__46056_46309 = G__46362;
continue;
} else {
var node_46363 = cljs.core.first(seq__46050_46357__$1);
if(cljs.core.not(node_46363.shadow$old)){
var path_match_46364 = shadow.cljs.devtools.client.browser.match_paths(node_46363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46364)){
var new_link_46365 = (function (){var G__46093 = node_46363.cloneNode(true);
G__46093.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46364),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46093;
})();
(node_46363.shadow$old = true);

(new_link_46365.onload = ((function (seq__46050_46306,chunk__46054_46307,count__46055_46308,i__46056_46309,seq__45882,chunk__45884,count__45885,i__45886,new_link_46365,path_match_46364,node_46363,seq__46050_46357__$1,temp__5753__auto___46356__$1,path,seq__45882__$1,temp__5753__auto__,map__45881,map__45881__$1,msg,updates,reload_info){
return (function (e){
var seq__46094_46366 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__46096_46367 = null;
var count__46097_46368 = (0);
var i__46098_46369 = (0);
while(true){
if((i__46098_46369 < count__46097_46368)){
var map__46102_46370 = chunk__46096_46367.cljs$core$IIndexed$_nth$arity$2(null,i__46098_46369);
var map__46102_46371__$1 = cljs.core.__destructure_map(map__46102_46370);
var task_46372 = map__46102_46371__$1;
var fn_str_46373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102_46371__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102_46371__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46375 = goog.getObjectByName(fn_str_46373,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46374)].join(''));

(fn_obj_46375.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46375.cljs$core$IFn$_invoke$arity$2(path,new_link_46365) : fn_obj_46375.call(null,path,new_link_46365));


var G__46376 = seq__46094_46366;
var G__46377 = chunk__46096_46367;
var G__46378 = count__46097_46368;
var G__46379 = (i__46098_46369 + (1));
seq__46094_46366 = G__46376;
chunk__46096_46367 = G__46377;
count__46097_46368 = G__46378;
i__46098_46369 = G__46379;
continue;
} else {
var temp__5753__auto___46380__$2 = cljs.core.seq(seq__46094_46366);
if(temp__5753__auto___46380__$2){
var seq__46094_46381__$1 = temp__5753__auto___46380__$2;
if(cljs.core.chunked_seq_QMARK_(seq__46094_46381__$1)){
var c__4679__auto___46382 = cljs.core.chunk_first(seq__46094_46381__$1);
var G__46383 = cljs.core.chunk_rest(seq__46094_46381__$1);
var G__46384 = c__4679__auto___46382;
var G__46385 = cljs.core.count(c__4679__auto___46382);
var G__46386 = (0);
seq__46094_46366 = G__46383;
chunk__46096_46367 = G__46384;
count__46097_46368 = G__46385;
i__46098_46369 = G__46386;
continue;
} else {
var map__46103_46387 = cljs.core.first(seq__46094_46381__$1);
var map__46103_46388__$1 = cljs.core.__destructure_map(map__46103_46387);
var task_46389 = map__46103_46388__$1;
var fn_str_46390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103_46388__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_46391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103_46388__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_46392 = goog.getObjectByName(fn_str_46390,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_46391)].join(''));

(fn_obj_46392.cljs$core$IFn$_invoke$arity$2 ? fn_obj_46392.cljs$core$IFn$_invoke$arity$2(path,new_link_46365) : fn_obj_46392.call(null,path,new_link_46365));


var G__46393 = cljs.core.next(seq__46094_46381__$1);
var G__46394 = null;
var G__46395 = (0);
var G__46396 = (0);
seq__46094_46366 = G__46393;
chunk__46096_46367 = G__46394;
count__46097_46368 = G__46395;
i__46098_46369 = G__46396;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_46363);
});})(seq__46050_46306,chunk__46054_46307,count__46055_46308,i__46056_46309,seq__45882,chunk__45884,count__45885,i__45886,new_link_46365,path_match_46364,node_46363,seq__46050_46357__$1,temp__5753__auto___46356__$1,path,seq__45882__$1,temp__5753__auto__,map__45881,map__45881__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46364], 0));

goog.dom.insertSiblingAfter(new_link_46365,node_46363);


var G__46397 = cljs.core.next(seq__46050_46357__$1);
var G__46398 = null;
var G__46399 = (0);
var G__46400 = (0);
seq__46050_46306 = G__46397;
chunk__46054_46307 = G__46398;
count__46055_46308 = G__46399;
i__46056_46309 = G__46400;
continue;
} else {
var G__46401 = cljs.core.next(seq__46050_46357__$1);
var G__46402 = null;
var G__46403 = (0);
var G__46404 = (0);
seq__46050_46306 = G__46401;
chunk__46054_46307 = G__46402;
count__46055_46308 = G__46403;
i__46056_46309 = G__46404;
continue;
}
} else {
var G__46405 = cljs.core.next(seq__46050_46357__$1);
var G__46406 = null;
var G__46407 = (0);
var G__46408 = (0);
seq__46050_46306 = G__46405;
chunk__46054_46307 = G__46406;
count__46055_46308 = G__46407;
i__46056_46309 = G__46408;
continue;
}
}
} else {
}
}
break;
}


var G__46409 = cljs.core.next(seq__45882__$1);
var G__46410 = null;
var G__46411 = (0);
var G__46412 = (0);
seq__45882 = G__46409;
chunk__45884 = G__46410;
count__45885 = G__46411;
i__45886 = G__46412;
continue;
} else {
var G__46413 = cljs.core.next(seq__45882__$1);
var G__46414 = null;
var G__46415 = (0);
var G__46416 = (0);
seq__45882 = G__46413;
chunk__45884 = G__46414;
count__45885 = G__46415;
i__45886 = G__46416;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__46104){
var map__46105 = p__46104;
var map__46105__$1 = cljs.core.__destructure_map(map__46105);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46105__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__46106){
var map__46107 = p__46106;
var map__46107__$1 = cljs.core.__destructure_map(map__46107);
var _ = map__46107__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46107__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46108,done,error){
var map__46109 = p__46108;
var map__46109__$1 = cljs.core.__destructure_map(map__46109);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46109__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46110,done,error){
var map__46111 = p__46110;
var map__46111__$1 = cljs.core.__destructure_map(map__46111);
var msg = map__46111__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46111__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46111__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46111__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46112){
var map__46113 = p__46112;
var map__46113__$1 = cljs.core.__destructure_map(map__46113);
var src = map__46113__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46113__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46114 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46114) : done.call(null,G__46114));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46115){
var map__46116 = p__46115;
var map__46116__$1 = cljs.core.__destructure_map(map__46116);
var msg__$1 = map__46116__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46116__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e46117){var ex = e46117;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46118){
var map__46119 = p__46118;
var map__46119__$1 = cljs.core.__destructure_map(map__46119);
var env = map__46119__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46119__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46120){
var map__46121 = p__46120;
var map__46121__$1 = cljs.core.__destructure_map(map__46121);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46121__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46121__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__46122){
var map__46123 = p__46122;
var map__46123__$1 = cljs.core.__destructure_map(map__46123);
var svc = map__46123__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46123__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
