import { classNames } from 'utils'
import { useState, useRef } from 'react'
import HighlightComponent from 'components/Highlight'
import { CodeEditorProps } from 'types/editor'

export default function CodeElement({ lang }: CodeEditorProps) {
  const [code, setCode] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const editorStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontFamily: 'monospace',
    lineHeight: '1.5rem',
    letterSpacing: '0.05rem',
    background: 'transparent'
  }

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
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
      setCode(code + '  ')
    }
  }

  return (
    <div
      className={classNames(
        'flex items-center justify-center rounded-xl border-2 border-gray-700 bg-gray-800',
        isFocused ? 'border-2 border-indigo-500' : ''
      )}
    >
      <div
        className={classNames(
          'relative size-full min-h-[600px] min-w-[600px] p-4 text-base text-white shadow-2xl'
        )}
      >
        <HighlightComponent
          code={code}
          language={lang}
          customStyle={editorStyle}
        />
        <textarea
          className={classNames(
            'absolute top-0 left-[1.6rem] w-full h-full text-md tracking-[0.1rem] bg-transparent caret-white p-4 text-transparent  outline-none'
          )}
          style={editorStyle}
          ref={textareaRef}
          value={code}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleCodeChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  )
}
