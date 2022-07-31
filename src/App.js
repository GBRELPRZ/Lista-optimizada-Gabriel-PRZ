import { AddItem, CustomInput, CustomModal } from './components/index';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'

export default function App() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const inputvalue = item.trim();


  const onChangeText = (text) => {
    setItem(text)
  }

  const addItem = () => {
      if (inputvalue) {
        setItemList([
          ...itemList,
          {
            id: itemList.length++,
            value: item
          } 
        ])
        setItem('');
      }
  }

  const onDeleteItem = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(!modalVisible);
  }


  const renderItem = ({ item }) => (
    <AddItem item={item} onHandlerModal={onHandlerModal} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput 
        item={item}
        onChangeText={onChangeText}
        placeholder='Enter item'
        onPressButton={addItem}
        inputValue={inputvalue}
        buttonText='Add'
      />
     <View style={styles.itemList}>
      <FlatList 
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style
      />
     </View>
     <CustomModal animationType='fade' modalVisible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContentContainer}>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalMessage}> ¿Estás seguro que deseas eliminar?</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button title='Eliminar' onPress={() => onDeleteItem(itemSelected.id)} color='#76051B' />
            <Button title='Cancelar' onPress={() => setModalVisible(!modalVisible)} color='#C29170' />
          </View>
        </View>
     </CustomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3F0',
  },
  itemList: {
    backgroundColor: '#F9F3F0',
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 18,
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  modalMessage: {
    color: '#0E0906',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalItem: {
    paddingHorizontal: 40,
    fontSize: 18,
    color: '#0E0906',
    fontWeight: 'normal',
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 25,
  },
  modal: {
    backgroundColor: '#F9F3F0',
    flex: 1,
    
  }
});