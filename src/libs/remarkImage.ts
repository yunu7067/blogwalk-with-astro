import {copyFileSync, mkdir} from 'fs';
import path from 'path';
import {Plugin} from 'unified';
import {visit} from 'unist-util-visit';

export interface RemarkImageProps {
  folderName: string;
}

export default function remarkImage(options: RemarkImageProps): Plugin {
  console.debug({options});

  return (tree, file) => {
    visit(tree, 'image', node => {
      const projectAbsolutePath = __dirname.split('.next')[0];
      const src = path.join(projectAbsolutePath, 'posts', options.folderName, node.url);
      const destDir = path.join(projectAbsolutePath, 'public', 'p', options.folderName);
      const dest = path.join(destDir, node.url);

      // console.log({src, dest});

      mkdir(destDir, {recursive: true}, err => {
        if (!err) {
          copyFileSync(src, dest);
        }
      });
    });
  };
}
