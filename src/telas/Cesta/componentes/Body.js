import React from "react";
import { StyleSheet , Image, View } from 'react-native';

import StyleText from "../../../components/StyleText";

import logo from "../../../../assets/logo.png";

export default function Body () {
    return <>
        <StyleText style={estilos.nome}>
            Cesta de Verduras
        </StyleText>

        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <StyleText style={estilos.nomeFazenda}>
                Jenny Jack Farm
            </StyleText>
        </View>

        <StyleText style={estilos.descricao}>
            Uma Cesta com produtos selecionados 
            cuidadosamente da fazenda direto 
            para sua cozinha
        </StyleText>

        <StyleText style={estilos.preco}>
            R$ 40,00
        </StyleText>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
})