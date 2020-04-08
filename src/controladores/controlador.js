const nombreVar =  (req, res) => {
    var nombre = "Hola sadsdsad"
    console.log(nombre)
    res.status('200').send(nombre)
}

const cachoVar =  (req, res) => {
    var nombre = "chao sadsdsad"
    console.log(nombre)
    res.status('200').send(nombre)
}


module.exports ={nombreVar,cachoVar}