import { Routes } from '@angular/router';
import { Doctrine } from './doctrine/doctrine';
import { Meetings } from './meetings/meetings';
import { Testimonies } from './testimonies/testimonies';
import { Gallery } from './gallery/gallery';
import { Home } from './home/home';
import { Publications } from './publications/publications';
import { Sermons } from './sermons/sermons';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'publications', component: Publications },
    { path: 'sermons', component: Sermons },
    { path: 'doctrine', component: Doctrine },
    { path: 'meetings', component: Meetings },
    { path: 'testimonies', component: Testimonies },
    { path: 'gallery', component: Gallery },
    { path: '**', redirectTo: '' } 
];
