import {Component, OnInit} from '@angular/core';
import {XcdkService} from '../../services/xcdk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any;


  constructor(private xcdkService: XcdkService) {
    this.getComic();
  }

  ngOnInit(): void {
  }

  getComic(): void {
    this.xcdkService.getComic().subscribe(resp => {
      this.data = resp;
    });
  }

  getComicById(searchTerm: string): void {
    this.xcdkService.getComicById(searchTerm).subscribe(resp => {
      this.data = resp;
    }, () => {
      alert('Comic not found');
    });
  }

}
