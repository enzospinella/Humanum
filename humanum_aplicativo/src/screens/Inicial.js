import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import commonStyles from '../commonStyles'
import Recomendacoes from '../components/recomendacoes'
import axios from 'react-native-axios'

// import ListaLivros from '../components/ListaLivros'

export default class Inicial extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        //buscarCategorias().then(result => categorias = result)
        //categorias = await esperarCategorias()
        buscarCategorias().then((data) => {
            this.setState({data})
        })
    }

    render() {
        //console.log(categorias)
        return (
            <View style={st.container}>
                <ScrollView>
                    {/* <Text style={st.texto}>teste</Text> */}
                    <Recomendacoes genero={this.state.data[0]}/>
                    {/* {console.log(this.state.data)} */}
                    <Recomendacoes genero={this.state.data[1]}/>
                    <Recomendacoes genero={this.state.data[2]}/>
                    <Recomendacoes genero={this.state.data[3]}/>
                    <Recomendacoes genero={this.state.data[4]}/>
                    {/* <Text>{this.state.data}</Text> */}
                </ScrollView>
            </View>
        )
    }
}

async function buscarCategorias(){
    try{
        var url = 'http://192.168.15.7:3002/categorias'
        const response = await axios.get(url);
        var categorias = response.data
        var catRandom = []
        var i = 5
        while(i--){
            var j = Math.floor(Math.random() * categorias.length)
            catRandom.push(categorias[j]["id"])
            categorias.splice(j, 1)
        }
        return catRandom
    }
    catch(error){
        console.error(error)
    }
}

async function esperarCategorias(){
    var ret = await buscarCategorias()
    return ret
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    texto: {
        fontFamily: 'commonStyles.fontFamily2'
    }
})