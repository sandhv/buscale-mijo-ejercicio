import { useState } from 'react'
import Table from './components/Table'
import getPeople from './utils/getPeople'

function App() {
  const users = getPeople();

  return (
    <>
    <Table>
      {users.map((user,i)=>{
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
