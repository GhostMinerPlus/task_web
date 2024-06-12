'use client'

import dynamic from 'next/dynamic';

const MoonEditor = dynamic(
  () => import('../components/editor.js').then((mod) => mod.MoonEditor),
  {
    ssr: false
  }
);

export default function Home() {
  return (
    <div>
      <MoonEditor />
    </div>
  );
}
