import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  getAllEmployees() {
    return this.apollo.query({
      query: gql`
        query {
          getAllEmployees {
            _id
            first_name
            last_name
            email
            gender
            salary
          }
        }
      `
    });
  }

  // Implement other methods for mutations or additional queries
}
