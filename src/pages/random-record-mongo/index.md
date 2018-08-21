---
title: Get a random document from a MongoDB collection
date: '2018-01-02'
---

About a year ago I started [FreeCodeCamp](https://www.freecodecamp.org/) and went through the front end projects.

I was recently looking back at that code and well, I've come a long way. It inspired me to redo some projects using the new skills I've learned.

I decided to start with the [Build a Random Quote Machine](https://www.freecodecamp.org/challenges/build-a-random-quote-machine) project, this time writing my own backend.

The project is to make an app that displays random quotes to the users.

After creating a collection of quotes in MongoDB, I learned a really easy way to get a random document from a collection.

```javascript
db.mycoll.aggregate({ $sample: { size: 1 } })
```

Starting with the 3.2 release of MongoDB, you can get N number of random records using the $sample operator by changing the size value.

It's that simple.
