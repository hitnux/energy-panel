'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Slider from '../components/Slider';
import List from '../components/List';

export default function Home() {
  const [token , setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);   
  
  useEffect(() => {
    if (!token && !loading) {
     setLoading(true);
     axios.get('/api/token')
          .then((res) => {
              if (res.data.token) {
                 setToken(res.data.token);
              setLoading(false);
              }
          })
    } 
 }, [token]);

 useEffect(() => {
     if(token && !loading) {
          axios.get('/api/getData', {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          })
              .then((res) => {
                  if (res.data) 
                     setData(res.data);
                    
              });
     }
  }, [token, loading]);

  useEffect(() => {
     setTimeout(() => {
         window.location.reload()
         console.log('refresh');
     }, 604800000);
  }, []);

  return (
    <main>
      <Slider>
        <List data={data} />
      </Slider>
    </main>
  );
}
