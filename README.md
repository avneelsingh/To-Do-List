# 📝 To-Do List

A simple and modern **To-Do List web application** built using **React.js** and **Vite**.

The application allows users to create, complete, delete, and reorder tasks using drag-and-drop. Todo data is automatically stored in the browser's **Local Storage**, so tasks remain available even after refreshing the page.

## 🚀 Features

* ➕ Add new tasks
* ✅ Mark tasks as completed
* ❌ Delete tasks
* 🔄 Drag and drop tasks to change their order
* 💾 Persistent data using Local Storage
* 🎨 Clean and modern user interface
* 📱 Responsive design for different screen sizes
* ⚡ Built using React functional components and Hooks
* 🔢 Automatically maintains unique task IDs

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**
* **Local Storage API**
* **HTML5 Drag and Drop API**

## 📂 Project Structure

```text
to-do-list/
│
├── public/
│
├── src/
│   ├── Assets/
│   │   ├── tick.png
│   │   ├── not_tick.png
│   │   └── cross.png
│   │
│   ├── Components/
│   │   ├── Todo.jsx
│   │   └── TodoItems.jsx
│   │
│   ├── CSS/
│   │   ├── Todo.css
│   │   └── TodoItems.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ React Concepts Used

### `useState`

Used to manage the list of todo items.

```javascript
const [todos, setTodos] = useState([]);
```

### `useRef`

Used to access the input field and maintain the task counter without causing unnecessary component re-renders.

```javascript
const inputRef = useRef(null);
const count = useRef(0);
```

### `useEffect`

Used to automatically save the todo list whenever it changes.

```javascript
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

## 💾 Local Storage

The application uses the browser's **Local Storage API** to persist todo data.

The following data is stored:

```text
todos
todos_count
```

### How it works

1. User adds a task.
2. The task is added to the React state.
3. `useEffect()` detects the change.
4. The updated todo list is saved to Local Storage.
5. When the application is opened again, the saved todos are loaded from Local Storage.

Therefore, refreshing the page does not remove the existing tasks.

## 🖱️ Drag and Drop

The application supports **HTML5 drag-and-drop** functionality.

Users can drag a task and drop it at another position to reorder the list.

For example:

```text
Before:

Task 1
Task 2
Task 3
Task 4


After dragging Task 4 to the top:

Task 4
Task 1
Task 2
Task 3
```

The updated order is also automatically saved to Local Storage.

## 🧩 Components

### `Todo.jsx`

The main component responsible for:

* Managing todo state
* Adding tasks
* Deleting tasks
* Marking tasks as completed
* Reordering tasks
* Loading todos from Local Storage
* Saving todos to Local Storage

### `TodoItems.jsx`

Responsible for displaying an individual todo item.

It receives data and callback functions from the `Todo` component through props.

It handles:

* Todo display
* Completion toggle
* Delete action
* Drag-and-drop events

## 🔄 Application Flow

```text
User Action
     │
     ├── Add Todo
     │      ↓
     │   setTodos()
     │
     ├── Complete Todo
     │      ↓
     │   setTodos()
     │
     ├── Delete Todo
     │      ↓
     │   setTodos()
     │
     └── Drag & Drop
            ↓
         setTodos()
            ↓
       todos state updated
            ↓
        useEffect()
            ↓
      Local Storage updated
```

## 💻 Installation and Setup

### Prerequisites

Make sure **Node.js** and **npm** are installed on your system.

Check the installed versions:

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/avneelsingh/to-do-list.git
```

Or download the repository as a ZIP file and extract it.

### 2. Navigate to the Project Directory

```bash
cd to-do-list
```

### 3. Install Dependencies

```bash
npm install
```

This installs all the dependencies listed in `package.json`.

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173/
```

Open the URL in your browser to use the application.

## 📦 Available Scripts

### Start Development Server

```bash
npm run dev
```

Starts the application in development mode.

### Build for Production

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Previews the production build locally.

## 🌐 Live Demo

Add your deployed application link here:

```text
https://to-do-list-learning.netlify.app/
```

## 👨‍💻 Author

**Avneel Singh**


