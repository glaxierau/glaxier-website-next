import { useEffect } from "react"

function SVG({ hover = false, url, color = 'black', hoveredColor = 'blue', width = 20, id }) {

    useEffect(() => {
        const parser = new DOMParser()
        fetch(url)
            .then(res => res.text())
            .then(text => {

                // Turn the raw text into a document with the svg element in it.
                const parsed = parser.parseFromString(text, 'text/html')

                //Get svg from list 
                const svg = parsed.querySelector('svg')
                const path = svg.querySelectorAll('path')

                //Add className and style
                svg.setAttribute('id', `svg-${id}`)
                svg.setAttribute('width', width)
                svg.setAttribute('height', 'auto')
                svg.setAttribute('fill', color)

                const exists = document.getElementById(`svg-${id}`)
                const parentDiv = document.getElementById(`parent-${id}`)

                // Custom Style
                if (hover) {
                    for (const i = 0; i < path.length; i++) {
                        path[i].setAttribute('fill', hoveredColor)
                    }
                } else {
                    for (const i = 0; i < path.length; i++) {
                        path[i].setAttribute('fill', color)
                    }
                }
                if (exists) {
                    exists.remove()
                    parentDiv.appendChild(svg)
                } else {
                    parentDiv.appendChild(svg)
                }
            })
    }, [hover, url, color, hoveredColor, width, id])

    return (
        <div
            id={`parent-${id}`}
            className={`cursor-pointer w-[${width}px] text-white`}
        />

    )
}

export default SVG
