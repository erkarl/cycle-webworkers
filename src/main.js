import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, div, input, p} from '@cycle/DOM';
import makeWebworkerDriver from './webworker.js';

function main({DOM, webWorkers}) {
  const incomingWebworkers$ = webWorkers;
  webWorkers.subscribe(function(msg){
    console.log('incoming webworker', msg.data);
  });
  let outgoingWebworkers$ = Rx.Observable.interval(5000)
    .map(val => 'loop.js')
  return {
    DOM: Rx.Observable.of('')
      .map(someVal =>
        div([
          p('Cycle WebWorkers')
        ])
      ),
    webWorkers: outgoingWebworkers$
  };
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  webWorkers: makeWebworkerDriver('loop.js')
};

Cycle.run(main, drivers);
