import { Component } from '@angular/core';
import { IssuesService } from './../issues.service';
import { Issue } from './../issue';



@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {

  issues: Issue[] = [];
  constructor(private issuesService: IssuesService) { }
  private getIssues() {
     this.issues = this.issuesService.getPendingIssues();
  }

}
