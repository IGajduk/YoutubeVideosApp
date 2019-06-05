import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesToLearnPage } from './languages-to-learn.page';

describe('LanguagesToLearnPage', () => {
  let component: LanguagesToLearnPage;
  let fixture: ComponentFixture<LanguagesToLearnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesToLearnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesToLearnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
