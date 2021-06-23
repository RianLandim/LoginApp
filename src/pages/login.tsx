import React from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Button from "../Components/Button";
import Logo from "../Components/Logo";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Login(){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [visible, setVisible] = React.useState(true)

    return(
        <SafeAreaView style={styles.container}>
            <Logo width="20%" height="20%"/>
            <Text style={styles.text}>Entre com sua conta</Text>
            <TextInput 
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)} 
            />
            <View>
                <TextInput 
                style={[styles.input, {marginBottom: "10%"}]} 
                placeholder="Senha"
                value={password}
                onChangeText={value => setPassword(value)} 
                />
                <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.icon}>
                    {
                        visible 
                        ? 
                        <Ionicons name="eye" size={26} color={colors.primary} /> 
                        : 
                        <Ionicons name="eye-off" size={26} color={colors.primary}  />
                    }
                </TouchableOpacity>
            </View>
            <Button title="Entrar" />
            <TouchableOpacity>
                <Text style={styles.accountT1}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        borderBottomWidth: 2,
        borderBottomColor: colors.secondary,
        width: Dimensions.get("screen").width - 65,
        padding: 4,
        marginTop: "3%"
    },
    text:{
        color: colors.secondary,
        fontFamily: fonts.header,
        fontSize: 24,
    },
    accountT1:{
        fontFamily: fonts.body,
        fontSize: 13,
        color: colors.darkGray,
        fontWeight: 'bold', 
        textDecorationLine:'underline'
    },
    icon:{
        position: "absolute",
        left: "75%",
        top: "18%",
    }
})