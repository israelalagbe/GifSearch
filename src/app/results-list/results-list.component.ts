import { Component, OnInit } from '@angular/core';
import { GifService, Gif } from '../services/gif.service';
import { Observable } from 'rxjs';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  gifs: Observable<Gif[]>;
  constructor(private gifService: GifService,private sanitizer: DomSanitizer,private router: Router) { }

  ngOnInit() {
    this.gifs = this.gifService.getGifs();
    
  }
  safeURL(oldURL ): SafeUrl {
    return   this.sanitizer.bypassSecurityTrustUrl(oldURL);
  }
  open(gif: Gif){
    this.router.navigate(['gifs', gif.id])
  }
}
