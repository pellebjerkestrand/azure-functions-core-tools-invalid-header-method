To reproduce exception on Windows, run (on Windows):

```
npm ci
npm start
```

In another context, run:

```
npm test
```

You should, in the first context, see something like

```
Exception: Headers.append: ":method" is an invalid header name.
Stack: TypeError: Headers.append: ":method" is an invalid header name.
```

To fix this, install undici@5.27.2.

```
npm i -S undici@5.27.2 --save-exact
```

Run, again, the commands to reproduce and assert that there's no error message in your console.
