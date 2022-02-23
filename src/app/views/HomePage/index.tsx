import React, {useEffect, useState} from 'react'
import api from "../../services/api";

export default function Home() {
  const [showsList, setShowsList] = useState<string[]>([]);

  useEffect(() => {
    async function getListItens(){
      const response = await api.get('/shows/6771');
      setShowsList(response.data);
      console.log(response.data);
    }
    getListItens();
  }, [])


  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}	