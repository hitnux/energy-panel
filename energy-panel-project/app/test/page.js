'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const Apitest = () =>  {
    const [token , setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);    
  
    useEffect(() => {
       if (!token && !loading) {
        setLoading(true);
        console.log(
            'getToken', token
        );
        
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
        console.log(token, loading, 'get data if');
        if(token && !loading) {
             console.log(
                 'getData', token
             );
             axios.get('/api/getAnlikGesUretim', {
                 headers: {
                     Authorization: `Bearer ${token}`
                 }
             })
                 .then((res) => {
                     console.log('data:', res);
                     if (res.data) {
                        setData(res.data);
                     }     
                 });
        }
     }, [token, loading]);

     useEffect(() => {
        setTimeout(() => {
            // window.location.reload()
            console.log('refresh');
        }, 604800000);
     }, []);
    
    return (
        <div>
            <img id="hastaneBg" src="/hastane.jpg" />
            <div className="overlay"></div>
            <ul className="list">
                {data?.map((item, ind) => (
                    <li key={item.type} className={`item item-${ind}`}>
                        <div className="card">
                            <div className="info">
                                <div className="icon"><img src={item.icon} width="48" height="48" /></div>
                                <span className="title">{item.title}</span>
                            </div>
                            <span className="value">{item.data[0]?.Value?.Value || 0} kW/h</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Apitest;