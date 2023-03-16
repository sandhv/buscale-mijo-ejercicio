import { useState } from 'react'
import Table from './components/Table'
import getPeople from './utils/getPeople'
import Buscador from './components/Buscador';

const users = getPeople();

function App() {

  const [filter, setFilter] = useState(users)
  console.log(users)

  const handleSearch = (search) => {
    const filterUsers = users.filter(user => {
    
      if (user.firstName.toUpperCase( ).includes(search.toUpperCase( )) || user.lastName.toUpperCase( ).includes(search.toUpperCase( )) || user.email.toUpperCase( ).includes(search.toUpperCase( )) || user.amount.toUpperCase( ).includes(search.toUpperCase( ))) {
        return true;
        }
        return false;  
    })
    setFilter(filterUsers)

  }

  return (
    <>
    <Buscador onSearch={handleSearch} resultNumber={filter.length}/>
    <Table>
      {filter.map((user,i)=>{
        const isEven = i%2===0
        return (
          <>
            <p className={isEven ? 'even':'odd'}>
              {user.firstName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.lastName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.email}
            </p>
            <p className={isEven ? 'even':'odd'}>
              $ {user.amount} MXN
            </p>
          </>
        )
      })}
    </Table>
    </>
  )
}

export default App
