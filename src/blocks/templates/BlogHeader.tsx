import SocialButtonCollection from '@com/organisms/SocialButtonCollection';
import {styled} from '@style/createStyles';
import {BlogConfigType} from '@types';
import Link from 'next/link';

const StyledBlogHeader = styled('header', {
  maxWidth: '636px',
  width: '100%',
  color: '$fg-default',
  paddingTop: '$4',
  paddingBottom: '$3',
  paddingX: '$3',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  gap: '1ch',

  variants: {
    responsive: {
      small: {},
      medium: {
        paddingY: '$3',
        paddingX: '$4',
        textAlign: 'start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: '2ch',
      },
      large: {
        paddingX: '0',
        gap: '2ch',
      },
    },
  },
});

const StyledAvatar = styled('div', {
  flex: 'none',
  width: '96px',
  height: '96px',
  borderRadius: '29px',
  aspectRatio: '1',
  overflow: 'hidden',

  '& > img': {
    width: '100%',
    height: '100%',
  },
});

const StyledBlogMetadata = styled('div', {
  flex: 'auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '96px',
  paddingY: '$1',
  overflow: 'hidden',

  '& > h1': {
    flex: 'none',
    marginBottom: '$2',
    fontSize: '$6',
    fontWeight: '700',
  },
  '& > p': {
    flex: 'auto',
    fontSize: '$2',
  },
  '& > div': {
    flex: 'none',
  },
});

export default function BlogHeader({config}: {config: BlogConfigType}) {
  return (
    <StyledBlogHeader
      responsive={{
        '@initial': 'small',
        '@small': 'small',
        '@medium': 'medium',
        '@large': 'large',
      }}
    >
      <StyledAvatar>
        {config.avatar?.enabled && (
          <img
            src={`/${config.avatar.src}`}
            srcSet={`/${config.avatar.src}.32x32.webp 500w, /${config.avatar.src}.64x64.webp 600w, /${config.avatar.src}.96x96.webp 706w`}
            alt='avatar'
            width='96'
          />
        )}
      </StyledAvatar>
      <StyledBlogMetadata>
        <h1>
          <Link href='/'>
            <a>{config.title || ''}</a>
          </Link>
        </h1>
        <p>{config.subtitle}</p>
        <SocialButtonCollection social={config.social} />
      </StyledBlogMetadata>
    </StyledBlogHeader>
  );
}
