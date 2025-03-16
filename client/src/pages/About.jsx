const About = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 text-slate-600">
        About Mern Estate
      </h1>
      <p className="mb-4  text-slate-700">
        Welcome to Mern Estate, your trusted platform for seamless property
        transactions. Our goal is to simplify buying, selling, and renting by
        connecting buyers, sellers, and agents in the most efficient way
        possible.
      </p>

      <p className="mb-4 text-slate-700">
        Our mission is to empower our clients with expert insights, personalized
        services, and a deep understanding of the real estate market. Whether
        you&apos;re searching for your dream home, looking to sell, or investing
        in rental properties, Mern Estate is here to guide you every step of the
        way.
      </p>

      <p className="mb-4 text-slate-700">
        At Mern Estate, we are committed to delivering transparency,
        reliability, and innovation in real estate. With a user-friendly
        interface and powerful search features, we ensure that your property
        journey is smooth, rewarding, and hassle-free.
      </p>

      <p className="w-full text-center py-4 bg-gray-100 text-slate-700 mt-10">
        Made with ❤️ by Kunal Chaprana © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default About;
