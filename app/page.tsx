export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Why Your{" "}
          <span className="text-[#58a6ff]">API Bill Spiked</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically correlates cost spikes with Git deployments and pinpoints
          the exact endpoints or features that caused the increase — across OpenAI,
          Stripe, AWS, and more.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📈", title: "Spike Detection", body: "Instant alerts when API costs jump beyond your baseline threshold." },
            { icon: "🔗", title: "Deployment Correlation", body: "Links every cost change to the Git commit or deploy that triggered it." },
            { icon: "🎯", title: "Endpoint Attribution", body: "Breaks down spend by endpoint so you fix the right thing first." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#6e7681] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Connect OpenAI, Stripe, AWS & more",
              "Git deployment correlation",
              "Per-endpoint cost breakdown",
              "Slack & email alerts",
              "30-day usage history",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors text-center"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which APIs are supported?",
              a: "OpenAI, Stripe, AWS (CloudWatch), and any API that supports webhooks or usage export. More integrations are added regularly."
            },
            {
              q: "How does deployment correlation work?",
              a: "You connect your GitHub or GitLab repo. We match deployment timestamps against cost timeline data to surface which release preceded each spike."
            },
            {
              q: "Is my API key data secure?",
              a: "Keys are encrypted at rest with AES-256 and never logged. We only request read-only scopes and you can revoke access at any time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Cost Spike Explainer. All rights reserved.
      </footer>
    </main>
  );
}
