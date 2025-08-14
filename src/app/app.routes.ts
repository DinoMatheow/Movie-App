import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path:'',
    loadChildren: ()=> import('./App-Layout.routes').then(m => m.AppLayoutComponentroutes),

  }

];
