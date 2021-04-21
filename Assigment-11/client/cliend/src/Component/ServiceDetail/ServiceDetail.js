import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
// import { useSpring, animated } from 'react-spring'

const ServiceDetail = (props) => {
    const event = props.event;
    const {_id, name, img, description } = event;

    // const [flip, set] = useState(false)
    // const props = useSpring({
    //   to: { opacity: 1 },
    //   from: { opacity: 0 },
    //   reset: true,
    //   reverse: flip,
    //   delay: 200,
    //   config: config.molasses,
    //   onRest: () => set(!flip),
    // })


    return (
        
        <div className="  col-md-4 shadow rounded p-3 mt-5 d-flex justify-content-center">
            <div>
             <img className="img-fluid" src={img} alt="" />  
                <h4>{name}</h4>
                <p style={{ width: '190px' }}>{description}</p>
            </div>
            <div className="text-center py-4">
                <Link to={`/AdminBook/${_id}`} className="btn btn-lg btn-outline-primary rounded-pill" to="/login">Get Service</Link>
            </div>
        </div>
       



    );
};

export default ServiceDetail;