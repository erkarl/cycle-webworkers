import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, div, input, p} from '@cycle/DOM';

function main(drivers) {
  console.log('main');
  setInterval(function(){
    for(var i = 0; i < 5000; i++){
      console.log('looping');
    }
  }, 5000);
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
