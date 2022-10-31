
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { useDispatch } from 'react-redux';

import { DELETE_ITEM } from '../data/Reducer';

function ListItem(props) {

  const { item, navigation } = props;
  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch({
      type: DELETE_ITEM,
      payload: {
        key: item.key
      }
    })

  }

  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity 
        style={styles.li1}
        onPress={()=>{
          navigation.navigate('Details', { 
            item: item 
          });
        }}  
      >
        <Text style={styles.listItemText}>{item.text}</Text>        
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.li3}
        onPress={()=>{
          deleteItem(item);
        }}  
      >
        <Icon 
          name="trash"
          type="font-awesome"
          color="black"
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    //padding: '1%',
  },
  li1: {
    flex: 0.8, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '3%'
  },
  li2: {
    flex: 0.2,
  },
  listItemText: {
    fontSize: 18
  },
});

export default ListItem;