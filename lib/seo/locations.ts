export interface LocationData {
  slug: string;
  name: string;
  district: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  areas: string[];
  /**
   * true for the 3 cities that already have dedicated per-service pages
   * (/ac-repair-theni, /fridge-repair-theni, /washing-machine-repair-theni,
   * and the same pattern for madurai + dindigul, per your existing
   * homepage `serviceLinks`). For those cities the location hub page and
   * the service hub pages link straight to the existing dedicated page.
   * For the other 10 towns (no dedicated page yet), they instead link to
   * this location's hub page from the service hub page, and to the
   * relevant service hub page from here — so nothing links to a route
   * that doesn't exist.
   */
  hasDedicatedServicePages: boolean;
}

/**
 * NOTE: coordinates and PIN codes below are public approximations for
 * these Tamil Nadu towns. Replace with your exact geocoded values if you
 * want tighter Google Business Profile alignment.
 */
export const locations: Record<string, LocationData> = {
  theni: {
    slug: "theni",
    name: "Theni",
    district: "Theni",
    postalCode: "625531",
    latitude: 10.0104,
    longitude: 77.4768,
    areas: ["Theni Bus Stand", "Allinagaram", "Chinnamanur Road", "Theni Old Town"],
    hasDedicatedServicePages: true,
  },
  madurai: {
    slug: "madurai",
    name: "Madurai",
    district: "Madurai",
    postalCode: "625001",
    latitude: 9.9252,
    longitude: 78.1198,
    areas: ["Anna Nagar", "K.K. Nagar", "Tallakulam", "Villapuram"],
    hasDedicatedServicePages: true,
  },
  dindigul: {
    slug: "dindigul",
    name: "Dindigul",
    district: "Dindigul",
    postalCode: "624001",
    latitude: 10.3624,
    longitude: 77.9695,
    areas: ["Dindigul Town", "Begampur", "Nallampatti", "Batlagundu Road"],
    hasDedicatedServicePages: true,
  },
  cumbum: {
    slug: "cumbum",
    name: "Cumbum",
    district: "Theni",
    postalCode: "625516",
    latitude: 9.7362,
    longitude: 77.2872,
    areas: ["Cumbum Town", "Kombai Road", "Gudalur", "Thevaram"],
    hasDedicatedServicePages: false,
  },
  bodinayakanur: {
    slug: "bodinayakanur",
    name: "Bodinayakanur",
    district: "Theni",
    postalCode: "625513",
    latitude: 10.0115,
    longitude: 77.3498,
    areas: ["Bodi Bus Stand", "Cumbum Road", "Ammankulam", "Bodi New Town"],
    hasDedicatedServicePages: false,
  },
  periyakulam: {
    slug: "periyakulam",
    name: "Periyakulam",
    district: "Theni",
    postalCode: "625601",
    latitude: 10.1167,
    longitude: 77.55,
    areas: ["Periyakulam Bus Stand", "Cumbum Road", "Thevaram Road", "Periyakulam Market"],
    hasDedicatedServicePages: false,
  },
  andipatti: {
    slug: "andipatti",
    name: "Andipatti",
    district: "Theni",
    postalCode: "625512",
    latitude: 9.9403,
    longitude: 77.6178,
    areas: ["Andipatti Bus Stand", "Kanavaipatti Road", "Andipatti Market", "Andipatti Town"],
    hasDedicatedServicePages: false,
  },
  chinnamanur: {
    slug: "chinnamanur",
    name: "Chinnamanur",
    district: "Theni",
    postalCode: "625515",
    latitude: 9.8167,
    longitude: 77.3833,
    areas: ["Chinnamanur Bus Stand", "Meenakshipuram", "Rajapalayam Road", "Chinnamanur Market"],
    hasDedicatedServicePages: false,
  },
  uthamapalayam: {
    slug: "uthamapalayam",
    name: "Uthamapalayam",
    district: "Theni",
    postalCode: "625533",
    latitude: 9.8064,
    longitude: 77.3239,
    areas: ["Uthamapalayam Bus Stand", "Cumbum Road", "Suruli Falls Road", "Uthamapalayam Market"],
    hasDedicatedServicePages: false,
  },
  nilakottai: {
    slug: "nilakottai",
    name: "Nilakottai",
    district: "Dindigul",
    postalCode: "624201",
    latitude: 10.1667,
    longitude: 77.9333,
    areas: ["Nilakottai Bus Stand", "Madurai Road", "Nilakottai Market", "Nilakottai Town"],
    hasDedicatedServicePages: false,
  },
  batlagundu: {
    slug: "batlagundu",
    name: "Batlagundu",
    district: "Dindigul",
    postalCode: "624202",
    latitude: 10.2667,
    longitude: 77.7667,
    areas: ["Batlagundu Bus Stand", "Dindigul Road", "Sholavandan Road", "Batlagundu Market"],
    hasDedicatedServicePages: false,
  },
  usilampatti: {
    slug: "usilampatti",
    name: "Usilampatti",
    district: "Madurai",
    postalCode: "625532",
    latitude: 9.9667,
    longitude: 77.7833,
    areas: ["Usilampatti Bus Stand", "Madurai Road", "Usilampatti Market", "Usilampatti Town"],
    hasDedicatedServicePages: false,
  },
  palani: {
    slug: "palani",
    name: "Palani",
    district: "Dindigul",
    postalCode: "624601",
    latitude: 10.4499,
    longitude: 77.5172,
    areas: ["Palani Bus Stand", "Temple Road", "Adivaram", "Palani Market"],
    hasDedicatedServicePages: false,
  },
};

export const locationList: LocationData[] = Object.values(locations);
