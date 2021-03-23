import React, {useEffect, useState} from 'react'
import {View, Text, Button} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../database/firebase'
const UsersList = (props) => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    firebase.db.collection('users').onSnapshot(querySnapshot => {

      const users = [];

      querySnapshot.docs.forEach(doc =>{
        const {name, email, phone} = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone
        })
      })
      setUsers(users)
    })
  },[])

  return (
      <ScrollView>
        <Button title="CreateUser" onPress={() => props.navigation.navigate('CreateUserScreen')} />

 {
   users.map(user => {
      return(
        <ListItem key = {user.id} bottomDivider onPress={() => {
          props.navigation.navigate('UserDetailScreen', {
            userId: user.id
          });
        }}>
          <ListItem.Chevron />
          <Avatar source={{uri: 'https://reactnativeelements.com/img/avatar/avatar--edit.jpg',
          }}
          rounded
          ></Avatar>
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

      )
   })
 }


      </ScrollView>
  )

}

export default UsersList