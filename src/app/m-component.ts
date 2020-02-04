import { HomeComponent } from './home/home.component';
import { HomeIonicComponent } from './home-ionic/home-ionic.component';

const components = (window.innerWidth <= 360) ? HomeIonicComponent : HomeComponent;

export default components;