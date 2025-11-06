export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {year} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-zinc-900 dark:hover:text-zinc-200">Home</a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-200">Projects</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
