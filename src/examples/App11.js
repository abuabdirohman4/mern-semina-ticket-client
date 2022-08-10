import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "../App.css";
import Input from "../components/Input";

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

  const [error, setError] = useState("");

  const klik = () => {
    setNumber(number + 1);
    // console.log(number);
  };

  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setError("");
    if (e.target.name === "name") {
      if (e.target.value.length < 3) {
        setError("Nama Minimal 3 Karakter");
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // setUsia(2022 - tahunLahir);
    if (form.name === "") {
      setError("Nama tidak boleh kosong");
    } else if (form.tahunLahir === "") {
      setError("Tahun Lahir tidak boleh kosong");
    } else {
      setForm({ ...form, usia: 2022 - form.tahunLahir });
    }
  };

  return (
    <Container className="mt-5">
      <h1>Counter App</h1>
      <p>Nilai counter saat ini {number}</p>
      <Button onClick={klik}>Click Me</Button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      <p>
        Nama :{" "}
        <Input
          type="text"
          name="name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          value={form.name}
          // onChange={(e) => setForm({ ...form, name: e.target.value })}
          onChange={handleChange}
        />
      </p>
      <p>
        Tanpa Nama :{" "}
        <Input
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </p>
      <p>
        Tahun Lahir :{" "}
        <Input
          type="number"
          name="tahunLahir"
          // value={tahunLahir}
          // onChange={(e) => setTahunLahir(e.target.value)}
          value={form.tahunLahir}
          // onChange={(e) => setForm({ ...form, tahunLahir: e.target.value })}
          onChange={handleChange}
        />
      </p>
      {/* <p>Usia = {usia}</p> */}
      <p>Umur saya : {form.usia}</p>
      <Button onClick={handleSubmit}>Submit</Button>
      <p style={{ color: "red" }}>{error}</p>
    </Container>
  );
}

export default App;
