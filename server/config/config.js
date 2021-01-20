/**
 * PUERTO
 */


process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe_user:ws1t6u5XK6ffbVpx@cluster0.rygsb.mongodb.net/cafe';
}

process.env.URLDB = urlDB;