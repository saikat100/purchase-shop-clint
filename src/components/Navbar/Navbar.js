import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {

	const history = useHistory();

	const handleLogOut = () => {
		localStorage.clear();
		history.go(0);
	};

	const name = JSON.parse(localStorage.getItem('name'));
	const email = JSON.parse(localStorage.getItem('email'));
	
    return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand ms-5" href="/">
						<img width="150px" src={logo} alt="" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item me-5">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item me-5">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/myOrder"
								>
									Order
								</Link>
							</li>
							<li className="nav-item me-5">
								<a className="nav-link active" aria-current="page" href="/">
									Deals
								</a>
							</li>
							{email && (
								<li className="nav-item me-5">
									<b className="nav-link active">{name}</b>
								</li>
							)}

							{email && (
								<li className="nav-item me-5">
									<button
										className="nav-link active btn btn-primary"
										onClick={handleLogOut}
									>
										Logout
									</button>
								</li>
							)}

							{!email && (
								<li className="nav-item me-5">
									<a className="nav-link active" href="/login">
										<button className="btn btn-primary">Login</button>
									</a>
								</li>
							)}
							<li className="nav-item me-5">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/orderedAllProduct"
								>
									<button className="btn btn-success">Admin</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
};

export default Navbar;