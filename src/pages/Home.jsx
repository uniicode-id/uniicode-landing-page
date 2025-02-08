import logo from '/logo.png';
import speaker from '/speaker.png';
import Button from "@components/Button.jsx";
import {Link} from 'react-router';

function Home() {
  const events = [
    {
      id: 1,
      title: 'UNIICODE REBRAND Conference',
      image: {logo},
      date: 'March 15, 2024',
      slug: "uniicode-rebrand-conference",
    },
  ];
  
  return (
    <section className="font-pixel text-2xl">
      <section className="flex flex-col items-center justify-center w-full h-screen bg-brand-dark gap-10">
        <img src={logo} alt="logo"/>
        <Button>Join Us</Button>
      </section>
      <div className="bg-[#101320] text-white">
        {/* About Us Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 uppercase relative inline-block">
              About Us
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#b6f600]"></div>
            </h2>
            
            <div className="bg-slate-800 p-6 border-2 border-[#b6f600] relative">
              {/* Pixel corners */}
              <div className="absolute w-2 h-2 bg-[#b6f600] top-0 left-0"></div>
              <div className="absolute w-2 h-2 bg-[#b6f600] top-0 right-0"></div>
              <div className="absolute w-2 h-2 bg-[#b6f600] bottom-0 left-0"></div>
              <div className="absolute w-2 h-2 bg-[#b6f600] bottom-0 right-0"></div>
              
              <p className="text-2xl leading-relaxed mb-4">
                Welcome to our pixelated universe! We are a passionate community dedicated to celebrating the art and
                culture of pixel-based creativity. Our journey began with a simple love for retro aesthetics and has
                grown into a vibrant platform where artists, gamers, and digital enthusiasts come together.
              </p>
              <p className="text-2xl leading-relaxed">
                Through our events and galleries, we aim to showcase the beauty of pixel art while building meaningful
                connections within our community. Join us in exploring the endless possibilities of this unique digital
                art form.
              </p>
            </div>
          </div>
        </section>
        
        {/* Event Gallery Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 uppercase relative inline-block">
            Upcoming Event
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#b6f600]"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link to={`/events/${event.slug}`}>
                <div
                  key={event.id}
                  className="bg-slate-800 p-4 border-2 border-[#b6f600] group hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="relative mb-4 overflow-hidden">
                    <img
                      src={speaker}
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
        </section>
      </div>
    </section>
  )
}

export default Home;
