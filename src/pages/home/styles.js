import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width,height} = Dimensions.get('screen')

export const Container = styled.ScrollView`
background-color: #000;
flex:1;
`;

export const ContainerCarrousel = styled.View`
background-color:black;
height:${`${height/2}px`}
`;

export const ContainerList = styled.View`

margin-left:10px

`