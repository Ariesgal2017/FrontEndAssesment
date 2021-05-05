import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {
  searchTerm: any;
  searchTag: any;

  constructor() { }

  ngOnInit(): void {
  }

}
