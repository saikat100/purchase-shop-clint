import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleTableOrder from '../SingleTableOrder/SingleTableOrder';

const OrderedAllProduct = () => {
	const [allOrdered, setAllOrdered] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/ordered")
			.then((res) => res.json())
			.then((data) => setAllOrdered(data));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<SideBar />
				</div>
				<div className="col-md-8">
					<table className="table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Ordered Date</th>
								<th>Product Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{allOrdered.map((order) => (
								<SingleTableOrder order={order}></SingleTableOrder>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrderedAllProduct;