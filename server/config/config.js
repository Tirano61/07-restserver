/**
 * PUERTO
 */
process.env.PORT = process.env.PORT || 3000;
/**
 * Entorno
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
/**
 * fECHA VENCIMIENTO DE TOKEN
 */
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

/**
 * SEED DE AUTENTIFICACION
 */

process.env.SEED = process.env.SEED || 'seed-firma-secreta';

/**
 * BASE DE DATOS
 */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;