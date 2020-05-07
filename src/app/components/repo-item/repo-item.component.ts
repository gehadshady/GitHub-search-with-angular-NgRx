import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {

@Input()
item:any;

  constructor( private router:Router) { }

  ngOnInit() {
  }

  showItemDetails(id){
    this.router.navigate(['/item',id])
  }
}
