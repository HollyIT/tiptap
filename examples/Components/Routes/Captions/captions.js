import { Node } from 'tiptap'
import FigureComponent from './FigureComponent'

export default class Iframe extends Node {

  get name() {
    return 'iframe'
  }
  
  get schema() {
    return {
      // here you have to specify all values that can be stored in this node
      attrs: {
        src: {default: null},
        caption: {default: ""},
        alt: {default: ""},
        link: {default: ""},
        align: {default: null}
      },
      group: 'block',
      selectable: true,
      draggable: true,
      // parseDOM and toDOM is still required to make copy and paste work
      parseDOM: [{
        tag: 'figure',
        getAttrs(node) {
          
          let img = node.getElementsByTagName('img'),
              href = node.getElementsByTagName('a'),
              link = node.getAttribute('data-link'),
              figcaption = node.getElementsByTagName('figcaption');
          let align = null;
          if (node.classList.contains('align-right')) {
            align = 'right';
          } else if (node.classList.contains('align-left')) {
            align = 'left';
          }
          if (!link) {
            link = href.length ? href[0].href : '';
          }
          return {
            src: img.length ? img[0].src : '',
            alt: img.length ? img[0].alt : '',
            link: link,
            caption: figcaption.length ? figcaption[0].textContent : '',
            align: align
          }
        }
      }],
      toDOM(node) {
        let clsName = '';
        if (node.attrs.align === 'left') {
          clsName += ' align-left';
        } else if (node.attrs.align === 'right') {
          clsName += ' align-right';
        }
        let caption = '';
        if (node.attrs.caption) {
          caption = node.attrs.caption;
        }
        return ['figure', {class: clsName, align: node.attrs.align}, ['img', {src: node.attrs.src}], ['figcaption', caption]];
      },
    }
  }

  get view() {
    return FigureComponent
  }

}
