import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';

import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
      {
        path: 'edit-category',
        component: EditCategoryComponent,
      },
      {
        path: 'edit-product',
        component: EditProductComponent,
      },
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
    ],
  },
];
