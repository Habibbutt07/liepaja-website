// Comprehensive list of all services offered by Liepaja municipality
// Based on epakalpojumi.liepaja.lv and liepaja.lv

export const allServices = [
  // Document Services
  {
    id: 'birth-certificate',
    title: 'Dzimšanas apliecības izsniegšana',
    titleEn: 'Birth Certificate Issuance',
    category: 'documents',
    icon: '📋',
    description: 'Iesniegšana dzimšanas apliecības izsniegšanai vai tās kopijas saņemšanai.',
    descriptionEn: 'Application for birth certificate issuance or obtaining a copy.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Sagatavojiet nepieciešamos dokumentus',
        titleEn: 'Prepare required documents',
        details: [
          'Personas apliecinošs dokuments (pase vai ID karte)',
          'Vecāku personas apliecinošie dokumenti (ja nepieciešams)',
          'Dokumenti, kas apliecina dzimšanas faktu (ja nepieciešams)'
        ]
      },
      {
        step: 2,
        title: 'Aizpildiet pieteikumu',
        titleEn: 'Fill out the application',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "Dzimšanas apliecības izsniegšana"',
          'Aizpildiet elektronisko pieteikuma formu',
          'Norādiet nepieciešamo informāciju'
        ]
      },
      {
        step: 3,
        title: 'Pievienojiet dokumentus',
        titleEn: 'Attach documents',
        details: [
          'Augšupielādējiet nepieciešamo dokumentu kopijas',
          'Pārliecinieties, ka visi dokumenti ir skaidri un lasāmi',
          'Pārbaudiet, vai visi lauki ir aizpildīti'
        ]
      },
      {
        step: 4,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit the application',
        details: [
          'Pārskatiet visu ievadīto informāciju',
          'Iesniedziet pieteikumu',
          'Saņemsiet apstiprinājumu uz e-pastu',
          'Sekojiet līdzi pieteikuma statusam portālā'
        ]
      },
      {
        step: 5,
        title: 'Saņemiet dokumentu',
        titleEn: 'Receive the document',
        details: [
          'Pēc apstrādes saņemsiet paziņojumu',
          'Varat saņemt dokumentu personīgi vai pa pastu',
          'Dokumenta izsniegšanas maksa: saskaņā ar likumu'
        ]
      }
    ],
    requirements: [
      'Personas apliecinošs dokuments',
      'Pieteikuma forma',
      'Maksas samaksa (ja nepieciešama)'
    ],
    processingTime: '5-10 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'marriage-certificate',
    title: 'Laulības apliecības izsniegšana',
    titleEn: 'Marriage Certificate Issuance',
    category: 'documents',
    icon: '💍',
    description: 'Laulības apliecības izsniegšana vai tās kopijas saņemšana.',
    descriptionEn: 'Marriage certificate issuance or obtaining a copy.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Sagatavojiet dokumentus',
        titleEn: 'Prepare documents',
        details: [
          'Abu laulāto personas apliecinošie dokumenti',
          'Iepriekšējās laulības šķiršanas dokuments (ja bija)',
          'Personas apliecinošs dokuments'
        ]
      },
      {
        step: 2,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit application',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "Laulības apliecības izsniegšana"',
          'Aizpildiet formu un pievienojiet dokumentus'
        ]
      },
      {
        step: 3,
        title: 'Saņemiet dokumentu',
        titleEn: 'Receive document',
        details: [
          'Pēc apstrādes saņemsiet paziņojumu',
          'Saņemiet dokumentu personīgi vai pa pastu'
        ]
      }
    ],
    requirements: [
      'Personas apliecinošs dokuments',
      'Iepriekšējās laulības dokuments (ja bija)'
    ],
    processingTime: '5-10 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'building-permit',
    title: 'Būvatļauja',
    titleEn: 'Building Permit',
    category: 'documents',
    icon: '🏗️',
    description: 'Būvatļaujas izsniegšana būvniecības darbiem.',
    descriptionEn: 'Building permit issuance for construction work.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Sagatavojiet projektu dokumentāciju',
        titleEn: 'Prepare project documentation',
        details: [
          'Būvprojekts vai būvprojekta daļa',
          'Zemes gabala plāns',
          'Tehniskais projekts',
          'Vides ietekmes novērtējums (ja nepieciešams)'
        ]
      },
      {
        step: 2,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit application',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "Būvatļauja"',
          'Aizpildiet pieteikumu un pievienojiet dokumentus',
          'Norādiet būvniecības mērķi un apjomu'
        ]
      },
      {
        step: 3,
        title: 'Gaidi ekspertīzi',
        titleEn: 'Wait for examination',
        details: [
          'Pašvaldība veiks dokumentu ekspertīzi',
          'Var būt nepieciešamas papildu dokumenti',
          'Sekojiet līdzi pieteikuma statusam'
        ]
      },
      {
        step: 4,
        title: 'Saņemiet atļauju',
        titleEn: 'Receive permit',
        details: [
          'Pēc pozitīvas ekspertīzes saņemsiet būvatļauju',
          'Varat sākt būvniecības darbus'
        ]
      }
    ],
    requirements: [
      'Būvprojekts',
      'Zemes gabala dokumenti',
      'Tehniskais projekts',
      'Maksas samaksa'
    ],
    processingTime: '30-60 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'library-registration',
    title: 'Attālināta reģistrācija bibliotēkā',
    titleEn: 'Remote Library Registration',
    category: 'education',
    icon: '📚',
    description: 'Reģistrācija Liepājas bibliotēkā attālināti, izmantojot e-pakalpojumu portālu.',
    descriptionEn: 'Remote registration at Liepaja library using the e-services portal.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Ielogojieties portālā',
        titleEn: 'Log in to portal',
        details: [
          'Atveriet e-pakalpojumu portālu',
          'Ielogojieties ar savu kontu',
          'Ja nav konta, reģistrējieties'
        ]
      },
      {
        step: 2,
        title: 'Izvēlieties reģistrāciju bibliotēkā',
        titleEn: 'Select library registration',
        details: [
          'Atrodiet "Attālināta reģistrācija bibliotēkā"',
          'Noklikšķiniet uz pakalpojuma'
        ]
      },
      {
        step: 3,
        title: 'Aizpildiet anketu',
        titleEn: 'Fill out the form',
        details: [
          'Norādiet savus personas datus',
          'Izvēlieties bibliotēkas filiāli',
          'Norādiet kontaktinformāciju'
        ]
      },
      {
        step: 4,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit application',
        details: [
          'Pārskatiet informāciju',
          'Iesniedziet pieteikumu',
          'Saņemsiet apstiprinājumu'
        ]
      },
      {
        step: 5,
        title: 'Saņemiet bibliotēkas karti',
        titleEn: 'Receive library card',
        details: [
          'Pēc apstrādes saņemsiet bibliotēkas karti',
          'Varat izmantot visus bibliotēkas pakalpojumus',
          'Varat izņemt grāmatas un izmantot digitālos resursus'
        ]
      }
    ],
    requirements: [
      'Personas apliecinošs dokuments',
      'Reģistrācijas anketa',
      'E-pasta adrese'
    ],
    processingTime: '3-5 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'student-transport-discount',
    title: 'E-biļešu atvieglojums augstākās izglītības studentiem',
    titleEn: 'E-Ticket Discount for Higher Education Students',
    category: 'transport',
    icon: '🎓',
    description: 'Iesniegums augstākās izglītības iestādes pilna laika studējošam e-biļešu atvieglojuma saņemšanai Liepājas sabiedriskajā transportā.',
    descriptionEn: 'Application for full-time higher education students to receive e-ticket discount in Liepaja public transport.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Sagatavojiet dokumentus',
        titleEn: 'Prepare documents',
        details: [
          'Studenta apliecība vai izziņa no augstskolas',
          'Personas apliecinošs dokuments',
          'Fotogrāfija (ja nepieciešama)'
        ]
      },
      {
        step: 2,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit application',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "E-biļešu atvieglojums studentiem"',
          'Aizpildiet pieteikumu un pievienojiet dokumentus'
        ]
      },
      {
        step: 3,
        title: 'Gaidi apstiprinājumu',
        titleEn: 'Wait for approval',
        details: [
          'Pašvaldība pārbaudīs dokumentus',
          'Saņemsiet apstiprinājumu uz e-pastu'
        ]
      },
      {
        step: 4,
        title: 'Saņemiet atvieglojumu',
        titleEn: 'Receive discount',
        details: [
          'Pēc apstiprināšanas saņemsiet e-biļeti ar atvieglojumu',
          'Varat izmantot atvieglojumu sabiedriskajā transportā'
        ]
      }
    ],
    requirements: [
      'Studenta apliecība',
      'Personas apliecinošs dokuments',
      'Reģistrācija Liepājā (ja nepieciešama)'
    ],
    processingTime: '5-7 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'large-family-discount',
    title: 'E-biļešu atvieglojums daudzbērnu ģimenēm',
    titleEn: 'E-Ticket Discount for Large Families',
    category: 'transport',
    icon: '👨‍👩‍👧‍👦',
    description: 'Iesniegums par daudzbērnu ģimenes statusu skolēnam e-biļešu atvieglojuma saņemšanai Liepājas sabiedriskajā transportā.',
    descriptionEn: 'Application for large family status for students to receive e-ticket discount in Liepaja public transport.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Sagatavojiet dokumentus',
        titleEn: 'Prepare documents',
        details: [
          'Daudzbērnu ģimenes apliecība',
          'Bērna dzimšanas apliecība',
          'Skolas apliecība',
          'Personas apliecinošs dokuments'
        ]
      },
      {
        step: 2,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit application',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "E-biļešu atvieglojums daudzbērnu ģimenēm"',
          'Aizpildiet pieteikumu un pievienojiet dokumentus'
        ]
      },
      {
        step: 3,
        title: 'Saņemiet atvieglojumu',
        titleEn: 'Receive discount',
        details: [
          'Pēc apstiprināšanas saņemsiet e-biļeti ar atvieglojumu',
          'Bērns var izmantot atvieglojumu sabiedriskajā transportā'
        ]
      }
    ],
    requirements: [
      'Daudzbērnu ģimenes apliecība',
      'Bērna dokumenti',
      'Skolas apliecība'
    ],
    processingTime: '5-7 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'sports-achievement-support',
    title: 'Sportistu, sporta klubu, komandu sasniegumi',
    titleEn: 'Sports Achievements Support',
    category: 'sports',
    icon: '🏆',
    description: 'Atbalsts sportistu, sporta klubu un komandu sasniegumiem 2025. gadā.',
    descriptionEn: 'Support for sports achievements of athletes, sports clubs and teams in 2025.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Sagatavojiet projektu',
        titleEn: 'Prepare project',
        details: [
          'Sasniegumu apraksts',
          'Dokumenti, kas apliecina sasniegumus',
          'Projekta budžets',
          'Laika plāns'
        ]
      },
      {
        step: 2,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit application',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "Sportistu sasniegumu atbalsts"',
          'Aizpildiet pieteikumu un pievienojiet dokumentus'
        ]
      },
      {
        step: 3,
        title: 'Gaidi novērtējumu',
        titleEn: 'Wait for evaluation',
        details: [
          'Komisija novērtēs pieteikumu',
          'Var būt nepieciešama papildu informācija',
          'Sekojiet līdzi konkursa rezultātiem'
        ]
      },
      {
        step: 4,
        title: 'Saņemiet atbalstu',
        titleEn: 'Receive support',
        details: [
          'Pēc apstiprināšanas saņemsiet finansējumu',
          'Izmantojiet atbalstu sasniegumu attīstībai'
        ]
      }
    ],
    requirements: [
      'Sasniegumu dokumenti',
      'Projekta apraksts',
      'Budžets',
      'Laika plāns'
    ],
    processingTime: '30-45 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'sports-investment',
    title: 'Ieguldījums sportā',
    titleEn: 'Investment in Sports',
    category: 'sports',
    icon: '⚽',
    description: 'Finansiāls atbalsts sporta attīstībai 2025. gadā.',
    descriptionEn: 'Financial support for sports development in 2025.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Sagatavojiet projektu',
        titleEn: 'Prepare project',
        details: [
          'Sporta projekta apraksts',
          'Budžets un finansējuma plāns',
          'Laika grafiks',
          'Paredzamie rezultāti'
        ]
      },
      {
        step: 2,
        title: 'Iesniedziet pieteikumu',
        titleEn: 'Submit application',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "Ieguldījums sportā"',
          'Aizpildiet pieteikumu un pievienojiet dokumentus'
        ]
      },
      {
        step: 3,
        title: 'Gaidi novērtējumu',
        titleEn: 'Wait for evaluation',
        details: [
          'Komisija novērtēs projektu',
          'Var būt nepieciešama prezentācija',
          'Sekojiet līdzi konkursa procesam'
        ]
      },
      {
        step: 4,
        title: 'Saņemiet finansējumu',
        titleEn: 'Receive funding',
        details: [
          'Pēc apstiprināšanas saņemsiet finansējumu',
          'Izmantojiet finansējumu saskaņā ar projektu'
        ]
      }
    ],
    requirements: [
      'Projekta apraksts',
      'Budžets',
      'Laika plāns',
      'Paredzamie rezultāti'
    ],
    processingTime: '30-60 darba dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'tree-cutting-discussion',
    title: 'Koku ciršanas ieceres publiskā apspriešana',
    titleEn: 'Public Discussion on Tree Cutting Plans',
    category: 'environment',
    icon: '🌳',
    description: 'Publiskā apspriešana par koku ciršanas iecerēm Ziemeļu priekšpilsētā.',
    descriptionEn: 'Public discussion on tree cutting plans in Northern suburb.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Iepazīstieties ar projektu',
        titleEn: 'Familiarize with project',
        details: [
          'Izlasiet koku ciršanas ieceres dokumentus',
          'Pārskatiet plānus un kartes',
          'Iepazīstieties ar ietekmes novērtējumu'
        ]
      },
      {
        step: 2,
        title: 'Iesniedziet viedokli',
        titleEn: 'Submit opinion',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Izvēlieties "Koku ciršanas apspriešana"',
          'Iesniedziet savu viedokli vai ierosinājumus'
        ]
      },
      {
        step: 3,
        title: 'Piedalieties apspriedē',
        titleEn: 'Participate in discussion',
        details: [
          'Piedalieties publiskajā apspriedē',
          'Izteiciet savu viedokli',
          'Klausieties citu iedzīvotāju viedokļus'
        ]
      },
      {
        step: 4,
        title: 'Sekojiet līdzi rezultātiem',
        titleEn: 'Follow results',
        details: [
          'Sekojiet līdzi apspriešanas rezultātiem',
          'Skatiet pieņemtos lēmumus',
          'Informējieties par turpmākajām darbībām'
        ]
      }
    ],
    requirements: [
      'Reģistrācija portālā',
      'Viedokļa izteikšana'
    ],
    processingTime: 'Apspriešanas periods: 30 dienas',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'online-appointment',
    title: 'Tiešsaistes pieraksts pie speciālistiem',
    titleEn: 'Online Appointment with Specialists',
    category: 'appointments',
    icon: '📅',
    description: 'Pieraksts pie deputātiem un pašvaldības speciālistiem tiešsaistē.',
    descriptionEn: 'Online appointment with deputies and municipal specialists.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Ielogojieties portālā',
        titleEn: 'Log in to portal',
        details: [
          'Atveriet e-pakalpojumu portālu',
          'Ielogojieties ar savu kontu'
        ]
      },
      {
        step: 2,
        title: 'Izvēlieties speciālistu',
        titleEn: 'Select specialist',
        details: [
          'Skatiet pieejamo speciālistu sarakstu',
          'Izvēlieties vajadzīgo speciālistu vai deputātu',
          'Skatiet pieejamos laikus'
        ]
      },
      {
        step: 3,
        title: 'Izvēlieties laiku',
        titleEn: 'Select time',
        details: [
          'Skatiet pieejamos laikus kalendārā',
          'Izvēlieties jums ērtāko laiku',
          'Norādiet konsultācijas tēmu'
        ]
      },
      {
        step: 4,
        title: 'Apstipriniet pierakstu',
        titleEn: 'Confirm appointment',
        details: [
          'Pārskatiet izvēlēto laiku',
          'Apstipriniet pierakstu',
          'Saņemsiet apstiprinājumu uz e-pastu'
        ]
      },
      {
        step: 5,
        title: 'Piedalieties konsultācijā',
        titleEn: 'Attend consultation',
        details: [
          'Atnāciet noteiktajā laikā',
          'Ņemiet līdzi nepieciešamos dokumentus',
          'Saņemiet konsultāciju'
        ]
      }
    ],
    requirements: [
      'Reģistrācija portālā',
      'Personas apliecinošs dokuments (konsultācijā)'
    ],
    processingTime: 'Tūlītēja pieejamība',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'event-registration',
    title: 'Reģistrācija pasākumiem',
    titleEn: 'Event Registration',
    category: 'events',
    icon: '🎉',
    description: 'Pieteikšanās anketas uz dažādiem pašvaldības pasākumiem.',
    descriptionEn: 'Registration forms for various municipal events.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Skatiet pieejamos pasākumus',
        titleEn: 'View available events',
        details: [
          'Ielogojieties e-pakalpojumu portālā',
          'Skatiet "Reģistrācija pasākumiem" sadaļu',
          'Izvēlieties interesējošo pasākumu'
        ]
      },
      {
        step: 2,
        title: 'Aizpildiet reģistrācijas formu',
        titleEn: 'Fill out registration form',
        details: [
          'Norādiet savus personas datus',
          'Izvēlieties pasākuma datumu un laiku',
          'Norādiet kontaktinformāciju'
        ]
      },
      {
        step: 3,
        title: 'Iesniedziet reģistrāciju',
        titleEn: 'Submit registration',
        details: [
          'Pārskatiet informāciju',
          'Iesniedziet reģistrāciju',
          'Saņemsiet apstiprinājumu'
        ]
      },
      {
        step: 4,
        title: 'Piedalieties pasākumā',
        titleEn: 'Attend event',
        details: [
          'Saņemsiet atgādinājumu pirms pasākuma',
          'Piedalieties pasākumā noteiktajā laikā',
          'Izmantojiet iespēju sazināties ar organizatoriem'
        ]
      }
    ],
    requirements: [
      'Reģistrācija portālā',
      'Kontaktinformācija'
    ],
    processingTime: 'Tūlītēja reģistrācija',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  },
  {
    id: 'resident-involvement',
    title: 'Iedzīvotāju iesaiste',
    titleEn: 'Resident Involvement',
    category: 'participation',
    icon: '🗳️',
    description: 'Viedokļa izteikšana un balsošana par pilsētas jautājumiem.',
    descriptionEn: 'Opinion expression and voting on city matters.',
    externalLink: 'https://epakalpojumi.liepaja.lv/',
    steps: [
      {
        step: 1,
        title: 'Ielogojieties portālā',
        titleEn: 'Log in to portal',
        details: [
          'Atveriet e-pakalpojumu portālu',
          'Ielogojieties ar savu kontu'
        ]
      },
      {
        step: 2,
        title: 'Skatiet aktuālos jautājumus',
        titleEn: 'View current issues',
        details: [
          'Skatiet "Iedzīvotāju iesaiste" sadaļu',
          'Iepazīstieties ar aktuālajiem jautājumiem',
          'Izlasiet informāciju un dokumentus'
        ]
      },
      {
        step: 3,
        title: 'Izteiciet savu viedokli',
        titleEn: 'Express your opinion',
        details: [
          'Izvēlieties jautājumu',
          'Iesniedziet savu viedokli vai ierosinājumu',
          'Varat pievienot dokumentus vai bildes'
        ]
      },
      {
        step: 4,
        title: 'Piedalieties balsošanā',
        titleEn: 'Participate in voting',
        details: [
          'Ja ir pieejama balsošana, piedalieties',
          'Izvēlieties savu variantu',
          'Apstipriniet balsojumu'
        ]
      },
      {
        step: 5,
        title: 'Sekojiet līdzi rezultātiem',
        titleEn: 'Follow results',
        details: [
          'Skatiet balsošanas rezultātus',
          'Sekojiet līdzi pieņemtajiem lēmumiem',
          'Informējieties par turpmākajām darbībām'
        ]
      }
    ],
    requirements: [
      'Reģistrācija portālā',
      'Personas apliecinošs dokuments'
    ],
    processingTime: 'Tūlītēja iespēja',
    contactInfo: {
      phone: '63 404 750',
      email: 'pasts@liepaja.lv',
      address: 'Rožu iela 6, Liepāja, LV-3401'
    }
  }
];

// Helper function to get service by ID
export const getServiceById = (id) => {
  return allServices.find(service => service.id === id);
};

// Helper function to get services by category
export const getServicesByCategory = (category) => {
  return allServices.filter(service => service.category === category);
};

// Get all categories
export const getAllCategories = () => {
  const categories = [...new Set(allServices.map(service => service.category))];
  return categories;
};




