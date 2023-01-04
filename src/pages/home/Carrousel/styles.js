import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const {width,height} = Dimensions.get('screen')


export const Image = styled.Image`
width:110%;
height:110%;
`;
export const Icons = styled(AntDesign)`
`;

export const ButtonsIcons = styled.View`
botton:0px;
justify-content:space-evenly;
align-items:center;
flex-direction:row;
`;



export const ButtonWatch = styled.TouchableOpacity`
background-color:white;
border-radius:4px;
flex-direction:row;
align-items:center;
padding:10px
margin-top:0px;
`;

export const Text = styled.Text`
font-size:20px

`

export const Gradient = styled(LinearGradient)`
botton:0px;
justify-content:space-evenly;
align-items:center;
flex-direction:row;
`;


export const Item = styled.TouchableOpacity.attrs({
    activeOpacity:1
})`
height:80%;
width: ${`${width}px`};
`; 