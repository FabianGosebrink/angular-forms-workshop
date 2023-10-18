import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BlockButtonsComponent } from '../block-buttons/block-buttons.component';

@Component({
  selector: 'app-simple-form-group',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    BlockButtonsComponent,
  ],
  templateUrl: './simple-form-group.component.html',
  styleUrls: ['./simple-form-group.component.css'],
})
export class SimpleFormGroupComponent {}
