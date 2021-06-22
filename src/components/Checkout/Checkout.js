import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Checkout = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const user = JSON.parse(localStorage.getItem("user"));

	const [checkout, setCheckout] = useState({
		userName: user.name,
		email: user.email,
	});

	const { name, price } = product;
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checkout.date) {
			fetch("http://localhost:5000/addOrder", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(checkout),
			})
				.then((res) => res.json())
				.then((data) => {
					alert("Your checkout is successful");
					history.replace("/");
				});
		}
	};

	const handleDateChange = (e) => {
		const newCheckout = checkout;
		newCheckout.date = e.target.value;
		setCheckout(newCheckout);
	};

	useEffect(() => {
		fetch(`http://localhost:5000/product/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
				const newCheckout = checkout;
				newCheckout.productName = data.name;
				newCheckout.productPrice = data.price;
				newCheckout.img = data.img;
				setCheckout(newCheckout);
			});
	}, []);

	return (
		<div className="container">
			<h1>Checkout</h1> <br />
			<form onSubmit={handleSubmit}>
				<div>
					<lavel>
						<h5>Your Name:</h5>
					</lavel>
				</div>
				<input
					className="form-control w-50"
					type="text"
					placeholder="Your Name"
					value={user.name}
				/>{" "}
				<br />
				<div>
					<lavel>
						<h5>Email:</h5>
					</lavel>
				</div>
				<input
					className="form-control w-50"
					type="text"
					placeholder="Your Email"
					value={user.email}
				/>{" "}
				<br />
				<div>
					<lavel>
						<h5>Product Name:</h5>
					</lavel>
				</div>
				<input
					className="form-control w-50"
					type="text"
					placeholder="Product Name"
					value={product.name}
				/>{" "}
				<br />
				<div>
					<lavel>
						<h5>Quantity:</h5>
					</lavel>
				</div>
				<input
					className="form-control w-50"
					type="text"
					placeholder="Quantity"
					value="1"
				/>{" "}
				<br />
				<div>
					<lavel>
						<h5>Price:</h5>
					</lavel>
				</div>
				<input
					className="form-control w-50"
					type="text"
					placeholder="Price"
					value={product.price}
				/>{" "}
				<br />
				<div>
					<lavel>
						<h5>Ordered Date</h5>
					</lavel>
				</div>
				<input
					className="form-control w-50"
					type="date"
					required
					onChange={handleDateChange}
				/>{" "}
				<br />
				<button className="btn btn-primary mb-5">Checkout</button>
			</form>
		</div>
	);
};

export default Checkout;