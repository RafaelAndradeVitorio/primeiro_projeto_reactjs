import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const item1={
    nome: 'Rick Sanchz',
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status:"Alive",
    species:"Human",
    origin:{"name":"Earth (C-137)"}
  }
  const item2={
    nome: 'Morty Smith',
    img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    status:"Alive",
    species:"Human",
    origin:{"name":null}
  }
  const item3={
    nome: 'Summer Smith',
    img: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    status:"Alive",
    species:"Human",
    origin:{"name":'Earth (Replacement Dimension)'}
  }

  const itens=[item1, item2, item3]
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
