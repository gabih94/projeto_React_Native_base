import { Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import React from "react";
import { StyleSheet, Text} from "react-native";

export default function StyleText({ children, style }) {
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilos]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: Montserrat_400Regular,
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: Montserrat_700Bold,
        fontWeight: "normal",
    }
})
