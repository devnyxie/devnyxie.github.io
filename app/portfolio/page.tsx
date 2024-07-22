import React from "react";

export const metadata = {
  title: "Portfolio",
  description: "Tim's Portfolio",
};

export default function Page() {
  const dev_projects = [
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
      name: "distro-api",
      lang: "JavaScript",
      excerpt:
        "Explore over 900 Linux distributions with Distro API. Get detailed data on each distro, perfect for developers and Linux enthusiasts.",
    },
  ];
  const archived_projects = [
    {
      name: "getFavicon",
      lang: "Python",
      archived: true,
      excerpt:
        "Simple python package to grab site's favicons. Supports async concurrent batch loading.",
    },
  ];
  const ready_projects = [
    {
      name: "katsuragi",
      lang: "Go",
      excerpt:
        "A Go toolkit for web content processing, analysis, and SEO optimization, offering utilities to efficiently extract titles, descriptions and favicons.",
    },
  ];
  const base_git_url = "https://github.com/devnyxie";
  return (
    <section>
      <style>
        {`
          h3 {
            margin-bottom: 1rem;
          }
        `}
      </style>
      <div>
        <h1>Portfolio</h1>
        <ul
          style={{ paddingLeft: "0", listStyleType: "none" }}
          className="mt-4"
        >
          <h3>Ready to use</h3>
          {ready_projects.map((project, index) => (
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
          <hr />
          <h3>Development</h3>
          {dev_projects.map((project, index) => (
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
          <hr />
          <h3>Archived</h3>
          {archived_projects.map((project, index) => (
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
