export function Footer() {
  return (
    <footer className="py-12 border-t border-rose-200 bg-soft-pink">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-brand-pink rounded-full" />
          <span className="font-serif italic text-lg font-bold text-dusty-rose">
            Pink Care Token
          </span>
        </div>
        <p className="text-xs text-slate-400 uppercase tracking-widest">
          © 2024 Pink Care Initiative. Empowering through Blockchain.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            aria-label="Twitter"
            className="size-5 bg-slate-200 rounded-full hover:bg-brand-pink transition-colors"
          />
          <a
            href="#"
            aria-label="Discord"
            className="size-5 bg-slate-200 rounded-full hover:bg-brand-pink transition-colors"
          />
          <a
            href="#"
            aria-label="Telegram"
            className="size-5 bg-slate-200 rounded-full hover:bg-brand-pink transition-colors"
          />
        </div>
      </div>
    </footer>
  );
}
