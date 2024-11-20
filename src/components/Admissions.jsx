
import './Admission.css';

const Admission = () => {
  return (
    <div className="admission-container">
      <h1 className="admission-title">Admission Form</h1>
      <p className="admission-description">
        Welcome to The Lyceum School! Please fill out the form below to apply for admission.
      </p>

      <form className="admission-form">
        <label htmlFor="studentName"> Student&apos;s Name</label>
        <input type="text" id="studentName" name="studentName" placeholder="Enter the student's name" required />

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" required />

        <label htmlFor="class">Class to Apply</label>
        <select id="class" name="class" required>
          <option value="">Select a class</option>
          <option value="nursery">Nursery</option>
          <option value="pg">Playgroup</option>
          <option value="grade1">Grade 1</option>
          <option value="grade2">Grade 2</option>
          <option value="grade8">Grade 8</option>
        </select>

        <label htmlFor="guardianName">Guardian&apos;s Name</label>
        <input type="text" id="guardianName" name="guardianName" placeholder="Enter the guardian's name" required />

        <label htmlFor="contact">Contact Number</label>
        <input type="tel" id="contact" name="contact" placeholder="Enter contact number" required />

        <label htmlFor="address">Address</label>
        <textarea id="address" name="address" placeholder="Enter full address" required></textarea>

        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default Admission;
