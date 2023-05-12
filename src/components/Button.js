import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";

import StyleText from "./StyleText";

export default function StyleButton ({ texto,onPress, style }) {
    return <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
        <StyleText style={estilos.textoBotao}>{ texto }</StyleText>
    </TouchableOpacity>
}
 const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})