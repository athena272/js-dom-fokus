import { setupFocusMusic } from "./ui/audio.js";
import { applyContext, getContextFromEvent, getInitialContext } from "./ui/context.js";
import { SELECTORS, qs } from "./ui/dom.js";
import { createTimer } from "./ui/timer.js";
import { setupTasks } from "./ui/tasks/controller.js";

function updateStartPause(timer)
{
    const icon = qs(SELECTORS.startPauseIcon);
    const text = qs(SELECTORS.startPauseText);

    if (timer.isRunning())
    {
        icon.src = "./images/pause.png";
        text.textContent = "Pausar";
    } else
    {
        icon.src = "./images/play_arrow.png";
        text.textContent = "Começar";
    }
}

function init()
{
    // Music
    setupFocusMusic();

    // Tasks
    setupTasks();

    // Timer
    const timer = createTimer({
        onFinish: () =>
        {
            alert('Times up!');
        }
    });

    // Initial state
    const initialContext = getInitialContext();
    applyContext(initialContext);
    timer.setMode(initialContext);

    // delegation card
    const card = qs(SELECTORS.card);
    card.addEventListener('click', (event) =>
    {
        const context = getContextFromEvent(event);
        if (!context) return;

        applyContext(context);
        timer.setMode(context);
    });

    const startPauseBtn = qs(SELECTORS.startPauseButton);
    startPauseBtn.addEventListener('click', () =>
    {
        timer.toggle();
        updateStartPause(timer);
    });
}

init();