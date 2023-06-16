# Promptbook

Promptbook is a full-stack, CRUD, Next.js 13 web application that lets you share discover, create, and share creative AI prompts. The purpose of building this application is to master essential Next.js concepts and new Next.js 13 features.

## Dependencies

- bcrypt -> to hash passwords
- mongodb -> database of choice
- mongoose - database management
- next-auth - authentication

## File and Folder Structure

- /components - for reusable components
- /models - for MongoDB, mongoose database models (model based on which the document of the user will be created)
- /utils - for utility functions used throughout the application
- .env - environment variables inside of which secure keys are stored

## Learnings

### The Benefits of Next.js - What does Next.js have that React does not?

Next.js simplifies the development process and optimizes web applications through its primary features:

1. **Rendering**: The primary distinction between React and Next.js lies in how they handle rendering. While React renders the user interface on the client side (i.e. browser rendering), Next.js performs server-side rendering. However, Next.js offers flexibility in rendering options. We can choose to render the UI on the client side or server side according to our needs.

### What is client-side and server-side rendering? Which one is better?

Client-side or browser rendering happens on the client's device or the browser. When a user requests a web page, the server sends the basic HTML document and JavaScript code. The browser then downloads and executes the JavaScript code which leads to the rendering of components and finally the display of the website.

Server-side rendering involves rendering the webpage on the server before transmitting it to the client's device. When a user requests a page, the server processes the request and renders the component on the server side. The server then sends back the fully rendered HTML to the client's browser enabling immediate display.

This distinction highlights an essential aspect of web development: SEO (Search Engine Optimization). Search engine crawlers face difficulties indexing pages dynamically rendered on the client side as they may not be readily available. As a result, the SEO performance of such pages may suffer as search engines may not fully comprehend their content and rank them appropriately. By utilizing, Next.js, this issue is resolved by sending pre-rendered code directly to the client. This enables **easy crawling** and **indexing** by search engines leading to improved SEO.

### Why is SEO important?

SEO is crucial for optimizing a website's visibility and ranking in search engines' results. By focusing on SEO, we can achieve several benefits:

- Increased organic traffic.
- Enhanced user experience.
- Credibility & trustworthiness.
- Competitive advantage.

Prioritizing SEO can greatly impact the success of a website and its online presence.

2. **Routing**: To create different page routes in React, we have to install an additional package called **ReactRouterDOM** and then create routes in one of the files. In Next.js, a file-based routing system is used which means that routing is handled by the file system. Each folder in the _app_ directory becomes a route and the folder name becomes the route's path. For example, if we have a folder named _about_ in the _app_ directory, it can be accessed via `https://localhost:3000/about`. No external packages or complex configurations are needed.

3. **Ability to create full-stack applications**: From Next.js v9, developers behind Next introduced a new feature called **API Routes** enabling the creation of serverless functions to handle API Requests. Serverless APIs in Next.js are a way of creating API endpoints without the need for a traditional server. It allows the building and deployment of APIs:

- Without managing server infrastructure
- Worrying about scaling the server as traffic increases.

With this feature, we can create an API endpoint by simply creating a file called `route.js` in a specific folder within the app directory. This file in any route segment of the app directly corresponds to that route API endpoint.

4. **Automatic Code Splitting**: Code splitting is a technique that breaks down large bundles of JavaScript code into smaller, more manageable chunks that can be loaded as needed. This reduces the initial load time of a website and optimizes the user's experience while browsing. While this can be achieved in React, the process is manual and lots of configuration is needed as an application grows.

For example, we need to use the `lazy()` function from React to dynamically import the `About` component only when it is needed. We also use the `Suspense` component to show a fallback UI when the component is being loaded:

```javascript
const About = lazy(() => import("./About"));
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Text>Hello World!</Text>
    </Suspense>
  );
};
```

But, in Next.js, this process is an entirely automatic default behavior that does not require additional code. When a user navigates to another page, only the code required for that page is loaded, resulting in faster subsequent page navigation.

### Takeaways:

Lee Robinson, VP of Developer Experience at Vercel

> Moving from a typical React, Express, Webpack backend to Next.JS resulted in removing 20,000+ lines of code and 30+ dependencies while improving HMR (Hot Module Reloading) from 1.3s to 131ms which is 10x less.

Frontend development has gone through various advancements in areas like:

- Linting
- Formatting
- Compiling
- Bundling
- Minifying
- Deploying
- and many more!

