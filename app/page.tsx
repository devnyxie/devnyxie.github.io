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
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About</h1>
      <div className="mb-4">
        <Image
          src={pfp}
          alt="Profile Picture"
          width={300}
          height={300}
          className="mb-2"
        />
        <p>
          About I'm Tim, a passionate Software Developer skilled in both
          Frontend and Backend development. I'm fluent in English, Greek,
          Russian, and Polish.
        </p>
        <p>Skilled in TypeScript, Ruby, Python and Go.</p>
        <div className="mt-3">
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
