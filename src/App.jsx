import './App.css'
import useCatImage from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/hello?size=50&color=red&json=true`

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // recuperar la imagen
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>1 componente defalult App</h1>
      <button onClick={handleClick}>Obtener New Render</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Imagen sacada de las 3 primeras palabras ${fact}`} />}
      </section>
      {/* <Otro /> */}
    </main>
  )
}
