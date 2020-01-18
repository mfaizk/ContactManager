
import HomeScreen from './screens/HomeScreen'
import AddNewContact from './screens/AddNewContact'
import EditContactScreen from './screens/EditContactScreen'
import ViewContactScreen from './screens/ViewContactScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const MainNavigator = createStackNavigator(
  {
   Home:{screen: HomeScreen},
   Add:{screen: AddNewContact},
   View:{screen: ViewContactScreen},
   Edit:{screen: EditContactScreen},

  },{
    
    defaultNavigationOptions:{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'#b83227'
      },
      headerTitleStyle:{
        color:'#fff'
      }
    }
  }


)

const App =createAppContainer(MainNavigator)
export default App

