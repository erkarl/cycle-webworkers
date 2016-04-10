function makeWebworkerDriver(fileName) {
  console.log('new webworker', fileName);
  let worker = new Worker('loop.js');
  return function webWorkerDriver(outgoing$) {
    let incoming$ = Rx.Observable.create(function(observer){
      worker.onmessage = msg => {
        console.log('incoming msg', msg);
        observer.onNext(msg);
      }
    });
    outgoing$.subscribe(function(outgoing){
      console.log('worker outgoing');
      worker.postMessage(outgoing)
    });
    return incoming$
  }
};

module.exports = makeWebworkerDriver;
