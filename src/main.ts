import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { routeConfig } from './app/routes';
import { provideStore } from '@ngxs/store';
import { UsersState } from './app/state/users.state';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <main>  
      <ul>
        <li>
          <a [routerLink]="['/']">        
            <header>Users</header>    
          </a>
        </li>
        <li>
          <a [routerLink]="['/stats']">        
            <header>Stats</header>    
          </a>  
        </li> 
      </ul>
       
      <section class="content">       
        <router-outlet></router-outlet>  
      </section>   
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 1rem;
    }`,
    `ul li {
      margin: 0;
    }`,
    `ul a {
      text-decoration: none;
    }`],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routeConfig), provideStore(
    [UsersState],
  )]
});
