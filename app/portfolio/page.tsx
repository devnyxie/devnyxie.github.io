import React from "react";

export const metadata = {
  title: "Portfolio",
  description: "View my portfolio projects",
};

export default function Page() {
  const portfolio = [
    {
      name: "dev-link",
      lang: "TypeScript",
      excerpt:
        "Dev-Link is a webapp created to facilitate programmers in swiftly discovering teams for collaborative projects and learning opportunities.",
    },
    {
      name: "hikko",
      lang: "JavaScript",
      excerpt:
        "Hikko is a Next.js configurator that generates websites from a single config file, featuring a wide range of components and comprehensive theming support",
    },
    {
      name: "nigiri",
      lang: "JavaScript",
      excerpt:
        "The Nigiri Next.js Blog template allows you to create a personalized blog with ease.",
    },
    {
      name: "getFavicon",
      lang: "Python",
      excerpt:
        "Simple python package to grab site's favicons. Supports async concurrent batch loading.",
    },
    {
      name: "distro-api",
      lang: "JavaScript",
      excerpt:
        "Explore over 900 Linux distributions with Distro API. Get detailed data on each distro, perfect for developers and Linux enthusiasts.",
    },
  ];
  const base_git_url = "https://github.com/devnyxie";
  return (
    <section>
      <div>
        <h1>Portfolio</h1>
        <ul
          style={{ paddingLeft: "0", listStyleType: "none" }}
          className="mt-4"
        >
          {portfolio.map((project, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <div>
                <a href={`${base_git_url}/${project.name}`} target="_blank">
                  <h4>{project.name}</h4>
                </a>
                <p>{project.excerpt}</p>
                <p>
                  <strong>Language:</strong> <span>{project.lang}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
