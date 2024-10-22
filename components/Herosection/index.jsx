import heroimage from '../../public/images/hero-image.png'

const Herosection = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:gap-10">
            {/* Text Section */}
            <div className="lg:w-1/2 text-left mb-6 lg:mb-0">
              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Business Innovation Through Technology
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                At the forefront of digital transformation, we empower businesses with custom-built software solutions designed for scalability, efficiency, and growth. Whether it's streamlining operations or enhancing customer engagement, we lead the way.
              </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
                  Let's Talk
                </button>
                <button className="border border-gray-400 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300">
                  Read More
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src={heroimage} // Replace with your image path
                alt="Business Innovation"
                className="w-full h-auto object-cover "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Herosection;
  