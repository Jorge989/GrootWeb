import Logo from'./assets/LOGO.svg'
import Shop from'./assets/shop.svg'
import Groot from './assets/groot.svg'
import React,{useState} from 'react';
import Share from './assets/Grupo 89.svg'
import './App.css';
import { FaYoutube } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import {
  Header,Continer
} from './styles'
function App() {
  const [isShow, setisShow] = useState(true);
  return (
  <div className="geral">
    <Header>
<div className="header">

  <img src={Logo} className="mainlogo" alt="icon"></img>
  <div className="ul-linhas">
<ul className="lista">
<li className="lired">NEW ARRIVAL</li>
<li>ABOUT</li>
<li>SHOWCASE</li>
<li>FEATURES</li>
<li>PRICE</li>
<li>CONTACT</li>
</ul>
<div className="hrbox">
  <hr className="linhavermelha"/>
  <hr className="linhabranca"/>
</div>
</div>
<div className="buttons">
<button className="Login">
  LOGIN
</button>
<img src={Shop}  className="Shoplogo" alt="icon"></img>
</div>

{isShow && (
  <div className="fadiv">
<FaBars className="fabars" color="FF1D6A" onClick={setisShow}/>
  </div>
)}
</div>
    </Header>
<Continer>
 <div className="containergrot">
   <h1 className="h1groot">
     BABY
   </h1>
     <h1 className="h1groot3">GROOT</h1>
     <h1 className="h1groot2">
       GROOT
     </h1>
 </div>
 <div className="circles">
   <div className="groot">
<img src={Groot} alt="grootimg"className="grootimg"></img>
   </div>
<div className="yellow"></div>
<div className="green"></div>
 </div>
 <div className="marvel">
   <button className="marvel-btn">
   MARVEL

    </button>
   <button className="studios-btn">STUDIOS</button>
 </div>
 <div className="textos">
<h1 className="dancing-groot">
DANCING GROOT
<h2 className="marvel-text">
Marvel Guardians of the Galaxy
</h2>
</h1>

<p className="text">Plays clip from upcoming Guardians of the Galaxy Volume 2 movie<br/>
Dances to internal music, or detects external music to dance to song or playlist<br/>
When figure detects music, its eyes light up and it starts to dance<br/>
11.5 inch figure with poseable head and arms<br/>
Includes figure and instructions. Requires alkaline batteries required</p>
 </div>
 <div className="button-above">
<button className="addcard">$ 99.99 &nbsp;|&nbsp; Add to cart</button>
<button className="watch"><FaYoutube/>&nbsp;WATCH REVIEWS</button>
 </div>
 <footer>
   <div className="footer">
     <img src={Share}  alt="shareimg"className="share"/>

   </div>
 </footer>
   <div className="round">
     <div className="circle1"></div>
     <div className="circle2"> </div>
     <div className="circle3"> </div>
     <div className="circle4"> </div>
     <div className="circle5"> </div>


   </div>
</Continer>
</div>
  );
}

export default App;
