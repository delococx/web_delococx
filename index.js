import express from 'express'
import dotenv from 'dotenv'

// Cargar las variables de entorno desde el archivo .env
dotenv.config()

// Crear una instancia de la aplicación Express
const app = express();

// Deshabilitar el encabezado 'x-powered-by'
app.disable('x-powered-by');

// Definir el puerto en el que el servidor escuchará
const port = process.env.PORT ?? 3000;

// Configurar una ruta básica para la raíz
app.get("/", (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html');
 });

// Iniciar el servidor y hacer que escuche en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corrieendo en http://localhost:${port}`);
});
