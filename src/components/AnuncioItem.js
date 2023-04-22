import React from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import Anuncio from '../models/anuncio'

const windowHeight = Dimensions.get('window').height;


export default function AnuncioItem(props){
    const anuncio = new Anuncio(props.anuncio)
    return <TouchableOpacity  onPress={props.onPress}>
        <Image style={{
            height: windowHeight / 4,
            width: '90%',
            borderRadius: 6,
            marginLeft: '5%'
        }} source={{uri: anuncio.image}}/>
        <View >
            <Text >{anuncio.final == 1 ? 'Aluga-se' : anuncio.final == 2 ? 'Vende-se' : '?'}</Text>
            <Text style={{fontSize: anuncio.name.length > 12 ? 16 : 20,}}>{anuncio.name}</Text>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>R$ {anuncio.price.toFixed(0)}</Text>
        </View>
    </TouchableOpacity>
}