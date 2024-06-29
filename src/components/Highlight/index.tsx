import { Highlight as PrismHighlight, themes } from 'prism-react-renderer'
import { PrismTheme } from 'prism-react-renderer'
import { HighlightProps, RenderProps } from 'types/highlight'
import { classNames } from 'utils'

export default function HighlightComponent({
  code,
  customStyle
}: HighlightProps) {
  return (
    <PrismHighlight
      theme={themes.shadesOfPurple as PrismTheme}
      code={code}
      language="cpp"
    >
      {({ style, tokens, getLineProps, getTokenProps }: RenderProps) => (
        <pre style={{ ...style, ...customStyle }}>
          {tokens.map((line, i) => {
            return (
              //line no. and its content
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className={classNames('editor')}
              >
                {/* line no. */}
                <span className={classNames('text-gray-400 mr-2')}>
                  {i + 1}
                </span>
                {line.map((token, key) => {
                  if (token.empty) return null
                  return (
                    <>
                      <span key={key} {...getTokenProps({ token, key })}>
                        {token.content}
                      </span>
                    </>
                  )
                })}
                {/* blink the last line
                {i === tokens.length - 1 && position === -1 ? (
                  <span className="animate-blink border-l-2 border-white">
                    &nbsp;
                  </span>
                ) : null} */}
              </div>
            )
          })}
        </pre>
      )}
    </PrismHighlight>
  )
}
