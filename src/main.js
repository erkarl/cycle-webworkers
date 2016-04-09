import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, div, input, p} from '@cycle/DOM';
import webworker from './webworker.js';

function main(drivers) {
  return {
    DOM: Rx.Observable.of('')
      .map(someVal =>
        div([
          p('Cycle WebWorkers')
        ])
      )
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
