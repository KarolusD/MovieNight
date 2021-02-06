import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { headerOptions } from '_components/Header'
import MyLikesScreen from '_screens/MyLikesScreen/MyLikesScreen'
import RecommendedScreen from '_screens/RecommendedScreen/RecommendedScreen'
import TopTabs from '_components/TopTabs/TopTabs'

const TabStack = createMaterialTopTabNavigator()

const FavouritesTabStack = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setParams({ ...route.params })
  }, [route.params])

  return (
    <TabStack.Navigator
      initialRouteName={route.params?.screen ? route.params.screen : 'My likes'}
      tabBar={(props) => <TopTabs {...props} />}
    >
      <TabStack.Screen name="My likes" component={MyLikesScreen} />
      <TabStack.Screen name="Recommended" component={RecommendedScreen} />
    </TabStack.Navigator>
  )
}

const Stack = createStackNavigator()

const FavouritesStack = ({ route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavouritesTab"
        options={() => headerOptions({ title: 'Favourites' })}
      >
        {(props) => <FavouritesTabStack {...props} route={route} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default FavouritesStack
