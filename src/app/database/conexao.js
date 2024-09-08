import mysql from 'mysql'

const dataBase = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "BD_COPA"
})

dataBase.connect()

export default dataBase