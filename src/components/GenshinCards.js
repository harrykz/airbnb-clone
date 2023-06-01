function GenshinCards(props){
    return (
        <div className="genshin--card">
            <img src={props.image} className="genshin--card_image"/>
            <h2 className="genshin--card_title">Name: {props.character}</h2>
            <p className="genshin--card_weapon">Weapon Type: {props.weapon}</p>
            <p className="genshin--card_vision">Vison: {props.vision}</p>
            <p className="genshin--card_region">Region: {props.region}</p>
        </div>
    )
}

export default GenshinCards;