import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/comics/components/dashboard/dashboard.component';

export const routes: Routes = [
    
    {
        path: "",
        loadChildren: () => import("./modules/comics/routes").then((r) => r.COMIC_ROUTES)

//        component: DashboardComponent
    },
    {
        path: "auth",
        loadChildren: () => import("./modules/auth/routes").then((r) => r.AUTH_ROUTES)
    }
];
