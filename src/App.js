import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import { useEffect, useState } from 'react';

function App() {

  // Carregamenteo de dados via código
  // const item1={
  //   nome: 'Rick Sanchz',
  //   img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //   status:"Alive",
  //   species:"Human",
  //   origin:{"name":"Earth (C-137)"}
  // }
  // const item2={
  //   nome: 'Morty Smith',
  //   img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //   status:"Alive",
  //   species:"Human",
  //   origin:{"name":null}
  // }
  // const item3={
  //   nome: 'Summer Smith',
  //   img: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  //   status:"Alive",
  //   species:"Human",
  //   origin:{"name":'Earth (Replacement Dimension)'}
  // }
  // const itens=[item1, item2, item3]
  
  const [itens, setItens] = useState([])

  // Carregamenteo de dados via código
  async function carregarDadosApi(){

  var apiUrl = 'https://rickandmortyapi.com/api/character/'
  var response = await fetch(apiUrl)

  const body = await response.json()
  const results = body.results
  console.log(itens)
  setItens(results)
}

useEffect(function(){
  carregarDadosApi()
}, [])

  return (
<>
<div className='cards'>
{/* <Card item={item1}/>
<Card item={item2}/>
<Card item={item3}/> */}
{itens.map((item, i) => <Card item={item} key={i}/> )}
</div>
</>
  );
}

export default App;
