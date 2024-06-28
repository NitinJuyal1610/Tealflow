import { Highlight as PrismHighlight, themes } from 'prism-react-renderer'
import { PrismTheme } from 'prism-react-renderer'
import { HighlightProps, RenderProps } from 'types/highlight'
import { classNames } from 'utils'

export default function HighlightComponent({
  code,
  position = -1
}: HighlightProps) {
  return (
    <PrismHighlight
      theme={themes.shadesOfPurple as PrismTheme}
      code={code}
      language="cpp"
    >
      {({ style, tokens, getLineProps, getTokenProps }: RenderProps) => (
        <pre style={style}>
          {tokens.map((line, i) => {
            return (
              //line no. and its content
              <div key={i} {...getLineProps({ line, key: i })}>
                {/* line no. */}
                <span className={classNames('text-gray-400 mr-2')}>
                  {i + 1}
                </span>
                {/* {console.log('line ', line)} */}
                {/* token for each line */}
                {line.map((token, key) => {
                  // console.log('token ', token)
                  return (
                    <>
                      <span key={key} {...getTokenProps({ token, key })}>
                        {console.log(token.content)}
                        {token.content}
                      </span>
                    </>
                  )
                })}
                {/* blink the last line */}
                {i === tokens.length - 1 && position === -1 ? (
                  <span className="animate-blink border-l-2 border-white">
                    &nbsp;
                  </span>
                ) : null}
              </div>
            )
          })}
        </pre>
      )}
    </PrismHighlight>
  )
}
