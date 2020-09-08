import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/models/Family';
import { FamilyServicesService } from 'src/app/services/family-services.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  constructor(private familyService: FamilyServicesService) { }

  families = [];

  ngOnInit() {
    this.familyService.getFamilies().subscribe(
      data => (this.families = data),
    );
  }

}
