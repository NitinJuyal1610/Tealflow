import { Highlight as PrismHighlight, themes } from 'prism-react-renderer'
import { PrismTheme } from 'prism-react-renderer'
import { HighlightProps, RenderProps } from 'types/highlight'
import { classNames } from 'utils'

export default function HighlightComponent({
  code,
  customStyle,
  language
}: HighlightProps) {
  return (
    <PrismHighlight
      theme={themes.shadesOfPurple as PrismTheme}
      code={code}
      language={language}
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
                <span
                  className={classNames('text-[rgba(114,113,113,0.76)] mr-4')}
                >
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
              </div>
            )
          })}
        </pre>
      )}
    </PrismHighlight>
  )
}
