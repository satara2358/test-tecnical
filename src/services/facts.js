const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'

export const getRamdonFact = () => {
  return fetch(CAT_ENDPOINT_RAMDOM_FACT)
    .then(res => res.json())
    .then(date => {
      const { fact } = date
      return fact
    })
}
