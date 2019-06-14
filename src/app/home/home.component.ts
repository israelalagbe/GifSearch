import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
    selector: 'app-home-page',
    // selector: 'app-root',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    name = 'Search Field';
    keyword = '';
    constructor(private gifService: GifService) {
    }

    ngOnInit() {

    }
    search(e: Event) {
        e.preventDefault();
        this.gifService.searchGifs(this.keyword);
    }
}
