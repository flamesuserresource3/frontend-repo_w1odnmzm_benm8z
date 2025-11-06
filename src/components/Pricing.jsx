export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Simple pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you need advanced features.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-2 text-sm text-gray-600">For cafes testing digital menus</p>
            <div className="mt-6 text-4xl font-extrabold text-gray-900">$0</div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>1 location</li>
              <li>Unlimited menu items</li>
              <li>Basic QR generator</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Get started</button>
          </div>
          {/* Pro */}
          <div className="rounded-2xl bg-emerald-600 p-6 text-white shadow-sm ring-1 ring-emerald-700">
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="mt-2 text-sm text-emerald-100">For growing restaurants</p>
            <div className="mt-6 text-4xl font-extrabold">$19<span className="text-base font-medium">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-emerald-100">
              <li>Up to 5 locations</li>
              <li>Branding & themes</li>
              <li>Analytics dashboard</li>
              <li>Live editing</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-white px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Start Pro</button>
          </div>
          {/* Business */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <h3 className="text-lg font-semibold text-gray-900">Business</h3>
            <p className="mt-2 text-sm text-gray-600">For multi-location brands</p>
            <div className="mt-6 text-4xl font-extrabold text-gray-900">$49<span className="text-base font-medium">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>Unlimited locations</li>
              <li>Role-based access</li>
              <li>Priority support</li>
              <li>API access</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Talk to sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
