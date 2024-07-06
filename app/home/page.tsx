'use client';
import React, { useEffect, useState, useRef } from 'react';
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [originLocation, setOriginLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [destinationLocation, setDestinationLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [routeSummary, setRouteSummary] = useState<string | null>(null);
  const [distancia, setDistancia] = useState<number | null>(null);
  const [duracion, setDuracion] = useState<number | null>(null);
  const [parada, setParada] = useState<{ lat: number; lng: number }[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`;
    googleMapsScript.async = false;
    window.document.body.appendChild(googleMapsScript);

    googleMapsScript.addEventListener('load', () => {
      console.log('Google Places script loaded successfully');
      setScriptLoaded(true);
    });

    return () => {
      if (googleMapsScript.parentNode) {
        googleMapsScript.parentNode.removeChild(googleMapsScript);
      }
    };
  }, []);

  useEffect(() => {
    if (originLocation && destinationLocation) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: originLocation,
          destination: destinationLocation,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            setDirections(result);
            const route = result.routes[0];
            const leg = route.legs[0];
            setRouteSummary(route.summary || '');
            setDistancia(leg.distance?.value || null);
            setDuracion(leg.duration?.value || null);
          } else {
            console.error(`Error fetching directions ${result}`);
          }
        }
      );
    }
  }, [originLocation, destinationLocation]);

  if (!scriptLoaded) {
    return <div>Loading Google Places API...</div>;
  }

  const handleSelect = async (value: any, type: 'origin' | 'destination' | 'stop') => {
    const placeId = value.value.place_id;
    try {
      const results = await geocodeByPlaceId(placeId);
      const latLng = await getLatLng(results[0]);
      const selectedPlace = {
        address: results[0].formatted_address,
        location: latLng,
      };

      if (type === 'origin') {
        setOriginLocation(latLng);
      } else if (type === 'destination') {
        setDestinationLocation(latLng);
      } else if (type === 'stop') {
        setParada((prevParada) => [...prevParada, latLng]);
      }

      console.log(`Selected ${type}:`, selectedPlace);
    } catch (error) {
      console.error('Error fetching geocode:', error);
    }
  };

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: 9.93333,
    lng: -84.08333,
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>App de Transporte</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Origen</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
          selectProps={{
            onChange: (value) => handleSelect(value, 'origin'),
            placeholder: 'Ingresa el lugar de origen',
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h2>Destino</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
          selectProps={{
            onChange: (value) => handleSelect(value, 'destination'),
            placeholder: 'Ingresa el lugar de destino',
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h2>Agregar parada</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
          selectProps={{
            onChange: (value) => handleSelect(value, 'stop'),
            placeholder: 'Ingresa el lugar de la parada',
          }}
        />
      </div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={originLocation || defaultCenter}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      >
        {originLocation && (
          <Marker position={originLocation} />
        )}
        {destinationLocation && (
          <Marker position={destinationLocation} />
        )}
        {parada.map((stop, index) => (
          <Marker key={index} position={stop} />
        ))}
        {directions && (
          <DirectionsRenderer directions={directions} />
        )}
      </GoogleMap>
      {routeSummary && (
        <div className="directions">
          <h2>{routeSummary}</h2>
          <p>Distancia: {(distancia! / 1000).toFixed(2)} km</p>
          <p>Duración: {Math.floor(duracion! / 60)} minutos</p>
        </div>
      )}
      <div className="Spacer"></div>
      
      <div className="tabnav">
        <Link href='/home'><Image id='home' src={'/Iconos/Principal.png'} width={50} height={50} alt="Icono de casita" /></Link>
        <Link href='/configuraciones'><Image src={'/Iconos/Usuario.png'} width={50} height={50} alt="Icono de usuario" /></Link>
      </div>
    </div>
  );
}
