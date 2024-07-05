// Aqui para abajo es un ejemplo de como se marca una linea de un sitio a otro, funciona de manera estatica, si quiere probarlo descometelo y comente lo de arriba
// tutoriales de referencia 
// 1 https://www.youtube.com/watch?v=tFjOIZGCvuQ&list=PL2rFahu9sLJ2QuJaKKYDaJp0YqjFCDCtN&index=3
// 2  https://www.youtube.com/watch?v=sIRcN0MeZVU&t=12469s


'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function direcion() {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<google.maps.DirectionsRoute | null>(null); // Estado para la ruta seleccionada

  useEffect(() => {
    if (map) {
      const directionsServiceInstance = new window.google.maps.DirectionsService();
      const directionsRendererInstance = new window.google.maps.DirectionsRenderer({ map });
      setDirectionsService(directionsServiceInstance);
      setDirectionsRenderer(directionsRendererInstance);
    }
  }, [map]);

  useEffect(() => {
    if (directionsService && directionsRenderer) {
      directionsService.route(
        {
          origin: '100 Front St, Toronto, ON',
          destination: '500 College St, Toronto, ON',
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: true,
        },
        (response, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);
            if (response && response.routes && response.routes.length > 0) {
              setRoutes(response.routes);
              setSelectedRoute(response.routes[0]); // Seleccionar la primera ruta por defecto
            } else {
              console.warn('No routes found or response is invalid.');
              setRoutes([]);
              setSelectedRoute(null);
            }
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    }
  }, [directionsService, directionsRenderer]);

  const displayRouteInfo = () => {
    if (selectedRoute) {
      const summary = selectedRoute.summary || '';
      const distance = selectedRoute.legs.reduce((total, leg) => total + (leg.distance?.value || 0), 0); // Aseguramos que distance?.value no sea undefined
      const duration = selectedRoute.legs.reduce((total, leg) => total + (leg.duration?.value || 0), 0); // Aseguramos que duration?.value no sea undefined

      return (
        <div className="directions">
          <h2>{summary}</h2>
          <p>Distancia: {(distance / 1000).toFixed(2)} km</p>
          <p>Duración: {Math.floor(duration / 60)} minutos</p>
        </div>
      );
    }
    return null;
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 9.93333, lng: -84.08333 }}
        zoom={12}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={{ lat: 9.93333, lng: -84.08333 }} />
        <Marker position={{ lat: 8.60327, lng: -83.11342 }} />
      </GoogleMap>
      {displayRouteInfo()} {/* Mostrar el resumen de la ruta seleccionada */}
    </LoadScript>
  );
}


