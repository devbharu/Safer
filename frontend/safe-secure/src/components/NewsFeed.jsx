import React from 'react';

const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      headline: "New Phishing Scam Targets Banking Customers",
      summary: "Cybercriminals are using sophisticated email campaigns pretending to be from major banks, asking users to verify their account details through fake login pages.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      category: "Phishing",
      date: "2024-01-15"
    },
    {
      id: 2,
      headline: "Ransomware Attack on Healthcare Systems",
      summary: "Multiple hospitals across the country have been targeted by ransomware attacks, causing disruptions to patient care and data security concerns.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      category: "Ransomware",
      date: "2024-01-14"
    },
    {
      id: 3,
      headline: "Social Media Scams on the Rise",
      summary: "Scammers are increasingly using social media platforms to target users with fake giveaways, investment schemes, and romance scams.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop",
      category: "Social Media",
      date: "2024-01-13"
    },
    {
      id: 4,
      headline: "IoT Device Vulnerabilities Discovered",
      summary: "Security researchers have found critical vulnerabilities in popular smart home devices that could allow hackers to access home networks.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
      category: "IoT Security",
      date: "2024-01-12"
    },
    {
      id: 5,
      headline: "Cryptocurrency Exchange Breach",
      summary: "A major cryptocurrency exchange has reported a security breach, resulting in the theft of millions of dollars worth of digital assets.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=200&fit=crop",
      category: "Cryptocurrency",
      date: "2024-01-11"
    },
    {
      id: 6,
      headline: "Remote Work Security Challenges",
      summary: "As remote work continues, organizations face new cybersecurity challenges including unsecured home networks and personal device usage.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
      category: "Remote Work",
      date: "2024-01-10"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GuardianSphere Security Alerts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest cybersecurity threats, scams, and security best practices to protect yourself online.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(item.date).toLocaleDateString()}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.headline}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.summary}
                </p>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Load More Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
