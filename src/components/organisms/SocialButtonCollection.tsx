import {SocialButton} from '@com/molecules';
import {SocialConfigType} from '@types';

interface SocialButtonCollectionParam {
  social: SocialConfigType[] | undefined;
}

function SocialButtonCollection({social}: SocialButtonCollectionParam) {
  if (typeof social === 'undefined') {
    return <></>;
  }

  return (
    <div data-id={'socialButtons'}>
      {social.map(({identifier, name, url}: SocialConfigType) => (
        <SocialButton key={identifier} identifier={identifier} title={name} href={url} />
      ))}
    </div>
  );
}

export default SocialButtonCollection;
