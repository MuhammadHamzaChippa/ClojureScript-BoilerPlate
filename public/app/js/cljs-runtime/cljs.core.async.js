goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38793 = arguments.length;
switch (G__38793) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38801 = (function (f,blockable,meta38802){
this.f = f;
this.blockable = blockable;
this.meta38802 = meta38802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38803,meta38802__$1){
var self__ = this;
var _38803__$1 = this;
return (new cljs.core.async.t_cljs$core$async38801(self__.f,self__.blockable,meta38802__$1));
}));

(cljs.core.async.t_cljs$core$async38801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38803){
var self__ = this;
var _38803__$1 = this;
return self__.meta38802;
}));

(cljs.core.async.t_cljs$core$async38801.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38801.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38801.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38801.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38802","meta38802",510782304,null)], null);
}));

(cljs.core.async.t_cljs$core$async38801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38801");

(cljs.core.async.t_cljs$core$async38801.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38801.
 */
cljs.core.async.__GT_t_cljs$core$async38801 = (function cljs$core$async$__GT_t_cljs$core$async38801(f__$1,blockable__$1,meta38802){
return (new cljs.core.async.t_cljs$core$async38801(f__$1,blockable__$1,meta38802));
});

}

return (new cljs.core.async.t_cljs$core$async38801(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38864 = arguments.length;
switch (G__38864) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38893 = arguments.length;
switch (G__38893) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38920 = arguments.length;
switch (G__38920) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41743 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41743) : fn1.call(null,val_41743));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41743) : fn1.call(null,val_41743));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38943 = arguments.length;
switch (G__38943) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___41750 = n;
var x_41751 = (0);
while(true){
if((x_41751 < n__4741__auto___41750)){
(a[x_41751] = x_41751);

var G__41753 = (x_41751 + (1));
x_41751 = G__41753;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38979 = (function (flag,meta38980){
this.flag = flag;
this.meta38980 = meta38980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38981,meta38980__$1){
var self__ = this;
var _38981__$1 = this;
return (new cljs.core.async.t_cljs$core$async38979(self__.flag,meta38980__$1));
}));

(cljs.core.async.t_cljs$core$async38979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38981){
var self__ = this;
var _38981__$1 = this;
return self__.meta38980;
}));

(cljs.core.async.t_cljs$core$async38979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38980","meta38980",-1438242684,null)], null);
}));

(cljs.core.async.t_cljs$core$async38979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38979");

(cljs.core.async.t_cljs$core$async38979.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async38979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38979.
 */
cljs.core.async.__GT_t_cljs$core$async38979 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38979(flag__$1,meta38980){
return (new cljs.core.async.t_cljs$core$async38979(flag__$1,meta38980));
});

}

