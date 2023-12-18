import { sql } from './db.js'

// CTRL + K + C = Comenta os codigos / CTRL + K + U = Descomenta

// sql`DROP TABLE IF EXISTS videos;` .then(() => {
//     console.log("Tabela Apagada!")
// })

sql`
CREATE TABLE videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    INTEGER
);
`.then(() => {
    console.log("Tabela Criada!")
})