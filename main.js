const random_content = [
  {
    "_comment": "THIS DATA IS WRITTEN BY CHATGPT BASED ON RANDOM TOPICS. (I DON'T HAVE PATIENCE TO WRITE THIS MUCH TEXT MYSELF THANK FOR THE UNDERSTANDING :) )",
    "header": "Wonders of the Morning Sky",
    "text": "Each morning brings a new canvas of colors across the sky, a display that reminds us of the world's quiet beauty. The gradual shift from darkness to light encourages us to approach the day with hope and curiosity. Birds greet the dawn with cheerful songs, reminding us that even small voices can bring great joy. By pausing to watch a sunrise, we connect to something larger than ourselves. These simple observations can shape the tone of the entire day, offering balance and calm before the demands of life take hold. The morning sky is more than a sight; it is a reminder of beginnings and the chance to start anew."
  },
  {
    "header": "Paths Through the Forest",
    "text": "Walking along a forest path is like stepping into a living library. Every tree, leaf, and stone tells a story shaped by seasons and time. The air is filled with freshness, and the sounds of rustling branches and distant streams create a natural symphony. These trails invite reflection, offering space to breathe and think without distraction. The forest does not hurry, yet everything moves forward. By walking here, we learn patience and presence. The winding paths symbolize life itself, with turns and surprises that lead us to new views and discoveries. Each step in nature becomes both a journey outward and inward."
  },
  {
    "header": "Strength in Community",
    "text": "Communities thrive when people support one another with kindness and trust. Whether through shared meals, celebrations, or simple conversations, bonds are strengthened by care and respect. A strong community is like a woven fabric where every thread matters. People feel secure when they know they are not alone in their challenges or triumphs. These networks of support encourage creativity, resilience, and joy. By valuing each voice, communities create spaces where ideas flourish and everyone feels a sense of belonging. Such connections remind us that togetherness is not only practical but also deeply fulfilling."
  },
  {
    "header": "The Flow of Rivers",
    "text": "Rivers carry stories across landscapes, shaping valleys and nourishing life wherever they travel. Their steady movement reflects persistence, reminding us that progress does not need to be rushed. The gentle ripples and rushing currents are both part of the same journey. Rivers invite us to consider adaptability, as they bend and shift with obstacles yet continue moving forward. Sitting beside flowing water brings calm, helping thoughts settle into clarity. These waterways connect distant places, symbolizing unity across diversity. They remind us that even small beginnings, like streams, can grow into something vast and powerful through patience and steady flow."
  },
  {
    "header": "Quiet Moments of Reflection",
    "text": "In the busyness of daily routines, moments of quiet are rare but deeply valuable. Reflection allows us to pause, to understand where we are and where we are going. These gentle pauses bring clarity, helping us see challenges not as barriers but as lessons. In silence, we can listen more closely to ourselves and to the world around us. Reflection creates balance, nurturing both inner peace and outer action. Even a few minutes spent in calmness can provide renewed strength and perspective. Quiet is not emptiness; it is space where thoughts and dreams can gently unfold."
  },
  {
    "header": "Gardens of Renewal",
    "text": "Gardens are places of wonder where life continually renews itself. Seeds planted with patience become blossoms that brighten the world. Working in a garden teaches care, responsibility, and respect for time. Growth cannot be rushed, and yet it always arrives. A garden shows how small efforts, consistently given, create beauty and nourishment. Each bloom, each fruit, is a reward for steady attention. Gardens also attract life, from buzzing bees to singing birds, creating harmony between humans and nature. They remind us that with dedication and love, even the smallest plot can become a sanctuary of peace and abundance."
  },
  {
    "header": "The Wisdom of Mountains",
    "text": "Mountains stand as timeless guardians, rising high above the world with quiet strength. Their peaks touch the sky, while their bases are rooted deeply in the earth. Climbing a mountain requires patience and resilience, teaching us that meaningful goals are reached through steady steps. The air at higher altitudes brings clarity, both literal and symbolic. Mountains remind us of endurance, stability, and perspective. From their heights, the view reveals how vast the world truly is, shifting our understanding of our own place within it. They stand through storms and seasons, teaching that strength often comes from stillness."
  },
  {
    "header": "Bridges of Connection",
    "text": "Bridges symbolize unity, linking places and people once separated. They make journeys possible, encourage exchange, and remove barriers that divide. Every bridge tells a story of cooperation and vision, as builders dream of creating paths for others. Crossing a bridge can feel symbolic, marking the movement from one stage of life to another. Bridges remind us that progress often comes not from walls but from connections. They represent trust, as people rely on them to carry weight and provide safety. By valuing connections, we build not just physical bridges, but bonds of understanding and care."
  },
  {
    "header": "Lessons From the Ocean",
    "text": "The ocean is both vast and mysterious, holding secrets in its depths while offering calm waves along its shores. Standing at the water's edge, one feels both small and connected to something immense. The rhythm of tides reminds us of cycles of change and renewal. Waves that rise and fall echo life's challenges and opportunities, showing that both are temporary. The ocean teaches humility, respect, and awe. It also sustains countless forms of life, providing nourishment and balance. Observing the sea encourages us to embrace mystery, wonder, and the endless possibilities hidden beneath the surface."
  },
  {
    "header": "Treasures of Friendship",
    "text": "Friendship is one of life's most enduring treasures, built on trust, laughter, and shared experiences. True friends walk with us through both joy and difficulty, offering support without judgment. They remind us that we do not have to face life's uncertainties alone. Friendship grows stronger through honesty, kindness, and time. Shared memories create bonds that cannot be measured by distance. The comfort of knowing someone truly understands us is one of life's greatest gifts. Friendships, like gardens, need care and attention, but the rewards are immeasurable—bringing light, warmth, and joy into every chapter of life."
  },
  {
    "header": "The Gift of Learning",
    "text": "Learning is a lifelong journey, filled with opportunities to grow and expand. It is not limited to classrooms or books but found in every interaction, every mistake, and every triumph. Curiosity opens doors to new knowledge, while challenges teach resilience and problem-solving. Learning reminds us that it is never too late to discover something new. The pursuit of knowledge connects us across generations, cultures, and experiences. Each lesson adds to the richness of life, making us wiser and more capable of shaping a better future. The gift of learning is endless, renewing itself with every question asked."
  },
  {
    "header": "Journeys of Imagination",
    "text": "Imagination allows us to travel beyond the boundaries of the present moment. Through stories, art, and dreams, we explore new worlds and possibilities. Imagination fuels creativity, invention, and hope. It transforms ordinary experiences into extraordinary ones. By encouraging imagination, we nurture problem-solving and innovation. It is the seed of progress, inspiring visions that can change communities and even the world. Children remind us of the boundless nature of imagination, yet it is a gift that never fades with age. Every imagined possibility becomes the first step toward real change and discovery."
  },
  {
    "header": "Harmony in Music",
    "text": "Music is a universal language, crossing borders and cultures with ease. A simple melody can stir emotions, awaken memories, and bring people together. Rhythm and harmony remind us of balance, while lyrics often tell stories that resonate deeply. Music invites movement, celebration, and healing. It can provide comfort in solitude and amplify joy in gatherings. Every note and beat is part of a larger whole, showing that beauty comes from collaboration and timing. Whether sung, played, or listened to, music enriches life with connection, energy, and meaning that words alone cannot always express."
  },
  {
    "header": "The Wonder of Stars",
    "text": "Looking up at the night sky reveals countless stars, each shining from unimaginable distances. They inspire wonder and curiosity, reminding us of the vastness of the universe. Stars have guided travelers, sparked myths, and ignited dreams of exploration. Observing them encourages perspective, showing that life on Earth is part of something much greater. The steady glow of starlight also provides comfort, a reminder of constancy even in darkness. Stars symbolize hope, guiding us through uncertain paths. They are a reminder that light continues to shine, no matter how distant it may seem, offering inspiration for every journey."
  },
  {
    "header": "Cycles of Renewal",
    "text": "Life moves in cycles, much like the turning of seasons or the phases of the moon. Renewal is a natural process, reminding us that endings are also beginnings. Growth follows rest, and light returns after darkness. By embracing these rhythms, we find peace in knowing that nothing lasts forever, yet everything has purpose. Renewal encourages forgiveness, resilience, and openness to change. It is present in nature, in relationships, and in our own inner journeys. Each cycle offers a fresh start, an opportunity to approach life with new energy and perspective. Renewal is both gentle and powerful."
  }
];

window.onload = function() {
    articleInsert(2);
    footerblurbInsert(3);
};

function articleInsert(number) {
  for (let i = 0; i < number; i++) {
    const random_number = Math.floor(Math.random() * random_content.length);
    const random_article = random_content[random_number];

    const target_element = document.getElementById('article');
    const new_article = document.createElement('div');
    new_article.innerHTML = `<h2>${random_article.header}</h2><p>${random_article.text}</p>`;
    target_element.appendChild(new_article);
  }
}

function footerblurbInsert(number) {
  for (let i = 0; i < number; i++) {
    const random_number = Math.floor(Math.random() * random_content.length);
    const random_article = random_content[random_number];

    const target_element = document.getElementById('footerblurb');
    const new_article = document.createElement('div');
    new_article.innerHTML = `<h2>${random_article.header}</h2><p>${random_article.text}</p>`;
    target_element.appendChild(new_article);
  }

}