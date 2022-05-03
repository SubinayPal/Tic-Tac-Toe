import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DobComponent } from './dob/dob.component';
import { TempconvertPipe } from './tempconvert.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SpipePipe } from './spipe.pipe';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
@NgModule({
  declarations: [
    AppComponent,
    DobComponent,
    TempconvertPipe,
    SpipePipe,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
