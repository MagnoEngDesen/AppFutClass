import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import LigasList from "./view/LigasList";
import TeamList from "./view/TeamList";
import TestApi from "./view/TestApi";

const Stack = createNativeStackNavigator();
export default props =>{
  
  
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LigasList"
        screenOptions={screenOptions}
      >
        <Stack.Screen
        name="LigasList"
        component={LigasList}
        options={()=>{
          return{
            title: 'Lista de Ligas'
          }
        }}
        />
        <Stack.Screen
        name="Liga"
        component={TeamList}
        options={()=>{
          return{
            title: 'Liga - Campeonato'
          }
        }}
        />
        <Stack.Screen
        name="TeamList"
        component={TestApi}
        options={()=>{
          return{
            title: 'Lista de Times - Por Classificação'
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const screenOptions = {
  headerStyle: {
    backgroundColor: '#332a2b',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
