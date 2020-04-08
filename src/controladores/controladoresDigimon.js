const mysqlConexion = require('../servicios/conexionBD')
const {responseError,responseOk} = require('../modelos/modeloRespuesta')


const traerDigimons = (req, res) => { 
        mysqlConexion.query(`select * FROM DIGIMONES`,
        (err,rows,fields) => {
        if (rows) console.log("Rows:",rows);
        if (fields) console.log("Fields:",fields);
            if (err){
                console.log("Error :", error);
                responseError.statusCode=500;
                responseError.statusMsj="Error BackEnd"
                responseError.messaje= error.message;
                return res.status(500).json(responseError);
            }else{
                if(rows.length>=1){
                    responseOk.statusCode=200;
                    responseOk.statusMsj="OK"
                    responseOk.data= rows;
                return res.status(200).json(responseOk);
                }else{
                    responseError.statusCode=404;
                    responseError.statusMsj="TABLA VACIA"
                    responseError.messaje= `NO EXISTEN DIGIMONS`;
                    return res.status(404).json(responseError);
                }
            }
    })
}

const traerDigi = (req, res) => {
    const nombre = req.params.nombre
    mysqlConexion.query(`select * FROM DIGIMONES WHERE NOMBRE ='${nombre}'`,
        (err,rows,fields) => {
         if (rows) console.log("Rows:",rows);
         if (fields) console.log("Fields:",fields);
            if (err){
                console.log("Error :", error);
                responseError.statusCode=500;
                responseError.statusMsj="Error BackEnd"
                responseError.messaje= error.message;
                return res.status(500).json(responseError);
            }else{
                if(rows.length>=1){
                    responseOk.statusCode=200;
                    responseOk.statusMsj="OK"
                    responseOk.data= rows;
                return res.status(200).json(responseOk);
                }else{
                    responseError.statusCode=404;
                    responseError.statusMsj="Not_Found"
                    responseError.messaje= `${req.params.nombre} no esta`;
                    return res.status(500).json(responseError);
                }
            }
    })
}

const agregarDigimons = (req, res) => {
    const {nombre,tipo} = req.body
    if(nombre && tipo){ 
        mysqlConexion.query(
            `INSERT INTO DIGIMONES VALUES(null,'${nombre}','${tipo}')`,
                (err,rows,fields) => {
                    if (rows) console.log("Rows:",rows);
                    if (fields) console.log("Fields:",fields);
                    if (err){
                        console.log("Error :", error);
                        responseError.statusCode=500;
                        responseError.statusMsj="Error BackEnd"
                        responseError.messaje= error.message;
                        return res.status(500).json(responseError);
                    }else{
                        responseOk.statusCode=200;
                        responseOk.statusMsj="OK"
                        responseOk.data= rows;
                    return res.status(200).json('Creado');
                    }
                }
          );
     }
     else 
     {
        responseError.statusCode=400;
        responseError.statusMsj="Campo Faltante"
        if(!nombre) responseError.messaje="Campo 'Nombre' falta"
        if(!tipo) responseError.messaje="Campo 'tipo' falta"
        return res.status(400).json(responseError);
    
     }
}

const editarDigimons = (req, res) => {
    const codigo = req.params.codigo
    const {nombre,tipo} = req.body
    mysqlConexion.query(`Update DIGIMONES set NOMBRE = '${nombre}',TIPO = '${tipo}' WHERE CODIGO ='${codigo}'`,
        (err,rows,fields) => {
         if (rows) console.log("Rows:",rows.affectedRows);
         if (fields) console.log("Fields:",fields);
            if (err){
                console.log("Error :", error);
                responseError.statusCode=500;
                responseError.statusMsj="Error BackEnd"
                responseError.messaje= error.message;
                return res.status(500).json(responseError);
            }else{
                if(rows.affectedRows>=1){
                    responseOk.statusCode=200;
                    responseOk.statusMsj="OK"
                    responseOk.data= rows;
                return res.status(200).json(responseOk);
                }else{
                    responseError.statusCode=404;
                    responseError.statusMsj="Not_Found"
                    responseError.messaje= ` ID ${req.params.codigo} no esta`;
                    return res.status(404).json(responseError);
                }
            }
        })
}

const eliminarDigimons = (req, res) => {
    const codigo = req.params.codigo
    mysqlConexion.query(`DELETE FROM DIGIMONES WHERE CODIGO ='${codigo}'`,
        (err,rows,fields) => {
         if (rows) console.log("Rows:",rows);
         if (fields) console.log("Fields:",fields);
            if (err){
                console.log("Error :", error);
                responseError.statusCode=500;
                responseError.statusMsj="Error BackEnd"
                responseError.messaje= error.message;
                return res.status(500).json(responseError);
            }else{
                if(rows.affectedRows> 1){
                    responseOk.statusCode=200;
                    responseOk.statusMsj="OK"
                    responseOk.data= rows;
                return res.status(200).json(responseOk);
                }else{
                    responseError.statusCode=404;
                    responseError.statusMsj="Not_Found"
                    responseError.messaje= ` ID ${req.params.codigo} no esta`;
                    return res.status(404).json(responseError);
                }
            }
        }
    )
}
module.exports = {
    traerDigimons,
    traerDigi,
    agregarDigimons,
    editarDigimons,
    eliminarDigimons
}
