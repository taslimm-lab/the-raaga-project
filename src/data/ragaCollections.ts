export interface RagaCollection {
  id: string
  label: string
  icon: string
  description: string
  ragaIds: string[]
}

export const RAGA_COLLECTIONS: RagaCollection[] = [
  {
    id: 'monsoon',
    label: 'Monsoon Ragas',
    icon: 'rainy',
    description: 'Ragas traditionally associated with the rains — from Malhar to Megh, these evoke the drama and relief of the monsoon season.',
    ragaIds: ['miyan-ki-malhar', 'gaud-malhar', 'megh', 'des', 'shuddha-malhaar', 'nat-malhar', 'ramdasi-malhar'],
  },
  {
    id: 'morning',
    label: 'Morning Ragas',
    icon: 'wb_twilight',
    description: 'The most serene and devotional ragas — Bhairav, Lalit, Ahir Bhairav — are meant to be heard as the world wakes.',
    ragaIds: ['bhairav', 'lalit', 'ahir-bhairav', 'ramkali', 'bibhas', 'gunkali', 'bairagi'],
  },
  {
    id: 'midnight',
    label: 'Midnight Ragas',
    icon: 'nights_stay',
    description: 'Deep, introspective, and powerful — ragas like Malkaus, Darbari, and Bageshri come alive in the stillness after midnight.',
    ragaIds: ['malkaus', 'darbari-kanada', 'bageshri', 'shahana', 'kaushi-kanada', 'kaushik-kanada'],
  },
  {
    id: 'devotional',
    label: 'Devotional Ragas',
    icon: 'temple_hindu',
    description: 'Ragas steeped in bhakti — the feeling of surrender and love for the divine. Bhairavi, Bhimpalasi, and Yaman Kalyan lead this mood.',
    ragaIds: ['bhairavi', 'bhimpalasi', 'yaman-kalyan', 'ramkali', 'bhairav', 'bairagi'],
  },
  {
    id: 'romantic',
    label: 'Romantic Ragas',
    icon: 'favorite',
    description: 'The language of longing — Yaman, Bahar, Khamaj, and Bageshri carry centuries of shringara rasa into every note.',
    ragaIds: ['yaman', 'bahar', 'khamaj', 'bageshri', 'pahadi', 'tilang'],
  },
  {
    id: 'bollywood-classics',
    label: 'Bollywood Favourites',
    icon: 'movie',
    description: 'The ragas behind the most iconic Bollywood songs — used by composers from S.D. Burman to A.R. Rahman.',
    ragaIds: ['yaman', 'bhairavi', 'desh', 'khamaj', 'bhimpalasi', 'kirwani', 'pahadi', 'pilu'],
  },
]
