import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
	const product = props.product;
	const { _id, name, img, price } = product;

	return (
		<div className="col-md-3 mb-5">
			<div className="shadow rounded p-3 m-2 h-100">
				<img className="img-fluid" src={img} alt="" />
				<h4 className="text-decoration-none">{name}</h4>
				<br />
				<div className="d-flex">
					<h3 className="text-decoration-none text-success">{price}</h3>
					<Link to={`/checkout/${_id}`}>
						<button className="btn btn-success ms-5">Buy Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;