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
                overflow-x: hidden;
            }

            main {
                height: 200vh;
            }

            h1 {
                font-size: 4.9em;
                font-weight: normal;
            }

            h2 {
                color: var(--night-special-color);
                font-size: 2.8em;
                font-weight: normal;
                text-align: center;
                text-decoration: var(--night-special-color) 2px underline;
            }

            h3 {
                font-family: "Times New Roman";
                font-weight: normal;

                font-size: 2.5em;
                line-height: 1.7em;
                margin-left: 1em;
                padding-left: 2.3em; 
                text-indent: -2.3em;
            }

            a {
                color: inherit;
                font-family: 'Times New Roman';
                font-size: 1em;
                text-decoration: inherit;
            }

            input {
                color: inherit;
                background-color: inherit;
                border: 1px solid var(--day-bg-color);
            }

            input::placeholder {
                color: inherit;
                margin-left: 10px;
            }

            input:active {
                border: 1px solid var(--day-bg-color);
                border-radius: 0;
            }

            footer {
                font-size: 3em;
            }
        `}
        </style>
    )
}