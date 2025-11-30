/*
Minimal portfolio React component for Dhairya Joshi — UPDATED
Usage:
- Assumes a React app with Tailwind CSS configured (create-react-app or Vite + Tailwind)
- Save this file as src/App.jsx (or any component) and import in index.js

What it includes:
- Hero with photo placeholder, tech badges
- Projects grid (each project has title, short blurb, tech tags, GitHub/link)
- Experience card
- Education, Certifications, Coursework, Achievements sections
- Skills list and quick stats
- Contact footer with mailto link and GitHub/LinkedIn links

Design notes:
- Tailwind for styling; clean, modern, soft shadows, rounded cards
- Responsive: single column on mobile, two-column content area on desktop
- Minimal animations via simple CSS transitions
*/

import React from "react";

const projects = [
  {
    title: "GoMQ — Lightweight Message Queue",
    desc: "Fully custom AMQP-style message broker supporting durable queues, multi-consumer fanout, manual acks, dead-lettering, message requeueing, and fully async goroutine-based dispatch. Implements backpressure, fair delivery, and a TCP-based wire protocol.",
    tech: ["Go", "Concurrency", "TCP", "Systems Design"],
    link: "https://github.com/dhairyajoshi/gomq",
  },
  {
    title: "P2P Encrypted Communication",
    desc: "Peer discovery server + direct encrypted peer‑to‑peer communication using asymmetric crypto. Includes handshake protocol, public‑key exchange, NAT-friendly connection bootstrapping, and E2E message encryption with no central relay.",
    tech: ["Go", "Cryptography", "P2P Networking"],
    link: "https://github.com/dhairyajoshi/p2p",
  },
  {
    title: "Reverse Proxy & Load Balancer",
    desc: "Production-grade reverse proxy implementing round‑robin scheduling, health checks, retry logic, failover, and connection pooling. Uses goroutines for high concurrency and low-latency request forwarding.",
    tech: ["Go", "Load Balancing", "Networking"],
    link: "https://github.com/dhairyajoshi/reverse-proxy",
  },
  {
    title: "RustedMem — Redis-like KV Store",
    desc: "In-memory Redis-style key-value database built in Rust with its own TCP server, command parser, hashmap-based storage engine, multi-threaded concurrency model, and minimal RESP-inspired protocol.",
    tech: ["Rust", "Low-level Systems", "Databases"],
    link: "https://github.com/dhairyajoshi/rustedmem",
  },
  {
    title: "HTTPed — Async HTTP Framework",
    desc: "Custom async HTTP framework from scratch: router, middleware pipeline, controller abstractions, TCP‑level request parsing, and async executor built on top of Rust's futures.",
    tech: ["Rust", "Async Runtime", "TCP/HTTP"],
    link: "https://github.com/dhairyajoshi/httped",
  },
  {
    title: "Chess (Flutter)",
    desc: "A complete chess game implemented in Flutter with full move validation, piece logic, board rendering, turn management, and check/checkmate detection. Features animations and a clean mobile‑friendly UI.",
    tech: ["Flutter", "Dart", "Game Logic"],
    link: "https://github.com/dhairyajoshi/chess",
    hosted: "https://chess-dsfy.onrender.com/",
  },
  {
    title: "Minesweeper (Flutter)",
    desc: "Classic Minesweeper game recreated with Flutter featuring recursive reveal algorithm, flagging system, board generation logic, and adaptive grid UI for web and mobile.",
    tech: ["Flutter", "Dart", "Game Development"],
    link: "https://github.com/dhairyajoshi/minesweeper",
    hosted: "https://minesweeper-l7da.onrender.com/",
  },
  {
    title: "BFS-visualizer (Flutter)",
    desc: "Visualizer for Breadth-First Search (BFS) algorithm implemented in Flutter. Place start and end nodes, add walls, and watch the algorithm explore the grid in real-time with animated steps.",
    tech: ["Flutter", "Dart", "DSA"],
    link: "https://github.com/dhairyajoshi/BFS-Visualizer",
    hosted: "https://bfs-visualizer.onrender.com/#/",
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "VSSUT, Burla",
    date: "Nov 2020 — May 2024",
    note: "CGPA: 8.54",
  },
  {
    degree: "Class XII",
    school: "St. Xavier's High School, Khandagiri",
    date: "June 2020",
    note: "94.4%",
  },
  {
    degree: "Class X",
    school: "St. Xavier's High School, Khandagiri",
    date: "June 2018",
    note: "93%",
  },
];

