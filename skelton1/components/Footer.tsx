import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(to bottom, #000000, #1a1a1a)",
      color: "#d4d4d8",
      textAlign: "center",
      padding: "20px 0",
      borderTop: "1px solid #333",
    }}>
      <div style={{ marginBottom: "10px" }}>
        <Link href="/about" style={{ color: "#a855f7", marginRight: "15px" }}>
          About
        </Link>
        <Link href="/contact" style={{ color: "#a855f7", marginRight: "15px" }}>
          Contact
        </Link>
        <Link href="/terms" style={{ color: "#a855f7" }}>
          Terms of Service
        </Link>
      </div>
      <p style={{ margin: 0, color: "#a3a3a3", fontSize: "0.875rem" }}>
        &copy; {new Date().getFullYear()} UndocuLink. All Rights Reserved.
      </p>
    </footer>
  );
}
