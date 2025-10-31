import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>



      {/* searchContainer */}
      <Text style={styles.titleText}>To DO App</Text>
      <View style={styles.searchContainer}>
        <Ionicons name='search' size={28} color='gray' />
        <TextInput
          placeholder='Search your task'
          style={styles.searchInput}
        />
      </View>
      {/* flatlist */}

      <View style={styles.mainContainer}>

      </View>




      {/* addContainer */}
      <View style={styles.addContainer}>
        <TextInput
          placeholder='Add your task'
          style={styles.addInput}
        />
        <TouchableOpacity>
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
    padding: 12,
    marginVertical: 10,
    // marginHorizontal:10
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  searchInput: {
    fontSize: 16
  },
  addInput: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    fontSize: 16,
    width: '85%'
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom:'13%'
  },
  mainContainer: {
    flex: 1
  }
});
