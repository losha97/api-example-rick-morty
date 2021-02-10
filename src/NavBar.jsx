import { Link } from "react-router-dom";
import { social, links } from "./data";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    const navigateToURL = (url) => {
        window.location.href = url;
    }

    const displayNavBar = () => {
        const navbar = document.getElementById('navbar');
        if(navbar.style.display === 'none') {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    }

    return (
        <section className="grid-navigation">
            <a id="nav-toggle" onClick={displayNavBar}><FaBars/></a>
            <nav id="navbar">
                <ul>
                    {links.map((links) => {
                        const { id, url, name } = links;
                        return (
                            <li key={id}>
                                <Link className="links" to={url} onClick={() => navigateToURL(url)}>{name}</Link>
                            </li>
                        );
                    })}
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li className="social-float" key={id}>
                                <a className="social-icons" href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </section>
    );
}
export default NavBar;