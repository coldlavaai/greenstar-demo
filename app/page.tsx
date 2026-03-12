import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleReviews from '@/components/GoogleReviews';
import ROICalculator from '@/components/ROICalculator';
import ContentHub from '@/components/ContentHub';
import AIChatWidget from '@/components/AIChatWidget';
import { ArrowRight, Shield, Award, Users, TrendingUp, Battery, Zap, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-700/50 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Premium Solar Installation · MCS Certified</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Home with Premium Solar Energy
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-2xl">
              Join thousands of UK homeowners saving money and the planet. Get instant ROI calculations, expert advice, and premium installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#calculator"
                className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-xl"
              >
                Calculate Your Savings
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:01234567890"
                className="bg-emerald-700/50 backdrop-blur hover:bg-emerald-700 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Call Us: 0123 456 7890
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2,500+</div>
                <div className="text-emerald-200 text-sm">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">287</div>
                <div className="text-emerald-200 text-sm">5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">25 Years</div>
                <div className="text-emerald-200 text-sm">Warranty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">£2M+</div>
                <div className="text-emerald-200 text-sm">Saved for Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Greenstar Solar?
            </h2>
            <p className="text-xl text-gray-600">
              Premium quality, expert service, unbeatable value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MCS Certified Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully certified and insured with all major industry accreditations. Every installation backed by our 25-year warranty.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven ROI</h3>
              <p className="text-gray-600 leading-relaxed">
                Our customers typically see 7-10 year payback periods with 25-year returns exceeding £30,000. Calculate yours above.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Support 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                From consultation to after-sales, our expert team is here for you. Chat with Sophie, our AI assistant, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Our Process */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to switch-on in as little as 4 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Free Consultation',
                description: 'Book a call with our solar experts. We assess your property and energy needs.',
                icon: '📞'
              },
              {
                step: '2',
                title: 'Custom Design',
                description: 'We create a tailored solar system design with detailed ROI projections.',
                icon: '📐'
              },
              {
                step: '3',
                title: 'Professional Install',
                description: '2-day installation by our certified team. Minimal disruption, maximum care.',
                icon: '🔧'
              },
              {
                step: '4',
                title: 'Start Saving',
                description: 'System activated, monitoring app set up. Watch your savings grow!',
                icon: '✨'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Products */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Solar Technology
            </h2>
            <p className="text-xl text-gray-600">
              We only use the highest quality panels and equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-emerald-100">
              <Zap className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tier 1 Solar Panels</h3>
              <ul className="space-y-3">
                {[
                  '400W+ high-efficiency panels',
                  '25-year performance warranty',
                  'UK weather optimized',
                  'Sleek black aesthetic',
                  '21%+ efficiency rating'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-emerald-100">
              <Battery className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Battery Storage Options</h3>
              <ul className="space-y-3">
                {[
                  '10+ years lifespan',
                  'Store excess energy',
                  'Backup power capability',
                  'Smart monitoring app',
                  'Future-proof your home'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub */}
      <ContentHub />

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get a free, no-obligation quote today. Our experts are standing by.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calculator"
              className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-xl text-lg"
            >
              Calculate Savings
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:01234567890"
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              Call: 0123 456 7890
            </a>
          </div>
          <p className="mt-6 text-emerald-200">
            Or chat with Sophie, our AI assistant, anytime →
          </p>
        </div>
      </section>

      <Footer />
      <AIChatWidget />
    </div>
  );
}
