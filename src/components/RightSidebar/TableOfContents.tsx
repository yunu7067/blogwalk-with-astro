import {MarkdownHeading} from 'astro';
import {Component, createEffect, createSignal} from 'solid-js';

interface Props {
  headings: MarkdownHeading[];
}
const TableOfContents: Component<Props> = ({headings}) => {
  const [currentID, setCurrentID] = createSignal('overview');
  const onThisPageID = 'on-this-page-heading';

  createEffect(() => {
    const setCurrent: IntersectionObserverCallback = entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const {id} = entry.target;
          if (id === onThisPageID) continue;
          setCurrentID(entry.target.id ? entry.target.id : 'overview');
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '-100px 0% -66%',
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

    // Observe all the headings in the main page content.
    document.querySelectorAll('article :is(h1,h2,h3)').forEach(h => headingsObserver.observe(h));
    console.log(document.querySelectorAll('article :is(h1,h2,h3)'));
    // Stop observing when the component is unmounte
  });

  return (
    <nav>
      <h2>On this page</h2>
      <ul>
        {headings.map(({depth, slug, text}) => (
          <li class={`depth-${depth} ${currentID() === slug ? 'current-header-link' : ''}`.trim()}>
            <a href={`#${slug}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
