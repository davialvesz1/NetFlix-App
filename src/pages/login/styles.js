import styled from 'styled-components/native';

export const Container = styled.View`
background-color:#000;
flex:1;
justify-content:center;
align-items:center;
`;

export const LogoLogin = styled.Image.attrs(
    {resizeMode:'stretch'}
)`
width:75%;
heigth:10%;

`;

export const ImageBackGround = styled.ImageBackground.attrs(
    
)`
flex:1;

`;
export const ContainerInput = styled.View`
width:80%;
background-color:#333333;
margin-bottom:10px;
border-radius:8px;

`;
export const Input = styled.TextInput`
width:100%;
height:50px;
padding-horizontal:10px;
color:white;
font-size:20px;
`;

export const Button = styled.TouchableOpacity`
width:80%;
height:45px;
border-radius:8px;
border-width:1px;
border-color:white;
justify-content:center;
align-items:center;
margin-top:20px;
`;

export const TextButton = styled.Text`
color:white;
font-size:20px;
`;

export const Texttxt = styled.Text`
color:white;
font-size:17px
`;
export const ContainerText = styled.View`
width:80%;
flex-direction:row;
justify-content:space-evenly;
margin-top:30px;
`;