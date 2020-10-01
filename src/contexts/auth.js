import React, {useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import { AsyncStorage } from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function loadStorage(){
           

            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false); //retira o carregando...
            }
                setLoading(false);

            

        }
        loadStorage();
    }, []);

    //Logar o usuário
    async function signIn(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data={
                    uid: uid,
                    name: snapshot.val().name,
                    email: value.user.email,
                };

                setUser(data);
                storageUser(data);

            })
        })
        .catch((error)=>{
            alert(error.code);
        });
    }
    //Cadastrar usuário
    async function signUp(email, password, name){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                name: name,
                email: email,
                password: password,
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                    password: value.user.password,
                };
                setUser(data);
                storageUser(data);
            })
        })
        .catch((error)=>{
            alert(error.code);
        });
    }

    //salva o usuário logado no async, dessa forma ele será deslogado do app somente de fazer o logOut
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;