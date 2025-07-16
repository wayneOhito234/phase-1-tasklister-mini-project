document.addEventListener("DOMContentLoaded", () => {
  // Get references to the form and the task list
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add event listener to form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh 

    // Get the input value
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;

    if (taskText.trim() === "") return;  // Ignore empty submissions

    // Create a new list item for the task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Optional: Add a delete button to each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "40px";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  });
});