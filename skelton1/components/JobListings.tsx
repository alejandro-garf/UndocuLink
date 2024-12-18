export default function JobListings() {
  const jobs = [
    { title: "Software Engineer Intern", company: "TechCorp", location: "Remote" },
    { title: "Research Fellow", company: "University X", location: "California" },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    }}>
      {jobs.map((job, index) => (
        <div key={index} style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          width: "250px",
          textAlign: "center",
        }}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <button style={{
            backgroundColor: "#0073b1",
            color: "#fff",
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>View Details</button>
        </div>
      ))}
    </div>
  );
}
