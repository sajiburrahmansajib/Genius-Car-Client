import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const OrdersReview = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email]);


    return (
        <div>
            <h1 className='text-4xl text-center my-28'>You Have <span className='text-success font-bold'>{orders.length}</span>  Orders</h1>

        </div>
    );
};

export default OrdersReview;