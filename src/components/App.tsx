import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import CodeElement from './CodeElement'
import Dropdown from './Dropdown'
import { Languages } from 'types/editor'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState<Languages>('jsx')
  const languageOptions: Languages[] = [
    'markup',
    'jsx',
    'tsx',
    'swift',
    'kotlin',
    'objectivec',
    'js-extras',
    'reason',
    'rust',
    'graphql',
    'yaml',
    'go',
    'cpp',
    'markdown'
  ]
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden bg-white">
      <div className="flex min-h-screen flex-col items-center justify-center py-10">
        <div className="relative flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-lg px-2">
            <div className="my-4 flex justify-center">
              <Avatar size="large" src={logo} />
            </div>
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tealflow!
            </h1>
            <p className="mt-4 text-center text-xl leading-tight text-gray-500">
              <Dropdown
                options={languageOptions}
                onSelect={setLang}
                selectedOption={lang}
              />
            </p>
          </div>
          <div className="my-10 flex w-full justify-center rounded-xl ">
            <div aria-hidden="true" className="flex w-full justify-center ">
              <div className="relative w-full  max-w-4xl">
                <CodeElement lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
