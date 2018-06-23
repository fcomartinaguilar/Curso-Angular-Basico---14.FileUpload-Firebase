import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const RUTAS: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'carga', component: CargaComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);