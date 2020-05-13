import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./pages/graph/graph.module').then(m => m.GraphModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./pages/rxjstest/rxjstest.module').then(m => m.RxjstestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
