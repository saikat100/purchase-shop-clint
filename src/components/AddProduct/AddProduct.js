import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import SideBar from '../SideBar/SideBar';

const AddProduct = () => {

    const [product, setProduct] = useState({});

    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = (e) => {
        const newProduct = product;
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct);
    }

    const handleAddProduct = (e) => {
			e.preventDefault();
			fetch("http://localhost:5000/addProduct", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(product),
			})
				.then((res) => res.json())
				.then((data) => {
					alert("Your product is inserted done");
					history.replace("/");
				});
		};

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <SideBar />
                </div>
                <div className="col-md-8">
                    <form onSubmit={handleAddProduct}>
                        <input onBlur={handleOnBlur} name="name" className="form-control" type="text" placeholder="Product Name" required /> <br />
                        <input onBlur={handleOnBlur} name="img" className="form-control" type="text" placeholder="Image URL" required /> <br />
                        <input onBlur={handleOnBlur} name="price" className="form-control" type="text" placeholder="Product Price" required /> <br />
                        <button className="form-control" className="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;