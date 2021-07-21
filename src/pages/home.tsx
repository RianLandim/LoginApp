import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';

import { useAuth } from '../context/AuthContext';
//import api from '../services/api';

 function Home() {

    // const [member, setMember] = React.useState('');

    const {handleLogout, user} = useAuth();

    function Logout(){
        handleLogout();
    };
    
    // useEffect(() => {
    //     async function getData(){
    //         const response = await api.get(`/users/${user.id}`)
    //         const usuario = response.data;
    //         setMember(JSON.stringify(usuario));
    //     }
    //     getData();
    // }, [])

    return(
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{user?.email}</Text>         
            <TouchableOpacity onPress={Logout}>
                <Text>Logout</Text>
            </TouchableOpacity>        
        </SafeAreaView>
    )
}

export default Home;