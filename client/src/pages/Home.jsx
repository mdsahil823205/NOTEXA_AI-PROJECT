import React from 'react'
import NavBar from '../Components/home/NavBar'
import HomeHero from '../Components/home/HomeHero'
import HomeFeature from '../Components/home/HomeFeature';
import Footer from '../Components/home/Footer';

const Home = () => {
  const features = [
    {
      id: 1,
      title: "Exam Notes",
      description: "High-yield exam-oriented notes with revision points.",
      icon: "📘"
    },
    {
      id: 2,
      title: "Project Notes",
      description: "Well-structured content for assignments and projects.",
      icon: "📁"
    },
    {
      id: 3,
      title: "5-Min Quick Revision",
      description: "Generate lightning-fast bullet points for last-minute exam prep.",
      icon: "⚡"
    },
    {
      id: 4,
      title: "PDF Download",
      description: "Download clean, printable PDFs instantly.",
      icon: "⬇️"
    }
  ];
  return (
    <div className='min-h-screen bg-linear-to-br from-[#050505]  via-[#0a0a1a]  to-[#000000] 
      px-4 sm:px-6 py-8 select-none'>
      <NavBar />
      <HomeHero />
      <section className=" max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-4 gap-10">
        {features.map((e) => {
          return <HomeFeature icon={e.icon} title={e.title} desc={e.description} key={e.id} />
        })}
      </section>
      <Footer />
    </div>

  )
}

export default Home