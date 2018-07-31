# Niklaus API

This is the core of Niklaus. It is a REST-style Node API using sqlite3 by default but should support other databases.

### Installing

You'll need sqlite3 (by default), python3, and build-essential (equivalent; for make, g++, etc) packages provided by your system package manager.

```
$ yarn
$ yarn start
```

### Usage

```
$ curl localhost:3000/posts | jq
[]
```