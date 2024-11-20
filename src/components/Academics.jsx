
import './Academics.css';

const Academics = () => {
  return (
    <div className="academics-container">
      <h1 className="academics-title">Academics at The Lyceum School</h1>
      <p className="academics-intro">
        At The Lyceum School, we provide quality education from nursery and playgroup to grade 8, 
        focusing on the holistic development of students in a free and supportive environment.
      </p>
      
      <section className="curriculum-section">
        <h2 className="section-title">Curriculum Overview</h2>
        <ul className="curriculum-list">
          <li>**Nursery and Playgroup:** Interactive learning with play-based activities.</li>
          <li>**Primary Grades (1-5):** Focus on foundational subjects like Mathematics, Science, and English.</li>
          <li>**Middle Grades (6-8):** Advanced topics to prepare students for higher education.</li>
        </ul>
      </section>

      <section className="activities-section">
        <h2 className="section-title">Extracurricular Activities</h2>
        <p>We believe in nurturing creativity and talent through:</p>
        <ul className="activities-list">
          <li>Art and Craft Workshops</li>
          <li>Sports and Physical Education</li>
          <li>Science and Technology Exhibitions</li>
          <li>Annual Debates and Cultural Events</li>
        </ul>
      </section>
    </div>
  );
};

export default Academics;
