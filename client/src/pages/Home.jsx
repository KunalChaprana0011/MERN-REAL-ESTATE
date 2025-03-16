import ListingCard from "../components/ListingCard.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);

  const [rentListings, setRentListings] = useState([]);

  const [showFirstDiv, setShowFirstDiv] = useState(false);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  useEffect(() => {
    
    const firstTimer = setTimeout(() => {
      setShowFirstDiv(true);
    }, 100);

    
    const secondTimer = setTimeout(() => {
      setShowSecondDiv(true);
    }, 400);

    
    const swiperTimer = setTimeout(() => {
      setShowSwiper(true);
    }, 700);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(swiperTimer);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        
        <div
          className={`transition-all duration-700 ease-out ${
            showFirstDiv
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
            Buy, Sell, Rent. <br />
            Your <span className="text-slate-500">Perfect</span> Place Awaits!
          </h1>
        </div>

        
        <div
          className={`text-gray-400 text-xs sm:text-sm font-semibold transition-all duration-700 ease-out ${
            showSecondDiv
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          Mern Estate is the best place to find your next perfect place to live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>

        
        <Link
          to={"/search"}
          className="relative text-blue-800 font-bold text-sm sm:text-base group transition-all duration-300 ease-in-out"
        >
          <span className="relative">
            Start Your Search
            <span className="absolute left-0 bottom-[-2px] w-full h-0.5 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 bg-blue-800"></span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>

      
      <div
        className={`transition-all duration-700 ease-out ${
          showSwiper ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <Swiper navigation>
          {offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="h-[500px]"
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="max-w-8xl  mx-16 p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 font-semibold hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 font-semibold hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 font-semibold hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
