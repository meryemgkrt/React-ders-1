import { useState } from "react";

const Form = () => {
  //Formda tutulan verilen verilerin state
  const [name, setName] = useState("");
  const [surname, setsurname] = useState("");
  const [pass, setPass] = useState("");
  //
  const [usrs, setUsers] = useState([]);
  // Form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gönderilecek kullanıcıyı hazırlama
    const newUsrs = { id: new Date().getTime(), name, surname, pass };
    //Yeni kullanıcılar ekler
    setUsers([...usrs, newUsrs]);
    //inputları sıfırlama
    setName("");
    setsurname("");
    setPass("");
  };
  //Kullanıcıyı siler
  const HandleDelete = (id) => {
    // id'sini bildiğimiz elemanı dizden çıkarma
    const filtred = usrs.filter((usr) => usr.id !== id);

    //Stateyi güncelleme
    setUsers(filtred);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-5">
        <h1 className="text-center">Form Alanı</h1>

        <label className="mt-4">İsim</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
        />

        <label className="mt-4">Soy İsim</label>
        <input
          value={surname}
          onChange={(e) => setsurname(e.target.value)}
          className="form-control"
          type="text"
        />

        <label className="mt-4">Şifre</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="form-control"
          type="password"
        />

        <button className="btn btn-info mt-5">Gönder</button>
      </form>
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Şifre</th>
            <th>İşlemler</th>
          </tr>
        </thead>

        <tbody>
          {usrs.map((usr) => (
            <tr key={usr.id}>
              <td>{usr.name}</td>
              <td>{usr.surname} </td>
              <td>{usr.pass} </td>
              <td>
                <button
                  onClick={() => HandleDelete(usr.id)}
                  className="btn btn-danger"
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;

//State her güncellendiğinde
// Birleşen tekrardan ekrana basar
// Bu sayede arayüz güncel kalır
