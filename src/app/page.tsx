'use client'

import dynamic from 'next/dynamic';

import { EdgeHelper } from '../edge_helper';
import React from 'react';

const helper = new EdgeHelper();

const MoonEditor = dynamic(
  () => import('../elements/editor').then((mod) => mod.MoonEditor),
  {
    ssr: false
  }
);

async function pullVersion(): Promise<string> {
  const { result } = await helper.execute({
    script: '$->$output = huiwen->version _',
    name: 'result',
    next_v: []
  });
  return result as string;
}

export default class Home extends React.Component<{}, {}> {
  __isUpdated: boolean = false;
  __content: string = '';

  render(): React.ReactNode {
    if (!this.__isUpdated) {
      this.__isUpdated = true;
      pullVersion().then((version) => {
        this.__content = version;
        this.forceUpdate();
      });
    }
    return (
      <div>
        <MoonEditor content={this.__content} />
      </div>
    );
  }
}
