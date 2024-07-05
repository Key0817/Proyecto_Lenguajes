'use client'
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from 'react-google-places-autocomplete';

export default function Busqueda(){
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [origin, setOrigin] = useState<any>(null);
    const [destination, setDestination] = useState<any>(null);
  
    useEffect(() => {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`;
      googleMapsScript.async = false; // Carga sincrónica del script
      window.document.body.appendChild(googleMapsScript);
  
      googleMapsScript.addEventListener('load', () => {
        console.log('Google Places script loaded successfully');
        setScriptLoaded(true);
      });
  
      return () => {
        window.document.body.removeChild(googleMapsScript);
      };
    }, []);
  
    if (!scriptLoaded) {
      return <div>Loading Google Places API...</div>;
    }
  
    const handleSelect = async (value: any, type: 'origin' | 'destination') => {
      const placeId = value.value.place_id; // Accede al ID del lugar seleccionado
      try {
        const results = await geocodeByPlaceId(placeId);
        const latLng = await getLatLng(results[0]);
        const selectedPlace = {
          address: results[0].formatted_address,
          location: latLng,
        };
  
        if (type === 'origin') {
          setOrigin(selectedPlace);
        } else if (type === 'destination') {
          setDestination(selectedPlace);
        }
  
        console.log(`Selected ${type}:`, selectedPlace);
      } catch (error) {
        console.error('Error fetching geocode:', error);
      }
    };
  
    return (
      <div>
        <h1>Busqueda de sitios</h1>
        <div>
          <h3>Origen</h3>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
              onChange: (value) => handleSelect(value, 'origin'),
              placeholder: 'Enter origin location',
            }}
          />
        </div>
        <div>
          <h3>Destino</h3>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
              onChange: (value) => handleSelect(value, 'destination'),
              placeholder: 'Enter destination location',
            }}
          />
        </div>
      </div>
    );
  };
