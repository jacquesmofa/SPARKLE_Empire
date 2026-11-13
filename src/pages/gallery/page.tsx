import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SiteGallery from '../../components/feature/SiteGallery';

// Gallery: albums in src/content/gallery.json, editorial grid in sky blue + teal.
export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery | Sparkle Empire Cleaning';
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-36 pb-20 px-4 bg-gradient-to-br from-sky-700 via-sky-600 to-teal-500 text-white text-center">
        <p className="uppercase tracking-[0.25em] text-sm font-semibold text-teal-100">Gallery</p>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3">See the Sparkle</h1>
        <p className="mt-5 text-lg text-white/90 max-w-xl mx-auto">Homes and workplaces we care for across Toronto and the GTA. Tap any photo to see it full size.</p>
      </section>
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <SiteGallery
            note="These pictures are illustrations until our own job photos are added."
            theme={{ layout: 'editorial', ink: '#0c4a6e', muted: '#475569', accent: '#0284C7', accentInk: '#ffffff', tabBg: '#e0f2fe', radius: '1.5rem', headingClass: 'font-display' }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
