import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export class MoonEditor extends React.Component<{}, { text: string; }> {
  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  constructor(props: {}) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <ReactQuill
        theme="snow"
        value={this.state.text}
        onChange={(value) => this.setState({ text: value })}
        modules={this.modules}
        formats={this.formats}
      />
    );
  }
}
