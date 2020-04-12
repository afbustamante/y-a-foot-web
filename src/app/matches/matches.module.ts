import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRegistryComponent } from './match-registry/match-registry.component';
import { MatchSearchComponent } from './match-search/match-search.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [MatchRegistryComponent, MatchSearchComponent, MatchListComponent, MatchDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class MatchesModule { }
