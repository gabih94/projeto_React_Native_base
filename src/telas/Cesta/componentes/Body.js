import React from "react";
import { StyleSheet , Image, View } from 'react-native';

import StyleText from "../../../components/StyleText";
import StyleButton from "../../../components/Button";


export default function Body ({ nome, logoFazenda, nomeFazenda, descricao, preco, botao } ) {
    return <>
        <StyleText style={estilos.nome}> { nome } </StyleText>

        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <StyleText style={estilos.nomeFazenda}> { nomeFazenda } </StyleText>
        </View>

        <StyleText style={estilos.descricao}> { descricao } </StyleText>

        <StyleText style={estilos.preco}> { preco } </StyleText>

        <StyleButton texto={ botao } style={estilos.botao} onPress={() => {}}/>
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
    botao: {
        marginTop: 16,
    },
})