import { Route } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

export const COMIC_ROUTES: Route [] = [
    
    {
        path: "",
        redirectTo: "/home",  
        pathMatch: "full"
    },
    {
        path: "home",
        component: DashboardComponent
    }
] 