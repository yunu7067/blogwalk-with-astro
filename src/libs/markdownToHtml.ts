import {PostConfigType} from '@types';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {PluggableList, Plugin, Preset, unified} from 'unified';
import remarkMath from 'remark-math';
import remarkImage from './remarkImage';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default async function markdownToHtml(markdown: string, postFolderName: string, config?: PostConfigType) {
  const parser = unified();
  const plugins: Preset | PluggableList = [remarkParse, remarkGfm];

  if (config) {
    /* pre processing */
    if (config.math) {
      plugins.push(remarkMath);
    }
    /* make toc */
    if (config.toc) {
      plugins.push([remarkToc, {maxDepth: 3, skip: 'delta'}]);
    }
    /* posts image to public folder */
    plugins.push([remarkImage, {folderName: postFolderName}]);

    /* remark -> rehype */
    plugins.push(remarkRehype as Plugin);

    /* automatic header id */
    plugins.push(rehypeSlug, rehypeAutolinkHeadings);

    /* post processing */
    if (config.math) {
      plugins.push(rehypeKatex);
    }

    /* end processing */
    plugins.push(rehypeStringify);
  }

  console.debug({plugins});
  const result = await parser.use(plugins).process(markdown);

  return result.toString();
}
