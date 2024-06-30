import { classNames } from 'utils'
import { useState, useRef } from 'react'
import HighlightComponent from 'components/Highlight'
import { CodeEditorProps } from 'types/editor'

export default function CodeElement({ lang }: CodeEditorProps) {
  const [code, setCode] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const editorStyle: React.CSSProperties = {
    fontSize: '0.8rem',
    fontFamily: 'monospace',
    lineHeight: '1.4rem',
    letterSpacing: '0.05rem',
    background: 'transparent',
    overflowWrap: 'break-word'
  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target
    setCode(textarea.value)
  }
  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      // tab
      e.preventDefault()
      if (textareaRef.current) {
        //get position of cursor
        const cursorPosition = textareaRef.current.selectionStart
        const value = textareaRef.current.value
        const newCode =
          value.slice(0, cursorPosition) + '  ' + value.slice(cursorPosition)

        //change cursor position
        setCode(newCode)

        // move cursor to the correct position
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = cursorPosition + 2
            textareaRef.current.selectionEnd = cursorPosition + 2
          }
        }, 0)
      }
    }
  }

  return (
    <div
      className={classNames(
        'flex items-center justify-center rounded-xl border-2 border-gray-700 bg-gray-800 pr-4',
        isFocused ? 'border-2 border-indigo-500' : ''
      )}
    >
      <div
        className={classNames(
          'relative size-full w-[350px]  sm:w-[600px]  min-h-[3.5rem] p-4 text-base text-white rounded-xl drop-shadow-xl shadow-2xl'
        )}
      >
        <HighlightComponent
          code={code}
          language={lang}
          customStyle={editorStyle}
        />
        <textarea
          className={classNames(
            'absolute top-0 left-0 w-full overflow-hidden h-full text-md tracking-[0.1rem] bg-transparent  caret-white p-4 resize-none outline-none',
            code ? 'text-transparent' : 'text-white'
          )}
          style={editorStyle}
          ref={textareaRef}
          value={code}
          placeholder="Type your code here..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleCodeChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  )
}
