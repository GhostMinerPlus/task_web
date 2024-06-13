'use client';

import dynamic from 'next/dynamic';

import { EdgeHelper } from '../edge_helper';
import React, { useEffect, useState } from 'react';

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

export default function Home() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!isUpdated) {
      setIsUpdated(true);
      pullVersion().then((version) => {
        setContent(version);
      });
    }
  })
  return (
    <div>
      <MoonEditor content={content} />
    </div>
  );
}
