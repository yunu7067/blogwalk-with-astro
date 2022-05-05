import {Button} from '@com/atoms';
import {MoonIcon, SunIcon} from '@radix-ui/react-icons';
import {styled} from '@style/createStyles';

const DarkModeButtonContainer = styled('div', {
  position: 'absolute',
  top: '2ch',
  right: '2ch',
});

export default function DarkModeButton({themeString, toggleTheme}: {themeString: string; toggleTheme: () => unknown}) {
  return (
    <DarkModeButtonContainer>
      <Button content='icon' onClick={toggleTheme} aria-label='Use dark mode' aria-pressed={themeString !== 'light'}>
        {themeString === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </DarkModeButtonContainer>
  );
}
