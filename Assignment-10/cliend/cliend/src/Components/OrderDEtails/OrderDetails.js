import React from 'react';

const OrderDetails = () => {
    useEffect(() => {
        fetch(`https://limitless-badlands-88219.herokuapp.com/products/`)
            .then(res => res.json())
            .then(data => setMyRegistration(data));
    }, [])
    return (
        <div className="row">
        <div className="col-md-4">
            <SideBar></SideBar>
        </div>
        <div className="col-md-8 mt-5">
            <table className="table container">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>{name}</td>
                <td>{price}</td>
               
            </tr>

                </tbody>
            </table>
        </div>

    </div>
    );
};

export default OrderDetails;