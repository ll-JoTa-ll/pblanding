import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PikbikHeaderComponent } from './content/header/header.component';
import { PikbikAboutComponent } from './content/about/about.component';
import { PikbikServicesComponent } from './content/services/services.component';
import { PikbikPriceComponent } from './content/price/price.component';
import { PikbikTeamComponent } from './content/team/team.component';
import { PikbikClientsComponent } from './content/clients/clients.component';
import { PikbikBlogComponent } from './content/blog/blog.component';
import { PikbikContactComponent } from './content/contact/contact.component';
import { PikbikSubscribeComponent } from './content/subscribe/subscribe.component';
import { PikbikFooterComponent } from './content/footer/footer.component';
import { MailService } from './services/mail.service';
import { GlobalValues } from './global/globalvalues';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PikbikHeaderComponent,
    PikbikAboutComponent,
    PikbikServicesComponent,
    PikbikPriceComponent,
    PikbikTeamComponent,
    PikbikClientsComponent,
    PikbikBlogComponent,
    PikbikContactComponent,
    PikbikSubscribeComponent,
    PikbikFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    MailService,
    GlobalValues
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
