import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MovieViewPageRoutingModule } from './movie-view-routing.module';

import { MovieViewPage } from './movie-view.page';

describe('MovieViewPage', () => {
  let component: MovieViewPage;
  let fixture: ComponentFixture<MovieViewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieViewPage ],
      imports: [IonicModule.forRoot(), MovieViewPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
