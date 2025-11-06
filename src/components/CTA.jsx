export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-8 sm:p-12 text-white">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(white 1px, transparent 1px)', backgroundSize:'20px 20px'}} />
          <div className="relative">
            <h3 className="text-2xl font-bold">Ready to go contactless?</h3>
            <p className="mt-3 text-emerald-50">Create your first QR code menu in minutes — no credit card required.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Get started free</button>
              <button className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Book a demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
