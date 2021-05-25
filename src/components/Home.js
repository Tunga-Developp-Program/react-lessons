
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className="row">
                <Sidebar />
                <Main />
            </div>
            <Footer />

        </div>
    );
};

export default Home;