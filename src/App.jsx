import { useEffect, useState } from 'react'
import './App.css'
import { getRamdonFact } from './services/facts'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/hello?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // useEffect (() => {}, []) forma de crear
  // recuperar la cita
  useEffect(() => {
    getRamdonFact().then(setFact)
  }, [])

  // recuperar la imagen
  useEffect(() => {
    if (!fact) return
    // const firtWord = fact.split(' ').slice(0, 3).join(' ') => otra forma de hacerlo
    const firtWord = fact.split(' ', 3).join(' ')
    console.log(firtWord)
    fetch(`https://cataas.com/cat/says/${firtWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        // setImageUrl(`https://cataas.com${url}`)
        setImageUrl(url)
      })
  }, [fact])

  const handleClick = () => {
    getRamdonFact(setFact).then(newFact => setFact(newFact)) // forma correcta === a getRamdonFact().then(setFact) = line 15
  }

  return (
    <main>
      <h1>1 componente defalult App</h1>
      <button onClick={handleClick}>Obtener New Render</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen sacada de las 3 primeras palabras ${fact}`} />}
      </section>
    </main>
  )
}
