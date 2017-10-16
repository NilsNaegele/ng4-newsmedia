import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles = [];

  constructor(private newsApiService: NewsApiService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    Object.keys(this.localStorageService.getObject('agents')).forEach((agent) => {
        this.newsApiService.fetchArticles(agent).subscribe((response) => {
          this.articles.push(...response['articles']);
        },
          error => console.error('Error fetching data!')
      );
    });
  }

  imageCheck(value) {
    return value ? value : 'http://www.icrossanddot.com/wp-content/uploads/news-icon.png';
  }

}
