import {JSXElement} from 'solid-js';

export interface TagProps {
  tagName: string;
}

export default function Tag({tagName}: TagProps) {
  return (
    <li class='py-0.5 px-2.5 rounded-md bg-slate-100 text-sm text-slate-700'>
      <a href={`/tag/${tagName}`}>#{tagName}</a>
    </li>
  );
}
