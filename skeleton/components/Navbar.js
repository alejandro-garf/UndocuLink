const Navbar = () => {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
        <div style={{ fontWeight: "bold" }}>UndocuLink</div>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><button style={{ backgroundColor: "#0073b1", color: "#fff", border: "none", padding: "8px 15px" }}>Sign Up</button></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  