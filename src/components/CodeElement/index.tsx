import { classNames } from 'utils'
import { useState } from 'react'
import HighlightComponent from 'components/Highlight'

export default function CodeElement() {
  const [code, setCode] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      console.log(code)
    }
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div
      className={classNames(
        'flex items-center justify-center rounded-lg border-2 border-gray-700 bg-gray-800',
        isFocused ? 'border-2 border-indigo-500' : ''
      )}
    >
      <div
        className={classNames(
          'relative size-full min-h-[600px] min-w-[600px] p-4 text-base text-white shadow-2xl'
        )}
      >
        <HighlightComponent code={code} />

        <textarea
          className={classNames(
            'absolute top-0 left-4 w-full h-full text-md tracking-[0.1rem] bg-transparent caret-transparent p-4 text-transparent outline-none'
          )}
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
