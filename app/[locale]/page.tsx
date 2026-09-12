import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('Navigation');
  return (
    <main className="p-8">
      <h1 className="text-display-1">{t('treatments')}</h1>
      <p className="max-w-body text-body mt-4">This is the homepage of Shri Andavar Eye Care and Retina Centre.</p>
    </main>
  );
}
