let utils=(function (){
function toArray(likeAry){
     let ary=[];
     try{
        ary=Array.prototype.slice.call(likeAry); 
     }catch(e){
        for(var i=0;i<likeAry.length;i++){
            ary.push(likeAry[i]);
        }
     }
     return ary;
}

function mean(){
    let ary=toArray(arguments);
    ary.sort(function(a,b){return a-b});
    ary.pop();
    ary.shift();
    return (eval(ary.join('+'))/ary.length).toFixed(2);
}


function getMax(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        if (ary[i] > ary[i + 1]) {
            let temp = ary[i];
            ary[i] = ary[i + 1];
            ary[i + 1] = temp;
        }
    }
    return ary[ary.length-1]
}



return{
    toArray:toArray,
    mean:mean,
    getMax:getMax,
}
})()