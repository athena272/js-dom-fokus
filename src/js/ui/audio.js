import { SELECTORS, qs } from "./dom.js";

const MUSIC_SRC = "./sounds/luna-rise-part-one.mp3";

export function setupFocusMusic()
{
    const toggle = qs(SELECTORS.musicToggle);

    const music = new Audio(MUSIC_SRC);
    music.loop = true;

    // Deixa o estado consistente (UI manda no áudio)
    async function sync()
    {
        if (toggle.checked)
        {
            try
            {
                await music.play();
            }
            catch (error)
            {
                console.log("🚀 ~ sync ~ error:", error);
                // Alguns browsers bloqueiam autoplay sem interação;
                // como isso roda em "change", normalmente não bloqueia,
                // mas deixamos resiliente.
                toggle.checked = false;
            }
        }
        else
        {
            music.pause();
            music.currentTime = 0; // volta para o início quando desliga
        }
    }

    toggle.addEventListener('change', sync);
    // Retorna controle, útil pra evoluir depois (ex: trocar música por contexto)
    return {
        play: () =>
        {
            toggle.checked = true;
            return sync();
        },
        pause: () =>
        {
            toggle.checked = false;
            return sync();
        },
        element: music,
    };
}