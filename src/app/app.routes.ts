import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { GreetingsComponent } from './greetings/greetings.component';

export const routes: Routes = [
    {
        path: "hello",
        component: HelloComponent
    },
    {
        path : "home",
        component: HomeComponent
    },
    {
        path : "",
        component:HomeComponent,
    },
    {
        path : "greetings",
        component:GreetingsComponent,
    }
];
