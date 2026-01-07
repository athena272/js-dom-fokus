export const SELECTORS = {
    html: "html",
    card: ".app__card",
    banner: ".app__image",
    title: ".app__title",
    contextButtons: ".app__card-button[data-context]",
    musicToggle: "#toggle-music",
    timer: "#timer",
    startPauseButton: "#start-pause",
    startPauseIcon: "#start-pause img",
    startPauseText: "#start-pause span",
    taskList: ".app__section-task-list",
    addTaskButton: ".app__button--add-task",
    taskForm: ".app__form-add-task",
    taskTextarea: ".app__form-textarea",
    activeTaskDescription: ".app__section-active-task-description",
    removeDoneButton: "#btn-remover-concluidas",
    removeAllButton: "#btn-remover-todas",
    formCancelButton: ".app__form-footer__button--cancel",
    formDeleteButton: ".app__form-footer__button--delete",
};

export function qs(selector, scope = document)
{
    const el = scope.querySelector(selector);
    if (!el) throw new Error(`Elemento não encontrado: ${selector}`);
    return el;
}

export function qsa(selector, scope = document)
{
    return Array.from(scope.querySelectorAll(selector));
}