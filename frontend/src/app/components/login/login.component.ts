// login.component.ts
import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../../services/graphql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    // Call GraphQL service methods here
  }

}
