import { Link } from 'react-router-dom';
 import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import { FaBath, FaBed } from 'react-icons/fa';
 
 export default function ListingCard({ listing }) {
   return (
     <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
       <Link to={`/listing/${listing._id}`}>
         <img
           src={
             listing.imageUrls[0] 
             
           }
           alt='listing cover'
           className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
         />
         <div className='p-3 flex flex-col gap-2 w-full'>
           <p className='truncate text-lg font-semibold text-slate-700'>
             {listing.name}
           </p>
           <div className='flex items-center gap-1'>
             <MdLocationOn className='h-4 w-4 text-green-700' />
             <p className='text-sm text-gray-600 truncate w-full'>
               {listing.address}
             </p>
           </div>
           <p className='text-sm text-gray-600 line-clamp-2'>
             {listing.description}
           </p>
           <p className='text-slate-800 mt-2 font-semibold '>
           ₹ 
             {listing.offer
               ? listing.discountPrice.toLocaleString("en-IN")
               : listing.regularPrice.toLocaleString("en-IN")}
             {listing.type === 'rent' && ' / month'}
           </p>
           <div className='text-slate-700 flex gap-5 mt-2 items-center'>
             <div className='font-bold text-xs flex gap-2 items-center '>
              <FaBed className="text-lg text-cyan-800" />
               {listing.bedrooms > 1
                 ? `${listing.bedrooms} beds `
                 : `${listing.bedrooms} bed `}
             </div>
             <div className='font-bold text-xs flex gap-2 items-center'>
              <FaBath className="text-lg text-cyan-800" />
               {listing.bathrooms > 1
                 ? `${listing.bathrooms} baths `
                 : `${listing.bathrooms} bath `}
             </div>
           </div>
         </div>
       </Link>
     </div>
   );
 }
 ListingCard.propTypes = {
    listing: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      offer: PropTypes.bool.isRequired,
      discountPrice: PropTypes.number,
      regularPrice: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      bedrooms: PropTypes.number.isRequired,
      bathrooms: PropTypes.number.isRequired,
    }).isRequired,
  };