import { QrCode, ShieldCheck, Sparkles, BarChart3 } from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Instant QR Codes",
    desc: "Generate branded QR codes for tables, counters, and takeout in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Enterprise-grade infrastructure with role-based access and SSL everywhere.",
  },
  {
    icon: BarChart3,
    title: "Menu Analytics",
    desc: "See views by location, time, and device. Learn what dishes get attention.",
  },
  {
    icon: Sparkles,
    title: "Live Editing",
    desc: "Update prices and items instantly without reprinting codes — changes go live.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Built for modern hospitality</h2>
          <p className="mt-3 text-gray-600">Everything you need to launch a beautiful QR code menu.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
