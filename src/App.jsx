import Counter from "./1.ders/Counter.jsx";
import {useState} from "react";
import Form from "./components/Form.jsx";
import Acordion from "./components/Acordion.jsx";
function App() {
  const [isDarkTheme, setisDarkTheme] =useState(true);
  return (
  
 <div className={isDarkTheme ? 'dark' : 'light'}>
  <div className="container d-flex justify-content-between  py-5">
    <h2>Temayı Belirleme</h2>
    <button className={`btn ${isDarkTheme ? 'btn-light' : 'btn-dark'}`} 
    onClick={()=>setisDarkTheme(!isDarkTheme)}>
      {isDarkTheme ? 'Açık Mod' : 'Koyu Mod'}
      </button>
  </div>
  <Counter />
  <Acordion 
  title="Birinci başlık"
  content="İlk alanın içeriği"
  />
  <Acordion
   title="İkinci başlık"
   content="İkinci alanın içeriği"/>
  <Form/>
  
 </div>
  );
}

export default App;

//* Bildirim kutucuğu ekrana basacak mı?
//* Sayaç uygulamasında ekrana basacak mı?
//* Uygulama koyu mod mu?
//* Form alanındaki inputlara yazılankar
//* Bildirim kutucuğu ekrana basılacak mı?
//* Haberin statesini gösterecek misin?