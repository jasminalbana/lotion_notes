function Navbar({ toggleSidebar }) {
    return (
      <div>
        <div class='header-main'>
          <button onClick={toggleSidebar}>|||</button>
          <h1 className="head">Lotion</h1>
        </div>
        <h3 className="slogan">Like Notion But Worse</h3>
      </div>
    );
  }
export default Navbar;