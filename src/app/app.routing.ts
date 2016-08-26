import  {Routes, RouterModule} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ScreenComponent} from "./screen/screen.component";

const APP_ROUTES:Routes = [
    {path: '', redirectTo: '/videos', pathMatch: 'full'},
    {path: 'videos', component: MainComponent},
    {path: 'videos/:nid', component: ScreenComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);