import { useState } from 'react'
import { supabase } from './utils/supabase'
import useTable from './useTable.js'


function Header() {
  return <h1>Cindy Hulitsky</h1>
}

function App() {
  const { data, error } = useTable("dinosaurs")


  return (
    <div>
      <h1>Dinosaurs</h1>
      <Header />
     <p>{error}</p>
    </div>
  )
} 

export default App
