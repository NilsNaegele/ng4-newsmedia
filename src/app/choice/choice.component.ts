import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { LocalStorageService } from '../local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit, OnDestroy {
  agents = [];
  sources = {};
  newsSubscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private newsApiService: NewsApiService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
        this.newsSubscription = this.newsApiService.fetchSources().subscribe((agents) => {
             this.agents = agents.sources;
        },
        error => console.error('Error fetching data'));
        this.sources = this.localStorageService.getObject('agents');

        if (Object.keys(this.sources).length > 0) {
          this.router.navigate(['/news']);
        }

        this.route.params.subscribe((obj) => {
            if (obj['data']) {
              this.router.navigate(['/settings']);
            }
        });
  }

  select(value) {
    if (!this.sources[value]) {
      this.sources[value] = true;
    } else {
      delete this.sources[value];
    }
    this.localStorageService.setObject('agents', this.sources);
  }

  gotoNews() {
    this.router.navigate(['/news']);
  }

  atLeastOne() {
    return Object.keys(this.sources).length > 0;
  }

  logoCheck(value) {
    return value ? value : 'https://lh3.googleusercontent.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAADwkE/KyrKDjjeV1o/s60-p-no/photo.jpg';
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }


}
