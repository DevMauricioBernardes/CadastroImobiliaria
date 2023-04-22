import Anuncio from '../models/anuncio'
import LDatabase from './ldatabase'

export default class Database{
    constructor(){
        this.table_name = 'anuncios'
        this.db = new LDatabase('Anunciosdata.db', (db) => {
            db.executeQuery(`CREATE TABLE IF NOT EXISTS ${this.table_name}(
                id integer primary key autoincrement, 
                name text, 
                price integer, 
                image text, 
                address text, 
                final integer, 
                type integer);`, () => {}, (error) => {console.log(error)})
        console.log("Banco de dados conectado")
        })
    }
    loadAnuncios(){
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })
    }
// arrumar XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    loadAnunciosWithTypeFilter(){
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })
    }

// arrumar XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
    loadAnunciosByFinal(){
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })

    }

// arrumar XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
    delAnuncio(){
        return new Promise(resolve => {
            this.db.executeQuery(`DELETE ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })

    }

// arrumar XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    
    loadAnunciosById(){
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })

    }
    
    addNewAnuncio(anuncio=new Anuncio()){
        return new Promise(resolve => {
            if(anuncio.isValidWithOutId()){
                const query = `INSERT INTO ${this.table_name} (name, price, image, address, final, type) VALUES ('${anuncio.name}', ${anuncio.price}, '${anuncio.image}', '${anuncio.address}', ${anuncio.final}, ${anuncio.type});`
                this.db.executeQuery(query, ()=>resolve(true), (_)=>{console.log(_); resolve(false)})
            }else resolve(false)
        })
    }

}
