# Astro error handling, page -vs- component frontmatter

```sh
npm install
```

then

```sh
npm run build && npm run preview
```

-or-

```sh
npm run dev
```

## Good scenario (page frontmatter throwing)

```sh
curl -s http://localhost:4321/good -v
```

This returns a 500 as expected, and the logs from the middleware capture that error.

```sh
*   Trying 127.0.0.1:4321...
* connect to 127.0.0.1 port 4321 failed: Connection refused
*   Trying [::1]:4321...
* Connected to localhost (::1) port 4321 (#0)
> GET /good HTTP/1.1
> Host: localhost:4321
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 500 Internal Server Error
< Date: Tue, 05 Nov 2024 20:55:24 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
< 
* Connection #0 to host localhost left intact
```

## Bad scenario (component frontmatter throwing)

```sh
curl -s http://localhost:4321/bad -v
```

This returns a 200, despite emitting the text "Internal server error", the middleware is unable to capture that error.

```sh
*   Trying 127.0.0.1:4321...
* connect to 127.0.0.1 port 4321 failed: Connection refused
*   Trying [::1]:4321...
* Connected to localhost (::1) port 4321 (#0)
> GET /bad HTTP/1.1
> Host: localhost:4321
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 200 OK
< content-type: text/html
< Date: Tue, 05 Nov 2024 20:56:45 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
< 
* transfer closed with outstanding read data remaining
* Closing connection 0
curl: (18) transfer closed with outstanding read data remaining
Internal server error
```
