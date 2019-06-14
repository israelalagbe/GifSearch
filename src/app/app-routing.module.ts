import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GifDetailComponent } from './gif-detail/gif-detail.component';

const routes: Routes = [
  { path: 'gifs', component: HomeComponent },
  { path: 'gifs/:id', component: GifDetailComponent },
  { path: '', redirectTo: '/gifs', pathMatch: 'full', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
