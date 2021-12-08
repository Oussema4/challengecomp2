

function Navbar(){
    return(
<header>
      <div class="navmenu">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
          alt="logo-css"
          class="logo-css"
        />
        <ul class="nav-links">
          <li>
            <a href="#" id="home" class="text"> Home</a>
          </li>
          <li>
            <a href="#" class="text"> About</a>
          </li>
          <li>
            <a href="#" class="text"> Projects</a>
          </li>
          <li>
            <div class="dropdown">
              <a class="dropbtn text">Dropdown</a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>


    )

}
export default Navbar