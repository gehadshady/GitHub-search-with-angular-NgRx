import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBarComponent} from './components/search-bar/search-bar.component'; 
import {HomeComponent} from './pages/home/home.component'; 
import {RepoDetailsComponent} from './components/repo-details/repo-details.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'item/:id', component: RepoDetailsComponent},
  {path:'**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
