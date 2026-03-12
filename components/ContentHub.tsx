'use client';

import { useState } from 'react';
import { BookOpen, Download, Mail, Filter, Clock, TrendingUp } from 'lucide-react';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Solar Panels UK: Complete Buyer's Guide 2026",
    excerpt: "Everything you need to know before buying solar panels in the UK. From system sizing to choosing the right installer, this comprehensive guide covers it all.",
    category: "Guides",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Battery Storage: Is It Worth It?",
    excerpt: "Discover whether adding battery storage to your solar system makes financial sense. We break down the costs, benefits, and payback periods.",
    category: "Technology",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "ROI Calculator: How Long Until Solar Pays Off?",
    excerpt: "Learn how to calculate your solar ROI and understand the factors that affect payback periods. Includes real UK case studies.",
    category: "Finance",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Understanding Feed-in Tariffs & SEG Payments",
    excerpt: "A comprehensive guide to earning money from your solar panels through the Smart Export Guarantee scheme.",
    category: "Finance",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Solar Panel Maintenance: The Complete Guide",
    excerpt: "Keep your solar panels performing at their best with our expert maintenance tips and schedule.",
    category: "Maintenance",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "How Weather Affects Solar Panel Performance",
    excerpt: "Understanding how UK weather patterns impact your solar generation and what you can expect throughout the year.",
    category: "Technology",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop"
  }
];

const categories = ['All', 'Guides', 'Technology', 'Finance', 'Maintenance'];

export default function ContentHub() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [emailCapture, setEmailCapture] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would send to backend
    alert(`Thanks! We'll send the guide to ${emailCapture}`);
    setEmailCapture('');
    setShowEmailForm(false);
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Knowledge Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solar Energy Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides, tips, and insights to help you make informed decisions about solar energy
          </p>
        </div>

        {/* Featured Guide CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 mb-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-4 text-sm">
                <Download className="w-4 h-4" />
                <span>Free Download</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                The Ultimate Solar Buyer's Checklist
              </h3>
              <p className="text-emerald-50 mb-6">
                Download our comprehensive 20-point checklist to ensure you make the right choice when going solar. Covers everything from panel selection to installer vetting.
              </p>
              {!showEmailForm ? (
                <button
                  onClick={() => setShowEmailForm(true)}
                  className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Free Guide
                </button>
              ) : (
                <form onSubmit={handleEmailSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={emailCapture}
                    onChange={(e) => setEmailCapture(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    Get Guide
                  </button>
                </form>
              )}
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                    <span>Panel efficiency comparison charts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                    <span>Installer vetting questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                    <span>Warranty & guarantee checklist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                    <span>ROI calculation worksheet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                    <span>Post-installation checklist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <div className="flex items-center gap-2 text-gray-600">
            <Filter className="w-5 h-5" />
            <span className="font-semibold">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold inline-flex items-center gap-2 group">
                  Read More
                  <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated on Solar
            </h3>
            <p className="text-gray-600 mb-6">
              Get expert solar tips, industry news, and exclusive offers delivered to your inbox monthly.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
