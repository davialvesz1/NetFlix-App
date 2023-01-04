import React from 'react';
import { View } from 'react-native';
import { Image, Icons, Gradient, ButtonWatch, Text, Item } from './styles';
import { FlatList } from 'react-native';

const handleMessage = ()=>{
    alert('Em desenvolvimento =)')
}

const Carrousel = ({ list }) => {
    
   

    return (
        <FlatList
            data={list}
            horizontal
            pagingEnabled
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({ item }) => {
                const uri = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                return (
                    <Item>

                        <Image source={{ uri }}
                        />
                        <Gradient
                            colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0, 1)', 'transparent']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <Icons name="sharealt" size={30} color="white"/>
                            <ButtonWatch onPress={handleMessage}>
                                <Icons name="caretright" size={20} color="black" style={{ marginRigth: 5 }} />
                                <Text>Assistir</Text>
                            </ButtonWatch>
                            <Icons name="infocirlceo" size={30} color="white"/>
                        </Gradient>
                    </Item>

                )
            }}
        />
    )
}

export default Carrousel