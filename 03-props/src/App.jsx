import React from 'react'
import Cards from '../componants/Cards'

const App = () => {
  return (
    <div className='parent'>
      
<Cards user= "Anshu"  age ={18}  img="https://images.unsplash.com/photo-1777622488430-3a3873212441?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
<Cards user= "pravin"  age ={28}  img="https://images.unsplash.com/photo-1506564461966-4107c88f6d29?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    </div>
  )
}

export default App