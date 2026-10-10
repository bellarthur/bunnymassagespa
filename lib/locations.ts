export const SPA_LOCATIONS = {
  accra: {
    city: "Accra",
    region: "Greater Accra",
    path: "/locations/accra",
    address: "Aluguntugui Street, East Legon",
    description:
      "Appointment-only studio massage sessions in East Legon, Accra, with outcall appointments also available in Accra.",
    directions:
      "A dedicated Google Maps pin is not available yet. Please call or WhatsApp us to confirm directions before travelling.",
    mapUrl: null,
  },
  kumasi: {
    city: "Kumasi",
    region: "Ashanti",
    path: "/locations/kumasi",
    address:
      "Behind Brotherman Spot, by Roses Academy, close to the Pentecost Church",
    description:
      "Appointment-only studio massage sessions in Kumasi, with outcall appointments also available in Kumasi.",
    directions:
      "The studio is behind Brotherman Spot, by Roses Academy, close to the Pentecost Church.",
    mapUrl: "https://maps.app.goo.gl/MojD4XRZE5h4seg88",
  },
} as const

export type SpaLocationKey = keyof typeof SPA_LOCATIONS

export const SPA_CONTACT = {
  phone: "+233247932681",
  email: "Bhunnyspa@gmail.com",
  hours: "Daily, 8:00 AM–12:00 AM. All studio visits are by appointment.",
} as const
