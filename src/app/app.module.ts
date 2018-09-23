import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import { AppRoutes } from './app.routing';
import { SidebarModule } from 'app/common/sidebar/sidebar.module';
import { NavbarModule } from 'app/common/shared/navbar/navbar.module';
import { FooterModule } from 'app/common/shared/footer/footer.module';
import { FixedPluginModule } from 'app/common/shared/fixedplugin/fixedplugin.module';
import { PagesnavbarModule } from 'app/common/shared/pagesnavbar/pagesnavbar.module';
import { AdminLayoutComponent } from 'app/common/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from 'app/common/layouts/auth/auth-layout.component';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
    imports:      [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        PagesnavbarModule,
        // AngularFireModule.initializeApp(environment.firebase),
        // AngularFireDatabaseModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
