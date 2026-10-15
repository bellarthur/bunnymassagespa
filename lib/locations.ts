export const SPA_LOCATIONS = {
  accra: {
    city: "Accra",
    region: "Greater Accra",
    path: "/locations/accra",
    address: "Little Roses, Ashley Botwe",
    description:
      "Appointment-only studio massage sessions at Little Roses in Ashley Botwe, Accra, with outcall appointments also available in Accra.",
    directions: "Find us at Little Roses, Ashley Botwe.",
    mapUrl: "https://maps.app.goo.gl/UPBZBA1DfLH4yeK78",
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
    mapUrl: "https://maps.app.goo.gl/2ty6W4HADQxvSJeZ9",
  },
} as const

export type SpaLocationKey = keyof typeof SPA_LOCATIONS

export const SPA_CONTACT = {
  phone: "+233247932681",
  accraPhone: "+233596202033",
  email: "Bhunnyspa@gmail.com",
  hours: "Daily, 8:00 AM–12:00 AM. All studio visits are by appointment.",
} as const
