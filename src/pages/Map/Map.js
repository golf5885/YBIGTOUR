import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet-providers';
import 'leaflet/dist/leaflet.css';
import '../../css/Map.css';
import '../../css/Map_Popup.css';

import markerIcon from '../../icons/location-pin.png';

function Map() {
  const { character } = useParams();
  const navigate = useNavigate();
  const mapRef = useRef(null);

  useEffect(() => {
    // Create the map instance
    const map = L.map(mapRef.current, {
      zoomControl: false,
      dragging: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: false,
      touchZoom: false,
      maxBounds: [[85, -180], [-85, 180]],
      maxZoom: 2,
    });

    // Set the initial view and zoom level
    map.setView([0, 0], 2);

    // Create and add the tile layer to the map
    L.tileLayer.provider('CartoDB.PositronNoLabels', {
      attribution: 'Map data &copy; <a href="https://carto.com/">Carto</a>',
      noWrap: true
    }).addTo(map);


    // Create a custom icon
    const customIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    // Create markers with popups
    const parisMarker = L.marker([48.8566, 2.3522], { icon: customIcon }).addTo(map).bindPopup('파리');
    const tokyoMarker = L.marker([35.6895, 139.6917], { icon: customIcon }).addTo(map).bindPopup('도쿄');

    // Mouseover event handler
    const onMouseOver = (e) => {
      const marker = e.target;
      marker.openPopup();
    };

    // Mouseout event handler
    const onMouseOut = (e) => {
      const marker = e.target;
      marker.closePopup();
    };

    // To aiprort.js
    const handleClick = () => {
      navigate(`/${character}/airport`);
    };

    // Add mouseover and mouseout event listeners to markers
    parisMarker.on('mouseover', onMouseOver);
    parisMarker.on('mouseout', onMouseOut);
    tokyoMarker.on('mouseover', onMouseOver);
    tokyoMarker.on('mouseout', onMouseOut);
    parisMarker.on('click', handleClick);

    // Clean up the map instance when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="map-wrapper">
      <h1 className="map-title">{character}님, 여행할 도시를 선택해 주세요.</h1>
      <div id="map" className="map-container" ref={mapRef}></div>
    </div>
  );
}

export default Map;
