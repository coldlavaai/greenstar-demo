'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calculator, TrendingUp, Clock, Zap } from 'lucide-react';

export default function ROICalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    postcode: '',
    roofSize: '',
    monthlyBill: '',
    name: '',
    email: '',
    phone: '',
  });
  const [results, setResults] = useState<any>(null);

  const calculateROI = () => {
    const roofSize = parseFloat(formData.roofSize);
    const monthlyBill = parseFloat(formData.monthlyBill);
    
    // Simplified calculation (real one would be more complex)
    const systemSize = roofSize / 10; // 10m² per kW roughly
    const annualGeneration = systemSize * 900; // kWh per year
    const annualSavings = annualGeneration * 0.24; // £0.24 per kWh average
    const systemCost = systemSize * 1500; // £1,500 per kW installed
    const paybackYears = systemCost / annualSavings;
    const roi25Years = (annualSavings * 25) - systemCost;
    
    // Generate data for charts
    const yearlyData = [];
    for (let year = 0; year <= 25; year++) {
      yearlyData.push({
        year,
        savings: year * annualSavings,
        cost: systemCost,
        netValue: (year * annualSavings) - systemCost,
      });
    }

    setResults({
      systemSize: systemSize.toFixed(1),
      annualGeneration: annualGeneration.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      systemCost: systemCost.toFixed(0),
      paybackYears: paybackYears.toFixed(1),
      roi25Years: roi25Years.toFixed(0),
      yearlyData,
    });
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      calculateROI();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Free ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your Solar Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how much you could save with solar panels. Get instant estimates for payback period and 25-year ROI.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {step < 3 ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Property Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">1</div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Property Details</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Postcode</label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      placeholder="e.g. SW1A 1AA"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Available Roof Size (m²)</label>
                    <input
                      type="number"
                      name="roofSize"
                      value={formData.roofSize}
                      onChange={handleInputChange}
                      placeholder="e.g. 40"
                      min="10"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Typical UK house: 30-60m²</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Monthly Electricity Bill (£)</label>
                    <input
                      type="number"
                      name="monthlyBill"
                      value={formData.monthlyBill}
                      onChange={handleInputChange}
                      placeholder="e.g. 120"
                      min="1"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
                  >
                    Continue to Contact Details
                  </button>
                </div>
              )}

              {/* Step 2: Contact Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">2</div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Your Personalized Results</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="07XXX XXXXXX"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-lg transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
                    >
                      Calculate My Savings
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* Step 3: Results */
            <div className="space-y-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Your Personalized Results</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Great News, {formData.name}!</h3>
                <p className="text-lg text-gray-600">Here's what solar could do for you</p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-gray-700">Annual Savings</h4>
                  </div>
                  <p className="text-4xl font-bold text-emerald-700">£{results.annualSavings}</p>
                  <p className="text-sm text-gray-600 mt-1">per year</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-700">Payback Period</h4>
                  </div>
                  <p className="text-4xl font-bold text-blue-700">{results.paybackYears}</p>
                  <p className="text-sm text-gray-600 mt-1">years</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-6 h-6 text-amber-600" />
                    <h4 className="font-bold text-gray-700">25-Year ROI</h4>
                  </div>
                  <p className="text-4xl font-bold text-amber-700">£{results.roi25Years}</p>
                  <p className="text-sm text-gray-600 mt-1">total profit</p>
                </div>
              </div>

              {/* System Details */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Recommended System</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">System Size:</span>
                    <span className="font-bold text-gray-900 ml-2">{results.systemSize} kW</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Annual Generation:</span>
                    <span className="font-bold text-gray-900 ml-2">{results.annualGeneration} kWh</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Installation Cost:</span>
                    <span className="font-bold text-gray-900 ml-2">£{results.systemCost}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Warranty:</span>
                    <span className="font-bold text-gray-900 ml-2">25 Years</span>
                  </div>
                </div>
              </div>

              {/* 25-Year Savings Chart */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4">Your 25-Year Savings Projection</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={results.yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Value (£)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="savings" stroke="#10b981" strokeWidth={2} name="Total Savings" />
                    <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} name="Installation Cost" />
                    <Line type="monotone" dataKey="netValue" stroke="#3b82f6" strokeWidth={2} name="Net Profit" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-emerald-600 text-white p-6 rounded-xl text-center">
                <h4 className="text-2xl font-bold mb-2">Ready to Start Saving?</h4>
                <p className="mb-4">Our solar experts will contact you within 24 hours to discuss your personalized quote.</p>
                <p className="text-sm opacity-90">We'll call you at {formData.phone} or email {formData.email}</p>
              </div>

              <button
                onClick={() => {
                  setStep(1);
                  setResults(null);
                  setFormData({ postcode: '', roofSize: '', monthlyBill: '', name: '', email: '', phone: '' });
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Calculate Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
