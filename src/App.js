import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
import CryptoDetails from "./components/CryptoDetails";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import Homepage from "./components/Homepage";
// Ant Design
import { Layout, Typography, Space } from "antd";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title
              title={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to={"/"}>Home</Link>
              <Link to={"/exchanges"}>Exchanges</Link>
              <Link to={"/news"}>News</Link>
            </Space>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
