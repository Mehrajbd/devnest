const services = [
  {
    title: 'eCommerce Platforms',
    description: 'Building custom online stores with integrated payment gateways for seamless user shopping experiences.',
    icon: '🛒',
    features: ['Custom CMS', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard']
  },
  {
    title: 'Learning Management Systems',
    description: 'Developing intuitive and scalable e-learning platforms for educational institutions and corporate training.',
    icon: '🎓',
    features: ['Course Management', 'Progress Tracking', 'Certification', 'Multi-tenancy']
  },
  {
    title: 'Custom Booking Systems',
    description: 'Creating efficient and reliable scheduling systems for services, appointments, and rentals.',
    icon: '📅',
    features: ['Calendar Integration', 'Payment Processing', 'Notifications', 'Multi-user Access']
  },
  {
    title: 'Enterprise Applications',
    description: 'Designing robust, secure, and scalable applications to streamline complex business operations.',
    icon: '🏢',
    features: ['Workflow Automation', 'Data Security', 'Scalability', 'Integration APIs']
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Development Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From initial strategy to final deployment, we provide end-to-end development services to build robust and scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="mt-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-left">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}