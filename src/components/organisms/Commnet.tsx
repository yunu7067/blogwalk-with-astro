import {Giscus} from '@giscus/react';
import {CommentsType, GiscusConfigProps, CommentsProvider} from '@types';

function GiscusWrapper({config}: {config: GiscusConfigProps | undefined}) {
  if (typeof config === 'undefined') {
    return <></>;
  }
  const {lightTheme, darkTheme, ...restConfig} = config;

  return <Giscus {...restConfig} theme={lightTheme} />;
}

export default function Commnets(config: CommentsType) {
  if (!config.enabled || typeof config.provider === 'undefined') {
    return <></>;
  }

  function CommentsSwitcher({config}: {config: CommentsType}) {
    switch (config!.provider) {
      case 'giscus':
        return <GiscusWrapper config={config.giscus} />;
      default:
        return <></>;
    }
  }

  return <CommentsSwitcher config={config} />;
}
