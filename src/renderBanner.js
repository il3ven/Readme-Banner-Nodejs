const strings = [
    "Welcome! Stay as long as you want.",
    "I have become comfortably numb.",
    "Hey you, Can you feel me?"
]

const BANNER_WIDTH = 100
const BANNER_HEIGHT = 30

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const renderBanner = () => {
    const text = strings[getRandomInt(strings.length)]

    return `
    <svg
        fill="none"
        width="${BANNER_HEIGHT}%" height="${BANNER_HEIGHT}"
        viewBox="0 0 ${BANNER_HEIGHT}% ${BANNER_HEIGHT}"
        xmlns="http://www.w3.org/2000/svg"
    >
        <style>
            .typing {
                animation: type 3s steps(${text.length});
                font: 18px serif;
                overflow: hidden;
                white-space: nowrap;
                border-right: 2px solid black;
                display: table-caption;
            }

            @keyframes type {
                0% {
                    width: 0%;
                }

                100% {
                    width: 100%;
                }
            }
        </style>

        <foreignObject x="0" y="0" width="100%" height="${BANNER_HEIGHT}">
            <h1 class="typing" xmlns="http://www.w3.org/1999/xhtml">${text}</h1>
        </foreignObject>
    </svg>
    `
}

module.exports = renderBanner