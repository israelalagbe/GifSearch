import { Component, OnInit } from '@angular/core';
import { GifService, Gif } from '../services/gif.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-home-page',
    // selector: 'app-root',
    templateUrl: './gif-detail.component.html',
})
export class GifDetailComponent implements OnInit {
    gifId: string;
    gif: Observable<Gif>;
    constructor(private gifService: GifService,private route:ActivatedRoute,private sanitizer: DomSanitizer) {
        this.route.params.subscribe((res)=>{
            this.gifId = res.id;
        });
    }

    async ngOnInit() {
        this.gif = this.gifService.getGif(this.gifId);
    }
    safeURL(oldURL ): SafeUrl {
        return   this.sanitizer.bypassSecurityTrustUrl(oldURL);
    }
}
