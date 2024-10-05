import PanelThing from '../SmallComponents/PanelThing';
import Dropdown from '../SmallComponents/Dropdown';
import TitleOption2 from '../SmallComponents/TitleOption2';
import comet from "/cometsesa.png"
export interface Props {
  view: 'NEAs' | 'NECs' | 'Planets' | 'PHAs';
}
const ViewInfo: React.FC<Props> = ({ view }) => {
  let description, imageSrc, imageAlt;
  switch (view) {
    case 'NEAs':
      description = `Greetings, Earthling! Did you know that Near-Earth Asteroids (NEAs) are like cosmic time capsules? These ancient space rocks are remnants from the formation of your solar system, holding secrets about its early days. Some NEAs may even contain precious metals, and with future mining technologies, they could become invaluable resources for interstellar explorers! Isn’t that exciting? 🌌✨ Imagine harnessing their power to fuel your journeys among the stars!`;
      imageSrc =
        'https://neo.ssa.esa.int/documents/20126/385741/gallery_4.jpeg/4afa1aa0-8cef-1231-9058-4535bbfd705a?version=1.2&t=1613132592668&imagePreview=0';
      imageAlt = 'Asteroid (2867) Steins imaged by the European Rosetta spacecraft in 2008. Credits: European Space Agency/OSIRIS Team';
      break;

    case 'NECs':
      description = `Ah, Comets! These dazzling travelers from the outer solar system are like cosmic snowballs, composed of ice, dust, and gas. When they approach your sun, they create magnificent tails that can stretch for millions of kilometers, visible even from your planet! They might carry organic compounds that could shed light on the origins of life. Imagine what mysteries lie within their icy hearts! ☄️🌟 What stories could they tell if they could speak?`;
      imageSrc = comet;
      imageAlt = 'Comet Leonard. Credits: European Space Agency/PDO ';
      break;

    case 'Planets':
      description = `Planets are fascinating worlds that vary widely, from the scorching temperatures of Venus to the icy landscapes of Neptune. Each planet boasts unique features, like Jupiter’s great red spot, a giant storm larger than Earth! Exploring these diverse environments could reveal astonishing possibilities for life forms unlike anything you know. 🌍💫 What if your understanding of life is just the tip of the cosmic iceberg?`;
      imageSrc =
        'https://science.nasa.gov/wp-content/uploads/2023/06/solar-system-model.jpg?w=4096&format=jpeg';
      imageAlt = 'Planets - NASA Science';
      break;

      case 'PHAs':
        description = (
          <>
            Potentially Hazardous Asteroids (PHAs) might sound scary, but they also present
            an incredible opportunity! These space rocks could pose a threat to Earth if their paths intersect with yours,
            but they also drive the development of innovative technologies for planetary defense. Did you know that <a href="https://www.asc-csa.gc.ca/eng/satellites/neossat/" target="_blank" rel="noopener noreferrer" className='text-orange-400'> NEOSSat
            monitors orbiting space objects to help understand their behavior and conduct research on techniques to reduce the risk of collisions?</a>  It
            is the first microsatellite used for this purpose. There is more information
            <a href="https://www.asc-csa.gc.ca/eng/satellites/neossat/" target="_blank" rel="noopener noreferrer" className='text-orange-400'> here</a>!
          </>
        );
        imageSrc =
          'https://www.nasa.gov/wp-content/uploads/2024/07/1-asteroid-illo.jpg?w=1024';
        imageAlt = 'Potentially Hazardous Asteroids (PHA) - NASA';
        break;

    default:
      description =
        'Explore the cosmos and unlock the secrets of the universe!';
      imageSrc = 'https://example.com/default-image.jpg';
      imageAlt = 'Cosmic Wonders';
      break;
  }

  return (
    <>
      <PanelThing className="mt-5">
        <div className="p-3">
          <Dropdown
            name={
              <TitleOption2>TRANSMISSION: Ready to see {view}?</TitleOption2>
            }
            options={
              <>
                {imageSrc && (
                  <>
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-full h-auto"
                    />
                    <span className="opacity-40 text-xs">{imageAlt}</span>
                  </>
                )}

                <p className="text-sm mt-3">{description}</p>
              </>
            }
          />
        </div>
      </PanelThing>
    </>
  );
};

export default ViewInfo;
