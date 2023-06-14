# Promptbook

Promptbook is a full-stack, CRUD, Next.js 13 web application that lets you share discover, create, and share creative AI prompts. The purpose of building this application is to master essential Next.js concepts and new Next.js 13 features.

## Learnings

### What does Next.js have that React does not?

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
