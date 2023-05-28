export default class Noticia{
    constructor (data={
        id:0,
        titulo:'',
        corpo:'',
        image:''
        
    }){
        this.id      = data.id
        this.titulo  = data.titulo
        this.corpo   = data.corpo
        this.image   = data.image
        
    }
    isValidWithOutId(){
        return this.titulo && this.corpo
    }    
    }
