
import { Link } from "react-router-dom";

export function MenuItems(){
    return(
        <>
            <li className="menu-item">
                <b>
                    <Link to="/">Home</Link>
                </b>
            </li>
            <li className="menu-item">
                <b>
                    <Link to="/playlists" className="link-to">
                        Share A Good News
                    </Link>
                </b>
            </li>
{/*             
            <li className="menu-item">
                <b>
                    <Link to="/playlist/history">History</Link>
                </b>
            </li> */}
            <li className="menu-item">
                <b>
                    <Link to="/">About Us</Link>
                </b>
            </li>
        </>
    )
}