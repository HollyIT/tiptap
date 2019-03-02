<template>
  <div class="editor">
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import {
  HardBreak,
  Heading,
  Bold,
  Italic,
  History,
} from 'tiptap-extensions'
import Captions from './captions.js'

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Italic(),
          new History(),
          // custom extension
          new Captions(),
        ],
        content: `
          <h2>
            Captions
          </h2>
          <p>
            Modifications made to the ComponentView allow for this to caption and align all from within the magic of Vue.
          </p>
         <figure data-link="source" >
<img src="https://66.media.tumblr.com/dcd3d24b79d78a3ee0f9192246e727f1/tumblr_o00xgqMhPM1qak053o1_400.gif" alt="hello"/><figcaption>Caption for our picture</figcaption></figure>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa risus, consequat in semper eget, pellentesque sit amet justo. Nulla rutrum dui quis felis rutrum, et sodales nunc fermentum. Donec id convallis libero. Donec ut nisi urna. Pellentesque facilisis dictum facilisis. Etiam vel mi varius, tempor ligula a, tempor nisl. Nullam quis sapien finibus, posuere mauris at, volutpat mi. Phasellus et volutpat velit. Maecenas consequat aliquam nisi. Curabitur non dignissim magna. Mauris imperdiet, ex eget lacinia hendrerit, lorem nunc efficitur nulla, eget elementum velit sapien et lorem. Donec facilisis vitae mi ac commodo. Aenean a dignissim risus. Vivamus dapibus et elit nec viverra. Duis dictum pulvinar nunc. Ut condimentum quis leo sit amet auctor.</p>
        `,
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">

</style>
