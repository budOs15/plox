import { NgModule } from "@angular/core";
import { AppComponent } from "./components/app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ProductComponent } from "./components/product/products.component";
import { VendorComponent } from "./components/vendor/vendor.component";
import { CartComponent } from "./components/cart/cart.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProductComponent,
        VendorComponent,
        CartComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],

    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}