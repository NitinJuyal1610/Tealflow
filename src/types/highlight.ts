interface HighlightProps {
  code: string
  position?: number
}

interface RenderProps {
  className: string
  style: React.CSSProperties
  tokens: Token[][]
  getLineProps: (input: { line: Token[]; key?: number }) => object
  getTokenProps: (input: { token: Token; key?: number }) => object
}

interface Token {
  types: string[]
  content: string
  empty?: boolean
}

export type { HighlightProps, RenderProps, Token }
