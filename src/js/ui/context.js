import { qs, qsa, SELECTORS } from "./dom.js";

const CONTEXTS = {
    focus: {
        banner: "/images/foco.png",
        title: `
      Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>
    `,
    },
    "short-break": {
        banner: "/images/descanso-curto.png",
        title: `
      Que tal dar uma respirada?
      <strong class="app__title-strong">Faça uma pausa curta!</strong>
    `,
    },
    "long-break": {
        banner: "/images/descanso-longo.png",
        title: `
      Hora de voltar à superfície.
      <strong class="app__title-strong">Faça uma pausa longa.</strong>
    `,
    },
};

function setActiveButton(context)
{
    qsa(SELECTORS.contextButtons).forEach(button =>
    {
        const isActive = button.dataset.context === context;
        button.classList.toggle("active", isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

export function applyContext(context)
{
    const config = CONTEXTS[context];
    if (!config) return;

    const html = qs(SELECTORS.html);
    const banner = qs(SELECTORS.banner);
    const title = qs(SELECTORS.title);

    html.setAttribute("data-context", context);
    banner.setAttribute("src", config.banner);
    title.innerHTML = config.title;

    setActiveButton(context);
}

export function getInitialContext()
{
    const context = document.documentElement.getAttribute("data-context");
    return context && CONTEXTS[context] ? context : "focus";
}

export function isContextButton(el)
{
    return Boolean(el.closest?.(SELECTORS.contextButtons));
}

export function getContextFromEvent(event)
{
    const button = event.target.closest(SELECTORS.contextButtons);
    if (!button) return null;
    return button.dataset.context;
}