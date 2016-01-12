(function (){
cljs.user.fizzbuzz = (function cljs$user$fizzbuzz(start,finish){
return cljs.core.map.call(null,(function (n){
if((cljs.core.mod.call(null,n,15) === 0)){
return "FizzBuzz";
} else {
if((cljs.core.mod.call(null,n,3) === 0)){
return "Fizz";
} else {
if((cljs.core.mod.call(null,n,5) === 0)){
return "Buzz";
} else {
return n;

}
}
}
}),cljs.core.range.call(null,start,finish));
}); return (
new cljs.core.Var(function(){return cljs.user.fizzbuzz;},new cljs.core.Symbol("cljs.user","fizzbuzz","cljs.user/fizzbuzz",381856944,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Symbol(null,"fizzbuzz","fizzbuzz",1048937975,null),null,15,1,1,1,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"finish","finish",1053843481,null)], null)),null,(cljs.core.truth_(cljs.user.fizzbuzz)?cljs.user.fizzbuzz.cljs$lang$test:null)])));})()
cljs.user.fizzbuzz.call(null,1,100)