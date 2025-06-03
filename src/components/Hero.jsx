
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-blue-600 font-medium">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={scrollToFeatures}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Play className="mr-2" size={20} />
                {t('hero.learn')}
              </button>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="relative">
              <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-4 bg-white rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 font-medium">Visual Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
