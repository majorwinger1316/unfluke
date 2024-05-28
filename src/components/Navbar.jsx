import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [linkClass, setLinkClass] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleNavbar = () => {
        if (openLinks) {
            setLinkClass("hide");
            setTimeout(() => {
                setOpenLinks(false);
                setLinkClass("");
            }, 300); // Duration should match the CSS animation duration
        } else {
            setOpenLinks(true);
            setLinkClass("show");
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setOpenLinks(false);
                setLinkClass("");
            }
        };

        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar">
            <div className="left-side" id={openLinks ? "open" : "close"}>
                <div className="title">
                    <Link to={"/"}>
                        <p>unfluke</p>
                    </Link>
                </div>
                <div className={`hiddenLinks ${linkClass}`}>
                    <Link to={"/"}><p>Home</p></Link>
                    <Link to={"/DashBoard"}><p>DashBoard</p></Link>
                    <Link to={"/historical-trading"}><p>Historical Trading</p></Link>
                    <Link to={"/Scanner"}><p>Scanners</p></Link>
                </div>
            </div>
            <div className="right-side">
    <Link to={"/"}><p>Home</p></Link>
    <Link to={"/DashBoard"}><p>DashBoard</p></Link>
    <Link to={"/historical-trading"}><p>Historical Trading</p></Link>
    <div className="right-links">
        <Link to={"/Scanner"}><p>Scanners</p></Link>
    </div>
    <button onClick={toggleNavbar}>
        {openLinks ? (
            <CloseIcon className="icon-exit" />
        ) : (
            <ReorderIcon className="icon-enter" />
        )}
    </button>
</div>

        </div>
    );
}

export default Navbar;
