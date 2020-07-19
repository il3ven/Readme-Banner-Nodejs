const strings = [
    "Hi, You are awesome.",
    "Welcome! Stay as long as you want.",
    "Hey you, Can you feel me?"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const renderBanner = () => {
    const text = string[getRandomInt(strings.length)]

    return `
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <style>
            .typing {
                animation: type 2s steps(48);
                font: 18px serif;
                overflow: hidden;
                white-space: nowrap;
                width:${text.length}ch;
                position: relative;
            }

            @keyframes type {
            0% {
                width: 0ch;
            }

            100% {
                width: ${text.length}ch;
            }
            }

            .typing::after {
                content: "";
                width: 1px;
                height: 90%;
                position: absolute;
                border-right: 2px solid black;
            }
        </style>

        <!-- Common use case: embed HTML text into SVG -->
        <foreignObject x="0" y="0" width="800" height="160">
            <h1 class="typing">${text}</h1>
        </foreignObject>
    </svg>
    `
}

module.exports = renderBanner