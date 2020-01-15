let utils = (function () {
    function offset(curEle) { // 当前元素
        let l = curEle.offsetLeft;
        let t = curEle.offsetTop;
        let parent = curEle.offsetParent
        while (parent !== document.body) {
            l += parent.clientLeft + parent.offsetLeft;
            t += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent
        }
        return {
            left: l,
            top: t
        }
    }

    function getCss(curEle, attr) {
        let val = null;
        if ('getComputedStyle' in window) {
            val = getComputedStyle(curEle)[attr]
        } else {
            val = curEle.currentStyle[attr];
        }
        let reg = /^(width|height|padding|margin|left|right|top|bottom|fontSize|opacity)$/
        if (reg.test(attr)) {
            val = parseFloat(val);
        }
        return val;
    }

    function setCss(curEle, attr, value) {
        let reg = /^(width|height|padding|margin|left|right|top|bottom|fontSize)$/
        if (reg.test(attr)) {
            if (typeof value === 'number') {
                value = value + 'px';
            }
        }
        curEle.style[attr] = value;
    }

    function setGroupCss(curEle, obj) {
        for (var key in obj) {
            setCss(curEle, key, obj[key])
        }
    }
    function css(){
        let [curEle,attr,value] = arguments;
        if(arguments.length === 2){
            if(typeof attr === 'string'){
                return getCss(curEle,attr)
            }
            else {
                setGroupCss(curEle,attr)
            }
        }
        else if(arguments.length === 3){
            setCss(curEle,attr,value)
        }

    }
    function win(attr,value){
        if(value === undefined){
          return  document.documentElement[attr] || document.body[attr]
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
   }
    return {
        offset,
        getCss,
        setCss,
        setGroupCss,
        css,
        win
    }
})()