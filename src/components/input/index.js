import { Button, TextInput, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CustomInput = ({item, onChangeText, placeholder, onPressButton, inputValue, buttonText}) => {
    return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholderTextColor='#DBB8A9'
        placeholder={placeholder}
        value={item}
        onChangeText={onChangeText}
      />
      <Button title={buttonText} color='#63422C' onPress={onPressButton} disabled={inputValue === ''}/>
     </View>
    )
}

export default CustomInput;