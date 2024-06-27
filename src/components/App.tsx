import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import CodeElement from './CodeElement'

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="px-2 sm:max-w-lg">
            <div className="my-4">
              <Avatar size="large" src={logo} />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tealflow!
            </h1>
            <p className="mt-4 text-xl leading-tight text-gray-500">
              Code editor for Teal
            </p>
          </div>
          <div className="my-10">
            <div aria-hidden="true">
              <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <CodeElement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
