if (window.Worker) {
  console.log('webWorker');
  let webWorker = new Worker('loop.js')
  webWorker.onmessage = function(e) {
    console.log('For loop done outside worker.');
  };
  webWorker.postMessage([]);
}
