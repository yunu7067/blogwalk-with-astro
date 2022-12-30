import type {CommentsType, ThemeIdentifiers} from '$types';
import {Show} from 'solid-js';

export interface BlogCommentProps {
  comments: CommentsType;
  theme: ThemeIdentifiers;
}

export default function BlogComment(props: BlogCommentProps) {
  const giscusTheme =
    props.theme === 'dark' ? props.comments?.giscus?.darkTheme : props.comments?.giscus?.lightTheme;

  return (
    <Show when={props.comments.enabled && props.comments.provider == 'giscus'}>
      <div id='blog-comment' class='giscus mt-12 mb-8' />
      <script
        src='https://giscus.app/client.js'
        data-repo={props.comments?.giscus?.repo}
        data-repo-id={props.comments?.giscus?.repoId}
        data-category={props.comments?.giscus?.category}
        data-category-id={props.comments?.giscus?.categoryId}
        data-mapping={props.comments?.giscus?.mapping || 'pathname'}
        data-reactions-enabled={props.comments.giscus?.reactionsEnabled || '1'}
        data-emit-metadata={props.comments.giscus?.emitMetadata || '0'}
        data-input-position={props.comments.giscus?.inputPosition || 'bottom'}
        data-theme={giscusTheme}
        data-lang={props.comments.giscus?.lang || 'ko'}
        data-loading={props.comments.giscus?.loading || 'lazy'}
        crossorigin='anonymous'
        async
      />
    </Show>
  );
}
