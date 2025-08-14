import { Routes } from '@angular/router';
import { AppLayoutComponent } from './front-app/layout/App-Layout/App-Layout.component';
import { HomePageComponent } from './front-app/pages/Home-page/Home-page.component';

export const AppLayoutComponentroutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      }
    ]
  }
];

export default AppLayoutComponent;
