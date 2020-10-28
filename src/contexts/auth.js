import React, {useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [idUpdate, setIdUpdate] = useState(null);
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
       // await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
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
                    setIdUpdate(data.uid);

                })
            })
            .catch((error)=>{
                alert(error.code);
            });
       // });
        /*
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        await firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });*/
    }
    //Cadastrar usuário
    async function signUp(email, password, name, telefone, endereco){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                name: name,
                email: email,
                password: password,
                telefone: telefone,
                endereco: endereco,
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    name: name,
                    email: value.user.email,
                    password: value.user.password,
                    telefone: value.user.telefone,
                    endereco: value.user.endereco,
                };
                setUser(data);
                storageUser(data);
            })
        })
        .catch((error)=>{
            alert(error.code);
        });
    }

    async function update(email, password, name, telefone, endereco){


                const teste=user.uid;
                await firebase.database().ref('users').child(teste).set({
                    name: name,
                    email: email,
                    password: password,
                    telefone: telefone,
                    endereco: endereco,
                })
                .then(()=>{
                    let data = {
                        uid: uid,
                        name: name,
                        email: value.user.email,
                        password: value.user.password,
                        telefone: value.user.telefone,
                        endereco: value.user.endereco,
                    };
                    setUser(data);
                    storageUser(data);
                })
          
        
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
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loading, update }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;