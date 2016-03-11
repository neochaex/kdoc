import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

@Component({
  selector: 'kdoc-app',
  viewProviders: [],
  moduleId: module.id,
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
//   { path: '/',      name: 'Home',  component: HomeComponent  },
//   { path: '/about', name: 'About', component: AboutComponent }
])
export class AppComponent {}
