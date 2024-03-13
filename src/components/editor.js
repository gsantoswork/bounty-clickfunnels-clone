import grapesjs from 'grapesjs';
import React, { Component } from 'react';
import 'grapesjs/dist/css/grapes.min.css';


class Editor extends Component {
  componentDidMount() {
    this.initEditor();
  }

  initEditor() {
    const editor = grapesjs.init({
      container: '#gjs',
      // Configure GrapesJS options here
    });
  }

  render() {
    return <div id="gjs"></div>;
  }
}

export default Editor;