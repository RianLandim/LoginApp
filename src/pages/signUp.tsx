import React from "react";
import {
    SafeAreaView,
    TextInput,
    Text,
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Button from "../Components/Button";
import Logo from "../Components/Logo";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function SignUp(){

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [visible, setVisible] = React.useState(true);

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>
            <Text style={styles.text}>Crie uma conta</Text>
            <TextInput 
            placeholder="Nome" 
            style={styles.input} 
            value={name}
            onChangeText={value => setName(value)}
            />
            <TextInput 
            placeholder="Endereço de E-mail" 
            style={styles.input} 
            value={email}
            onChangeText={value => setEmail(value)} 
            />
            <View style={styles.passC}>
                <TextInput 
                placeholder="Senha" 
                style={[styles.input, {marginBottom: "10%"}]} 
                value={password}
                onChangeText={value => setPassword(value)}
                secureTextEntry={visible} 
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
            <Button title="Cadastrar"/> 
            <View style={styles.accountC}>
                <Text style={styles.accountT1}>Já possui uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("login") }>
                    <Text style={[styles.accountT1,{fontWeight: 'bold', textDecorationLine:'underline'}]} >Entrar.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

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
    accountC:{
        flexDirection: 'row',
        padding: 5,
    },
    accountT1:{
        fontFamily: fonts.body,
        fontSize: 13,
        color: colors.darkGray,
    },
    passC:{
        flexDirection: 'row',
    },
    icon:{
        position: "absolute",
        left: "75%",
        top: "18%",
    }
});