const strings = [
    "Hi, I am il3ven (Eleven). Nice of you to come hang out.",
    "Welcome! Delighted to see you.",
    "Hi, You fantastic creature.",
    "Hey you, Did you know ? You are awesome"
]

const BANNER_WIDTH = "100%"
const BANNER_HEIGHT = "36px"

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const renderBanner = () => {
    const text = strings[getRandomInt(strings.length)]

    return `
    <svg
        fill="none"
        width="${BANNER_WIDTH}" height="${BANNER_HEIGHT}"
        viewBox="0 0 ${BANNER_WIDTH} ${BANNER_HEIGHT}"
        xmlns="http://www.w3.org/2000/svg"
    >
        <style>
            .typing {
                animation: type 3s steps(${text.length});
                font: bold 18px 'Courier New', sans-serif;
                overflow: hidden;
                white-space: nowrap;
                border-right: 2px solid black;
                display: table-caption;
                color: #13A10E;
                margin: 0;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
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


        <rect x="0" y="0%" width="${BANNER_WIDTH}" height="${BANNER_HEIGHT}" fill="#0C0C0C" rx="0"/>
        <foreignObject x="10px" y="0" width="${BANNER_WIDTH}" height="${BANNER_HEIGHT}">
            <h1 class="typing" xmlns="http://www.w3.org/1999/xhtml">${text}</h1>
        </foreignObject>
    </svg>
    `
}

module.exports = renderBanner