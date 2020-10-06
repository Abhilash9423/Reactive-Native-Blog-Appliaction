import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Index from './src/screens/Index'
import React from 'react'
import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'


const navigator = createStackNavigator({
    Index:Index,
    ShowScreen:ShowScreen,
    Create:CreateScreen,
    EditScreen:EditScreen
},  
{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:"Blog"
  }
})



const App = createAppContainer(navigator);


export default  () => {
    return <Provider>
    <App/>
    </Provider>
}