import image from '../../assets/images/images.jfif'
const AboutUs = () => {
    return (
      <div className="min-h-screen bg-green-50 text-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src={image} // Replace with a relevant tree plantation image
                alt="Tree Plantation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
  
            {/* Content Section */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h1 className="text-4xl font-bold mb-6">Our Commitment to Tree Plantation</h1>
              <p className="mb-4">
                At ONline Nursary, we believe in the power of greenery to transform our environment and lives. Our mission is to contribute to a healthier planet by promoting tree plantation across communities.
              </p>
              <p className="mb-4">
                With every tree we plant, we strive to combat climate change, reduce carbon footprints, and create a sustainable future for generations to come. Trees provide essential benefits to the ecosystem by improving air quality, conserving water, and supporting biodiversity.
              </p>
              <p className="mb-6">
                Join us in our journey to create a greener world, one tree at a time. Whether you're planting in your backyard or helping us grow forests, every effort counts.
              </p>
              <a href="/contact" className="btn bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  