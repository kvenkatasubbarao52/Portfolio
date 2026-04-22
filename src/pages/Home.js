import profile from "../profile.jpeg";

function Home() {
  return (
    <div className="container">
      <h1>About Me</h1>
<p style={{ maxWidth: "600px", margin: "auto" }}>
  I am a student passionate about technology.
</p>

      <h2>Research Interests</h2>
      <p>AI, Web Development</p>

      <h2>Personal Details</h2>
      <p>Name: Venkata Subba Rao</p>
      <p>Email: kvenkatasubbarao526@email.com</p>
      <p>Phone: 7901522599</p>

      <h2>Skills</h2>
      <p>React, JavaScript, HTML, CSS</p>
      <img 
  src={profile} 
  alt="profile" 
  width="150" 
  style={{ 
    borderRadius: "50%", 
    border: "3px solid white",
    marginTop: "20px"
  }} 
/>
    </div>
  );
}

export default Home;