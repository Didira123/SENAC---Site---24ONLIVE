import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

import logo from "./assets/Footer/logo.png";
import volta from "./assets/Footer/volta.png";
import pagamento from "./assets/Footer/pagamento.png";
import cliente from "./assets/Footer/cliente.png";
import social from "./assets/Footer/social.png";



export default function Final (){
    return(
        <View>
            <View style = {estilo.Geral}>
                <View > 
                    <Image source = {logo} style = {estilo.logo} />
                </View>
                <View >
                    <Text style = {estilo.tex1}>Formas de pagamento</Text>
                    <Text style = {estilo.tex2}>Dinheiro,Cartão e Pix</Text>
                    <Image source = {pagamento} style = {estilo.pagamento} />
                </View>
                <View>
                    <View style = {estilo.Geral2}>   
                        <Text style = {estilo.tex3}> Atendimento	ao cliente </Text>
                        <Image source = {cliente} style = {estilo.cliente}/>
                    </View>
                    <View>
                        <Text style = {estilo.tex4}> Tel: 31 2526-3214 </Text>
                        <Text style = {estilo.tex5}> Segunda à Domingo </Text>
                        <Text style = {estilo.tex6}> Farma On Live@gmail.com </Text>
                    </View>
                    </View>
                <View>
                    <Text style = {estilo.tex7}> Redes Sociais </Text>
                    <Image source = {social} style = {estilo.social} />
                </View>        
            </View>
                <View style={{position:'absolute',bottom:0,alignSelf:'flex-start'}}>
                    <Image source = {volta} style = {estilo.volta} />
                </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    Geral:{
        flexDirection: "row",
    },
    Geral2:{
        flexDirection: "row",
    },
    logo:{
        height: 45,
        width:58,
        marginVertical: 10,
        marginLeft: 5,
    },
    tex1:{
        fontSize: 10,
        color: "rgb(252, 12, 12);",
        fontWeight: "bold",
        marginVertical: 5,
        marginLeft: 5,
        marginBottom: 0,
    },
    tex2:{
        fontSize: 9,
        color: "rgb(160, 34, 34);",
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 2,
    },
    pagamento:{
        height:35,
        width:85,
        marginLeft: 10,
    },
    tex3:{
        fontSize: 10,
        color: "rgb(252, 12, 12);",
        fontWeight: "bold",
        marginVertical: 5,
        marginLeft: 5,
    },
    cliente:{
        height: 10,
        width: 12,
        marginVertical: 8,
    },
    tex4:{
        fontSize: 9,
        color: "rgb(160, 34, 34);",
        fontWeight: "bold",
        marginLeft: 5,
        
    },
    tex5:{
        fontSize: 9,
        color: "rgb(160, 34, 34);",
        fontWeight: "bold",
        marginLeft: 5,
    },
    tex6:{
        fontSize: 9,
        color: "rgb(160, 34, 34);",
        fontWeight: "bold",
        marginLeft: 5,
        textDecorationLine:"underline" 
    },
    tex7:{
        fontSize: 10,
        color: "rgb(252, 12, 12);",
        fontWeight: "bold",
        marginLeft: 10,
        marginVertical: 5,
    },
    social:{
        height: 20,
        width: 60,
        marginLeft: 10,
    },
    volta:{  
        height: 40,
        width: 40,
    }
});