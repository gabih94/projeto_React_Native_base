import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './componentes/Header';
import Body from './componentes/Body';
import Item from "./componentes/Item";
import StyleText from "../../components/StyleText";


export default function Cesta({ topo, body, itens}) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Header {...topo} />
                    <View style={estilos.cesta}>
                        <Body {...body} />
                        <StyleText style={estilos.titulo}>{itens.titulo}</StyleText>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 5,
        fontSize: 20,
        lineHeight: 32,
    },
})