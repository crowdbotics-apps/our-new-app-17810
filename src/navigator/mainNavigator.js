import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2366834Navigator from '../features/BlankScreen2366834/navigator';
import BlankScreen2466833Navigator from '../features/BlankScreen2466833/navigator';
import BlankScreen2566832Navigator from '../features/BlankScreen2566832/navigator';
import Settings61048Navigator from '../features/Settings61048/navigator';
import UserProfile61041Navigator from '../features/UserProfile61041/navigator';
import Settings61040Navigator from '../features/Settings61040/navigator';
import Settings61038Navigator from '../features/Settings61038/navigator';
import SignIn261036Navigator from '../features/SignIn261036/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen2366834: { screen: BlankScreen2366834Navigator },
BlankScreen2466833: { screen: BlankScreen2466833Navigator },
BlankScreen2566832: { screen: BlankScreen2566832Navigator },
Settings61048: { screen: Settings61048Navigator },
UserProfile61041: { screen: UserProfile61041Navigator },
Settings61040: { screen: Settings61040Navigator },
Settings61038: { screen: Settings61038Navigator },
SignIn261036: { screen: SignIn261036Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
