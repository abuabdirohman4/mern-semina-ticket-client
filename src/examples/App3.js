import { useState } from 'react'
import Button from './components/Button'
import './App.css';

function App() {

  // let number = 0

  const [number, setNumber] = useState(0)
  const [name, setName] = useState('')
  const [tahunLahir, setTahunLahir] = useState('')
  const [usia, setUsia] = useState('')

  const klik = () => {
    setNumber(number + 1)
    console.log(number)
  }

  const handleChange = () => {
    setUsia(2022 - tahunLahir)
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Nilai counter saat ini {number}</p>
      <button onClick={klik}>Click Me</button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      Nama = <input
        type="text"
        name="nama"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      Tahun Lahir = <input
        type="number"
        name="tahunLahir"
        value={tahunLahir}
        onChange={e => setTahunLahir(e.target.value)}
      />
      <br />
      Usia = {usia}
      <br />
      <Button onClick={handleChange}>Submit</Button>
    </>
  );
}

export default App;