const certifications = [
  "Introduction to Machine Learning (Kaggle)",
  "Intermediate Machine Learning (Kaggle)",
  "Introduction to Deep Learning (Kaggle)",
  "Programming Essentials in Python",
  "CCNA: Introduction to Networks",
  "Cybersecurity Essentials",
];

const coursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Software Engineering",
  "Operating Systems",
  "Microprocessors & Microcontrollers",
  "Database Management Systems",
];

const achievements = [
  "Solved 700+ LeetCode questions — https://leetcode.com/u/dhairyajoshi/",
  "Built multiple production-ready backend systems and infra tools",
  "Strong problem-solving foundation with consistent algorithmic practice",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dhairya Joshi</h1>
          <p className="text-sm text-gray-600 mt-1">
            Software Engineer — Systems, Distributed Systems & Backend
          </p>
        </div>
        <nav className="flex gap-4 items-center text-sm">
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#education" className="hover:underline">
            Education
          </a>
          <a href="#certifications" className="hover:underline">
            Certifications
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white\/60 p-6 rounded-2xl shadow-xl backdrop-blur-xl border border-white\/30">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">Hi — I'm Dhairya.</h2>
            <p className="mt-3 text-gray-600">
              I love going deep into the tools, languages, and systems I use
              every day — understanding how they work under the hood, why they
              are designed the way they are, and what trade‑offs shape them.
              Whenever I learn a new technology, I try to recreate my own
              minimal version of it: whether it's a message queue, a key‑value
              store, a reverse proxy, or an entire HTTP framework. Building
              low‑level systems helps me understand concepts conceptually, not
              just superficially, and that curiosity drives almost everything I
              build.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                Go
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                Rust
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                Python
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                Postgresql
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                Distributed Systems
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                Kubernetes
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                Django
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
                FastAPI
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition"
              >
                See projects
              </a>
              {/* <a */}
              {/*   href="/resume.pdf" */}
              {/*   className="inline-block border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50" */}
              {/* > */}
              {/*   Download CV */}
              {/* </a> */}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 flex items-center justify-center shadow-inner">
              {/* Placeholder for photo */}
              <span className="text-xl font-semibold text-indigo-700">DJ</span>
            </div>
            <div className="text-center text-sm text-gray-600">
              <div>
                <strong>Software Engineer</strong>
              </div>
              <div>Hyderabad</div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20 text-center">
            <div className="text-2xl font-bold">3+</div>
            <div className="text-sm text-gray-600">
              Years coding projects & systems
            </div>
          </div>
          <div className="bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20 text-center">
            <div className="text-2xl font-bold">2+</div>
            <div className="text-sm text-gray-600">
              Production-grade backend projects
            </div>
          </div>
          <div className="bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20 text-center">
            <div className="text-2xl font-bold">700+</div>
            <div className="text-sm text-gray-600">
              <a
                href="https://leetcode.com/u/dhairyajoshi/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LeetCode questions solved
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-8">
          <h3 className="text-xl font-semibold">Selected Projects</h3>
          <p className="text-gray-600 text-sm mt-1">
            Systems & backend projects focused on reliability, scalability and
            low-level networking.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <article
                key={p.title}
                className="bg-white\/60 rounded-xl p-4 shadow-lg backdrop-blur-xl border border-white\/20 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                  </div>
                  <div className="ml-3 flex-shrink-0">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 text-sm hover:underline"
                    >
                      View →
                    </a>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-gray-100 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience & Skills */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            id="experience"
            className="md:col-span-2 bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20"
          >
            <h3 className="font-semibold">Experience</h3>
            <div className="mt-3">
              <h4 className="text-sm font-medium">
                Software Engineer — Solytics Partners
              </h4>
              <div className="text-xs text-gray-600">
                Dec 2023 — Present • Pune
              </div>
              <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                <li>
                  Migrated large-scale Django services to FastAPI, reducing
                  response latency and enabling async I/O for high‑throughput
                  workloads.
                </li>
                <li>
                  Refactored major backend components, cutting cloud
                  infrastructure cost by <strong>90%+</strong> via optimized
                  compute usage, caching, and DB query reductions.
                </li>
                <li>
                  Built end-to-end CI/CD pipelines with containerized test
                  suites, automated QA, blue/green deployments, and Kubernetes
                  rollout strategies.
                </li>
                <li>
                  Designed LLM-powered transaction graph analysis:
                  natural-language → graph-query engine enabling bankers to
                  explore customer risk patterns.
                </li>
                <li>
                  Implemented core modules for SAMS & TMS with TDD, improving
                  reliability and reducing production issues.
                </li>
              </ul>
            </div>

            <h4 className="mt-4 font-semibold">Recent Projects (at work)</h4>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
              <li>
                LLM-powered linked-network analysis for TMS (natural-language
                queries over transaction graphs)
              </li>
              <li>
                FastAPI migration and performance-focused refactors across
                services
              </li>
            </ul>
          </div>

          <aside className="bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20">
            <h4 className="font-semibold">Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Go",
                "Rust",
                "Python",
                "FastAPI",
                "Kubernetes",
                "AWS",
                "Postgres",
                "Docker",
                "Django",
                "Node.js",
              ].map((s) => (
                <span key={s} className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {s}
                </span>
              ))}
            </div>

            <h4 className="mt-4 font-semibold">Links</h4>
            <div className="mt-2 text-sm">
              <a
                className="block hover:underline"
                href="https://github.com/dhairyajoshi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="block hover:underline"
                href="https://kaggle.com/dhairyajoshi"
                target="_blank"
                rel="noreferrer"
              >
                Kaggle
              </a>
              <a
                className="block hover:underline"
                href="https://linkedin.com/in/dhairya-joshi"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="block hover:underline"
                href="https://leetcode.com/dhairyajoshi"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>
            </div>
          </aside>
        </section>

        {/* Education, Certifications, Coursework, Achievements */}
        <section
          id="education"
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20 md:col-span-2">
            <h3 className="font-semibold">Education</h3>
            <div className="mt-3">
              {education.map((e) => (
                <div key={e.degree} className="mb-3">
                  <div className="font-medium">
                    {e.degree} —{" "}
                    <span className="text-sm text-gray-600">{e.school}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {e.date} • {e.note}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="mt-4 font-semibold">Coursework</h4>
            <div className="mt-2 text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {coursework.map((c) => (
                <div key={c}>• {c}</div>
              ))}
            </div>
          </div>

          <aside className="bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20">
            <h4 className="font-semibold">Certifications</h4>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h4 className="mt-4 font-semibold">Achievements</h4>
            <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-8 bg-white\/60 p-4 rounded-xl shadow-lg backdrop-blur-xl border border-white\/20 text-center"
        >
          <h4 className="font-semibold">Let's build something</h4>
          <p className="text-sm text-gray-600 mt-2">
            Open to backend, infra, and systems roles. Available for remote and
            onsite work.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="mailto:joshidhairaya2002@gmail.com"
              className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              Email me
            </a>
            <a
              href="https://github.com/dhairyajoshi"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-12 py-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dhairya Joshi — Built with Tailwind CSS •{" "}
        <a href="/resume.pdf" className="hover:underline">
          Resume
        </a>
      </footer>
    </div>
  );
}
