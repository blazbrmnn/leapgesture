# Structuring a modern web project
… according to me, making notes instead of actually code for no reason ....

- Features: accounts, dashboard
- Packages: react, redux
    decide: express.js or socket.io, graphql (optional)

- Layout: bootstrap, semantic-ui, material-ui, fluent-ui
- UI components (display): full-page cover (carousel), cards (progress bar, attached), jumbotron (in masonry grid), navbar (with scrollspy), breadcrumbs, pagination, spinner or loader, shimmer placeholder, label or tag
- UI components (input): marquee, ...


## Server-side rendering example (consider code splitting)
Most notable (top-level) sections, code shared among frontend client and server (in designated "/common" folder or in general "/src")

	index.actions (exports redux constants, verb trie)
	index.routes (exports {react routes object})

	server/index (sets up server, resolves react router.loadData => xml & json, presets redux store window.__PRELOADED_STATE__)

	client/index ()

	[](redux.js.org/recipes/server-rendering)


## Socket.IO

```javascript "server/"

//
// Socket.IO enables real-time, bidirectional and event-based communication.
// It works on every platform, browser or device, focusing equally on reliability and speed.

const Server = require("socket.io");
const PORT   = 3030;
const server = require("http").Server();

const io = Server(PORT);

io.use((socket, next) => {
  const err = new Error("not authorized");
  err.data = { content: "Please retry later" }; // additional details
  next(err);
});

io.close(); // Close current server

server.listen(PORT); // PORT is free to use


io = Server(server);

const uuid = require("uuid");

io.engine.generateId = (req) => {
  return uuid.v4(); // must be unique across all Socket.IO servers
}


var route = (domainName, route) => return io("domainName")

const socket = route("https://example.com");
const usersSocket = route("https://example.com", "/users");

const nsp = io.of("/my-namespace");

nsp.on("connection", socket => {
  console.log("someone connected");
});

nsp.emit("hi", "everyone!");


const socketCount = io.of("/admin").sockets.size; // on this node

const ids = await io.of("/chat").in("general").allSockets();


io.socketsJoin("room1"); // all instances join "room1"
io.in("room1").socketsJoin(["room2", "room3"]); // ...


// client-side

socket.on("connect_error", err => {
  console.log(err instanceof Error); // true
  console.log(err.message); // not authorized
  console.log(err.data); // { content: "Please retry later" }
});

```


## Structure of a Project in Kraken (Express.js based templating engine)
 … Secure and scalable layer that extends Express by providing structure and convention (as follows)

> /config  
> Application configuration including environment-specific configs

> /controllers
> Routes and logic

> /locales
> Language specific content bundles

> /lib
> Common libraries to be used across your app

> /models
> Models

> /public
> Web resources that are publicly available

> /public/templates
> Server and browser-side templates

> /tasks
> Grunt tasks to be automatically registered by [grunt-config-dir](https://github.com/logankoester/grunt-config-dir)

> /tests
> Unit and functional test cases

> index.js
> Application entry point


```js "index.js"
'use strict';

var kraken = require('kraken-js'),
    app = require('express')(),
    options = {
        onconfig: function (config, next) {
            config.get('view engines:js:renderer:arguments').push(app);

            next(null, config);
        }
        /* more options are documented in the README */
    },
    port = process.env.PORT || 8000;

app.use(kraken(options));

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});

```


### [KeystoneJS](keystonejs.com)
  … Website and API Application Framework / CMS with an auto-generated React.js Admin UI

> A KeystoneJS instance acts as a function of your schema which creates a GraphQL API for querying and an Admin UI for managing your data.


### [FeathersJS](https://docs.feathersjs.com/guides/basics/services.html#feathers-services)

### ... and plenty more frameworks, based on [Express.JS](https://expressjs.com/en/resources/frameworks.html)

### [Mantra JS specification to web applications in Meteor.JS and Node.js ecosystem (legacy)](https://kadirahq.github.io/mantra/)
