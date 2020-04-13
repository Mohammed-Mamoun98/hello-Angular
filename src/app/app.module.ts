import { UserComponent } from "./components/users/user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TransformDirective } from "./transform.directive";
import { SafePipe } from "./pipes/safe/safe.pipe";
import { UserService } from "./user/user.service";
import { HeaderComponent } from "./core/header/header.component";
import { CoreModule } from "./core/core.module";
import { ChatComponent } from "./components/chat/chat.component";
import { UsersComponent } from "./components/users/users.component";
import { BindungsComponent } from './components/bindungs/bindungs.component';
import { PropertyBindingsComponent } from './components/property-bindings/property-bindings.component';
import { EventBindingsComponent } from './components/event-bindings/event-bindings.component';
import { IoComponent } from './components/io/io.component';
import { GrandchildComponent } from './components/io/grandchild/grandchild.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformDirective,
    SafePipe,
    HeaderComponent,
    UserComponent,
    ChatComponent,
    UsersComponent,
    BindungsComponent,
    PropertyBindingsComponent,
    EventBindingsComponent,
    IoComponent,
    GrandchildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
