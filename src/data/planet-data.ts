export const AU_TO_KM = 149597870.691;

//https://nssdc.gsfc.nasa.gov/planetary/factsheet/
//planetary fact sheet

interface TouristAttraction {
  name: string;
  link: string;
}
interface PlanetData {
  name: string;
  mass: number;
  diameter: number;
  density: number;
  gravity: number;
  escapeVelocity: number;
  rotationPeriod: number;
  lengthOfDay: number;
  distanceFromSun: number;
  perihelion: number;
  aphelion: number;
  orbitalPeriod: number;
  orbitalVelocity: number;
  youtube:string;
  orbitalInclination: number;
  orbitalEccentricity: number;
  obliquityToOrbit: number;
  meanTemperature: number;
  longitudeAscendingNode: number;
  longitudePerihelion: number;
  meanLongitude: number;
  meanAnomaly:number;
  numberOfMoons:number;
  epoch:number;
  color: string;
  forTourists: TouristAttraction[];
  index: number;
}

export const PLANET_DATA: PlanetData[] = [
  {
    name: 'Mercury',
    mass: 0.33, // 10^24 kg
    diameter: 4879, // km
    density: 5429, // kg/m3
    gravity: 3.7, // m/s2
    escapeVelocity: 4.3, // km/s
    rotationPeriod: 1407.6, // hours
    lengthOfDay: 4222.6, // hours
    distanceFromSun: 57.9 * 10 ** 6, // km orbital distance
    perihelion: 46.0 * 10 ** 6, // km
    aphelion: 69.8 * 10 ** 6, // km
    orbitalPeriod: 88.0, // days
    orbitalVelocity: 47.4, // km/s
    orbitalInclination: 7.00487, // degrees
    orbitalEccentricity: 0.20563069,
    obliquityToOrbit: 0.034, // degrees
    meanTemperature: 167, // °C
    longitudeAscendingNode: 48.33167, //deg
    epoch:2451545, //!!!!
    meanAnomaly:174.79,
    longitudePerihelion: 77.45645, //deg
    meanLongitude: 252.25084,
    numberOfMoons:0,
    youtube:"https://www.youtube.com/watch?v=ENwD31EDFjc",
    color: '#CCAD94',
    forTourists: [
      {
        name: "Doble Amanecer",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Cuenca Caloris",
        link: "https://linktocaloris.com"
      }
    ],    index: 1,
  },
  {
    name: 'Venus',
    mass: 4.87, // 10^24 kg
    diameter: 12104, // km
    density: 5243, // kg/m3
    gravity: 8.9, // m/s2
    escapeVelocity: 10.4, // km/s
    rotationPeriod: -5832.5, // hours
    lengthOfDay: 2802.0, // hours
    distanceFromSun: 108.21 * 10 ** 6, // km
    perihelion: 107.48 * 10 ** 6, // km
    aphelion: 108.941 * 10 ** 6, // km
    orbitalPeriod: 224.7, // days
    orbitalVelocity: 35.0, // km/s
    orbitalInclination: 3.39471, // degrees
    orbitalEccentricity: 0.00677323,
    obliquityToOrbit: 177.36, // degrees
    meanAnomaly:50.45,
    epoch:2451545.0,
    meanTemperature: 464, // °C
    longitudeAscendingNode: 76.68069, //deg
    longitudePerihelion: 131.53298, //deg
    meanLongitude: 181.97973,
    color: '#CF5D3D',
    index: 2,
    youtube:"https://youtu.be/o-KMLF-OPtg?si=xzJ0-xyCGWIJMZVb",
    numberOfMoons:0,
    forTourists: [
      {
        name: "Sulfuric Acid Clouds",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Mount Maxwell",
        link: "https://linktocaloris.com"
      }
    ],    
  },
  
  {
    name: 'Earth',
    mass: 5.97, // 10^24 kg
    diameter: 12756, // km
    density: 5514, // kg/m3
    gravity: 9.8, // m/s2
    escapeVelocity: 11.2, // km/s
    rotationPeriod: 23.9, // hours
    lengthOfDay: 24.0, // hours
    distanceFromSun: 149.6 * 10 ** 6, // km
    perihelion: 147.1 * 10 ** 6, // km
    aphelion: 152.1 * 10 ** 6, // km
    orbitalPeriod: 365.2, // days
    orbitalVelocity: 29.8, // km/s
    orbitalInclination: 0.00005, // degrees
    orbitalEccentricity: 0.01671022,
    youtube:"https://www.youtube.com/watch?v=8DQeFmWUyd8",
    epoch:2451545.0, // !!!!!!!!!!!
    obliquityToOrbit: 23.4, // degrees
    meanTemperature: 15, // °C
    longitudeAscendingNode: -11.26064, //deg
    longitudePerihelion: 102.94719, //deg
    meanLongitude: 100.46435,
    color: '#49C893',
    numberOfMoons:1,
    meanAnomaly: 357.51716,
    index: 3,
    forTourists: [
      {
        name: "The Amazon Rainforest",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Mount Everest",
        link: "https://linktocaloris.com"
      }
    ],
    
  },
  {
    name: 'Mars',
    mass: 0.642, // 10^24 kg
    diameter: 6792, // km
    density: 3934, // kg/m3
    gravity: 3.7, // m/s2
    escapeVelocity: 5.0, // km/s
    rotationPeriod: 24.6, // hours
    lengthOfDay: 24.7, // hours
    distanceFromSun: 228.0 * 10 ** 6, // km
    perihelion: 206.7 * 10 ** 6, // km
    aphelion: 249.3 * 10 ** 6, // km
    orbitalPeriod: 687.0, // days
    youtube:"https://www.youtube.com/watch?v=coZ83RM1jbk",
    orbitalVelocity: 24.1, // km/s
    orbitalInclination: 1.8, // degrees
    orbitalEccentricity: 0.094,
    obliquityToOrbit: 25.2, // degrees
    meanTemperature: -65, // °C
    meanAnomaly:19.41248,
    longitudeAscendingNode: 49.57854, //deg
    longitudePerihelion: 336.04084, //deg
    meanLongitude: 355.45332,
    color: '#D44437',
    epoch:2451545.0,
    index: 4,
    numberOfMoons:2,
    forTourists: [
      {
        name: "Mount Olympus",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Valle Marineris",
        link: "https://linktocaloris.com"
      }
    ],
    
  },
  {
    name: 'Jupiter',
    mass: 1898, // 10^24 kg
    diameter: 142984, // km
    density: 1326, // kg/m3
    gravity: 23.1, // m/s2
    escapeVelocity: 59.5, // km/s
    rotationPeriod: 9.9, // hours
    lengthOfDay: 9.9, // hours
    distanceFromSun: 778.5 * 10 ** 6, // km
    perihelion: 740.6 * 10 ** 6, // km
    aphelion: 816.4 * 10 ** 6, // km
    orbitalPeriod: 4331, // days
    orbitalVelocity: 13.1, // km/s
    orbitalInclination: 1.3, // degrees
    orbitalEccentricity: 0.049,
    obliquityToOrbit: 3.1, // degrees
    meanTemperature: -110, // °C
    meanAnomaly:19.65053,
    youtube:"https://www.youtube.com/watch?v=uj3Lq7Gu94Y",
    longitudeAscendingNode: 100.55615, //deg
    longitudePerihelion: 14.75385, //deg
    meanLongitude: 34.40438,
    epoch:2451545.0,
    numberOfMoons:92,

    color: '#9C976C',
    index: 5,
    forTourists: [
      {
        name: "Great Red Spot",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Ganymede moon",
        link: "https://linktocaloris.com"
      }
    ],
    
  },
  {
    name: 'Saturn',
    mass: 568, // 10^24 kg
    diameter: 120536, // km
    density: 687, // kg/m3
    gravity: 9.0, // m/s2
    escapeVelocity: 35.5, // km/s
    rotationPeriod: 10.7, // hours
    lengthOfDay: 10.7, // hours
    distanceFromSun: 1432.0 * 10 ** 6, // km
    perihelion: 1357.6 * 10 ** 6, // km
    aphelion: 1506.5 * 10 ** 6, // km
    orbitalPeriod: 10747, // days
    orbitalVelocity: 9.7, // km/s
    youtube:"https://www.youtube.com/watch?v=xn3-0a19sC8",
    orbitalInclination: 2.5, // degrees
    orbitalEccentricity: 0.052,
    obliquityToOrbit: 26.7, // degrees
    meanTemperature: -140, // °C
    longitudeAscendingNode: 113.71504, //deg
    longitudePerihelion: 92.43194, //deg
    meanLongitude: 49.94432,
    meanAnomaly:317.51238,
    epoch:2451545.0,
    numberOfMoons:145,
    forTourists: [
      {
        name: "Saturn rings",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Titan Moon",
        link: "https://linktocaloris.com"
      }
    ],

    color: '#BB9C73',
    index: 6,
  },
  {
    name: 'Uranus',
    mass: 86.8, // 10^24 kg
    diameter: 51118, // km
    density: 1270, // kg/m3
    gravity: 8.7, // m/s2
    escapeVelocity: 21.3, // km/s
    rotationPeriod: -17.2, // hours
    lengthOfDay: 17.2, // hours
    distanceFromSun: 2867.0 * 10 ** 6, // km
    perihelion: 2732.7 * 10 ** 6, // km
    aphelion: 3001.4 * 10 ** 6, // km
    orbitalPeriod: 30589, // days
    orbitalVelocity: 6.8, // km/s
    orbitalInclination: 0.8, // degrees
    orbitalEccentricity: 0.047,
    obliquityToOrbit: 97.8, // degrees
    meanTemperature: -195, // °C
    longitudeAscendingNode: 74.22988, //deg
    longitudePerihelion: 170.96424, //deg
    youtube:"https://www.youtube.com/watch?v=6dcfxVydbQY",
    meanLongitude: 313.23218,
    epoch:2451545.0,
    numberOfMoons:27,
    color: '#61CCB3',
    meanAnomaly:142.26794,
    index: 7,
    forTourists: [
      {
        name: "Uranus Atmosphere",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Miranda Moon",
        link: "https://linktocaloris.com"
      }
    ],
  },
  {
    name: 'Neptune',
    mass: 102, // 10^24 kg
    diameter: 49528, // km
    density: 1638, // kg/m3
    gravity: 11.0, // m/s2
    escapeVelocity: 23.5, // km/s
    rotationPeriod: 16.1, // hours
    lengthOfDay: 16.1, // hours
    distanceFromSun: 4515.0 * 10 ** 6, // km
    perihelion: 4471.1 * 10 ** 6, // km
    aphelion: 4558.9 * 10 ** 6, // km
    orbitalPeriod: 59800, // days
    orbitalVelocity: 5.4, // km/s
    orbitalInclination: 1.8, // degrees
    orbitalEccentricity: 0.01,
    obliquityToOrbit: 28.3, // degrees
    longitudeAscendingNode: 131.72169, //deg
    longitudePerihelion: 44.97135, //deg
    meanTemperature: -200, // °C
    meanLongitude: 304.88003,
    epoch:2451545.0,
    youtube:"https://www.youtube.com/watch?v=5vL1ZPKFILA",
    color: '#5356EE',
    meanAnomaly:259.91,
    index: 8,
    numberOfMoons:14,
    forTourists: [
      {
        name: "Triton Moon",
        link: "https://linktodobleamanecer.com"
      },
      {
        name: "Dark Spots",
        link: "https://linktocaloris.com"
      }
    ],
  },
];
