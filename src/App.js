import logo from './logo.svg';
import './App.css';
import './styles.css';

import JokesData from './ContentData/JokesData';
import GenshinData from './ContentData/GenshinData';
import AirbnbData from './ContentData/AirbnbData';

import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import CardComponent from './components/CardComponent';
import JokesComponent from './components/JokesComponent';
import GenshinCards from './components/GenshinCards';

function App() {

  /*let jokesData = JokesData.map((jokie)=>{
    return <JokesComponent setup={jokie.setup} punchline={jokie.punchline} />;
  })

  console.log(jokesData);*/

  /*let Genshin_cards = GenshinData.map((carddata)=>{
    return <GenshinCards 
      image={carddata.image}
      character={carddata.character}
      weapon={carddata.weapon}
      vision={carddata.vision}
      region={carddata.region}
    />
  })*/

  let Airbnb_data = AirbnbData.map((items)=>{
    return <CardComponent 
        key={items.id}
        /*img={items.coverImg}
        houseName={items.location.houseName}
        place={items.location.place}
        distance={items.location.distance}
        price={items.price}
        rating={items.rating}
        openSpots={items.openSpots}
        stats={items.stat}*/
        item={items}
    />
  })

  return (

    

    
    <div className='container--airbnb'>
      <NavbarComponent />
      <HeroComponent />
      <div className='card--holder_div'>
        {Airbnb_data}
      </div>
    </div>
  )
}

export default App;
