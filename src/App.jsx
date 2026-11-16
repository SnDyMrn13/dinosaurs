import { useState } from 'react'
import { supabase } from './utils/supabase'
import useTable from './useTable.js'
import RecordCard from './RecordCard.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'




function App() {
  const { data, loading, error } = useTable("Dinosaurs")
  const [Dinosaurs, setDinosaurs] = useState ([])

  const loadDinosaurs = async () => {
    const { data,loading, error } = await supabase.from("Dinosaurs").select()
    if (error) {
      console.log(error.message)
      return
    }

    console.log(data)
    setDinosaurs(data)

  }

  const [diet, setDiet] = useState("")

  const showCarnivores = () => {
    setDiet("carnivore")
  }

  const showHerbivores = () => {
    setDiet("herbivore")
  }

  const showAll =() => {
    setDiet("")
  }

  if (loading){
    return <p>loading...</p>
  }

  const shown = data.filter((data) => data.name && data.diet.includes(diet))

  return (
    <div className="container">

     
      <Header />
      
      <h2>What to feed a hungry Dinosaur!!!</h2>

      <button onClick={showCarnivores}>The Meat Eaters!</button>
      <button onClick={showHerbivores}>The Veggie Eaters!</button>
      <button onClick={showAll}>All of Them!</button>

      {shown.map((data) => <RecordCard key={data.id} data={data} />)}  

     <p>{error}</p>
     <Footer/>
    </div>
  )
} 

export default App