However, to avoid the time spent configuring these tools, developers felt a need for a framework that would take care of most of these automatically so they could concentrate on the actual code. That is where Next.js comes in:

- automating most of the remaining processes.
- letting developers focus on building the essential business logic of the application.

**Final Advantage**: Next.js is still just React. Its purpose is just to simplify certain tasks allowing developers to concentrate on core React code. Next.js manages a variety of features discussed above that save time and reduce the effort required to build a React app from the ground up. Simply put, Next.js is an extension of React that streamlines the development process by automating several functions and allowing developers to focus on what they do best: writing React code.

## Next.Js Intro

By default, pages in Next.js are configured to be rendered server-side. To switch to client-side rendering we must specify by writing `'use client';` at the top of the page. It is important to keep in mind that **State Management** in React is primarily handled on the client side where the component state is managed and updated within the browser. As such, it is necessary to add `'use client';` at the top.

### Routing

To add a new route like `/about`:

- Create a folder named `about` in the `app` directory.
- Create a `page.js` file within the `about` folder.

The React component exported from `page.js` can then be accessed via `https://localhost:3000/about`.

### Nested Routing

To create a nested route in a Next.js application, we create a new folder of the desired name within the parent route with a new `page.js` file.

### Dynamic Routing

Dynamic routing is like having a flexible system for creating website pages based on different variables or data. Instead of manually creating each page, sometimes we need dynamic pages that allow our website to generate these pages on the fly.

In Next.js, we can achieve this by creating a folder wrapped inside square brackets: `[folder_name]`.

### `layout.js`

A new `layout.js` file can be created inside a subfolder. The purpose of this file is to allow for the sharing of UI components between routes. For instance, if we wanted to create a new React component that is going to have the logic of "Navigate to Top", for instance, to scroll back up after reading through some content in an article.

Let's say we want to create a component that we only want to reuse in pages that are within the posts folder. This is possible now if we put the `layout.js` file within posts.

### `loading.js`

`loading.js` can be added to each folder or subfolder and is going to look like this:

```javascript
const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />;
};

export default Loading;
```

The idea is that while `page.js` is being loaded, the loader in `loading.js` is going to be displayed. Sometimes our websites are not going to load correctly and in that case, we need to do error handling. It is essential to handle the errors gracefully by catching them and showing meaningful error messages on the client side.

### `error.js`

In Next.js, handling errors is also very simple. You need to create a new `error.js` file which is going to automatically run when an error happens and display it to the user.

**Note**: Error components must be client-side components. This is what a typical error component might look like:

```javascript
`use client`; // Error components must be Client components

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onclick={
          //Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
```

### Data Fetching (SSR, SSG, ISR)

Next.js provides three choices for selecting how to fetch data:

1. **Server Side Rendering (SSR)**: This means dynamic data rendered by the server. It is fetched fresh on each request. With SSR, each request to the server triggers a new rendering cycle and data fetch ensuring that the content is always up to date. _Example_:

```javascript
async function Page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
```

Here, we have an async function Page() where we are trying to fetch some data from the _jsonplaceholder_ API. Specifically, it is a dynamic page because we get the ID from the `params` of the page. The `cache: "no-store"` means we are not storing this information but simply fetching it and then displaying the title and the body of the fetched post. This ensures that it fetches the data every single time which means that it is server-side rendered.

2. **Static Site Generation (SSG) - Default**: If the `cache:no-store` is removed, that is static site generation which is what Next.js uses by default. It will automatically fetch the data but it will also cache it. This method is ideal for content that does not change frequently such as blog posts, documentation or marketing pages. For the first time, it is going to make a fetch, and then, it is going to already have the data and just display it.

3. **Incremental Static Generation (ISR)**: This method can be used by replacing `cache: "no-store"` with `next: {revalidate: 10}`. This combines the benefit of SSR and SSG for dynamic content in static sites. With ISR, we can specify certain data to be statically fetched at build time while defining a revalidation time interval (i.e. **10** in the above example). This means the data will be cached but after a specific time frame, it will refresh it and we will always have new data making this the both of best worlds for dynamic content.

### Next.js API Endpoints

Next.js allows applications to be full-stack which means running the application both on the front-end and the back-end. Using the same file-based routing system, Next.js allows us to handle HTTP requests and back-end functionality without requiring an external server like you would need Express in React.

