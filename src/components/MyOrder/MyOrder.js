import React, { useEffect, useState } from 'react';
import MySingleProduct from '../MySingleProduct/MySingleProduct';

const MyOrder = () => {
	const { email } = JSON.parse(localStorage.getItem("user"));

	const [myOrder, setMyOrder] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/orderByEmail", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email }),
		})
			.then((res) => res.json())
			.then((data) => setMyOrder(data));
	}, []);

	return (
		<div className="container">
			<div className="row">
				{myOrder.map((product) => (
					<MySingleProduct key={product._id} product={product}></MySingleProduct>
				))}
			</div>
		</div>
	);
};

export default MyOrder;