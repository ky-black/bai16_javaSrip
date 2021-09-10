function caiSuKienTheDiv(){
    var obj= document.getElementById('div1');
    obj.onclick= div_1_Click;
    obj.onmouseout=F2;
    obj.onmouseover=div_1_Click;
}
//khi click lene the d1 duoc goi
function div_1_Click(){
    var obj= document.getElementById('div1');
    obj.innerHTML=(new Date()).getSeconds();
    obj.setAttribute('style','background-color: yellow');
}

function F2(){
    var obj= document.getElementById('div1');
    obj.innerHTML="OUT"
    obj.setAttribute('style','background-color: green');
}
