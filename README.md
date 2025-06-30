# WatchingList

A simple React app to keep track of shows you want to watch, built with [Vite](https://vitejs.dev/) and React.

## Features

- Add new shows with title, description, category, and release date
- Move shows up or down in your list
- Remove shows from your list
- Data is saved in your browser (localStorage)
- Responsive and modern UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/hmmambabikhouja/watchingList.git
   cd watchingList
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
watchingList/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   ├── Header.jsx
  │   │   ├── List.jsx
  │   │   ├── ListItem.jsx
  │   │   └── NewItem.jsx
  │   ├── media/
  │   ├── App.jsx
  │   ├── index.css
  │   └── main.jsx
  ├── index.html
  ├── package.json
  └── vite.config.js
```

## Live Demo

Visit the website: [https://hmmambabikhouja.github.io/watchingList/](https://hmmambabikhouja.github.io/watchingList/)

## License