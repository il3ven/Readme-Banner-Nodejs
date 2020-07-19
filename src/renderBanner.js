const strings = [
    "Welcome! Stay as long as you want.",
    "I have become comfortably numb.",
    "Hey you, Can you feel me?"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const renderBanner = () => {
    const text = strings[getRandomInt(strings.length)]

    return `
    <svg
        fill="none"
        width="300" height="200"
        viewBox="0 0 300 200"
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

        <foreignObject width="100%" height="50">
            <h1 xmlns: "http://www.w3.org/1999/xhtml" class="typing">${text}</h1>
        </foreignObject>
    </svg>
    `
}

module.exports = renderBanner