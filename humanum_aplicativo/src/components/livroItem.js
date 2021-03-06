import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'react-native-axios'
import commonStyles from '../commonStyles'

export default props => {
    return (
        <TouchableOpacity 
            onPress={() => {
                const texto = props.livro
                props.navigation.push('Texto', {texto: texto})
            }}>
            <View style={styles.container}>
                {props.livro["capa"] ?
                    (<Image style={styles.livro} source={{ uri: props.livro["capa"] }} />) :
                    (<Text style={styles.texto}>{props.livro["nome"]}</Text>)}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#FEF2F2",
        height: 180,
        width: 110,
        borderRadius: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    livro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    texto: {
        fontFamily: 'commonStyles.fontFamily2',
        marginLeft: 7,
        fontSize: 15.5
    }
})