// Next.js only accepts one global.css file, NightGlobals component helps overrides globals.css

export default function nightGlobals() {
    return (
        <style jsx global>{`
            html
            body {
                color: var(--day-bg-color);
                background-color: var(--night-bg-color);
                scroll-behavior: smooth;
                overflow-x: hidden;
                overflow-y: scroll;
            }

            body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            @media (prefers-reduced-motion) {
                html
                body {
                    scroll-behavior: auto;
                }
            }

            #beginning {
                background-color: var(--day-bg-color);
            }

            @media (prefers-color-scheme: dark) {
                #beginning {
                    background-color: var(--dark-scheme-color);
                }
            }

            h1 {
                font-size: clamp(3.5rem, 11vw, 6.5rem);
                font-weight: 500;
            }

            h2 {
                font-size: clamp(2rem, 4vw, 3.2rem);
                font-weight: 600;
            }

            h3 {
                color: var(--night-special-color);
                font-size: clamp(1.7rem, 3vw, 2.4rem);
                font-weight: 500;
                font-style: normal;
            }

            h4 {
                color: var(--night-special-color);
                font-size: clamp(1.4rem, 3vw, 2.1rem);
                font-style: italic;
                font-weight: 500;
            }

            p {
                font-size: 1.2rem;
            }

            @media only screen and (min-width: 1000px) {
                p {
                    font-size: 1.33rem;
                }
            }

            a {
                color: inherit;
                font-family: 'Times New Roman';
                text-decoration: inherit;
            }

            input {
                color: #ffffffe6;
                background-color: inherit;
                font-family: "Times New Roman";
                font-size: clamp(1rem, 2vw, 1.2rem);
                outline: none;
            }

            input::placeholder {
                color: inherit;
            }

            textarea {
                background: inherit;
                color: #ffffffe6;
                font: inherit;
                border: none;
                overflow: auto;
                outline: none;
                box-shadow: none;
                resize: none;
            }

            textarea::placeholder {
                color: inherit;
            }

            button {
                background: none;
                color: inherit;
                border: none;
                padding: 0;
                font: inherit;
                cursor: pointer;
                outline: inherit;
            }

            footer {
                font-size: 3rem;
            }

            @keyframes fade-star {
                0%, 70%, 100% {
                  opacity: 1;
                }
            
                30%, 50% {
                  opacity: 0;
                }
            }
        `}
        </style>
    )
}