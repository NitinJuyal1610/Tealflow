import { Highlight as PrismHighlight, themes } from 'prism-react-renderer'
import { PrismTheme } from 'prism-react-renderer'
import { HighlightProps, RenderProps } from 'types/highlight'
import { classNames } from 'utils'

export default function HighlightComponent({ code }: HighlightProps) {
  return (
    <PrismHighlight
      theme={themes.shadesOfPurple as PrismTheme}
      code={code}
      language="cpp"
    >
      {({ style, tokens, getLineProps, getTokenProps }: RenderProps) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span className={classNames('text-gray-400 mr-2')}>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </PrismHighlight>
  )
}
