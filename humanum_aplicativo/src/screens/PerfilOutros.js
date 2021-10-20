import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import commonStyles from '../commonStyles'
import TextosFavoritos from '../components/TextosFavoritos'
import Icon from 'react-native-vector-icons/FontAwesome'
import Input from '../components/AutenticacaoInputs'
import * as ImagePicker from 'react-native-image-picker';


const dimensions = Dimensions.get('window');
export default props => {
    const { user } = props.route.params
    console.log(user)
    return (
        <>
            <View style={st.container}>
                <View style={st.view1}>
                    <View style={st.viewFundo}>
                        <Image style={st.imgFundo} source={{ uri: user.banner }} resizeMode='stretch' />
                    </View>
                    <View style={st.viewFoto}>
                        <Image style={st.fotoPerfil} source={{ uri: user.foto }} />
                    </View>

                    <TouchableOpacity style={st.icon} onPress={() => {
                        console.log('oi')
                        props.navigation.push("Chat", {destinatario: user, ehDM: true})
                    }}>
                        <Icon name='envelope' size={30} />
                    </TouchableOpacity>

                    <View style={st.nome}>
                        <Text style={st.t1}>{user.nome}</Text>
                    </View>
                </View>

                <View style={st.view2}>
                    <Text style={st.t2}>{user.descricao}</Text>
                    <Text style={st.t2}>Conta criada em: {user.datacriacao}</Text>
                    <Text style={st.t1}>{user.pontos} Pontos</Text>
                </View>
            </View>
            <View style={st.textosFav}>
                <Text style={[st.t1, { marginLeft: 25 }]}>Textos Favoritos</Text>
                <TextosFavoritos />
            </View>
        </>
    )
}

const st = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: dimensions.height/3.1,
        left: dimensions.width/1.53
    },
    container: {
        flex: 65,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view1: {
        flex: 65,
        alignItems: 'center',
        justifyContent: 'center',
        width: dimensions.width
    },
    nome: {
        flex: 10,
        alignItems: 'center',
        width: dimensions.width
    },
    view2: {
        flex: 35,
        width: dimensions.width,
        marginLeft: 50,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    t1: {
        fontFamily: commonStyles.fontFamily2,
        fontSize: 22,
    },
    t2: {
        fontFamily: commonStyles.fontFamily2,
        fontSize: 14,
    },
    viewFundo: {
        flex: 25,
    },
    imgFundo: {
        width: dimensions.width,
        height: dimensions.width * 8 / 16,
    },
    viewFoto: {
        justifyContent: 'center',
    },
    fotoPerfil: {
        width: 130,
        height: 130,
        borderRadius: 65,
    },
    textosFav: {
        flex: 35,
    },
})