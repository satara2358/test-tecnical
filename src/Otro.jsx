import useCatImage from './hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'dog' })
  console.log(imageUrl)

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
