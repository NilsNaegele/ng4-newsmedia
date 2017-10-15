import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hideSettings: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.map(event => event instanceof NavigationStart)
                          .subscribe(() => {
                            this.hideSettings = ('/news' !== this.router.url) ? true : false;
                          });
   }

}
