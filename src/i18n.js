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
                        login: "Login",
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
                    },
                    Services: {
                        service_title: "",
                        headlines: {
                            first: "MEDIATION IN THE PURCHASE OF BUSINESSES AND ENTERPRISES",
                            second: "MEDIATION IN THE PURCHASE AND SALE OF LUXURY RESIDENTIAL PROPERTIES",
                            third: "MEDIATION IN THE PURCHASE AND SALE OF INDUSTRIAL AND COMMERCIAL PROPERTIES",
                            forth: "MEDIATION IN THE SALE OF BUSINESSES AND ENTERPRISES",
                            fifth: "INVESTMENT PROJECTS AND BUSINESS STRATEGIES"
                        },
                        headline_descriptions: {
                            first: "On the Buyer's side, we work by listening to their desires and intentions, committing to finding the business our client wants to purchase. We strive for a detailed study of the business, its history and reasons for selling. For both parties, we achieve maximum satisfaction and successful completion of business transactions.",
                            second: "The best home is the dream home. We make our clients' dreams come true by finding and offering only high standard residential properties including houses, villas and apartments. Modern in design, convenient in location and contemporary in décor are the properties our qualified Agents and Consultants will find for you.",
                            third: "We are not the usual listing platform, but a multi-functional brokerage company with a team of brokers, agents and consultants for industrial and commercial property transactions. Our specialists are always prepared with comprehensive technical information about the properties minimizing any risks and surprises in the transactions. Experienced and dedicated in our work constantly committed to the goals and wishes of our clients, we provide full economic, financial and legal services for the purchase or lease of industrial and commercial properties.",
                            forth: "On the Seller side, we are committed to evaluating, analyzing and finding the most successful way to position and market your business. Our goal is to achieve the best price for the Seller, completing the entire purchase and ownership transfer process successfully and quickly.",
                            fifth: "For investors, we offer successful business ideas or investment projects with long-term or short-term returns. For clients who are struggling in business, we can offer optimization and reform, as well as transformation into a new successful business model."
                        }
                    },
                    Properties: {
                        property_title: "PROPERTIES",
                        filters: {
                            country: "Country",
                            city: "City",
                            type: "Property type"
                        },
                        search_value: "Search",
                        filter_value: "All",
                        not_found: "No offers were found",
                        more: "more"
                    },
                    About: {
                        about_us: "ABOUT US",
                        about_us_description: "CapitalPlusBusinessBrokers is a boutique agency specializing in buying and selling businesses, commercial and residential properties in Bulgaria and abroad. Sev Atanasov is the Founder and Principal of CapitalPlusBusinessBrokers. He owns businesses in America&Bulgaria and he has more than 25 years extensive experience in different companies and industries as a business executive. Sev is an expert in company management, strategic planning, operations management, budgeting management and cost estimating, due diligence and valuation, quality control, research&development, business start-up/business growth and  HRManagement. ",
                        our_goal: "Our goal",
                        our_goal_description: "To help our customers choose security, comfort and individuality through our services.",
                        features: {
                            shoping_title: {
                                part_one: "Exclusive in Bulgaria",
                                part_two: "“One-Stop Shopping”"
                            },
                            shopping_description: "Our team of professionals provide a large variety of services of the buy-sell process, including negotiation, financial, research and due diligence. CapitalPlusBusinessBrokers play an important role in helping owners successfully sell their business. ",
                            years_experience: "More than 25 years of experience",
                            years_experience_description: "We follow the principles of our values of transparency in our work, integrity and professionalism in our relationships with our clients. We make the process easy and successful covering the interests to both buyers and sellers.",
                            face_to_face: {
                                part_one: "Direct physical",
                                part_two: "contact “Face to Face”"
                            },
                            face_to_face_description: "Personally committed and dedicated to оur clients, to achieving 100% of planned results."
                        },
                        what_we_do: "What do we do for you ?",
                        what_we_do_description: "Our Vision is to work together to build a successful and sustainable business and social well-being based on our company culture and European values.",
                        values: {
                            valueHead: "Values",
                            value_one: "Commitment and excellence",
                            value_one_description: "Through constant commitment and combined solutions of knowledge and experience, we always find a successful conclusion to any business situation for the benefit of our clients.",
                            value_two: "Integrity and trust",
                            value_two_description: "Striving to build trust with our clients and transparency in work, respecting high moral and professional standards.",
                            value_three: "Fairness",
                            value_three_description: "Trust and transparency are essential values that we’ve set to protect our business and we keep commitment to the ethical standards in all of it’s activities and legal standards.",
                            value_four: "Competence and teamwork",
                            value_four_description: "The combination of knowledge, work skills and motivation are leading qualities for our team.  Each team member is significant and important as an expert in their own specialty to achieve the ultimate goals of the company and customer satisfaction.",
                            value_five: "Respect and Confidentiality",
                            value_five_description: "We treat our customers, partners and every employee of our company with respect. We have a confidentiality policy and system in place for handling confidential information and only work with qualified clients.",
                        }
                    },
                    Contact: {
                        have_question: "Have a question?",
                        contact_us: "Contact us",
                        form: {
                            name: "Name",
                            surname: "Surname",
                            mail: "E-mail address",
                            subject: "Subject",
                            message: "Message",
                            send: "Send message",
                            phones: "Phone"
                        }
                    },
                    SelectedProperty: {
                        inquiry: "inquiry about the offer",
                        description: "Description:"
                    }
                }
            },
            bg: {
                translation: {
                    primaryNav: {
                        services: "Услуги",
                        properties: "Имоти",
                        businesses: "Бизнеси",
                        login: "Влизане",
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
                    },
                    Services: {
                        service_title: "БРОКЕРСКИ УСЛУГИ",
                        headlines: {
                            first: "ПОСРЕДНИЧЕСТВО ПРИ ПОКУПКА НА БИЗНЕСИ И ПРЕДПРИЯТИЯ",
                            second: "ПОСРЕДНИЧЕСТВО ПРИ ПОКУПКО-ПРОДАЖБА НА ЖИЛИЩНИ ЛУКСОЗНИ ИМОТИ",
                            third: "ПОСРЕДНИЧЕСТВО ПРИ ПОКУПКО-ПРОДАЖБА НА ИНДУСТРИАЛНИ, ПРОМИШЛЕНИ И ТЪРГОВСКИ ИМОТИ",
                            forth: "ПОСРЕДНИЧЕСТВО ПРИ ПРОДАЖБА НА БИЗНЕСИ И ПРЕДПРИЯТИЯ",
                            fifth: "ИНВЕСТИЦИОННИ ПРОЕКТИ И БИЗНЕС СТРАТЕГИИ"
                        },
                        headline_descriptions: {
                            first: "От страна на Купувача, ние работим вслушвайки се в неговите желания и намерения, като се ангажираме да намерим бизнеса, който нашият клиент иска да закупи. Стремим се към детайлно проучване на бизнеса, неговата история и причини за продажба. За двете страни, ние постигаме максимална удовлетвореност и успешна реализация на бизнес сделките.",
                            second: "Най-хубавият дом е мечтаният дом. Ние сбъдваме мечите на нашите клиенти, намирайки и предлагайки само висок стандарт жилищни имоти, в това число къщи, вили и апартаменти. Модерни като дизайн, удобни като локация и съвременен интериор са имотите, които нашите квалифицирани Агенти и консултанти ще намерят за вас.",
                            third: "Ние не сме обичайната платформа за обяви, а мултифункционална брокерска компания разполагаща с екип от брокери, агенти и консултанти по сделки с индустриални и търговски имоти. Нашите специалисти са винаги подготвени с цялостна техническа информация за имотите минимизирайки всякакви рискове и изненади при сключване на сделките. Опитни и всеотдайни в работата си постоянно ангажирани с целите и желанията на клиентите ние предоставяме пълно икономическо, финансово и правно обслужване при покупко-продажба или отдаване под наем на индустриални и търговски имоти.",
                            forth: "От страна на Продавача, ние се ангажираме да оценим, анализираме и намерим най-успешния начин за позициониране и продажба на вашия бизнес. Нашата цел е да постигнем най-добрата цена за продавача, завършвайки успешно и бързо целият процес по покупко-продажба и прехвърляне на собственост.",
                            fifth: "За инвеститорите, предлагаме успешни бизнес идеи или инвестиционни проекти с дългосрочна или краткосрочна възвращаемост. За клиенти, които имат затруднения в бизнеса, можем да предложим оптимизиране и реформиране , както и трансформиране в нов успешен бизнес модел."
                        }
                    },
                    Properties: {
                        property_title: "ИМОТИ",
                        filters: {
                            country: "Държава",
                            city: "Град",
                            type: "Тип имот"
                        },
                        search_value: "Търсене",
                        filter_value: "Всички",
                        not_found: "Няма налични обяви",
                        more: "още"
                    },
                    About: {
                        about_us: "ЗА НАС",
                        about_us_description: "“Капитал Плюс Брокърс” е бутикова агенция специализирана в посредничеството при покупко-продажба на бизнеси, предприятия, индустриални, търговски и луксозни жилищни имоти в България и чужбина. Учредител и собственик на компанията е Сев Атанасов, който има над 25 годишен бизнес опит в различни компании и индустрии. Той управлява бизнеси в България и Америка и е експерт във фирмен мениджмънт, стратегическо планиране, оперативен мениджмънт, управление на бюджети и изготвяне на оферти и оценки, качествен контрол, маркетингови проучвания и продуктово развитие, HR Мениджмънт, стартиране и развиване на нови бизнеси.",
                        our_goal: "Нашата цел",
                        our_goal_description: "Да помогнем на нашите клиенти да изберат сигурност,комфорт и индивидуалност чрез нашите услуги.",
                        features: {
                            shoping_title: {
                                part_one: "Eдинствени в България",
                                part_two: "“One-Stop Shopping”"
                            },
                            shopping_description: "Разполагаме с професионален екип от експерти с които предоставяме пълен аспект от икономическо, финансово,  и правно обслужване на клиентите за успешната реализация на сделките.",
                            years_experience: "Повече от 25 години опит",
                            years_experience_description: "Следваме принципите на прозрачност в работата, почтеност и професионализъм във взаимоотношенията с нашите клиенти. Правим процеса лесен и успешен покривайки максимално интересите на всички заинтересовани страни в бизнеса.",
                            face_to_face: {
                                part_one: "Директен физически",
                                part_two: "контакт “Face to Face”"
                            },
                            face_to_face_description: "Лично ангажирани и отдадени на своите клиенти, до постигане на 100% планираните резултати."
                        },
                        what_we_do: "Какво правим за вас ?",
                        what_we_do_description: "Опирайки се на фирмената ни култура и европейските ценности, нашата визия е да се грижим за изграждането на успешен бизнес и социално благополучие в средата където работим и живеем.",
                        values: {
                            valueHead: "Ценности",
                            value_one: "Ангажираност и съвършенство",
                            value_one_description: "Чрез постоянна ангажираност и комбинативни решения от знания и опит, ние винаги намираме успешен завършек на всякаква бизнес ситуация в полза на нашите клиенти.",
                            value_two: "Почтеност и доверие",
                            value_two_description: "Стремеж към изграждане на доверие a с нашите клиенти и прозрачност в работата, спазвайки високи морални и професионални стандарти.",
                            value_three: "Справедливост",
                            value_three_description: "Нашият екип работи безпристрастно и без предразсъдъци, спазвайки морално-етически и правови норми към всички.",
                            value_four: "Компетентност и работа в екип",
                            value_four_description: "Комбинацията от знания, трудови умения и мотивация са водещи качества за нас. Всеки член от екипа е значим и важен, като експерт в собствената си специалност за постигането на крайните цели на компанията и нашите клиенти.",
                            value_five: "Уважение и конфиденциалност",
                            value_five_description: "Отнасяме се с уважение към нашите клиенти, партньори и всеки наш служител на компанията. Имаме изградена политика за конфиденциалност и система на работа с поверителна информация и работим само с квалифицирани клиенти.",
                        }
                    },
                    Contact: {
                        have_question: "Имате въпрос?",
                        contact_us: "Свържете се с нас",
                        form: {
                            name: "Име",
                            surname: "Фамилно име",
                            mail: "E-mail адрес",
                            subject: "Тема",
                            message: "Съобщение",
                            send: "изпрати съобщението",
                            phones: "Телефон"
                        }
                    },
                    SelectedProperty: {
                        inquiry: "запитване за офертата",
                        description: "Описание:"
                    }
                }
            }


        }
    });

export default i18n;