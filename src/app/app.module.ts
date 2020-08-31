import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryService} from './services/category.service';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './components/category/category.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services/user.service';

const routes: Routes = [
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
