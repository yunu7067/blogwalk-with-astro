import {AnchorButton} from '@com/atoms';
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  NotionLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import {SocialIdentifiers} from '@types';
import {useMemo} from 'react';

interface SocialButtonParams {
  identifier: SocialIdentifiers;
  title: string;
  href: string;
}

function SocialIcon({identifier}: {identifier: SocialIdentifiers}) {
  switch (identifier) {
    case 'discord':
      return <DiscordLogoIcon width='20' height='20' />;
    case 'github':
      return <GitHubLogoIcon width='20' height='20' />;
    case 'instagram':
      return <InstagramLogoIcon width='20' height='20' />;
    case 'linkedin':
      return <LinkedInLogoIcon width='20' height='20' />;
    case 'notion':
      return <NotionLogoIcon width='20' height='20' />;
    case 'twitter':
      return <TwitterLogoIcon width='20' height='20' />;
    default:
      return <>{identifier}</>;
  }
}

export default function SocialButton(social: SocialButtonParams) {
  const SocialButtonMemo = useMemo(() => {
    return (
      <AnchorButton href={social.href} title={social.title} target='_blank' rel='noopener noreferrer'>
        <SocialIcon identifier={social.identifier} />
      </AnchorButton>
    );
  }, [social]);

  return SocialButtonMemo;
}
