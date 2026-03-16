import React from 'react';
import { View, Button, Alert } from 'react-native';
import { Linking } from 'react-native';

const DownloadScreen = () => {
    const handleDownload = () => {
        const url = 'https://example.com/path/to/your/apk'; // Replace with your APK download link
        Linking.openURL(url)
            .catch(err => Alert.alert('Error', 'Could not open the URL'));  
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='Download APK' onPress={handleDownload} />
        </View>
    );
};

export default DownloadScreen;