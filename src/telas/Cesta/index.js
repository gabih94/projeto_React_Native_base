import React from "react";
import { StyleSheet, View } from 'react-native';

import Header from './componentes/Header';
import Body from './componentes/Body';


export default function Cesta({ topo, body}) {
    return <>
        <Header {...topo} />

        <View style={estilos.cesta}>
            <Body {...body} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})