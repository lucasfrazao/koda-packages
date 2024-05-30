<div align="center">

  <img src="./public/koda.svg" height="100" width="100" alt="logo koda package"/>

  <p align="center">This web application allow users to search by npm packages and see revelation informations about a specific package. The application has a friendly and intuitive interface to make easy the experience during the browsing.</p>
</div>

---

### Built Koda Packages

To built this web application I've used different apis and stacks, down below I'll introduce some stuff to make this possible. First of all, lets gonna talking about apis to get metadata packages and bundle information.

- <a href="https://github.com/pastelsky/bundlephobia" target="_blank">bundlephobia-api</a> it's amazing! There's no doubts, that's have been the main inspiration to built koda packages! <a href="https://bundlephobia.com/" target="_blank">Click here</a> to check the website.
- <a href="https://api-docs.npms.io/#api">npms-api</a> an excellent open source search api to get node packages information.
- <a href="https://github.com/npm/registry/tree/main">registry npm</a> a collection of archived documentation about registry endpoints/API.

Ok, now we can talking about stacks. I'll try to be concise.

<table width='800px'>
   <thead>
    <tr>
      <th scope="col">Stack</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Reactjs</th>
      <td>18.2.0</td>
    </tr>
    <tr>
      <th scope="row">Typescript</th>
      <td>5.2.2</td>
    </tr>
    <tr>
      <th scope="row">Tailwindcss</th>
      <td>3.4.3</td>
    </tr>
  </tbody>
</table>
<small>And some usual libs to front-end that I like, react hook form, zod, react query (tanstack/query), dates-fns and axios.</small>

<!-- last but not least, who is koda?  -->
