# ⏰ Task Management App
  A responsive task management application built with Angular 19 and Angular Material, featuring a Kanban-style board with drag-and-drop functionality.

---

## 🚀 Features
- **Kanban Board:** Three-column layout (To Do, In Progress, Done)
- **Drag & Drop:** Move tasks between columns with smooth animations
- **Task Management:** Create, update, and delete tasks
- **Responsive Design:** Works on desktop and mobile devices
- **Mock API:** Uses json-server for backend simulation
  
---

## 🛠️ Installation

### 1. Clone the repository
```bash
https://github.com/ISDavidraj/Task-Management.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install json-server
```bash
npm install -g json-server
```

### 4. Run the app
```bash
ng serve
```
---

## ☸ Development Setup
### Start the mock API server
```bash
json-server --watch db.json --port 3000
```

### Start the Angular development server
```bash
ng serve
```

### Open your browser to
http://localhost:4200

---

# 📜 Notes

- Ensure your mock API (**json-server**) is running before you perform **Add/Edit/Move** operations.
- Data is saved to the local **db.json** file (when using **json-server**).
- This project is purely **client-side**.

---

# 📋 Usage Instructions

### ➡️ 1. Add a New Task
- Click on the **"Add New Task"** button at the top-right.
- A form will open where you can:
  - Enter the **Task Title**.
  - Enter the **Task Description**.
  - Select the **Task Status** (To Do / In Progress / Done).
- After filling in the details, click **Save**.
- The new task will appear in the selected column.

---

### ➡️ 2. Edit an Existing Task
- Hover over any task card.
- Click on the **Edit icon**.
- A dialog will open pre-filled with the task details.
- Make your changes and click **Update** to save.

---

### ➡️ 3. Delete a Task
- Hover over any task card.
- Click on the **Erase icon**.

---

### ➡️ 4. Move Task Between Columns (Drag & Drop)
- Click and hold a task card.
- Drag it to another column (e.g., move from "To Do" ➔ "In Progress").
- Drop it — the task will automatically update its status.

---

## 📹 Demo
[Watch the demo video here!](https://drive.google.com/file/d/1NkUCBaxsQ7c7j02DqWzZNYv6il78moxW/view?usp=sharing)

---

## 📷 Shreenshots
<img width="32%" src="https://github.com/user-attachments/assets/cba88832-7743-4780-9113-d5739ea95ef9">
<img width="32%" src="https://github.com/user-attachments/assets/0662ba1b-b8f3-468a-b0a7-8a1dd7f86267">
<img width="32%" src="https://github.com/user-attachments/assets/cad8c7c7-fc0d-4e16-80a1-f82ab559ec30">
---

## 📝 Self-Evaluation
### Technologies Used:
- **Angular 19**
- **RxJS**
- **Font Awesome** (icons)
- **Bootstrap** (for responsiveness)
- **json-server**
- **Angular CDK Drag and Drop**
- **Angular Material**

### Rating: 8/10
- Strengths: Clean component architecture, responsive design, smooth drag-and-drop
- Areas for Improvement: Better error handling, more comprehensive tests
  
---

## 🔧 Need Help?

Open an issue on the repository  
or contact [idavidraj@hotmail.com].
