const header = document.querySelector('header')

window.addEventListener('scroll',()=>{
    if((document.body.scrollTop>300||document.documentElement.scrollTop>300)){
        header.style.backgroundColor='#000'
    }else{
        header.style.backgroundColor='transparent'
    }
})
