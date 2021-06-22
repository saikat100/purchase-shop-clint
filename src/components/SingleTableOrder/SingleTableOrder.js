import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SingleTableOrder = (props) => {
	const order = props.order;
	const { _id, userName, productName, email, date, productPrice } = order;
	const history = useHistory();

	const handleDelete = () => {
		fetch(`http://localhost:5000/orderDelete/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				alert("Deleted successfully");
				history.replace("/");
			});
	};

	return (
		<tr>
			<td>{userName}</td>
			<td>{email}</td>
			<td>{date}</td>
			<td>{productName}</td>
			<td>{productPrice}</td>
			<td className="px-4">{"1"}</td>
			<td>
				<button onClick={handleDelete} className="btn btn-danger">
					<FontAwesomeIcon icon={faTrashAlt} />
				</button>
			</td>
		</tr>
	);
};

export default SingleTableOrder;