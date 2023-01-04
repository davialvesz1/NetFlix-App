import React from 'react';
import { View,Text } from 'react-native';
import { Container,LogoLogin,ImageBackGround,Input,ContainerInput,Button,TextButton,Texttxt,ContainerText} from './styles';
import Logo2 from '../../assets/Logo2.png'
import imageBackground from '../../assets/logo2bg.png';

const Login = ({navigation}) => {
    const handleLogin = () =>{
        navigation.replace("Home")
    }
    const handleForgetPassword = ()=>{
        alert('Esqueci a Senha')
    }
    const handleCreateCount = ()=>{
        alert('Criar Conta')
    }
    return(
    <ImageBackGround source={imageBackground}>
        <Container>
            <LogoLogin source={Logo2}/>
            <ContainerInput>
            <Input placeholder="E-mail" placeholderTextColor="white"/>
            </ContainerInput>  
            <ContainerInput>
            <Input placeholder="Senha"placeholderTextColor="white"/>
            </ContainerInput>
            <Button onPress={handleLogin}>
                <TextButton>ENTRAR</TextButton>
            </Button>
            <ContainerText>
           <Texttxt onPress={handleForgetPassword}>Esqueceu a senha?</Texttxt>
            <Texttxt>|</Texttxt>
            <Texttxt onPress={handleCreateCount}>Criar uma Conta</Texttxt>
            </ContainerText>
            </Container>
            
  </ImageBackGround>
    )
}

export default Login