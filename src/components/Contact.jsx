import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Let’s connect</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">Have a project in mind or just want to say hi?</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                <textarea required rows="4" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5">
                <Send size={16} /> Send
              </button>
              {status && <p className="text-sm text-green-600 dark:text-green-400">{status}</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-zinc-900 dark:to-zinc-900 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Email</p>
                <a href="mailto:hello@example.com" className="font-medium text-zinc-900 dark:text-zinc-100">hello@example.com</a>
              </div>
            </div>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
              Prefer email? I usually respond within 1-2 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
