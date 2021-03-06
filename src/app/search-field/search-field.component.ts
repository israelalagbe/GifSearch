import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
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
