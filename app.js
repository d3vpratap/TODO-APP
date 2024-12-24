$('section').addClass('container');
$('h1 span').click(function(){
    $('input').slideToggle();
})
$('input').keypress(function(e){
    if(e.which === 13){
        const todoText = ($(this).val());
        $('#list').append(`<li><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAAD7+/vPz8+BgYE7Ozu3t7fBwcHW1tZ4eHgtLS0jIyPx8fHu7u5YWFjn5+eUlJQZGRmioqLd3d2pqalOTk5vb2/JycmwsLBHR0eampo1NTWMjIxiYmISEhJBQUGU9MV0AAACTklEQVRoge2Z25KCMAyGFyionESLBUHg/d9ymzKIM7QNpuzV9r/SHj5Lk7SY/PwgKmrRBxrFoi6wuZjaSUee9Uzc2MyMBjGnddvZQeCw9kLtdl9FGlUp9E30fVebUpl6X9D7IsPBmA9yNyJkV5VFqOwrTI7M/RH050Q4Pxwe5m+dYfIpN+oE/df1e4iste1E+dZDhWFp1BP6H+t30bVXM7tOsaDBlLYGdF66okGD3giXI9iG82Y+Rx6CkSWUEbSRIWT7rbMbHFN1k5DLtp33pkf6RrC1Md80K6fdNn8pFVfNprmBZmosv1VY4NvmLwXPP25PjDMEkEAiGFM4SEiv2VzwlkC4sRVD4y2zLaQ3xmTdZsJZ97uvYyJUfy2Gh9CNV24yuKIHy62Yd3LAOFwIGkY59W4NlESOSElxes7k1JN1iIJrzY0p8vCj4GHLVvsWVbe+eHKWfJ5EFLj0zXF5XwjlDT4sQHgdq93gIdxPS2Co17tl6bX8PH0snQKHw+iug1cw0sM93MM93MM93MM93MM93MM93MP/IXy0wTNHOOR+l2yjykgu6RrIIJYfMyl/z5tszYhDEqxaFpuXQfaZ4yQlFniz5hLyKFrzTEXDXRMLu/W38FuA5YINKeodUilyS1FJ6gquR6pDQopkRGqMsHOkbDHkO1NkjCq52O2iFRgLrV+qkllvKVTpxeGJ0arEnALvv1x7okpjDE3t87kQH7NGVxzW6cRiNWXa8byqeEGR3Q8XOqn81+9iS2dHqv06sd0+EPJ6yvaDs6nW+8kvzyc3UP0M3fUAAAAASUVORK5CYII=" alt=""></span> ${todoText}</li>`);
        $(this).val("");
    }
})
//Mark completed
$('ul').on('click','li',function(e){
    $(this).toggleClass('completed');
})

//delete method
$('ul').on('click','span',function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    });
    
})
function RandomColorMaker(){
    let r = Math.floor(Math.random() *256); 
    let g = Math.floor(Math.random() *256); 
    let b = Math.floor(Math.random() *256); 
    return `rgb(${r}, ${g}, ${b})`;
}
function change(){
    setInterval(()=>{
        const h1 = document.querySelector('h1');    
        h1.style.backgroundColor = RandomColorMaker();
    },1000);
}
change();



