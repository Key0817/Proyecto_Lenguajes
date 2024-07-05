"use client";
import React, { useState } from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


export default function Home() {
  const [origin, setOrigin] = useState<{ label: string; value: google.maps.places.PlaceResult } | null>(null);
  const [destination, setDestination] = useState<{ label: string; value: google.maps.places.PlaceResult } | null>(null);
  const [originLocation, setOriginLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleOriginSelect = async (place: any) => {
    setOrigin(place);
    const results = await geocodeByAddress(place.label);
    const latLng = await getLatLng(results[0]);
    setOriginLocation(latLng);
  };

  const handleDestinationSelect = async (place: any) => {
    setDestination(place);
    const results = await geocodeByAddress(place.label);
    const latLng = await getLatLng(results[0]);
    setDestinationLocation(latLng);
  };

  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734
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