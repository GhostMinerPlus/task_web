import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Props {
  content?: string;
  onSaveContent?: (value: string) => void
}

export class MoonEditor extends React.Component<Props, {}> {
  __modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  __formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  __content: string;

  constructor(props: Props) {
    super(props);
    this.__content = props.content ? props.content : '';
  }

  render() {
    return (
      <ReactQuill
        theme="snow"
        value={this.__content}
        onChange={(value) => this.__content = value}
        modules={this.__modules}
        formats={this.__formats}
      />
    );
  }
}
