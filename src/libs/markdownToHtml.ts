import {PostConfigType} from '@types';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {PluggableList, Plugin, Preset, unified} from 'unified';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkImage from './remarkImage';

export default async function markdownToHtml(markdown: string, postFolderName: string, config?: PostConfigType) {
  const parser = unified();
  const plugins: Preset | PluggableList = [remarkParse, remarkGfm];

  if (config) {
    /* pre processing */
    if (config.math) {
      plugins.push(remarkMath);
    }
    /* remark -> rehype */
    plugins.push([remarkImage, {folderName: postFolderName}], remarkRehype as Plugin);

    /* post processing */
    if (config.math) {
      plugins.push(rehypeKatex);
    }

    /* end processing */
    plugins.push(rehypeStringify);
  }

  // console.debug({plugins});
  const result = await parser.use(plugins).process(markdown);

  return result.toString();
}
