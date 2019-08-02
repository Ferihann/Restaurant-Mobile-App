import React from 'react';
import {Scene,Router } from 'react-native-router-flux';
//import  LoginForm  from './LoginForm';
import Masa from './Masa';
//import Masa_ictasarım from '/Masa_ictasarım';

const RouterComponent = () => {
   return(
       <Router>
        <Scene key='girisekranı_'>
            <Scene key='tableScreen' component={Masa} title='' />
        </Scene>
      </Router>
   );
};
export default RouterComponent ; 