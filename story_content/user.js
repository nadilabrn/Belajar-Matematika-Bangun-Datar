function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AJqRPrMDSD":
        Script1();
        break;
  }
}

function Script1()
{
  // ===== BGM =====
if (!window.globalBGM) {
    window.globalBGM = new Audio(
        "https://hilaaml.github.io/media-interaktif/bgm.mp3"
    );

    window.globalBGM.loop = true;
    window.globalBGM.volume = 0.15;
    window.globalBGM.play();
}

// ===== CLICK SOUND =====
if (!window.clickSoundEnabled) {

    window.clickSoundEnabled = true;

    window.clickAudio = new Audio(
        "https://hilaaml.github.io/media-interaktif/click.mp3"
    );

    window.clickAudio.volume = 0.4;
    window.clickAudio.preload = "auto";

    function playClickSound(e) {

        // hanya klik kiri / tap
        if (e.button !== undefined && e.button !== 0) return;

        var sfx = window.clickAudio.cloneNode();
        sfx.volume = 0.4;

        sfx.play().catch(function(){});
    }

    // lebih reliable untuk Storyline
    document.addEventListener(
        "pointerdown",
        playClickSound,
        true
    );

    document.addEventListener(
        "mousedown",
        playClickSound,
        true
    );
}

// ===== SYNC MUTE STORYLINE =====
setTimeout(function () {

    var muteBtn =
        document.querySelector('[aria-label*="Mute"]') ||
        document.querySelector('[aria-label*="mute"]') ||
        document.querySelector('[title*="Mute"]') ||
        document.querySelector('[title*="mute"]');

    if (muteBtn && !window.bgmMuteHooked) {

        window.bgmMuteHooked = true;

        muteBtn.addEventListener("click", function () {

            setTimeout(function () {

                var isMuted =
                    (muteBtn.getAttribute("aria-label") || "")
                        .toLowerCase()
                        .indexOf("unmute") > -1;

                if (window.globalBGM) {
                    window.globalBGM.muted = isMuted;
                }

            }, 50);
        });
    }

}, 1000);
}

