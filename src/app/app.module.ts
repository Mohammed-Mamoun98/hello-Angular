import { UserComponent } from "./components/users/user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TransformDirective } from "./transform.directive";
import { SafePipe } from "./pipes/safe/safe.pipe";
import { UserService } from "./user/user.service";
import { HeaderComponent } from "./core/header/header.component";
import { CoreModule } from "./core/core.module";
import { ChatComponent } from "./components/chat/chat.component";
import { UsersComponent } from "./components/users/users.component";
import { BindungsComponent } from "./components/bindungs/bindungs.component";
import { PropertyBindingsComponent } from "./components/property-bindings/property-bindings.component";
import { EventBindingsComponent } from "./components/event-bindings/event-bindings.component";
import { IoComponent } from "./components/io/io.component";
import { GrandchildComponent } from "./components/io/grandchild/grandchild.component";
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingsComponent } from './class-bindings/class-bindings.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';
import { FormComponent } from './components/todoapp/form/form.component';
import { TodosComponent } from './components/todoapp/todos/todos.component';
import { TodoItemComponent } from './components/todoapp/todo-item/todo-item.component';

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
    AttributeBindingComponent,
    ClassBindingsComponent,
    TodoappComponent,
    FormComponent,
    TodosComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
