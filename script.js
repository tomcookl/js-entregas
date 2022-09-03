let repuesta = true
do{
    let pregunta = prompt("Estas listo para comenzar? Rta:si o no")
    if(pregunta.toLowerCase()=="si"){
        console.log("El usuario esta listo para comenzar")
        repuesta=false
    }
}while(repuesta)
let condicion = true
do {
    let pregunta = prompt("En que equipo debuto Maradona?")
    if(pregunta.toLowerCase()== "argentinos juniors"){
        console.log ("Su repuesta es correcta")
        condicion=false
    }else{
        console.log ("Su respuesta no es correcta")
    }
} while(condicion)
let napoli = true
do{
    let pregunta = prompt("En que equipo italiano ocupo un rol clave Maradona?")
    if (pregunta.toLowerCase() == "napoli"){
        console.log ("Su respuesta es correcta")
        napoli = false
    }else{
        console.log("Su respuesta no es correcta")
    }
}while(napoli)
let mundial = true
do{
    let pregunta = prompt("En que año fue campeon del mundo?")
    if(pregunta== 1986){
        console.log("Su respuesta es correcta")
        mundial=false
    }else{
        console.log("Su respuesta no es correcta")
    }
}while(mundial)