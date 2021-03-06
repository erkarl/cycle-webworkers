function makeWebworkerDriver(fileName) {
  let worker = new Worker(fileName);
  return function webWorkerDriver(outgoing$) {
    let incoming$ = Rx.Observable.create(function(observer){
      worker.onmessage = msg => {
        observer.onNext(msg);
      }
    });
    outgoing$.subscribe(function(outgoing){
      worker.postMessage(outgoing)
    });
    return incoming$
  }
};

module.exports = makeWebworkerDriver;
