import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    primaryNav: {
                        services: "Services",
                        properties: "Properties",
                        businesses: "Businesses",
                        news: "News",
                        about_us: "About",
                        contact: "Contact"
                    },
                    Home: {
                        PageIntro: {
                            offers: "offers",
                            news: "news",
                            view: "view"
                        },
                        PageSlider: {
                            slider_one: {
                                part_one: "BUSINESSES REPRESENTED BY",
                                part_two: "VARIOUS INDUSTRIES"
                            },
                            slider_two: {
                                part_one: "LUXURY RESIDENTIAL PROPERTIES IN",
                                part_two: "BULGARIA AND ABROAD"
                            },
                            slider_three: {
                                part_one: "INDUSTRIAL AND",
                                part_two: "COMMERCIAL PROPERTIES"
                            }
                        },
                        About: {
                            why_us: "Why Capital Plus ?",
                            why_description: "We are part of an international chain of business brokers and real estate agents, with a rich database of investors and funds, which guarantees your advertising and the quick sale of your business or property, at the best possible price.",
                            about_us: "about us"
                        },
                        BusinessExplained: {
                            businesses: "Businesses",
                            businesses_description: {
                                part_one: "We sell professionally",
                                part_two: "assessed businesses to",
                                part_three: "an international network of",
                                part_four: "investors and brokers"
                            },
                            business_items: {
                                enterprises: "Enterprises",
                                factories: "Factories",
                                harbors: "Harbors",
                                hotel_chains: {
                                    part_one: "Hotel",
                                    part_two: "chains"
                                },
                                stores: "Stores",
                                hospitals: {
                                    part_one: "Hospitals and",
                                    part_two: "pharmacies"
                                }
                            }
                        },
                        TopOffers: {
                            headline: "Top offers",
                            buttons: {
                                properties: "properties",
                                businesses: "businesses"
                            }
                        },
                        CapitalPlusWork: {
                            question: {
                                part_one: "You want to be a part of the team",
                                part_two: "of Capital Plus Brokers?"
                            },
                            apply_now: "Apply for a position",
                            here_button: "Here"
                        }
                    },
                    Footer: {
                        quick_links: "Quick links",
                        about_us: "about us",
                        news: "news",
                        services: "services",
                        contacts: "Contacts"
                    }
                }
            },
            bg: {
                translation: {
                    primaryNav: {
                        services: "Услуги",
                        properties: "Имоти",
                        businesses: "Бизнеси",
                        news: "Новини",
                        about_us: "За нас",
                        contact: "Контакти"
                    },
                    Home: {
                        PageIntro: {
                            offers: "оферти",
                            news: "новини",
                            view: "преглед"
                        },
                        PageSlider: {
                            slider_one: {
                                part_one: "БИЗНЕСИ ПРЕДСТАВЕНИ ОТ",
                                part_two: "РАЗЛИЧНИ ИНДУСТРИИ"
                            },
                            slider_two: {
                                part_one: "ЛУКСОЗНИ ЖИЛИЩНИ ИМОТИ В",
                                part_two: "БЪЛГАРИЯ И ЧУЖБИНA"
                            },
                            slider_three: {
                                part_one: "ИНДУСТРИАЛНИ И",
                                part_two: "ТЪРГОВСКИ ИМОТИ"
                            }
                        },
                        About: {
                            why_us: "Защо Capital Plus ?",
                            why_description: "Ние сме част от международна верига от бизнес брокери и агенти на недвижими имоти, разполагаща с богата база данни от инвеститори и фондове, което гарантира вашето рекламиране и бърза продажбата на бизнеса или имота ви, на възможно най-добрата цена.",
                            about_us: "за нас"
                        },
                        BusinessExplained: {
                            businesses: "Бизнеси",
                            businesses_description: {
                                part_one: "Ние продаваме бизнеси",
                                part_two: "професионално оценени в",
                                part_three: "международна мрежа от",
                                part_four: "инвеститори и брокери"
                            },
                            business_items: {
                                enterprises: "предприятия",
                                factories: "заводи",
                                harbors: "пристанища",
                                hotel_chains: {
                                    part_one: "хотелски",
                                    part_two: "вериги"
                                },
                                stores: "магазини",
                                hospitals: {
                                    part_one: "болници и",
                                    part_two: "аптеки"
                                }
                            }
                        },
                        TopOffers: {
                            headline: "Топ оферти",
                            buttons: {
                                properties: "имоти",
                                businesses: "бизнеси"
                            }
                        },
                        CapitalPlusWork: {
                            question: {
                                part_one: "Искаш да бъдеш част от екипа",
                                part_two: "на Capital Plus Brokers?"
                            },
                            apply_now: "Кандидаствай за работа",
                            here_button: "Тук"
                        }
                    },
                    Footer: {
                        quick_links: "Бързи линкове",
                        about_us: "за нас",
                        news: "новини",
                        services: "услуги",
                        contacts: "Контакти"
                    }
                }
            }


        }
    });

export default i18n;