import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path : '', component : HomeComponent},
    {
        // guards multiple router links at a time
        path : '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path : 'members', component : MemberListComponent}, // guards the component while it is routed without authorization
            {path : 'messages', component : MessagesComponent},
            {path : 'lists', component : ListsComponent},
        ]
    },
    // tslint:disable-next-line: max-line-length
    // {path : 'members', component : MemberListComponent, canActivate: [AuthGuard]}, // guards the component while it is routed without authorization
    // {path : 'messages', component : MessagesComponent},
    // {path : 'lists', component : ListsComponent},
    {path : '**', redirectTo: '', pathMatch: 'full'}, // if routes found unmatched it is redirected to home
]

