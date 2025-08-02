import React, { useRef, useState } from 'react'
import { removeOuterBrackets } from '../services/util.service'

const ConversationInput = ({ onSend, variables }) => {
    const ref = useRef()
    const [selectedVars, setSelectedVars] = useState([])

    const insertVariable = (key) => {
        const editor = ref.current
        editor.focus()

        const selection = window.getSelection()
        const range = selection.getRangeAt(0)

        const span = document.createElement('span')
        span.textContent = `[${key}]`
        span.contentEditable = "false"
        span.className = "token"
        span.dataset.var = `[${key}]`
        span.style.whiteSpace = "nowrap"

        // רווח אחרי המשתנה
        const space = document.createTextNode('\u00A0')

        range.deleteContents()
        range.insertNode(space)
        range.insertNode(span)

        // מיקום הסמן אחרי הרווח
        range.setStartAfter(space)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)

        setSelectedVars((prev) =>
            prev.includes(key) ? prev : [...prev, key]
        );
    }

    const handleSend = () => {
        const nodes = Array.from(ref.current.childNodes)

        const finalText = nodes.map(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                console.log('got into if')
                return node.textContent
            } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('token')) {
                console.log('got into else if')
                const varName = removeOuterBrackets(node.dataset.var)
                // remove sograim
                console.log(varName)

                return variables[varName] || varName
            } else {
                return ''
            }
        }).join('')
        console.log(finalText)

        onSend(finalText.trim())
        ref.current.innerHTML = ''
        setSelectedVars([])
    }

    const handleInput = () => {
        const editor = ref.current
        const currentTokens = Array.from(editor.querySelectorAll('.token'))
            .map(el => removeOuterBrackets(el.dataset.var))

        setSelectedVars(currentTokens)
    }

    return (
        <div className="conversation-input-container">
            <div
                ref={ref}
                className="conversation-input"
                contentEditable
                placeholder="Write something..."
                onInput={handleInput}
            />
            <div className="flex space-between">
                <div className="var-buttons">
                    {Object.keys(variables).map((key) => (
                        <button key={key}
                            className={selectedVars.includes(key) ? 'selected' : ''}
                            onClick={() => insertVariable(key)}>
                            {key}
                        </button>
                    ))}
                </div>
                <button className="send-button" onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default ConversationInput