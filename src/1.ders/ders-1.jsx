import Hed from "./components/Hed.jsx";
import Card from "./components/Card.jsx";
import { users } from "./components/Contans.jsx";

function App() {
  return (
    <div>
      <Hed />
      <h1>Kullanıcılarımız</h1>
      {/*
  * çoklu renderlama
  * kullanıcılar dizisindeki herbir 
  * kullanıcı için ekrana kart basar
  
  */}
      {users.map((user) => (
        <Card name={user.first_name} surname={user.last_name} img={user.image} />
      ))}
      <Card name={"Meryem"} surname={"Kurt"} height={"155"} />
      <Card name={"Elif"} surname={"Kart"} height={"110"} />
      <Card name={"Büşra"} surname={"Turt"} height={"96"} />
    </div>
  );
}

export default App;
