import React, { useEffect, useState } from 'react';
import Counter from '../../components/Counter';
import { fetchTranslations } from '../../services/translationService';

const TestPage: React.FC = () => {

  const [translations, setTranslations] = useState<Record<string, string>>({});


  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const keys = ['welcome_message', 'good_message'];
        const lang = 'pl';
        const data = await fetchTranslations(lang, keys);
        setTranslations(data);
      } catch (err) {
        console.log('Error fetching translations');
      } 
    };

    loadTranslations();
  }, []);


  return (
    <div className="basic-page">
      <Counter />
      Test Page
      <h1 style={{ fontSize: "20px" }}>Hello!</h1>
      <h1>{translations['welcome_message']}</h1>
      <p>{translations['good_message']}</p>
    </div>
  );
};

export { TestPage };