import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native"
import { useNavigation } from "@react-navigation/native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import Button from "../Components/Button";
import Logo from "../Components/Logo";

export default function Welcome(){

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>
            <Button title="Login" onPress={() => navigation.navigate("login")} />
            <Text style={[styles.body,{marginBottom: "3%", marginTop: "3%"}]}>Não possui uma conta?</Text>        
            <Button onPress={() => navigation.navigate("signup")} title="Cadastrar-se" color={colors.gray}  />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
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