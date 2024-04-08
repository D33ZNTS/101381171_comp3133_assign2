// employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../services/graphql.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    // Call GraphQL service methods here
  }

}
