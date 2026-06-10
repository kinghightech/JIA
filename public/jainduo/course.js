export const course = [
  {
    id: "foundations",
    title: "Foundations",
    color: "green",
    lessons: [
      {
        id: "jainism-at-glance",
        title: "Jainism at a glance",
        summary: "Meet the course goal: liberation, careful living, and the word Jina.",
        level: "Easy",
        concept: "Jina",
        objectives: ["Define Jainism as an Indian tradition.", "Connect Jina, karma, and liberation.", "Avoid flattening Jain diversity."],
        teaching: [
          {
            title: "What you are learning",
            body: "Jainism is an Indian religious and philosophical tradition centered on ethical discipline, knowledge, karma, and liberation of the soul.",
            term: "Jainism",
            example: "A respectful learner studies Jain ideas without needing to adopt Jain beliefs."
          },
          {
            title: "The word Jina",
            body: "Jain comes from Jina, meaning conqueror. A Jina conquers inner passions such as attachment, aversion, and ignorance.",
            term: "Jina",
            example: "The victory is inward: discipline and insight replace anger, pride, deceit, and greed."
          },
          {
            title: "The goal",
            body: "Many Jain teachings point toward moksha: freedom of the soul from karma and rebirth. Practices vary by sect, region, family, and level of observance.",
            term: "Moksha",
            example: "Vegetarianism matters, but Jainism is not only a food rule."
          }
        ],
        misconceptions: ["Jainism is not simply a branch of Hinduism or Buddhism.", "All Jains do not practice in exactly the same way."],
        exercises: [
          {
            type: "choice",
            prompt: "What does Jina mean in Jain tradition?",
            hint: "The word points to inner victory.",
            options: ["A conqueror of inner passions", "A temple musician", "A seasonal festival", "A type of scripture"],
            answer: "A conqueror of inner passions",
            explain: "Jina means conqueror, especially one who has conquered passions and teaches a path to liberation."
          },
          {
            type: "choice",
            prompt: "What is moksha?",
            hint: "Think of the final goal.",
            options: ["Liberation from karma and rebirth", "A daily meal rule", "A pilgrimage map", "A debate method"],
            answer: "Liberation from karma and rebirth",
            explain: "Moksha is liberation of the soul from karmic bondage and the cycle of rebirth."
          },
          {
            type: "fill",
            prompt: "Fill in the missing word: Mahavira is traditionally recognized as the 24th ____ of this time cycle.",
            answer: "tirthankara",
            explain: "A Tirthankara is a ford-maker, a teacher who shows a path across the stream of rebirth."
          }
        ]
      },
      {
        id: "ahimsa-basics",
        title: "Ahimsa basics",
        summary: "Practice the central ethic of nonviolence in thought, speech, and action.",
        level: "Easy",
        concept: "Ahimsa",
        objectives: ["Define ahimsa.", "Apply ahimsa beyond physical action.", "Distinguish ideals from daily lay practice."],
        teaching: [
          {
            title: "Ahimsa is central",
            body: "Ahimsa means nonviolence or non-harm. In Jain ethics it applies to thought, speech, and action.",
            term: "Ahimsa",
            example: "Careful speech during an argument can be an act of ahimsa."
          },
          {
            title: "More than diet",
            body: "Many lay Jains express ahimsa through vegetarian food ethics, careful work choices, charity, and attention to small living beings.",
            term: "Lay practice",
            example: "A person may choose work that reduces harm rather than work built on exploitation."
          },
          {
            title: "Ideal and practice",
            body: "Monastics practice ahimsa with especially strict discipline. Laypeople usually adapt the principle to household life.",
            term: "Monastic",
            example: "The ideal is rigorous, but the course asks how harm can be reduced in real situations."
          }
        ],
        misconceptions: ["Ahimsa does not mean doing nothing.", "Jain ethics are not only dietary rules.", "Not every Jain practices veganism."],
        exercises: [
          {
            type: "choice",
            prompt: "Which action best matches ahimsa?",
            hint: "Ahimsa is broader than physical harm.",
            options: ["Choosing careful speech during an argument", "Winning at any cost", "Keeping every possession forever", "Ignoring another viewpoint"],
            answer: "Choosing careful speech during an argument",
            explain: "Ahimsa is nonviolence in thought, speech, and action."
          },
          {
            type: "trueFalse",
            prompt: "Ahimsa only applies to physical actions.",
            answer: false,
            explain: "In Jain ethics, ahimsa also guides speech, intention, diet, livelihood, and attention."
          },
          {
            type: "select",
            prompt: "Select the choices that can express ahimsa.",
            options: ["Vegetarian food ethics", "Avoiding harsh speech", "Enjoying cruelty", "Mindful work choices"],
            answer: ["Vegetarian food ethics", "Avoiding harsh speech", "Mindful work choices"],
            explain: "Ahimsa can shape food, speech, livelihood, technology, and daily habits."
          }
        ]
      }
    ]
  },
  {
    id: "core-ideas",
    title: "Core ideas",
    color: "gold",
    lessons: [
      {
        id: "many-sidedness",
        title: "Many-sidedness",
        summary: "Learn anekantavada and why partial viewpoints matter.",
        level: "Medium",
        concept: "Anekantavada",
        objectives: ["Define anekantavada.", "Use standpoint language carefully.", "Avoid confusing humility with relativism."],
        teaching: [
          {
            title: "Many-sided reality",
            body: "Anekantavada teaches that reality is complex and can be described from multiple valid standpoints.",
            term: "Anekantavada",
            example: "One person may describe a cup by its shape; another by its material. Both can be partial truths."
          },
          {
            title: "Partial does not mean pointless",
            body: "Many-sidedness does not mean every claim is equally true. It asks learners to notice context, limits, and perspective.",
            term: "Standpoint",
            example: "A careful answer may say, 'from this standpoint, this is true in this respect.'"
          },
          {
            title: "Syadvada",
            body: "Syadvada is a disciplined way of qualifying statements, often explained as speaking from a certain standpoint.",
            term: "Syadvada",
            example: "It is not just politeness; it is a method for avoiding one-sided claims."
          }
        ],
        misconceptions: ["Anekantavada does not mean anything goes.", "Syadvada does not deny objective reality."],
        exercises: [
          {
            type: "choice",
            prompt: "Anekantavada teaches that:",
            hint: "It is about reality and viewpoints.",
            options: ["Reality can be understood from multiple standpoints", "Only one sentence can ever be true", "Karma is a festival", "All vows are identical"],
            answer: "Reality can be understood from multiple standpoints",
            explain: "Anekantavada is often explained as many-sidedness: claims can be partial and standpoint-bound."
          },
          {
            type: "match",
            prompt: "Match each term to the best meaning.",
            pairs: [
              ["Ahimsa", "Nonviolence"],
              ["Aparigraha", "Non-attachment"],
              ["Anekantavada", "Many-sidedness"]
            ],
            explain: "These three ideas often work together in Jain ethics and philosophy."
          },
          {
            type: "choice",
            prompt: "A learner says, 'From this standpoint, the answer is partly true.' Which idea fits best?",
            options: ["Syadvada", "Asteya", "Darshan", "Paryushan"],
            answer: "Syadvada",
            explain: "Syadvada is qualified predication, often expressed as 'from a certain standpoint.'"
          }
        ]
      },
      {
        id: "three-jewels",
        title: "The three jewels",
        summary: "Connect right faith, right knowledge, and right conduct.",
        level: "Medium",
        concept: "Ratnatraya",
        objectives: ["Name the three jewels.", "Explain how faith, knowledge, and conduct work together.", "Connect learning to practice."],
        teaching: [
          {
            title: "Three connected guides",
            body: "The three jewels are right faith, right knowledge, and right conduct. They work together on the path toward liberation.",
            term: "Ratnatraya",
            example: "Knowing a principle matters, but Jain learning also asks how it shapes conduct."
          },
          {
            title: "What right means",
            body: "Right does not simply mean socially approved. It means aligned with reality, liberation, and careful conduct.",
            term: "Right conduct",
            example: "A learner recognizes ahimsa, understands it, and then practices careful speech."
          }
        ],
        misconceptions: ["Faith is not just blind belief.", "Knowledge alone is not the full path.", "Ethics are not separate from philosophy."],
        exercises: [
          {
            type: "select",
            prompt: "Select the three jewels.",
            options: ["Right faith", "Right knowledge", "Right conduct", "Right wealth"],
            answer: ["Right faith", "Right knowledge", "Right conduct"],
            explain: "The three jewels are right faith, right knowledge, and right conduct."
          },
          {
            type: "order",
            prompt: "Order this simple learning loop.",
            items: ["Recognize a principle", "Understand it", "Apply it carefully"],
            answer: ["Recognize a principle", "Understand it", "Apply it carefully"],
            explain: "This course moves from recognition to understanding and then application."
          },
          {
            type: "fill",
            prompt: "Fill in the missing word: Right faith, right knowledge, and right conduct are called the three ____.",
            answer: "jewels",
            explain: "The three jewels guide the path toward liberation."
          }
        ]
      }
    ]
  },
  {
    id: "practice",
    title: "Daily practice",
    color: "blue",
    lessons: [
      {
        id: "five-vows",
        title: "The five vows",
        summary: "Compare monastic vows and lay practice.",
        level: "Medium",
        concept: "Vows",
        objectives: ["Name key vows.", "Compare monastic and lay vows.", "Connect vows to harm reduction and attachment."],
        teaching: [
          {
            title: "Five vows",
            body: "The five major vows are nonviolence, truthfulness, non-stealing, celibacy or chastity, and non-possession.",
            term: "Vrata",
            example: "Aparigraha asks how attachment to possessions can be reduced."
          },
          {
            title: "Great and limited vows",
            body: "Monastics take mahavratas, or great vows. Laypeople take anuvratas, limited vows adapted to household life.",
            term: "Mahavrata / anuvrata",
            example: "A layperson may limit possessions; a monk or nun follows a stricter renunciant discipline."
          }
        ],
        misconceptions: ["The vows are not identical for monastics and laypeople.", "Non-possession does not mean every Jain owns nothing."],
        exercises: [
          {
            type: "match",
            prompt: "Match each vow to the closest meaning.",
            pairs: [
              ["Satya", "Truthfulness"],
              ["Asteya", "Non-stealing"],
              ["Aparigraha", "Non-possessiveness"]
            ],
            explain: "The five vows include ahimsa, satya, asteya, brahmacharya, and aparigraha."
          },
          {
            type: "choice",
            prompt: "How are lay vows usually different from monastic great vows?",
            options: ["They are adapted for household life", "They reject ahimsa", "They only apply to temples", "They remove ethical discipline"],
            answer: "They are adapted for household life",
            explain: "Lay vows are smaller vows adapted for household responsibilities."
          },
          {
            type: "trueFalse",
            prompt: "Monks and nuns depend on lay communities for support in many Jain traditions.",
            answer: true,
            explain: "Monastic and lay communities are linked through study, support, discipline, and religious life."
          }
        ]
      },
      {
        id: "karma-liberation",
        title: "Karma and liberation",
        summary: "Study karma as subtle matter and the path of release.",
        level: "Hard",
        concept: "Karma",
        objectives: ["Explain Jain karma as subtle matter.", "Identify passions that bind karma.", "Define samvara, nirjara, and moksha."],
        teaching: [
          {
            title: "Karma is not just fate",
            body: "In Jain thought, karma is often described as subtle matter that attaches to the soul through actions, intentions, and passions.",
            term: "Karma",
            example: "Anger, pride, deceit, and greed intensify karmic bondage."
          },
          {
            title: "Stopping and shedding",
            body: "Samvara means stopping new karmic influx. Nirjara means shedding existing karma. Moksha is liberation from karmic bondage.",
            term: "Samvara / nirjara",
            example: "Careful conduct stops new influx; discipline and purification shed old bondage."
          }
        ],
        misconceptions: ["Karma is not divine punishment.", "Good karma alone is not the same as liberation."],
        exercises: [
          {
            type: "choice",
            prompt: "In Jain thought, karma is often described as:",
            options: ["Subtle matter that binds to the soul", "Only a metaphor for mood", "A temple tax", "A type of music"],
            answer: "Subtle matter that binds to the soul",
            explain: "Jain karma is commonly described as subtle matter connected with the soul through passions and actions."
          },
          {
            type: "match",
            prompt: "Match each term to its role.",
            pairs: [
              ["Samvara", "Stopping karmic influx"],
              ["Nirjara", "Shedding karma"],
              ["Moksha", "Liberation"]
            ],
            explain: "Samvara and nirjara describe stopping and shedding karma on the path to liberation."
          },
          {
            type: "select",
            prompt: "Which passions are commonly named as causes of bondage?",
            options: ["Anger", "Pride", "Deceit", "Greed", "Listening carefully"],
            answer: ["Anger", "Pride", "Deceit", "Greed"],
            explain: "Anger, pride, deceit, and greed are central passions discussed in relation to bondage."
          }
        ]
      }
    ]
  },
  {
    id: "advanced",
    title: "Advanced synthesis",
    color: "purple",
    lessons: [
      {
        id: "traditions-texts",
        title: "Traditions and texts",
        summary: "Handle sectarian nuance and the history of Jain communities.",
        level: "Hard",
        concept: "Traditions",
        objectives: ["Identify major Jain traditions.", "Explain why texts and practices differ.", "Avoid ranking traditions simplistically."],
        teaching: [
          {
            title: "Major traditions",
            body: "Digambara and Shvetambara are two major Jain traditions. Shvetambara subgroups include Murtipujaka, Sthanakvasi, and Terapanthi communities.",
            term: "Digambara / Shvetambara",
            example: "Differences can involve monastic clothing, image worship, texts, and views of liberation."
          },
          {
            title: "Scriptures and language",
            body: "Shvetambara traditions preserve Agamas as canonical texts. Digambara traditions often hold that the original canon was lost and rely on later authoritative works.",
            term: "Agama",
            example: "Different canons do not mean one group is careless; they reflect historical development."
          }
        ],
        misconceptions: ["There is no single Jain Bible.", "Sectarian difference does not automatically mean hostility."],
        exercises: [
          {
            type: "choice",
            prompt: "Which pair names two major Jain traditions?",
            options: ["Digambara and Shvetambara", "Theravada and Mahayana", "Stoic and Epicurean", "Sunni and Shia"],
            answer: "Digambara and Shvetambara",
            explain: "Digambara and Shvetambara are two major Jain traditions, with differences in monastic practice, texts, and doctrine."
          },
          {
            type: "trueFalse",
            prompt: "All Jain communities have exactly the same scripture lists and practices.",
            answer: false,
            explain: "Jain communities share many ideas but differ in canons, practices, languages, and regional histories."
          },
          {
            type: "choice",
            prompt: "Why should a course avoid saying 'Jains believe only X' for every topic?",
            options: ["Jain traditions include historical and sectarian nuance", "The topic is not worth teaching", "All religions avoid texts", "History has no evidence"],
            answer: "Jain traditions include historical and sectarian nuance",
            explain: "Careful wording respects differences among traditions while still teaching shared concepts."
          }
        ]
      },
      {
        id: "cosmology-philosophy",
        title: "Cosmology and philosophy",
        summary: "Connect jiva, ajiva, cosmology, and perfect knowledge.",
        level: "Expert",
        concept: "Philosophy",
        objectives: ["Define jiva and ajiva.", "Explain kevala jnana.", "Describe Jain cosmology with nuance."],
        teaching: [
          {
            title: "Living and non-living",
            body: "Jiva means soul or living substance. Ajiva means non-soul categories such as matter, space, motion, rest, and time.",
            term: "Jiva / ajiva",
            example: "The breadth of living beings supports carefulness toward humans, animals, plants, and microscopic life."
          },
          {
            title: "A beginningless cosmos",
            body: "Jain cosmology usually describes a beginningless universe with realms of heavens, hells, humans, animals, and liberated souls at the top.",
            term: "Cosmology",
            example: "This is not a creator-god model of the universe."
          },
          {
            title: "Perfect knowledge",
            body: "Kevala jnana is perfect knowledge, associated with liberated or nearly liberated beings. Ordinary knowledge is partial because of karmic limits.",
            term: "Kevala jnana",
            example: "This connects many-sidedness, karma, and liberation."
          }
        ],
        misconceptions: ["Jiva is not identical to modern biology.", "Omniscience does not mean ordinary intelligence."],
        exercises: [
          {
            type: "match",
            prompt: "Match each advanced term.",
            pairs: [
              ["Jiva", "Living soul"],
              ["Ajiva", "Non-soul category"],
              ["Kevala jnana", "Perfect knowledge"]
            ],
            explain: "Advanced Jain philosophy distinguishes living soul from non-soul categories."
          },
          {
            type: "choice",
            prompt: "In Jain cosmology, the universe is usually described as:",
            options: ["Beginningless and structured into realms", "Created yesterday", "Only a flat country", "A single heaven"],
            answer: "Beginningless and structured into realms",
            explain: "Jain cosmology describes a beginningless universe with many realms and liberated souls at the top."
          },
          {
            type: "reflection",
            prompt: "Short reflection: How can many-sidedness change the way someone handles disagreement?",
            explain: "A strong answer connects humility, standpoint, and careful speech."
          }
        ]
      }
    ]
  },
  {
    id: "ethics-action",
    title: "Ethics in action",
    color: "teal",
    lessons: [
      {
        id: "truthful-speech",
        title: "Truthful speech",
        summary: "Practice satya with honesty, restraint, and care for context.",
        level: "Easy",
        concept: "Satya",
        objectives: ["Define satya as truthfulness.", "Connect truth with non-harm.", "Avoid using truth as a weapon."],
        teaching: [
          {
            title: "Truth is disciplined",
            body: "Satya means truthfulness. In Jain ethics, truthful speech should also be careful, useful, and guided by ahimsa.",
            term: "Satya",
            example: "A correction can be honest without humiliating the person being corrected."
          },
          {
            title: "Truth and harm",
            body: "Truthfulness does not excuse cruelty. A Jain framing asks whether the words reduce confusion without creating needless harm.",
            term: "Careful speech",
            example: "A private, calm conversation may be better than a public accusation."
          }
        ],
        misconceptions: ["Satya is not permission to be harsh.", "Silence can sometimes protect truth better than gossip."],
        exercises: [
          {
            type: "choice",
            prompt: "Which sentence best reflects satya with ahimsa?",
            options: ["I want to be honest, so let us talk privately.", "I can say anything if it is true.", "Truth does not need care.", "Gossip helps everyone learn."],
            answer: "I want to be honest, so let us talk privately.",
            explain: "Satya is truthfulness guided by careful intention and non-harm."
          },
          {
            type: "trueFalse",
            prompt: "In Jain ethics, truthfulness should be separated from non-harm.",
            answer: false,
            explain: "Satya works with ahimsa, so truthful speech should still reduce avoidable harm."
          },
          {
            type: "select",
            prompt: "Select habits that support satya.",
            options: ["Checking facts", "Avoiding gossip", "Exaggerating to win", "Speaking with care"],
            answer: ["Checking facts", "Avoiding gossip", "Speaking with care"],
            explain: "Truthfulness includes accuracy, restraint, and care for impact."
          }
        ]
      },
      {
        id: "non-stealing",
        title: "Non-stealing",
        summary: "Explore asteya in money, attention, credit, and everyday trust.",
        level: "Easy",
        concept: "Asteya",
        objectives: ["Define asteya.", "Apply non-stealing beyond objects.", "Recognize trust as part of ethical life."],
        teaching: [
          {
            title: "More than theft",
            body: "Asteya means non-stealing. It includes not taking objects, credit, time, or opportunities that are not rightly yours.",
            term: "Asteya",
            example: "Giving credit for a group project supports asteya."
          },
          {
            title: "Trust matters",
            body: "Non-stealing protects relationships because it guards the trust that lets people learn and work together.",
            term: "Trust",
            example: "Returning borrowed notes on time is a small practice of asteya."
          }
        ],
        misconceptions: ["Asteya is not only about money.", "Taking credit for another person's work can violate non-stealing."],
        exercises: [
          {
            type: "choice",
            prompt: "Which action best expresses asteya?",
            options: ["Citing the person whose idea you used", "Copying without credit", "Keeping a borrowed item forever", "Taking extra supplies because no one noticed"],
            answer: "Citing the person whose idea you used",
            explain: "Asteya includes honesty about credit, ownership, and responsibility."
          },
          {
            type: "fill",
            prompt: "Fill in the missing word: Non-stealing is called ____.",
            answer: "asteya",
            explain: "Asteya is the Jain vow or discipline of non-stealing."
          },
          {
            type: "trueFalse",
            prompt: "Asteya can apply to taking credit for someone else's work.",
            answer: true,
            explain: "Non-stealing can include ideas, labor, time, and recognition."
          }
        ]
      },
      {
        id: "non-possession",
        title: "Non-possession",
        summary: "Use aparigraha to loosen grasping and choose enough.",
        level: "Medium",
        concept: "Aparigraha",
        objectives: ["Define aparigraha.", "Distinguish use from attachment.", "Practice enoughness in daily choices."],
        teaching: [
          {
            title: "Holding lightly",
            body: "Aparigraha means non-possessiveness or non-attachment. It asks how craving, hoarding, and identity around possessions can be reduced.",
            term: "Aparigraha",
            example: "Keeping what is useful while donating unused items can express non-attachment."
          },
          {
            title: "Enough is active",
            body: "Non-possession is not only owning fewer things. It is training the mind to stop measuring worth through accumulation.",
            term: "Enoughness",
            example: "A learner pauses before buying and asks whether the desire is need, pressure, or habit."
          }
        ],
        misconceptions: ["Aparigraha is not the same as neglecting responsibilities.", "Laypeople usually adapt non-possession to household life."],
        exercises: [
          {
            type: "choice",
            prompt: "Which choice best fits aparigraha?",
            options: ["Repairing a useful item before replacing it", "Buying because everyone else did", "Hoarding supplies", "Judging people by possessions"],
            answer: "Repairing a useful item before replacing it",
            explain: "Aparigraha reduces grasping and excess."
          },
          {
            type: "match",
            prompt: "Match each vow to its focus.",
            pairs: [
              ["Satya", "Truthfulness"],
              ["Asteya", "Non-stealing"],
              ["Aparigraha", "Non-possessiveness"]
            ],
            explain: "The vows guide speech, ownership, attachment, and conduct."
          },
          {
            type: "reflection",
            prompt: "Short reflection: What is one possession or habit you could hold more lightly?",
            explain: "A strong reflection names a real attachment and one gentle next step."
          }
        ]
      },
      {
        id: "careful-livelihood",
        title: "Careful livelihood",
        summary: "Connect Jain ethics to work, trade, and the harm a job can create.",
        level: "Medium",
        concept: "Livelihood",
        objectives: ["Explain why livelihood matters.", "Identify work choices that reduce harm.", "Connect lay ethics to real responsibilities."],
        teaching: [
          {
            title: "Work has consequences",
            body: "Jain ethics asks how earning a living affects other beings. Laypeople often consider whether a trade creates avoidable violence or exploitation.",
            term: "Livelihood",
            example: "A business can choose fair dealing, less waste, and honest promises."
          },
          {
            title: "Household practice",
            body: "Lay ethics does not demand the same discipline as monastic life, but it still asks for restraint, accountability, and reduced harm.",
            term: "Lay ethics",
            example: "A household can set limits on consumption while supporting study and charity."
          }
        ],
        misconceptions: ["Jain ethics is not limited to private meditation.", "Work choices can be part of religious practice."],
        exercises: [
          {
            type: "choice",
            prompt: "Which work practice best supports careful livelihood?",
            options: ["Making honest claims to customers", "Hiding harm for profit", "Selling more by deceiving people", "Treating workers as disposable"],
            answer: "Making honest claims to customers",
            explain: "Careful livelihood joins truthfulness, non-harm, and responsibility."
          },
          {
            type: "select",
            prompt: "Select actions that can reduce harm at work.",
            options: ["Fair contracts", "Less waste", "False advertising", "Respectful treatment"],
            answer: ["Fair contracts", "Less waste", "Respectful treatment"],
            explain: "Livelihood can express vows through truthful, careful, and less harmful choices."
          },
          {
            type: "trueFalse",
            prompt: "Lay Jain practice can include ethical choices about business and work.",
            answer: true,
            explain: "Household life still includes vows, restraint, generosity, and accountability."
          }
        ]
      }
    ]
  },
  {
    id: "ritual-reflection",
    title: "Ritual and reflection",
    color: "sage",
    lessons: [
      {
        id: "samayika-pause",
        title: "Samayika pause",
        summary: "Learn samayika as a period of equanimity, study, and stillness.",
        level: "Medium",
        concept: "Samayika",
        objectives: ["Define samayika.", "Connect equanimity to practice.", "Distinguish ritual form from inner aim."],
        teaching: [
          {
            title: "A bounded pause",
            body: "Samayika is a practice period often associated with equanimity, reflection, and temporary withdrawal from ordinary busyness.",
            term: "Samayika",
            example: "A learner might sit, study, recite, or reflect with a calmer mind."
          },
          {
            title: "Equanimity is the aim",
            body: "The outer form matters, but the deeper training is steadiness toward praise, blame, pleasure, and irritation.",
            term: "Equanimity",
            example: "A quiet pause before replying can become a small version of this training."
          }
        ],
        misconceptions: ["Samayika is not only sitting still.", "Ritual practice can train everyday conduct."],
        exercises: [
          {
            type: "choice",
            prompt: "Samayika is best described as:",
            options: ["A practice period for equanimity", "A rule against learning", "A market festival", "A type of karma matter"],
            answer: "A practice period for equanimity",
            explain: "Samayika is associated with equanimity, stillness, study, and reflection."
          },
          {
            type: "fill",
            prompt: "Fill in the missing word: The inner aim of samayika is often ____.",
            answer: "equanimity",
            explain: "Equanimity means steadiness of mind across changing conditions."
          },
          {
            type: "reflection",
            prompt: "Short reflection: When would a pause before reacting help you practice equanimity?",
            explain: "A strong answer names a real situation and how a pause changes conduct."
          }
        ]
      },
      {
        id: "pratikraman-review",
        title: "Pratikraman review",
        summary: "Understand reflection, repentance, and returning from harmful action.",
        level: "Medium",
        concept: "Pratikraman",
        objectives: ["Define pratikraman.", "Connect reflection to repair.", "Explain why review can be ethical practice."],
        teaching: [
          {
            title: "Looking back",
            body: "Pratikraman is a practice of reflection, repentance, and turning back from harmful conduct.",
            term: "Pratikraman",
            example: "Reviewing harsh words at the end of the day can prepare a better apology."
          },
          {
            title: "Repairing direction",
            body: "The point is not guilt for its own sake. The point is awareness, restraint, and a renewed direction toward careful living.",
            term: "Repentance",
            example: "A learner notices harm, names it honestly, and chooses a repair."
          }
        ],
        misconceptions: ["Pratikraman is not just feeling bad.", "Reflection should lead toward changed conduct."],
        exercises: [
          {
            type: "choice",
            prompt: "What is the purpose of pratikraman?",
            options: ["Reflecting on harm and turning back from it", "Collecting possessions", "Winning an argument", "Ignoring past actions"],
            answer: "Reflecting on harm and turning back from it",
            explain: "Pratikraman reviews conduct so the learner can repair and restrain harmful habits."
          },
          {
            type: "order",
            prompt: "Order this repair loop.",
            items: ["Notice harm", "Acknowledge it", "Choose repair"],
            answer: ["Notice harm", "Acknowledge it", "Choose repair"],
            explain: "Review becomes practice when it leads to honest repair."
          },
          {
            type: "trueFalse",
            prompt: "Pratikraman can connect memory with ethical change.",
            answer: true,
            explain: "Looking back can prepare restraint, apology, and better conduct."
          }
        ]
      },
      {
        id: "paryushan-forgiveness",
        title: "Paryushan and forgiveness",
        summary: "Explore a major Jain festival season of reflection and forgiveness.",
        level: "Medium",
        concept: "Paryushan",
        objectives: ["Describe Paryushan as a major observance.", "Connect forgiveness to self-review.", "Recognize variation among communities."],
        teaching: [
          {
            title: "A season of reflection",
            body: "Paryushan is a major Jain observance associated with fasting, study, repentance, and renewal in many communities.",
            term: "Paryushan",
            example: "Families may attend talks, fast in different ways, and focus on self-discipline."
          },
          {
            title: "Forgiveness matters",
            body: "The phrase Michhami Dukkadam is often used to ask forgiveness for harm caused knowingly or unknowingly.",
            term: "Michhami Dukkadam",
            example: "Asking forgiveness is strongest when paired with sincere effort to change."
          }
        ],
        misconceptions: ["Not every community observes in exactly the same way.", "Forgiveness does not erase responsibility."],
        exercises: [
          {
            type: "choice",
            prompt: "Paryushan is commonly associated with:",
            options: ["Reflection, study, fasting, and forgiveness", "Only shopping", "Rejecting all study", "A creator-god ritual"],
            answer: "Reflection, study, fasting, and forgiveness",
            explain: "Paryushan is a major Jain observance centered on renewal and self-discipline."
          },
          {
            type: "fill",
            prompt: "Fill in the phrase: ____ Dukkadam is used when asking forgiveness.",
            answer: "michhami",
            explain: "Michhami Dukkadam is a well-known forgiveness phrase in Jain practice."
          },
          {
            type: "select",
            prompt: "Select practices often connected with Paryushan.",
            options: ["Study", "Fasting", "Forgiveness", "Careless speech"],
            answer: ["Study", "Fasting", "Forgiveness"],
            explain: "Paryushan often emphasizes study, restraint, repentance, and forgiveness."
          }
        ]
      },
      {
        id: "temple-image-practice",
        title: "Temple and image practice",
        summary: "Learn how images, temples, and non-image traditions can differ.",
        level: "Medium",
        concept: "Puja",
        objectives: ["Describe temple practice with nuance.", "Recognize non-image traditions.", "Avoid assuming all Jains worship the same way."],
        teaching: [
          {
            title: "Images as reminders",
            body: "In image-using traditions, Tirthankara images can focus reverence on liberation, discipline, and the qualities of a perfected being.",
            term: "Jina image",
            example: "A still image can remind the viewer of stillness, non-attachment, and victory over passions."
          },
          {
            title: "Different practice styles",
            body: "Some Jain communities emphasize image worship, while Sthanakvasi and Terapanthi Shvetambaras are well known for non-image practice.",
            term: "Non-image practice",
            example: "Careful teaching names variation rather than treating one form as universal."
          }
        ],
        misconceptions: ["All Jains do not use images in the same way.", "An image is not a creator god in Jain teaching."],
        exercises: [
          {
            type: "choice",
            prompt: "Why should a lesson speak carefully about temple images?",
            options: ["Jain traditions differ in image practice", "No Jains have temples", "Images replace all ethics", "History is irrelevant"],
            answer: "Jain traditions differ in image practice",
            explain: "Some Jain communities use images, while others emphasize non-image forms of devotion and study."
          },
          {
            type: "trueFalse",
            prompt: "A Tirthankara image can serve as a reminder of liberation and discipline.",
            answer: true,
            explain: "In image-using traditions, images can focus reverence on the qualities of liberated teachers."
          },
          {
            type: "match",
            prompt: "Match the term to the meaning.",
            pairs: [
              ["Tirthankara", "Liberated teacher"],
              ["Puja", "Devotional practice"],
              ["Sthanakvasi", "Non-image Shvetambara tradition"]
            ],
            explain: "Temple and devotion lessons need both shared terms and sectarian nuance."
          }
        ]
      }
    ]
  },
  {
    id: "philosophy-deepening",
    title: "Philosophy deepening",
    color: "purple",
    lessons: [
      {
        id: "seven-tattvas",
        title: "Seven tattvas",
        summary: "Map the core categories that explain bondage and liberation.",
        level: "Hard",
        concept: "Tattva",
        objectives: ["Name the seven tattvas.", "Connect influx, bondage, stoppage, shedding, and liberation.", "Use categories as a path map."],
        teaching: [
          {
            title: "A path map",
            body: "Many Jain explanations use seven tattvas: jiva, ajiva, asrava, bandha, samvara, nirjara, and moksha.",
            term: "Tattva",
            example: "The categories move from soul and non-soul to bondage and release."
          },
          {
            title: "Bondage to release",
            body: "Asrava is karmic influx, bandha is bondage, samvara stops new influx, nirjara sheds karma, and moksha is liberation.",
            term: "Asrava / bandha",
            example: "The learner can read the sequence as a diagnosis and a treatment."
          }
        ],
        misconceptions: ["Tattvas are not random vocabulary.", "Moksha is the goal, not another type of bondage."],
        exercises: [
          {
            type: "order",
            prompt: "Order this path sequence.",
            items: ["Asrava", "Bandha", "Samvara", "Nirjara", "Moksha"],
            answer: ["Asrava", "Bandha", "Samvara", "Nirjara", "Moksha"],
            explain: "The sequence moves from influx and bondage toward stopping, shedding, and liberation."
          },
          {
            type: "match",
            prompt: "Match each tattva to its role.",
            pairs: [
              ["Asrava", "Karmic influx"],
              ["Bandha", "Bondage"],
              ["Nirjara", "Shedding karma"]
            ],
            explain: "The tattvas help explain how karmic bondage begins and ends."
          },
          {
            type: "fill",
            prompt: "Fill in the missing word: Stopping new karmic influx is ____.",
            answer: "samvara",
            explain: "Samvara means stopping or blocking new karmic influx."
          }
        ]
      },
      {
        id: "six-substances",
        title: "Six substances",
        summary: "Learn dravya categories and why dharma here does not mean ethics.",
        level: "Hard",
        concept: "Dravya",
        objectives: ["Name key substances.", "Distinguish jiva from ajiva.", "Explain dharma and adharma as motion and rest principles."],
        teaching: [
          {
            title: "Substance categories",
            body: "Jain philosophy often describes six dravyas or substances: jiva, pudgala, dharma, adharma, akasha, and kala.",
            term: "Dravya",
            example: "This is a metaphysical map, not a list of moral commandments."
          },
          {
            title: "Motion and rest",
            body: "In this technical context, dharma is a principle that enables motion and adharma enables rest. These do not mean virtue and sin here.",
            term: "Dharma / adharma",
            example: "A word can have a technical meaning in philosophy that differs from everyday use."
          }
        ],
        misconceptions: ["Dharma in the dravya list does not simply mean ethics.", "Ajiva includes more than ordinary objects."],
        exercises: [
          {
            type: "choice",
            prompt: "In the six dravyas, dharma refers to:",
            options: ["A principle enabling motion", "A temple snack", "Only moral virtue", "A festival calendar"],
            answer: "A principle enabling motion",
            explain: "In this technical list, dharma enables motion and adharma enables rest."
          },
          {
            type: "select",
            prompt: "Select items from the six dravyas.",
            options: ["Jiva", "Pudgala", "Akasha", "Jealousy"],
            answer: ["Jiva", "Pudgala", "Akasha"],
            explain: "The six dravyas include jiva, pudgala, dharma, adharma, akasha, and kala."
          },
          {
            type: "match",
            prompt: "Match each term.",
            pairs: [
              ["Jiva", "Living soul"],
              ["Pudgala", "Matter"],
              ["Akasha", "Space"]
            ],
            explain: "Dravya categories distinguish soul, matter, space, motion, rest, and time."
          }
        ]
      },
      {
        id: "knowledge-perception",
        title: "Knowledge and perception",
        summary: "Compare ordinary knowledge, scriptural knowledge, and perfect knowledge.",
        level: "Hard",
        concept: "Jnana",
        objectives: ["Define jnana as knowledge.", "Compare forms of knowledge.", "Connect karmic limits to partial knowing."],
        teaching: [
          {
            title: "Kinds of knowing",
            body: "Jnana means knowledge. Jain discussions often distinguish sense-based knowledge, scriptural knowledge, and perfect knowledge.",
            term: "Jnana",
            example: "A learner may know through perception, testimony, study, inference, and reflection."
          },
          {
            title: "Perfect knowledge",
            body: "Kevala jnana is perfect knowledge. Ordinary knowing remains limited because karmic obscurations and perspective shape understanding.",
            term: "Kevala jnana",
            example: "Many-sidedness makes sense because ordinary learners see only part of a complex reality."
          }
        ],
        misconceptions: ["Ordinary partial knowledge is not useless.", "Perfect knowledge is not the same as clever guessing."],
        exercises: [
          {
            type: "choice",
            prompt: "What does jnana mean?",
            options: ["Knowledge", "Non-stealing", "Fasting day", "Possession"],
            answer: "Knowledge",
            explain: "Jnana means knowledge."
          },
          {
            type: "match",
            prompt: "Match each term to its meaning.",
            pairs: [
              ["Jnana", "Knowledge"],
              ["Kevala jnana", "Perfect knowledge"],
              ["Anekantavada", "Many-sidedness"]
            ],
            explain: "Knowledge, perfect knowledge, and many-sidedness connect in Jain philosophy."
          },
          {
            type: "trueFalse",
            prompt: "Many-sidedness can help explain why ordinary knowledge is partial.",
            answer: true,
            explain: "Ordinary learners know from limited standpoints, so careful qualification matters."
          }
        ]
      },
      {
        id: "spiritual-stages",
        title: "Stages of spiritual growth",
        summary: "Meet gunasthanas as a map of progressive purification.",
        level: "Expert",
        concept: "Gunasthana",
        objectives: ["Define gunasthana.", "Recognize the idea of staged purification.", "Avoid treating the stages as a casual ranking."],
        teaching: [
          {
            title: "A staged map",
            body: "Gunasthanas are fourteen stages of spiritual development described in Jain thought, moving from delusion toward liberation.",
            term: "Gunasthana",
            example: "The stages are a doctrinal map, not a quick personality quiz."
          },
          {
            title: "Purification over status",
            body: "The stages focus on right vision, self-restraint, reduction of passions, and the shedding of karmic obscurations.",
            term: "Purification",
            example: "Progress means less delusion and attachment, not social superiority."
          }
        ],
        misconceptions: ["Gunasthanas are not casual badges.", "A high stage is not achieved by memorizing a list."],
        exercises: [
          {
            type: "choice",
            prompt: "Gunasthanas are:",
            options: ["Fourteen stages of spiritual development", "Five food groups", "Only temple rooms", "A list of sects"],
            answer: "Fourteen stages of spiritual development",
            explain: "Gunasthanas describe stages of spiritual development and purification."
          },
          {
            type: "select",
            prompt: "Select themes connected with spiritual stages.",
            options: ["Right vision", "Self-restraint", "Reducing passions", "Winning status"],
            answer: ["Right vision", "Self-restraint", "Reducing passions"],
            explain: "The stages concern purification, restraint, and the reduction of delusion."
          },
          {
            type: "reflection",
            prompt: "Short reflection: Why should a spiritual stage map be handled with humility?",
            explain: "A strong answer avoids status thinking and focuses on purification."
          }
        ]
      }
    ]
  },
  {
    id: "teachers-stories",
    title: "Teachers and stories",
    color: "gold",
    lessons: [
      {
        id: "mahavira-life",
        title: "Mahavira's life",
        summary: "Study Mahavira as the 24th Tirthankara of this time cycle.",
        level: "Medium",
        concept: "Mahavira",
        objectives: ["Identify Mahavira as the 24th Tirthankara.", "Connect renunciation and teaching.", "Avoid reducing a life story to a date list."],
        teaching: [
          {
            title: "The 24th Tirthankara",
            body: "Mahavira is traditionally recognized as the 24th Tirthankara of the present time cycle in Jain teaching.",
            term: "Mahavira",
            example: "A Tirthankara shows a ford or crossing through the stream of rebirth."
          },
          {
            title: "Renunciation and teaching",
            body: "Mahavira's life is remembered through renunciation, discipline, enlightenment, and teaching a path of liberation.",
            term: "Renunciation",
            example: "The story points learners back to non-attachment, restraint, and liberation."
          }
        ],
        misconceptions: ["Mahavira is not the founder in the simple sense of inventing every Jain idea.", "A Tirthankara is not a creator god."],
        exercises: [
          {
            type: "choice",
            prompt: "Mahavira is traditionally recognized as the:",
            options: ["24th Tirthankara", "First Roman emperor", "Only Jain layperson", "Name of a festival food"],
            answer: "24th Tirthankara",
            explain: "Mahavira is the 24th Tirthankara of this time cycle in Jain tradition."
          },
          {
            type: "fill",
            prompt: "Fill in the missing word: A Tirthankara shows a crossing or ____.",
            answer: "ford",
            explain: "Tirthankara is often explained as a ford-maker, one who shows a crossing."
          },
          {
            type: "trueFalse",
            prompt: "Mahavira's story connects renunciation, discipline, and teaching.",
            answer: true,
            explain: "The life story points to liberation through disciplined practice and insight."
          }
        ]
      },
      {
        id: "parshvanatha-compassion",
        title: "Parshvanatha and compassion",
        summary: "Meet the 23rd Tirthankara and the tradition of compassionate restraint.",
        level: "Medium",
        concept: "Parshvanatha",
        objectives: ["Identify Parshvanatha as the 23rd Tirthankara.", "Connect stories with compassion.", "Handle traditional accounts carefully."],
        teaching: [
          {
            title: "The 23rd Tirthankara",
            body: "Parshvanatha is traditionally remembered as the 23rd Tirthankara, before Mahavira in the sequence of this time cycle.",
            term: "Parshvanatha",
            example: "Many tellings connect him with protection, restraint, and compassion."
          },
          {
            title: "Stories teach values",
            body: "Stories around Tirthankaras often teach ethical attention, compassion, patience, and the danger of passions.",
            term: "Sacred story",
            example: "The learner asks what a story trains them to notice, not only what happened next."
          }
        ],
        misconceptions: ["A sacred story is not only entertainment.", "Traditional stories can carry ethical and doctrinal meaning."],
        exercises: [
          {
            type: "choice",
            prompt: "Parshvanatha is traditionally remembered as the:",
            options: ["23rd Tirthankara", "A type of calendar", "A vow against study", "The name of all karma"],
            answer: "23rd Tirthankara",
            explain: "Parshvanatha is the 23rd Tirthankara in Jain tradition."
          },
          {
            type: "select",
            prompt: "Select values sacred stories may train.",
            options: ["Compassion", "Patience", "Ethical attention", "Careless greed"],
            answer: ["Compassion", "Patience", "Ethical attention"],
            explain: "Stories can carry values and shape ethical imagination."
          },
          {
            type: "trueFalse",
            prompt: "Parshvanatha comes before Mahavira in the Tirthankara sequence.",
            answer: true,
            explain: "Parshvanatha is the 23rd and Mahavira is the 24th Tirthankara."
          }
        ]
      },
      {
        id: "bahubali-stillness",
        title: "Bahubali and stillness",
        summary: "Use the story of Bahubali to explore pride, stillness, and release.",
        level: "Medium",
        concept: "Bahubali",
        objectives: ["Identify Bahubali as an important Jain story figure.", "Connect stillness with inner conquest.", "Explain how pride can obstruct release."],
        teaching: [
          {
            title: "Standing still",
            body: "Bahubali is remembered in Jain tradition as a figure whose story highlights stillness, self-conquest, and the release of pride.",
            term: "Bahubali",
            example: "The famous standing image invites reflection on inner victory rather than outward power."
          },
          {
            title: "Pride as bondage",
            body: "The story turns attention from winning over others to overcoming ego and attachment within oneself.",
            term: "Pride",
            example: "A person can win an argument but still lose to anger or vanity."
          }
        ],
        misconceptions: ["Stillness is not weakness in this story.", "Outer victory is not the same as inner conquest."],
        exercises: [
          {
            type: "choice",
            prompt: "The story of Bahubali is often used to highlight:",
            options: ["Self-conquest and release of pride", "Collecting more possessions", "Rejecting nonviolence", "The origin of all languages"],
            answer: "Self-conquest and release of pride",
            explain: "Bahubali's story points toward stillness, humility, and inner conquest."
          },
          {
            type: "trueFalse",
            prompt: "A Jain story can teach that outer victory is not enough.",
            answer: true,
            explain: "Inner passions such as pride and anger remain central obstacles."
          },
          {
            type: "reflection",
            prompt: "Short reflection: When can winning outwardly still leave pride unresolved?",
            explain: "A strong answer connects achievement with humility."
          }
        ]
      },
      {
        id: "tirthankara-symbols",
        title: "Tirthankara symbols",
        summary: "Learn how symbols help identify Tirthankaras in art and temples.",
        level: "Medium",
        concept: "Symbols",
        objectives: ["Explain why symbols are used.", "Recognize that images can look similar.", "Connect iconography with learning."],
        teaching: [
          {
            title: "Signs of identity",
            body: "Tirthankara images can look similar in posture and serenity, so symbols help identify specific Tirthankaras.",
            term: "Lanchhana",
            example: "A symbol near an image can help a viewer know which Tirthankara is represented."
          },
          {
            title: "Art teaches memory",
            body: "Iconography supports memory and devotion by joining visual form with sacred biography and qualities.",
            term: "Iconography",
            example: "A learner can read art as a teaching surface, not only decoration."
          }
        ],
        misconceptions: ["Symbols are not random decoration.", "Similar posture does not mean every image represents the same Tirthankara."],
        exercises: [
          {
            type: "choice",
            prompt: "Why do Tirthankara images often use symbols?",
            options: ["To help identify specific Tirthankaras", "To replace all ethics", "To count coins", "To show a creator god"],
            answer: "To help identify specific Tirthankaras",
            explain: "Symbols help distinguish Tirthankaras whose images may share serene posture and style."
          },
          {
            type: "fill",
            prompt: "Fill in the missing word: Jain image symbols can support visual ____.",
            answer: "memory",
            explain: "Symbols help learners remember identities, stories, and qualities."
          },
          {
            type: "match",
            prompt: "Match the term to the role.",
            pairs: [
              ["Lanchhana", "Identifying symbol"],
              ["Iconography", "Meaning in images"],
              ["Tirthankara", "Liberated teacher"]
            ],
            explain: "Art vocabulary helps learners read Jain images respectfully."
          }
        ]
      }
    ]
  },
  {
    id: "modern-practice",
    title: "Modern practice",
    color: "blue",
    lessons: [
      {
        id: "food-ethics",
        title: "Food ethics",
        summary: "Understand Jain vegetarian practice as one expression of ahimsa.",
        level: "Easy",
        concept: "Food ethics",
        objectives: ["Connect food choices to ahimsa.", "Avoid reducing Jainism to diet.", "Recognize variation in household practice."],
        teaching: [
          {
            title: "Food and harm",
            body: "Many Jains express ahimsa through vegetarian food ethics and careful attention to the living beings affected by eating.",
            term: "Vegetarian practice",
            example: "A meal choice can become a daily reminder to reduce harm."
          },
          {
            title: "Not only diet",
            body: "Food matters, but Jainism is larger than dietary practice. Vows, knowledge, reflection, charity, and liberation also shape the tradition.",
            term: "Whole path",
            example: "A learner should not treat one food rule as the entire religion."
          }
        ],
        misconceptions: ["Jainism is not only vegetarianism.", "Food practices can vary by family, region, and level of observance."],
        exercises: [
          {
            type: "choice",
            prompt: "Food ethics in Jainism is most connected to:",
            options: ["Reducing harm through ahimsa", "Ignoring all vows", "Collecting possessions", "Winning debates at any cost"],
            answer: "Reducing harm through ahimsa",
            explain: "Vegetarian practice is one expression of non-harm."
          },
          {
            type: "trueFalse",
            prompt: "Jainism should be taught as only a food rule.",
            answer: false,
            explain: "Food ethics is important, but the tradition also includes philosophy, vows, rituals, and liberation."
          },
          {
            type: "select",
            prompt: "Select areas Jain practice can include.",
            options: ["Food ethics", "Study", "Reflection", "Careless harm"],
            answer: ["Food ethics", "Study", "Reflection"],
            explain: "The path includes daily conduct, learning, reflection, and restraint."
          }
        ]
      },
      {
        id: "ecology-small-life",
        title: "Ecology and small life",
        summary: "Connect care for small beings with environmental restraint.",
        level: "Medium",
        concept: "Ecology",
        objectives: ["Relate ahimsa to small life.", "Connect restraint with ecological care.", "Avoid romanticizing practice."],
        teaching: [
          {
            title: "Attention to small life",
            body: "Jain traditions are known for unusually careful attention to living beings, including small and subtle forms of life.",
            term: "Small life",
            example: "Carefulness can shape water use, food choices, and how one moves through the world."
          },
          {
            title: "Restraint and ecology",
            body: "Modern learners often connect ahimsa and aparigraha to ecological restraint: less waste, less excess, and more responsibility.",
            term: "Ecological restraint",
            example: "Using less because other beings are affected joins non-harm with non-possessiveness."
          }
        ],
        misconceptions: ["Ecological readings should not erase traditional meanings.", "Care for small life is not the same as doing nothing."],
        exercises: [
          {
            type: "choice",
            prompt: "Which pair best connects to ecological restraint?",
            options: ["Ahimsa and aparigraha", "Gossip and greed", "Anger and pride", "Only status and display"],
            answer: "Ahimsa and aparigraha",
            explain: "Non-harm and non-possessiveness support reduced waste and careful use."
          },
          {
            type: "select",
            prompt: "Select practices that can reduce ecological harm.",
            options: ["Less waste", "Repairing useful items", "Mindful water use", "Buying from craving"],
            answer: ["Less waste", "Repairing useful items", "Mindful water use"],
            explain: "Modern ecological practice can draw on restraint, care, and reduced excess."
          },
          {
            type: "reflection",
            prompt: "Short reflection: What is one daily resource you could use more carefully?",
            explain: "A strong reflection names one resource and a realistic change."
          }
        ]
      },
      {
        id: "digital-ahimsa",
        title: "Digital ahimsa",
        summary: "Apply non-harm to messages, posts, attention, and online conflict.",
        level: "Medium",
        concept: "Digital ahimsa",
        objectives: ["Apply ahimsa to online speech.", "Connect satya with sharing information.", "Choose restraint before reaction."],
        teaching: [
          {
            title: "Online conduct counts",
            body: "Digital ahimsa asks whether posts, messages, and shares reduce harm or spread anger, humiliation, and falsehood.",
            term: "Digital ahimsa",
            example: "Not forwarding an unverified claim can be an act of restraint."
          },
          {
            title: "Attention is ethical",
            body: "What we amplify shapes other minds. Jain vows can guide attention, speed, and tone online.",
            term: "Attention",
            example: "A learner pauses before replying to ask whether the message is true, useful, and kind."
          }
        ],
        misconceptions: ["Online harm is not unreal just because it is digital.", "Silence, correction, and reporting can each be appropriate in different contexts."],
        exercises: [
          {
            type: "choice",
            prompt: "Which action best practices digital ahimsa?",
            options: ["Pausing before sharing a harmful rumor", "Posting insults quickly", "Forwarding anything dramatic", "Mocking someone for attention"],
            answer: "Pausing before sharing a harmful rumor",
            explain: "Digital ahimsa applies non-harm and truthfulness to online behavior."
          },
          {
            type: "select",
            prompt: "Select checks before posting.",
            options: ["Is it true?", "Is it useful?", "Is it needlessly harmful?", "Will it create more cruelty?"],
            answer: ["Is it true?", "Is it useful?", "Is it needlessly harmful?", "Will it create more cruelty?"],
            explain: "Careful online conduct considers truth, usefulness, and harm."
          },
          {
            type: "trueFalse",
            prompt: "Satya can matter when deciding whether to share information online.",
            answer: true,
            explain: "Truthfulness includes checking claims before amplifying them."
          }
        ]
      },
      {
        id: "pluralism-debate",
        title: "Pluralism in debate",
        summary: "Use many-sidedness to disagree without flattening truth.",
        level: "Hard",
        concept: "Pluralism",
        objectives: ["Apply anekantavada to disagreement.", "Avoid relativism.", "Practice qualified claims in debate."],
        teaching: [
          {
            title: "Many-sided debate",
            body: "Anekantavada can train a debater to ask what each viewpoint sees clearly and what each viewpoint misses.",
            term: "Pluralism",
            example: "Two people may disagree because they are answering from different contexts or values."
          },
          {
            title: "Not anything goes",
            body: "Many-sidedness does not mean every claim is equally true. It asks for humility, precision, and careful qualification.",
            term: "Qualified claim",
            example: "A careful speaker may say, 'from this standpoint, this part is true.'"
          }
        ],
        misconceptions: ["Anekantavada is not lazy relativism.", "Respecting a viewpoint does not require accepting every claim."],
        exercises: [
          {
            type: "choice",
            prompt: "Anekantavada helps debate by:",
            options: ["Noticing partial truths and limits", "Declaring every claim equally true", "Avoiding all careful speech", "Removing context"],
            answer: "Noticing partial truths and limits",
            explain: "Many-sidedness asks for standpoint awareness and precision."
          },
          {
            type: "match",
            prompt: "Match each term.",
            pairs: [
              ["Anekantavada", "Many-sidedness"],
              ["Syadvada", "Qualified statement"],
              ["Satya", "Truthfulness"]
            ],
            explain: "Debate can join many-sidedness, qualified speech, and truthfulness."
          },
          {
            type: "reflection",
            prompt: "Short reflection: How could you disagree strongly while still practicing many-sidedness?",
            explain: "A strong answer names limits, evidence, and respect without erasing truth."
          }
        ]
      }
    ]
  }
];
