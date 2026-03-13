import { Routes } from '@angular/router';
import { ProductmgmtEdit } from './productmgmt-edit/productmgmt-edit';
import { ProductComp } from './product-comp/product-comp';
import { ProductmgmtList } from './productmgmt-list/productmgmt-list';
import { ProductmgmtAdd } from './productmgmt-add/productmgmt-add';

export const routes: Routes = [


{ path:'', component:ProductmgmtList },
{ path:'add', component: ProductmgmtAdd },
{ path:'edit/:id', component:ProductmgmtEdit }


];
