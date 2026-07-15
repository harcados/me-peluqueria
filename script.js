// ================================
// Me. Peluquería
// Script de copiado
// ================================

const alias = "me.recta";
const cbu = "0110152830015255317215";

// -------------------------------
// Función genérica para copiar
// -------------------------------

async function copiar(texto, toastId, boton) {

    try {

        await navigator.clipboard.writeText(texto);

        mostrarToast(toastId);

        cambiarBoton(boton);

        vibrar();

    } catch (error) {

        // Compatibilidad con navegadores antiguos

        const input = document.createElement("textarea");

        input.value = texto;

        document.body.appendChild(input);

        input.select();

        document.execCommand("copy");

        document.body.removeChild(input);

        mostrarToast(toastId);

        cambiarBoton(boton);

        vibrar();

    }

}

// -------------------------------
// Alias
// -------------------------------

function copiarAlias(){

    const boton = event.currentTarget;

    copiar(alias,"aliasToast",boton);

}

// -------------------------------
// CBU
// -------------------------------

function copiarCBU(){

    const boton = event.currentTarget;

    copiar(cbu,"cbuToast",boton);

}

// -------------------------------
// Toast
// -------------------------------

function mostrarToast(id){

    const toast = document.getElementById(id);

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2200);

}

// -------------------------------
// Cambiar texto botón
// -------------------------------

function cambiarBoton(boton){

    const textoOriginal = boton.innerHTML;

    boton.innerHTML = `
        <i class="fa-solid fa-check"></i>
        ¡COPIADO!
    `;

    boton.style.background = "#27ae60";
    boton.style.borderColor = "#27ae60";
    boton.style.color = "#fff";

    setTimeout(()=>{

        boton.innerHTML = textoOriginal;

        boton.style.background = "transparent";
        boton.style.borderColor = "#ffffff";
        boton.style.color = "#ffffff";

    },2000);

}

// -------------------------------
// Vibración Android
// -------------------------------

function vibrar(){

    if(navigator.vibrate){

        navigator.vibrate(120);

    }

}

// -------------------------------
// Animación de entrada
// -------------------------------

window.addEventListener("load",()=>{

    const container=document.querySelector(".container");

    container.animate(

        [

            {

                opacity:0,

                transform:"translateY(35px)"

            },

            {

                opacity:1,

                transform:"translateY(0px)"

            }

        ],

        {

            duration:700,

            easing:"ease-out"

        }

    );

});