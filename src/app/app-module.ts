import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DeptoList } from './depto-list/depto-list';
import { CarritoCompras } from './carrito-compras/carrito-compras';

@NgModule({
  declarations: [App, DeptoList, CarritoCompras],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
