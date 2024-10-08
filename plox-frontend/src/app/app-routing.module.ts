import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { CartComponent } from "./components/cart/cart.component";
import { VendorComponent } from "./components/vendor/vendor.component";
import { ProductComponent } from "./components/product/products.component";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'products', component: ProductComponent},
    {path: 'vendors', component: VendorComponent},
    {path: 'cart', component: CartComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}