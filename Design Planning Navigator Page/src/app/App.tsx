import { CheckCircle2 } from 'lucide-react';
import imgRectangle5659 from "../imports/Home/36bcf3630d13ff3f404d2805c409bf5bbe2d20e4.png";
import imgArtwork from "../imports/Home/d70b6197ad273b027963ac160c78678dc775b118.png";
import imgArtwork1 from "../imports/Home/6c1aa2c51987151c9bf9d4ea3bd39d601706d308.png";
import imgIStock1 from "../imports/Home/b14961b507bf5370be68261dc5f5f279c03749c3.png";
import imgIStock2 from "../imports/Home/4cfd69a36f3cc4e231bb4fcf1e2f4e9a7d758e8e.png";
import imgMacbook from "../imports/Home/Macbook.png";
import { useState, useEffect } from 'react';

function App() {
  const [showStickyFooter, setShowStickyFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer after scrolling past hero section (~60vh)
      setShowStickyFooter(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartApplication = () => {
    // This would link to the existing questionnaire
    window.location.href = 'https://tamkeen22.github.io/Planning-Navigator-New/';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero with aerial photo background */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614548323185-4b6f4edcf9e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMHJlc2lkZW50aWFsJTIwbmVpZ2hib3Job29kJTIwYWVyaWFsfGVufDF8fHx8MTc3NjI1MTUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        >
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(0,0,0,0.65)] via-[rgba(0,0,0,0.4)] to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 h-full flex items-center">
          <div className="max-w-[520px]">
            <a href="#" className="text-[#1b76d8] text-xs underline mb-3 inline-block">
              Planning Navigator
            </a>
            <h1 className="text-white text-[42px] md:text-[48px] font-bold leading-[1.1] mb-6">
              Got an idea for your home or land?
            </h1>
            <p className="text-white text-[15px] leading-[1.7] max-w-[420px] mb-6">
              Whether it's an extension, loft conversion, annex, garage, outbuilding, or a change of use — answer a few simple questions to understand what may be possible for your project.
            </p>
            <button
              onClick={handleStartApplication}
              className="bg-[#1b76d8] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1565c0] transition-colors"
            >
              Start or view your application
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: What this check will help you do */}
      <section className="bg-[#e9f4ff] py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#1b76d8] text-[11px] uppercase tracking-[0.08em] mb-2">
              Planning Portal
            </p>
            <h2 className="text-[#0f213a] text-[28px] md:text-[32px] font-bold">
              What this check will help you do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              image={imgRectangle5659}
              title="Check property & location restrictions"
              description="Listed buildings, conservation areas, protected land, and local rules may limit what's permitted."
            />
            <InfoCard
              image={imgRectangle5659}
              title="Identify your project type"
              description="We'll narrow down whether you're planning an extension, conversion, garage, porch, or outbuilding."
            />
            <InfoCard
              image={imgRectangle5659}
              title="Understand the specific limits"
              description="Height, size, storeys, roof changes, garden coverage, and boundary distances — we'll check what matters."
            />
            <InfoCard
              image={imgRectangle5659}
              title="Spot wider site issues"
              description="Flood risk, highways, trees, ecology, contamination, and archaeology can all affect whether work can go ahead."
            />
          </div>
        </div>
      </section>

      {/* Section 3: By the end, you'll understand */}
      <section className="bg-gradient-to-r from-[#1a3faa] to-[#2e5fd9] py-16 md:py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - text content */}
            <div className="text-white">
              <h2 className="text-[28px] md:text-[32px] font-bold leading-[1.3] mb-8 max-w-[340px]">
                By the end, you'll understand whether your project
              </h2>
              <div className="space-y-5">
                <BulletPoint text="Is likely permitted development" />
                <BulletPoint text="May need planning permission" />
                <BulletPoint text="Needs Building Control approval" />
                <BulletPoint text="Would benefit from professional advice" />
              </div>
            </div>

            {/* Right column - Interactive House mockup */}
            <div className="relative -my-8 lg:-my-16">
              <div className="img-macbook">
                <img
                  src={imgMacbook}
                  alt="Interactive House tool interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive House feature callout */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Interactive House mockup */}
            <div className="order-2 lg:order-1">
              <div className="img-macbook-IH">
                <img
                  src={imgArtwork}
                  alt="Interactive House visualization"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right column - text content */}
            <div className="order-1 lg:order-2">
              <p className="text-[#1b76d8] text-[11px] uppercase tracking-[0.08em] mb-3">
                Still exploring ideas?
              </p>
              <h2 className="text-[#0f213a] text-[28px] md:text-[32px] font-bold mb-6">
                Interactive House
              </h2>
              <p className="text-[#727272] text-[15px] leading-[1.7] mb-8">
                The Interactive House is a great place to start. It gives you a simple visual way to explore common home improvement projects before using this more detailed check.
              </p>
              <a
                href="https://interactive.planningportal.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1b76d8] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#1565c0] transition-colors"
              >
                Visit Interactive House →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Before you start */}
      <section className="bg-[#f5f5f5] py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - image */}
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1647085215540-ba65ac35f182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZXZpZXdpbmclMjBhcmNoaXRlY3R1cmFsJTIwcGxhbnMlMjBsYXB0b3B8ZW58MXx8fHwxNzc2MjUxNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person reviewing architectural plans"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right column - text content */}
            <div>
              <h2 className="text-[#0f213a] text-[28px] font-bold mb-4">
                Before you start
              </h2>
              <p className="text-[#727272] text-[15px] mb-6">
                To get the best result, it helps to have:
              </p>
              <div className="space-y-4">
                <ChecklistItem text="A simple idea of what you want to build, change, or convert" />
                <ChecklistItem text="Rough measurements — height, width, depth, or distance to boundaries" />
                <ChecklistItem text="Useful site details — nearby trees, previous extensions, access, or anything unusual" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Need help strip */}
      <section className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[#0f213a] text-sm font-semibold mb-2">Need help?</p>
          <p className="text-[#727272] text-[13px] leading-[1.6]">
            Don't worry if you have rough estimates — this tool is designed to help you explore what may be possible before committing to final plans.
          </p>
        </div>
      </section>

      {/* Sticky footer CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#1a1a2e] z-50 transition-transform duration-300 ${showStickyFooter ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-white text-[13px] md:text-sm max-w-[600px] leading-[1.6]">
              The questions are designed for homeowners, landowners, and anyone without planning experience, so you do not need to know technical terms or planning rules before you begin.
            </p>
            <button
              onClick={handleStartApplication}
              className="bg-white text-[#1a1a2e] px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap shrink-0"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component: Info Card for section 2
function InfoCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.05)] p-5 flex gap-6 items-start">
      <img
        src={image}
        alt={title}
        className="w-[120px] h-[90px] object-cover rounded-lg shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-[#0f213a] text-[15px] font-bold mb-2">
          {title}
        </h3>
        <p className="text-[#727272] text-[13px] leading-[1.6]">
          {description}
        </p>
      </div>
    </div>
  );
}

// Component: Bullet point with check icon
function BulletPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
        <CheckCircle2 className="w-4 h-4 text-white" />
      </div>
      <p className="text-white text-[15px] font-semibold leading-[1.6]">
        {text}
      </p>
    </div>
  );
}

// Component: Checklist item for section 5
function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-5 h-5 rounded-full bg-[#1b76d8] flex items-center justify-center mt-0.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
      </div>
      <p className="text-[#0f213a] text-[14px] leading-[1.6]">
        {text}
      </p>
    </div>
  );
}

export default App;
