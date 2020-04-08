const mysql = require('mysql');

const conexion = mysql.createConnection('mysql://my2uuo8w21nrz44t:dvrs8izrt1pioris@u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lcmed43pnr99bqtr');

conexion.connect((err)=>{
    if(err){
        return console.log(err)
    }
    else
    {
       return console.log("Conexion Realizada MYSQL")
    }
})

module.exports = conexion;