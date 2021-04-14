import React from 'react';
import {FlatList} from 'react-native';
import Pets from './Components/Pets';

const App = () => {
  const animals = [
    {name:"Asif", type:"puppy", how_old:"2years"},
    {name:"Asif", type:"puppy"},
    {name:"Asif", type:"puppy"},
    {name:"Asif", type:"puppy"},
  ]
  return (
    <FlatList
      data = {animals}
      renderItem = {({item}) => {
      return<Text>{<Pets name={item.name} diff={item.type}/>}</Text>
    }}
    keyExtractor = {(item)=> item.type}
    />
  );
}



export default App;

