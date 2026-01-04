import { applyContext, getContextFromEvent, getInitialContext } from "./ui/context.js";
import { SELECTORS, qs } from "./ui/dom.js";

function onClick(event)
{
    const context = getContextFromEvent(event);
    if (!context) return;

    applyContext(context);
}

function init()
{
    const card = qs(SELECTORS.card);
    card.addEventListener('click', onClick);

    const initialContext = getInitialContext();
    applyContext(initialContext);
}

init();