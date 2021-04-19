import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'


const RegistrationDetail = (props) => {
    const products = props.products;
    const {  name, price, } = products;

    return (
             <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td><button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>

    );
};

export default RegistrationDetail;