import { classNames } from 'utils'
import { useState } from 'react'

export default function CodeElement() {
  const [code, setCode] = useState('')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      console.log(code)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <textarea
        className={classNames(
          'w-full h-full rounded-lg bg-gray-800 shadow-lg border border-gray-700 p-4 min-h-[600px] min-w-[600px] text-white text-base'
        )}
        placeholder=""
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  )
}
