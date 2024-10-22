const stats = [
    { id: 1, name: 'Happy Customers', value: '1K+' },
    { id: 2, name: 'Works Completed', value: '2K+' },
    { id: 3, name: 'Expert Members', value: '99+' },
    { id: 4, name: 'Satisfaction Rates', value: '100%' },
  ]
  
  export default function StatsSection() {
    return (
      <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Achievements</h2>
            <p className="mt-4 text-lg leading-8">
              We pride ourselves on delivering excellence and ensuring customer satisfaction across all projects.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-4 text-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
              >
                <dd className="text-5xl font-bold sm:text-6xl mb-4">{stat.value}</dd>
                <dt className="text-lg font-medium">{stat.name}</dt>
                <div className="h-1 w-16 bg-white mt-4 rounded-lg"></div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  