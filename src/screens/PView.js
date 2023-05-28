import React from 'react'
import Database from '../services/database'
import { View, Text, Image } from 'react-native'
import Noticia from '../models/noticia'


export default class PView extends React.Component{
    constructor(props){
        super(props)
        this.db = new Database()
        this.noticiaId = props.route.params.noticiaId
        this.state = {
            noticia: new Noticia(),
            carregando: true
        }
        if(!this.noticiaId){
            setTimeout(props.navigation.pop,0) //volta caso o id não seja carregado corretamente
            alert("Id não foi passado para View")
        } else {
            this.db.loadNoticiasById(this.noticiaId).then(res => {
                if(res){
                    this.setState({noticia:res,carregando:false})
                } else {
                    setTimeout(props.navigation.pop,0) //volta caso o id não seja carregado corretamente
                    alert("Noticia não carregado do banco")
                }
            })
        }
    }
    render(){
        return !this.state.carregando ?
            <View>                                
                <View>
                    <Text>{this.state.noticia.titulo}</Text>
                    <Text>{this.state.noticia.corpo}</Text>                    
                </View>
                <Image source={{uri:this.state.noticia.image}} />
            </View>
            : <Text>Carregando ... </Text>
    }
}