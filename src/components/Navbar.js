import "./NavbarStyles.css";

export default function Navbar() {
    return(
        <>
            <nav>
                <ul>
                    <div class="item-1">
                        <li>
                            <a href="/grades/" id="grade">Grades ⮟</a>
                            <ul className="dropdown">
                                <li><a href="/kindergarten/">Kindergarten</a></li>
                                <li><a href="/firstgrade/">First Grade</a></li>
                                <li><a href="/secondgrade/">Second Grade</a></li>
                                <li><a href="/thirdgrade/">Third Grade</a></li>
                                <li><a href="/fourthgrade/">Fourth Grade</a></li>
                                <li><a href="/fifthgrade/">Fifth Grade</a></li>
                            </ul>
                        </li> 
                        <li class="logo"><a href="/">LOGO Math Wizards</a></li> 
                    </div>
                    <div class="item-2">
                        <li><a href="/about/">About Us</a></li> 
                        <li><a href="/settings/">Settings</a></li> 
                    </div>
                </ul>
            </nav>     
                        
        </>
    )
}