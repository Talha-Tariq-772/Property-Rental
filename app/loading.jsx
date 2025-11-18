"use client";
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingPage = () => {
  // CSS override for the spinner
  const override = {
    display: "block",
    margin: "100px auto"
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-50">
      <ClipLoader 
        color="#3b82f6" 
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        speedMultiplier={0.8}  // Optional: control animation speed
      />
      <p className="mt-4 text-lg text-gray-600 font-medium">Loading...</p>
    </div>
  );
}
 
export default LoadingPage;