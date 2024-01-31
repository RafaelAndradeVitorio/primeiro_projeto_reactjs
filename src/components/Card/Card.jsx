function Card(props){
  const item = props.item
  console.log(item)
    return(

    <div className="card">
    <h2>{item.name}</h2>
    <div className="tags">
    <div className="tag">Status: {item.status}</div>
    <div className="tag">Espécie: {item.species}</div>
    <div className="tag">Origem: {item.origin.name}</div>
    </div>

    <img src={item.image}></img>
  </div>
    )
}

export default Card