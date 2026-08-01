import { createFileRoute } from "@tanstack/react-router";
import impactPortrait from "@/assets/impact-portrait.jpg";
import ecosystemVisual from "@/assets/ecosystem-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pink Care Token ($PCAT) — Dignity in Every Token" },
      {
        name: "description",
        content:
          "Pink Care Token ($PCAT) is a redemption-only social impact token on BNB Smart Chain, pegged to a year's supply of sanitary pads for girls affected by period poverty.",
      },
      {
        property: "og:title",
        content: "Pink Care Token ($PCAT) — Dignity in Every Token",
      },
      {
        property: "og:description",
        content:
          "Pink Care Token ($PCAT) is a redemption-only social impact token on BNB Smart Chain, pegged to a year's supply of sanitary pads.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-soft-pink font-sans text-slate-900">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-widest mb-6">
            On BNB Smart Chain
          </span>
          <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] text-dusty-rose mb-8">
            Dignity in every <span className="italic">token.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
            $PCAT is the first redemption-only social impact token pegged to a
            full year's supply of sanitary products. Ending period poverty
            through blockchain transparency.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-dusty-rose">1:1 Year</span>
              <span className="text-xs uppercase tracking-tighter text-slate-400 font-bold">
                Pegged Value
              </span>
            </div>
            <div className="w-px h-12 bg-slate-200 mx-4" />
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-dusty-rose">0% Fiat</span>
              <span className="text-xs uppercase tracking-tighter text-slate-400 font-bold">
                Market Volatility
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={impactPortrait}
            alt="A young student whose education is supported by Pink Care Token"
            className="w-full aspect-[4/5] object-cover bg-rose-100 rounded-3xl outline outline-1 -outline-offset-1 outline-black/5 overflow-hidden shadow-2xl shadow-rose-900/10"
            width={1200}
            height={1504}
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-rose-50">
            <p className="text-sm italic font-serif text-slate-700 leading-relaxed">
              "Access to hygiene products isn't a luxury. $PCAT ensures my
              education isn't interrupted by a natural cycle."
            </p>
            <p className="mt-4 text-xs font-bold text-brand-pink uppercase tracking-widest">
              — Amara, 16
            </p>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section id="mission" className="bg-white py-24 border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl text-dusty-rose mb-6">
              Period poverty keeps girls out of school.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Around the world, millions of girls miss school every month because
              they lack access to sanitary products. In many developing countries,
              a single pack of pads can cost a full day's wage, forcing families
              to choose between food, school fees, and hygiene.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Pink Care Token was created to break this cycle by ensuring that aid
              reaches the people who need it most — with full transparency, no
              currency volatility, and no middlemen.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-dusty-rose mb-4">
              The Lifecycle of Care
            </h2>
            <p className="text-slate-500 max-w-xl">
              How $PCAT transforms digital value into physical health essentials
              for women worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="size-12 bg-soft-pink rounded-xl flex items-center justify-center text-brand-pink font-serif text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-dusty-rose">Issue & Peg</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                $PCAT tokens are minted on BNB Smart Chain. Each token is strictly
                backed by the cost of one year's supply of high-quality sanitary
                pads.
              </p>
            </div>

            <div className="space-y-6">
              <div className="size-12 bg-soft-pink rounded-xl flex items-center justify-center text-brand-pink font-serif text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-dusty-rose">
                Direct Distribution
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Tokens are sent directly to the digital wallets of women and girls
                in partnership with local schools and community NGOs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="size-12 bg-soft-pink rounded-xl flex items-center justify-center text-brand-pink font-serif text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-dusty-rose">
                Physical Redemption
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Recipients exchange $PCAT for physical products at certified local
                suppliers. Suppliers then redeem tokens for funding to restock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="bg-soft-pink py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-dusty-rose mb-4">
              A Closed-Loop Ecosystem
            </h2>
            <p className="text-slate-500 max-w-xl">
              $PCAT never leaves its intended purpose. Local suppliers, NGOs, and
              schools form a trusted network that turns digital value into
              real-world dignity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-dusty-rose">
                Local Suppliers
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vetted merchants in target communities accept $PCAT as payment for
                sanitary products, receiving stable funding through the
                redemption vault.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-dusty-rose">
                Education Partners
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Schools and NGOs distribute tokens alongside menstrual hygiene
                education, ensuring girls understand their health and stay in
                class.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-dusty-rose">
                Donor Transparency
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every token and redemption is recorded on BNB Smart Chain, so
                donors can follow their contribution from wallet to classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Mechanics */}
      <section id="token" className="py-24 max-w-7xl mx-auto px-8">
        <div className="bg-dusty-rose rounded-3xl p-8 md:p-16 text-white grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-6">Immutable Transparency</h2>
            <p className="text-rose-100/80 mb-8">
              Unlike traditional charities, $PCAT allows donors to track the
              exact path of their impact. No leakage, no middlemen, just direct
              support.
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-rose-700">
                <span className="font-medium">Network</span>
                <span className="opacity-80">BNB Smart Chain (BEP-20)</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-rose-700">
                <span className="font-medium">Token Type</span>
                <span className="opacity-80">Redemption-Only Asset</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-rose-700">
                <span className="font-medium">Impact Target</span>
                <span className="opacity-80">1 Million Girls by 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <img
              src={ecosystemVisual}
              alt="Global network of social impact partners connected through Pink Care Token"
              className="w-full aspect-video object-cover bg-white/10 rounded-xl mb-6"
              loading="lazy"
              width={944}
              height={704}
            />
            <h4 className="font-serif text-xl mb-3 italic">The $PCAT Vault</h4>
            <p className="text-sm text-rose-100/60 leading-relaxed">
              Funds are held in a transparent smart contract, released only when
              a merchant verifies a physical product handover via our proprietary
              redemption dApp.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section id="get-involved" className="bg-dusty-rose text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Join the mission to end period poverty.
          </h2>
          <p className="text-rose-100/80 max-w-2xl mx-auto mb-10">
            Whether you contribute, partner, or share the story, every action
            helps a girl stay in school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-white text-dusty-rose rounded-full font-semibold hover:bg-soft-pink transition-all"
            >
              Fund a Year of Care
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Read the Whitepaper
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
