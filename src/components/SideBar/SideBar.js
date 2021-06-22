import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
			<div>
				<br />
				<Link to="/orderedAllProduct">
					{" "}
					<button className="btn btn-primary">Ordered Product List</button>
				</Link>
				<br />
				<br />
				<Link to="/addProduct">
					<button className="btn btn-primary">Add Product</button>
				</Link>
			</div>
		);
};

export default SideBar;