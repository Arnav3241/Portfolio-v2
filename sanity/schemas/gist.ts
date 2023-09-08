import GitGist from "../../src/app/components/GitGist"

export default {
  name: 'gist',
  type: 'object',
  title: 'Gist',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Gist Url',
      component: GitGist
    }
  ]
}