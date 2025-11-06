import { Code2, Globe, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'A performant analytics dashboard with real-time updates and beautiful charts.',
    icon: Layers,
    link: '#'
  },
  {
    title: 'Landing Page Builder',
    description: 'Composable sections and animations to craft high-converting marketing pages.',
    icon: Globe,
    link: '#'
  },
  {
    title: 'Developer Toolkit',
    description: 'CLI + UI tools that speed up everyday development workflows.',
    icon: Code2,
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Highlighted Projects</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">A few things I loved building recently.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, icon: Icon, link }) => (
            <a key={title} href={link} className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition transform hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-indigo-600 group-hover:text-indigo-700">Open →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
