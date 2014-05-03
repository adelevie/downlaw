# downlaw

Write markdown with legal citations on the left, get rendered markdown on the right. Oh, and the legal citations become links.

See the demo: https://adelevie.github.io/downlaw/

## Contribute!

Add your favorite legal citation to the default text by editing [`build/app.js`](https://github.com/adelevie/downlaw/blob/master/build/app.js#L104).

### Dev notes

Pull requests are welcome. File an issue if you have any questions.

1. Clone the repo, cd into it
2. Run `npm install`
3. Edit `src/app.jsx`, then run `gulp` to transform it into a `.js` file.
4. Open `index.html` in a browser.

#### Build Process

Running `gulp` does a few things:

1. Transforms JSX into a Javascript
2. Uses Browserify to make code usable on the client
3. Minifies it

Check out the [`gulpfile`](https://github.com/adelevie/downlaw/blob/master/gulpfile.js) to see how all of this is done.

#### Hosting

This is just a simple static website. At minimum, you just need `index.html` exposed to a web server (e.g. any static hostic will suffice) and make sure it points to a copy of `build/app.js`.

A very simple way to host this would be to fork the repo and create a `gh-pages` branch:

```
$ git clone git@github.com:[YOUR_USERNAME]/downlaw.git
$ cd downlaw
$ git branch gh-pages
$ git checkout gh-pages
$ git push origin gh-pages
```

### License

MIT.

(c) 2014 Alan deLevie.