import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1a1a1a",
        borderBottom: "1px solid #333",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#a855f7" }}>
        UndocuLink
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/dashboard" style={linkStyle}>
          Dashboard
        </Link>
        <Link href="/jobs" style={linkStyle}>
          Jobs
        </Link>
        <Link href="/internships" style={linkStyle}>
          Internships
        </Link>
        <Link href="/scholarships" style={linkStyle}>
          Scholarships
        </Link>
        <Link href="/networking" style={linkStyle}>
          Networking
        </Link>
      </div>

      {/* Login and Sign Up Buttons */}
      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
        <Link href="/signup">
          <button style={signUpButtonStyle}>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

// Common Styles
const linkStyle = {
  color: "#d4d4d8",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s",
};

const buttonStyle = {
  backgroundColor: "transparent",
  color: "#a855f7",
  border: "1px solid #a855f7",
  padding: "8px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const signUpButtonStyle = {
  backgroundColor: "#a855f7",
  color: "#ffffff",
  border: "none",
  padding: "8px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

linkStyle["&:hover"] = { color: "#c084fc" };
buttonStyle["&:hover"] = { backgroundColor: "#1e1e1e", color: "#c084fc" };
signUpButtonStyle["&:hover"] = { backgroundColor: "#9333ea" };
