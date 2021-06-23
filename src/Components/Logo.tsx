import React from "react";
import { 
    Image,
    Text,
    StyleSheet,
} from "react-native";

import tooth from "../assets/dentalcare.png"


import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface LogoProps{
    width?: string;
    height?: string;
}

 export default function Logo({width, height } : LogoProps){
    return(
        <>
            <Image source={tooth} style={[styles.image,{width: width || "30%", height: height || "30%",}]} resizeMode="center" />
            <Text style={styles.header}>Encontre um dentista</Text>
            <Text style={[styles.body,{marginBottom: "20%"}]}>Centenas  de profisionais em um app.</Text>
        </>
    )
 }

 const styles = StyleSheet.create({
    image:{
        left: "4%",
    },
    header:{
        fontFamily: fonts.header,
        color: colors.darkGray,
        fontSize: 26,
        fontWeight: "bold"
    },
    body:{
        fontFamily: fonts.body,
        color: colors.darkGray,
        fontSize: 14,
        fontWeight: "400"
    },
 })