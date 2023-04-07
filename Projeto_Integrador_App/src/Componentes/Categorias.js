import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import Alimentos from "./assets/Categorias/Alimentos.png";
import Bebês from "./assets/Categorias/Bebês.png";
import Higiene from "./assets/Categorias/Higiene.png";
import Medicamentos from "./assets/Categorias/Medicamentos.png";


export default function Categorias(){
    return(
        <View>
            <Text style = {estilo.categorias}> Categorias </Text>
                <View style = {estilo.Geral}>
                    <Image source = {Medicamentos} style = {estilo.Medicamentos}/>
                    <Image source = {Bebês} style = {estilo.Bebês}/>
                    <Image source = {Higiene} style = {estilo.Higiene}/>
                    <Image source = {Alimentos} style = {estilo.Alimentos}/>
                </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    Geral:{
        flexDirection: "row",
    },
    categorias:{
        fontSize: 20,
        fontWeight:"bold",
        color: "red",
    },
    Alimentos:{
        marginVertical: 10,
        marginLeft: 3,
        height: 85,
        width: 90,
        borderColor: 5,
    },
    Bebês:{
        marginVertical: 10,
        marginLeft: 8,
        height: 85,
        width: 90,
        
    },
    Higiene:{
        marginVertical: 10,
        marginLeft: 8,
        height: 80,
        width: 95,
        
    },
    Medicamentos:{
        marginVertical: 10,
        marginLeft: 5,
        height: 80,
        width: 90,
        
    }
});