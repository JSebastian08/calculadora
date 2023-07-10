const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const icon = document.querySelector(".btn_icon");

/* fucionamiento de los botones*/
botones.forEach(boton => {
    
    /* fucionamiento de la vista de la pantalla*/
    boton.addEventListener("click", () =>{
        const clickboton = boton.textContent;
    
    /* fucionamiento de los botones*/
        /* Boton de borrar todo */
        if(boton.id ==="c"){
            pantalla.textContent = "0";
            return;
        }
        /* Boton eliminar ultimo número*/
        if(boton.id === "borrar"){
            
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            
            return;
        }
        
        /* Boton igual*/
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error"
            }
            
            return;
        }
        
        if(pantalla.textContent ==="0" || pantalla.textContent === "Error"){
            pantalla.textContent = clickboton;
        }else{
            pantalla.textContent += clickboton;
        }

        
    })

});

/* Boton dark mode*/
const body = document.querySelector('body')
const boton = document.querySelector('.btn_boton')

boton.addEventListener("click", () =>{
    
    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    if(body.classList.contains('darkmode')){
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');

    }else{
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');

    }


    
})