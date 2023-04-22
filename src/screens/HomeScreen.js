import React from 'react'
import { View, Text, Button } from 'react-native'
import DataBase from '../services/database'


export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.db = new DataBase
        this.navigation = props.navigation
        
    }
    render(){
        return(
            <View style={{marginHorizontal: 10}}>
                <View style={{marginBottom: 5, marginTop: 500}}>
                <Button 
                    title='Lista'
                    onPress={() => {this.navigation.push('Listagem',{})}}
                />
                </View>
                <Button
                    title='Cadastro'
                    onPress={() => {this.navigation.push('Cadastro',{})}}
                />
            </View>
        )
    }
}