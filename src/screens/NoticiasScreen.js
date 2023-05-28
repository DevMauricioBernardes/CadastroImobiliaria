import React from 'react'
import { FlatList, Text, View } from 'react-native'

import NoticiaId from '../components/NoticiaId'
import DataBase from '../services/database'
import SimplePicker from '../components/SimplePicker'

export default class Noticias extends React.Component {
    constructor(props) {
        super(props)
        this.db = new DataBase()        
        this.navigation = props.navigation
        this.state = {
            noticias: [],
            carregando: true,
            ilter: -1,            
        }
        this.refresh()
    }

    refresh = () => {
        let filter = this.state.filter
        if (filter > 0) setTimeout(() => {
            this.setState({ noticias: [], carregando: true })
            this.db.loadNoticiasWithTypeFilter(filter).then(noticias => this.setState({ noticias: noticias, carregando: false }))
        }, 0)
        else setTimeout(() => {
            this.setState({ noticias: [], carregando: true })
            this.db.loadNoticias().then(noticias => this.setState({ noticias: noticias, carregando: false }))
        }, 0)
    }
    renderItem = ({ item }) => <NoticiaId noticia={item} />

    keyExtractor = (item) => item.id.toString()

    render() {
        return (
            <View>                
                {this.state.carregando ? 
                    <Text>Carregando...</Text>: 
                        this.state.noticias.length > 0 ? 
                    <FlatList 
                        data={this.state.noticias}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false} />: 
                    <Text style={{textAlign: 'center', margin: 20}}>Não há notícias no momento</Text>
                }
            </View>
        )
    }
}