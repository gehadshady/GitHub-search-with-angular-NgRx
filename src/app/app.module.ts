import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RepoItemComponent } from './components/repo-item/repo-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './pages/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RepoItemComponent,
    SearchBarComponent,
    ReposListComponent,
    RepoDetailsComponent,
    HomeComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,

    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    NoopAnimationsModule,
    EffectsModule.forFeature([SearchEffects]),
    EffectsModule.forRoot([SearchEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
