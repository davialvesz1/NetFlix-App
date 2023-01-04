import React   from 'react-native';
import { Button } from 'react-native';
import { ContainerItems, Image, Text, } from './styles';
import { FlatList } from 'react-native';
import { useEffect } from 'react';
const handleMessage=()=>{
    alert('Em Desenvolvimento')
}

const List = ({ list, Title, trending }) => {

    return <>
        <Text>{Title}</Text>
        <FlatList
            data={list}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            style={{ marginTop: 10 }}
            renderItem={({ item }) => {
                const uri2 = `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                const uri = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                return (
                    <ContainerItems trending={trending}>
                
                        <Image
                            trending={trending}
                            source={{ uri }}
                            
                        />
                        
                        

                    </ContainerItems>
                )
            }}
        />
    </>

}

export default List;