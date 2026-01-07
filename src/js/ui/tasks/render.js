export function createTaskElement(task, { isActive })
{
    const li = document.createElement('li');
    li.classList.add("app__section-task-list-item");
    li.dataset.taskId = task.id;

    if (task.completed) li.classList.add("app__section-task-list-item-complete");
    if (isActive) li.classList.add("app__section-task-list-item-active");

    li.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg" data-action="toggle-complete">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
            fill="#01080E"></path>
        </svg>

        <p class="app__section-task-list-item-description"></p>

        <button class="app_button-edit" data-action="edit" aria-label="Editar tarefa">
        <img src="./images/edit.png" alt="" />
        </button>
    `;

    li.querySelector(".app__section-task-list-item-description").textContent = task.description;
    // só edita a ativa e não concluída (mantém CSS de disabled)
    li.querySelector('[data-action="edit"]').disabled = !isActive || task.completed;

    return li;
}

export function renderTaskList(listEl, tasks, activeTaskId)
{
    listEl.innerHTML = "";
    tasks.forEach(task =>
    {
        const li = createTaskElement(task, { isActive: task.id === activeTaskId });
        listEl.appendChild(li);
    });
}