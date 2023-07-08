import app from "./app"

//1. Iniciar un servidor para responder a peticiones REST
app.listen(
    3000,
    ()=>{
        console.log("El servidor está escuchando en el puerto 3000");
        
    }
)