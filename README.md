## Getting Started

- Clone this repository to your local machine.


```bash
git clone https://github.com/medhatjachour/natiq_task.git
cd natiq_task
npm i 
npm run dev
```

- To start docker 

```bash
docker build -t natiq-app.
```

# App structure

natiq_task/
|-- src/
|   |-- components/
|   |   |-- LoadingIndicator.tsx
|   |-- pages/
|   |   |-- HomePage.tsx
|   |   |-- AboutPage.tsx
|   |   |-- NatiqPage.tsx
|-- public/
|   |-- index.html
|   |-- favicon.ico
|-- package.json
|-- package-lock.json
|-- index.css
|-- vite.config.js
|-- Dockerfile
|-- .dockerignore
|-- .gitignore
|-- tailwind.config.js
