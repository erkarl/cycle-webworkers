import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, div, input, p} from '@cycle/DOM';


function main(drivers) {
  return {
    DOM: drivers.DOM.select('input').events('click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        div([
          input({type: 'checkbox'}), 'Toggle me',
          p(toggled ? 'TURNED ON' : 'TURNED OFF')
        ])
      )
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
