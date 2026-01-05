const SOUND_EFFECTS = {
    play: new Audio("./sounds/play.wav"),
    pause: new Audio("./sounds/pause.mp3"),
    beep: new Audio("./sounds/beep.mp3"),
};

// ajuda a “reiniciar” o som se clicar rápido várias vezes
function safePlay(audio)
{
    audio.currentTime = 0;
    // se o browser bloquear, não quebra a app
    audio.play().catch(() => { });
}

export function playSoundEffects(name)
{
    const audio = SOUND_EFFECTS[name];
    if (!audio) return;

    safePlay(audio);
} 