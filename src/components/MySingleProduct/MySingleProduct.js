import React from 'react';
import { useHistory } from 'react-router';

const MySingleProduct = (props) => {
	const product = props.product;
	const { _id, img, date, userName, productName, productPrice } = product;

	const history = useHistory();

	const handleDelete = () => {
		fetch(`http://localhost:5000/orderDelete/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				alert("Your ordered product is canceled.");
				history.replace("/");
			});
	};

	return (
		<div className="col-md-6">
			<div className="d-flex justify-content-between p-5 shadow rounded">
				<div>
					<img src={img} className="img-fluid w-75" alt="" />
				</div>
				<div className="mt-5">
					<p>customer Name: {userName}</p>
					<p>Product Name: {productName}</p>
					<p>Quantity: {"1"}</p>
					<p>Price: {productPrice}</p>
					<p>Date: {date}</p>
					<br />
					<br />
					<button onClick={handleDelete} className="btn btn-danger">
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default MySingleProduct;