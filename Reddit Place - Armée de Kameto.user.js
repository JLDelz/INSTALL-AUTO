// ==UserScript==
// @name         Reddit Place - France X One piece X KC X JL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On va récuperer ce qui nous est du de droit.
// @author       Feneck
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://i.imgur.com/ahw2OTX.jpg
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://i.imgur.com/VL5lRJb.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
