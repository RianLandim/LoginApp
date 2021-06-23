import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface buttonProps extends TouchableOpacityProps{
    title: string;
    color?: string;
}

export default function Button({title, color,...rest} : buttonProps){

   return( 
        <TouchableOpacity style={[styles.container, {backgroundColor: color || colors.primary }]} {...rest} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get("screen").width - 156,
        paddingVertical: 10,
        borderRadius: 25,
    },
    text:{
        textAlign: 'center',
        fontFamily: fonts.header,
        fontSize: 20,
        color: colors.white
    },
})