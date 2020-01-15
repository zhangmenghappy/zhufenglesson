let data=null;
let xhr=new XMLHttpRequest;
let cardBox=document.getElementById("cardBox");
xhr.open('get','./json/product.json',false);
xhr.onreadystatechange=function (){
    if(xhr.status===200&&xhr.readyState===4){
        data=xhr.responseText;
    }
}
xhr.send();
data=JSON.parse(data);

let aList=document.getElementsByTagName("a");
aList=utils.toArray(aList);

chaLi();
function chaLi(){
    let chaCon=``;
    data.forEach((item)=>{
        chaCon+=`
        <li aaTime="${item.time}" aaHot="${item.hot}" aaPrice="${item.price}">
                 <img src="${item.img}" alt="">
                 <span>${item.title}</span>
                 <span>${item.time}</span>
                 <span>${item.hot}</span>
                 <span>${item.price}</span>
             </li>
        `
    })
cardBox.innerHTML=chaCon;
}

for(var i=0;i<aList.length;i++){
    aList[i].index=i;
    aList[i].flag=-1;
    aList[i].onclick=function(){
         aaKey.call(this);
         bbKey.call(this);
         ccKey.call(this);
    }
}

let bList=document.getElementsByTagName("li");
bList=utils.toArray(bList);
function aaKey(){
    this.flag*=-1;
    let ary=["aaTime","aaHot","aaPrice"];
    bList.sort((a,b)=>{
        a=a.getAttribute(ary[this.index]);
        b=b.getAttribute(ary[this.index]);
      //  console.log(a,b);
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

function bbKey(){
    for(var i=0;i<aList.length;i++){
        if(this != aList[i]){
            aList[i].children[0].classList.remove('bg');
            aList[i].children[1].classList.remove('bg');
            aList[i].flag=-1;
        }
    }
}

function ccKey(){
let up=this.children[0];
let down=this.children[1];
if(this.flag>0){
    up.classList.add('bg');
    down.classList.remove('bg');
}else{
    down.classList.add('bg');
    up.classList.remove('bg');
}

}
