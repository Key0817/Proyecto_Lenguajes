'use client';
import React, { useState } from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Home() {
  const [originLocation, setOriginLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleOriginSelect = async (place: any) => {
    const results = await geocodeByAddress(place.label);
    const latLng = await getLatLng(results[0]);
    setOriginLocation(latLng);
  };

  const handleDestinationSelect = async (place: any) => {
    const results = await geocodeByAddress(place.label);
    const latLng = await getLatLng(results[0]);
    setDestinationLocation(latLng);
  };

  const mapStyles = {
    height: "50vh",
    width: "100%"
  };
  const defaultCenter = {
    lat:  9.93333,
    lng: -84.08333
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>App de Transporte</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Origen</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
          selectProps={{
            onChange: handleOriginSelect,
            placeholder: 'Ingresa el lugar de origen'
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h2>Destino</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
          selectProps={{
            onChange: handleDestinationSelect,
            placeholder: 'Ingresa el lugar de destino'
          }}
        />
      </div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {originLocation && (
            <Marker position={originLocation} />
          )}
          {destinationLocation && (
            <Marker position={destinationLocation} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}








// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import { LoadScript, GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
// import '@reach/combobox/styles.css';
// import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';


// const mapContainerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: 0,
//   lng: 0,
// };

// export default function Home() {
//   const [origin, setOrigin] = useState<any>(null);
//   const [destination, setDestination] = useState<any>(null);
//   const [originLocation, setOriginLocation] = useState<any>(null);
//   const [destinationLocation, setDestinationLocation] = useState<any>(null);
//   const [directions, setDirections] = useState<any>(null);
//   const mapRef = useRef<google.maps.Map | null>(null);

//   const handleOriginSelect = async (address: any) => {
//     if (!address) return; // Manejo de dirección nula o indefinida
//     setOrigin(address);
//     try {
//       const results = await geocodeByAddress(address);
//       const latLng = await getLatLng(results[0]);
//       setOriginLocation(latLng);
//     } catch (error) {
//       console.error('Error fetching geocode for origin:', error);
//     }
//   };
  
//   const handleDestinationSelect = async (address: any) => {
//     if (!address) return; // Manejo de dirección nula o indefinida
//     setDestination(address);
//     try {
//       const results = await geocodeByAddress(address);
//       const latLng = await getLatLng(results[0]);
//       setDestinationLocation(latLng);
//     } catch (error) {
//       console.error('Error fetching geocode for destination:', error);
//     }
//   };

//   useEffect(() => {
//     if (originLocation && destinationLocation) {
//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin: originLocation,
//           destination: destinationLocation,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             setDirections(result);
//           } else {
//             console.error(`Error fetching directions ${result}`);
//           }
//         }
//       );
//     }
//   }, [originLocation, destinationLocation]);

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}>
//       <div>
//         <h1>Google Maps Directions</h1>

//         <Combobox onSelect={handleOriginSelect}>
//           <ComboboxInput
//             value={origin || ''}
//             onChange={(e) => {
//               setOrigin(e.target.value);
//             }}
//             placeholder="Enter origin"
//           />
//           <ComboboxPopover>
//             <ComboboxList>
//               {origin && (
//                 <ComboboxOption value={origin} />
//               )}
//             </ComboboxList>
//           </ComboboxPopover>
//         </Combobox>

//         <Combobox onSelect={handleDestinationSelect}>
//           <ComboboxInput
//             value={destination || ''}
//             onChange={(e) => {
//               setDestination(e.target.value);
//             }}
//             placeholder="Enter destination"
//           />
//           <ComboboxPopover>
//             <ComboboxList>
//               {destination && (
//                 <ComboboxOption value={destination} />
//               )}
//             </ComboboxList>
//           </ComboboxPopover>
//         </Combobox>


//       </div>

//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={10}
//         center={center}
//         onLoad={(map) => {
//           mapRef.current = map;
//         }}
//       >
//         {originLocation && destinationLocation && (
//           <DirectionsRenderer
//             directions={directions}
//             options={{
//               polylineOptions: {
//                 strokeColor: '#000',
//                 strokeOpacity: 0.8,
//                 strokeWeight: 6,
//               },
//             }}
//           />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// }





