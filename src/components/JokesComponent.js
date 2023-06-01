function JokesComponent(props){
    return(
        <div className="jokes--card_holder">
            <h2 className="jokes--heading">{props.setup}</h2>
            <p className="jokes--text">{props.punchline}</p>
        </div>
    )
}

export default JokesComponent;