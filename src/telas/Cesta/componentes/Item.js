import React from "react";

import StyleText from "../../../components/StyleText";
import { View, Image, StyleSheet, FlatList} from "react-native";

export default function Item ({ item: { nome, imagem } }) {

    return <View style={estilos.item}>
        <Image source={ imagem } style={estilos.imagem}/>
        <StyleText style={estilos.nome}>{ nome } </StyleText>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem:{
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})