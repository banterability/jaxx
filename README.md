# jaxx

A thin wrapper for browser XHR.

## Usage

**Script:**
```javascript
var guess = {
  suspect: 'Colonel Mustard',
  weapon: 'Lead pipe',
  room: 'Billiard Room'
}

Jaxx.get('/mystery/solve', guess);
```

**Request:**
```
POST /mystery/solve HTTP/1.1
Content-Length: 73
Content-Type: application/json
X-Requested-With: XMLHttpRequest

{"suspect":"Colonel Mustard","weapon":"Lead pipe","room":"Billiard Room"}
```
