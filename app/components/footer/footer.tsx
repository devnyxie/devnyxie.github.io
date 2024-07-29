import ThemeChanger from "../themeToggle/themeToggle";
import module from "./footer.module.css";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const links = [
  {
    name: "github",
    href: "https://github.com/devnyxie",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/talmkg",
  },
];

export default function Footer() {
  return (
    <footer className="mb-5">
      <hr />
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          {links.map((link) => (
            <a
              key={link.href}
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
              className={`d-flex ${module.link}`}
            >
              <ArrowIcon />
              <p>{link.name}</p>
            </a>
          ))}
        </div>
        <ThemeChanger />
      </div>

      <p>© {new Date().getFullYear()} MIT Licensed</p>
    </footer>
  );
}
