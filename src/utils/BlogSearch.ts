import fs from 'node:fs';
import FlexSearch from 'flexsearch';
/*
 * 위에 module import 오류난 거 아님
 */

interface BlogSearchProps {
  posts: {id: string; title: string}[];
}

export default async function BlogSearch(props: BlogSearchProps) {
  const index = new FlexSearch.Document({
    cache: 100,
    tokenize: 'full',
    document: {
      id: 'id',
      index: 'title',
      store: ['title'], // 같이 저장되는 필드. id는 안 넣어도 됨
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true,
    },
  });

  function indexing(data) {
    index.add(data);
  }
  // async function searching(text) {
  //   const result = await index.search(text, {
  //     enrich: true,
  //     suggest: true,
  //   });

  //   console.debug(text);
  //   console.debug(result[0]);
  //   console.debug(result[0].field);
  //   console.debug(result[0].result);
  // }
  const searchIndexPath = './public/search-index/';
  // const indexedData: {[key: string | number]: unknown} = {};
  async function exporting() {
    return index.export((key, data) => {
      // indexedData[key] = data;
      // console.log({key});
      fs.writeFileSync(`${searchIndexPath}${key}.json`, data !== undefined ? data : '');
    });
  }
  props.posts.map(post => {
    indexing(post);
  });
  await exporting();
  // const data = await exporting();

  // console.log({data});
  return;
}
