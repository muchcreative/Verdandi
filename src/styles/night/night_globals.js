/**
 * Next.js only accepts one global.css file, NightGlobals component overrides globals.css
 */
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

            @media (prefers-reduced-motion) {
                html
                body {
                    scroll-behavior: auto;
                }
            }

            h1 {
                font-size: clamp(2rem, 4vw, 3.5rem);
                font-weight: 400;
            }

            h2 {
                font-size: clamp(1.7rem, 4vw, 3.2rem);
                font-weight: 600;
            }

            h3 {
                color: var(--night-special-color);
                font-size: clamp(1.3rem, 3vw, 2.4rem);
                font-weight: 500;
                font-style: normal;
            }

            h4 {
                color: var(--day-bg-color);
                font-size: clamp(1.5rem, 3vw, 2.4rem);
                font-weight: 500;
            }
            
            h5 {
                color: var(--night-special-color);
                font-size: clamp(1.4rem, 2vw, 2.0rem);
                font-style: italic;
                font-weight: 500;
            }

            h6 {
                font-color: inherit;
                font-size: clamp(1.4rem, 6vw, 3rem);
                font-weight: 500;
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