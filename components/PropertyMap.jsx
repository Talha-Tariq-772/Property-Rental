// 'use client';
// import { useState, useEffect } from "react";
// import { setDefaults, fromAddress } from "react-geocode";
// import {Marker} from "react-map-gl";
// import Map from "react-map-gl"

// import Image from "next/image";
// import pin from '../assets/Images/pin.svg';
// import Spinner from './Spinner';
// import 'mapbox-gl/dist/mapbox-gl.css'


const PropertyMap = ({property}) => {
    return (<div>Property Map</div>)
    // const [lat ,setLat] =useState(null);
    // const [lng ,setLng] =useState(null);
    // const [viewport , setViewport]=({
    //     latitude:0,
    //     longitude:0,
    //     width:'100%',
    //     height:'500px'
    // });
    // const [loading , setLoading]=useState(true)
    // const [geocodeError , setGeocodeError]=useState(false)
    // setDefaults({
    //     key: process.env.NEXT_PUBLIC_GOOGLE_GEOCDING_API_KEY,
    //     language:'eng',
    //     region:"us"
    // });
    // useEffect(() => {
    //     const fetchCoords=async()=>{
    //      try {
    //         const res=await fromAddress(`${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`);

    //         // check the geoCode results
    //         if(res.results.length === 0){
    //             setGeocodeError(true);
    //             return ;
    //         }
    //         const {lat , lng} = res.results[0].geometry.location
    //         console.log (lat , lng);
    //         setLat(lat);
    //         setLng(lng);
    //         setViewport({
    //             ...viewport,
    //             latitude:lat,
    //             longitude:lng,
                
    //         })
    //      } catch (error) {
    //         console.log(error);
    //         setGeocodeError(true);
            
    //      } finally {
    //         setLoading(false)
    //      }
        
    //     }
    //     fetchCoords()
    // }, []);

    // if(loading) return <h3><Spinner/></h3>
    // if(geocodeError) return <div className="text-xl" >No Location Data found!</div>
    // return ( !loading && (
    // <Map mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    // mapLib={import('mapbox-gl')}
    // initialViewState={{
    //     longitude:lng,
    //     latitude:lat,
    //     Zoom:15
    // }}
    // style={{width:'100%' , height:500}}
    // mapStyle="mapbox://styles/mapbox/streets-v9"
    //    >
    //     <Marker latitude={lng} longitude={lat} anchor='bottom'>
    //         <Image
    //          src={pin}
    //          alt="location"
    //          width={40}
    //          height={40}
    //          />

    //     </Marker>
    //    </Map>
    // ));
}
 
export default PropertyMap;