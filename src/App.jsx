export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Lingo Loop</span>
        <a href="#cta" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Start Free
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-blue-600 font-semibold mb-4">Language Learning</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Actually speak a new language in 3 months</h1>
        <p className="text-lg text-slate-600 mb-10">Short daily lessons built around real conversations, not flashcards.</p>
        <a href="#cta" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Start Learning Free
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Real Conversations</h3>
          <p className="text-slate-600">Practice dialogue you’ll actually use.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Speech Recognition</h3>
          <p className="text-slate-600">Get instant feedback on your pronunciation.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Bite-Sized Lessons</h3>
          <p className="text-slate-600">Ten minutes a day, built into your routine.</p>
        </div>
      </section>

      <section id="cta" className="bg-blue-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Fluency starts with one lesson</h2>
        <p className="mb-8 text-blue-100">Just 10 minutes a day.</p>
        <a href="#" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Start Learning Free
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Lingo Loop. All rights reserved.
      </footer>
    </div>
  )
}
