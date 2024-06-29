import { Dispatch, SetStateAction } from 'react'

type Languages =
  | 'jsx'
  | 'tsx'
  | 'swift'
  | 'kotlin'
  | 'objectivec'
  | 'js-extras'
  | 'reason'
  | 'rust'
  | 'graphql'
  | 'yaml'
  | 'go'
  | 'cpp'
  | 'markdown'
  | 'markup'

type CodeEditorProps = {
  lang: Languages
}

interface DropdownProps {
  options: string[]
  onSelect: Dispatch<SetStateAction<Languages>>
  selectedOption: Languages
}

export type { CodeEditorProps, Languages, DropdownProps }
