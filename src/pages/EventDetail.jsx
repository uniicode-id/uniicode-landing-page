import React, {useEffect, useState} from 'react';
import {Calendar, Clock, MapPin, Users, Share2, ChevronLeft, Gift, Trophy} from 'lucide-react';
import {useParams} from 'react-router';
import eventsData from '../data/events.json';
import poster1 from '/event-poster.png';
import poster2 from '/poster.png';
import speaker1 from '/speaker.png';
import logoDisplayGif from '/logo_art_display.gif';
import logoDisplayGif2 from '/logo_art_display_2.gif';
import {Link} from 'react-router';

const EventDetailPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const {slug} = useParams();
  const [currentEvent, setCurrentEvent] = useState(null);
  
  
  useEffect(() => {
    eventsData.events.forEach(event => {
      if (slug == event.slug) {
        setCurrentEvent(event);
      }
    })
  }, [slug]);
  
  if (currentEvent) {
    return (
      <div className="min-h-screen bg-[#101320] text-white">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96">
          <img
            src={logoDisplayGif2}
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
        
        <div className="container mx-auto px-4 -mt-20 relative">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Title Section */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600] mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentEvent.title}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#b6f600]"/>
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#b6f600]"/>
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#b6f600]"/>
                    <span>{currentEvent.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Speakers Section */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600] mb-8">
                <h2 className="text-xl font-bold mb-6 relative inline-block">
                  Featured Speakers
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#b6f600]"></div>
                </h2>
                <div className="flex justify-center gap-6 items-center">
                  {currentEvent.speakers.map((speaker, idx) => (
                    <div key={idx} className="text-center w-64">
                      <div className="mb-3 relative group">
                        <div
                          className="absolute inset-0 border-2 border-[#b6f600] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img
                          src={speaker1}
                          alt={speaker.name}
                          className="w-full aspect-square object-cover"
                        />
                      </div>
                      <h3 className="font-bold">{speaker.name}</h3>
                      <p className="text-sm text-slate-400">{speaker.role}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* currentEvent Posters */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600] mb-8">
                <h2 className="text-xl font-bold mb-6 relative inline-block">
                  Event Posters
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#b6f600]"></div>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {currentEvent.posters.map((poster, idx) => (
                    <div key={idx} className="relative group cursor-pointer" onClick={() => setSelectedImage(poster)}>
                      <div
                        className="absolute inset-0 bg-[#b6f600] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <img
                        src={poster1}
                        alt={`Event Poster ${idx + 1}`}
                        className="w-full aspect-[2/3] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Description Section */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600] mb-8">
                <h2 className="text-xl font-bold mb-4 relative inline-block">
                  About This Event
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#b6f600]"></div>
                </h2>
                <div className="space-y-4 text-slate-200">
                  {currentEvent.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Highlights Section */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600] mb-8">
                <h2 className="text-xl font-bold mb-4 relative inline-block">
                  Event Highlights
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#b6f600]"></div>
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {currentEvent.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 bg-[#b6f600] flex-shrink-0"/>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Giveaways & Prizes Section */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600]">
                <h2 className="text-xl font-bold mb-6 relative inline-block">
                  Giveaways & Prizes
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#b6f600]"></div>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Giveaways */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-[#b6f600]">Giveaways</h3>
                    <div className="space-y-4">
                      {currentEvent.giveaways.map((item, idx) => (
                        <div key={idx} className="flex gap-3">
                          <item.icon size={24} className="text-[#b6f600] flex-shrink-0"/>
                          <div>
                            <div className="font-bold">{item.title}</div>
                            <div className="text-sm text-slate-400">{item.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Prizes */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-[#b6f600]">Prizes</h3>
                    <div className="space-y-4">
                      {currentEvent.prizes.map((prize, idx) => (
                        <div key={idx} className="flex gap-3">
                          <prize.icon size={24} className="text-[#b6f600] flex-shrink-0"/>
                          <div>
                            <div className="font-bold">{prize.title}</div>
                            <div className="text-[#b6f600] font-bold">{prize.value}</div>
                            <div className="text-sm text-slate-400">{prize.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600] sticky top-4">
                <div className="mb-6">
                  <div className="text-2xl font-bold mb-2">{currentEvent.price}</div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Users size={16}/>
                    <span>{currentEvent.remainingSpots} spots remaining</span>
                  </div>
                </div>
                
                <Link to="https://forms.gle/EBhAqg3mkwiwYERr8" target="_blank">
                  <button
                    className="w-full py-3 px-6 mb-4 font-bold uppercase transition-colors bg-[#b6f600] text-black hover:bg-[#a5e000]"
                  >
                    Register Now
                  </button>
                </Link>
                
                <button
                  className="w-full py-3 px-6 border-2 border-slate-600 hover:border-slate-500 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={16}/>
                  Share Event
                </button>
              </div>
              
              {/* Location Preview */}
              <div className="bg-slate-800 p-6 border-2 border-[#b6f600]">
                <h3 className="font-bold mb-4">Location</h3>
                <div className="aspect-video bg-slate-700 mb-4">
                  <img
                    src="/api/placeholder/400/300"
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-slate-300">{currentEvent.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Poster Preview"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    );
  }
};

export default EventDetailPage;