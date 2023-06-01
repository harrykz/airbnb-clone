import StarRating from '../images/pointed-star.png';

function CardComponent(props){
    console.log(props);

    let availability;
    if (props.item.openSpots === 0){
        availability = "SOLD OUT"
    } else if (props.item.stat === "Online"){
        availability = "Online"
    }

    return(
        <div className='card--container'>
            {availability && <div className='card--indicator_div'>{availability}</div>}
            <img src={props.item.coverImg} className='card--image' />
            <div className='card--rating_box'>
                <h4 className='card--title_heading'>{props.item.location.houseName}</h4>
                <p className='card--star_rating_text'>{props.item.rating}</p>
            </div>
            <p className='card--title_text'>{props.item.location.place}</p>
            <p className='card--title_text'><strong>${props.item.price}</strong>/ Night</p>
            <p className='card--title_text'>{props.item.location.distance} Kilometers away</p>
        </div>
    )
}

export default CardComponent;