# tic-tac-toe-api

## Running the server

```sh
npm install
npm start
```

The API will run on port 3005 by default.

## API Documentation

### Get Matches

#### Request

`GET /matches`

#### Response

**Status**

`200`

**Body**
```json
  [
    {
      "id": 1,
      "player_one": "Tic",
      "player_two": "Toe",
      "winner": "tie",
      "createdAt": "2018-10-09T20:29:26.126Z"
    },
    {
      "id": 2,
      "player_one": "Tic",
      "player_two": "Tac",
      "winner": "player_one",
      "createdAt": "2018-10-09T20:29:41.211Z"
    },
    {
      "id": 3,
      "player_one": "Tic",
      "player_two": "Toe",
      "winner": "tie",
      "createdAt": "2018-10-09T20:29:47.214Z"
    }
  ]
```

### Create Match (Athenticated)

#### Request

`POST /matches`

**Headers**

`Authorization  <token>`

**Body**
```json
  {
    "player_one": "Tac",
    "player_two": "Toe",
    "winner": "tie",
  }
```

#### Response

**Status**

`201`

**Body**
```json
  {
    "id": 7,
    "createdAt": "2018-11-28T13:02:56.613Z"
  }
```


### Authenticate

#### Request

`POST /login`

**Body**
```json
  {
    "email": "admin@wolox.com.ar",
    "password": "12345678"
  }
```

#### Response

**Status**

`200`

**Body**
```json
  {
    "token": "your token"
  }
```
