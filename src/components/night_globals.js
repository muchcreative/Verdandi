/**
 * Next.js only accepts one global.css file, NightGlobals component overrides globals.css
 */
export default function nightGlobals() {
    return (
        <style jsx global>{`
            html
            body {
                color: var(--night-bg-color);
                background-color: var(--day-bg-color);
                overflow-y: visible;
            }

            main {
                height: 100%;
            }

            h1 {
                font-size: 5em;
                font-weight: normal;
            }

            h2 {
                font-size: 2em;
            }
        `}
        </style>
    )
}