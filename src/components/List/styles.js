import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';



export const ContainerItems = styled.View`
height:110px;
width:${(props)=>props.trending ? 110 : 90 }px
background-color:black;
margin:5px;

`

export const Image = styled.Image`
height:100%;
width:100%;
border-radius:${(props)=>props.trending ? 55 : 8 }px;
`

export const Text = styled.Text`
margin-top:0px
color:white;
font-size:20px;
font-weight:bold;
`;