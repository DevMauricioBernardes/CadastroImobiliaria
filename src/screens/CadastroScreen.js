import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Button } from 'react-native'
import {Input} from 'react-native-elements'

import DatabaseClass from '../services/database'
import Noticia       from '../models/noticia'
import SimplePicker  from '../components/SimplePicker'
import ImagePicker   from '../components/ImagePicker'

class CadastroScreen extends Component{
    constructor(props){
        super(props)
        this.db = new DatabaseClass()
        this.navigation = props.navigation  
        this.state = {
            noticia_titulo: '',
            noticia_corpo: '',            
            noticia_image: ''
        }
    }
    render(){
        return (
            <View>
                <ScrollView>
                    <Text style={{textAlign: 'center', marginVertical: 10}}>Cadastro de notícias</Text>
                    <Input placeholder="Título" onChangeText={text => this.setState({noticia_titulo: text})} maxLength={50}/>
                    <Input placeholder="Corpo" onChangeText={text => this.setState({noticia_corpo: text})} maxLength={10000}/>  
                    
                    <View style={{marginHorizontal: 10}}>
                        <View style={{marginBottom: 5}}>
                        <ImagePicker title="Carregar foto" usePhotoFromLibrary={true} onTakePhoto={(uri)=>this.setState({noticia_image: uri})}/>
                        </View>                        
                        <ImagePicker title="Tirar foto"    saveCameraImage={true}     onTakePhoto={(uri)=>this.setState({noticia_image: uri})}/>
                    </View>

                    {this.state.noticia_image ? 
                    <View>
                    <Image style={{margin: 10, alignSelf: 'center', width: '100%', height: 250}} source={{uri: this.state.noticia_image}}/>
                        
                    </View>
                    : 
                    <Text style={{textAlign: 'center', marginVertical: 20}}>Sem imagem!</Text> 
                    }
                    <View style={{margin: 10}}>
                    <Button title="Cadastrar" onPress={this.add_address}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
    add_address = (()=>{
        let noticia = new Noticia({
            titulo:    this.state.noticia_titulo,
            corpo:   this.state.noticia_corpo,
            image:   this.state.noticia_image,
            
        })
        console.log('teste1')
        if(!noticia.isValidWithOutId()){
            alert('Por favor preencha todos os campos!')
            return
        }
        this.db.addNewNoticia(noticia).then(result => {
            if(result){
                this.navigation.pop()
                this.sendNoticiaNotification(noticia)
            }else alert("Erro ao cadastrar anúncio!"+noticia.titulo)
        })
    }).bind(this)

}
export default CadastroScreen;
