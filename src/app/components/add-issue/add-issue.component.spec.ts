import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { AddIssueComponent } from './add-issue.component';

describe('AddIssueComponent', () => {
  let component: AddIssueComponent;
  let fixture: ComponentFixture<AddIssueComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddIssueComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AddIssueComponent);
        component = fixture.componentInstance;
        fixture.debugElement.query(By.css('form'));
        de.nativeElement;
      });
  });
  it(`should have a text 'issue'`,async () => {
    expect(component.IssueArr.issue_message.text).toBeTruthy();
  })
});



