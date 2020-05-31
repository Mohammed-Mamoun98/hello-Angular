import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./components/users/users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { UserPlaceholderComponent } from "./components/user-placeholder/user-placeholder.component";
import { RxPlaygroundComponent } from "./rx-playground/rx-playground.component";
import { StructDirectiveComponent } from "./components/struct-directive/struct-directive.component";
import { AttrDirectiveComponent } from "./components/attr-directive/attr-directive.component";
import { CustomStructDirectiveComponent } from "./components/custom-struct-directive/custom-struct-directive.component";
import { CustomAttrDirectiveComponent } from "./components/custom-attr-directive/custom-attr-directive.component";
import { PipesPGComponent } from "./components/pipes-pg/pipes-pg.component";
import { FormComponent } from "./components/reactivePG/form/form.component";
import { HtmlToPdfComponent } from "./components/html-to-pdf/html-to-pdf.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "rx", component: RxPlaygroundComponent },
  { path: "about", component: AboutComponent },
  { path: "direct", component: StructDirectiveComponent },
  { path: "attr", component: AttrDirectiveComponent },
  { path: "customStruct", component: CustomStructDirectiveComponent },
  { path: "customAttr", component: CustomAttrDirectiveComponent },
  { path: "pipes", component: PipesPGComponent },
  { path: "form", component: FormComponent },
  { path: "pdf", component: HtmlToPdfComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [
      { path: ":id", component: UserDetailsComponent },
      { path: "", component: UserPlaceholderComponent },
    ],
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [UserComponent],
})
export class AppRoutingModule {}
