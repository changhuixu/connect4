import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AiBoardComponent } from './ai-board/ai-board.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [AppComponent, AiBoardComponent, BoardComponent, CellComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'turn-based', component: BoardComponent },
      { path: 'ai', component: AiBoardComponent },
      { path: '**', redirectTo: '' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
