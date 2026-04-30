import React from 'react'
import Conteinar from '../Conteinar'
import Button from '../Button'




const stats = [
  { value: '30M+', label: 'Riders Worldwide' },
  { value: '300+', label: 'Cities Served' },
  { value: '700M+', label: 'Trips Completed' },
  { value: '150M+', label: 'kg CO₂ Saved' },
]

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.71.71m13.66 13.66.71.71M3 12H4m16 0h1M4.22 19.78l.71-.71M19.07 4.93l-.71.71" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Sustainability',
    desc: 'Every ride on Lime replaces a car trip, cutting carbon emissions and building a cleaner urban future for everyone.',
    bg: 'bg-lime-50',
    border: 'border-lime-200',
    text: 'text-lime-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Safety',
    desc: 'Helmet programs, in-app safety checks, and ride-safe education — because getting there safely matters most.',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Community',
    desc: 'Local partnerships, equitable access programs, and city collaboration — Lime is built for and with the communities it serves.',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
  },
]

const timeline = [
  { year: '2017', event: 'Lime founded in San Mateo, CA, launching the first dockless e-scooter service.' },
  { year: '2018', event: 'Expanded to 100+ cities across North America, Europe & Australia.' },
  { year: '2020', event: 'Surpassed 100 million rides and launched the Gen4 e-scooter & e-bike fleet.' },
  { year: '2022', event: 'Reached carbon-neutral operations and partnered with cities for green corridors.' },
  { year: '2024', event: 'Active in 300+ cities with 30M+ riders and 700M+ lifetime trips completed.' },
]

const team = [
  { name: 'Wayne Ting', role: 'CEO', initials: 'WT' },
  { name: 'Joe Kraus', role: 'President', initials: 'JK' },
  { name: 'Maria Nuñez', role: 'Chief Sustainability Officer', initials: 'MN' },
  { name: 'David Richter', role: 'Chief Revenue Officer', initials: 'DR' },
]

// ─── Sections ──────

const Hero = () => (
  <section className="relative  flex items-center overflow-hidden bg-[#353434] py-25">
    {/* Decorative green blobs */}
    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#00d64e] opacity-20 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#00d64e] opacity-10 blur-2xl pointer-events-none" />

    <Conteinar className="relative z-10 py-24">
      <p className="text-[#00d64f] font-semibold text-sm tracking-widest uppercase mb-3">About Lime</p>
      <h1 className="text-white font-extrabold text-5xl sm:text-6xl leading-tight max-w-2xl">
        Moving cities <br />
        <span className="text-[#00d64f]">without the carbon.</span>
      </h1>
      <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
        Lime builds technology-powered transportation solutions that are shared, affordable, and emissions-free — so everyone can move freely while the planet breathes easier.
      </p>
      <Button btnText={'Our Mission ↓'} className={'mt-5'}/>
    </Conteinar>
  </section>
)

const Stats = () => (
  <section className="bg-[#555] py-14">
    <Conteinar>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-white font-extrabold text-4xl sm:text-5xl">{s.value}</p>
            <p className="text-black/70 font-medium text-sm mt-1 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </Conteinar>
  </section>
)

const Mission = () => (
  <section id="mission" className="py-24 bg-white">
    <Conteinar>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#00d64f] font-semibold text-sm tracking-widest uppercase mb-3">Our Mission</p>
          <h2 className="text-gray-900 font-extrabold text-4xl leading-tight mb-6">
            Cities need a smarter way to move.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Traffic congestion, pollution, and inequitable transit are problems every city faces. Lime exists to fix that — one shared ride at a time. We put affordable, clean transportation within reach of every person in every neighborhood.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            By replacing short car trips with e-scooters and e-bikes, we're proving that sustainable urban mobility isn't just possible — it's already here.
          </p>
        </div>

        {/* Visual card */}
        <div className="relative">
          <div className="bg-gray-950 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00d64f] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <svg viewBox="0 0 24 24" fill="none" stroke="#00d64f" strokeWidth={1.5} className="w-14 h-14 mb-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <blockquote className="text-2xl font-bold leading-snug mb-4">
              "We exist to transform urban transportation — for people and for the planet."
            </blockquote>
            <p className="text-gray-400 text-sm">— Lime Mission Statement</p>
          </div>
        </div>
      </div>
    </Conteinar>
  </section>
)

const Values = () => (
  <section className="py-24 bg-gray-50">
    <Conteinar>
      <div className="text-center mb-14">
        <p className="text-[#00d64f] font-semibold text-sm tracking-widest uppercase mb-2">Why Lime</p>
        <h2 className="text-gray-900 font-extrabold text-4xl">Our Core Principles</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className={`${v.bg} border ${v.border} rounded-3xl p-8 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300`}
          >
            <div className={`${v.text} w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm`}>
              {v.icon}
            </div>
            <h3 className="text-gray-900 font-bold text-xl">{v.title}</h3>
            <p className="text-gray-600 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </Conteinar>
  </section>
)

const Timeline = () => (
  <section className="py-24 bg-white">
    <Conteinar>
      <div className="text-center mb-14">
        <p className="text-[#00d64f] font-semibold text-sm tracking-widest uppercase mb-2">Our Journey</p>
        <h2 className="text-gray-900 font-extrabold text-4xl">How We Got Here</h2>
      </div>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gray-200 hidden sm:block" />
        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-6 items-start">
              {/* Dot */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00d64f] flex items-center justify-center text-black font-extrabold text-xs shrink-0 z-10">
                  {item.year.slice(2)}
                </div>
              </div>
              {/* Content */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex-1 hover:shadow-md transition-shadow">
                <span className="text-[#00d64f] font-bold text-sm">{item.year}</span>
                <p className="text-gray-700 mt-1 leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Conteinar>
  </section>
)

const Team = () => (
  <section className="py-24 bg-gray-950">
    <Conteinar>
      <div className="text-center mb-14">
        <p className="text-[#00d64f] font-semibold text-sm tracking-widest uppercase mb-2">Leadership</p>
        <h2 className="text-white font-extrabold text-4xl">Meet the Team</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#00d64f]/40 transition-colors duration-300 group"
          >
            <div className="w-20 h-20 rounded-full bg-[#]/10 border-2 border-[#00d64f]/30 group-hover:border-[#00d64f] transition-colors flex items-center justify-center mb-5">
              <span className="text-[#00d64f] font-extrabold text-xl">{member.initials}</span>
            </div>
            <p className="text-white font-bold text-base">{member.name}</p>
            <p className="text-gray-400 text-sm mt-1">{member.role}</p>
          </div>
        ))}00d64f
      </div>
    </Conteinar>
  </section>
)

const CTA = () => (
  <section className="py-24 bg-[#00d64f]">
    <Conteinar>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-black font-extrabold text-4xl sm:text-5xl mb-6 leading-tight">
          Ready to ride green?
        </h2>
        <p className="text-black/70 text-lg mb-10">
          Join 30 million riders already choosing a cleaner, smarter way to get around.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
          >
            Download the App
          </a>
          <a
            href="#"
            className="bg-white hover:bg-gray-50 text-black font-bold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg border border-black/10"
          >
            Find a Lime Near You
          </a>
        </div>
      </div>
    </Conteinar>
  </section>
)

// Main Component 

const About = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Values />
      <Timeline />
      <Team />
      <CTA />
    </>
  )
}

export default About