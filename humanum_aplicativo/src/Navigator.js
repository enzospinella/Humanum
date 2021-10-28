import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// import TaskList from './screens/TaskList'
// import Auth from './screens/Auth'
// import AuthOrApp from './screens/AuthOrApp'
// import Menu from './screens/Menu'
import Inicial from './screens/Inicial'
import Autenticacao from './screens/Autenticacao'
import commonStyles from './commonStyles'
import Texto from './screens/Texto';
import TelaDePerfil from './screens/TelaDePerfil'
import Busca from './screens/Busca'
import PerfilOutros from './screens/PerfilOutros';
import Chat from './screens/Chat'
import Mensagens from './screens/Mensagens';
import AutenOuApp from './screens/AutenOuApp'
import Icon from 'react-native-vector-icons/FontAwesome'
import Header from './Header';

const menuConfig = {
    activeTintColor: '#A90A0A',
    labelStyle: {
        fontFamily: commonStyles.fontFamily2,
        fontWeight: 'normal',
        fontSize: 24
    }
}

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const TabNav = props => {
    console.log(props.route.params[0])
    // const {id, nome, desc, datacriacao, pontos, banner, foto} = props.route.params[0]
    const {id, nome, descricao, datacriacao, pontos, banner, foto} = props.route.params.dadosusuario? props.route.params.dadosusuario: props.route.params[0]
    return (
        <Tab.Navigator initialRouteName="Inicial"
            //tabContentOptions={menuConfig}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {     
                    let iconName 
                    if (route.name === 'Inicial') {
                        iconName = 'home'
                    } 
                    else if (route.name === 'Busca') {
                        iconName = 'search'
                    }
                    else if (route.name === 'Mensagens') {
                        iconName = 'comments'
                    }
                    else if (route.name === 'Perfil') {
                        iconName = 'user'
                    }
      
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#a90a0a',
                tabBarInactiveTintColor: 'black',
                tabBarHideOnKeyboard: true,
                header: (props) => {
                    return <Header navigation={props.navigation}/>
                }
            })}
            /*drawerContent={(props) => {
                return <Menu {...props} email={email} name={name}/>
            }}*/>
            <Tab.Screen name="Inicial" component={Inicial} />
            <Tab.Screen name="Busca" component={Busca} options={{headerShown: false}}/>
            <Tab.Screen name="Mensagens" component={Mensagens} options={{tabBarBadge: 3}}/>
            {/* <Drawer.Screen name="Texto" component={Texto} /> */}
            <Tab.Screen name="Perfil">
                {props => <TelaDePerfil {...props} nome={nome} desc={descricao}
                           data={datacriacao} pontos={pontos}
                           banner={banner} foto={foto} id={id}/>}
            </Tab.Screen>
            
            {/*<Drawer.Screen name="Amanhã">
                {props => <TaskList title='Amanhã' daysAhead={1} {...props}/>}
            </Drawer.Screen>
            <Drawer.Screen name="Esta Semana">
                {props => <TaskList title='Semana' daysAhead={7} {...props}/>}
            </Drawer.Screen>
            <Drawer.Screen name="Este Mês">
                {props => <TaskList title='Mês' daysAhead={30} {...props}/>}
            </Drawer.Screen>*/}
        </Tab.Navigator>
    )
}

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={AutenOuApp} />
            <Stack.Screen name="Autenticacao" component={Autenticacao} />
            <Stack.Screen name="Home" component={TabNav} />
            <Stack.Screen name="Texto" component={Texto} />
            <Stack.Screen name="PerfilOutros" component={PerfilOutros} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default Navigator;