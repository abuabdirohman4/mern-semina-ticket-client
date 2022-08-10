import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../App.css";

function App() {
  // let number = 0
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState("");
  // const [tahunLahir, setTahunLahir] = useState("");
  // const [usia, setUsia] = useState("");
  const [form, setForm] = useState({
    name: "",
    usia: "",
    tahunLahir: "",
  });

  const klik = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const handleChange = () => {
    // setUsia(2022 - tahunLahir);
    setForm({...form, usia: 2022 - form.tahunLahir})
  };

  return (
    <Container className="mt-5">
      <h1>Counter App</h1>
      <p>Nilai counter saat ini {number}</p>
      <button onClick={klik}>Click Me</button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      <p>
        Nama ={" "}
        <input
          type="text"
          name="nama"
          value={name}
          // onChange={(e) => setName(e.target.value)}
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
        />
      </p>
      <p>
        Tahun Lahir ={" "}
        <input
          type="number"
          name="tahunLahir"
          // value={tahunLahir}
          // onChange={(e) => setTahunLahir(e.target.value)}
          value={form.tahunLahir}
          onChange={(e) => setForm({...form, tahunLahir: e.target.value})}
        />
      </p>
      {/* <p>Usia = {usia}</p> */}
      <p>Usia = {form.usia}</p>
      <Button onClick={handleChange}>Submit</Button>
    </Container>
  );
}

export default App;
