import React, { useEffect, useState } from 'react';
import CheckOutDetail from '../CheckOutDetail/CheckOutDetail';
import Products from '../Products/Products';

const CheckOut = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [myCheckOut, setMyCheckOut] = useState([]);

    useEffect(() => {
        fetch(`https://limitless-badlands-88219.herokuapp.com/checkOut/${user.email}`)
            .then(res => res.json())
            .then(data => setMyCheckOut(data));
    }, [])
    return (
        <div>

          <CheckOutDetail {...myCheckOut}/> 
           

        </div>

    );
};

export default CheckOut;