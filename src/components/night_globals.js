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
            }

            main {
                background-color: #212121;
                color: #fff;
                height: 400vh;
            }

            header {
                padding-top: 400px
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