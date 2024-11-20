import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} The Lyceum School. All Rights Reserved.</p>
      <p>Address: Village Jamal Khan Nizamani, Hala New, Matiari, Sindh</p>
      <p>Funded by SEF (Sindh Education Foundation)</p>
    </footer>
  );
}

export default Footer;
