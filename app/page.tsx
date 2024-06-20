import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import pfp from "./other/pfp.jpg";

export default function Page() {
  const repos = [
    { name: "next.js", url: "https://github.com/vercel/next.js" },
    { name: "material-ui", url: "https://github.com/mui/material-ui" },
    { name: "pterm", url: "https://github.com/pterm/pterm" },
  ];
  return (
    <section>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1>Tim Afanasiev</h1>
            <p>Full Stack Software Engineer</p>
            <p>Go, TypeScript, Ruby, Python</p>
          </div>

          <Image
            src={pfp}
            alt="Profile Picture"
            width={150}
            height={150}
            priority={true}
            quality={100}
            style={{ borderRadius: "2px" }}
          />
        </div>
        <h3 className="mb-2">About</h3>
        <p>Enthusiastic Software Developer with a passion for open-source.</p>
        <p>Fluent in English, Greek, Russian, and Polish.</p>
        <hr />
        <div>
          <p>Official collaborator at:</p>
          <ul style={{ paddingLeft: "2rem" }}>
            {repos.map((repo) => (
              <li key={repo.name} style={{ listStyle: "initial" }}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
