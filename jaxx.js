window.Jaxx = (function(){
  var createRequest = function(method, url, successCb, errorCb){
    var request = new XMLHttpRequest();
    registerCallbacks(request, successCb, errorCb);
    request.open(method, url, true);
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    return request;
  };

  var registerCallbacks = function(request, successCb, errorCb){
    registerCallback(request, 'load', successCb);
    registerCallback(request, 'error', errorCb);
  };

  var registerCallback = function(request, eventType, callback){
    request.addEventListener(eventType, callback || function(){}, false);
  }

  return {
    get: function(url, success, error){
      var request = createRequest('get', url, success, error);
      request.send();
    },
    post: function(url, payload, success, error){
      var request = createRequest('post', url, success, error);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  };
})();
