export default function FeaturesSection() {
    const features = [
      { title: "Centralized Resources", description: "All jobs, scholarships, and opportunities in one place." },
      { title: "User-Friendly Interface", description: "Clean, intuitive design for easy navigation." },
      { title: "AI-Powered Tools", description: "Tools to optimize your resume and career path." },
    ];
  
    return (
      <section
        style={{
          background: "linear-gradient(to bottom, #000000, #1a1a1a)", // Black gradient
          color: "#ffffff", // White text for readability
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#a855f7" }}>
          Why Choose UndocuLink?
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1e1e1e", // Slightly lighter black for contrast
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
                width: "300px",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", color: "#c084fc" }}>{feature.title}</h3>
              <p style={{ color: "#d4d4d8" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  