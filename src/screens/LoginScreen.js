import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = () => {
        if (isLogin) {
            // Login
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // handle successful login
            })
            .catch(err => {
                setError(err.message);
            });
        } else {
            // Register
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                // handle successful registration
            })
            .catch(err => {
                setError(err.message);
            });
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {error ? <Text>{error}</Text> : null}
            <Button title={isLogin ? "Login" : "Register"} onPress={handleSubmit} />
            <Button title={isLogin ? "Switch to Register" : "Switch to Login"} onPress={() => setIsLogin(!isLogin)} />
        </View>
    );
};

export default LoginScreen;