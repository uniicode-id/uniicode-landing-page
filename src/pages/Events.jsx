import {ChevronLeft} from "lucide-react";
import React from "react";
import {Link} from 'react-router'
import logo from '/logo.png'
import eventsData from '../data/events.json'

function Events() {
  return (
    <section className="bg-brand-dark text-white font-pixel">
      <div className="bg-[#101320] text-white">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96">
          <img
            src={logo}
            alt="Event Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101320] to-transparent"/>
          
          <button
            className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700 transition-colors">
            <ChevronLeft size={20}/>
            
            <span>Back</span>
          </button>
        </div>
      </div>
      <div className="relative -mt-20 flex justify-center items-center px-20 mb-20">
        <p className="w-2/3 text-4xl leading-relaxed mb-4 text-center">
          Welcome to our pixelated universe! We are a passionate community dedicated to celebrating the art and culture
          of pixel-based creativity. Our journey began with a simple love for retro aesthetics and has grown into a
          vibrant platform where artists, gamers, and digital enthusiasts come together.
        </p>
      </div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold mb-12 uppercase relative inline-block">
          Event
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#b6f600]"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.events.map((event) => (
            <Link to={`/events/${event.slug}`}>
              <div
                key={event.id}
                className="bg-slate-800 p-4 border-2 border-[#b6f600] group hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="relative mb-4 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full object-cover aspect-video"
                  />
                  <div
                    className="absolute inset-0 bg-[#b6f600] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-slate-400">{event.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events;