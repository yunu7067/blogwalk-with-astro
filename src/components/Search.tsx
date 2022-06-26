import {createEffect, createSignal} from 'solid-js';
import * as FlexSearch from 'flexsearch';
import createDebounce from 'src/utils/createDebounce';

export default function Search({keys}: {keys: string[]}) {
  const [keyword, setKeyword] = createSignal<string>('');
  const [doc, setDoc] = createSignal<FlexSearch.Document<unknown, false>>();
  const [searchResult, setSearchResult] = createSignal<DocumentSearchResult<{title: string}, true, true>>([]);
  const [trigger, clear] = createDebounce(() => {
    console.log('search function');
    // console.debug({doc: doc()});
    const results = doc().search(keyword(), {
      enrich: true,
      suggest: true,
    });
    setSearchResult(results as unknown as typeof searchResult);
    console.debug({results});
  }, 365); // 365 ms 동안 대기

  createEffect(() => {
    console.log('default');

    (async function () {
      // console.debug({keys});
      const flexSearchDoc = new FlexSearch.Document({
        document: {
          id: 'id',
          index: 'title',
        },
      });

      // console.debug(keys);
      for (let i = 0, key; i < keys.length; i++) {
        key = keys[i];
        const data = await fetch(`/search-index/${key}.json`).then(res => res.text());

        // console.debug({ key, data, url:  `/search-index/${key}.json`});
        flexSearchDoc.import(key, data ?? null);
      }

      return flexSearchDoc;
    })().then(doc => {
      setDoc(doc);
    });
  });

  createEffect(() => {
    console.log(keyword);
    // trigger();
    // function search() {
    //   console.log('search function');
    //   // console.debug({doc: doc()});
    //   const results = doc().search(keyword(), {
    //     enrich: true,
    //     suggest: true,
    //   });
    //   setSearchResult(results as unknown as typeof searchResult);
    //   // console.debug({results});
    // }

    // if (doc()) {
    //   eventId && clearTimeout(eventId);
    //   eventId = setTimeout(search, 500) as unknown as number;
    // }
  }, keyword);

  return (
    <div>
      <input
        type='text'
        class='bg-gray-100 mb-4 p-4 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'
        onInput={e => {
          setKeyword(e.currentTarget.value);
          trigger();
        }}
        placeholder='여기에 검색어를 입력하세요.'
      />
      <p class='mb-5'> (현재는 제목 검색만 지원합니다.)</p>

      <output>
        {searchResult().map(res => (
          <div>
            {res.result.map(({id, doc}) => (
              <div class='p-8 border mb-2'>
                <a href={id as unknown as string}>{doc.title}</a>
              </div>
            ))}
          </div>
        ))}
      </output>
    </div>
  );
}
