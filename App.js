import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>To DO App</Text>
      <View style={styles.searchContainer}>
        <Ionicons name='search' size={24} color='gray'/>
        <TextInput
        placeholder='Search your task'
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop:'10%',
    paddingTop:'10%'
  },
  searchContainer:{
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems:"center",
    borderWidth: 1,
    borderRadius: 10,
    width:'90%',
    padding:10,
    marginVertical:10
    
  }
});
