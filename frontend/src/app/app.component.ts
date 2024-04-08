import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlService } from './services/graphql.service';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Component code here
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Declare LoginComponent here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [
    GraphqlService
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent here
})
export class AppModule { }
