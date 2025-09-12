/*
  PrinceChidera Portfolio (Single-page React component)
  - Built for Next.js + Tailwind CSS + Framer Motion
  - Light mode, purple accents, heavy glassmorphism
  - IMPORTANT: copy your avatar image to `public/avatar.jpg` or update the path below

  How to use:
  1. Create a Next.js app (app router or pages) and install Tailwind & Framer Motion.
  2. Drop this component into `app/page.jsx` (Next 13) or `pages/index.jsx` (Next 12/13 pages router).
  3. Ensure Tailwind is configured and global CSS includes `html { scroll-behavior: smooth; }`.

  Dependencies:
    - framer-motion (npm i framer-motion)
    - tailwindcss (follow Tailwind setup for Next.js)

  This file is intentionally standalone and focuses on layout, accessibility, and polish.
*/
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Sample data (replace with your real projects) ---
const projects = [
   {
    id: 1,
    title: 'PrepPal — Lecture Summarizer',
    desc: 'An AI-study tool that transforms your PDF into summaries, flashcard and interractive quizzies instantly. helps study smarter with AI that understands your content',
    tags: ['Next.js', 'Tailwind', 'Supabase', "ExpressJS","Gemini"],
    demo: 'https://prep-pal-blond.vercel.app/',
    repo: 'https://github.com/prince24-web/Prep-Pal',
    image: "/preppal.png"
  },
  {
    id: 2,
    title: 'Stratify — AI Marketing Assistant',
    desc: 'An AI-powered marketing tool that generates campaign ideas, automates social posts, and helps startups grow their online presence with minimal effort.',
    tags: ['Nextjs', 'Framer Motion', 'Tailwind', "API", "expressJS", "Supabase"],
    demo: 'https://stratify-waitlist.vercel.app/',
    repo: 'https://github.com/prince24-web/stratify_waitlist',
    image: "/stratify.png"
  },
  {
    id: 3,
    title: 'AI-Powered Resume Review Tool',
    desc: 'A smart career tool that analyzes resumes using AI, highlights strengths, and suggests improvements to boost job application success rates.',
    tags: ['Node.js', 'NextJS', 'Gemini', "tailwind"],
    demo: 'https://check-my-cv-eu3s-7d2bny1if-prince24-webs-projects.vercel.app/',
    repo: 'https://github.com/prince24-web/CheckMyCv',
    image: "/resumeai.png"
  },
  {
    id: 4,
    title: 'eTrade',
    desc: 'An online gadget store',
    tags: ["react","css"],
    demo: 'https://tech-store-ivory-ten.vercel.app/',
    repo: 'https://github.com/prince24-web/techStore',
    image: "/roco.png"
  },
]
const IconGithub = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.67 3.03 8.63 7.24 10.03.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.95.64-3.58-1.42-3.58-1.42-.48-1.24-1.17-1.57-1.17-1.57-.96-.66.07-.65.07-.65 1.06.08 1.62 1.08 1.62 1.08.94 1.61 2.47 1.15 3.07.88.09-.68.37-1.15.67-1.41-2.35-.27-4.82-1.17-4.82-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.36.1-2.84 0 0 .87-.28 2.85 1.08A9.86 9.86 0 0112 6.8c.88.004 1.77.12 2.6.35 1.98-1.36 2.85-1.08 2.85-1.08.57 1.48.21 2.57.1 2.84.67.74 1.08 1.68 1.08 2.83 0 4.04-2.48 4.93-4.84 5.19.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.19.62.73.51C20 20.15 23 16.19 23 11.52 23 5.24 18.27.5 12 .5z" fill="#111827" />
  </svg>
);


// --- Main component ---
export default function Portfolio() {
  const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

// inside your component (React/Next)
const onContactSubmit = async (e) => {
  e.preventDefault(); // prevent page reload

  // show a friendly UI state
  setStatus("Sending...");

  try {
    // send a POST request to the API route with JSON body
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contactState.name,
        email: contactState.email,
        message: contactState.message,
      }),
    });

    // parse response JSON
    const data = await res.json();

    if (!res.ok) {
      // if API returned an error status, show the error to the user
      setStatus(data.error || "Failed to send message");
    } else {
      // success: clear form and inform user
      setStatus("Message sent — thank you!");
      setContactState({ name: "", email: "", message: "" });
    }
  } catch (err) {
    // network or unexpected error
    console.error("Contact form error:", err);
    setStatus("Network error. Please try again later.");
  } finally {
    // optionally clear the status after a while
    setTimeout(() => setStatus(null), 6000);
  }
};


