## Getting Started

- Clone this repository to your local machine.


```bash
git clone https://github.com/medhatjachour/natiq_task.git
cd natiq_task
npm i 
npm run dev
```

- To to run test
```bash
npm test
```

- To start docker 

```bash
docker build -t natiq-app.
```

# App structure

natiq_task/
|-- src/
|   |-- components/
|   |   |-- Navbar.tsx
|   |   |-- LoadingIndicator.tsx
|   |   |-- LoadingIndicator.test.tsx
|   |-- pages/
|   |   |-- HomePage.tsx
|   |   |-- AboutPage.tsx
|   |   |-- NatiqPage.tsx
|   |   |-- __tests__/
|   |       |-- NatiqPage.test.tsx
|-- assets/
|   |-- react.svg
|-- index.css
|-- api.ts
|-- main.tsx
|-- main.css
|-- app.tsx
|-- app.css
|-- vite-env.d.ts
|-- package.json
|-- eslint.config.js
|-- package-lock.json
|-- vite.config.js
|-- Dockerfile
|-- .dockerignore
|-- .gitignore
|-- tailwind.config.js
|-- .babelrc
|-- jest.config.cjs
|-- jest-setup.cjs
|-- index.html
