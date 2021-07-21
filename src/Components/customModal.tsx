import React from "react";
import {
    ActivityIndicator, Modal, StyleSheet, Text, View
} from "react-native";

import colors from "../styles/colors";
import fonts from "../styles/fonts";


interface customModalProps{
    visible: boolean,
    loading: boolean,
    width?: string,
    height?: string,
    type:  'auth',
}

export default function CustomModal({visible, loading, width, height, type} : customModalProps){      
    if(type === "auth"){
        return <>{
            <Modal
            transparent
            animationType="fade"
            hardwareAccelerated
            visible={visible}
            >
                <View style={styles.centerView}>
                    <View style={[styles.squareView,{width: width || "60%",height: height || "20%",}]}>
                        <View style={styles.contentView} > 
                            <ActivityIndicator size="large" animating={loading} color={colors.secondary} /> 
                            <Text style={[styles.text, {marginTop: 15, fontSize: 18}]}>Autenticando...</Text>                                                                     
                        </View>
                    </View>
                </View>
            </Modal>
        }</>     
    }
}


const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00000099"
    },
    squareView:{    
        backgroundColor: colors.white,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentView:{
    },
    text:{
        color: colors.secondary,
        fontFamily: fonts.header,
        fontSize: 24,
    },
})