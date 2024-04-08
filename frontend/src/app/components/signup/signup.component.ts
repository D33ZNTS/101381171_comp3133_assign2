// signup.component.ts
import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../services/graphql.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    // Call GraphQL service methods here
  }

}
