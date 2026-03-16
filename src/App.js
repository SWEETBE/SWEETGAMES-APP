import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Navigation from './navigation/Navigation';
import { auth } from '../firebaseConfig';

const AppComponent = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return <Navigation />;
};

export default AppComponent;