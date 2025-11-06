import { QrCode, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
            <QrCode className="h-5 w-5" />
          </span>
          <span className="font-semibold text-gray-900 text-lg">GreenMenu</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-emerald-700">
            <LogIn className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
