import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/saga/userSlice';
import {useGetUsersQuery, userApi} from '../redux/slice/RtkSlice';

const OnlineUsers = () => {
  //const users = useSelector(state => state.sagaUsers.users);
  const dispatch = useDispatch();
  const {data, error, isLoading} = useGetUsersQuery();
  console.log('isLoading', isLoading);
  console.log('error', error);
  console.log('data', data);
  // useEffect(() => {
  //   dispatch(userApi());
  // }, []);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.userItem}>
              <View style={styles.detailView}>
                <Text>{`name:${item.name}`}</Text>
                <Text>{`email:${item.email}`}</Text>
                <Text>{`mobile:${item.phone}`}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default OnlineUsers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userItem: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailView: {
    width: '70%',
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
