import React, {useEffect, useState} from 'react'
import { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'react-native-axios'
import LivroItem from './livroItem';

export default props => {
    linhaTextos = (data) => {
        // console.log(data)
        linha = []
        data.forEach(element => {
            // console.log(element)
            linha.push(
                <LivroItem key={element["id"]}/>
            )
        });
        // console.log(linha)
        return linha
    }
    return(
        <View>
            {/* <Text>jooj {console.log(props.genero)}</Text> */}
            {/* <Text>{props.genero? props.genero[0]["id"]: console.log("ainda n recebi chefe")}</Text> */}
            {props.genero? linhaTextos(props.genero): console.log("ainda n recebi chefe")}
            {/* <LivroItem/> */}
        </View>
    )
}