// src/data/posts.ts
export const blogPosts = [
    {
      title: 'Testing, testing',
      date: '06/11/2023',
      para1: 'I have decided to finally create a website, for a number of reasons, but first and foremost it is to create a place to advertise myself. The second reason is to have somewhere I can showcase projects I may be working on; be it coding related, artwork, writing or something else entirely. Lastly, it is to help me develop my front-end skills (which are lacking right now).',
      para2: 'This is the very first day I have worked on the site and so I thought I would write a post to commemorate the occasion! This session started by setting up my PC with all the right tools: Node.js, npx and of course VS Code Pets. I then created the React create-react-app boilerplate with a Typescript template, as I also want to learn typescript and thought this a good a time as any. I know I want multiple pages, focusing on different things, so the next step was learning the best way to build that. I will be honest, that this is where my journey brought me to ChatGPT. I try not to use it too often but I find it good if you\'re a bit stuck on where to start. This showed me the magic of Components and Routes and, after a bit of fiddling and re-writing, I had BlogPost and BlogList components. The former is a simple HTML construct that builds these very posts with a couple of header and paragraph tags, and the latter maps the content from a list to said HTML. Next I built some NavBar components, one for the bar itself and one for each page listing, finishing by using Routes to link to the Home and Blog pages. I just need to push this all up to GitHub and then I think the next session will be fleshing those two pages out more with content and adding some styling, fun!',
    },
    // Add more blog posts here
  ];
  