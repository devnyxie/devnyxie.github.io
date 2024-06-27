import Link from "next/link";
import module from "./nav.module.css";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  const text = `devnyxie </>`;
  return (
    <aside>
      <div>
        <nav className={module.nav}>
          <span>{text}</span>
          <div>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link key={path} href={path} className={module.navLink}>
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
