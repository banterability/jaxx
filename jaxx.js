window.Jaxx = (function(){
  var createRequest = function(method, url, callback){
    var request = new XMLHttpRequest();
    request.onload = callback;
    request.open(method, url, true);
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    return request;
  };
  return {
    get: function(url, callback){
      var request = createRequest('get', url, callback);
      request.send();
    },
    post: function(url, payload, callback){
      var request = createRequest('post', url, callback);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  };
})();