Next.js covers all of the features found in traditional backend servers like middleware, parsing, authentication, serverless functions that simplify the deployment and scaling of API routes, and more.

**How to create a simple request route in Next.js?**
There are two different ways to define a route handler in Next.js. The first one is to create a file-based route handler within the `api` folder in the `app` directory.

The second approach is to create a direct route handler in the app directory itself. The caveat with this approach is that you have to create a special `route.js` file that is going to act as the backend API route. If you want to create a route that's going to start with a slash (/), as `page.js` does, then you need to keep in mind that the two names can not interfere. In the same fashion, if you wanted to create an API route for /post, you wouldn't be able to have a route within the post next to `page.js` because Next.js won't know:

```javascript
// posts -> regular
// posts -> api route
```

The first approach is recommended. Don't create routes within the `app` folder but instead, to keep our code clean and understandable, keep all the back-end related logic and API endpoints within the `api` folder. This separation makes it clear where your back-end and front-end are:

```javascript
// > app
//     > api
//         > users
//             > route.js
```

Next.js supports the following HTTP methods:

1. **GET** Retrieves data or resources from the server.
2. **POST**: Submits data to the server to create a new resource.
3. **PUT**: Updates or replaces an existing resource on the server.
4. **PATCH**: Partially updates an existing resource on the server.
5. **DELETE**: Removes a specific resource from the server.
6. **HEAD**: Retrieves the headers of a resource without fetching its body.
7. **OPTIONS**: Retrieves the supported HTTP methods and other communication options for a resource.

To create an HTTP method inside the route.js file, you simply need to write a GET function and begin implementing your backend logic within it:

```javascript
export async function GET(request) {
  return new Response("Hello, Next.js!");
}

// GET would be replace by other HTTP verbs where needed.
```

_Example_:

```javascript
export async function GET(request) {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  // Send the users a response
  return new Response(JSON.stringify(users));
}
```

There is no need to set up any extra additional express configuration.

### SEO & Metadata

Recently, Next.js introduced its new Metadata API. We can define Metadata in two ways:

1. Static Metadata: To modify the metadata in a static way, the only thing you have to do is export a special object called `metadata` from `page.js`:

```javascript
export const metadata = {
  title: "Home",
};

// Output:
// <head>
//  <title>Home</title>
//</head>

export default function Page() {
  return <h1>My normal Next.js Page with Static Metadata</h1>;
}
```

2. Dynamic Metadata: You will need to define and export an asynchronous function called `generateMetadata({params, searchParams})` that is going to get the dynamic parameters of a specific page, for instance, a product's ID. Based on the product's ID, we can then make a call to the getProduct function and then as the title of the page we can return a dynamic title that is equal to the title of that specific product:

```javascript
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);

  return {
    title: product.title,
  };
}

// Output:
// <head>
//  <title>My Unique Product</title>
// </head>

export default function Page() {
  return <h1>My Normal Next.js Page with Dynamic Metadata</h1>;
}
```

### Serverless Architecture in Next.js

- Every Next.js route is a serverless route: In Next.js, a route refers to a specific URL or endpoint that your application can respond to. Serverless routes in Next.js are designed to be lightweight and efficient. Instead of running on a traditional server that is always running, these routes are implemented as lambda functions.

- Lambda function that only opens up when it's called: In serverless computing, a lambda function is a small, self-contained piece of code that can be executed in response to an event. In this case, when a Next.js serverless route is called (when a user accesses a specific URL), the corresponding lambda function associated with that route is invoked. The lambda function "opens up" or executes only when it's triggered by a request.

- Spinning up the server and making a connection with the database: When a serverless route is called, the lambda function needs to perform certain tasks to respond to the request. This typically involves spinning up (starting) a server instance to handle the request and establishing a connection with a database if data retrieval or manipulation is required.

- The server doesn't run constantly: Unlike traditional server setups where a server is kept running continuously, serverless routes in Next.js only activate when requested. This on-demand nature allows for efficient resource utilization since the server is active only when needed. It helps to minimize costs and improve scalability.

- Connection to the database: To retrieve or update data from a database, the serverless route needs to establish a connection with the database. This connection is made when the lambda function is executed and is used to perform the necessary database operations required to handle the route's request.

In summary, the use of serverless routes in Next.js allows for efficient resource allocation by spinning up the server and establishing a database connection only when a specific route is called. This approach minimizes costs and enhances scalability compared to keeping a server running constantly.
