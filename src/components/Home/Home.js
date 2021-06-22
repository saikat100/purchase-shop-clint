import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {

    const [productData, setProductData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/products")
			.then((res) => res.json())
			.then((data) => setProductData(data));
    }, [])

    return (
			<div className="container">
				<div className="d-flex justify-content-center m-5">
					<input
						type="text"
						className="form-control w-50"
						placeholder="Search..."
					/>
					<button className="btn btn-primary">Search</button>
				</div>
				<div className="row">
					{productData.map((product) => (
						<SingleProduct key={product._id} product={product}></SingleProduct>
					))}
				</div>
			</div>
		);
};

export default Home;