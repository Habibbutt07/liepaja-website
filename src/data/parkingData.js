// Parking zones data for Liepaja
export const parkingZones = [
  {
    id: 1,
    name: 'City Center Zone A',
    nameLv: 'Pilsētas centrs Zona A',
    address: 'Lielā iela, Liepāja',
    description: 'Central parking zone near main shopping area',
    descriptionLv: 'Centrālā stāvvieta pie galvenajām iepirkšanās zonām',
    rate: 1.50,
    maxHours: 2,
    totalSpaces: 50,
    availableSpaces: 32,
    mobillyZone: 'A',
    coordinates: {
      lat: 56.5047,
      lng: 21.0108
    },
    area: [
      { lat: 56.5055, lng: 21.0095 },
      { lat: 56.5055, lng: 21.0125 },
      { lat: 56.5035, lng: 21.0125 },
      { lat: 56.5035, lng: 21.0095 }
    ]
  },
  {
    id: 2,
    name: 'City Center Zone B',
    nameLv: 'Pilsētas centrs Zona B',
    address: 'Kūrmājas prospekts, Liepāja',
    description: 'Parking zone near the beach and promenade',
    descriptionLv: 'Stāvvieta pie pludmales un promenādes',
    rate: 1.20,
    maxHours: 3,
    totalSpaces: 40,
    availableSpaces: 15,
    mobillyZone: 'B',
    coordinates: {
      lat: 56.5080,
      lng: 21.0150
    },
    area: [
      { lat: 56.5088, lng: 21.0135 },
      { lat: 56.5088, lng: 21.0165 },
      { lat: 56.5068, lng: 21.0165 },
      { lat: 56.5068, lng: 21.0135 }
    ]
  },
  {
    id: 3,
    name: 'Station Zone',
    nameLv: 'Stacijas zona',
    address: 'Stacijas iela, Liepāja',
    description: 'Parking near the railway station',
    descriptionLv: 'Stāvvieta pie dzelzceļa stacijas',
    rate: 0.80,
    maxHours: 4,
    totalSpaces: 30,
    availableSpaces: 22,
    mobillyZone: 'C',
    coordinates: {
      lat: 56.5120,
      lng: 21.0080
    },
    area: [
      { lat: 56.5128, lng: 21.0065 },
      { lat: 56.5128, lng: 21.0095 },
      { lat: 56.5108, lng: 21.0095 },
      { lat: 56.5108, lng: 21.0065 }
    ]
  },
  {
    id: 4,
    name: 'Old Town Zone',
    nameLv: 'Vecpilsētas zona',
    address: 'Rožu iela, Liepāja',
    description: 'Parking in the historic old town area',
    descriptionLv: 'Stāvvieta vēsturiskajā vecpilsētas rajonā',
    rate: 1.00,
    maxHours: 2,
    totalSpaces: 25,
    availableSpaces: 18,
    mobillyZone: 'D',
    coordinates: {
      lat: 56.5020,
      lng: 21.0120
    },
    area: [
      { lat: 56.5028, lng: 21.0105 },
      { lat: 56.5028, lng: 21.0135 },
      { lat: 56.5008, lng: 21.0135 },
      { lat: 56.5008, lng: 21.0105 }
    ]
  },
  {
    id: 5,
    name: 'Port Zone',
    nameLv: 'Ostas zona',
    address: 'Ostas iela, Liepāja',
    description: 'Parking near the port area',
    descriptionLv: 'Stāvvieta pie ostas',
    rate: 0.60,
    maxHours: 6,
    totalSpaces: 60,
    availableSpaces: 45,
    mobillyZone: 'E',
    coordinates: {
      lat: 56.5150,
      lng: 21.0050
    },
    area: [
      { lat: 56.5158, lng: 21.0035 },
      { lat: 56.5158, lng: 21.0065 },
      { lat: 56.5138, lng: 21.0065 },
      { lat: 56.5138, lng: 21.0035 }
    ]
  }
];

// Get parking zone by ID
export const getParkingZoneById = (id) => {
  return parkingZones.find(zone => zone.id === id);
};

// Calculate availability percentage
export const getAvailabilityPercentage = (zone) => {
  return Math.round((zone.availableSpaces / zone.totalSpaces) * 100);
};

// Check if zone is available (has free spaces)
export const isZoneAvailable = (zone) => {
  return zone.availableSpaces > 0;
};




