import { Routes } from '@angular/router';
import { FourOhFourComponent } from './modules/four-oh-four/four-oh-four.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { DirectoryComponent } from './modules/directory/directory.component';

export const routes: Routes = [{
  path: '404',
  component: FourOhFourComponent
}, {
  path: 'app-directory',
  component: DirectoryComponent
}, {
  path: '',
  component: WelcomeComponent
}, {
  path: '**',
  redirectTo: '404'
}];
