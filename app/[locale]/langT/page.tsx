import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('LangTest');
  return (<div> 
        <h1>{t('testpage_title')}</h1>
        <p>{t('testpage_msg')}</p>
    </div>);
}