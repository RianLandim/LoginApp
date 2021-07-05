import React from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import api from "../services/api";
import delay from "../utils/delay";

import Button from "../Components/Button";
import Logo from "../Components/Logo";
import CustomModal from "../Components/customModal";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Login(){

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [visible, setVisible] = React.useState(true)
    const [showWarning, setShowWarning] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const navigation = useNavigation();

    function checkLenght(){
        if(username.length == 0 && password.length == 0) console.log("Digite algo nos campos");
        if(username.length > 0 && password.length >= 8)  handleSubmit();
    }

    async function handleSubmit(){
        const response = await api
        .post("/auth",{username, password})
        .catch(
            function(err){
                console.log(err);
                return;
            }
        );

        setShowWarning(true);
        setLoading(true);

    //@ts-ignore
        const responseData = response.data;
        console.log(responseData);
        
    //@ts-ignore
        const responseStatus = response.status;

        await delay(5000);

        if(responseStatus == 200 ){
            setLoading(false);
            setShowWarning(false);
            navigation.navigate("login");
        }    
    };
 
    return(
        <SafeAreaView style={styles.container}>
            {
                //@ts-ignore
                <CustomModal type="auth" visible={showWarning} loading={loading}  />
            }
            <Logo width="20%" height="20%"/>
            <Text style={styles.text}>Entre com sua conta</Text>
            <TextInput 
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={value => setUsername(value)} 
            />
            <View>
                <TextInput 
                style={[styles.input, {marginBottom: "10%"}]} 
                placeholder="Senha"
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
                        <Ionicons name="eye-off" size={26} color={colors.primary} />
                    }
                </TouchableOpacity>
            </View>
            <Button title="Entrar" onPress={checkLenght} />
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
    },
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00000099"
    },
    squareView:{
        width: "60%",
        height: "20%",
        backgroundColor: colors.white,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView:{
    }
})