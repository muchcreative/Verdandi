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
                font-size: 6em;
                font-weight: normal;
            }

            h2 {
                font-size: 3.2em;
                font-weight: 600;
            }

            h3 {
                color: var(--night-special-color);
                font-size: 2.4em;
                font-weight: 500;
                font-style: normal;
            }

            h4 {
                color: var(--night-special-color);
                font-size: 2.4em;
                font-style: italic;
                font-weight: 500;
            }
            
            h5 {
                color: var(--night-special-color);
                font-size: 2.0em;
                font-style: italic;
                font-weight: 500;
            }

            h6 {
                font-color: inherit;
                font-size: 3em;
                font-weight: 500;
                line-height: 1.7em;
                margin-left: 15%;
                padding-left: 2.5em; 
                text-indent: -2.5em;
            }

            a {
                color: inherit;
                font-family: 'Times New Roman';
                font-size: 1em;
                text-decoration: inherit;
            }

            input {
                font-family: "Times New Roman";
                color: #ffffffe6;
                background-color: inherit;
                font-size: 1.2em;
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
                font-size: 3em;
            }
        `}
        </style>
    )
}