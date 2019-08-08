import { faNode, faReact, faSpotify, faVuejs, faChrome, faCss3Alt, faPython, faNpm, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import syn from '../../Assets/images/syn_orange.png';
import spotilize from '../../Assets/images/spotilize.JPG';
import nba from '../../Assets/images/nba.png';
import smooth from '../../Assets/images/smooth.png';
import city from '../../Assets/images/city-def.png';
import smart from '../../Assets/images/smartdj.png';
import jupyter from '../../Assets/images/jupyter.png';
import tree from '../../Assets/images/orb.PNG';

const items = [
  {
    img: syn,
    title: 'Synesthesiafy',
    description: 'Node, Express, React web app that explores the relationship between music and color using Spotify',
    icons: [{ type: 'font-awesome', icon: faNode }, { type: 'font-awesome', icon: faReact }, { type: 'font-awesome', icon: faSpotify }, { type: 'mfizz', icon: 'icon-bootstrap' }, { type: 'font-awesome', icon: faCss3Alt }],
    links: [
      {
        title: 'Website',
        href:'https://synesthesiafy.herokuapp.com/',
      },
      {
        title: 'Github',
        href: 'https://github.com/christophgomez/synesthesiafy'
      }
    ]
  },
  {
    img: spotilize,
    title: 'Spotilize',
    description: 'Node, Express, Vue web app that utilizes a Chrome extension to analyze and visualize Spotify audio frequency waves.',
    icons: [{ type: 'font-awesome', icon: faNode }, { type: 'font-awesome', icon: faVuejs }, { type: 'font-awesome', icon: faSpotify }, { type: 'font-awesome', icon: faChrome }],
    links: [
      {
        title: 'Website',
        href: 'https://spotilize.herokuapp.com/',
      },
      {
        title: 'Github',
        href: 'https://github.com/christophgomez/Spotify-VIsualizer'
      }
    ]
  },
  {
    img: nba,
    title: 'NBA Rosters',
    description: 'Node, Express, Vue, MongoDB web app that utilizes a RESTful API for CRUDL operations on NBA team rosters.',
    icons: [{ type: 'font-awesome', icon: faNode }, { type: 'font-awesome', icon: faVuejs }, { type: 'mfizz', icon: 'icon-mongodb' }],
    links: [
      {
        title: 'Website',
        href:'https://nbarosters.herokuapp.com/',
      },
      {
        title: 'Github',
        href: 'https://github.com/christophgomez/NBARosters'
      }
    ]
  },
  {
    img: smooth,
    title: 'smooth-load',
    description: 'A GSAP and CSS3 animation powered loading spinner component for VueJS, deployed on NPM',
    icons: [{ type: 'font-awesome', icon: faVuejs }, { type: 'font-awesome', icon: faCss3Alt }, { type: 'font-awesome', icon: faHtml5 }, { type: 'font-awesome', icon: faNpm }],
    links: [
      {
        title: 'Website',
        href: 'https://christophgomez.github.io/smooth-load/'
      },
      {
        title: 'NPM',
        href: 'https://www.npmjs.com/package/smooth-load'
      },
      {
        title: 'Github',
        href: 'https://github.com/christophgomez/smooth-load'
      }
    ]
  },
  {
    img: city,
    title: 'Tower Defense Builder',
    description: 'A procedurally generated, 3D crafting/survival game created with C#, Unity, and Blender.',
    icons: [{ type: 'fizz', icon: 'icon-csharp' }, { type: 'fizz', icon: 'icon-unity' }],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/christophgomez/UnityRPGCityBuilderTowerDefenseCrafter'
      }
    ]
  },
  {
    img: smart,
    title: 'SmartDJ',
    description: "An alternative to voice-based AI assistants, this software controls Spotify with nothing but your hand movements. (OpenCV, Python, Microsoft Kinect)",
    icons: [{ type: 'font-awesome', icon: faPython }, { type: 'fizz', icon: 'icon-csharp' }, { type: 'font-awesome', icon: faVuejs }, { type: 'font-awesome', icon: faNode }, { type: 'mfizz', icon: 'icon-shell' }, { type: 'font-awesome', icon: faSpotify }, { type: 'mfizz', icon: 'icon-mongodb' }],
    links: [
      {
        title: 'Github',
        href: 'https://github.com/christophgomez/SmartDJ'
      }
    ]
  },
  {
    img: jupyter,
    title: 'Spotify ML',
    description: "Machine Learning with Spotify to simulate Spotify's Discovery feature. Classification / Prediction based on user's listening habits, integrated with Amazon Alexa.",
    icons: [{ type: 'font-awesome', icon: faPython }, { type: 'mfizz', icon: 'icon-shell' }, { type: 'font-awesome', icon: faNode }, { type: 'font-awesome', icon: faSpotify } ],
    links: [
      {
        title: 'Jupyter Notebook',
        href: 'https://github.com/christophgomez/DJ-Spotify/blob/master/DJ%20Spotify.ipynb'
      },
      {
        title: 'Github',
        href: 'https://github.com/christophgomez/DJ-Spotify'
      }
    ]
  },
  {
    img: tree,
    title: 'Generative Art',
    description: 'A collection of doodles and creative expressions created with JavaScript, the HTML Canvas API, WebGL, and popular rendering libraries D3 and Three.js',
    icons: [{ type: 'font-awesome', icon: faJsSquare }, { type: 'mfizz', icon: 'icon-d3' }],
    links: [
      {
        title: 'Codepen',
        href: 'https://codepen.io/christophergomez',
      },
    ]
  },
]

export default items;