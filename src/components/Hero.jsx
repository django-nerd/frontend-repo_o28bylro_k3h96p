import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 ring-1 ring-zinc-200/70 dark:ring-zinc-800">Interactive • Tech • Modern</span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Crafting delightful digital experiences.
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I build modern web apps with a focus on performance, accessibility, and playful interactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-medium shadow hover:bg-indigo-500 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur px-5 py-2.5 font-medium text-zinc-900 dark:text-zinc-50 ring-1 ring-zinc-200/80 dark:ring-zinc-800 hover:bg-white transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white dark:from-zinc-900/60 dark:to-zinc-900" />
    </section>
  );
}
