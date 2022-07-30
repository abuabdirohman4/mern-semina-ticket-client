import './App.css';
import { Hello } from './Hello'
import { Title } from './Title'
import Button from './components/Button'
import Table from './components/Table'


function App() {

  // function Hello() {
  //   return 'Hello'
  // }

  // const Hello = function () {
  //   return 'Hello'
  // }

  // const users = ['yohanes', 'ongki', 'Abu']
  const users = [
    {
      _id: 1,
      name: 'Yohanes',
      age: 21,
      status: true
    },
    {
      _id: 1,
      name: 'Ongki',
      age: 22,
      status: true
    },
    {
      _id: 1,
      name: 'Yohanes',
      age: 23,
      status: false
    }
  ]

  const isLogin = true

  return (
    <>
      <h1>Welcome to React</h1>
      <h1><Hello /></h1>
      <Title name='Abu Abdirohman ' />
      <br />
      <Title name='Azati Hanani' />
      <br />
      <Title />
      <br />
      {/* <Button onclick={alert('Hallo')}></Button> */}
      <Button onClick={() => alert('Click Save')}>Save</Button>

      <Table></Table>

      <ul>
        {/* {users.map(user =>
          <li>{user}</li>
        )} */}
        {users.map((user, index) => {
          // return <li key={index}>{user}</li>
          return (
            <>
              {user.status && (
                <li 
                  key={index}
                >Nama Saya {user.name}, Umur {user.age}</li>
              )}
            </>
          )
        })}
      </ul>
    </>
  );
}

export default App;
