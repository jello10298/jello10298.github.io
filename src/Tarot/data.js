const data = [
    {
        "name": "The Magician",
        "title": "Personal Magic",
        "desc": "No one can misappropriate or take away your special talents and qualities.  Use your imagination, creativity, and communication skills! Make your very own distinctive contribution.",
        "type": "Major Arcana",
        "image": "1-The-Magician.jpg"
    },
    {
        "name": "The High Priestess",
        "title": "Inner Voice",
        "desc": "Listen. Become aware of your inner voice and be open to sounds and timbres as well as to silence.  Create a space for yourself.  Train your voice and express what matters most to you.",
        "type": "Major Arcana",
        "image": "2-The-High-Priestess.jpg"
    },
    {
        "name": "The Empress",
        "title": "Your Own True Nature",
        "desc": "In order to be happy and feel good, it is important to create your own realm, and to establish and follow rules that underpin your well-being and the pleasure you experience.  Take charge of your daily well-being. Ban false goddess and foreign empresses from your life!",
        "type": "Major Arcana",
        "image": "3-The-Empress.jpg"
    },
    {
        "name": "The Emperor",
        "title": "Self-Motivated Pioneer",
        "desc": "Put your pioneering spirit to use. Explore your current situation. Don\u2019t imitate, innovate! Create your own facts.  Be the master of your own game!",
        "type": "Major Arcana",
        "image": "4-The-Emperor.jpg"
    },
    {
        "name": "The High Priest",
        "title": "Personal Quintessence",
        "desc": "Initiate others into your mysteries. Be open to the needs of others.",
        "type": "Major Arcana",
        "image": "5-The-High-Priest.jpg"
    },
    {
        "name": "The Lovers",
        "title": "Paradise and the Shadow",
        "desc": "The little angel in the picture represents the child of the two lovers. This hints at a real child or could be understood in a figurative sense. Every kind of relationship - event the one with yourself or a business partner - needs a metaphoric \u201cchild\u201d: a productive result or outcome that bears witness to your partnership, and lives and grows.",
        "type": "Major Arcana",
        "image": "6-The-Lovers.jpg"
    },
    {
        "name": "The Chariot",
        "title": "Chart your own Course",
        "desc": "Assume full responsibility for the shaping of your life path. You cannot get off the chariot, nor relinquish your own karma, but you can strike out in a new direction. The right attitude helps you to accept and develop the positive aspects you encounter but also empowers you to avoid and let go or, alternatively, to integrate and master the \u201cbad\u201d. Accept the light and the shadows and turn your darkest fears into golden opportunities and self-fulfillment.",
        "type": "Major Arcana",
        "image": "7-The-Chariot.jpg"
    },
    {
        "name": "Justice",
        "title": "Mindfulness",
        "desc": "\u201cThe more knowledge is contained within a thing, the greater the love\u201d (Paracelsus). Be prepared to criticize and have the courage to praise, but above all, be willing to shed the discerning light of love on every person and event, on both the high and low points of your life.",
        "type": "Major Arcana",
        "image": "8-Justice.jpg"
    },
    {
        "name": "The Hermit",
        "title": "Healing",
        "desc": "This card sometimes signals a need for rest and withdrawal, but more often, for commitment and effort and for accepting responsibility. Pay your debts - in a material as well as a moral sense. Increase your own wealth, wellness and well-being as well as that of your fellow human beings.",
        "type": "Major Arcana",
        "image": "9-The-Hermit.jpg"
    },
    {
        "name": "Wheel of Fortune",
        "title": "Great Resolution",
        "desc": "You learn to work in harmony with your destiny by lovingly - and crucially - accepting \u201cchance\u2019 and correlations that are beyond your comprehension. Tarot constitutes an ideal training ground, as it allows you to make use of coincidences. For the next ten days, draw a card every day!",
        "type": "Major Arcana",
        "image": "10-Wheel-of-Fortune.jpg"
    },
    {
        "name": "Strength",
        "title": "The Art of Loving",
        "desc": "Beware of useless ideals and of violence in the name of love. Give your lust for life another chance.  Living fully means always being totally in the present. This is the card of the high points and peak experiences in sexuality as well as in all other aspects of life.",
        "type": "Major Arcana",
        "image": "11-Strength.jpg"
    },
    {
        "name": "The Hanged Man",
        "title": "Passion",
        "desc": "Reassess your own beliefs and presumptions. If you have found your belief system to be valid, do not hesitate to place the utmost confidence in it. A meaningful faith and a purposeful passion are a great boon.",
        "type": "Major Arcana",
        "image": "12-The-Hanged-Man.jpg"
    },
    {
        "name": "Death",
        "title": "Living Uniqueness",
        "desc": "If you want your life to be fruitful, you have to attend to what needs to be done at the right moment. Which one of your fruits is ripe? What is still missing, what no longer fitting? How do you realize your desires?",
        "type": "Major Arcana",
        "image": "13-Death.jpg"
    },
    {
        "name": "Temperance",
        "title": "True Will",
        "desc": "Existing facts may be melted down and newly forged. Joyfully change the world and begin to play with new possibilities. Establish your own \u201ccreativity workshop.\u201d In your daily life, find a time and place to take a break and tarry awhile on a regular basis.",
        "type": "Major Arcana",
        "image": "14-Temperance.jpg"
    },
    {
        "name": "The Devil",
        "title": "Creative Tampering with Taboo",
        "desc": "Once you have asked light onto the darkness, the vampire will turn to dust and the hidden will take on shape and color as it emerges. Dare to face the unknown and observe it closely until you decide how much of it to use and what to discard.",
        "type": "Major Arcana",
        "image": "15-The-Devil.jpg"
    },
    {
        "name": "The Tower",
        "title": "Encounter with the Absolute",
        "desc": "Go ahead and give it you all! You will gain more Leo and protect yourself better from danger if you learn consciously to deal with your energy.  Risk being more direct! Make a leap into the unknown - even if the consequences are unfathomable.",
        "type": "Major Arcana",
        "image": "16-The-Tower.jpg"
    },
    {
        "name": "The Star",
        "title": "Personal Truth",
        "desc": "\u201cEach life follows its own star\u201d (Hermann Hess). Reveal yourself, do your part.  Do not hide your own beauty nor be shy about revealing your own truth.  Give generously. Do not hide your light under a bushel. However, remember that your star is only a small point in a much larger galaxy of stars.",
        "type": "Major Arcana",
        "image": "17-The-Star.jpg"
    },
    {
        "name": "The Moon",
        "title": "Deliverance",
        "desc": "Accept your intense emotions as a reality that wants to be lived, just like any other aspect of your being. Then you may safely swim about in the deep waters of your psyche. Be at peace with yourself and the world, open up your heart and cease to be self-absorbed.",
        "type": "Major Arcana",
        "image": "18-The-Moon.jpg"
    },
    {
        "name": "The Sun",
        "title": "Enlightenment",
        "desc": "Beware of all delusions.  Surrender to the stream of life energy within and without yourself.  \u201cLove God and do what you want to do\u201d (St. Augustine).",
        "type": "Major Arcana",
        "image": "19-The-Sun.jpg"
    },
    {
        "name": "Judgement",
        "title": "The Day of Judgement is Today",
        "desc": "Let go of what has been. Say your good-byes and make your peace with the past. Learn to forgive without forgetting.  Everything is important. You have made your choices in the past and now you are free to choose anew and to decide which road you want to take.",
        "type": "Major Arcana",
        "image": "20-Judgment.jpg"
    },
    {
        "name": "The World",
        "title": "Resolution of Contradictions",
        "desc": "It is your task and your strength to step forward and show yourself. The way you live in this world determines what the world is in a reciprocal relationship.  Use your time on earth wisely and enjoy your stay here.",
        "type": "Major Arcana",
        "image": "21-The-World.jpg"
    },
    {
        "name": "The Fool",
        "title": "The Zero as Role Model",
        "desc": "As a fool, you are open to experiment and free to learn from all experience. You are entitled to lack answers and to change your point of view at will.  Put your faith in your own originality and trust the world. Do not let others drive you crazy. It is foolish to concern yourself with things or events that cannot be appropriately judged at the present time.",
        "type": "Major Arcana",
        "image": "22-The-Fool.jpg"
    },
    {
        "name": "Queen of Wands",
        "title": "The Joy of Living and Self-Determination",
        "desc": "Rely on your ability to take charge at the right moment and to get things moving. In order to appreciate enemies and obstacles as nothing but challenges and new chances, you might have to modify your way of thinking. Recognize your abilities and decide upon your new goals.",
        "type": "Minor Arcana",
        "image": "23-Queen-of-Wands.jpg"
    },
    {
        "name": "King of Wands",
        "title": "Ordeals of Fire",
        "desc": "Recognize your tasks and needs as they really are; opportunities. Be willing to walk through fire to fulfill your heart\u2019s desire - skillfully and without fear.",
        "type": "Minor Arcana",
        "image": "24-King-of-Wands.jpg"
    },
    {
        "name": "Knight of Wands",
        "title": "Your Life\u2019s Purpose",
        "desc": "You possess an incredible amount of energy. Bring light into the darkness. Help those who are weaker than yourself.  Commit yourself to meaningful projects that will benefit many people. Where the darkness is greatest, your light is most needed.  It is here that you will discover your life\u2019s purpose, a mission so great that it will take a whole lifetime to accomplish.  Start your journey now!",
        "type": "Minor Arcana",
        "image": "25-Knight-of-Wands.jpg"
    },
    {
        "name": "Page of Wands",
        "title": "Renewed Strength",
        "desc": "Learn to understand energies that are larger than you are. Beware of narrow-mindedness. Hold onto that which makes your heart sing and your spirit soar!",
        "type": "Minor Arcana",
        "image": "26-Page-of-Wands.jpg"
    },
    {
        "name": "Ace of Wands",
        "title": "Instinctive Drive",
        "desc": "This card challenges you to do something active and yet also to have the courage to let something happen.  You will learn the answer by doing. Follow your energy and keep moving.  Closely observe your fellow human beings and pay attention to relevant forces.",
        "type": "Minor Arcana",
        "image": "27-Ace-of-Wands.jpg"
    },
    {
        "name": "Two of Wands",
        "title": "Primal Forces",
        "desc": "Great tasks lie before you. Do not allow yourself to be pushed into a corner. You will succeed only if your will and your enthusiasm are unbroken. Rely on your own strength. Have confidence in your determination and your self-discipline. Wait until your vision has become clear and your mind is made up. Then do not hesitate any longer. Act with all your might.",
        "type": "Minor Arcana",
        "image": "28-Two-of-Wands.jpg"
    },
    {
        "name": "Three of Wands",
        "title": "Prudence",
        "desc": "Acting half-heartedly is a waste of time. If you put all of your effort and your power into something, you will succeed. Become clear what it is that you want to achieve and which personal and emotional needs are related to your most important goals! Deliberate action is the key to passion as distinguished from mere enthusiasm. Be aware of what you are doing.",
        "type": "Minor Arcana",
        "image": "29-Three-of-Wands.jpg"
    },
    {
        "name": "Four of Wands",
        "title": "The Wonders of Creation",
        "desc": "Avoid petty solutions and false compromises. Neither forgot nor hide your true motives and authentic feelings.  They are the true source of your motivation and will guarantee your greatest successes.",
        "type": "Minor Arcana",
        "image": "30-Four-of-Wands.jpg"
    },
    {
        "name": "Five of Wands",
        "title": "Shaping your Will",
        "desc": "Create space in your daily routine. This might include taking some time out or establishing your own room. New alternatives are waiting to be explored and tested in your personal relationships and in your career. Go for it!",
        "type": "Minor Arcana",
        "image": "31-Five-of-Wands.jpg"
    },
    {
        "name": "Six of Wands",
        "title": "Gaining Strength",
        "desc": "Do not be intimidated and don\u2019t intimidate others. Stand up for what moves you and go for it wholeheartedly.",
        "type": "Minor Arcana",
        "image": "32-Six-of-Wands.jpg"
    },
    {
        "name": "Seven of Wands",
        "title": "A New Level",
        "desc": "All existing facts can be changed by your actions. But doing just for the sake of doing and morbid ambition will only harm you. It is of utmost importance to reach a new level and to use your power wisely and in a relaxed manner.",
        "type": "Minor Arcana",
        "image": "33-Seven-of-Wands.jpg"
    },
    {
        "name": "Eight of Wands",
        "title": "Greater Responsibility",
        "desc": "Make sure that good vibrations exist between you and other people. Learn to understand what does you and others. Become more sensitive to the needs of all parties involved. Then you will be able to harmonize many different types of energy and accomplish many things without having to resort to manipulation.",
        "type": "Minor Arcana",
        "image": "34-Eight-of-Wands.jpg"
    },
    {
        "name": "Nine of Wands",
        "title": "Stalking",
        "desc": "Your actual situation challenges you to become more vital and to live life to the fullest. Abandon your old fears and fulfill your most important wishes! Activate your senses! Learn to recognize outdated habits.",
        "type": "Minor Arcana",
        "image": "35-Nine-of-Wands.jpg"
    },
    {
        "name": "Ten of Wands",
        "title": "A Fulfilled Life",
        "desc": "Throw off your old burdens and wake up to what is actually going on. Only by giving your undivided attention and affection to someone or something will you be able to completely understand him, her or it. You have to go forward and commit yourself. This way, you will always be a step ahead.",
        "type": "Minor Arcana",
        "image": "36-Ten-of-Wands.jpg"
    },
    {
        "name": "Queen of Cups",
        "title": "The Voice of the Heart",
        "desc": "Take a walk along a river or lake. Meditate near the water. Embellish yourself and your surroundings. Show the beauty and costliness of your feelings. Open up your heart, but not to a witch.",
        "type": "Minor Arcana",
        "image": "37-Queen-of-Cups.jpg"
    },
    {
        "name": "King of Cups",
        "title": "Your Heart\u2019s True Desire",
        "desc": "Be true to your desires. If you walk through a dark tunnel, take a light with you. Do not be afraid of confronting taboos and the dark side - but do not become too fascinated by them either! As you learn to deal with your dominant emotions, your true desires will become clear.",
        "type": "Minor Arcana",
        "image": "38-King-of-Cups.jpg"
    },
    {
        "name": "Knight of Cups",
        "title": "Living Faith",
        "desc": "Avoid naivety as well as superstition. Question and examine. Identify what moves and supports you in the long term.  Do your sums and update your bookkeeping. Find a trustworthy conversation partner.",
        "type": "Minor Arcana",
        "image": "39-Knight-of-Cups.jpg"
    },
    {
        "name": "Page of Cups",
        "title": "Lightness of Heart",
        "desc": "Cleanse your psyche and evaluate your emotions. But do not dwell extensively on past mistakes, weaknesses, and fears. Balance your emotional account. Settle your own debts and ask others to settle theirs - financially, but more importantly, emotionally and spiritually.",
        "type": "Minor Arcana",
        "image": "40-Page-of-Cups.jpg"
    },
    {
        "name": "Ace of Cups",
        "title": "Inner Life",
        "desc": "This is not the time for great promises or expectations but for personal integrity. Settle all problems that dull your feelings. Clear your emotions and take your own cup into your own hands.",
        "type": "Minor Arcana",
        "image": "41-Ace-of-Cups.jpg"
    },
    {
        "name": "Two of Cups",
        "title": "Your Emotional Range",
        "desc": "The validity of your feelings should not depend on the approval or disapproval of others. Avoid false compromises in emotional and intimate matters.  It is of utmost importance that you learn to deal purposefully with your emotional needs and feelings.",
        "type": "Minor Arcana",
        "image": "42-Two-of-Cups.jpg"
    },
    {
        "name": "Three of Cups",
        "title": "Understanding your own Emotions",
        "desc": "Develop your emotional vocabulary. Learn to appreciate the feelings of others. Express your own feelings with gusto. Don\u2019t be afraid of emotional reactions. Approach others, or keep them at a distance, defining your own boundaries - even if you may be unaccustomed to this. The right word at the right time can make miracles come true.",
        "type": "Minor Arcana",
        "image": "43-Three-of-Cups.jpg"
    },
    {
        "name": "Four of Cups",
        "title": "Your own Personal Motivation",
        "desc": "Explore your feelings. Relax and allow your spirit to float. Defined your boundaries. It is in deep meditation and in silence that you will find the right words to express your previously mute emotions and experiences.",
        "type": "Minor Arcana",
        "image": "44-Four-of-Cups.jpg"
    },
    {
        "name": "Five of Cups",
        "title": "A Spiritual Opening - Open to New Feelings",
        "desc": "Take note of what aspect of the card attracts you most. Reconciliation or separation, setting out or staying put: these are all possibilities. Water treatments, baths, and showers can help you to open up emotionally. Do not run away from your own feelings. That is the moment of truth. The long-awaited new beginning.",
        "type": "Minor Arcana",
        "image": "45-Five-of-Cups.jpg"
    },
    {
        "name": "Six of Cups",
        "title": "Back to the Future",
        "desc": "Dig up your memories until you can busy old feuds. Talk to your \u201cinner child.\u201d Leave your childish behavior behind and do what you as a groun-up have wanted to do for a long time.",
        "type": "Minor Arcana",
        "image": "46-Six-of-Cups.jpg"
    },
    {
        "name": "Seven of Cups",
        "title": "Live your Dream",
        "desc": "Examine your fears and follow those desires that contain the most energy. Judging by the fruit of your desire, you will realize what is right and what is wrong. Create and live according to you own set of rules - especially in matters of the heart and in regard to your most intimate desires.",
        "type": "Minor Arcana",
        "image": "47-Seven-of-Cups.jpg"
    },
    {
        "name": "Eight of Cups",
        "title": "On the Journey to Personal Destiny",
        "desc": "Feel and trust your inner flow. Be aware of your own personal rhythm and make it an integral part of daily life. Feast and fast - there is time for everything.",
        "type": "Minor Arcana",
        "image": "48-Eight-of-Cups.jpg"
    },
    {
        "name": "Nine of Cups",
        "title": "Emotional Merry-Go-Round",
        "desc": "Learn to go with the flow and to swim against the current if necessary. Write yourself a \u201cletter of intent\u201d stating your goals for the next nine weeks. Write down (nine) important desires or fears. Establish specific goals for your personal growth and well-being.",
        "type": "Minor Arcana",
        "image": "49-Nine-of-Cups.jpg"
    },
    {
        "name": "Ten of Cups",
        "title": "Intense Feelings",
        "desc": "Don\u2019t be afraid of \u201coceanic feelings.\u201d This is the perfect opportunity to take a fearless look at powerful and bold passions. The more you learn to asses the degree to which you can truly trust yourself and others, the more secure you will feel. This is a test of your self-awareness and knowledge of human nature.",
        "type": "Minor Arcana",
        "image": "50-Ten-of-Cups.jpg"
    },
    {
        "name": "Queen of Swords",
        "title": "Conscious Living",
        "desc": "Ensure clarity in your decisions and your behavior. If necessary, use a magnifying glass or a pair of binoculars to look at your concerns from all possible angles. Refine love, longing, and passion. This is a card of release from your fears and of new opening in matters of the heart.",
        "type": "Minor Arcana",
        "image": "51-Queen-of-Swords.jpg"
    },
    {
        "name": "King of Swords",
        "title": "Knowledge and Breadth",
        "desc": "Try to understand what it is that you do not know about yourself and others - and what you cannot know. Make sure you understand your most important needs and expectations. In order to achieve this end, it is most helpful to have all the mirrors of your mind well-polished and to know your own star!",
        "type": "Minor Arcana",
        "image": "52-King-of-Swords.jpg"
    },
    {
        "name": "Knight of Swords",
        "title": "Personal Consequences",
        "desc": "Take your thoughts further than usual. Risk greater commitment and be more consequential and steadfast.  Leave old thought patterns behind. Take your thoughts seriously and interpret them like dreams.",
        "type": "Minor Arcana",
        "image": "53-Knight-of-Swords.jpg"
    },
    {
        "name": "Page of Swords",
        "title": "Mental Agility",
        "desc": "Take things more \u201clightly.\u201d Take the \u201csword\u201d into your own hands. Do not delegate your power of discernment to others. The value of a new idea cannot be duped by that which is, but only by that which will be. You might sense that the little bit that man can comprehend is much smaller than that which is. It makes a big different whether or not you comprehend your individual contribution and put your abilities to good use in order to make life easier, more deliberate, and more fun for yourself and for your fellow human beings.",
        "type": "Minor Arcana",
        "image": "54-Page-of-Swords.jpg"
    },
    {
        "name": "Ace of Swords",
        "title": "The Crowning Achievement of the Mind",
        "desc": "Rise and stand up straight! Gain strength from your knowledge and delve into everything you don\u2019t yet know. You possess and you will need clear reasoning and staying power. Brain jogging and physical exercise will support your mental facilities. Enjoy your newfound clarity!",
        "type": "Minor Arcana",
        "image": "55-Ace-of-Swords.jpg"
    },
    {
        "name": "Two of Swords",
        "title": "New Insights",
        "desc": "Do not become entrenched in uncertainty. Do not pretend to be blind or to understand. Expand your horizons. Search within to grow beyond yourself.",
        "type": "Minor Arcana",
        "image": "56-Two-of-Swords.jpg"
    },
    {
        "name": "Three of Swords",
        "title": "Conscious Love",
        "desc": "Do not give up! Risk being more honest and authentic. Let go of your prejudice, presence, and reserve.  Feel the great relief that will be your when your heart is set free again.",
        "type": "Minor Arcana",
        "image": "57-Three-of-Swords.jpg"
    },
    {
        "name": "Four of Swords",
        "title": "Holistic Thinking",
        "desc": "You\u2019ve got some tough nuts to crack! But you will be able to resolve major contradictions and master complicated issues. Relax both inwardly and outwardly by letting go of negative thoughts. In order for your mind to concentrate on the task at hand, you must relax.  A new dimension and a life beyond your expectations await you.",
        "type": "Minor Arcana",
        "image": "58-Four-of-Swords.jpg"
    },
    {
        "name": "Five of Swords",
        "title": "The Essence of Mind",
        "desc": "Use your knowledge fruitfully. Consider the two swords lying on the ground and ask yourself whether you understand the power of your untapped thoughts and can appreciate the joy of overcoming and discarding old doubts.  Beware of empty promises and unfounded speculation. Live fully in the present moment. Reassess what you consider to be good and beautiful. You know you are on the right track when you are happy and have learned to marvel again.",
        "type": "Minor Arcana",
        "image": "59-Five-of-Swords.jpg"
    },
    {
        "name": "Six of Swords",
        "title": "Transportation",
        "desc": "Be thorough in all your dealings. Use your mental agility and the intensity of the moment to find out which needs really motivate you and others. Communicate to them your needs.",
        "type": "Minor Arcana",
        "image": "60-Six-of-Swords.jpg"
    },
    {
        "name": "Seven of Swords",
        "title": "Riddles and Solutions",
        "desc": "Reevaluate all that you take for granted. Take a break - for an hour or a whole day. Allow yourself to do something \u201cfoolish.\u201d See to your needs os that they may benefit yourself and others in the long term. Say good-bye t aims and ambitions, which no longer serve you. Pay attention to your dreams and your life\u2019s wishes.",
        "type": "Minor Arcana",
        "image": "61-Seven-of-Swords.jpg"
    },
    {
        "name": "Eight of Swords",
        "title": "Expanded Consciousness",
        "desc": "Werner Sprenger said, \u201cThere are thoughts that you cannot comprehend, unless you change your life.\u201d But the opposite is also true: there are changes in your life that cannot be realized, unless you comprehend your thoughts",
        "type": "Minor Arcana",
        "image": "62-Eight-of-Swords.jpg"
    },
    {
        "name": "Nine of Swords",
        "title": "A Wealth of Knowledge",
        "desc": "Accept responsibility. You will find spiritual guides (see the angel and the swallow) to help you during the transition to a new horizon. Do not be too deterred by temporary obstacles or difficulties.  Keep your feet firmly on the ground - and reach for the stars!",
        "type": "Minor Arcana",
        "image": "63-Nine-of-Swords.jpg"
    },
    {
        "name": "Ten of Swords",
        "title": "The Fruit of the Mind",
        "desc": "Strengthen your mental alertness. Treat thoughts, definitions, and decisions with care. Clear the air and take a deep breath. Beware suspicions and harmful actions. Open up to the flow and life.",
        "type": "Minor Arcana",
        "image": "64-Ten-of-Swords.jpg"
    },
    {
        "name": "Queen of Coins",
        "title": "Talent is Calling",
        "desc": "You have at your disposal the strength to pursue happiness and to make your fortune. Your love for yourself and your fellow human beings, as well as your ability to accept your present circumstances, whatever they may be, will allow you to get out of life what is most important. Go into the hills and climb a peak. Organize your everyday routine in such a way that you will move mountains in your daily life. As the saying goes, \u201cFirst do what is necessary, then what is possible, and suddenly you will find that you can do the impossible\u201d (Fancis of Assisi)",
        "type": "Minor Arcana",
        "image": "65-Queen-of-Coins.jpg"
    },
    {
        "name": "King of Coins",
        "title": "Sense and Pleasure",
        "desc": "Reassess your financial situation as well as your talents and your desire for productivity and fulfillment. Take stock and make a survey of what you have accomplished so far and what is still lacking. Care for everything you have planted - in your garden as well as in your life in general. All that is meant to last needs to be reevaluated. Sense and pleasure are the measure of appropriate, personal wealth.",
        "type": "Minor Arcana",
        "image": "66-King-of-Coins.jpg"
    },
    {
        "name": "Knight of Coins",
        "title": "Sowing and Reaping",
        "desc": "Forgive yourself and others for not being perfect. Even the \u201cgarbage\u201d that we all produce can still be used as manure and humus. You cannot change your fellow human beings, but you can accept them as they are and help them to use their talents to the greatest efforts.",
        "type": "Minor Arcana",
        "image": "67-Knight-of-Coins.jpg"
    },
    {
        "name": "Page of Coins",
        "title": "Proof of One\u2019s Talent, Revealing the Invisible",
        "desc": "Become an explorer. A simple walk through the town or the countryside can be an adventure full of surprising discoveries! Regard your relationships and encounters, your duties and tasks in the same spirit.",
        "type": "",
        "image": "68-Page-of-Coins.jpg"
    },
    {
        "name": "Ace of Coins",
        "title": "New Values",
        "desc": "How do you see your role in the world/ Do you want to take it easy? Or do you want to carry the weight of the world on your shoulders like the titan Atlas? Your talents become clear in the face of huge challenges, but also in the sum total of small achievements. Recognize the power within yourself. The world is waiting for your special contribution. Conquer the world with creativity and passion!",
        "type": "Minor Arcana",
        "image": "69-Ace-of-Coins.jpg"
    },
    {
        "name": "Two of Coins",
        "title": "New Realities, A Greater Reality",
        "desc": "Pay attention to your knees (do not let them become too soft or too rigid).  Your eyes and ears - all of your senses - may be playing up for some time to come. This is because all your perceptions are shifting, changing, and expanding as you attain a new focus in life. What is needed now are new results. They constitute your new task and will prove to be your mainstay.",
        "type": "Minor Arcana",
        "image": "70-Two-of-Coins.jpg"
    },
    {
        "name": "Three of Coins",
        "title": "The Calling",
        "desc": "Find the task that requires and focuses all of your energies . Do not only ask what you want. Ask what God and the world want from you. Then your life will be much easier and more rewarding.",
        "type": "Minor Arcana",
        "image": "71-Three-of-Coins.jpg"
    },
    {
        "name": "Four of Coins",
        "title": "Personal Values",
        "desc": "Your most precious talents are those that are the most useful. They will benefit you most by helping you to fulfill your desires and let go of your fears. Sometimes, it is better to clearly draw the line and to emphasize your uniqueness. But sometimes, it is better to improve your communicative abilities and to include as many people as possible in your endeavors.",
        "type": "Minor Arcana",
        "image": "72-Four-of-Coins.jpg"
    },
    {
        "name": "Five of Coins",
        "title": "Compassion",
        "desc": "Refuse to fulfill unfounded demands. But discharge meaningful obligations with a glad heart! Put an end to unnecessary suffering. Make the world a more human, a more livable, comfortable - and valuable place!",
        "type": "Minor Arcana",
        "image": "73-Five-of-Coins.jpg"
    },
    {
        "name": "Six of Coins",
        "title": "Productive Needs",
        "desc": "New ways of realizing your own needs and of understanding the needs of others are called for. Learn to distinguish productive from unproductive needs. The value of that which you own is greatest when as many people as possible benefit from it. In this sense, you own only that which you give away. Focus upon realizing a gain for all parties involved.  This is much better than managing deprivation.",
        "type": "Minor Arcana",
        "image": "74-Six-of-Coins.jpg"
    },
    {
        "name": "Seven of Coins",
        "title": "Balance Sheet",
        "desc": "In your current situation, you are called upon to look for signs and interpret them. Sometimes, even stumbling blocks can give you important clues. Search and find until you can see clearly.  If you can find your own measure, you will grow with your tasks and your tasks will grow with you!",
        "type": "Minor Arcana",
        "image": "75-Seven-of-Coins.jpg"
    },
    {
        "name": "Eight of Coins",
        "title": "Mastery",
        "desc": "Reflect on your experiences. The clearer your assets and handicaps become, the easier it will be for you to discover your true purpose in life. Focusing on this will prove to the basis and the secret of your mastery.",
        "type": "Minor Arcana",
        "image": "76-Eight-of-Coins.jpg"
    },
    {
        "name": "Nine of Coins",
        "title": "Mature Talents",
        "desc": "Stop the internal dialogue, the nervous chattering of your inner voice. Find inner peace, your \u201cblue hour,\u201d by giving loving attention to your tasks and by joyfully recognizing your results.  Stop parroting the ideas of others or imitating their ever-changing moods. Find the fitting framework for your high-flying plans and your blossoming talents.",
        "type": "Minor Arcana",
        "image": "77-Nine-of-Coins.jpg"
    },
    {
        "name": "Ten of Coins",
        "title": "Magical Moments",
        "desc": "Cooperation, exchange, mutual support, compromises are great as long as they are the result of each individual involved following his or her own path. They become unnecessarily limiting if based on sacrificing your independence and your individuality. Touch the moment with the magic wand of individuality and contribute to a communal style of living, in which each and every individual can walk his or her own path in joy. Then the bliss of mutuality will blossom, culminating in a culture of shared intentions.",
        "type": "Minor Arcana",
        "image": "78-Ten-of-Coins.jpg"
    }
]

export default data;