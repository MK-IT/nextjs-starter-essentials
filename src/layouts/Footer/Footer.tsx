import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.Footer}>
      © {new Date().getFullYear()} {` | `} Built with
      {` `}
      <a
        href="https://www.nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        NextJS
      </a>
      {` | `}
      Powered By{" "}
      <a href="https://mkit.io" target="_blank" rel="noopener noreferrer">
        MK IT
      </a>
      {` | `}
      <a
        href="https://github.com/MK-IT/nextjs-starter-essentials"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
