
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {collection, getDocs, getFirestore,  } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"
import { crearCard, funcionEventos } from "./funcionesConstructoras.js";


const firebaseConfig = {
  apiKey: "AIzaSyC73qm2nxTr3LSl9hJdYz1ioW77OkICOQc",
  authDomain: "proyecto-e-commerce-7c89e.firebaseapp.com",
  projectId: "proyecto-e-commerce-7c89e",
  storageBucket: "proyecto-e-commerce-7c89e.appspot.com",
  messagingSenderId: "209578545443",
  appId: "1:209578545443:web:1adc2e9bec5af6ce393c96"
};

//Inicializar firebase con firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

 
//obtener Productos
export const obtenerProductos = async()=>{

    const querySnapshot = await getDocs(collection(db, "Set-maquillajes")); //aqui guarda la respuesta de la base de datos
    querySnapshot.forEach((doc) => {
        let datosFire = doc.data()
        //console.log(datosFire)

        crearCard(datosFire)  
    });
    funcionEventos()
}
    


