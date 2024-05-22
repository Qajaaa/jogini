import { Header } from '../components/header/header.jsx';
import { Intro } from '../components/intro/intro.jsx';
import { Pose } from '../components/pose/pose.jsx';
import obr from '../img/yoga-pose.jpg';

const headerProps = { title: 'Jogíni' };

const introProps = {
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
};

const poseProps = { src: 'src/img/yoga-pose.jpg' };

document.querySelector('#root').innerHTML = `
  ${Header(headerProps)}
  ${Intro(introProps)}
  ${Pose(poseProps)}
`;