// @ts-ignore
import Gist from "super-react-gist"

export default function GitGist(props: { url: string }) {
  return (
    <Gist url={props.url} />
  )
}