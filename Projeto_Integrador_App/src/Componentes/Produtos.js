import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import produto1 from "./assets/Benegrip30.99.jpeg";
// import produto1 from "../source/Benegrip30.99.jpeg"
import produto2 from "./assets/SoroFisiologico.jpg";
// import produto2 from "../source/SoroFisiologico.jpg"
import produto3 from "./assets/Novalgina3.png";
// import produto3 from "../source/Novalgina3.png";
import produto4 from "./assets/Rinosoro.jpg";
// import produto4 from "../source/Rinosoro.jpg";
import produto6 from "./assets/Dorflex2.png";
// import produto4 from "../source/Dorflex2.png";
import produto5 from "./assets/Imagem4.jpg";
// import produto4 from "../source/Imagem4.jpg";

const largura = Dimensions.get('screen').width;

const Produtos = () => {
    return (
            <View style={estilo.cor}>
                <View style={estilo.borda1}>
                    <View style={estilo.borda}>
                        <Image source={produto1} style={estilo.imagem} />
                        <Text style={estilo.titulo}>Benegrip</Text>
                        <Text>Caixa Benegrip com 20 comprimidos</Text>
                        <Text style={estilo.verde}>R$ R$ 30,99</Text>
                    </View>
                </View>
                <View style={estilo.borda1}>
                    <View style={estilo.borda}>
                        <Image source={produto2} style={estilo.imagem} />
                        <Text style={estilo.titulo}>Soro Fisiologico</Text>
                        <Text>Soro Fisiologico Frasco de 500 ml</Text>
                        <Text style={estilo.verde}>R$ 6,99</Text>
                    </View>
                </View>
                <View style={estilo.borda1}>
                    <View style={estilo.borda}>
                        <Image source={produto3} style={estilo.imagem} />
                        <Text style={estilo.titulo}>Novalgina</Text>
                        <Text>Novalgina Infantil 500mg Solução Oral 100ml</Text>
                        <Text style={estilo.verde}>R$ 30,85</Text>
                    </View>
                </View>
                <View style={estilo.borda1}>
                    <View style={estilo.borda}>
                        <Image source={produto4} style={estilo.imagem} />
                        <Text style={estilo.titulo}>Rinosoro</Text>
                        <Text>Spray Nasal Jato Contínuo 9,0mg/ml C/ 100 Ml</Text>
                        <Text style={estilo.verde}>R$ 41,17</Text>
                    </View>
                </View>
                <View style={estilo.borda1}>
                    <View style={estilo.borda}>
                        <Image source={produto5} style={estilo.imagem} />
                        <Text style={estilo.titulo}>Lufty</Text>
                        <Text>Lufty 75mg/ml Gotas com 15ml</Text>
                        <Text style={estilo.verde}>R$ 4,99</Text>
                    </View>
                </View>
                <View style={estilo.borda1}>
                    <View style={estilo.borda}>
                        <Image source={produto6} style={estilo.imagem} />
                        <Text style={estilo.titulo}>Dorflex</Text>
                        <Text>Analgésico Dorflex 36 Comprimidos</Text>
                        <Text style={estilo.verde}>R$ 17,89</Text>
                    </View>
                </View>
            </View>
    );
}

const estilo = StyleSheet.create({
    titulo: {
        color: "black",
        textAlign: "left",
        fontSize: 20,
    },
    corpo: {
        color: "black",
        textAlign: "justify",
        margin: 10
    },
    verde: {
        color: "green",
        fontWeight: "800",
        fontSize: 20
    },
    imagem:{
            width:"100%",
            height: 1000 / 1000 * largura,
    },
    borda:{
        borderColor: "Black",
        borderStyle: "solid",
        borderRadius: 6,
        padding: 20,
        borderWidth: 3
    },
    borda1:{
        borderColor: "White",
        borderStyle: "solid",
        borderRadius: 6,
        padding: 20,
    },
});

export default Produtos;
