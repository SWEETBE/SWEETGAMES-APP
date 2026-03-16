import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const UploadGameScreen = () => {
  const [apkFile, setApkFile] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleFilePick = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/vnd.android.package-archive',
    });

    if (result.type === 'success') {
      setApkFile(result);
    } else {
      Alert.alert('File selection was canceled');
    }
  };

  const handlePayment = () => {
    // M-Pesa payment integration will go here
    Alert.alert('Payment process initiated');
  };

  const handleSubmit = () => {
    // Validate input and submit the form
    if (!apkFile) {
      Alert.alert('Please select an APK file');
      return;
    }
    handlePayment();
  };

  return (
    <View>
      <Text>Upload Your APK File</Text>
      <Button title="Pick APK File" onPress={handleFilePick} />
      {apkFile && <Text>Selected File: {apkFile.name}</Text>}
      <TextInput
        value={paymentInfo}
        onChangeText={setPaymentInfo}
        placeholder="Enter M-Pesa payment info"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default UploadGameScreen;