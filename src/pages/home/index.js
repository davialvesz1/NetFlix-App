import react from 'react';

import Carrousel from './Carrousel';
import { Container, ContainerCarrousel, ContainerList } from './styles'
import List from '../../components/List';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Button } from 'react-native';
import { getFilmsTrending } from '../../services/filmesApi';
//______________________________________//________________________________________
const apiKey = '2e5cb871604e17ebcf28b776c1864e0b'
//const language = 'language=pt-BR'
export default function Home() {
  const [ListTrending, setListTrending] = useState([])
  const [ListDiscover, setListDiscover] = useState([])
  const [ListRated, setListRated] = useState([])
  //const lista = [0, 1, 2, 3, 4, 5]
  // const Handlebutton = ()=>{
  // alert('Em Desenvolvimento')
  //}
  //onst init = async ()=>{
  //const response = await getFilmsTrending(1);
  //}


  const trendingmovies = useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=1`).then(response => response.json()).then(data => setListTrending(data.results))
  }, []);
  const WatchNow = useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`).then(response => response.json()).then(data => setListDiscover(data.results))
  }, [])
  const Rated = useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`).then(response => response.json()).then(data => setListRated(data.results))
  }, []);

  return (
    <Container>
      <ContainerCarrousel>
        <Carrousel list={ListRated} />
      </ContainerCarrousel>
      <ContainerList>
        <List list={ListDiscover} Title="Novidades" trending={true} />
      </ContainerList>
      <ContainerList>
        <List list={ListTrending} Title="Filmes populares" />
      </ContainerList>
      <ContainerList>
        <List list={ListRated} Title="Aclamados pela Critica" />
      </ContainerList>


    </Container>
  );
}