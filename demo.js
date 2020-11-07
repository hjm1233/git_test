window.onload=function(){
    let box=document.getElementsByClassName('box');
    for(var item in box){
        let a=item;
        box[item].addEventListener('click',()=>{
        alert('这是测试代码'+(Number(a)+1));
    })
    }
}