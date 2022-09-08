import "./components/style.css";
import Course from "./Course";
import Team from "./Team";
import Contact from "./Contact";
import Books from "./cart/Books";
import Blog from "./Blog";
import Home from "./Home";
import Videos from "./Videos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./Error";
import Main from "./Main";
import Single from "./Single";
import Cart from "./cart/Cart";
import Checkout from "./Checkout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/post-page/:name" element={<Single />} />
          <Route path="/videos/:name" element={<Videos />} />
          <Route path="/videos/:name" element={<Videos />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
