import connectDB from  "../config/database";
import Property from '../models/Property';
import PropertyCard from '../components/propertyCard';
import Link from 'next/link';

const HomeProperties = async() => {
    await connectDB();
    const recentProperties= await Property.find({}).sort({createdAt:-1}).limit(3).lean();
    return ( 
        <>
           <section className='px-4 py-6'>
            <div className="container-xl lg:container m-auto px-4 py-6">
                <h2 className="text-3xl font-bold text-blue-6 mb-6">
                Recent Properties

                </h2>


                {recentProperties.length===0 ? (<p>No Properties</p>) : 
                ( <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {

                      recentProperties.map((property)=>(
                           <PropertyCard key={property._id} property={property}/>
                        ))
                    }
                </div> ) 
                }
            </div>
        </section>
        <section className="m-auto my-6 max-w-lg px-6">

            <Link href="/properties" className='bg-black block text-white py-4 px-6 rounded-xl hover:bg-gray-700'>
            View All Properties
            </Link>
        </section>
        </>
     );
}
 
export default HomeProperties;