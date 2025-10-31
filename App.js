import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [addQuery, setAddQuery] = useState('')

  const [data, setData] = useState([])

  // console.log(searchQuery, addQuery);
  console.log('data in array', data);
  

  const handleAdd = () => {

    if(addQuery.trim() === ''){
      Alert.alert('write task to add')
      return
    }
  
    const newTask ={
      id: Date.now(),
      task: addQuery
    }

    setData([...data, newTask])
    setAddQuery('')
  }

  const handleDelete = (id) =>{

    const updatedData = data.filter(item => item.id !== id)

    setData(updatedData)

  }


  return (
    <View style={styles.container}>



      {/* searchContainer */}
      <Text style={styles.titleText}>To DO App</Text>
      <View style={styles.searchContainer}>
        <Ionicons name='search' size={28} color='gray' />
        <TextInput
          placeholder='Search your task'
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      {/* flatlist */}

      <View style={styles.mainContainer}>

        <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <View style={styles.listContainer}>
            <Text style={styles.listTitle}>{item.task}</Text>
            <TouchableOpacity onPress={()=>handleDelete(item.id)}>
              <Ionicons name='trash' size={24} color='red'/>
            </TouchableOpacity>
          </View>
        )}
        />



      </View>




      {/* addContainer */}
      <View style={styles.addContainer}>
        <TextInput
          placeholder='Add your task'
          style={styles.addInput}
          value={addQuery}
          onChangeText={setAddQuery}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Ionicons name='add-circle' size={60} color={'black'} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop:'10%',
    paddingTop: '10%',
    marginHorizontal: 10
  },
  searchContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    // width:'90%',
    padding: 10,
    marginVertical: 10,
    // marginHorizontal:10
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 6

  },
  searchInput: {
    fontSize: 16
  },
  addInput: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 18,
    fontSize: 16,
    width: '85%'
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    // marginBottom:'13%'
  },
  mainContainer: {
    flex: 1
  },
  listContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    padding:10,
    marginVertical:10,
    borderRadius:10
  },
  listTitle:{
    fontSize:20,
    fontWeight:'bold'
  }
});
