import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">QR menu SaaS</span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Turn your printed menu into a smart, contactless experience
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Create, update, and publish beautiful menus with QR codes. Real-time edits, analytics, translations, and more — all in a secure, green-first platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Create your menu
            </button>
            <button className="inline-flex items-center justify-center rounded-lg border border-emerald-200 px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
              Live demo
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <span>
              <span className="font-semibold text-emerald-700">Eco-friendly</span> digital-first menus
            </span>
            <span>Bank-grade security</span>
            <span>No app required</span>
          </div>
        </div>
        <div className="relative h-[420px] w-full rounded-2xl bg-white shadow-sm ring-1 ring-emerald-100">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/40 via-transparent to-white/10" />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 -z-[1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-40 bg-emerald-100/60 blur-3xl rounded-b-[100%]" />
        </div>
      </div>
    </section>
  );
}
