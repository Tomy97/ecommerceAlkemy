import { useEffect, useState } from 'react'
import axios from 'axios'
const GetApi = () => {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    const api = 'url'
    const res = axios.get(api)
    setDatos(res.data)
  }, [])

  return {
    datos,
  }
}

export default GetApi
