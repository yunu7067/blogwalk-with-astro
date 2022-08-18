import {MarkdownHeading} from 'astro';
import {Component, createEffect, createSignal} from 'solid-js';

interface Props {
  headings: MarkdownHeading[];
}

const TableOfContents: Component<Props> = ({headings}) => {
  const [currentID, setCurrentID] = createSignal('overview');
  const onThisPageID = 'on-this-page-heading';

  createEffect(() => {
    const headerEls = document.querySelectorAll('article :is(h1,h2,h3)');
    const setCurrent: IntersectionObserverCallback = entries => {
      for (const entry of entries) {
        if (entry.intersectionRect.top < 100) {
          if (entry.isIntersecting) {
            let cur = 1;
            headerEls.forEach((el, index) => {
              if (el.id !== '') {
                console.log(index, el.id, currentID());
                el.id === currentID() && (cur = index);
              }
            });
            console.log({idx: cur - 1});
            setCurrentID(headerEls[cur - 1].id);
          } else {
            const {id} = entry.target;
            if (id === onThisPageID) continue;
            setCurrentID(entry.target.id ? entry.target.id : 'overview');
            break;
          }
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {rootMargin: '0px', threshold: 1};
    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);
    headerEls.forEach(h => headingsObserver.observe(h));
  });

  return (
    <nav>
      <h2>On this page</h2>
      <ul>
        {headings.map(({depth, slug, text}) => (
          <li
            class={`w-64 px-2 py-1.5 rounded-md text-sm depth-${depth} ${
              currentID() === slug
                ? 'bg-gray-100 after:absolute after:-left-2 after:w-1 ' +
                  "after:h-6 after:content-[''] after:rounded-md after:bg-sky-500"
                : ''
            }`.trim()}
          >
            <a href={`#${slug}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
