let data=null;
let cardBox=document.getElementById("cardBox");
let aList=document.getElementsByTagName("a");
aList=utils.toArray(aList);
let xhr=new XMLHttpRequest;
xhr.open('get','./json/product.json',false);
xhr.onreadystatechange=function(){
    if(xhr.status===200 && xhr.readyState===4){
        data=xhr.responseText;
    }
}
xhr.send();
data=JSON.parse(data);
aa();
function aa(){
    let aaCon=``;
   data.forEach((item)=>{
       aaCon+=`
       <li aaTime='${item.time}' aaHot='${item.hot}' aaPrice='${item.price}'>
       <img src="${item.img}" alt="">
       <span>${item.title}</span>
       <span>${item.time}</span>
       <span>${item.hot}</span>
       <span>${item.price}</span>
   </li>
      `
   })
cardBox.innerHTML=aaCon;
}

let bList=document.getElementsByTagName("li");
bList=utils.toArray(bList);


    for(var i=0;i<aList.length;i++){
    aList[i].index=i;
    aList[i].flag=-1;
    aList[i].onclick=function(){
     cc.call(this);
     dd.call(this);   
     ee.call(this);
    }
    }

function cc(){
   this.flag*=-1;
   let ary1=['aaTime','aaHot','aaPrice'];
   bList.sort((a,b)=>{
        a=a.getAttribute(ary1[this.index]);
        b=b.getAttribute(ary1[this.index]);
       if(this.index===0){
           a=a.replace(/-/g,'');
           b=b.replace(/-/g,'');
       }
       return (a-b)*this.flag;
   })
   for(var i=0;i<bList.length;i++){
    cardBox.appendChild(bList[i]);
}
}

function dd(){
    for(var i=0;i<aList.length;i++){
        if(aList[i]!=this){
              aList[i].children[0].classList.remove("bg");
        aList[i].children[1].classList.remove("bg");
        aList[i].flag = -1;
        }
    }
}

function ee(){
    let up=this.children[0];
    let down=this.children[1];
   if(this.flag>0){
        up.classList.add("bg");
        down.classList.remove("bg");
    }else{
        down.classList.add("bg");
        up.classList.remove("bg");
    }
}