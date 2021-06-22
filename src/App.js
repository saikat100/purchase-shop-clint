import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import OrderedAllProduct from "./components/OrderedAllProduct/OrderedAllProduct";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyOrder from "./components/MyOrder/MyOrder";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/checkout/:id">
						<Checkout />
					</PrivateRoute>
					<PrivateRoute path="/myOrder">
						<MyOrder />
					</PrivateRoute>
					<PrivateRoute path="/orderedAllProduct">
						<OrderedAllProduct />
					</PrivateRoute>
					<PrivateRoute path="/addProduct">
						<AddProduct />
					</PrivateRoute>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
