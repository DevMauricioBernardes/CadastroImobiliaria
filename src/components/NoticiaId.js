import React from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import Noticia from '../models/noticia';

const windowHeight = Dimensions.get('window').height;


export default function NoticiaId(props){
    const noticia = new Noticia(props.noticia)
    return <TouchableOpacity  onPress={props.onPress}>        
        <View >            
            <Text style={{fontSize: noticia.titulo.length > 12 ? 16 : 20,}}>{noticia.titulo}</Text>
            <Text style={{fontSize: noticia.corpo.length > 12 ? 16 : 20,}}>{noticia.corpo}</Text>              
        </View>
        <Image style={{
            height: windowHeight / 4,
            width: '90%',
            borderRadius: 6,
            marginLeft: '5%'
        }} source={{uri: noticia.image}}/>
    </TouchableOpacity>
}