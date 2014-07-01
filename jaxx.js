window.Jaxx = (function(){
  var createRequest = function(method, url, successCb, errorCb){
    var request = new XMLHttpRequest();
    successCb = successCb || function(){};
    errorCb = errorCb || function(){};
    request.addEventListener('load', successCb, false);
    request.addEventListener('error', errorCb, false);
    request.open(method, url, true);
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    return request;
  };
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
