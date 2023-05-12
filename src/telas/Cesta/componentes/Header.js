import React from "react";
import { StyleSheet , Image, Dimensions} from 'react-native';

import StyleText from "../../../components/StyleText";
import topo from "../../../../assets/topo.png";


const width = Dimensions.get('screen').width;

export default function Header({ titulo }){
    return<>
        <Image source={topo} style={estilos.topo} />
        <StyleText style={estilos.titulo}> { titulo } </StyleText>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578/768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
})