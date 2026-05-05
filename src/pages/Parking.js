import React, { useState, useEffect } from 'react';
import { parkingZones, getAvailabilityPercentage, isZoneAvailable } from '../data/parkingData';
import { useLanguage } from '../context/LanguageContext';
import './Parking.css';

const Parking = () => {
  const { language, t } = useLanguage();
  const [selectedZone, setSelectedZone] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxRate, setMaxRate] = useState('all');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  const translations = {
    pageTitle: { lv: 'Stāvvietas Liepājā', en: 'Parking in Liepaja' },
    filters: { lv: 'Filtri', en: 'Filters' },
    searchParking: { lv: 'Meklēt stāvvietu', en: 'Search Parking' },
    searchPlaceholder: { lv: 'Meklēt pēc nosaukuma vai adreses...', en: 'Search by name or address...' },
    maxRate: { lv: 'Maksimālā maksa (€/stunda)', en: 'Maximum Rate (€/hour)' },
    allRates: { lv: 'Visas cenas', en: 'All Rates' },
    availability: { lv: 'Pieejamība', en: 'Availability' },
    all: { lv: 'Visi', en: 'All' },
    available: { lv: 'Pieejamas', en: 'Available' },
    full: { lv: 'Pilnas', en: 'Full' },
    bookOnline: { lv: 'Rezervēt stāvvietu tiešsaistē', en: 'Book Parking Online' },
    bookDescription: { lv: 'Izmantojiet Mobilly aplikāciju, lai rezervētu un apmaksātu stāvvietu.', en: 'Use Mobilly app to reserve and pay for parking.' },
    downloadApp: { lv: 'Lejupielādēt Mobilly aplikāciju', en: 'Download Mobilly App' },
    visitWebsite: { lv: 'Apmeklēt Mobilly tīmekļa vietni →', en: 'Visit Mobilly Website →' },
    parkingZones: { lv: 'Stāvvietu zonas', en: 'Parking Zones' },
    availableLabel: { lv: 'Pieejamas', en: 'Available' },
    rate: { lv: 'Maksa', en: 'Rate' },
    maxHours: { lv: 'Maks. stundas', en: 'Max Hours' },
    totalSpaces: { lv: 'Kopā vietas', en: 'Total Spaces' },
    mobillyZone: { lv: 'Mobilly zona', en: 'Mobilly Zone' },
    availablePercent: { lv: 'pieejamas', en: 'available' },
    spaces: { lv: 'vietas', en: 'spaces' },
    bookViaMobilly: { lv: 'Rezervēt ar Mobilly', en: 'Book via Mobilly' }
  };

  useEffect(() => {
    // Load Google Maps script
    // Note: Replace YOUR_API_KEY with actual Google Maps API key
    // For development, you can use a placeholder or embed map
    if (!window.google) {
      // Try to load with API key from environment or use embed fallback
      const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY';
      
      if (apiKey !== 'YOUR_API_KEY') {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=drawing`;
        script.async = true;
        script.defer = true;
        script.onload = () => setMapLoaded(true);
        script.onerror = () => {
          // Fallback to embedded map if API fails
          setMapLoaded(true);
        };
        document.head.appendChild(script);
      } else {
        // Use embedded map as fallback - show immediately
        setMapLoaded(true);
      }
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded && window.google) {
      initMap();
    }
  }, [mapLoaded, selectedZone]);

  const initMap = () => {
    const mapContainer = document.getElementById('parking-map');
    if (!mapContainer) return;

    // Check if Google Maps API is available
    if (!window.google || !window.google.maps) {
      // Fallback: Use embedded Google Maps with Liepaja center
      // Create a custom map URL that shows Liepaja
      const centerLat = 56.5047;
      const centerLng = 21.0108;
      
      // Use Google Maps embed with Liepaja center
      const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.5!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDMwJzE2LjkiTiAyMcKwMDAnMzguOSJF!5e0!3m2!1sen!2slv!4v1234567890123!5m2!1sen!2slv`;
      
      mapContainer.innerHTML = `
        <div style="position: relative; width: 100%; height: 100%;">
          <iframe
            src="${embedUrl}"
            width="100%"
            height="100%"
            style="border:0; min-height: 500px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Liepaja Parking Map"
          ></iframe>
          <div style="position: absolute; top: 15px; left: 15px; background: rgba(255,255,255,0.95); padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); max-width: 300px; z-index: 10;">
            <h4 style="margin: 0 0 10px 0; color: #1a5490; font-size: 1rem;">Parking Zones / Stāvvietu zonas</h4>
            ${parkingZones.map(zone => {
              const isAvail = isZoneAvailable(zone);
              return `
                <div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="width: 12px; height: 12px; border-radius: 50%; background: ${isAvail ? '#28a745' : '#dc3545'}; display: inline-block;"></span>
                    <strong style="color: #1a5490; font-size: 0.9rem;">${zone.name}</strong>
                  </div>
                  <div style="font-size: 0.85rem; color: #666; margin-top: 4px;">
                    ${zone.availableSpaces}/${zone.totalSpaces} pieejamas • €${zone.rate}/h
                  </div>
                </div>
              `;
            }).join('')}
            <p style="margin: 10px 0 0 0; font-size: 0.75rem; color: #888; font-style: italic;">
              Piezīme: Interaktīvai kartei nepieciešama Google Maps API atslēga
            </p>
          </div>
        </div>
      `;
      return;
    }

    // Use Google Maps API - Show Liepaja with parking zones
    const mapOptions = {
      center: { lat: 56.5047, lng: 21.0108 }, // Liepaja city center coordinates
      zoom: 14,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ],
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: true
    };

    const map = new window.google.maps.Map(mapContainer, mapOptions);

    // Store info windows to close them when opening a new one
    let currentInfoWindow = null;

    // Add markers and polygons for each parking zone
    parkingZones.forEach(zone => {
      const isAvail = isZoneAvailable(zone);
      const availability = getAvailabilityPercentage(zone);
      
      // Create polygon for parking area (highlighted zone on map)
      const polygon = new window.google.maps.Polygon({
        paths: zone.area,
        strokeColor: isAvail ? '#28a745' : '#dc3545',
        strokeOpacity: 0.9,
        strokeWeight: 3,
        fillColor: isAvail ? '#28a745' : '#dc3545',
        fillOpacity: 0.4,
        clickable: true,
        zIndex: 1
      });

      polygon.setMap(map);

      // Add click event to polygon
      polygon.addListener('click', () => {
        setSelectedZone(zone);
        scrollToZoneCard(zone.id);
      });

      // Create custom marker icon with zone letter
      const markerIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 14,
        fillColor: isAvail ? '#28a745' : '#dc3545',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 3
      };

      // Add marker at parking zone center
      const marker = new window.google.maps.Marker({
        position: zone.coordinates,
        map: map,
        title: `${zone.name} - ${zone.availableSpaces}/${zone.totalSpaces} available`,
        icon: markerIcon,
        zIndex: 2,
        animation: window.google.maps.Animation.DROP,
        label: {
          text: zone.mobillyZone,
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '12px'
        }
      });

      // Create info window content
      const infoContent = `
        <div style="padding: 12px; min-width: 220px;">
          <h3 style="margin: 0 0 10px 0; color: #1a5490; font-size: 1.1rem; border-bottom: 2px solid #1a5490; padding-bottom: 8px;">${zone.name}</h3>
          <p style="margin: 5px 0; font-size: 0.9rem;"><strong>📍 Address:</strong> ${zone.address}</p>
          <p style="margin: 5px 0; font-size: 0.9rem;">
            <strong>Available:</strong> 
            <span style="color: ${isAvail ? '#28a745' : '#dc3545'}; font-weight: bold;">
              ${zone.availableSpaces}/${zone.totalSpaces} (${availability}%)
            </span>
          </p>
          <p style="margin: 5px 0; font-size: 0.9rem;"><strong>💰 Rate:</strong> €${zone.rate.toFixed(2)}/hour</p>
          <p style="margin: 5px 0; font-size: 0.9rem;"><strong>⏱️ Max Hours:</strong> ${zone.maxHours}h</p>
          <p style="margin: 5px 0; font-size: 0.9rem;"><strong>📱 Mobilly Zone:</strong> ${zone.mobillyZone}</p>
          <button 
            onclick="window.open('https://mobilly.lv', '_blank')"
            style="margin-top: 10px; padding: 8px 15px; background: #1a5490; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 0.9rem; font-weight: 600; width: 100%;"
            onmouseover="this.style.background='#2a6bb0'"
            onmouseout="this.style.background='#1a5490'"
          >
            Book via Mobilly
          </button>
        </div>
      `;

      const infoWindow = new window.google.maps.InfoWindow({
        content: infoContent
      });

      // Add click event to marker
      marker.addListener('click', () => {
        // Close previous info window
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        
        infoWindow.open(map, marker);
        currentInfoWindow = infoWindow;
        setSelectedZone(zone);
        scrollToZoneCard(zone.id);
      });

      // Add click event to polygon
      polygon.addListener('click', () => {
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        infoWindow.open(map, marker);
        currentInfoWindow = infoWindow;
      });
    });

    // Fit map to show all parking zones
    const bounds = new window.google.maps.LatLngBounds();
    parkingZones.forEach(zone => {
      zone.area.forEach(point => {
        bounds.extend(new window.google.maps.LatLng(point.lat, point.lng));
      });
    });
    map.fitBounds(bounds);
    
    // Set minimum zoom level to prevent zooming out too far
    map.addListener('bounds_changed', () => {
      if (map.getZoom() > 15) {
        map.setZoom(15);
      }
    });
  };

  const scrollToZoneCard = (zoneId) => {
    const element = document.getElementById(`zone-${zoneId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight the card temporarily
      element.classList.add('selected');
      setTimeout(() => {
        element.classList.remove('selected');
      }, 2000);
    }
  };

  const filteredZones = parkingZones.filter(zone => {
    const matchesSearch = zone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         zone.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRate = maxRate === 'all' || zone.rate <= parseFloat(maxRate);
    const matchesAvailability = availabilityFilter === 'all' ||
                               (availabilityFilter === 'available' && isZoneAvailable(zone)) ||
                               (availabilityFilter === 'full' && !isZoneAvailable(zone));
    return matchesSearch && matchesRate && matchesAvailability;
  });


  return (
    <div className="parking-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t(translations.pageTitle)}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="parking-layout">
            {/* Left Sidebar - Filters and Booking */}
            <div className="parking-sidebar">
              <div className="filters-section">
                <h3>{t(translations.filters)}</h3>
                
                <div className="filter-group">
                  <label>{t(translations.searchParking)}</label>
                  <input
                    type="text"
                    placeholder={t(translations.searchPlaceholder)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="filter-input"
                  />
                </div>

                <div className="filter-group">
                  <label>{t(translations.maxRate)}</label>
                  <select
                    value={maxRate}
                    onChange={(e) => setMaxRate(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">{t(translations.allRates)}</option>
                    <option value="0.60">Līdz €0.60 / Up to €0.60</option>
                    <option value="0.80">Līdz €0.80 / Up to €0.80</option>
                    <option value="1.00">Līdz €1.00 / Up to €1.00</option>
                    <option value="1.20">Līdz €1.20 / Up to €1.20</option>
                    <option value="1.50">Līdz €1.50 / Up to €1.50</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>{t(translations.availability)}</label>
                  <select
                    value={availabilityFilter}
                    onChange={(e) => setAvailabilityFilter(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">{t(translations.all)}</option>
                    <option value="available">{t(translations.available)}</option>
                    <option value="full">{t(translations.full)}</option>
                  </select>
                </div>
              </div>

              <div className="mobilly-section">
                <h3>{t(translations.bookOnline)}</h3>
                <p>{t(translations.bookDescription)}</p>
                <a
                  href="https://mobilly.lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-mobilly"
                >
                  {t(translations.downloadApp)}
                </a>
                <a
                  href="https://mobilly.lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobilly-link"
                >
                  {t(translations.visitWebsite)}
                </a>
              </div>
            </div>

            {/* Main Content - Map and Zone Listings */}
            <div className="parking-main">
              {/* Map Section */}
              <div className="map-section">
                <div className="map-legend">
                  <div className="legend-item">
                    <span className="legend-icon available"></span>
                    <span>{language === 'lv' ? 'Pieejama' : 'Available'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-icon full"></span>
                    <span>{language === 'lv' ? 'Pilna' : 'Full'}</span>
                  </div>
                </div>
                <div id="parking-map" className="parking-map-container"></div>
              </div>

              {/* Zone Listings */}
              <div className="zones-section">
                <h2>{t(translations.parkingZones)}</h2>
                <div className="zones-grid">
                  {filteredZones.map(zone => {
                    const availability = getAvailabilityPercentage(zone);
                    const isAvailable = isZoneAvailable(zone);
                    const zoneName = language === 'lv' ? zone.nameLv : zone.name;
                    const zoneDesc = language === 'lv' ? zone.descriptionLv : zone.description;
                    
                    return (
                      <div
                        key={zone.id}
                        id={`zone-${zone.id}`}
                        className={`zone-card ${selectedZone?.id === zone.id ? 'selected' : ''}`}
                        onClick={() => setSelectedZone(zone)}
                      >
                        <div className="zone-header">
                          <h3>{zoneName}</h3>
                          <span className={`availability-badge ${isAvailable ? 'available' : 'full'}`}>
                            {zone.availableSpaces} {t(translations.availableLabel)}
                          </span>
                        </div>
                        
                        <div className="zone-address">
                          <span className="address-icon">📍</span>
                          {zone.address}
                        </div>
                        
                        <p className="zone-description">{zoneDesc}</p>
                        
                        <div className="zone-details">
                          <div className="detail-item">
                            <span className="detail-label">{t(translations.rate)}:</span>
                            <span className="detail-value">€{zone.rate.toFixed(2)}/hour</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">{t(translations.maxHours)}:</span>
                            <span className="detail-value">{zone.maxHours}h</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">{t(translations.totalSpaces)}:</span>
                            <span className="detail-value">{zone.totalSpaces}</span>
                          </div>
                          <div className="detail-item">
                            <span className="detail-label">{t(translations.mobillyZone)}:</span>
                            <span className="detail-value">{zone.mobillyZone}</span>
                          </div>
                        </div>
                        
                        <div className="zone-progress">
                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{
                                width: `${availability}%`,
                                backgroundColor: isAvailable ? '#28a745' : '#dc3545'
                              }}
                            ></div>
                          </div>
                          <p className="progress-text">
                            {availability}% {t(translations.availablePercent)} ({zone.availableSpaces}/{zone.totalSpaces} {t(translations.spaces)})
                          </p>
                        </div>
                        
                        <button
                          className="btn-book"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open('https://mobilly.lv', '_blank');
                          }}
                        >
                          {t(translations.bookViaMobilly)}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parking;

