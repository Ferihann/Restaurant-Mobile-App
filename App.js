import {
    createStackNavigator,
} from 'react-navigation';
import LoginForm from './src/LoginForm';
import ServerSettings from './src/ServerSettings';
import Masa from './src/Masa';
import Masa_ictasarım from './src/Masa_ictasarım';
import Food_adding_page from './src/Food_adding_page';
import info from './src/info';

const App = createStackNavigator({
    Home: { screen: LoginForm },
    Profile: { screen: ServerSettings },
    Main: {screen: Masa},
    Masa_In: {screen:Masa_ictasarım},
    Food_Add:{screen:Food_adding_page},
    Info: {screen:info},
    headerMode: 'screen'
});

export default App;
