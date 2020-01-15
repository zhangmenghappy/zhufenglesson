let data=null;
let xhr=new XMLHttpRequest;
xhr.open('get','./json/product.json',false);
xhr.onreadystatechange=function(){
    if(xhr.status==200&&xhr.readyState==4){
        data=xhr.responseText;
    }
}
xhr.send();
data=JSON.parse(data);

let cardBox=document.getElementById("cardBox");
let aI=document.getElementsByTagName("a");
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

for(var i=0;i<aI.length;i++){
    aI[i].index=i;
    aI[i].flag=-1;
    aI[i].onclick=function(){
        aaKey.call(this);
        bbKey.call(this);
        ccKey.call(this);
    }
}
let list=document.getElementsByTagName("li");
list=utils.toArray(list);
function aaKey(){
    this.flag*=-1;
    let ary=['aaTime','aaHot','aaPrice'];
    list.sort((a,b)=>{
        a=a.getAttribute(ary[this.index]);
        b=b.getAttribute(ary[this.index]);
        if(this.index===0){
            a=a.replace(/-/g,'');
            b=b.replace(/-/g,'');
        }
        return (a-b)*this.flag;
    })
    for(var i=0;i<list.length;i++){
        cardBox.appendChild(list[i]);
    }
}

function bbKey(){
    for(var i=0;i<aI.length;i++){
        if(this.index!==i){
            //console.log(i);
            aI[i].children[0].classList.remove('bg');
            aI[i].children[1].classList.remove('bg');
            aI[i].flag=-1;
        }
    }
}

function ccKey(){
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