
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        features: "Features",
        contact: "Contact"
      },
      hero: {
        title: "Transform Your Business",
        subtitle: "Innovative solutions for modern challenges",
        description: "We help businesses grow with cutting-edge technology and expert consultation. Join thousands of satisfied customers worldwide.",
        cta: "Get Started",
        learn: "Learn More"
      },
      features: {
        title: "Why Choose Us",
        subtitle: "Discover what makes us different",
        feature1: {
          title: "Expert Team",
          description: "Our experienced professionals deliver exceptional results"
        },
        feature2: {
          title: "24/7 Support",
          description: "Round-the-clock assistance whenever you need it"
        },
        feature3: {
          title: "Proven Results",
          description: "Track record of successful projects and satisfied clients"
        }
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Ready to start your project?",
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        send: "Send Message",
        success: "Message sent successfully!"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        features: "Особенности",
        contact: "Контакты"
      },
      hero: {
        title: "Трансформируйте Ваш Бизнес",
        subtitle: "Инновационные решения для современных вызовов",
        description: "Мы помогаем бизнесу расти с помощью передовых технологий и экспертных консультаций. Присоединяйтесь к тысячам довольных клиентов по всему миру.",
        cta: "Начать",
        learn: "Узнать Больше"
      },
      features: {
        title: "Почему Выбирают Нас",
        subtitle: "Узнайте, что делает нас особенными",
        feature1: {
          title: "Команда Экспертов",
          description: "Наши опытные специалисты обеспечивают исключительные результаты"
        },
        feature2: {
          title: "Поддержка 24/7",
          description: "Круглосуточная помощь когда она вам нужна"
        },
        feature3: {
          title: "Проверенные Результаты",
          description: "Послужной список успешных проектов и довольных клиентов"
        }
      },
      contact: {
        title: "Связаться с Нами",
        subtitle: "Готовы начать ваш проект?",
        name: "Полное Имя",
        email: "Электронная Почта",
        message: "Ваше Сообщение",
        send: "Отправить Сообщение",
        success: "Сообщение успешно отправлено!"
      }
    }
  },
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        features: "Xususiyatlar",
        contact: "Aloqa"
      },
      hero: {
        title: "Biznesingizni O'zgartiring",
        subtitle: "Zamonaviy muammolar uchun innovatsion yechimlar",
        description: "Biz bizneslarni ilg'or texnologiyalar va ekspert maslahatlari bilan o'sishga yordam beramiz. Butun dunyo bo'ylab minglab mamnun mijozlarga qo'shiling.",
        cta: "Boshlash",
        learn: "Ko'proq O'rganish"
      },
      features: {
        title: "Nima Uchun Bizni Tanlash Kerak",
        subtitle: "Bizni nima bilan ajralib turishini bilib oling",
        feature1: {
          title: "Ekspert Jamoa",
          description: "Tajribali mutaxassislarimiz ajoyib natijalar beradi"
        },
        feature2: {
          title: "24/7 Qo'llab-quvvatlash",
          description: "Kerak bo'lganda doimo yordam"
        },
        feature3: {
          title: "Isbotlangan Natijalar",
          description: "Muvaffaqiyatli loyihalar va mamnun mijozlar tarixi"
        }
      },
      contact: {
        title: "Bog'lanish",
        subtitle: "Loyihangizni boshlashga tayyormisiz?",
        name: "To'liq Ism",
        email: "Elektron Pochta",
        message: "Sizning Xabaringiz",
        send: "Xabar Yuborish",
        success: "Xabar muvaffaqiyatli yuborildi!"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
