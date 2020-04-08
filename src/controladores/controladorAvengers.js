const arrayAvengers = require('../modelos/avengers')

const traerAvengers = (req, res) => {
    res.status('200').json(arrayAvengers);
}
const traerAvenger = (req, res) => {
    const idAvengers = req.params.Id;
    if(!isNaN(`${idAvengers}`))
    {
    arrayAvengers.map((avg) => {if(avg.codigo == idAvengers) return res.status(200).json(avg);})
    }
    else 
    {return res.status('400').json(`${idAvengers} no es numerico`)}
}
const agregarAvengers = (req, res) => {
    const { nombre } = req.body;
    const index = arrayAvengers.length + 1
    const newAvengers = {
        codigo: index,
        nombre: nombre
    }
    arrayAvengers.push(newAvengers)
    res.status('200').json('Agregado');
}
const editarAvengers = (req, res) => {
    const idAvengers = req.params.Id; 
    const {nombre}  = req.body;
    if(!isNaN(`${idAvengers}`))
    {
            arrayAvengers.map((avg,index) => {
                if(avg.codigo === parseInt(idAvengers)){
                    avg.nombre=nombre            
                    return res.status('200').json('editado')    
            }})
    }
    else 
    {
        return res.status('400').json(`${idAvengers} no es numerico`)  
    }
}
const eliminarAvengers = (req, res) => {
    const idAvengers = req.params.Id;
    //delete arrayAvengers[idAvengers];
    if(!isNaN(`${idAvengers}`)){ 
    arrayAvengers.map((avg,index) => {
        if(avg.codigo === parseInt(idAvengers)){
            arrayAvengers.splice(index,1)             
            return res.status('200').json('Eliminado')
        
    }})
    }
    else 
    {
        return res.status('400').json(`${idAvengers} no es numerico`)  
    }
}

module.exports = {
    traerAvengers,
    traerAvenger,
    agregarAvengers,
    editarAvengers,
    eliminarAvengers
}