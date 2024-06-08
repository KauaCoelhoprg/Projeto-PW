function menu(){
    
    const nav=window.document.getElementById("nav-lateral")
    if(nav.style.width==='50px'){
         nav.style.width='200px'
         nav.style.transition='0.5s'
    }else{
         nav.style.width='50px'
         nav.style.transition='0.5s'
    }
}
