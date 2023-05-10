import React from "react";
import { StyleSheet, View } from 'react-native';

import Header from './componentes/Header';
import Body from './componentes/Body';


export default function Cesta() {
    return <>
        <Header />

        <View style={estilos.cesta}>
            <Body />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})