return (new cljs.core.async.t_cljs$core$async38979(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39019 = (function (flag,cb,meta39020){
this.flag = flag;
this.cb = cb;
this.meta39020 = meta39020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39021,meta39020__$1){
var self__ = this;
var _39021__$1 = this;
return (new cljs.core.async.t_cljs$core$async39019(self__.flag,self__.cb,meta39020__$1));
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39021){
var self__ = this;
var _39021__$1 = this;
return self__.meta39020;
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39020","meta39020",-928475161,null)], null);
}));

(cljs.core.async.t_cljs$core$async39019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39019");

(cljs.core.async.t_cljs$core$async39019.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async39019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39019.
 */
cljs.core.async.__GT_t_cljs$core$async39019 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39019(flag__$1,cb__$1,meta39020){
return (new cljs.core.async.t_cljs$core$async39019(flag__$1,cb__$1,meta39020));
});

}

return (new cljs.core.async.t_cljs$core$async39019(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39033_SHARP_){
var G__39037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39033_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39037) : fret.call(null,G__39037));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39034_SHARP_){
var G__39038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39034_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39038) : fret.call(null,G__39038));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41778 = (i + (1));
i = G__41778;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___41781 = arguments.length;
var i__4865__auto___41782 = (0);
while(true){
if((i__4865__auto___41782 < len__4864__auto___41781)){
args__4870__auto__.push((arguments[i__4865__auto___41782]));

var G__41784 = (i__4865__auto___41782 + (1));
i__4865__auto___41782 = G__41784;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39054){
var map__39055 = p__39054;
var map__39055__$1 = cljs.core.__destructure_map(map__39055);
var opts = map__39055__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39041){
var G__39042 = cljs.core.first(seq39041);
var seq39041__$1 = cljs.core.next(seq39041);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39042,seq39041__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39084 = arguments.length;
switch (G__39084) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29375__auto___41795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39127){
var state_val_39128 = (state_39127[(1)]);
if((state_val_39128 === (7))){
var inst_39121 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
var statearr_39136_41796 = state_39127__$1;
(statearr_39136_41796[(2)] = inst_39121);

(statearr_39136_41796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (1))){
var state_39127__$1 = state_39127;
var statearr_39137_41797 = state_39127__$1;
(statearr_39137_41797[(2)] = null);

(statearr_39137_41797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (4))){
var inst_39092 = (state_39127[(7)]);
var inst_39092__$1 = (state_39127[(2)]);
var inst_39093 = (inst_39092__$1 == null);
var state_39127__$1 = (function (){var statearr_39139 = state_39127;
(statearr_39139[(7)] = inst_39092__$1);

return statearr_39139;
})();
if(cljs.core.truth_(inst_39093)){
var statearr_39141_41800 = state_39127__$1;
(statearr_39141_41800[(1)] = (5));

} else {
var statearr_39142_41801 = state_39127__$1;
(statearr_39142_41801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (13))){
var state_39127__$1 = state_39127;
var statearr_39144_41804 = state_39127__$1;
(statearr_39144_41804[(2)] = null);

(statearr_39144_41804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (6))){
var inst_39092 = (state_39127[(7)]);
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39127__$1,(11),to,inst_39092);
} else {
if((state_val_39128 === (3))){
var inst_39124 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39127__$1,inst_39124);
} else {
if((state_val_39128 === (12))){
var state_39127__$1 = state_39127;
var statearr_39145_41806 = state_39127__$1;
(statearr_39145_41806[(2)] = null);

(statearr_39145_41806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (2))){
var state_39127__$1 = state_39127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39127__$1,(4),from);
} else {
if((state_val_39128 === (11))){
var inst_39109 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
if(cljs.core.truth_(inst_39109)){
var statearr_39147_41810 = state_39127__$1;
(statearr_39147_41810[(1)] = (12));

} else {
var statearr_39148_41811 = state_39127__$1;
(statearr_39148_41811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (9))){
var state_39127__$1 = state_39127;
var statearr_39160_41813 = state_39127__$1;
(statearr_39160_41813[(2)] = null);

(statearr_39160_41813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (5))){
var state_39127__$1 = state_39127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39161_41814 = state_39127__$1;
(statearr_39161_41814[(1)] = (8));

} else {
var statearr_39162_41815 = state_39127__$1;
(statearr_39162_41815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (14))){
var inst_39119 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
var statearr_39163_41817 = state_39127__$1;
(statearr_39163_41817[(2)] = inst_39119);

(statearr_39163_41817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (10))){
var inst_39100 = (state_39127[(2)]);
var state_39127__$1 = state_39127;
var statearr_39164_41818 = state_39127__$1;
(statearr_39164_41818[(2)] = inst_39100);

(statearr_39164_41818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39128 === (8))){
var inst_39097 = cljs.core.async.close_BANG_(to);
var state_39127__$1 = state_39127;
var statearr_39168_41820 = state_39127__$1;
(statearr_39168_41820[(2)] = inst_39097);

(statearr_39168_41820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_39172 = [null,null,null,null,null,null,null,null];
(statearr_39172[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_39172[(1)] = (1));

return statearr_39172;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_39127){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39127);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39176){var ex__29175__auto__ = e39176;
var statearr_39179_41821 = state_39127;
(statearr_39179_41821[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39127[(4)]))){
var statearr_39181_41822 = state_39127;
(statearr_39181_41822[(1)] = cljs.core.first((state_39127[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41823 = state_39127;
state_39127 = G__41823;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_39127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_39127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39186 = f__29376__auto__();
(statearr_39186[(6)] = c__29375__auto___41795);

return statearr_39186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__39210){
var vec__39213 = p__39210;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39213,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39213,(1),null);
var job = vec__39213;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29375__auto___41824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39222){
var state_val_39223 = (state_39222[(1)]);
if((state_val_39223 === (1))){
var state_39222__$1 = state_39222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39222__$1,(2),res,v);
} else {
if((state_val_39223 === (2))){
var inst_39218 = (state_39222[(2)]);
var inst_39220 = cljs.core.async.close_BANG_(res);
var state_39222__$1 = (function (){var statearr_39229 = state_39222;
(statearr_39229[(7)] = inst_39218);

return statearr_39229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39222__$1,inst_39220);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0 = (function (){
var statearr_39238 = [null,null,null,null,null,null,null,null];
(statearr_39238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__);

(statearr_39238[(1)] = (1));

return statearr_39238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1 = (function (state_39222){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39222);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39241){var ex__29175__auto__ = e39241;
var statearr_39242_41827 = state_39222;
(statearr_39242_41827[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39222[(4)]))){
var statearr_39243_41829 = state_39222;
(statearr_39243_41829[(1)] = cljs.core.first((state_39222[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41830 = state_39222;
state_39222 = G__41830;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = function(state_39222){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1.call(this,state_39222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39244 = f__29376__auto__();
(statearr_39244[(6)] = c__29375__auto___41824);

return statearr_39244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39248){
var vec__39250 = p__39248;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39250,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39250,(1),null);
var job = vec__39250;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___41832 = n;
var __41833 = (0);
while(true){
if((__41833 < n__4741__auto___41832)){
var G__39256_41835 = type;
var G__39256_41836__$1 = (((G__39256_41835 instanceof cljs.core.Keyword))?G__39256_41835.fqn:null);
switch (G__39256_41836__$1) {
case "compute":
var c__29375__auto___41838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41833,c__29375__auto___41838,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async){
return (function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = ((function (__41833,c__29375__auto___41838,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async){
return (function (state_39278){
var state_val_39279 = (state_39278[(1)]);
if((state_val_39279 === (1))){
var state_39278__$1 = state_39278;
var statearr_39284_41839 = state_39278__$1;
(statearr_39284_41839[(2)] = null);

(statearr_39284_41839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39279 === (2))){
var state_39278__$1 = state_39278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39278__$1,(4),jobs);
} else {
if((state_val_39279 === (3))){
var inst_39272 = (state_39278[(2)]);
var state_39278__$1 = state_39278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39278__$1,inst_39272);
} else {
if((state_val_39279 === (4))){
var inst_39264 = (state_39278[(2)]);
var inst_39265 = process(inst_39264);
var state_39278__$1 = state_39278;
if(cljs.core.truth_(inst_39265)){
var statearr_39289_41840 = state_39278__$1;
(statearr_39289_41840[(1)] = (5));

} else {
var statearr_39292_41841 = state_39278__$1;
(statearr_39292_41841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39279 === (5))){
var state_39278__$1 = state_39278;
var statearr_39294_41842 = state_39278__$1;
(statearr_39294_41842[(2)] = null);

(statearr_39294_41842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39279 === (6))){
var state_39278__$1 = state_39278;
var statearr_39299_41843 = state_39278__$1;
(statearr_39299_41843[(2)] = null);

(statearr_39299_41843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39279 === (7))){
var inst_39270 = (state_39278[(2)]);
var state_39278__$1 = state_39278;
var statearr_39300_41844 = state_39278__$1;
(statearr_39300_41844[(2)] = inst_39270);

(statearr_39300_41844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41833,c__29375__auto___41838,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async))
;
return ((function (__41833,switch__29171__auto__,c__29375__auto___41838,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0 = (function (){
var statearr_39304 = [null,null,null,null,null,null,null];
(statearr_39304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__);

(statearr_39304[(1)] = (1));

return statearr_39304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1 = (function (state_39278){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39278);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39305){var ex__29175__auto__ = e39305;
var statearr_39306_41845 = state_39278;
(statearr_39306_41845[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39278[(4)]))){
var statearr_39307_41846 = state_39278;
(statearr_39307_41846[(1)] = cljs.core.first((state_39278[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41847 = state_39278;
state_39278 = G__41847;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = function(state_39278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1.call(this,state_39278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__;
})()
;})(__41833,switch__29171__auto__,c__29375__auto___41838,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async))
})();
var state__29377__auto__ = (function (){var statearr_39311 = f__29376__auto__();
(statearr_39311[(6)] = c__29375__auto___41838);

return statearr_39311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
});})(__41833,c__29375__auto___41838,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async))
);


break;
case "async":
var c__29375__auto___41848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41833,c__29375__auto___41848,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async){
return (function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = ((function (__41833,c__29375__auto___41848,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async){
return (function (state_39329){
var state_val_39330 = (state_39329[(1)]);
if((state_val_39330 === (1))){
var state_39329__$1 = state_39329;
var statearr_39331_41849 = state_39329__$1;
(statearr_39331_41849[(2)] = null);

(statearr_39331_41849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (2))){
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39329__$1,(4),jobs);
} else {
if((state_val_39330 === (3))){
var inst_39327 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39329__$1,inst_39327);
} else {
if((state_val_39330 === (4))){
var inst_39317 = (state_39329[(2)]);
var inst_39318 = async(inst_39317);
var state_39329__$1 = state_39329;
if(cljs.core.truth_(inst_39318)){
var statearr_39333_41853 = state_39329__$1;
(statearr_39333_41853[(1)] = (5));

} else {
var statearr_39334_41856 = state_39329__$1;
(statearr_39334_41856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (5))){
var state_39329__$1 = state_39329;
var statearr_39336_41860 = state_39329__$1;
(statearr_39336_41860[(2)] = null);

(statearr_39336_41860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (6))){
var state_39329__$1 = state_39329;
var statearr_39337_41861 = state_39329__$1;
(statearr_39337_41861[(2)] = null);

(statearr_39337_41861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (7))){
var inst_39325 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39338_41862 = state_39329__$1;
(statearr_39338_41862[(2)] = inst_39325);

(statearr_39338_41862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41833,c__29375__auto___41848,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async))
;
return ((function (__41833,switch__29171__auto__,c__29375__auto___41848,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0 = (function (){
var statearr_39339 = [null,null,null,null,null,null,null];
(statearr_39339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__);

(statearr_39339[(1)] = (1));

return statearr_39339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1 = (function (state_39329){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39329);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39340){var ex__29175__auto__ = e39340;
var statearr_39341_41868 = state_39329;
(statearr_39341_41868[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39329[(4)]))){
var statearr_39342_41869 = state_39329;
(statearr_39342_41869[(1)] = cljs.core.first((state_39329[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41870 = state_39329;
state_39329 = G__41870;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = function(state_39329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1.call(this,state_39329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__;
})()
;})(__41833,switch__29171__auto__,c__29375__auto___41848,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async))
})();
var state__29377__auto__ = (function (){var statearr_39344 = f__29376__auto__();
(statearr_39344[(6)] = c__29375__auto___41848);

return statearr_39344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
});})(__41833,c__29375__auto___41848,G__39256_41835,G__39256_41836__$1,n__4741__auto___41832,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39256_41836__$1)].join('')));

}

var G__41871 = (__41833 + (1));
__41833 = G__41871;
continue;
} else {
}
break;
}

var c__29375__auto___41872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39366){
var state_val_39367 = (state_39366[(1)]);
if((state_val_39367 === (7))){
var inst_39362 = (state_39366[(2)]);
var state_39366__$1 = state_39366;
var statearr_39371_41873 = state_39366__$1;
(statearr_39371_41873[(2)] = inst_39362);

(statearr_39371_41873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (1))){
var state_39366__$1 = state_39366;
var statearr_39372_41876 = state_39366__$1;
(statearr_39372_41876[(2)] = null);

(statearr_39372_41876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (4))){
var inst_39347 = (state_39366[(7)]);
var inst_39347__$1 = (state_39366[(2)]);
var inst_39348 = (inst_39347__$1 == null);
var state_39366__$1 = (function (){var statearr_39375 = state_39366;
(statearr_39375[(7)] = inst_39347__$1);

return statearr_39375;
})();
if(cljs.core.truth_(inst_39348)){
var statearr_39376_41878 = state_39366__$1;
(statearr_39376_41878[(1)] = (5));

} else {
var statearr_39377_41879 = state_39366__$1;
(statearr_39377_41879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (6))){
var inst_39347 = (state_39366[(7)]);
var inst_39352 = (state_39366[(8)]);
var inst_39352__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39353 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39354 = [inst_39347,inst_39352__$1];
var inst_39355 = (new cljs.core.PersistentVector(null,2,(5),inst_39353,inst_39354,null));
var state_39366__$1 = (function (){var statearr_39378 = state_39366;
(statearr_39378[(8)] = inst_39352__$1);

return statearr_39378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39366__$1,(8),jobs,inst_39355);
} else {
if((state_val_39367 === (3))){
var inst_39364 = (state_39366[(2)]);
var state_39366__$1 = state_39366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39366__$1,inst_39364);
} else {
if((state_val_39367 === (2))){
var state_39366__$1 = state_39366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39366__$1,(4),from);
} else {
if((state_val_39367 === (9))){
var inst_39359 = (state_39366[(2)]);
var state_39366__$1 = (function (){var statearr_39383 = state_39366;
(statearr_39383[(9)] = inst_39359);

return statearr_39383;
})();
var statearr_39385_41884 = state_39366__$1;
(statearr_39385_41884[(2)] = null);

(statearr_39385_41884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (5))){
var inst_39350 = cljs.core.async.close_BANG_(jobs);
var state_39366__$1 = state_39366;
var statearr_39386_41885 = state_39366__$1;
(statearr_39386_41885[(2)] = inst_39350);

(statearr_39386_41885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (8))){
var inst_39352 = (state_39366[(8)]);
var inst_39357 = (state_39366[(2)]);
var state_39366__$1 = (function (){var statearr_39387 = state_39366;
(statearr_39387[(10)] = inst_39357);

return statearr_39387;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39366__$1,(9),results,inst_39352);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0 = (function (){
var statearr_39392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__);

(statearr_39392[(1)] = (1));

return statearr_39392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1 = (function (state_39366){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39366);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39394){var ex__29175__auto__ = e39394;
var statearr_39395_41897 = state_39366;
(statearr_39395_41897[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39366[(4)]))){
var statearr_39396_41898 = state_39366;
(statearr_39396_41898[(1)] = cljs.core.first((state_39366[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41899 = state_39366;
state_39366 = G__41899;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = function(state_39366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1.call(this,state_39366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39404 = f__29376__auto__();
(statearr_39404[(6)] = c__29375__auto___41872);

return statearr_39404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


var c__29375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39445){
var state_val_39446 = (state_39445[(1)]);
if((state_val_39446 === (7))){
var inst_39441 = (state_39445[(2)]);
var state_39445__$1 = state_39445;
var statearr_39449_41904 = state_39445__$1;
(statearr_39449_41904[(2)] = inst_39441);

(statearr_39449_41904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (20))){
var state_39445__$1 = state_39445;
var statearr_39450_41905 = state_39445__$1;
(statearr_39450_41905[(2)] = null);

(statearr_39450_41905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (1))){
var state_39445__$1 = state_39445;
var statearr_39452_41909 = state_39445__$1;
(statearr_39452_41909[(2)] = null);

(statearr_39452_41909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (4))){
var inst_39409 = (state_39445[(7)]);
var inst_39409__$1 = (state_39445[(2)]);
var inst_39411 = (inst_39409__$1 == null);
var state_39445__$1 = (function (){var statearr_39453 = state_39445;
(statearr_39453[(7)] = inst_39409__$1);

return statearr_39453;
})();
if(cljs.core.truth_(inst_39411)){
var statearr_39456_41911 = state_39445__$1;
(statearr_39456_41911[(1)] = (5));

} else {
var statearr_39458_41915 = state_39445__$1;
(statearr_39458_41915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (15))){
var inst_39423 = (state_39445[(8)]);
var state_39445__$1 = state_39445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39445__$1,(18),to,inst_39423);
} else {
if((state_val_39446 === (21))){
var inst_39436 = (state_39445[(2)]);
var state_39445__$1 = state_39445;
var statearr_39459_41916 = state_39445__$1;
(statearr_39459_41916[(2)] = inst_39436);

(statearr_39459_41916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (13))){
var inst_39438 = (state_39445[(2)]);
var state_39445__$1 = (function (){var statearr_39462 = state_39445;
(statearr_39462[(9)] = inst_39438);

return statearr_39462;
})();
var statearr_39465_41917 = state_39445__$1;
(statearr_39465_41917[(2)] = null);

(statearr_39465_41917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (6))){
var inst_39409 = (state_39445[(7)]);
var state_39445__$1 = state_39445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39445__$1,(11),inst_39409);
} else {
if((state_val_39446 === (17))){
var inst_39431 = (state_39445[(2)]);
var state_39445__$1 = state_39445;
if(cljs.core.truth_(inst_39431)){
var statearr_39466_41922 = state_39445__$1;
(statearr_39466_41922[(1)] = (19));

} else {
var statearr_39467_41923 = state_39445__$1;
(statearr_39467_41923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (3))){
var inst_39443 = (state_39445[(2)]);
var state_39445__$1 = state_39445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39445__$1,inst_39443);
} else {
if((state_val_39446 === (12))){
var inst_39420 = (state_39445[(10)]);
var state_39445__$1 = state_39445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39445__$1,(14),inst_39420);
} else {
if((state_val_39446 === (2))){
var state_39445__$1 = state_39445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39445__$1,(4),results);
} else {
if((state_val_39446 === (19))){
var state_39445__$1 = state_39445;
var statearr_39473_41925 = state_39445__$1;
(statearr_39473_41925[(2)] = null);

(statearr_39473_41925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (11))){
var inst_39420 = (state_39445[(2)]);
var state_39445__$1 = (function (){var statearr_39474 = state_39445;
(statearr_39474[(10)] = inst_39420);

return statearr_39474;
})();
var statearr_39475_41926 = state_39445__$1;
(statearr_39475_41926[(2)] = null);

(statearr_39475_41926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (9))){
var state_39445__$1 = state_39445;
var statearr_39479_41927 = state_39445__$1;
(statearr_39479_41927[(2)] = null);

(statearr_39479_41927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (5))){
var state_39445__$1 = state_39445;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39480_41928 = state_39445__$1;
(statearr_39480_41928[(1)] = (8));

} else {
var statearr_39481_41929 = state_39445__$1;
(statearr_39481_41929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (14))){
var inst_39423 = (state_39445[(8)]);
var inst_39425 = (state_39445[(11)]);
var inst_39423__$1 = (state_39445[(2)]);
var inst_39424 = (inst_39423__$1 == null);
var inst_39425__$1 = cljs.core.not(inst_39424);
var state_39445__$1 = (function (){var statearr_39482 = state_39445;
(statearr_39482[(8)] = inst_39423__$1);

(statearr_39482[(11)] = inst_39425__$1);

return statearr_39482;
})();
if(inst_39425__$1){
var statearr_39483_41933 = state_39445__$1;
(statearr_39483_41933[(1)] = (15));

} else {
var statearr_39484_41934 = state_39445__$1;
(statearr_39484_41934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (16))){
var inst_39425 = (state_39445[(11)]);
var state_39445__$1 = state_39445;
var statearr_39485_41935 = state_39445__$1;
(statearr_39485_41935[(2)] = inst_39425);

(statearr_39485_41935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (10))){
var inst_39417 = (state_39445[(2)]);
var state_39445__$1 = state_39445;
var statearr_39486_41936 = state_39445__$1;
(statearr_39486_41936[(2)] = inst_39417);

(statearr_39486_41936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (18))){
var inst_39428 = (state_39445[(2)]);
var state_39445__$1 = state_39445;
var statearr_39487_41937 = state_39445__$1;
(statearr_39487_41937[(2)] = inst_39428);

(statearr_39487_41937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39446 === (8))){
var inst_39414 = cljs.core.async.close_BANG_(to);
var state_39445__$1 = state_39445;
var statearr_39488_41940 = state_39445__$1;
(statearr_39488_41940[(2)] = inst_39414);

(statearr_39488_41940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0 = (function (){
var statearr_39489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__);

(statearr_39489[(1)] = (1));

return statearr_39489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1 = (function (state_39445){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39445);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39490){var ex__29175__auto__ = e39490;
var statearr_39492_41948 = state_39445;
(statearr_39492_41948[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39445[(4)]))){
var statearr_39493_41950 = state_39445;
(statearr_39493_41950[(1)] = cljs.core.first((state_39445[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41951 = state_39445;
state_39445 = G__41951;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__ = function(state_39445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1.call(this,state_39445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39494 = f__29376__auto__();
(statearr_39494[(6)] = c__29375__auto__);

return statearr_39494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));

return c__29375__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39498 = arguments.length;
switch (G__39498) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39518 = arguments.length;
switch (G__39518) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39527 = arguments.length;
switch (G__39527) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29375__auto___41965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39564){
var state_val_39565 = (state_39564[(1)]);
if((state_val_39565 === (7))){
var inst_39559 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
var statearr_39575_41966 = state_39564__$1;
(statearr_39575_41966[(2)] = inst_39559);

(statearr_39575_41966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (1))){
var state_39564__$1 = state_39564;
var statearr_39579_41967 = state_39564__$1;
(statearr_39579_41967[(2)] = null);

(statearr_39579_41967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (4))){
var inst_39539 = (state_39564[(7)]);
var inst_39539__$1 = (state_39564[(2)]);
var inst_39540 = (inst_39539__$1 == null);
var state_39564__$1 = (function (){var statearr_39582 = state_39564;
(statearr_39582[(7)] = inst_39539__$1);

return statearr_39582;
})();
if(cljs.core.truth_(inst_39540)){
var statearr_39583_41968 = state_39564__$1;
(statearr_39583_41968[(1)] = (5));

} else {
var statearr_39584_41969 = state_39564__$1;
(statearr_39584_41969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (13))){
var state_39564__$1 = state_39564;
var statearr_39587_41970 = state_39564__$1;
(statearr_39587_41970[(2)] = null);

(statearr_39587_41970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (6))){
var inst_39539 = (state_39564[(7)]);
var inst_39545 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39539) : p.call(null,inst_39539));
var state_39564__$1 = state_39564;
if(cljs.core.truth_(inst_39545)){
var statearr_39592_41975 = state_39564__$1;
(statearr_39592_41975[(1)] = (9));

} else {
var statearr_39593_41976 = state_39564__$1;
(statearr_39593_41976[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (3))){
var inst_39561 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39564__$1,inst_39561);
} else {
if((state_val_39565 === (12))){
var state_39564__$1 = state_39564;
var statearr_39595_41981 = state_39564__$1;
(statearr_39595_41981[(2)] = null);

(statearr_39595_41981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (2))){
var state_39564__$1 = state_39564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39564__$1,(4),ch);
} else {
if((state_val_39565 === (11))){
var inst_39539 = (state_39564[(7)]);
var inst_39550 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39564__$1,(8),inst_39550,inst_39539);
} else {
if((state_val_39565 === (9))){
var state_39564__$1 = state_39564;
var statearr_39605_41986 = state_39564__$1;
(statearr_39605_41986[(2)] = tc);

(statearr_39605_41986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (5))){
var inst_39542 = cljs.core.async.close_BANG_(tc);
var inst_39543 = cljs.core.async.close_BANG_(fc);
var state_39564__$1 = (function (){var statearr_39607 = state_39564;
(statearr_39607[(8)] = inst_39542);

return statearr_39607;
})();
var statearr_39609_41987 = state_39564__$1;
(statearr_39609_41987[(2)] = inst_39543);

(statearr_39609_41987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (14))){
var inst_39557 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
var statearr_39612_41988 = state_39564__$1;
(statearr_39612_41988[(2)] = inst_39557);

(statearr_39612_41988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (10))){
var state_39564__$1 = state_39564;
var statearr_39614_41989 = state_39564__$1;
(statearr_39614_41989[(2)] = fc);

(statearr_39614_41989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (8))){
var inst_39552 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
if(cljs.core.truth_(inst_39552)){
var statearr_39619_41990 = state_39564__$1;
(statearr_39619_41990[(1)] = (12));

} else {
var statearr_39621_41991 = state_39564__$1;
(statearr_39621_41991[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_39627 = [null,null,null,null,null,null,null,null,null];
(statearr_39627[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_39627[(1)] = (1));

return statearr_39627;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_39564){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39564);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39628){var ex__29175__auto__ = e39628;
var statearr_39630_41992 = state_39564;
(statearr_39630_41992[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39564[(4)]))){
var statearr_39633_41993 = state_39564;
(statearr_39633_41993[(1)] = cljs.core.first((state_39564[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41994 = state_39564;
state_39564 = G__41994;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_39564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_39564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39637 = f__29376__auto__();
(statearr_39637[(6)] = c__29375__auto___41965);

return statearr_39637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39668){
var state_val_39669 = (state_39668[(1)]);
if((state_val_39669 === (7))){
var inst_39664 = (state_39668[(2)]);
var state_39668__$1 = state_39668;
var statearr_39673_42003 = state_39668__$1;
(statearr_39673_42003[(2)] = inst_39664);

(statearr_39673_42003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39669 === (1))){
var inst_39646 = init;
var inst_39647 = inst_39646;
var state_39668__$1 = (function (){var statearr_39677 = state_39668;
(statearr_39677[(7)] = inst_39647);

return statearr_39677;
})();
var statearr_39679_42004 = state_39668__$1;
(statearr_39679_42004[(2)] = null);

(statearr_39679_42004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39669 === (4))){
var inst_39650 = (state_39668[(8)]);
var inst_39650__$1 = (state_39668[(2)]);
var inst_39651 = (inst_39650__$1 == null);
var state_39668__$1 = (function (){var statearr_39680 = state_39668;
(statearr_39680[(8)] = inst_39650__$1);

return statearr_39680;
})();
if(cljs.core.truth_(inst_39651)){
var statearr_39681_42005 = state_39668__$1;
(statearr_39681_42005[(1)] = (5));

} else {
var statearr_39683_42006 = state_39668__$1;
(statearr_39683_42006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39669 === (6))){
var inst_39654 = (state_39668[(9)]);
var inst_39650 = (state_39668[(8)]);
var inst_39647 = (state_39668[(7)]);
var inst_39654__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39647,inst_39650) : f.call(null,inst_39647,inst_39650));
var inst_39655 = cljs.core.reduced_QMARK_(inst_39654__$1);
var state_39668__$1 = (function (){var statearr_39689 = state_39668;
(statearr_39689[(9)] = inst_39654__$1);

return statearr_39689;
})();
if(inst_39655){
var statearr_39690_42012 = state_39668__$1;
(statearr_39690_42012[(1)] = (8));

} else {
var statearr_39691_42013 = state_39668__$1;
(statearr_39691_42013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39669 === (3))){
var inst_39666 = (state_39668[(2)]);
var state_39668__$1 = state_39668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39668__$1,inst_39666);
} else {
if((state_val_39669 === (2))){
var state_39668__$1 = state_39668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39668__$1,(4),ch);
} else {
if((state_val_39669 === (9))){
var inst_39654 = (state_39668[(9)]);
var inst_39647 = inst_39654;
var state_39668__$1 = (function (){var statearr_39697 = state_39668;
(statearr_39697[(7)] = inst_39647);

return statearr_39697;
})();
var statearr_39698_42022 = state_39668__$1;
(statearr_39698_42022[(2)] = null);

(statearr_39698_42022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39669 === (5))){
var inst_39647 = (state_39668[(7)]);
var state_39668__$1 = state_39668;
var statearr_39700_42024 = state_39668__$1;
(statearr_39700_42024[(2)] = inst_39647);

(statearr_39700_42024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39669 === (10))){
var inst_39662 = (state_39668[(2)]);
var state_39668__$1 = state_39668;
var statearr_39702_42026 = state_39668__$1;
(statearr_39702_42026[(2)] = inst_39662);

(statearr_39702_42026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39669 === (8))){
var inst_39654 = (state_39668[(9)]);
var inst_39657 = cljs.core.deref(inst_39654);
var state_39668__$1 = state_39668;
var statearr_39703_42032 = state_39668__$1;
(statearr_39703_42032[(2)] = inst_39657);

(statearr_39703_42032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29172__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29172__auto____0 = (function (){
var statearr_39707 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39707[(0)] = cljs$core$async$reduce_$_state_machine__29172__auto__);

(statearr_39707[(1)] = (1));

return statearr_39707;
});
var cljs$core$async$reduce_$_state_machine__29172__auto____1 = (function (state_39668){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39668);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39708){var ex__29175__auto__ = e39708;
var statearr_39709_42036 = state_39668;
(statearr_39709_42036[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39668[(4)]))){
var statearr_39711_42037 = state_39668;
(statearr_39711_42037[(1)] = cljs.core.first((state_39668[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42045 = state_39668;
state_39668 = G__42045;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29172__auto__ = function(state_39668){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29172__auto____1.call(this,state_39668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29172__auto____0;
cljs$core$async$reduce_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29172__auto____1;
return cljs$core$async$reduce_$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39713 = f__29376__auto__();
(statearr_39713[(6)] = c__29375__auto__);

return statearr_39713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));

return c__29375__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39723){
var state_val_39724 = (state_39723[(1)]);
if((state_val_39724 === (1))){
var inst_39718 = cljs.core.async.reduce(f__$1,init,ch);
var state_39723__$1 = state_39723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39723__$1,(2),inst_39718);
} else {
if((state_val_39724 === (2))){
var inst_39720 = (state_39723[(2)]);
var inst_39721 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39720) : f__$1.call(null,inst_39720));
var state_39723__$1 = state_39723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39723__$1,inst_39721);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29172__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29172__auto____0 = (function (){
var statearr_39737 = [null,null,null,null,null,null,null];
(statearr_39737[(0)] = cljs$core$async$transduce_$_state_machine__29172__auto__);

(statearr_39737[(1)] = (1));

return statearr_39737;
});
var cljs$core$async$transduce_$_state_machine__29172__auto____1 = (function (state_39723){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39723);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39738){var ex__29175__auto__ = e39738;
var statearr_39739_42055 = state_39723;
(statearr_39739_42055[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39723[(4)]))){
var statearr_39740_42056 = state_39723;
(statearr_39740_42056[(1)] = cljs.core.first((state_39723[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42058 = state_39723;
state_39723 = G__42058;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29172__auto__ = function(state_39723){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29172__auto____1.call(this,state_39723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29172__auto____0;
cljs$core$async$transduce_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29172__auto____1;
return cljs$core$async$transduce_$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39748 = f__29376__auto__();
(statearr_39748[(6)] = c__29375__auto__);

return statearr_39748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));

return c__29375__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__39750 = arguments.length;
switch (G__39750) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_39779){
var state_val_39780 = (state_39779[(1)]);
if((state_val_39780 === (7))){
var inst_39761 = (state_39779[(2)]);
var state_39779__$1 = state_39779;
var statearr_39782_42068 = state_39779__$1;
(statearr_39782_42068[(2)] = inst_39761);

(statearr_39782_42068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (1))){
var inst_39755 = cljs.core.seq(coll);
var inst_39756 = inst_39755;
var state_39779__$1 = (function (){var statearr_39785 = state_39779;
(statearr_39785[(7)] = inst_39756);

return statearr_39785;
})();
var statearr_39787_42074 = state_39779__$1;
(statearr_39787_42074[(2)] = null);

(statearr_39787_42074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (4))){
var inst_39756 = (state_39779[(7)]);
var inst_39759 = cljs.core.first(inst_39756);
var state_39779__$1 = state_39779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39779__$1,(7),ch,inst_39759);
} else {
if((state_val_39780 === (13))){
var inst_39773 = (state_39779[(2)]);
var state_39779__$1 = state_39779;
var statearr_39788_42081 = state_39779__$1;
(statearr_39788_42081[(2)] = inst_39773);

(statearr_39788_42081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (6))){
var inst_39764 = (state_39779[(2)]);
var state_39779__$1 = state_39779;
if(cljs.core.truth_(inst_39764)){
var statearr_39789_42083 = state_39779__$1;
(statearr_39789_42083[(1)] = (8));

} else {
var statearr_39790_42085 = state_39779__$1;
(statearr_39790_42085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (3))){
var inst_39777 = (state_39779[(2)]);
var state_39779__$1 = state_39779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39779__$1,inst_39777);
} else {
if((state_val_39780 === (12))){
var state_39779__$1 = state_39779;
var statearr_39791_42088 = state_39779__$1;
(statearr_39791_42088[(2)] = null);

(statearr_39791_42088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (2))){
var inst_39756 = (state_39779[(7)]);
var state_39779__$1 = state_39779;
if(cljs.core.truth_(inst_39756)){
var statearr_39792_42089 = state_39779__$1;
(statearr_39792_42089[(1)] = (4));

} else {
var statearr_39793_42091 = state_39779__$1;
(statearr_39793_42091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (11))){
var inst_39770 = cljs.core.async.close_BANG_(ch);
var state_39779__$1 = state_39779;
var statearr_39794_42094 = state_39779__$1;
(statearr_39794_42094[(2)] = inst_39770);

(statearr_39794_42094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (9))){
var state_39779__$1 = state_39779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39795_42103 = state_39779__$1;
(statearr_39795_42103[(1)] = (11));

} else {
var statearr_39797_42105 = state_39779__$1;
(statearr_39797_42105[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (5))){
var inst_39756 = (state_39779[(7)]);
var state_39779__$1 = state_39779;
var statearr_39802_42106 = state_39779__$1;
(statearr_39802_42106[(2)] = inst_39756);

(statearr_39802_42106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (10))){
var inst_39775 = (state_39779[(2)]);
var state_39779__$1 = state_39779;
var statearr_39803_42110 = state_39779__$1;
(statearr_39803_42110[(2)] = inst_39775);

(statearr_39803_42110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39780 === (8))){
var inst_39756 = (state_39779[(7)]);
var inst_39766 = cljs.core.next(inst_39756);
var inst_39756__$1 = inst_39766;
var state_39779__$1 = (function (){var statearr_39804 = state_39779;
(statearr_39804[(7)] = inst_39756__$1);

return statearr_39804;
})();
var statearr_39805_42111 = state_39779__$1;
(statearr_39805_42111[(2)] = null);

(statearr_39805_42111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_39810 = [null,null,null,null,null,null,null,null];
(statearr_39810[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_39810[(1)] = (1));

return statearr_39810;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_39779){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_39779);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e39811){var ex__29175__auto__ = e39811;
var statearr_39812_42112 = state_39779;
(statearr_39812_42112[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_39779[(4)]))){
var statearr_39813_42113 = state_39779;
(statearr_39813_42113[(1)] = cljs.core.first((state_39779[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42114 = state_39779;
state_39779 = G__42114;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_39779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_39779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_39818 = f__29376__auto__();
(statearr_39818[(6)] = c__29375__auto__);

return statearr_39818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));

return c__29375__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39825 = arguments.length;
switch (G__39825) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42117 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42117(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42119 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42119(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42162 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42162(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42168 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42168(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39869 = (function (ch,cs,meta39870){
this.ch = ch;
this.cs = cs;
this.meta39870 = meta39870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39871,meta39870__$1){
var self__ = this;
var _39871__$1 = this;
return (new cljs.core.async.t_cljs$core$async39869(self__.ch,self__.cs,meta39870__$1));
}));

(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39871){
var self__ = this;
var _39871__$1 = this;
return self__.meta39870;
}));

(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39869.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39870","meta39870",1488457560,null)], null);
}));

(cljs.core.async.t_cljs$core$async39869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39869");

(cljs.core.async.t_cljs$core$async39869.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async39869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39869.
 */
cljs.core.async.__GT_t_cljs$core$async39869 = (function cljs$core$async$mult_$___GT_t_cljs$core$async39869(ch__$1,cs__$1,meta39870){
return (new cljs.core.async.t_cljs$core$async39869(ch__$1,cs__$1,meta39870));
});

}

return (new cljs.core.async.t_cljs$core$async39869(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29375__auto___42198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_40041){
var state_val_40042 = (state_40041[(1)]);
if((state_val_40042 === (7))){
var inst_40034 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40046_42199 = state_40041__$1;
(statearr_40046_42199[(2)] = inst_40034);

(statearr_40046_42199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (20))){
var inst_39924 = (state_40041[(7)]);
var inst_39939 = cljs.core.first(inst_39924);
var inst_39940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39939,(0),null);
var inst_39941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39939,(1),null);
var state_40041__$1 = (function (){var statearr_40047 = state_40041;
(statearr_40047[(8)] = inst_39940);

return statearr_40047;
})();
if(cljs.core.truth_(inst_39941)){
var statearr_40048_42201 = state_40041__$1;
(statearr_40048_42201[(1)] = (22));

} else {
var statearr_40049_42202 = state_40041__$1;
(statearr_40049_42202[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (27))){
var inst_39973 = (state_40041[(9)]);
var inst_39971 = (state_40041[(10)]);
var inst_39886 = (state_40041[(11)]);
var inst_39979 = (state_40041[(12)]);
var inst_39979__$1 = cljs.core._nth(inst_39971,inst_39973);
var inst_39980 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39979__$1,inst_39886,done);
var state_40041__$1 = (function (){var statearr_40050 = state_40041;
(statearr_40050[(12)] = inst_39979__$1);

return statearr_40050;
})();
if(cljs.core.truth_(inst_39980)){
var statearr_40056_42211 = state_40041__$1;
(statearr_40056_42211[(1)] = (30));

} else {
var statearr_40057_42212 = state_40041__$1;
(statearr_40057_42212[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (1))){
var state_40041__$1 = state_40041;
var statearr_40059_42215 = state_40041__$1;
(statearr_40059_42215[(2)] = null);

(statearr_40059_42215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (24))){
var inst_39924 = (state_40041[(7)]);
var inst_39948 = (state_40041[(2)]);
var inst_39949 = cljs.core.next(inst_39924);
var inst_39897 = inst_39949;
var inst_39898 = null;
var inst_39899 = (0);
var inst_39900 = (0);
var state_40041__$1 = (function (){var statearr_40063 = state_40041;
(statearr_40063[(13)] = inst_39948);

(statearr_40063[(14)] = inst_39897);

(statearr_40063[(15)] = inst_39900);

(statearr_40063[(16)] = inst_39898);

(statearr_40063[(17)] = inst_39899);

return statearr_40063;
})();
var statearr_40064_42218 = state_40041__$1;
(statearr_40064_42218[(2)] = null);

(statearr_40064_42218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (39))){
var state_40041__$1 = state_40041;
var statearr_40069_42219 = state_40041__$1;
(statearr_40069_42219[(2)] = null);

(statearr_40069_42219[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (4))){
var inst_39886 = (state_40041[(11)]);
var inst_39886__$1 = (state_40041[(2)]);
var inst_39888 = (inst_39886__$1 == null);
var state_40041__$1 = (function (){var statearr_40071 = state_40041;
(statearr_40071[(11)] = inst_39886__$1);

return statearr_40071;
})();
if(cljs.core.truth_(inst_39888)){
var statearr_40072_42222 = state_40041__$1;
(statearr_40072_42222[(1)] = (5));

} else {
var statearr_40073_42223 = state_40041__$1;
(statearr_40073_42223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (15))){
var inst_39897 = (state_40041[(14)]);
var inst_39900 = (state_40041[(15)]);
var inst_39898 = (state_40041[(16)]);
var inst_39899 = (state_40041[(17)]);
var inst_39920 = (state_40041[(2)]);
var inst_39921 = (inst_39900 + (1));
var tmp40065 = inst_39897;
var tmp40066 = inst_39898;
var tmp40067 = inst_39899;
var inst_39897__$1 = tmp40065;
var inst_39898__$1 = tmp40066;
var inst_39899__$1 = tmp40067;
var inst_39900__$1 = inst_39921;
var state_40041__$1 = (function (){var statearr_40077 = state_40041;
(statearr_40077[(14)] = inst_39897__$1);

(statearr_40077[(15)] = inst_39900__$1);

(statearr_40077[(18)] = inst_39920);

(statearr_40077[(16)] = inst_39898__$1);

(statearr_40077[(17)] = inst_39899__$1);

return statearr_40077;
})();
var statearr_40078_42224 = state_40041__$1;
(statearr_40078_42224[(2)] = null);

(statearr_40078_42224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (21))){
var inst_39952 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40084_42226 = state_40041__$1;
(statearr_40084_42226[(2)] = inst_39952);

(statearr_40084_42226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (31))){
var inst_39979 = (state_40041[(12)]);
var inst_39984 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39979);
var state_40041__$1 = state_40041;
var statearr_40087_42235 = state_40041__$1;
(statearr_40087_42235[(2)] = inst_39984);

(statearr_40087_42235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (32))){
var inst_39973 = (state_40041[(9)]);
var inst_39971 = (state_40041[(10)]);
var inst_39972 = (state_40041[(19)]);
var inst_39970 = (state_40041[(20)]);
var inst_39987 = (state_40041[(2)]);
var inst_39988 = (inst_39973 + (1));
var tmp40079 = inst_39971;
var tmp40080 = inst_39972;
var tmp40081 = inst_39970;
var inst_39970__$1 = tmp40081;
var inst_39971__$1 = tmp40079;
var inst_39972__$1 = tmp40080;
var inst_39973__$1 = inst_39988;
var state_40041__$1 = (function (){var statearr_40090 = state_40041;
(statearr_40090[(9)] = inst_39973__$1);

(statearr_40090[(10)] = inst_39971__$1);

(statearr_40090[(19)] = inst_39972__$1);

(statearr_40090[(20)] = inst_39970__$1);

(statearr_40090[(21)] = inst_39987);

return statearr_40090;
})();
var statearr_40091_42244 = state_40041__$1;
(statearr_40091_42244[(2)] = null);

(statearr_40091_42244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (40))){
var inst_40003 = (state_40041[(22)]);
var inst_40008 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40003);
var state_40041__$1 = state_40041;
var statearr_40094_42246 = state_40041__$1;
(statearr_40094_42246[(2)] = inst_40008);

(statearr_40094_42246[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (33))){
var inst_39992 = (state_40041[(23)]);
var inst_39995 = cljs.core.chunked_seq_QMARK_(inst_39992);
var state_40041__$1 = state_40041;
if(inst_39995){
var statearr_40095_42250 = state_40041__$1;
(statearr_40095_42250[(1)] = (36));

} else {
var statearr_40096_42251 = state_40041__$1;
(statearr_40096_42251[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (13))){
var inst_39914 = (state_40041[(24)]);
var inst_39917 = cljs.core.async.close_BANG_(inst_39914);
var state_40041__$1 = state_40041;
var statearr_40099_42252 = state_40041__$1;
(statearr_40099_42252[(2)] = inst_39917);

(statearr_40099_42252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (22))){
var inst_39940 = (state_40041[(8)]);
var inst_39945 = cljs.core.async.close_BANG_(inst_39940);
var state_40041__$1 = state_40041;
var statearr_40114_42254 = state_40041__$1;
(statearr_40114_42254[(2)] = inst_39945);

(statearr_40114_42254[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (36))){
var inst_39992 = (state_40041[(23)]);
var inst_39997 = cljs.core.chunk_first(inst_39992);
var inst_39998 = cljs.core.chunk_rest(inst_39992);
var inst_39999 = cljs.core.count(inst_39997);
var inst_39970 = inst_39998;
var inst_39971 = inst_39997;
var inst_39972 = inst_39999;
var inst_39973 = (0);
var state_40041__$1 = (function (){var statearr_40115 = state_40041;
(statearr_40115[(9)] = inst_39973);

(statearr_40115[(10)] = inst_39971);

(statearr_40115[(19)] = inst_39972);

(statearr_40115[(20)] = inst_39970);

return statearr_40115;
})();
var statearr_40116_42256 = state_40041__$1;
(statearr_40116_42256[(2)] = null);

(statearr_40116_42256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (41))){
var inst_39992 = (state_40041[(23)]);
var inst_40010 = (state_40041[(2)]);
var inst_40012 = cljs.core.next(inst_39992);
var inst_39970 = inst_40012;
var inst_39971 = null;
var inst_39972 = (0);
var inst_39973 = (0);
var state_40041__$1 = (function (){var statearr_40117 = state_40041;
(statearr_40117[(25)] = inst_40010);

(statearr_40117[(9)] = inst_39973);

(statearr_40117[(10)] = inst_39971);

(statearr_40117[(19)] = inst_39972);

(statearr_40117[(20)] = inst_39970);

return statearr_40117;
})();
var statearr_40118_42257 = state_40041__$1;
(statearr_40118_42257[(2)] = null);

(statearr_40118_42257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (43))){
var state_40041__$1 = state_40041;
var statearr_40120_42258 = state_40041__$1;
(statearr_40120_42258[(2)] = null);

(statearr_40120_42258[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (29))){
var inst_40020 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40124_42259 = state_40041__$1;
(statearr_40124_42259[(2)] = inst_40020);

(statearr_40124_42259[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (44))){
var inst_40031 = (state_40041[(2)]);
var state_40041__$1 = (function (){var statearr_40125 = state_40041;
(statearr_40125[(26)] = inst_40031);

return statearr_40125;
})();
var statearr_40126_42262 = state_40041__$1;
(statearr_40126_42262[(2)] = null);

(statearr_40126_42262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (6))){
var inst_39962 = (state_40041[(27)]);
var inst_39961 = cljs.core.deref(cs);
var inst_39962__$1 = cljs.core.keys(inst_39961);
var inst_39963 = cljs.core.count(inst_39962__$1);
var inst_39964 = cljs.core.reset_BANG_(dctr,inst_39963);
var inst_39969 = cljs.core.seq(inst_39962__$1);
var inst_39970 = inst_39969;
var inst_39971 = null;
var inst_39972 = (0);
var inst_39973 = (0);
var state_40041__$1 = (function (){var statearr_40127 = state_40041;
(statearr_40127[(9)] = inst_39973);

(statearr_40127[(10)] = inst_39971);

(statearr_40127[(19)] = inst_39972);

(statearr_40127[(20)] = inst_39970);

(statearr_40127[(28)] = inst_39964);

(statearr_40127[(27)] = inst_39962__$1);

return statearr_40127;
})();
var statearr_40131_42271 = state_40041__$1;
(statearr_40131_42271[(2)] = null);

(statearr_40131_42271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (28))){
var inst_39992 = (state_40041[(23)]);
var inst_39970 = (state_40041[(20)]);
var inst_39992__$1 = cljs.core.seq(inst_39970);
var state_40041__$1 = (function (){var statearr_40133 = state_40041;
(statearr_40133[(23)] = inst_39992__$1);

return statearr_40133;
})();
if(inst_39992__$1){
var statearr_40134_42272 = state_40041__$1;
(statearr_40134_42272[(1)] = (33));

} else {
var statearr_40137_42273 = state_40041__$1;
(statearr_40137_42273[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (25))){
var inst_39973 = (state_40041[(9)]);
var inst_39972 = (state_40041[(19)]);
var inst_39976 = (inst_39973 < inst_39972);
var inst_39977 = inst_39976;
var state_40041__$1 = state_40041;
if(cljs.core.truth_(inst_39977)){
var statearr_40138_42386 = state_40041__$1;
(statearr_40138_42386[(1)] = (27));

} else {
var statearr_40139_42387 = state_40041__$1;
(statearr_40139_42387[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (34))){
var state_40041__$1 = state_40041;
var statearr_40140_42388 = state_40041__$1;
(statearr_40140_42388[(2)] = null);

(statearr_40140_42388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (17))){
var state_40041__$1 = state_40041;
var statearr_40141_42389 = state_40041__$1;
(statearr_40141_42389[(2)] = null);

(statearr_40141_42389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (3))){
var inst_40036 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40041__$1,inst_40036);
} else {
if((state_val_40042 === (12))){
var inst_39957 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40153_42399 = state_40041__$1;
(statearr_40153_42399[(2)] = inst_39957);

(statearr_40153_42399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (2))){
var state_40041__$1 = state_40041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40041__$1,(4),ch);
} else {
if((state_val_40042 === (23))){
var state_40041__$1 = state_40041;
var statearr_40158_42405 = state_40041__$1;
(statearr_40158_42405[(2)] = null);

(statearr_40158_42405[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (35))){
var inst_40018 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40162_42407 = state_40041__$1;
(statearr_40162_42407[(2)] = inst_40018);

(statearr_40162_42407[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (19))){
var inst_39924 = (state_40041[(7)]);
var inst_39929 = cljs.core.chunk_first(inst_39924);
var inst_39930 = cljs.core.chunk_rest(inst_39924);
var inst_39931 = cljs.core.count(inst_39929);
var inst_39897 = inst_39930;
var inst_39898 = inst_39929;
var inst_39899 = inst_39931;
var inst_39900 = (0);
var state_40041__$1 = (function (){var statearr_40163 = state_40041;
(statearr_40163[(14)] = inst_39897);

(statearr_40163[(15)] = inst_39900);

(statearr_40163[(16)] = inst_39898);

(statearr_40163[(17)] = inst_39899);

return statearr_40163;
})();
var statearr_40166_42408 = state_40041__$1;
(statearr_40166_42408[(2)] = null);

(statearr_40166_42408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (11))){
var inst_39924 = (state_40041[(7)]);
var inst_39897 = (state_40041[(14)]);
var inst_39924__$1 = cljs.core.seq(inst_39897);
var state_40041__$1 = (function (){var statearr_40169 = state_40041;
(statearr_40169[(7)] = inst_39924__$1);

return statearr_40169;
})();
if(inst_39924__$1){
var statearr_40170_42409 = state_40041__$1;
(statearr_40170_42409[(1)] = (16));

} else {
var statearr_40171_42410 = state_40041__$1;
(statearr_40171_42410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (9))){
var inst_39959 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40172_42411 = state_40041__$1;
(statearr_40172_42411[(2)] = inst_39959);

(statearr_40172_42411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (5))){
var inst_39895 = cljs.core.deref(cs);
var inst_39896 = cljs.core.seq(inst_39895);
var inst_39897 = inst_39896;
var inst_39898 = null;
var inst_39899 = (0);
var inst_39900 = (0);
var state_40041__$1 = (function (){var statearr_40173 = state_40041;
(statearr_40173[(14)] = inst_39897);

(statearr_40173[(15)] = inst_39900);

(statearr_40173[(16)] = inst_39898);

(statearr_40173[(17)] = inst_39899);

return statearr_40173;
})();
var statearr_40174_42415 = state_40041__$1;
(statearr_40174_42415[(2)] = null);

(statearr_40174_42415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (14))){
var state_40041__$1 = state_40041;
var statearr_40176_42416 = state_40041__$1;
(statearr_40176_42416[(2)] = null);

(statearr_40176_42416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (45))){
var inst_40028 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40180_42417 = state_40041__$1;
(statearr_40180_42417[(2)] = inst_40028);

(statearr_40180_42417[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (26))){
var inst_39962 = (state_40041[(27)]);
var inst_40022 = (state_40041[(2)]);
var inst_40025 = cljs.core.seq(inst_39962);
var state_40041__$1 = (function (){var statearr_40183 = state_40041;
(statearr_40183[(29)] = inst_40022);

return statearr_40183;
})();
if(inst_40025){
var statearr_40186_42418 = state_40041__$1;
(statearr_40186_42418[(1)] = (42));

} else {
var statearr_40187_42420 = state_40041__$1;
(statearr_40187_42420[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (16))){
var inst_39924 = (state_40041[(7)]);
var inst_39926 = cljs.core.chunked_seq_QMARK_(inst_39924);
var state_40041__$1 = state_40041;
if(inst_39926){
var statearr_40188_42422 = state_40041__$1;
(statearr_40188_42422[(1)] = (19));

} else {
var statearr_40189_42423 = state_40041__$1;
(statearr_40189_42423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (38))){
var inst_40015 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40191_42424 = state_40041__$1;
(statearr_40191_42424[(2)] = inst_40015);

(statearr_40191_42424[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (30))){
var state_40041__$1 = state_40041;
var statearr_40193_42425 = state_40041__$1;
(statearr_40193_42425[(2)] = null);

(statearr_40193_42425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (10))){
var inst_39900 = (state_40041[(15)]);
var inst_39898 = (state_40041[(16)]);
var inst_39913 = cljs.core._nth(inst_39898,inst_39900);
var inst_39914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39913,(0),null);
var inst_39915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39913,(1),null);
var state_40041__$1 = (function (){var statearr_40194 = state_40041;
(statearr_40194[(24)] = inst_39914);

return statearr_40194;
})();
if(cljs.core.truth_(inst_39915)){
var statearr_40195_42426 = state_40041__$1;
(statearr_40195_42426[(1)] = (13));

} else {
var statearr_40196_42427 = state_40041__$1;
(statearr_40196_42427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (18))){
var inst_39955 = (state_40041[(2)]);
var state_40041__$1 = state_40041;
var statearr_40197_42428 = state_40041__$1;
(statearr_40197_42428[(2)] = inst_39955);

(statearr_40197_42428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (42))){
var state_40041__$1 = state_40041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40041__$1,(45),dchan);
} else {
if((state_val_40042 === (37))){
var inst_40003 = (state_40041[(22)]);
var inst_39992 = (state_40041[(23)]);
var inst_39886 = (state_40041[(11)]);
var inst_40003__$1 = cljs.core.first(inst_39992);
var inst_40004 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40003__$1,inst_39886,done);
var state_40041__$1 = (function (){var statearr_40208 = state_40041;
(statearr_40208[(22)] = inst_40003__$1);

return statearr_40208;
})();
if(cljs.core.truth_(inst_40004)){
var statearr_40209_42429 = state_40041__$1;
(statearr_40209_42429[(1)] = (39));

} else {
var statearr_40211_42430 = state_40041__$1;
(statearr_40211_42430[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40042 === (8))){
var inst_39900 = (state_40041[(15)]);
var inst_39899 = (state_40041[(17)]);
var inst_39904 = (inst_39900 < inst_39899);
var inst_39905 = inst_39904;
var state_40041__$1 = state_40041;
if(cljs.core.truth_(inst_39905)){
var statearr_40213_42431 = state_40041__$1;
(statearr_40213_42431[(1)] = (10));

} else {
var statearr_40214_42432 = state_40041__$1;
(statearr_40214_42432[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29172__auto__ = null;
var cljs$core$async$mult_$_state_machine__29172__auto____0 = (function (){
var statearr_40218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40218[(0)] = cljs$core$async$mult_$_state_machine__29172__auto__);

(statearr_40218[(1)] = (1));

return statearr_40218;
});
var cljs$core$async$mult_$_state_machine__29172__auto____1 = (function (state_40041){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_40041);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e40220){var ex__29175__auto__ = e40220;
var statearr_40221_42433 = state_40041;
(statearr_40221_42433[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_40041[(4)]))){
var statearr_40222_42434 = state_40041;
(statearr_40222_42434[(1)] = cljs.core.first((state_40041[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42436 = state_40041;
state_40041 = G__42436;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29172__auto__ = function(state_40041){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29172__auto____1.call(this,state_40041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29172__auto____0;
cljs$core$async$mult_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29172__auto____1;
return cljs$core$async$mult_$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_40232 = f__29376__auto__();
(statearr_40232[(6)] = c__29375__auto___42198);

return statearr_40232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40239 = arguments.length;
switch (G__40239) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_42445 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_42445(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_42450 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_42450(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_42451 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_42451(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_42452 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_42452(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_42453 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_42453(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___42454 = arguments.length;
var i__4865__auto___42455 = (0);
while(true){
if((i__4865__auto___42455 < len__4864__auto___42454)){
args__4870__auto__.push((arguments[i__4865__auto___42455]));

var G__42456 = (i__4865__auto___42455 + (1));
i__4865__auto___42455 = G__42456;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40282){
var map__40283 = p__40282;
var map__40283__$1 = cljs.core.__destructure_map(map__40283);
var opts = map__40283__$1;
var statearr_40284_42457 = state;
(statearr_40284_42457[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40286_42459 = state;
(statearr_40286_42459[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_40289_42460 = state;
(statearr_40289_42460[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40272){
var G__40273 = cljs.core.first(seq40272);
var seq40272__$1 = cljs.core.next(seq40272);
var G__40274 = cljs.core.first(seq40272__$1);
var seq40272__$2 = cljs.core.next(seq40272__$1);
var G__40275 = cljs.core.first(seq40272__$2);
var seq40272__$3 = cljs.core.next(seq40272__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40273,G__40274,G__40275,seq40272__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40295 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40296){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40296 = meta40296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40297,meta40296__$1){
var self__ = this;
var _40297__$1 = this;
return (new cljs.core.async.t_cljs$core$async40295(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40296__$1));
}));

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40297){
var self__ = this;
var _40297__$1 = this;
return self__.meta40296;
}));

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40295.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40296","meta40296",-1579998356,null)], null);
}));

(cljs.core.async.t_cljs$core$async40295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40295");

(cljs.core.async.t_cljs$core$async40295.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async40295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40295.
 */
cljs.core.async.__GT_t_cljs$core$async40295 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40295(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40296){
return (new cljs.core.async.t_cljs$core$async40295(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40296));
});

}

return (new cljs.core.async.t_cljs$core$async40295(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29375__auto___42501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_40397){
var state_val_40398 = (state_40397[(1)]);
if((state_val_40398 === (7))){
var inst_40351 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
if(cljs.core.truth_(inst_40351)){
var statearr_40407_42502 = state_40397__$1;
(statearr_40407_42502[(1)] = (8));

} else {
var statearr_40408_42503 = state_40397__$1;
(statearr_40408_42503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (20))){
var inst_40337 = (state_40397[(7)]);
var state_40397__$1 = state_40397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40397__$1,(23),out,inst_40337);
} else {
if((state_val_40398 === (1))){
var inst_40320 = calc_state();
var inst_40321 = cljs.core.__destructure_map(inst_40320);
var inst_40322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40321,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40321,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40321,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40325 = inst_40320;
var state_40397__$1 = (function (){var statearr_40409 = state_40397;
(statearr_40409[(8)] = inst_40323);

(statearr_40409[(9)] = inst_40325);

(statearr_40409[(10)] = inst_40324);

(statearr_40409[(11)] = inst_40322);

return statearr_40409;
})();
var statearr_40410_42505 = state_40397__$1;
(statearr_40410_42505[(2)] = null);

(statearr_40410_42505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (24))){
var inst_40328 = (state_40397[(12)]);
var inst_40325 = inst_40328;
var state_40397__$1 = (function (){var statearr_40415 = state_40397;
(statearr_40415[(9)] = inst_40325);

return statearr_40415;
})();
var statearr_40416_42507 = state_40397__$1;
(statearr_40416_42507[(2)] = null);

(statearr_40416_42507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (4))){
var inst_40337 = (state_40397[(7)]);
var inst_40342 = (state_40397[(13)]);
var inst_40336 = (state_40397[(2)]);
var inst_40337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40336,(0),null);
var inst_40338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40336,(1),null);
var inst_40342__$1 = (inst_40337__$1 == null);
var state_40397__$1 = (function (){var statearr_40417 = state_40397;
(statearr_40417[(14)] = inst_40338);

(statearr_40417[(7)] = inst_40337__$1);

(statearr_40417[(13)] = inst_40342__$1);

return statearr_40417;
})();
if(cljs.core.truth_(inst_40342__$1)){
var statearr_40419_42508 = state_40397__$1;
(statearr_40419_42508[(1)] = (5));

} else {
var statearr_40420_42509 = state_40397__$1;
(statearr_40420_42509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (15))){
var inst_40368 = (state_40397[(15)]);
var inst_40329 = (state_40397[(16)]);
var inst_40368__$1 = cljs.core.empty_QMARK_(inst_40329);
var state_40397__$1 = (function (){var statearr_40425 = state_40397;
(statearr_40425[(15)] = inst_40368__$1);

return statearr_40425;
})();
if(inst_40368__$1){
var statearr_40428_42510 = state_40397__$1;
(statearr_40428_42510[(1)] = (17));

} else {
var statearr_40429_42511 = state_40397__$1;
(statearr_40429_42511[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (21))){
var inst_40328 = (state_40397[(12)]);
var inst_40325 = inst_40328;
var state_40397__$1 = (function (){var statearr_40430 = state_40397;
(statearr_40430[(9)] = inst_40325);

return statearr_40430;
})();
var statearr_40431_42512 = state_40397__$1;
(statearr_40431_42512[(2)] = null);

(statearr_40431_42512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (13))){
var inst_40358 = (state_40397[(2)]);
var inst_40359 = calc_state();
var inst_40325 = inst_40359;
var state_40397__$1 = (function (){var statearr_40432 = state_40397;
(statearr_40432[(17)] = inst_40358);

(statearr_40432[(9)] = inst_40325);

return statearr_40432;
})();
var statearr_40433_42513 = state_40397__$1;
(statearr_40433_42513[(2)] = null);

(statearr_40433_42513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (22))){
var inst_40388 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
var statearr_40437_42514 = state_40397__$1;
(statearr_40437_42514[(2)] = inst_40388);

(statearr_40437_42514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (6))){
var inst_40338 = (state_40397[(14)]);
var inst_40349 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40338,change);
var state_40397__$1 = state_40397;
var statearr_40443_42515 = state_40397__$1;
(statearr_40443_42515[(2)] = inst_40349);

(statearr_40443_42515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (25))){
var state_40397__$1 = state_40397;
var statearr_40444_42516 = state_40397__$1;
(statearr_40444_42516[(2)] = null);

(statearr_40444_42516[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (17))){
var inst_40338 = (state_40397[(14)]);
var inst_40330 = (state_40397[(18)]);
var inst_40370 = (inst_40330.cljs$core$IFn$_invoke$arity$1 ? inst_40330.cljs$core$IFn$_invoke$arity$1(inst_40338) : inst_40330.call(null,inst_40338));
var inst_40371 = cljs.core.not(inst_40370);
var state_40397__$1 = state_40397;
var statearr_40445_42517 = state_40397__$1;
(statearr_40445_42517[(2)] = inst_40371);

(statearr_40445_42517[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (3))){
var inst_40395 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40397__$1,inst_40395);
} else {
if((state_val_40398 === (12))){
var state_40397__$1 = state_40397;
var statearr_40446_42518 = state_40397__$1;
(statearr_40446_42518[(2)] = null);

(statearr_40446_42518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (2))){
var inst_40328 = (state_40397[(12)]);
var inst_40325 = (state_40397[(9)]);
var inst_40328__$1 = cljs.core.__destructure_map(inst_40325);
var inst_40329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40328__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40328__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40328__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40397__$1 = (function (){var statearr_40447 = state_40397;
(statearr_40447[(12)] = inst_40328__$1);

(statearr_40447[(16)] = inst_40329);

(statearr_40447[(18)] = inst_40330);

return statearr_40447;
})();
return cljs.core.async.ioc_alts_BANG_(state_40397__$1,(4),inst_40331);
} else {
if((state_val_40398 === (23))){
var inst_40379 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
if(cljs.core.truth_(inst_40379)){
var statearr_40448_42572 = state_40397__$1;
(statearr_40448_42572[(1)] = (24));

} else {
var statearr_40449_42573 = state_40397__$1;
(statearr_40449_42573[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (19))){
var inst_40374 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
var statearr_40452_42574 = state_40397__$1;
(statearr_40452_42574[(2)] = inst_40374);

(statearr_40452_42574[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (11))){
var inst_40338 = (state_40397[(14)]);
var inst_40355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40338);
var state_40397__$1 = state_40397;
var statearr_40455_42575 = state_40397__$1;
(statearr_40455_42575[(2)] = inst_40355);

(statearr_40455_42575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (9))){
var inst_40338 = (state_40397[(14)]);
var inst_40329 = (state_40397[(16)]);
var inst_40362 = (state_40397[(19)]);
var inst_40362__$1 = (inst_40329.cljs$core$IFn$_invoke$arity$1 ? inst_40329.cljs$core$IFn$_invoke$arity$1(inst_40338) : inst_40329.call(null,inst_40338));
var state_40397__$1 = (function (){var statearr_40468 = state_40397;
(statearr_40468[(19)] = inst_40362__$1);

return statearr_40468;
})();
if(cljs.core.truth_(inst_40362__$1)){
var statearr_40469_42576 = state_40397__$1;
(statearr_40469_42576[(1)] = (14));

} else {
var statearr_40470_42577 = state_40397__$1;
(statearr_40470_42577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (5))){
var inst_40342 = (state_40397[(13)]);
var state_40397__$1 = state_40397;
var statearr_40471_42581 = state_40397__$1;
(statearr_40471_42581[(2)] = inst_40342);

(statearr_40471_42581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (14))){
var inst_40362 = (state_40397[(19)]);
var state_40397__$1 = state_40397;
var statearr_40474_42583 = state_40397__$1;
(statearr_40474_42583[(2)] = inst_40362);

(statearr_40474_42583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (26))){
var inst_40384 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
var statearr_40476_42584 = state_40397__$1;
(statearr_40476_42584[(2)] = inst_40384);

(statearr_40476_42584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (16))){
var inst_40376 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
if(cljs.core.truth_(inst_40376)){
var statearr_40477_42594 = state_40397__$1;
(statearr_40477_42594[(1)] = (20));

} else {
var statearr_40478_42595 = state_40397__$1;
(statearr_40478_42595[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (10))){
var inst_40393 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
var statearr_40479_42596 = state_40397__$1;
(statearr_40479_42596[(2)] = inst_40393);

(statearr_40479_42596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (18))){
var inst_40368 = (state_40397[(15)]);
var state_40397__$1 = state_40397;
var statearr_40480_42597 = state_40397__$1;
(statearr_40480_42597[(2)] = inst_40368);

(statearr_40480_42597[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (8))){
var inst_40337 = (state_40397[(7)]);
var inst_40353 = (inst_40337 == null);
var state_40397__$1 = state_40397;
if(cljs.core.truth_(inst_40353)){
var statearr_40481_42598 = state_40397__$1;
(statearr_40481_42598[(1)] = (11));

} else {
var statearr_40482_42599 = state_40397__$1;
(statearr_40482_42599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29172__auto__ = null;
var cljs$core$async$mix_$_state_machine__29172__auto____0 = (function (){
var statearr_40483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40483[(0)] = cljs$core$async$mix_$_state_machine__29172__auto__);

(statearr_40483[(1)] = (1));

return statearr_40483;
});
var cljs$core$async$mix_$_state_machine__29172__auto____1 = (function (state_40397){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_40397);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e40484){var ex__29175__auto__ = e40484;
var statearr_40485_42600 = state_40397;
(statearr_40485_42600[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_40397[(4)]))){
var statearr_40486_42601 = state_40397;
(statearr_40486_42601[(1)] = cljs.core.first((state_40397[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42602 = state_40397;
state_40397 = G__42602;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29172__auto__ = function(state_40397){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29172__auto____1.call(this,state_40397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29172__auto____0;
cljs$core$async$mix_$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29172__auto____1;
return cljs$core$async$mix_$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_40489 = f__29376__auto__();
(statearr_40489[(6)] = c__29375__auto___42501);

return statearr_40489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42615 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42615(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42625 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42625(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42648 = (function() {
var G__42649 = null;
var G__42649__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42649__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42649 = function(p,v){
switch(arguments.length){
case 1:
return G__42649__1.call(this,p);
case 2:
return G__42649__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42649.cljs$core$IFn$_invoke$arity$1 = G__42649__1;
G__42649.cljs$core$IFn$_invoke$arity$2 = G__42649__2;
return G__42649;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40499 = arguments.length;
switch (G__40499) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42648(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42648(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40509 = arguments.length;
switch (G__40509) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40505_SHARP_){
if(cljs.core.truth_((p1__40505_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40505_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40505_SHARP_.call(null,topic)))){
return p1__40505_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40505_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40516 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40517){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40517 = meta40517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40518,meta40517__$1){
var self__ = this;
var _40518__$1 = this;
return (new cljs.core.async.t_cljs$core$async40516(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40517__$1));
}));

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40518){
var self__ = this;
var _40518__$1 = this;
return self__.meta40517;
}));

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40517","meta40517",890397080,null)], null);
}));

(cljs.core.async.t_cljs$core$async40516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40516");

(cljs.core.async.t_cljs$core$async40516.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async40516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40516.
 */
cljs.core.async.__GT_t_cljs$core$async40516 = (function cljs$core$async$__GT_t_cljs$core$async40516(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40517){
return (new cljs.core.async.t_cljs$core$async40516(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40517));
});

}

return (new cljs.core.async.t_cljs$core$async40516(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29375__auto___42688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_40625){
var state_val_40626 = (state_40625[(1)]);
if((state_val_40626 === (7))){
var inst_40616 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40631_42689 = state_40625__$1;
(statearr_40631_42689[(2)] = inst_40616);

(statearr_40631_42689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (20))){
var state_40625__$1 = state_40625;
var statearr_40637_42690 = state_40625__$1;
(statearr_40637_42690[(2)] = null);

(statearr_40637_42690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (1))){
var state_40625__$1 = state_40625;
var statearr_40649_42691 = state_40625__$1;
(statearr_40649_42691[(2)] = null);

(statearr_40649_42691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (24))){
var inst_40599 = (state_40625[(7)]);
var inst_40608 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40599);
var state_40625__$1 = state_40625;
var statearr_40655_42692 = state_40625__$1;
(statearr_40655_42692[(2)] = inst_40608);

(statearr_40655_42692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (4))){
var inst_40547 = (state_40625[(8)]);
var inst_40547__$1 = (state_40625[(2)]);
var inst_40548 = (inst_40547__$1 == null);
var state_40625__$1 = (function (){var statearr_40656 = state_40625;
(statearr_40656[(8)] = inst_40547__$1);

return statearr_40656;
})();
if(cljs.core.truth_(inst_40548)){
var statearr_40657_42693 = state_40625__$1;
(statearr_40657_42693[(1)] = (5));

} else {
var statearr_40658_42694 = state_40625__$1;
(statearr_40658_42694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (15))){
var inst_40593 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40662_42695 = state_40625__$1;
(statearr_40662_42695[(2)] = inst_40593);

(statearr_40662_42695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (21))){
var inst_40613 = (state_40625[(2)]);
var state_40625__$1 = (function (){var statearr_40663 = state_40625;
(statearr_40663[(9)] = inst_40613);

return statearr_40663;
})();
var statearr_40668_42696 = state_40625__$1;
(statearr_40668_42696[(2)] = null);

(statearr_40668_42696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (13))){
var inst_40573 = (state_40625[(10)]);
var inst_40575 = cljs.core.chunked_seq_QMARK_(inst_40573);
var state_40625__$1 = state_40625;
if(inst_40575){
var statearr_40678_42697 = state_40625__$1;
(statearr_40678_42697[(1)] = (16));

} else {
var statearr_40680_42698 = state_40625__$1;
(statearr_40680_42698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (22))){
var inst_40605 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
if(cljs.core.truth_(inst_40605)){
var statearr_40690_42699 = state_40625__$1;
(statearr_40690_42699[(1)] = (23));

} else {
var statearr_40691_42700 = state_40625__$1;
(statearr_40691_42700[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (6))){
var inst_40601 = (state_40625[(11)]);
var inst_40599 = (state_40625[(7)]);
var inst_40547 = (state_40625[(8)]);
var inst_40599__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40547) : topic_fn.call(null,inst_40547));
var inst_40600 = cljs.core.deref(mults);
var inst_40601__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40600,inst_40599__$1);
var state_40625__$1 = (function (){var statearr_40701 = state_40625;
(statearr_40701[(11)] = inst_40601__$1);

(statearr_40701[(7)] = inst_40599__$1);

return statearr_40701;
})();
if(cljs.core.truth_(inst_40601__$1)){
var statearr_40706_42701 = state_40625__$1;
(statearr_40706_42701[(1)] = (19));

} else {
var statearr_40711_42702 = state_40625__$1;
(statearr_40711_42702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (25))){
var inst_40610 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40716_42705 = state_40625__$1;
(statearr_40716_42705[(2)] = inst_40610);

(statearr_40716_42705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (17))){
var inst_40573 = (state_40625[(10)]);
var inst_40582 = cljs.core.first(inst_40573);
var inst_40585 = cljs.core.async.muxch_STAR_(inst_40582);
var inst_40586 = cljs.core.async.close_BANG_(inst_40585);
var inst_40587 = cljs.core.next(inst_40573);
var inst_40557 = inst_40587;
var inst_40558 = null;
var inst_40559 = (0);
var inst_40560 = (0);
var state_40625__$1 = (function (){var statearr_40717 = state_40625;
(statearr_40717[(12)] = inst_40558);

(statearr_40717[(13)] = inst_40557);

(statearr_40717[(14)] = inst_40559);

(statearr_40717[(15)] = inst_40586);

(statearr_40717[(16)] = inst_40560);

return statearr_40717;
})();
var statearr_40718_42708 = state_40625__$1;
(statearr_40718_42708[(2)] = null);

(statearr_40718_42708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (3))){
var inst_40618 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40625__$1,inst_40618);
} else {
if((state_val_40626 === (12))){
var inst_40595 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40722_42709 = state_40625__$1;
(statearr_40722_42709[(2)] = inst_40595);

(statearr_40722_42709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (2))){
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40625__$1,(4),ch);
} else {
if((state_val_40626 === (23))){
var state_40625__$1 = state_40625;
var statearr_40723_42712 = state_40625__$1;
(statearr_40723_42712[(2)] = null);

(statearr_40723_42712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (19))){
var inst_40601 = (state_40625[(11)]);
var inst_40547 = (state_40625[(8)]);
var inst_40603 = cljs.core.async.muxch_STAR_(inst_40601);
var state_40625__$1 = state_40625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40625__$1,(22),inst_40603,inst_40547);
} else {
if((state_val_40626 === (11))){
var inst_40557 = (state_40625[(13)]);
var inst_40573 = (state_40625[(10)]);
var inst_40573__$1 = cljs.core.seq(inst_40557);
var state_40625__$1 = (function (){var statearr_40726 = state_40625;
(statearr_40726[(10)] = inst_40573__$1);

return statearr_40726;
})();
if(inst_40573__$1){
var statearr_40727_42713 = state_40625__$1;
(statearr_40727_42713[(1)] = (13));

} else {
var statearr_40731_42714 = state_40625__$1;
(statearr_40731_42714[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (9))){
var inst_40597 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40732_42715 = state_40625__$1;
(statearr_40732_42715[(2)] = inst_40597);

(statearr_40732_42715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (5))){
var inst_40554 = cljs.core.deref(mults);
var inst_40555 = cljs.core.vals(inst_40554);
var inst_40556 = cljs.core.seq(inst_40555);
var inst_40557 = inst_40556;
var inst_40558 = null;
var inst_40559 = (0);
var inst_40560 = (0);
var state_40625__$1 = (function (){var statearr_40733 = state_40625;
(statearr_40733[(12)] = inst_40558);

(statearr_40733[(13)] = inst_40557);

(statearr_40733[(14)] = inst_40559);

(statearr_40733[(16)] = inst_40560);

return statearr_40733;
})();
var statearr_40738_42717 = state_40625__$1;
(statearr_40738_42717[(2)] = null);

(statearr_40738_42717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (14))){
var state_40625__$1 = state_40625;
var statearr_40746_42718 = state_40625__$1;
(statearr_40746_42718[(2)] = null);

(statearr_40746_42718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (16))){
var inst_40573 = (state_40625[(10)]);
var inst_40577 = cljs.core.chunk_first(inst_40573);
var inst_40578 = cljs.core.chunk_rest(inst_40573);
var inst_40579 = cljs.core.count(inst_40577);
var inst_40557 = inst_40578;
var inst_40558 = inst_40577;
var inst_40559 = inst_40579;
var inst_40560 = (0);
var state_40625__$1 = (function (){var statearr_40751 = state_40625;
(statearr_40751[(12)] = inst_40558);

(statearr_40751[(13)] = inst_40557);

(statearr_40751[(14)] = inst_40559);

(statearr_40751[(16)] = inst_40560);

return statearr_40751;
})();
var statearr_40754_42719 = state_40625__$1;
(statearr_40754_42719[(2)] = null);

(statearr_40754_42719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (10))){
var inst_40558 = (state_40625[(12)]);
var inst_40557 = (state_40625[(13)]);
var inst_40559 = (state_40625[(14)]);
var inst_40560 = (state_40625[(16)]);
var inst_40566 = cljs.core._nth(inst_40558,inst_40560);
var inst_40567 = cljs.core.async.muxch_STAR_(inst_40566);
var inst_40568 = cljs.core.async.close_BANG_(inst_40567);
var inst_40569 = (inst_40560 + (1));
var tmp40743 = inst_40558;
var tmp40744 = inst_40557;
var tmp40745 = inst_40559;
var inst_40557__$1 = tmp40744;
var inst_40558__$1 = tmp40743;
var inst_40559__$1 = tmp40745;
var inst_40560__$1 = inst_40569;
var state_40625__$1 = (function (){var statearr_40756 = state_40625;
(statearr_40756[(12)] = inst_40558__$1);

(statearr_40756[(13)] = inst_40557__$1);

(statearr_40756[(14)] = inst_40559__$1);

(statearr_40756[(17)] = inst_40568);

(statearr_40756[(16)] = inst_40560__$1);

return statearr_40756;
})();
var statearr_40757_42722 = state_40625__$1;
(statearr_40757_42722[(2)] = null);

(statearr_40757_42722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (18))){
var inst_40590 = (state_40625[(2)]);
var state_40625__$1 = state_40625;
var statearr_40758_42724 = state_40625__$1;
(statearr_40758_42724[(2)] = inst_40590);

(statearr_40758_42724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40626 === (8))){
var inst_40559 = (state_40625[(14)]);
var inst_40560 = (state_40625[(16)]);
var inst_40562 = (inst_40560 < inst_40559);
var inst_40563 = inst_40562;
var state_40625__$1 = state_40625;
if(cljs.core.truth_(inst_40563)){
var statearr_40759_42725 = state_40625__$1;
(statearr_40759_42725[(1)] = (10));

} else {
var statearr_40762_42726 = state_40625__$1;
(statearr_40762_42726[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_40763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40763[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_40763[(1)] = (1));

return statearr_40763;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_40625){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_40625);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e40764){var ex__29175__auto__ = e40764;
var statearr_40765_42728 = state_40625;
(statearr_40765_42728[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_40625[(4)]))){
var statearr_40766_42729 = state_40625;
(statearr_40766_42729[(1)] = cljs.core.first((state_40625[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42731 = state_40625;
state_40625 = G__42731;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_40625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_40625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_40768 = f__29376__auto__();
(statearr_40768[(6)] = c__29375__auto___42688);

return statearr_40768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40772 = arguments.length;
switch (G__40772) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40774 = arguments.length;
switch (G__40774) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40783 = arguments.length;
switch (G__40783) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29375__auto___42735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_40865){
var state_val_40866 = (state_40865[(1)]);
if((state_val_40866 === (7))){
var state_40865__$1 = state_40865;
var statearr_40873_42736 = state_40865__$1;
(statearr_40873_42736[(2)] = null);

(statearr_40873_42736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (1))){
var state_40865__$1 = state_40865;
var statearr_40877_42737 = state_40865__$1;
(statearr_40877_42737[(2)] = null);

(statearr_40877_42737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (4))){
var inst_40788 = (state_40865[(7)]);
var inst_40787 = (state_40865[(8)]);
var inst_40793 = (inst_40788 < inst_40787);
var state_40865__$1 = state_40865;
if(cljs.core.truth_(inst_40793)){
var statearr_40878_42738 = state_40865__$1;
(statearr_40878_42738[(1)] = (6));

} else {
var statearr_40879_42739 = state_40865__$1;
(statearr_40879_42739[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (15))){
var inst_40834 = (state_40865[(9)]);
var inst_40850 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40834);
var state_40865__$1 = state_40865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40865__$1,(17),out,inst_40850);
} else {
if((state_val_40866 === (13))){
var inst_40834 = (state_40865[(9)]);
var inst_40834__$1 = (state_40865[(2)]);
var inst_40837 = cljs.core.some(cljs.core.nil_QMARK_,inst_40834__$1);
var state_40865__$1 = (function (){var statearr_40882 = state_40865;
(statearr_40882[(9)] = inst_40834__$1);

return statearr_40882;
})();
if(cljs.core.truth_(inst_40837)){
var statearr_40883_42755 = state_40865__$1;
(statearr_40883_42755[(1)] = (14));

} else {
var statearr_40884_42765 = state_40865__$1;
(statearr_40884_42765[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (6))){
var state_40865__$1 = state_40865;
var statearr_40885_42766 = state_40865__$1;
(statearr_40885_42766[(2)] = null);

(statearr_40885_42766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (17))){
var inst_40855 = (state_40865[(2)]);
var state_40865__$1 = (function (){var statearr_40887 = state_40865;
(statearr_40887[(10)] = inst_40855);

return statearr_40887;
})();
var statearr_40888_42772 = state_40865__$1;
(statearr_40888_42772[(2)] = null);

(statearr_40888_42772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (3))){
var inst_40861 = (state_40865[(2)]);
var state_40865__$1 = state_40865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40865__$1,inst_40861);
} else {
if((state_val_40866 === (12))){
var _ = (function (){var statearr_40889 = state_40865;
(statearr_40889[(4)] = cljs.core.rest((state_40865[(4)])));

return statearr_40889;
})();
var state_40865__$1 = state_40865;
var ex40886 = (state_40865__$1[(2)]);
var statearr_40890_42774 = state_40865__$1;
(statearr_40890_42774[(5)] = ex40886);


if((ex40886 instanceof Object)){
var statearr_40891_42775 = state_40865__$1;
(statearr_40891_42775[(1)] = (11));

(statearr_40891_42775[(5)] = null);

} else {
throw ex40886;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (2))){
var inst_40786 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40787 = cnt;
var inst_40788 = (0);
var state_40865__$1 = (function (){var statearr_40892 = state_40865;
(statearr_40892[(7)] = inst_40788);

(statearr_40892[(11)] = inst_40786);

(statearr_40892[(8)] = inst_40787);

return statearr_40892;
})();
var statearr_40893_42776 = state_40865__$1;
(statearr_40893_42776[(2)] = null);

(statearr_40893_42776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (11))){
var inst_40797 = (state_40865[(2)]);
var inst_40799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40865__$1 = (function (){var statearr_40895 = state_40865;
(statearr_40895[(12)] = inst_40797);

return statearr_40895;
})();
var statearr_40896_42782 = state_40865__$1;
(statearr_40896_42782[(2)] = inst_40799);

(statearr_40896_42782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (9))){
var inst_40788 = (state_40865[(7)]);
var _ = (function (){var statearr_40897 = state_40865;
(statearr_40897[(4)] = cljs.core.cons((12),(state_40865[(4)])));

return statearr_40897;
})();
var inst_40809 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40788) : chs__$1.call(null,inst_40788));
var inst_40814 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40788) : done.call(null,inst_40788));
var inst_40815 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40809,inst_40814);
var ___$1 = (function (){var statearr_40898 = state_40865;
(statearr_40898[(4)] = cljs.core.rest((state_40865[(4)])));

return statearr_40898;
})();
var state_40865__$1 = state_40865;
var statearr_40899_42793 = state_40865__$1;
(statearr_40899_42793[(2)] = inst_40815);

(statearr_40899_42793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (5))){
var inst_40829 = (state_40865[(2)]);
var state_40865__$1 = (function (){var statearr_40900 = state_40865;
(statearr_40900[(13)] = inst_40829);

return statearr_40900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40865__$1,(13),dchan);
} else {
if((state_val_40866 === (14))){
var inst_40843 = cljs.core.async.close_BANG_(out);
var state_40865__$1 = state_40865;
var statearr_40901_42798 = state_40865__$1;
(statearr_40901_42798[(2)] = inst_40843);

(statearr_40901_42798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (16))){
var inst_40859 = (state_40865[(2)]);
var state_40865__$1 = state_40865;
var statearr_40902_42800 = state_40865__$1;
(statearr_40902_42800[(2)] = inst_40859);

(statearr_40902_42800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (10))){
var inst_40788 = (state_40865[(7)]);
var inst_40818 = (state_40865[(2)]);
var inst_40822 = (inst_40788 + (1));
var inst_40788__$1 = inst_40822;
var state_40865__$1 = (function (){var statearr_40906 = state_40865;
(statearr_40906[(7)] = inst_40788__$1);

(statearr_40906[(14)] = inst_40818);

return statearr_40906;
})();
var statearr_40907_42801 = state_40865__$1;
(statearr_40907_42801[(2)] = null);

(statearr_40907_42801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40866 === (8))){
var inst_40826 = (state_40865[(2)]);
var state_40865__$1 = state_40865;
var statearr_40908_42802 = state_40865__$1;
(statearr_40908_42802[(2)] = inst_40826);

(statearr_40908_42802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_40909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40909[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_40909[(1)] = (1));

return statearr_40909;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_40865){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_40865);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e40910){var ex__29175__auto__ = e40910;
var statearr_40911_42817 = state_40865;
(statearr_40911_42817[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_40865[(4)]))){
var statearr_40912_42822 = state_40865;
(statearr_40912_42822[(1)] = cljs.core.first((state_40865[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42826 = state_40865;
state_40865 = G__42826;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_40865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_40865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_40913 = f__29376__auto__();
(statearr_40913[(6)] = c__29375__auto___42735);

return statearr_40913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40920 = arguments.length;
switch (G__40920) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29375__auto___42852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_40957){
var state_val_40958 = (state_40957[(1)]);
if((state_val_40958 === (7))){
var inst_40935 = (state_40957[(7)]);
var inst_40934 = (state_40957[(8)]);
var inst_40934__$1 = (state_40957[(2)]);
var inst_40935__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40934__$1,(0),null);
var inst_40936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40934__$1,(1),null);
var inst_40937 = (inst_40935__$1 == null);
var state_40957__$1 = (function (){var statearr_40960 = state_40957;
(statearr_40960[(7)] = inst_40935__$1);

(statearr_40960[(9)] = inst_40936);

(statearr_40960[(8)] = inst_40934__$1);

return statearr_40960;
})();
if(cljs.core.truth_(inst_40937)){
var statearr_40961_42865 = state_40957__$1;
(statearr_40961_42865[(1)] = (8));

} else {
var statearr_40962_42866 = state_40957__$1;
(statearr_40962_42866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (1))){
var inst_40923 = cljs.core.vec(chs);
var inst_40925 = inst_40923;
var state_40957__$1 = (function (){var statearr_40963 = state_40957;
(statearr_40963[(10)] = inst_40925);

return statearr_40963;
})();
var statearr_40964_42868 = state_40957__$1;
(statearr_40964_42868[(2)] = null);

(statearr_40964_42868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (4))){
var inst_40925 = (state_40957[(10)]);
var state_40957__$1 = state_40957;
return cljs.core.async.ioc_alts_BANG_(state_40957__$1,(7),inst_40925);
} else {
if((state_val_40958 === (6))){
var inst_40951 = (state_40957[(2)]);
var state_40957__$1 = state_40957;
var statearr_40965_42869 = state_40957__$1;
(statearr_40965_42869[(2)] = inst_40951);

(statearr_40965_42869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (3))){
var inst_40953 = (state_40957[(2)]);
var state_40957__$1 = state_40957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40957__$1,inst_40953);
} else {
if((state_val_40958 === (2))){
var inst_40925 = (state_40957[(10)]);
var inst_40927 = cljs.core.count(inst_40925);
var inst_40928 = (inst_40927 > (0));
var state_40957__$1 = state_40957;
if(cljs.core.truth_(inst_40928)){
var statearr_40967_42873 = state_40957__$1;
(statearr_40967_42873[(1)] = (4));

} else {
var statearr_40971_42875 = state_40957__$1;
(statearr_40971_42875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (11))){
var inst_40925 = (state_40957[(10)]);
var inst_40944 = (state_40957[(2)]);
var tmp40966 = inst_40925;
var inst_40925__$1 = tmp40966;
var state_40957__$1 = (function (){var statearr_40972 = state_40957;
(statearr_40972[(11)] = inst_40944);

(statearr_40972[(10)] = inst_40925__$1);

return statearr_40972;
})();
var statearr_40973_42876 = state_40957__$1;
(statearr_40973_42876[(2)] = null);

(statearr_40973_42876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (9))){
var inst_40935 = (state_40957[(7)]);
var state_40957__$1 = state_40957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40957__$1,(11),out,inst_40935);
} else {
if((state_val_40958 === (5))){
var inst_40949 = cljs.core.async.close_BANG_(out);
var state_40957__$1 = state_40957;
var statearr_40980_42878 = state_40957__$1;
(statearr_40980_42878[(2)] = inst_40949);

(statearr_40980_42878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (10))){
var inst_40947 = (state_40957[(2)]);
var state_40957__$1 = state_40957;
var statearr_40981_42879 = state_40957__$1;
(statearr_40981_42879[(2)] = inst_40947);

(statearr_40981_42879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40958 === (8))){
var inst_40935 = (state_40957[(7)]);
var inst_40925 = (state_40957[(10)]);
var inst_40936 = (state_40957[(9)]);
var inst_40934 = (state_40957[(8)]);
var inst_40939 = (function (){var cs = inst_40925;
var vec__40930 = inst_40934;
var v = inst_40935;
var c = inst_40936;
return (function (p1__40916_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40916_SHARP_);
});
})();
var inst_40940 = cljs.core.filterv(inst_40939,inst_40925);
var inst_40925__$1 = inst_40940;
var state_40957__$1 = (function (){var statearr_40983 = state_40957;
(statearr_40983[(10)] = inst_40925__$1);

return statearr_40983;
})();
var statearr_40984_42883 = state_40957__$1;
(statearr_40984_42883[(2)] = null);

(statearr_40984_42883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_40985 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40985[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_40985[(1)] = (1));

return statearr_40985;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_40957){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_40957);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e40986){var ex__29175__auto__ = e40986;
var statearr_40987_42886 = state_40957;
(statearr_40987_42886[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_40957[(4)]))){
var statearr_40988_42888 = state_40957;
(statearr_40988_42888[(1)] = cljs.core.first((state_40957[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42891 = state_40957;
state_40957 = G__42891;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_40957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_40957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_40989 = f__29376__auto__();
(statearr_40989[(6)] = c__29375__auto___42852);

return statearr_40989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40993 = arguments.length;
switch (G__40993) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29375__auto___42903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_41020){
var state_val_41021 = (state_41020[(1)]);
if((state_val_41021 === (7))){
var inst_40999 = (state_41020[(7)]);
var inst_40999__$1 = (state_41020[(2)]);
var inst_41000 = (inst_40999__$1 == null);
var inst_41001 = cljs.core.not(inst_41000);
var state_41020__$1 = (function (){var statearr_41025 = state_41020;
(statearr_41025[(7)] = inst_40999__$1);

return statearr_41025;
})();
if(inst_41001){
var statearr_41026_42905 = state_41020__$1;
(statearr_41026_42905[(1)] = (8));

} else {
var statearr_41027_42906 = state_41020__$1;
(statearr_41027_42906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (1))){
var inst_40994 = (0);
var state_41020__$1 = (function (){var statearr_41028 = state_41020;
(statearr_41028[(8)] = inst_40994);

return statearr_41028;
})();
var statearr_41029_42907 = state_41020__$1;
(statearr_41029_42907[(2)] = null);

(statearr_41029_42907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (4))){
var state_41020__$1 = state_41020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41020__$1,(7),ch);
} else {
if((state_val_41021 === (6))){
var inst_41012 = (state_41020[(2)]);
var state_41020__$1 = state_41020;
var statearr_41030_42908 = state_41020__$1;
(statearr_41030_42908[(2)] = inst_41012);

(statearr_41030_42908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (3))){
var inst_41017 = (state_41020[(2)]);
var inst_41018 = cljs.core.async.close_BANG_(out);
var state_41020__$1 = (function (){var statearr_41032 = state_41020;
(statearr_41032[(9)] = inst_41017);

return statearr_41032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41020__$1,inst_41018);
} else {
if((state_val_41021 === (2))){
var inst_40994 = (state_41020[(8)]);
var inst_40996 = (inst_40994 < n);
var state_41020__$1 = state_41020;
if(cljs.core.truth_(inst_40996)){
var statearr_41036_42909 = state_41020__$1;
(statearr_41036_42909[(1)] = (4));

} else {
var statearr_41037_42910 = state_41020__$1;
(statearr_41037_42910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (11))){
var inst_40994 = (state_41020[(8)]);
var inst_41004 = (state_41020[(2)]);
var inst_41005 = (inst_40994 + (1));
var inst_40994__$1 = inst_41005;
var state_41020__$1 = (function (){var statearr_41042 = state_41020;
(statearr_41042[(10)] = inst_41004);

(statearr_41042[(8)] = inst_40994__$1);

return statearr_41042;
})();
var statearr_41043_42911 = state_41020__$1;
(statearr_41043_42911[(2)] = null);

(statearr_41043_42911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (9))){
var state_41020__$1 = state_41020;
var statearr_41048_42913 = state_41020__$1;
(statearr_41048_42913[(2)] = null);

(statearr_41048_42913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (5))){
var state_41020__$1 = state_41020;
var statearr_41053_42921 = state_41020__$1;
(statearr_41053_42921[(2)] = null);

(statearr_41053_42921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (10))){
var inst_41009 = (state_41020[(2)]);
var state_41020__$1 = state_41020;
var statearr_41054_42922 = state_41020__$1;
(statearr_41054_42922[(2)] = inst_41009);

(statearr_41054_42922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41021 === (8))){
var inst_40999 = (state_41020[(7)]);
var state_41020__$1 = state_41020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41020__$1,(11),out,inst_40999);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_41055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41055[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_41055[(1)] = (1));

return statearr_41055;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_41020){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_41020);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e41058){var ex__29175__auto__ = e41058;
var statearr_41059_42925 = state_41020;
(statearr_41059_42925[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_41020[(4)]))){
var statearr_41060_42926 = state_41020;
(statearr_41060_42926[(1)] = cljs.core.first((state_41020[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42928 = state_41020;
state_41020 = G__42928;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_41020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_41020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_41066 = f__29376__auto__();
(statearr_41066[(6)] = c__29375__auto___42903);

return statearr_41066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41068 = (function (f,ch,meta41069){
this.f = f;
this.ch = ch;
this.meta41069 = meta41069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41070,meta41069__$1){
var self__ = this;
var _41070__$1 = this;
return (new cljs.core.async.t_cljs$core$async41068(self__.f,self__.ch,meta41069__$1));
}));

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41070){
var self__ = this;
var _41070__$1 = this;
return self__.meta41069;
}));

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41081 = (function (f,ch,meta41069,_,fn1,meta41082){
this.f = f;
this.ch = ch;
this.meta41069 = meta41069;
this._ = _;
this.fn1 = fn1;
this.meta41082 = meta41082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41083,meta41082__$1){
var self__ = this;
var _41083__$1 = this;
return (new cljs.core.async.t_cljs$core$async41081(self__.f,self__.ch,self__.meta41069,self__._,self__.fn1,meta41082__$1));
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41083){
var self__ = this;
var _41083__$1 = this;
return self__.meta41082;
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__41067_SHARP_){
var G__41089 = (((p1__41067_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41067_SHARP_) : self__.f.call(null,p1__41067_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41089) : f1.call(null,G__41089));
});
}));

(cljs.core.async.t_cljs$core$async41081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41069","meta41069",787187157,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41068","cljs.core.async/t_cljs$core$async41068",-1461571594,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41082","meta41082",-1072889,null)], null);
}));

(cljs.core.async.t_cljs$core$async41081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41081");

(cljs.core.async.t_cljs$core$async41081.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41081.
 */
cljs.core.async.__GT_t_cljs$core$async41081 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41081(f__$1,ch__$1,meta41069__$1,___$2,fn1__$1,meta41082){
return (new cljs.core.async.t_cljs$core$async41081(f__$1,ch__$1,meta41069__$1,___$2,fn1__$1,meta41082));
});

}

return (new cljs.core.async.t_cljs$core$async41081(self__.f,self__.ch,self__.meta41069,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41103 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41103) : self__.f.call(null,G__41103));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async41068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41069","meta41069",787187157,null)], null);
}));

(cljs.core.async.t_cljs$core$async41068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41068");

(cljs.core.async.t_cljs$core$async41068.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41068.
 */
cljs.core.async.__GT_t_cljs$core$async41068 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41068(f__$1,ch__$1,meta41069){
return (new cljs.core.async.t_cljs$core$async41068(f__$1,ch__$1,meta41069));
});

}

return (new cljs.core.async.t_cljs$core$async41068(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41111 = (function (f,ch,meta41112){
this.f = f;
this.ch = ch;
this.meta41112 = meta41112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41113,meta41112__$1){
var self__ = this;
var _41113__$1 = this;
return (new cljs.core.async.t_cljs$core$async41111(self__.f,self__.ch,meta41112__$1));
}));

(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41113){
var self__ = this;
var _41113__$1 = this;
return self__.meta41112;
}));

(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41112","meta41112",-1796477706,null)], null);
}));

(cljs.core.async.t_cljs$core$async41111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41111");

(cljs.core.async.t_cljs$core$async41111.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41111.
 */
cljs.core.async.__GT_t_cljs$core$async41111 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41111(f__$1,ch__$1,meta41112){
return (new cljs.core.async.t_cljs$core$async41111(f__$1,ch__$1,meta41112));
});

}

return (new cljs.core.async.t_cljs$core$async41111(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41138 = (function (p,ch,meta41139){
this.p = p;
this.ch = ch;
this.meta41139 = meta41139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41140,meta41139__$1){
var self__ = this;
var _41140__$1 = this;
return (new cljs.core.async.t_cljs$core$async41138(self__.p,self__.ch,meta41139__$1));
}));

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41140){
var self__ = this;
var _41140__$1 = this;
return self__.meta41139;
}));

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41139","meta41139",-1675077050,null)], null);
}));

(cljs.core.async.t_cljs$core$async41138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41138");

(cljs.core.async.t_cljs$core$async41138.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41138.
 */
cljs.core.async.__GT_t_cljs$core$async41138 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41138(p__$1,ch__$1,meta41139){
return (new cljs.core.async.t_cljs$core$async41138(p__$1,ch__$1,meta41139));
});

}

return (new cljs.core.async.t_cljs$core$async41138(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41163 = arguments.length;
switch (G__41163) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29375__auto___42947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_41184){
var state_val_41185 = (state_41184[(1)]);
if((state_val_41185 === (7))){
var inst_41180 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
var statearr_41186_42948 = state_41184__$1;
(statearr_41186_42948[(2)] = inst_41180);

(statearr_41186_42948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (1))){
var state_41184__$1 = state_41184;
var statearr_41187_42949 = state_41184__$1;
(statearr_41187_42949[(2)] = null);

(statearr_41187_42949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (4))){
var inst_41166 = (state_41184[(7)]);
var inst_41166__$1 = (state_41184[(2)]);
var inst_41167 = (inst_41166__$1 == null);
var state_41184__$1 = (function (){var statearr_41192 = state_41184;
(statearr_41192[(7)] = inst_41166__$1);

return statearr_41192;
})();
if(cljs.core.truth_(inst_41167)){
var statearr_41193_42951 = state_41184__$1;
(statearr_41193_42951[(1)] = (5));

} else {
var statearr_41194_42952 = state_41184__$1;
(statearr_41194_42952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (6))){
var inst_41166 = (state_41184[(7)]);
var inst_41171 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41166) : p.call(null,inst_41166));
var state_41184__$1 = state_41184;
if(cljs.core.truth_(inst_41171)){
var statearr_41197_42953 = state_41184__$1;
(statearr_41197_42953[(1)] = (8));

} else {
var statearr_41198_42954 = state_41184__$1;
(statearr_41198_42954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (3))){
var inst_41182 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41184__$1,inst_41182);
} else {
if((state_val_41185 === (2))){
var state_41184__$1 = state_41184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41184__$1,(4),ch);
} else {
if((state_val_41185 === (11))){
var inst_41174 = (state_41184[(2)]);
var state_41184__$1 = state_41184;
var statearr_41199_42956 = state_41184__$1;
(statearr_41199_42956[(2)] = inst_41174);

(statearr_41199_42956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (9))){
var state_41184__$1 = state_41184;
var statearr_41203_42957 = state_41184__$1;
(statearr_41203_42957[(2)] = null);

(statearr_41203_42957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (5))){
var inst_41169 = cljs.core.async.close_BANG_(out);
var state_41184__$1 = state_41184;
var statearr_41204_42958 = state_41184__$1;
(statearr_41204_42958[(2)] = inst_41169);

(statearr_41204_42958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (10))){
var inst_41177 = (state_41184[(2)]);
var state_41184__$1 = (function (){var statearr_41205 = state_41184;
(statearr_41205[(8)] = inst_41177);

return statearr_41205;
})();
var statearr_41206_42961 = state_41184__$1;
(statearr_41206_42961[(2)] = null);

(statearr_41206_42961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41185 === (8))){
var inst_41166 = (state_41184[(7)]);
var state_41184__$1 = state_41184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41184__$1,(11),out,inst_41166);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_41209 = [null,null,null,null,null,null,null,null,null];
(statearr_41209[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_41209[(1)] = (1));

return statearr_41209;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_41184){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_41184);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e41212){var ex__29175__auto__ = e41212;
var statearr_41213_42962 = state_41184;
(statearr_41213_42962[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_41184[(4)]))){
var statearr_41216_42963 = state_41184;
(statearr_41216_42963[(1)] = cljs.core.first((state_41184[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42964 = state_41184;
state_41184 = G__42964;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_41184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_41184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_41217 = f__29376__auto__();
(statearr_41217[(6)] = c__29375__auto___42947);

return statearr_41217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41219 = arguments.length;
switch (G__41219) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29375__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_41297){
var state_val_41298 = (state_41297[(1)]);
if((state_val_41298 === (7))){
var inst_41293 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41301_42966 = state_41297__$1;
(statearr_41301_42966[(2)] = inst_41293);

(statearr_41301_42966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (20))){
var inst_41260 = (state_41297[(7)]);
var inst_41274 = (state_41297[(2)]);
var inst_41275 = cljs.core.next(inst_41260);
var inst_41243 = inst_41275;
var inst_41244 = null;
var inst_41245 = (0);
var inst_41246 = (0);
var state_41297__$1 = (function (){var statearr_41306 = state_41297;
(statearr_41306[(8)] = inst_41246);

(statearr_41306[(9)] = inst_41274);

(statearr_41306[(10)] = inst_41244);

(statearr_41306[(11)] = inst_41243);

(statearr_41306[(12)] = inst_41245);

return statearr_41306;
})();
var statearr_41311_42968 = state_41297__$1;
(statearr_41311_42968[(2)] = null);

(statearr_41311_42968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (1))){
var state_41297__$1 = state_41297;
var statearr_41312_42969 = state_41297__$1;
(statearr_41312_42969[(2)] = null);

(statearr_41312_42969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (4))){
var inst_41232 = (state_41297[(13)]);
var inst_41232__$1 = (state_41297[(2)]);
var inst_41233 = (inst_41232__$1 == null);
var state_41297__$1 = (function (){var statearr_41313 = state_41297;
(statearr_41313[(13)] = inst_41232__$1);

return statearr_41313;
})();
if(cljs.core.truth_(inst_41233)){
var statearr_41314_42970 = state_41297__$1;
(statearr_41314_42970[(1)] = (5));

} else {
var statearr_41315_42971 = state_41297__$1;
(statearr_41315_42971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (15))){
var state_41297__$1 = state_41297;
var statearr_41319_42972 = state_41297__$1;
(statearr_41319_42972[(2)] = null);

(statearr_41319_42972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (21))){
var state_41297__$1 = state_41297;
var statearr_41320_42973 = state_41297__$1;
(statearr_41320_42973[(2)] = null);

(statearr_41320_42973[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (13))){
var inst_41246 = (state_41297[(8)]);
var inst_41244 = (state_41297[(10)]);
var inst_41243 = (state_41297[(11)]);
var inst_41245 = (state_41297[(12)]);
var inst_41253 = (state_41297[(2)]);
var inst_41254 = (inst_41246 + (1));
var tmp41316 = inst_41244;
var tmp41317 = inst_41243;
var tmp41318 = inst_41245;
var inst_41243__$1 = tmp41317;
var inst_41244__$1 = tmp41316;
var inst_41245__$1 = tmp41318;
var inst_41246__$1 = inst_41254;
var state_41297__$1 = (function (){var statearr_41321 = state_41297;
(statearr_41321[(8)] = inst_41246__$1);

(statearr_41321[(10)] = inst_41244__$1);

(statearr_41321[(11)] = inst_41243__$1);

(statearr_41321[(12)] = inst_41245__$1);

(statearr_41321[(14)] = inst_41253);

return statearr_41321;
})();
var statearr_41322_42974 = state_41297__$1;
(statearr_41322_42974[(2)] = null);

(statearr_41322_42974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (22))){
var state_41297__$1 = state_41297;
var statearr_41326_42975 = state_41297__$1;
(statearr_41326_42975[(2)] = null);

(statearr_41326_42975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (6))){
var inst_41232 = (state_41297[(13)]);
var inst_41241 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41232) : f.call(null,inst_41232));
var inst_41242 = cljs.core.seq(inst_41241);
var inst_41243 = inst_41242;
var inst_41244 = null;
var inst_41245 = (0);
var inst_41246 = (0);
var state_41297__$1 = (function (){var statearr_41327 = state_41297;
(statearr_41327[(8)] = inst_41246);

(statearr_41327[(10)] = inst_41244);

(statearr_41327[(11)] = inst_41243);

(statearr_41327[(12)] = inst_41245);

return statearr_41327;
})();
var statearr_41328_42976 = state_41297__$1;
(statearr_41328_42976[(2)] = null);

(statearr_41328_42976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (17))){
var inst_41260 = (state_41297[(7)]);
var inst_41267 = cljs.core.chunk_first(inst_41260);
var inst_41268 = cljs.core.chunk_rest(inst_41260);
var inst_41269 = cljs.core.count(inst_41267);
var inst_41243 = inst_41268;
var inst_41244 = inst_41267;
var inst_41245 = inst_41269;
var inst_41246 = (0);
var state_41297__$1 = (function (){var statearr_41331 = state_41297;
(statearr_41331[(8)] = inst_41246);

(statearr_41331[(10)] = inst_41244);

(statearr_41331[(11)] = inst_41243);

(statearr_41331[(12)] = inst_41245);

return statearr_41331;
})();
var statearr_41332_42977 = state_41297__$1;
(statearr_41332_42977[(2)] = null);

(statearr_41332_42977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (3))){
var inst_41295 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41297__$1,inst_41295);
} else {
if((state_val_41298 === (12))){
var inst_41283 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41334_42978 = state_41297__$1;
(statearr_41334_42978[(2)] = inst_41283);

(statearr_41334_42978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (2))){
var state_41297__$1 = state_41297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41297__$1,(4),in$);
} else {
if((state_val_41298 === (23))){
var inst_41291 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41342_42979 = state_41297__$1;
(statearr_41342_42979[(2)] = inst_41291);

(statearr_41342_42979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (19))){
var inst_41278 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41343_42980 = state_41297__$1;
(statearr_41343_42980[(2)] = inst_41278);

(statearr_41343_42980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (11))){
var inst_41260 = (state_41297[(7)]);
var inst_41243 = (state_41297[(11)]);
var inst_41260__$1 = cljs.core.seq(inst_41243);
var state_41297__$1 = (function (){var statearr_41344 = state_41297;
(statearr_41344[(7)] = inst_41260__$1);

return statearr_41344;
})();
if(inst_41260__$1){
var statearr_41345_42985 = state_41297__$1;
(statearr_41345_42985[(1)] = (14));

} else {
var statearr_41346_42986 = state_41297__$1;
(statearr_41346_42986[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (9))){
var inst_41285 = (state_41297[(2)]);
var inst_41286 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41297__$1 = (function (){var statearr_41348 = state_41297;
(statearr_41348[(15)] = inst_41285);

return statearr_41348;
})();
if(cljs.core.truth_(inst_41286)){
var statearr_41349_42987 = state_41297__$1;
(statearr_41349_42987[(1)] = (21));

} else {
var statearr_41350_42988 = state_41297__$1;
(statearr_41350_42988[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (5))){
var inst_41235 = cljs.core.async.close_BANG_(out);
var state_41297__$1 = state_41297;
var statearr_41352_42991 = state_41297__$1;
(statearr_41352_42991[(2)] = inst_41235);

(statearr_41352_42991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (14))){
var inst_41260 = (state_41297[(7)]);
var inst_41265 = cljs.core.chunked_seq_QMARK_(inst_41260);
var state_41297__$1 = state_41297;
if(inst_41265){
var statearr_41353_42995 = state_41297__$1;
(statearr_41353_42995[(1)] = (17));

} else {
var statearr_41355_42996 = state_41297__$1;
(statearr_41355_42996[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (16))){
var inst_41281 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41361_42998 = state_41297__$1;
(statearr_41361_42998[(2)] = inst_41281);

(statearr_41361_42998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (10))){
var inst_41246 = (state_41297[(8)]);
var inst_41244 = (state_41297[(10)]);
var inst_41251 = cljs.core._nth(inst_41244,inst_41246);
var state_41297__$1 = state_41297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41297__$1,(13),out,inst_41251);
} else {
if((state_val_41298 === (18))){
var inst_41260 = (state_41297[(7)]);
var inst_41272 = cljs.core.first(inst_41260);
var state_41297__$1 = state_41297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41297__$1,(20),out,inst_41272);
} else {
if((state_val_41298 === (8))){
var inst_41246 = (state_41297[(8)]);
var inst_41245 = (state_41297[(12)]);
var inst_41248 = (inst_41246 < inst_41245);
var inst_41249 = inst_41248;
var state_41297__$1 = state_41297;
if(cljs.core.truth_(inst_41249)){
var statearr_41363_43001 = state_41297__$1;
(statearr_41363_43001[(1)] = (10));

} else {
var statearr_41364_43003 = state_41297__$1;
(statearr_41364_43003[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29172__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29172__auto____0 = (function (){
var statearr_41365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41365[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29172__auto__);

(statearr_41365[(1)] = (1));

return statearr_41365;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29172__auto____1 = (function (state_41297){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_41297);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e41370){var ex__29175__auto__ = e41370;
var statearr_41371_43004 = state_41297;
(statearr_41371_43004[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_41297[(4)]))){
var statearr_41372_43005 = state_41297;
(statearr_41372_43005[(1)] = cljs.core.first((state_41297[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43006 = state_41297;
state_41297 = G__43006;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29172__auto__ = function(state_41297){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29172__auto____1.call(this,state_41297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29172__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29172__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_41375 = f__29376__auto__();
(statearr_41375[(6)] = c__29375__auto__);

return statearr_41375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));

return c__29375__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41379 = arguments.length;
switch (G__41379) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41392 = arguments.length;
switch (G__41392) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41400 = arguments.length;
switch (G__41400) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29375__auto___43048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_41426){
var state_val_41427 = (state_41426[(1)]);
if((state_val_41427 === (7))){
var inst_41421 = (state_41426[(2)]);
var state_41426__$1 = state_41426;
var statearr_41433_43054 = state_41426__$1;
(statearr_41433_43054[(2)] = inst_41421);

(statearr_41433_43054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (1))){
var inst_41403 = null;
var state_41426__$1 = (function (){var statearr_41438 = state_41426;
(statearr_41438[(7)] = inst_41403);

return statearr_41438;
})();
var statearr_41443_43058 = state_41426__$1;
(statearr_41443_43058[(2)] = null);

(statearr_41443_43058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (4))){
var inst_41406 = (state_41426[(8)]);
var inst_41406__$1 = (state_41426[(2)]);
var inst_41407 = (inst_41406__$1 == null);
var inst_41408 = cljs.core.not(inst_41407);
var state_41426__$1 = (function (){var statearr_41448 = state_41426;
(statearr_41448[(8)] = inst_41406__$1);

return statearr_41448;
})();
if(inst_41408){
var statearr_41449_43062 = state_41426__$1;
(statearr_41449_43062[(1)] = (5));

} else {
var statearr_41450_43063 = state_41426__$1;
(statearr_41450_43063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (6))){
var state_41426__$1 = state_41426;
var statearr_41452_43066 = state_41426__$1;
(statearr_41452_43066[(2)] = null);

(statearr_41452_43066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (3))){
var inst_41423 = (state_41426[(2)]);
var inst_41424 = cljs.core.async.close_BANG_(out);
var state_41426__$1 = (function (){var statearr_41453 = state_41426;
(statearr_41453[(9)] = inst_41423);

return statearr_41453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41426__$1,inst_41424);
} else {
if((state_val_41427 === (2))){
var state_41426__$1 = state_41426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41426__$1,(4),ch);
} else {
if((state_val_41427 === (11))){
var inst_41406 = (state_41426[(8)]);
var inst_41415 = (state_41426[(2)]);
var inst_41403 = inst_41406;
var state_41426__$1 = (function (){var statearr_41454 = state_41426;
(statearr_41454[(10)] = inst_41415);

(statearr_41454[(7)] = inst_41403);

return statearr_41454;
})();
var statearr_41455_43067 = state_41426__$1;
(statearr_41455_43067[(2)] = null);

(statearr_41455_43067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (9))){
var inst_41406 = (state_41426[(8)]);
var state_41426__$1 = state_41426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41426__$1,(11),out,inst_41406);
} else {
if((state_val_41427 === (5))){
var inst_41406 = (state_41426[(8)]);
var inst_41403 = (state_41426[(7)]);
var inst_41410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41406,inst_41403);
var state_41426__$1 = state_41426;
if(inst_41410){
var statearr_41458_43070 = state_41426__$1;
(statearr_41458_43070[(1)] = (8));

} else {
var statearr_41459_43071 = state_41426__$1;
(statearr_41459_43071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (10))){
var inst_41418 = (state_41426[(2)]);
var state_41426__$1 = state_41426;
var statearr_41460_43073 = state_41426__$1;
(statearr_41460_43073[(2)] = inst_41418);

(statearr_41460_43073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (8))){
var inst_41403 = (state_41426[(7)]);
var tmp41457 = inst_41403;
var inst_41403__$1 = tmp41457;
var state_41426__$1 = (function (){var statearr_41461 = state_41426;
(statearr_41461[(7)] = inst_41403__$1);

return statearr_41461;
})();
var statearr_41462_43074 = state_41426__$1;
(statearr_41462_43074[(2)] = null);

(statearr_41462_43074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_41463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41463[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_41463[(1)] = (1));

return statearr_41463;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_41426){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_41426);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e41464){var ex__29175__auto__ = e41464;
var statearr_41465_43075 = state_41426;
(statearr_41465_43075[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_41426[(4)]))){
var statearr_41468_43076 = state_41426;
(statearr_41468_43076[(1)] = cljs.core.first((state_41426[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43080 = state_41426;
state_41426 = G__43080;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_41426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_41426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_41476 = f__29376__auto__();
(statearr_41476[(6)] = c__29375__auto___43048);

return statearr_41476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41482 = arguments.length;
switch (G__41482) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29375__auto___43093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_41536){
var state_val_41537 = (state_41536[(1)]);
if((state_val_41537 === (7))){
var inst_41532 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41540_43100 = state_41536__$1;
(statearr_41540_43100[(2)] = inst_41532);

(statearr_41540_43100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (1))){
var inst_41495 = (new Array(n));
var inst_41496 = inst_41495;
var inst_41497 = (0);
var state_41536__$1 = (function (){var statearr_41541 = state_41536;
(statearr_41541[(7)] = inst_41497);

(statearr_41541[(8)] = inst_41496);

return statearr_41541;
})();
var statearr_41542_43105 = state_41536__$1;
(statearr_41542_43105[(2)] = null);

(statearr_41542_43105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (4))){
var inst_41500 = (state_41536[(9)]);
var inst_41500__$1 = (state_41536[(2)]);
var inst_41501 = (inst_41500__$1 == null);
var inst_41502 = cljs.core.not(inst_41501);
var state_41536__$1 = (function (){var statearr_41543 = state_41536;
(statearr_41543[(9)] = inst_41500__$1);

return statearr_41543;
})();
if(inst_41502){
var statearr_41544_43106 = state_41536__$1;
(statearr_41544_43106[(1)] = (5));

} else {
var statearr_41545_43107 = state_41536__$1;
(statearr_41545_43107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (15))){
var inst_41526 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41546_43108 = state_41536__$1;
(statearr_41546_43108[(2)] = inst_41526);

(statearr_41546_43108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (13))){
var state_41536__$1 = state_41536;
var statearr_41547_43109 = state_41536__$1;
(statearr_41547_43109[(2)] = null);

(statearr_41547_43109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (6))){
var inst_41497 = (state_41536[(7)]);
var inst_41522 = (inst_41497 > (0));
var state_41536__$1 = state_41536;
if(cljs.core.truth_(inst_41522)){
var statearr_41548_43114 = state_41536__$1;
(statearr_41548_43114[(1)] = (12));

} else {
var statearr_41549_43115 = state_41536__$1;
(statearr_41549_43115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (3))){
var inst_41534 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41536__$1,inst_41534);
} else {
if((state_val_41537 === (12))){
var inst_41496 = (state_41536[(8)]);
var inst_41524 = cljs.core.vec(inst_41496);
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41536__$1,(15),out,inst_41524);
} else {
if((state_val_41537 === (2))){
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41536__$1,(4),ch);
} else {
if((state_val_41537 === (11))){
var inst_41516 = (state_41536[(2)]);
var inst_41517 = (new Array(n));
var inst_41496 = inst_41517;
var inst_41497 = (0);
var state_41536__$1 = (function (){var statearr_41551 = state_41536;
(statearr_41551[(7)] = inst_41497);

(statearr_41551[(8)] = inst_41496);

(statearr_41551[(10)] = inst_41516);

return statearr_41551;
})();
var statearr_41552_43120 = state_41536__$1;
(statearr_41552_43120[(2)] = null);

(statearr_41552_43120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (9))){
var inst_41496 = (state_41536[(8)]);
var inst_41514 = cljs.core.vec(inst_41496);
var state_41536__$1 = state_41536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41536__$1,(11),out,inst_41514);
} else {
if((state_val_41537 === (5))){
var inst_41497 = (state_41536[(7)]);
var inst_41496 = (state_41536[(8)]);
var inst_41500 = (state_41536[(9)]);
var inst_41506 = (state_41536[(11)]);
var inst_41504 = (inst_41496[inst_41497] = inst_41500);
var inst_41506__$1 = (inst_41497 + (1));
var inst_41507 = (inst_41506__$1 < n);
var state_41536__$1 = (function (){var statearr_41562 = state_41536;
(statearr_41562[(11)] = inst_41506__$1);

(statearr_41562[(12)] = inst_41504);

return statearr_41562;
})();
if(cljs.core.truth_(inst_41507)){
var statearr_41563_43122 = state_41536__$1;
(statearr_41563_43122[(1)] = (8));

} else {
var statearr_41564_43123 = state_41536__$1;
(statearr_41564_43123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (14))){
var inst_41529 = (state_41536[(2)]);
var inst_41530 = cljs.core.async.close_BANG_(out);
var state_41536__$1 = (function (){var statearr_41570 = state_41536;
(statearr_41570[(13)] = inst_41529);

return statearr_41570;
})();
var statearr_41571_43124 = state_41536__$1;
(statearr_41571_43124[(2)] = inst_41530);

(statearr_41571_43124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (10))){
var inst_41520 = (state_41536[(2)]);
var state_41536__$1 = state_41536;
var statearr_41574_43125 = state_41536__$1;
(statearr_41574_43125[(2)] = inst_41520);

(statearr_41574_43125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41537 === (8))){
var inst_41496 = (state_41536[(8)]);
var inst_41506 = (state_41536[(11)]);
var tmp41565 = inst_41496;
var inst_41496__$1 = tmp41565;
var inst_41497 = inst_41506;
var state_41536__$1 = (function (){var statearr_41576 = state_41536;
(statearr_41576[(7)] = inst_41497);

(statearr_41576[(8)] = inst_41496__$1);

return statearr_41576;
})();
var statearr_41577_43126 = state_41536__$1;
(statearr_41577_43126[(2)] = null);

(statearr_41577_43126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_41579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41579[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_41579[(1)] = (1));

return statearr_41579;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_41536){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_41536);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e41580){var ex__29175__auto__ = e41580;
var statearr_41581_43135 = state_41536;
(statearr_41581_43135[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_41536[(4)]))){
var statearr_41582_43136 = state_41536;
(statearr_41582_43136[(1)] = cljs.core.first((state_41536[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43137 = state_41536;
state_41536 = G__43137;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_41536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_41536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_41583 = f__29376__auto__();
(statearr_41583[(6)] = c__29375__auto___43093);

return statearr_41583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41585 = arguments.length;
switch (G__41585) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29375__auto___43139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29376__auto__ = (function (){var switch__29171__auto__ = (function (state_41631){
var state_val_41632 = (state_41631[(1)]);
if((state_val_41632 === (7))){
var inst_41627 = (state_41631[(2)]);
var state_41631__$1 = state_41631;
var statearr_41633_43141 = state_41631__$1;
(statearr_41633_43141[(2)] = inst_41627);

(statearr_41633_43141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (1))){
var inst_41587 = [];
var inst_41588 = inst_41587;
var inst_41589 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41631__$1 = (function (){var statearr_41634 = state_41631;
(statearr_41634[(7)] = inst_41589);

(statearr_41634[(8)] = inst_41588);

return statearr_41634;
})();
var statearr_41635_43142 = state_41631__$1;
(statearr_41635_43142[(2)] = null);

(statearr_41635_43142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (4))){
var inst_41592 = (state_41631[(9)]);
var inst_41592__$1 = (state_41631[(2)]);
var inst_41593 = (inst_41592__$1 == null);
var inst_41594 = cljs.core.not(inst_41593);
var state_41631__$1 = (function (){var statearr_41636 = state_41631;
(statearr_41636[(9)] = inst_41592__$1);

return statearr_41636;
})();
if(inst_41594){
var statearr_41637_43143 = state_41631__$1;
(statearr_41637_43143[(1)] = (5));

} else {
var statearr_41638_43144 = state_41631__$1;
(statearr_41638_43144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (15))){
var inst_41588 = (state_41631[(8)]);
var inst_41619 = cljs.core.vec(inst_41588);
var state_41631__$1 = state_41631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41631__$1,(18),out,inst_41619);
} else {
if((state_val_41632 === (13))){
var inst_41614 = (state_41631[(2)]);
var state_41631__$1 = state_41631;
var statearr_41648_43145 = state_41631__$1;
(statearr_41648_43145[(2)] = inst_41614);

(statearr_41648_43145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (6))){
var inst_41588 = (state_41631[(8)]);
var inst_41616 = inst_41588.length;
var inst_41617 = (inst_41616 > (0));
var state_41631__$1 = state_41631;
if(cljs.core.truth_(inst_41617)){
var statearr_41653_43146 = state_41631__$1;
(statearr_41653_43146[(1)] = (15));

} else {
var statearr_41655_43147 = state_41631__$1;
(statearr_41655_43147[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (17))){
var inst_41624 = (state_41631[(2)]);
var inst_41625 = cljs.core.async.close_BANG_(out);
var state_41631__$1 = (function (){var statearr_41657 = state_41631;
(statearr_41657[(10)] = inst_41624);

return statearr_41657;
})();
var statearr_41658_43148 = state_41631__$1;
(statearr_41658_43148[(2)] = inst_41625);

(statearr_41658_43148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (3))){
var inst_41629 = (state_41631[(2)]);
var state_41631__$1 = state_41631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41631__$1,inst_41629);
} else {
if((state_val_41632 === (12))){
var inst_41588 = (state_41631[(8)]);
var inst_41607 = cljs.core.vec(inst_41588);
var state_41631__$1 = state_41631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41631__$1,(14),out,inst_41607);
} else {
if((state_val_41632 === (2))){
var state_41631__$1 = state_41631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41631__$1,(4),ch);
} else {
if((state_val_41632 === (11))){
var inst_41596 = (state_41631[(11)]);
var inst_41592 = (state_41631[(9)]);
var inst_41588 = (state_41631[(8)]);
var inst_41604 = inst_41588.push(inst_41592);
var tmp41660 = inst_41588;
var inst_41588__$1 = tmp41660;
var inst_41589 = inst_41596;
var state_41631__$1 = (function (){var statearr_41661 = state_41631;
(statearr_41661[(7)] = inst_41589);

(statearr_41661[(8)] = inst_41588__$1);

(statearr_41661[(12)] = inst_41604);

return statearr_41661;
})();
var statearr_41662_43149 = state_41631__$1;
(statearr_41662_43149[(2)] = null);

(statearr_41662_43149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (9))){
var inst_41589 = (state_41631[(7)]);
var inst_41600 = cljs.core.keyword_identical_QMARK_(inst_41589,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_41631__$1 = state_41631;
var statearr_41663_43151 = state_41631__$1;
(statearr_41663_43151[(2)] = inst_41600);

(statearr_41663_43151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (5))){
var inst_41596 = (state_41631[(11)]);
var inst_41592 = (state_41631[(9)]);
var inst_41589 = (state_41631[(7)]);
var inst_41597 = (state_41631[(13)]);
var inst_41596__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41592) : f.call(null,inst_41592));
var inst_41597__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41596__$1,inst_41589);
var state_41631__$1 = (function (){var statearr_41664 = state_41631;
(statearr_41664[(11)] = inst_41596__$1);

(statearr_41664[(13)] = inst_41597__$1);

return statearr_41664;
})();
if(inst_41597__$1){
var statearr_41665_43153 = state_41631__$1;
(statearr_41665_43153[(1)] = (8));

} else {
var statearr_41666_43154 = state_41631__$1;
(statearr_41666_43154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (14))){
var inst_41596 = (state_41631[(11)]);
var inst_41592 = (state_41631[(9)]);
var inst_41609 = (state_41631[(2)]);
var inst_41610 = [];
var inst_41611 = inst_41610.push(inst_41592);
var inst_41588 = inst_41610;
var inst_41589 = inst_41596;
var state_41631__$1 = (function (){var statearr_41667 = state_41631;
(statearr_41667[(14)] = inst_41609);

(statearr_41667[(7)] = inst_41589);

(statearr_41667[(15)] = inst_41611);

(statearr_41667[(8)] = inst_41588);

return statearr_41667;
})();
var statearr_41672_43162 = state_41631__$1;
(statearr_41672_43162[(2)] = null);

(statearr_41672_43162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (16))){
var state_41631__$1 = state_41631;
var statearr_41678_43164 = state_41631__$1;
(statearr_41678_43164[(2)] = null);

(statearr_41678_43164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (10))){
var inst_41602 = (state_41631[(2)]);
var state_41631__$1 = state_41631;
if(cljs.core.truth_(inst_41602)){
var statearr_41679_43170 = state_41631__$1;
(statearr_41679_43170[(1)] = (11));

} else {
var statearr_41680_43171 = state_41631__$1;
(statearr_41680_43171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (18))){
var inst_41621 = (state_41631[(2)]);
var state_41631__$1 = state_41631;
var statearr_41681_43172 = state_41631__$1;
(statearr_41681_43172[(2)] = inst_41621);

(statearr_41681_43172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41632 === (8))){
var inst_41597 = (state_41631[(13)]);
var state_41631__$1 = state_41631;
var statearr_41682_43173 = state_41631__$1;
(statearr_41682_43173[(2)] = inst_41597);

(statearr_41682_43173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29172__auto__ = null;
var cljs$core$async$state_machine__29172__auto____0 = (function (){
var statearr_41684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41684[(0)] = cljs$core$async$state_machine__29172__auto__);

(statearr_41684[(1)] = (1));

return statearr_41684;
});
var cljs$core$async$state_machine__29172__auto____1 = (function (state_41631){
while(true){
var ret_value__29173__auto__ = (function (){try{while(true){
var result__29174__auto__ = switch__29171__auto__(state_41631);
if(cljs.core.keyword_identical_QMARK_(result__29174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29174__auto__;
}
break;
}
}catch (e41685){var ex__29175__auto__ = e41685;
var statearr_41686_43180 = state_41631;
(statearr_41686_43180[(2)] = ex__29175__auto__);


if(cljs.core.seq((state_41631[(4)]))){
var statearr_41691_43181 = state_41631;
(statearr_41691_43181[(1)] = cljs.core.first((state_41631[(4)])));

} else {
throw ex__29175__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43185 = state_41631;
state_41631 = G__43185;
continue;
} else {
return ret_value__29173__auto__;
}
break;
}
});
cljs$core$async$state_machine__29172__auto__ = function(state_41631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29172__auto____1.call(this,state_41631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29172__auto____0;
cljs$core$async$state_machine__29172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29172__auto____1;
return cljs$core$async$state_machine__29172__auto__;
})()
})();
var state__29377__auto__ = (function (){var statearr_41693 = f__29376__auto__();
(statearr_41693[(6)] = c__29375__auto___43139);

return statearr_41693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29377__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
