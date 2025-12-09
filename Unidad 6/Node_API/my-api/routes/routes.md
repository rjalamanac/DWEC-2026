# ✅ **1. `req` (Request)**

`req` represents the **HTTP request** sent by the client (browser, Postman, frontend, etc.).

It contains things like:

- `req.params` → route parameters (`/users/:id`)
- `req.query` → query string (`?page=2`)
- `req.body` → body of POST/PUT requests
- `req.headers` → request headers
- `req.method` → GET, POST, PUT…
- `req.url` → requested URL

Example:

```js
console.log(req.query.page);
```

---

# ✅ **2. `res` (Response)**

`res` is what you use to **send the response** back to the client.

Useful methods:

- `res.send()` → send text, JSON, buffer…
- `res.json()` → send JSON automatically
- `res.status()` → set HTTP status
- `res.redirect()` → redirect to another URL

In your code:

```js
res.send(JSON.stringify(books));
```

returns a JSON string with the books.

You could also write:

```js
res.json(books); // cleaner
```

---

# ✅ **3. `next` (Next middleware)**

`next` is a function that tells Express to **move to the next middleware** in the chain.

You typically use it when:

- You want to continue to another handler
- You want to pass an error (e.g., `next(error)`)

Example:

```js
next(); // move to next route or middleware
next(new Error("Something went wrong")); // send error
```

If your route sends a response, you **usually don’t need next**.

---

# 🔍 Summary

| Parameter | Meaning         | Used for                     |
| --------- | --------------- | ---------------------------- |
| **req**   | Request         | Read data from the client    |
| **res**   | Response        | Send data back to the client |
| **next**  | Next middleware | Pass control to next handler |
