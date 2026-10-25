import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const VIDEOS = [
  { title: 'Maldives, Asia', rating: 4, image: '/assets/home/video-1.png' },
  { title: 'Phuket, Thailand', rating: 5, image: '/assets/home/video-2.png' },
  { title: 'Maui, Hawaii, USA', rating: 5, image: '/assets/home/video-3.png' },
];

export default function ExploreMotionSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-main">
        <h2 className="mb-12 text-neutral-900">Explore Tripto in Motion</h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Video Player Area */}
          <div className="flex-1 relative aspect-video rounded-3xl overflow-hidden border-8 border-primary-200 shadow-xl group cursor-pointer">
            <Image
              src="/assets/home/video-main.png"
              alt="Main Video"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-12 left-12 text-white max-w-2xl">
              <h3 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                Step Into a world <br /> of Luxury
              </h3>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Immerse yourself in captivating visuals from our most iconic and indulgent destinations.
              </p>
              <button className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-medium transition-all transform hover:scale-105">
                Explore All Videos
              </button>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-full">
                <Play className="w-12 h-12 text-white fill-current" />
              </div>
            </div>
          </div>

          {/* Side Video List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full lg:w-64">
            {VIDEOS.map((video, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md transition-transform hover:-translate-y-1">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm font-medium truncate">{video.title}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/assets/home/star-icon.svg"
                        alt="star"
                        width={12}
                        height={12}
                        className={`${i < video.rating ? 'opacity-100' : 'opacity-30'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
