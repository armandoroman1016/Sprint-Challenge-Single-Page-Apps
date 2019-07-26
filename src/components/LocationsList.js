import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function LocationsList() {
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/locations/')
        .then(data => {
          console.log('locations :',data)
        })
        .catch(error => {
          console.log('error',error)
        })
      },[])
    
      
}
