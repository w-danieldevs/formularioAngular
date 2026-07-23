import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFrom } from './register-from';

describe('RegisterFrom', () => {
  let component: RegisterFrom;
  let fixture: ComponentFixture<RegisterFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
