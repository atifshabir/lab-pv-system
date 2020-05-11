import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/desktop/main/main.component';
import { MobileMainComponent } from './components/mobile/mobile-main/mobile-main.component';
import { LcaMainComponent } from './components/lca/lca-main/lca-main.component';



const routes: Routes = [
  {path: '', redirectTo: 'pc-frontend', pathMatch: 'full'},
  {path: 'pc-frontend', component: MainComponent},
  {path: 'mobile-frontend', component: MobileMainComponent},
  {path: 'pc-frontend/:lat/:lon/:zoom', component: MainComponent},
  {path: 'mobile-frontend/:lat/:lon/:zoom', component: MobileMainComponent},
  {path: 'lca-frontend', component: LcaMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
