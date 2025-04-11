// src/data/trackingData.ts

export const trackingDB: Record<string, {
    pickup: string;
    destination: string;
    status: string;
    coords: {
      lat: number;
      lng: number;
    };
  }> = {
    "ABC123": {
      pickup: "Lekki Phase 1",
      destination: "Yaba",
      status: "In Transit",
      coords: { lat: 6.4372, lng: 3.4244 },
    },
    "XYZ789": {
      pickup: "Ikeja",
      destination: "Ajah",
      status: "Picked Up",
      coords: { lat: 6.6018, lng: 3.3515 },
    },
  };  