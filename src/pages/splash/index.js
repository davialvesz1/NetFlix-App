import React,{useEffect} from 'react';
import { View,Text,TouchableOpacity, } from 'react-native';
import { Container,Logo,ImageBackGround} from './styles';
import Logo2 from '../../assets/Logo2.png'
import imageBackground from '../../assets/imagebackground.png';
const Splash = ({navigation}) => {

    const handlelogin = ()=>{
        navigation.navigate('Login')

    }
    useEffect(()=> {
        setTimeout(()=>{
        handlelogin();
        },2500);
    },[])
    return(
    <Container>
        <Logo source={Logo2}/>
        <ImageBackGround source={imageBackground}/>
        
        
    </Container>
    )
}

export default Splash