# jaxx

A thin wrapper for browser XHR.

## Usage

### Jaxx.get(url, *success*, *error*)

- `url`: a string of an absolute or relative URL to be called
- `success` (optional): a function, called when the 'load' event fires on the request.
- `error` (optional): a function, called when the 'error' event fires on the request

#### Example

**Script:**
```javascript
var successHandler = function(){
  doSomething(this.responseText);
}

var errorHandler = function(){
  sobOpenly();
}

Jaxx.get('/mystery/clues', successHandler, errorHandler);
```

**Request:**
```
GET /mystery/clues HTTP/1.1
X-Requested-With: XMLHttpRequest
```

### Jaxx.post(url, payload, *success*, *error*)

- `url`: a string of an absolute or relative URL to be called
- `payload`: an object, which will be encoded as JSON and sent as the body of the request
- `success` (optional): a function, called when the 'load' event fires on the request.
- `error` (optional): a function, called when the 'error' event fires on the request

#### Example

**Script:**
```javascript
var guess = {
  suspect: 'Colonel Mustard',
  weapon: 'Lead pipe',
  room: 'Billiard Room'
}

Jaxx.post('/mystery/solve', guess);
```

**Request:**
```
POST /mystery/solve HTTP/1.1
Content-Length: 73
Content-Type: application/json
X-Requested-With: XMLHttpRequest

{"suspect":"Colonel Mustard","weapon":"Lead pipe","room":"Billiard Room"}
```