const onClick = (link) => {
  if (link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }
};

  return (
    <div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Grid Background - Top Left */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
    <main className="min-h-screen  text-gray-900 antialiased relative z-10">
      {/* NAV */}
      <header className="fixed top-6 left-0 right-0 z-30">
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">Prince Chidera</div>
          <div className="space-x-4">
            <a href="#projects" className="px-4 py-2 rounded-lg text-sm font-medium ring-1 ring-gray-200 bg-white/40 backdrop-blur-md hover:shadow-md">Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-medium bg-purple-400  text-white shadow-md">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hi, I’m <span className="text-purple-600">Prince Chidera</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 max-w-xl text-gray-700">
              I build fast, accessible, and polished front-end experiences. I love taking design ideas and turning them into code — focusing on performance, animations and developer-friendly architecture.
            </motion.p>

            <motion.div className="mt-6 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <a href="#projects" className="inline-flex items-center px-5 py-2 rounded-lg bg-purple-500  text-white font-medium shadow-lg hover:scale-[1.02] transform transition">View projects</a>
              <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-lg ring-1 ring-gray-200 bg-white/60 backdrop-blur-md hover:shadow">Contact me</a>
            </motion.div>

            <motion.div className="mt-8 flex items-center gap-4 text-sm text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Based in Nigeria</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span>Open to freelance</span>
              </div>
            </motion.div>
          </div>

          {/* Avatar glass card */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 }} className="w-full sm:w-96 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* purple gradient glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 opacity-40 blur-3xl" aria-hidden />

              <div className="relative p-6 backdrop-blur-xl bg-white/60 border border-gray-200 rounded-2xl">
                <img src="/avatar.jpg" alt="Prince Chidera avatar" className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-white shadow-md" />
                <div className="mt-4 text-center">
                  <div className="font-semibold text-lg">Prince Chidera</div>
                  <div className="text-sm text-gray-600">Frontend Developer</div>
                </div>
                <div className="mt-4 flex justify-center gap-3">
                  <a href="#projects" className="px-3 py-1 rounded-md ring-1 ring-gray-200 bg-white/50 backdrop-blur-sm text-sm">Projects</a>
                  <a href="#contact" className="px-3 py-1 rounded-md bg-purple-500 text-white text-sm">Contact</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-8">
        <div className="backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-6 shadow">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img src="/avatar.jpg" alt="avatar" className="w-24 h-24 rounded-xl object-cover border-2 border-white shadow-lg" />
            <div>
              <h3 className="text-xl font-semibold">About me</h3>
              <p className="mt-2 text-gray-700 max-w-3xl">
                I’m a frontend developer with 3 years of experience building production-ready web apps. I specialize in React, Next.js and Tailwind CSS, and I focus on animations and UX using Framer Motion and GSAP. I’m currently studying Software Engineering and building PrepPal — an EdTech startup.
              </p>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                <li className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/50 ring-1 ring-gray-200">🎓 Software Engineering</li>
                <li className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/50 ring-1 ring-gray-200">📍 Nigeria</li>
                <li className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/50 ring-1 ring-gray-200">🧑‍💻 3 years experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* SKILLS */}
<section id="skills" className="max-w-6xl mx-auto px-6 py-8">
  <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {[
      { id: "html", label: "HTML", logo: "/html.svg" },
      { id: "css", label: "CSS", logo: "/css.svg" },
      { id: "js", label: "JavaScript", logo: "/js.svg" },
      { id: "tailwind", label: "Tailwind", logo: "/tailwind.svg" },
      { id: "react", label: "React", logo: "/react.svg" },
      { id: "next", label: "Next.js", logo: "/nextjs.svg" },
      { id: "git", label: "Git", logo: "/git.svg" },
      { id: "github", label: "GitHub", logo: "/github.svg" },
      { id: "supabase", label: "Supabase", logo: "/supabase.png" },
      { id: "python", label: "Python", logo: "/python.svg" },
    ].map((tech) => (
      <motion.div
        key={tech.id}
        whileHover={{ scale: 1.05 }}
        className="p-4 rounded-2xl backdrop-blur-md bg-white/50 border border-gray-200 flex flex-col items-center text-center shadow-sm hover:shadow-purple-300/40 transition"
      >
        <img src={tech.logo} alt={tech.label} className="w-10 h-10" />
        <div className="mt-2 text-sm font-medium text-gray-800">{tech.label}</div>
      </motion.div>
    ))}
  </div>
