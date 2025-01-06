import { useTranslation } from 'react-i18next';
import './Home.scss';
import { WavingHand } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';

export default function HomePage() {
  const { t } = useTranslation('translation', { keyPrefix: 'page.home' });

  return (
    <div className="home-container">
      <p>{t('helloWorld')}</p>
      <Tooltip className="tooltip" title={t('hi')} placement="top">
        <IconButton>
          <WavingHand />
        </IconButton>
      </Tooltip>
    </div>
  );
}
