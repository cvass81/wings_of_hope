import dirtCamoBg from '../../assets/images/dirt_camo.jpg';
import navyCamoBg from '../../assets/images/navy_camo.jpg';
import DirtCamo from './items/section/DirtCamo';
import NavyCamo from './items/section/NavyCamo';

export const DIRT_CAMO = {
  backgroundImage: `url(${dirtCamoBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  Component: DirtCamo,
};

export const NAVY_CAMO = {
  backgroundImage: `url(${navyCamoBg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  Component: NavyCamo,
};
