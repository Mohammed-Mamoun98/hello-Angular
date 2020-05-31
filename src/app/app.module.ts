import { FormComponent as RFormComponent } from "./components/reactivePG/form/form.component";
import { UserService } from "./services/user/user.service";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/users/user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TransformDirective } from "./transform.directive";
import { SafePipe } from "./pipes/safe/safe.pipe";
import { CoreModule } from "./core/core.module";
import { ChatComponent } from "./components/chat/chat.component";
import { UsersComponent } from "./components/users/users.component";
import { BindungsComponent } from "./components/bindungs/bindungs.component";
import { PropertyBindingsComponent } from "./components/property-bindings/property-bindings.component";
import { EventBindingsComponent } from "./components/event-bindings/event-bindings.component";
import { IoComponent } from "./components/io/io.component";
import { GrandchildComponent } from "./components/io/grandchild/grandchild.component";
import { AttributeBindingComponent } from "./attribute-binding/attribute-binding.component";
import { ClassBindingsComponent } from "./class-bindings/class-bindings.component";
import { TodoappComponent } from "./components/todoapp/todoapp.component";
import { FormComponent } from "./components/todoapp/form/form.component";
import { TodosComponent } from "./components/todoapp/todos/todos.component";
import { TodoItemComponent } from "./components/todoapp/todo-item/todo-item.component";
import { ViewChildrenDemoComponent } from "./components/view-children-demo/view-children-demo.component";
import { MsgComponentComponent } from "./components/view-children-demo/msg-component/msg-component.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserPlaceholderComponent } from "./components/user-placeholder/user-placeholder.component";
import { HttpClientModule } from "@angular/common/http";
import { RxPlaygroundComponent } from "./rx-playground/rx-playground.component";
import { StructDirectiveComponent } from "./components/struct-directive/struct-directive.component";
import { CommonModule } from "@angular/common";
import { AttrDirectiveComponent } from "./components/attr-directive/attr-directive.component";
import { CustomStructDirectiveComponent } from "./components/custom-struct-directive/custom-struct-directive.component";
import { ChangeCaseDirective } from "./directives/change-case.directive";
import { CustomAttrDirectiveComponent } from "./components/custom-attr-directive/custom-attr-directive.component";
import { UnlessDirective } from "./directives/unless.directive";
import { PipesPGComponent } from "./components/pipes-pg/pipes-pg.component";
import { TodoAppComponent } from "./components/wrapTodo/todo-app/todo-app.component";

import {
  MatInputModule,
  MatDividerModule,
  MatTableModule,
} from "@angular/material";
import { HtmlToPdfComponent } from './components/html-to-pdf/html-to-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformDirective,
    SafePipe,
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
    ViewChildrenDemoComponent,
    MsgComponentComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    UserDetailsComponent,
    UserPlaceholderComponent,
    RxPlaygroundComponent,
    StructDirectiveComponent,
    AttrDirectiveComponent,
    CustomStructDirectiveComponent,
    ChangeCaseDirective,
    CustomAttrDirectiveComponent,
    UnlessDirective,
    PipesPGComponent,
    TodoAppComponent,
    RFormComponent,
    HtmlToPdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
