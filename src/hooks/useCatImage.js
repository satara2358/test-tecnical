import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export default function useCatImage ({ fact }) { // hooks inician con la palabra use
  const [imageUrl, setImageUrl] = useState() // custom hook llama a otros hooks como useState
  useEffect(() => {
    if (!fact) return
    // const firtWord = fact.split(' ').slice(0, 3).join(' ') => otra forma de hacerlo
    const firtWord = fact.split(' ', 3).join(' ') //
    console.log(firtWord)
    fetch(`https://cataas.com/cat/says/${firtWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        // setImageUrl(`https://cataas.com${url}`)
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
