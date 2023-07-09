import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';

@Injectable({
  providedIn: 'root'
})

// this service will be used to provide the list of issues
export class IssuesService {

  private issues: Issue[] = [];
  constructor() { }

  // this method will return the list of issues
  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.complete);
  }

}
