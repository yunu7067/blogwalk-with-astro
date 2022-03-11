import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  NotionLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import {styled} from '@style/createStyles';
import {SocialIdentifiers} from '@types';
import Link from 'next/link';
import {useMemo} from 'react';

interface SocialButtonParams {
  identifier: SocialIdentifiers;
  title: string;
  href: string;
}

const StyledAnchor = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px',
  fontSize: '$fontSizes$1',
  color: '$colors$foreground',
  '&>svg': {
    width: '24px',
    height: '24px',
  },
});

function SocialIcon({identifier}: {identifier: SocialIdentifiers}) {
  switch (identifier) {
    case 'discord':
      return <DiscordLogoIcon />;
    case 'github':
      return <GitHubLogoIcon />;
    case 'instagram':
      return <InstagramLogoIcon />;
    case 'linkedin':
      return <LinkedInLogoIcon />;
    case 'notion':
      return <NotionLogoIcon />;
    case 'twitter':
      return <TwitterLogoIcon />;
    default:
      return <>{identifier}</>;
  }
}

function SocialButton(social: SocialButtonParams) {
  const SocialButtonMemo = useMemo(() => {
    return (
      <Link href={social.href} passHref>
        <StyledAnchor title={social.title} target='_blank' rel='noopener noreferrer'>
          <SocialIcon identifier={social.identifier} />
        </StyledAnchor>
      </Link>
    );
  }, [social]);
  return SocialButtonMemo;
}

export default SocialButton;
