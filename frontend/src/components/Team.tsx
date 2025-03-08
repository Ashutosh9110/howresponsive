// Team.jsx
import CardFlip from "./CardFlip";

const Team = () => {
  return (
    <section className="page-container h-screen"> {/* Changed from container to page-container */}
      <h2 className="responsive-heading">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto px-4"> {/* Using Tailwind for container */}
        <CardFlip />
      </div>
    </section>
  );
};

export default Team;