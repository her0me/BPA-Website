import Highway from '@dogstudio/highway/build/highway';
import Fade from './transition';


const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});