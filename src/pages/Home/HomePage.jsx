import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation(['translation', 'common']);  return (
    <div>
      <p>{t('key',{ns:namespace1})}</p>
    </div>
  );
}
