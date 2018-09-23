import { Routes } from '@angular/router';
import { AdminLayoutComponent } from 'app/common/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from 'app/common/layouts/auth/auth-layout.component';


export const AppRoutes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
}, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
        path: '',
        loadChildren: './common/dashboard/dashboard.module#DashboardModule'
    }, {
        path: 'components',
        loadChildren: './common/components/components.module#ComponentsModule'
    }, {
        path: 'forms',
        loadChildren: './common/forms/forms.module#Forms'
    }, {
        path: 'tables',
        loadChildren: './common/tables/tables.module#TablesModule'
    }, {
        path: 'maps',
        loadChildren: './common/maps/maps.module#MapsModule'
    }, {
        path: 'charts',
        loadChildren: './common/charts/charts.module#ChartsModule'
    }, {
        path: 'calendar',
        loadChildren: './common/calendar/calendar.module#CalendarModule'
    }, {
        path: '',
    pathMatch: 'full',
    loadChildren: './common/userpage/user.module#UserModule'
    }]
}, {
    path: '',
    component: AuthLayoutComponent,
    children: [{
        path: 'pages',
        loadChildren: './common/pages/pages.module#PagesModule'
    }]
},{
    path: 'login',
    loadChildren: './core/login-screen/login.module#LoginModule'
},{
    path: 'register',
    loadChildren: './core/register/register.module#RegisterModule'
},
];
