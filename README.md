# 🚀 DevStack

## 📖 Project Description
This is a simple react based single page website, there are difference types of technologies card where you can add, delete card from stack also you can remove all the stack by clicking the remove all button

## 💻 Technologies Used
**React**
**Tailwind CSS**
**React Toastify** 
**React Icons**

## ✨ Key Features
1. **Dynamic Data Rendering:** Efficiently fetches and displays data from a JSON file
2. **Interactive User Experience:** Utilizes real-time state management to ensure a smooth, responsive interface.
3. **Responsive Design:** Fully optimized to work seamlessly across mobile, tablet, and desktop screens.

---

## 🧠 React Concepts

**1. What is JSX, and why is it used in React?**
JSX also called JavaScript XML is a syntax extension that looks exactly like HTML but lives inside JavaScript. or JSX let us use HTML inside the Javascript code

**2. What is the difference between props and state?**
* **Props (Properties):** Read-only data passed down from a parent component to a child component. 
* **State:** A component's internal, mutable memory When a component's state changes, React automatically re-renders the UI to reflect that change.

**3. What does the useState hook do, and where did you use it in this project?**
The `useState` hook allows functional components to store and update local variables. In this project, I used it to set the selectedItems, when user click on a card, Data of the card push to the selectedItems, ensuring the screen updates instantly when the data changes.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
The `useEffect` hook handles "side effects"—operations that reach outside the component, like fetching data from a server. I needed it to load the JSON data because it allows the fetch operation to run in the background immediately after the component first mounts, without freezing the initial UI load.

**5. Why does every item in a .map() list need a unique key prop?**
A unique `key` helps React's algorithm instantly identify which specific items in a list have been added, removed, or modified.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is the practice of showing different UI elements based on a specific condition.
* **Example in my project:** I used it at the Technologies.tsx file where I set No technologies selected yet if the selectedItems.length equal to zero, if the list contains more than 0 items then the section render as '1 2 ... technology selected' 
                            {
                                (selectedItems.length <= 0)? 'No technologies selected yet.' : `${selectedItems.length} Technology Selected`
                            }


**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
* **Parent to Child:** You pass data down using `props`.
* **Child to Parent:** The parent passes a callback function down to the child as a prop. The child then executes that function and passes its data in as an argument, which sends the information back up to the parent.