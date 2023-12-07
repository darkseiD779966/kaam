import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'English',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hindi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Telugu',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'English',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hindi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Telugu',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'English',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hindi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Telugu',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'English',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hindi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Telugu',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'English',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Hindi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Telugu',
  },
];

const chunkArray = (arr, chunkSize) => {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
};

const Item = ({ title, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect()}
      style={[
        styles.item,
        selected && styles.selectedItem,
      ]}
    >
      <View style={styles.itemContainer}>
        <View
          style={[
            styles.circle,
            selected && styles.selectedCircle,
          ]}
        >
          {selected && (
            <View style={styles.tickMark}>
              <Icon name="check-circle" size={20} color="#E06C42" style={styles.checkIcon} />
            </View>
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const LanguageChoosing = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    return (
      <Item
        title={item.title}
        selected={isSelected}
        onSelect={() => setSelectedId(item.id)}
      />
    );
  };

  const rowsOfItems = chunkArray(DATA, 3);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {rowsOfItems.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item) => (
              <View key={item.id} style={styles.column}>
                <Item
                  title={item.title}
                  selected={item.id === selectedId}
                  onSelect={() => setSelectedId(item.id)}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.buttonNext}>
        <TouchableOpacity onPress={() => navigation.navigate('Screen1')} style={styles.buttonPress}>
          <Text style={styles.buttonText1}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
    display:'flex',
    // alignItems:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 15,
    marginLeft: 10,
    textAlign: 'center',
  },
  circle: {
    backgroundColor: '#F5F5F5',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#737373',
    borderWidth: 1,
    position: 'relative',
  },
  selectedCircle: {
    backgroundColor: '#FCEFEB',
    borderColor: '#E06C42',
  },
  tickMark: {
    position: 'absolute',
    top: -4,
    right: -5,
    borderRadius: 50,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  buttonNext: {
    width: 200,
    height: 50,
    backgroundColor: '#E06C42',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius:5
  },
  buttonText1: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    // marginTop: 2,
  },
});

export default LanguageChoosing;
