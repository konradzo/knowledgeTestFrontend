import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryService} from './services/category.service';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './components/category/category.component';

const routes: Routes = [
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'categories', component: CategoryListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
