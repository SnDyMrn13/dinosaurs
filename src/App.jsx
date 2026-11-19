import { useState } from 'react'
import { supabase } from './utils/supabase'
import useTable from './useTable.js'
import RecordCard from './RecordCard.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'





function App() {

  const highlightImage = () => {
    const tip = document.getElementById("tip")
    tip.style.transform = "scale(1.5)"
  }
  const clearHighlight = () => {
    const tip = document.getElementById("tip")
    tip.style.transform = ""
  }

  const { data, loading, error } = useTable("Dinosaurs")
  
 

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

  const shown = data.filter((data) => data.name && data.diet.includes(diet) && data.length_in_meters && data.fossil_found)

  return (
    <div className="container">

     
      <Header />
         <div className="card">
          <p><strong>Move mouse over image.</strong></p>
          
           <p id="tip" onMouseEnter={highlightImage} onMouseLeave={clearHighlight}>
            <Hero/>
           </p>
          
         </div>
     
      
      <h2 className="feed">What to feed a hungry Dinosaur!!!</h2>

      <button onClick={showCarnivores}>The Meat Eaters!</button>&nbsp;
      <button onClick={showHerbivores}>The Veggie Eaters!</button>&nbsp;
      <button onClick={showAll}>All of Them!</button>

      {shown.map((data) => <RecordCard key={data.id} data={data} />)}  

     <p>{error}</p>
     <Footer/>
    </div>
  )
} 

export default App
