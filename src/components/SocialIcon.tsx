import {Component} from 'solid-js';
import {SocialConfigType, SocialIdentifiers} from '../types/ConfigType';
import {Discord, Earth, Facebook, GitHub, Instagram, LinkedIn, Mail, Npmjs, Twitter, YouTube} from './icons';

interface SocialIconProps {
  social: SocialConfigType;
}

const SocialIcon: Component<SocialIconProps> = ({social}) => (
  <a href={social.url} title={social.name} class='p-1'>
    {IconSwitcher(social.identifier)}
  </a>
);

const IconSwitcher = (identifier: SocialIdentifiers): Component => {
  switch (identifier) {
    case 'github':
      return <GitHub />;
    case 'facebook':
      return <Facebook />;
    case 'twitter':
      return <Twitter />;
    case 'discord':
      return <Discord />;
    case 'instagram':
      return <Instagram />;
    case 'linkedin':
      return <LinkedIn />;
    case 'npmjs':
      return <Npmjs />;
    case 'youtube':
      return <YouTube />;
    case 'email':
      return <Mail />;

    default:
      return <Earth />;
  }
};

export default SocialIcon;
