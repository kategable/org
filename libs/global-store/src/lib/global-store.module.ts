import { CommonModule } from '@angular/common';
import { NgModule, isDevMode } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),],
})
export class GlobalStoreModule {}
