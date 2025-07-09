# angular-table

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ankerer/angular-table)

# 🧩 Angular Coding Challenge – Generic Data Table

Welcome to the Angular Coding Challenge! Your task is to build a generic, reusable data table component that can display a list of users. This challenge is designed to evaluate your ability to write clean, scalable, and performant Angular code while applying best practices in component design, reusability, and state management.

---

## 🚀 Goal

Create a reusable `<app-data-table>` Angular component to display users and provide filtering, sorting, and template customization.

The project already includes:

- ✅ User model (`User` interface)
- ✅ `UserService` (`user.service.ts`) to fetch users
- ✅ `users.component.ts` – displays users using the data-table
- ✅ Skeleton structure for `data-table.component.ts`

Your job is to complete and extend the generic data-table.

---

## 🧱 Tech Stack

- Angular 20
- TypeScript
- Optional: NGXS for state management
- Tailwind CSS for styling (optional)

---

## 📂 Project Structure (Simplified)

```bash
/src/app/
├── components/
│   └── data-table/
│       ├── data-table.component.ts  ← Your main focus
│       ├── data-table.component.html
│       └── data-table.component.scss
├── models/
│   └── user.model.ts
├── pages/
│   ├── users/
│   │   └── users.component.ts
│   └── statistics/
│       └── statistics.component.ts
├── services/
│   └── user.service.ts
└── state/
    └── users.state.ts (optional, NGXS)
```

## 📌 Task Requirements

### ✅ Base Requirements

- Create a generic `<app-data-table>` component that:
  - Accepts a list of users via `@Input()`
  - Dynamically displays all user fields (as strings)
  - Renders email as a clickable `mailto:` link
  - Displays avatar as an image
  - Supports custom column: full name (firstName + lastName)

### ✅ Filtering

- Add a search input that filters users by all fields except avatar (case-insensitive match)
- Filter applies across multiple fields (e.g., typing "john" matches firstName or username)

### ✅ Sorting

- Clickable column headers to sort ascending/descending
- Only applies to string/text fields
- Sort icon indicator (▲ / ▼)

---

## 💎 Bonus Challenges (Optional)

- Use NGXS (`users.state.ts`) to manage user data:

  - Fetch users once and store in state
  - Share state between `users.component` and `statistics.component`
  - No re-fetching on route change

- Style the table nicely:

  - Responsive layout
  - Highlighted rows on hover
  - Sort/filter UI that feels clean and modern

- Write unit tests for the `data-table.component.ts` in `data-table.component.spec.ts`

---

## 📥 Setup Instructions

1. Clone the repo (or use provided ZIP if applicable)
2. Install dependencies:

```bash
   npm install
```

3. Run the development server:

```bash
ng serve
```

4. Navigate to `http://localhost:4200/`
