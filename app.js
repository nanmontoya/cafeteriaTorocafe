// app.js
import { app } from './firebase-config.js';
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore(app);

// Ejemplo: guardar un pedido
async function guardarPedido() {
  try {
    const docRef = await addDoc(collection(db, "pedidos"), {
      cliente: "Luis Pérez",
      productos: [
        { nombre: "Café", cantidad: 1, precio: 30 },
        { nombre: "Galleta", cantidad: 2, precio: 15 }
      ],
      total: 60,
      metodoPago: "efectivo",
      fecha: new Date()
    });
    console.log("Pedido guardado con ID:", docRef.id);
  } catch (e) {
    console.error("Error al guardar pedido:", e);
  }
}

// Llamar a la función (puede ser desde un botón)
guardarPedido();
