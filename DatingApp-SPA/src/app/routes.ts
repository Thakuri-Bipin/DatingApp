import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path : '', component : HomeComponent},
    {
        // guards multiple router links at a time
        path : '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path : 'members', component : MemberListComponent,
                 resolve: {users: MemberListResolver}}, // guards the component while it is routed without authorization
            {path : 'members/:id', component : MemberDetailComponent,
                 resolve: {user: MemberDetailResolver}}, // use of resolvers
            {path: 'member/edit', component: MemberEditComponent,
                 resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
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

