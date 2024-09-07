import images from '../../assets/images/images (2).jfif'

const ContactUs = () => {
  return (
    <div className="hero bg-white text-black min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {/* Contact Image */}
        <img
          src={images}
          className="max-w-screen-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
          alt="Contact Us"
        />
        
        {/* Contact Form */}
        <div className="lg:ml-12 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="mb-6">
            We’d love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          
          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write your message"
                className="textarea textarea-bordered w-full mt-1 h-32"
              ></textarea>
            </div>
            <button type="submit" className="btn bg-[#597E52] text-white hover:bg-black w-full text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
