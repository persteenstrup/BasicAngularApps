import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmailsComponent } from './emails/emails.component';
import { SwitchboardComponent } from './switchboard/switchboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailSubComponent } from './emails/email-sub/email-sub.component';
import { LayoutComponent } from './layout/layout.component';
import { AlphaComponent } from './layout/alpha/alpha.component';
import { BetaComponent } from './layout/beta/beta.component';
import { GammaComponent } from './layout/beta/gamma/gamma.component';
import { PowerlevelComponent } from './powerlevel/powerlevel.component';
import { HumanComponent } from './powerlevel/human/human.component';
import { SaiyanComponent } from './powerlevel/saiyan/saiyan.component';
import { SupersaiyanComponent } from './powerlevel/supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './powerlevel/supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './powerlevel/supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './powerlevel/supersaiyanfour/supersaiyanfour.component';
import {DataService} from './data.service';
import { NumberserviceComponent } from './numberservice/numberservice.component';
import { Numserve1Component } from './numberservice/numserve1/numserve1.component';
import { Numserve2Component } from './numberservice/numserve2/numserve2.component';
import { Numserve3Component } from './numberservice/numserve3/numserve3.component';
import { NumberService } from './number.service';
import { NinjagoldComponent } from './ninjagold/ninjagold.component';
import { GoldcountComponent } from './ninjagold/goldcount/goldcount.component';
import { MakegoldComponent } from './ninjagold/makegold/makegold.component';
import { HistorygoldComponent } from './ninjagold/historygold/historygold.component';
import { GoldService } from './gold.service';
import { GitscoreComponent } from './gitscore/gitscore.component';
import { GitapiService } from './gitapi.service';
import { HttpClientModule } from '@angular/common/http';
import { PowerService } from './power.service';

//import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EmailsComponent,
    SwitchboardComponent,
    RegistrationComponent,
    EmailSubComponent,
    LayoutComponent,
    AlphaComponent,
    BetaComponent,
    GammaComponent,
    PowerlevelComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
    SupersaiyanfourComponent,
    NumberserviceComponent,
    Numserve1Component,
    Numserve2Component,
    Numserve3Component,
    NinjagoldComponent,
    GoldcountComponent,
    MakegoldComponent,
    HistorygoldComponent,
    GitscoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService, NumberService, GoldService, GitapiService, PowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
``