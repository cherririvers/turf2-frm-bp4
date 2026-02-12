import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://theturf360.com';
const DEFAULT_IMAGE = `${BASE_URL}/cricket.jpeg`;
const SITE_NAME = 'Turf 360';

export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('Turf 360') ? title : `${title} | Turf 360`;
    document.title = fullTitle;

    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', canonical || BASE_URL, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:site_name', SITE_NAME, 'property');

    updateMetaTag('twitter:title', fullTitle, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:url', canonical || BASE_URL, 'name');

    if (canonical) {
      updateCanonicalLink(canonical);
    }

    return () => {};
  }, [title, description, keywords, canonical, ogImage, ogType, noIndex]);
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function updateCanonicalLink(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

export const seoConfig = {
  home: {
    title: "Turf 360 - Noida's Premier Sports Arena | Football, Cricket, Pickleball, Snooker",
    description: "Turf 360 is Noida's premier sports arena offering premium artificial turf for Football, Box Cricket, Pickleball & Snooker. Book your slot now! Open 5 AM - 2 AM daily. Located in Sector 150, Noida.",
    keywords: "turf booking noida, football turf noida, cricket turf noida, box cricket noida, pickleball court noida, snooker noida, sports facility sector 150, turf 360, artificial turf noida, best turf in noida, sports ground near me",
    canonical: `${BASE_URL}/`,
  },
  sports: {
    title: "Sports at Turf 360 - Football, Box Cricket, Pickleball, Snooker in Noida",
    description: "Play Football, Box Cricket, Pickleball & Snooker on premium artificial turf at Turf 360 Noida. Professional floodlights for night games. Book 5-a-side football, 7-a-side football, cricket nets & more.",
    keywords: "football turf noida, box cricket noida, pickleball noida, snooker noida, futsal noida, 5-a-side football noida, 7-a-side football, cricket practice nets noida, night cricket noida, sports booking noida",
    canonical: `${BASE_URL}/sports`,
  },
  amenities: {
    title: "Premium Amenities at Turf 360 Noida - Floodlights, Cafe, Parking & More",
    description: "Turf 360 offers professional floodlights, safe environment for women, on-site cafe, clean washrooms, ample parking & flexible booking. Open 5 AM - 2 AM daily in Sector 150, Noida.",
    keywords: "sports facility amenities noida, floodlight turf noida, night sports noida, women-friendly sports facility, sports cafe noida, 24 hour turf booking, late night sports noida",
    canonical: `${BASE_URL}/amenities`,
  },
  corporate: {
    title: "Corporate Sports Events & Team Building at Turf 360 Noida",
    description: "Host corporate sports events, team building activities & employee engagement programs at Turf 360. Custom tournaments, catering, event management for companies in Noida & Greater Noida.",
    keywords: "corporate sports events noida, team building activities noida, corporate cricket tournament, corporate football tournament, employee engagement events, company outing noida, corporate pickleball",
    canonical: `${BASE_URL}/corporate`,
  },
  events: {
    title: "Cricket Tournaments & Sports Events at Turf 360 Noida",
    description: "Join exciting box cricket tournaments, football leagues & sports events at Turf 360 Noida. Prize money up to Rs 1 lakh. Register your team for upcoming tournaments in Sector 150, Noida.",
    keywords: "cricket tournament noida, box cricket tournament noida, football tournament noida, sports events noida, cricket league noida, prize money tournament noida, sports championship noida",
    canonical: `${BASE_URL}/events`,
  },
  gallery: {
    title: "Turf 360 Gallery - Photos & Videos of Sports Facilities in Noida",
    description: "View photos and videos of Turf 360's premium sports facilities in Noida. See our football turf, cricket pitch, pickleball courts, snooker tables, cafe & event spaces.",
    keywords: "turf 360 photos, sports facility noida images, football turf photos, cricket ground noida, pickleball court images, snooker room noida, sports venue noida",
    canonical: `${BASE_URL}/gallery`,
  },
  contact: {
    title: "Contact Turf 360 - Book Sports Turf in Sector 150, Noida",
    description: "Contact Turf 360 to book football, cricket, pickleball or snooker. Call +91-8076714176 or visit us at Shafipur Road, Sector 150, Near ATS Pristine, Noida. Open 5 AM - 2 AM daily.",
    keywords: "turf 360 contact, book turf noida, sports booking sector 150, turf 360 phone number, turf 360 location, turf 360 address, book sports ground noida",
    canonical: `${BASE_URL}/contact`,
  },
};
