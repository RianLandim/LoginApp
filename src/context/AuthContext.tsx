import React, { createContext, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';


interface User{
    email: string,
    password: string,
    id: string,
}

interface LoginProps{
    email: string,
    password: string,
}

interface AuthContextData{
    signed: boolean,
    user: User | null,
    handleLogin(params: LoginProps): Promise<void>,
    handleLogout(): void,
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = React.useState<User | null>(null)
    const [signed, setSigned] = React.useState(false);

    useEffect(() => {
        async function loadStoragedData(){
            const storagedUser = await AsyncStorage.getItem('@user')

            if(storagedUser){
                setUser(JSON.parse(storagedUser));
                setSigned(true);
            }
        }

        loadStoragedData();
    }, []);

    async function handleLogin({email, password} : LoginProps) {
        const response = await api.post('/auth', {email, password});


        setUser(response.data.user)
        await AsyncStorage.setItem('@user', JSON.stringify(response.data.user));
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
        setSigned(true);
    };

    async function handleLogout() {
        setSigned(false);
        await AsyncStorage.removeItem('@user');
        api.defaults.headers.Authorization = undefined;
    };
    
    return(
        <AuthContext.Provider value={{signed ,user, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const { signed,handleLogin,handleLogout,user } = useContext(AuthContext);
    return {signed, handleLogin, handleLogout, user};
}
