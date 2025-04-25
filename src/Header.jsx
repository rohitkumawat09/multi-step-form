

import logo from "./img/img.jpg"
function Header() {

    return (
        <>
            <div id='navBar'>
                <div id="logoImg">
                  <img src={logo} alt="" />
                </div>
                <div id='navBarLi'>
                    <ul type="none">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Details</a></li>
                    </ul>
                </div>
               
            </div>

        </>
    );
}

export default Header;
