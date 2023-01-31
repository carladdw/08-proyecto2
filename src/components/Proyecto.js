import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const[proyecto,setProyecto]= useState({});
    const params = useParams();
    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo=>trabajo.id ===params.id)
        setProyecto(proyecto[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
        <h2>{proyecto.nombre}</h2>
    </div>
  )
}
