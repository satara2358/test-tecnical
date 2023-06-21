import { useEffect, useState } from 'react'
import { getRamdonFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRamdonFact().then(newFact => setFact(newFact))
    // getRamdonFact().then(setFact) es lo mismo
  }
  // useEffect (() => {}, []) forma de crear
  // recuperar la cita
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
