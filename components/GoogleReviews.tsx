'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Michael Thompson",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely brilliant service from start to finish. The team at Greenstar Solar were professional, punctual, and the installation was completed in just 2 days. Already seeing significant savings on my electricity bills!",
    avatar: "MT"
  },
  {
    id: 2,
    author: "Sarah Jenkins",
    rating: 5,
    date: "1 month ago",
    text: "Best decision we ever made! The ROI calculator was spot on - we're on track to break even in 7 years. Jason and the team were incredibly knowledgeable and made the whole process stress-free.",
    avatar: "SJ"
  },
  {
    id: 3,
    author: "David Patterson",
    rating: 5,
    date: "1 month ago",
    text: "Exceptional quality panels and installation. The monitoring app shows exactly how much we're generating and saving. Highly recommend Greenstar Solar to anyone considering going solar.",
    avatar: "DP"
  },
  {
    id: 4,
    author: "Emma Richardson",
    rating: 5,
    date: "2 months ago",
    text: "From consultation to installation, everything was handled perfectly. The team even cleaned up better than they found it! Our energy bills have dropped by 70%. Couldn't be happier!",
    avatar: "ER"
  },
  {
    id: 5,
    author: "James Wilson",
    rating: 5,
    date: "2 months ago",
    text: "Professional, reliable, and great value for money. The battery storage system they recommended means we're almost completely off-grid now. Thank you Greenstar Solar!",
    avatar: "JW"
  },
  {
    id: 6,
    author: "Lisa Carter",
    rating: 5,
    date: "3 months ago",
    text: "Outstanding service! The after-sales support has been excellent too. They've answered all our questions promptly. Solar panels are working perfectly and we're saving a fortune.",
    avatar: "LC"
  }
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextReview, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]);

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Hundreds of Happy Customers
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - see what our customers say
          </p>
          <div className="mt-4 text-gray-600">
            <span className="font-semibold">287 reviews</span> on Google
          </div>
        </div>

        {/* Review Carousel */}
        <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-lg p-8 md:p-12">
          <div 
            className="flex flex-col items-center text-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold mb-4">
              {currentReview.avatar}
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg text-gray-700 mb-6 max-w-3xl leading-relaxed">
              "{currentReview.text}"
            </p>

            {/* Author */}
            <div className="text-gray-900 font-bold text-lg">{currentReview.author}</div>
            <div className="text-gray-500 text-sm">{currentReview.date}</div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-emerald-600 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-emerald-600 transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-emerald-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/greenstar+solar+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors group"
          >
            Read all reviews on Google
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