</section>

     {/* PROJECTS */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-12">
  <h3 className="text-2xl font-semibold mb-8 text-gray-900">Selected Projects</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {projects.map((p, idx) => (
      <motion.article
        key={p.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 * idx }}
        className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/60 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
      >
        {/* Screenshot */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-3 left-3 text-white">
            <h4 className="text-lg font-semibold">{p.title}</h4>
          </div>
        </div>

        {/* Details */}
        <div className="p-5">
          <p className="text-sm text-gray-700">{p.desc}</p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-white/60 ring-1 ring-gray-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex gap-3">
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-purple-400  text-white text-sm shadow hover:opacity-90"
            >
              Live Demo
            </a>
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg ring-1 ring-gray-200 bg-white/70 text-sm hover:bg-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
</section>


      {/* EXPERIENCE / EDUCATION */}
<section id="experience" className="max-w-6xl mx-auto px-6 py-12">
  <div className="backdrop-blur-lg bg-white/60 border border-gray-200 rounded-2xl p-8 shadow-lg">
    <h4 className="text-2xl font-semibold text-gray-900 mb-8">Experience & Education</h4>

    <div className="relative border-l border-gray-300 pl-6 space-y-8">
      {/* Item */}
      <div className="relative">
        <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-purple-400 shadow"></span>
        <div className="p-4 rounded-xl bg-white/70 border border-gray-200 backdrop-blur-md">
          <h5 className="font-medium text-gray-900">PrepPal — Cofounder & Developer</h5>
          <p className="text-sm text-gray-700 mt-1">
            Building an EdTech app for lecture transcription & summarization using AI.
          </p>
        </div>
      </div>

      {/* Item */}
      <div className="relative">
        <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 shadow"></span>
        <div className="p-4 rounded-xl bg-white/70 border border-gray-200 backdrop-blur-md">
          <h5 className="font-medium text-gray-900">Freelance Web Developer</h5>
          <p className="text-sm text-gray-700 mt-1">
            Delivered responsive websites, landing pages, and dashboards for small businesses & startups.
          </p>
        </div>
      </div>

      {/* Item */}
      <div className="relative">
        <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-purple-400 shadow"></span>
        <div className="p-4 rounded-xl bg-white/70 border border-gray-200 backdrop-blur-md">
          <h5 className="font-medium text-gray-900">University — Software Engineering</h5>
          <p className="text-sm text-gray-700 mt-1">
            Currently studying with a focus on web technologies, software architecture, and AI integration.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* CONTACT */}
<section id="contact" className="max-w-6xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* Contact Form */}
    <div className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-8 shadow-lg">
      <h4 className="text-2xl font-semibold text-gray-900">Get in touch</h4>
      <p className="mt-2 text-gray-700">
        I’m open to freelance work, collaborations, and new opportunities. 
        Send me a message and I’ll reply as soon as I can.
      </p>

      <form onSubmit={onContactSubmit} className="mt-6 space-y-4">
        <input
          required
          value={contactState.name}
          onChange={(e) => setContactState({ ...contactState, name: e.target.value })}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg ring-1 ring-gray-200 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 outline-none transition"
        />
        <input
          required
          type="email"
          value={contactState.email}
          onChange={(e) => setContactState({ ...contactState, email: e.target.value })}
          placeholder="Your email"
          className="w-full px-4 py-3 rounded-lg ring-1 ring-gray-200 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 outline-none transition"
        />
        <textarea
          required
          value={contactState.message}
          onChange={(e) => setContactState({ ...contactState, message: e.target.value })}
          placeholder="Message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg ring-1 ring-gray-200 bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 outline-none transition"
        />
        
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-purple-500  text-white font-medium shadow hover:opacity-90 transition"
          >
            Send message
          </button>
          <div className="text-sm text-gray-600">{status}</div>
        </div>
      </form>

      {/* Social Links */}
      <div className="mt-8 flex gap-4">
        <a href="https://github.com/prince24-web" aria-label="GitHub" className="p-2 rounded-lg ring-1 ring-gray-200 bg-white/70 hover:bg-purple-50 transition">
          <IconGithub />
        </a>
        <a href="https://x.com/Devprinze" aria-label="Twitter/X" className="p-2 rounded-lg ring-1 ring-gray-200 bg-white/70 hover:bg-purple-50 transition">
          <img src='/x.svg' alt='x'></img>
        </a>
        <a href="https://www.tiktok.com/@code_monarch1?_t=ZS-8zcwYMcWNZR&_r=1" aria-label="TikTok" className="p-2 rounded-lg ring-1 ring-gray-200 bg-white/70 hover:bg-purple-50 transition">
           <img src='/tiktok.svg' alt='tt' width='50' ></img>
        </a>
      </div>
    </div>

    {/* Quick Contact Card */}
    <div className="backdrop-blur-lg bg-white/70 border border-gray-200 rounded-2xl p-8 shadow-lg flex flex-col justify-center">
      <h5 className="text-xl font-semibold text-gray-900">Quick Contact</h5>
      <p className="text-sm text-gray-700 mt-3 flex items-center gap-2">
        📧 <a href="mailto:prince@example.com" className="text-purple-600 hover:underline">princechidera1007@gmail.com</a>
      </p>
      
      <p className="text-sm text-gray-700 mt-4">
        Or connect via <span className="text-purple-600 font-medium cursor-pointer"> <a href='https://github.com/prince24-web'>GitHub</a></span> / <span className="text-purple-600 font-medium cursor-pointer"><a href='https://x.com/Devprinze'>X</a></span> — links above.
      </p>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Prince Chidera. All rights reserved.</div>
      </footer>
    </main>
    </div>
  );
}
