import { RAGA_DETAILS } from './ragaDetails'
import { RAGA_FILM_SONGS } from './ragaFilmSongs'
import { ragaSlug } from './utils'

export interface CuratedRaaga {
  id: string
  name: string
  tagline: string
  heroImage: string
  thaat: string
  time: string
  rasa: string[]
  vadi: string
  samvadi: string
  arohana: string
  avarohana: string
  pakad: string
  legend: string
  deepDive: {
    term: string
    definition: string
  }[]
  quiz: {
    question: string
    options: string[]
    answer: number
  }[]
}

export interface RaagaRow {
  id: string
  name: string
  thaat: string
  time: string
  rasa: string[]
  vadi: string
  samvadi: string
  arohana: string
  avarohana: string
  pakad: string
  jati: string
  nature: string
  description?: string
  songCount: number
  isCurated: boolean
  heroImage?: string
  tagline?: string
  legend?: string
  deepDive?: { term: string; definition: string }[]
  quiz?: { question: string; options: string[]; answer: number }[]
}

export const curatedList: CuratedRaaga[] = [
  {
    id: 'bhairavi',
    name: 'Bhairavi',
    tagline: 'The Queen of Ragas — sorrowful, tender, eternal',
    heroImage: 'https://images.unsplash.com/photo-1519677584237-752f8853252e?w=1200&q=80',
    thaat: 'Bhairavi',
    time: 'Morning',
    rasa: ['Karuna', 'Shringar', 'Bhakti'],
    vadi: 'Ma',
    samvadi: 'Sa',
    arohana: 'S r g m P d n S',
    avarohana: 'S n d P m g r S',
    pakad: 'S r g m P d n S',
    legend: 'Bhairavi, derived from Bhairava (a form of Shiva), is traditionally the last raga performed at the conclusion of a concert or a morning prayer session. Its use of all five komal (flat) swaras — Re, Ga, Ma is shuddha here, Dha, Ni — gives it an unparalleled emotional depth. Legend holds that Tansen, the great court musician of Akbar, would end every performance with Bhairavi as a mark of humility before the divine. The word "Bhairavi" itself means "she who is terrifying" — yet the raga is one of the most tender and compassionate in all of Indian music, reflecting Parvati\'s gentle aspect.',
    deepDive: [
      { term: 'Komal Svara', definition: 'A flat note — lowered by a semitone from its natural (shuddha) position. Bhairavi employs Re, Ga, Dha, and Ni as komal, giving it its characteristic melancholic sweetness.' },
      { term: 'Thaat', definition: 'The parent scale from which a raga is derived. Bhairavi thaat contains all five komal swaras and is named after this raga.' },
      { term: 'Vadi-Samvadi', definition: 'The most important (vadi) and second-most-important (samvadi) notes of a raga. In Bhairavi, Ma is vadi and Sa is samvadi — the relationship of a fourth apart.' },
      { term: 'Thumri', definition: 'A semi-classical genre closely associated with Bhairavi. Its expressiveness, flexibility, and emotional range make Bhairavi the quintessential thumri raga.' },
    ],
    quiz: [
      { question: 'How many komal (flat) swaras does Bhairavi use?', options: ['Two', 'Three', 'Four', 'Five'], answer: 2 },
      { question: 'What is the traditional occasion for performing Bhairavi?', options: ['Opening of a concert', 'Conclusion of a concert', 'Monsoon ceremony', 'Wedding celebrations'], answer: 1 },
      { question: 'Which famous court musician is associated with Bhairavi performances?', options: ['Baiju Bawra', 'Tansen', 'Mirabai', 'Kabir'], answer: 1 },
    ],
  },
  {
    id: 'yaman',
    name: 'Yaman',
    tagline: 'The jewel of the evening — bright, romantic, luminous',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    thaat: 'Kalyan',
    time: 'Evening',
    rasa: ['Shringar', 'Shanta'],
    vadi: 'Ga',
    samvadi: 'Ni',
    arohana: 'N R G M* P D N S',
    avarohana: 'S N D P M* G R S',
    pakad: 'N R G M* P, G M* D N S',
    legend: 'Yaman, also known as Yaman Kalyan or simply Kalyan, is perhaps the most celebrated raga for the early evening hours. The name "Yaman" is believed to derive from the Persian "Aiman" meaning "fortunate" or "auspicious." Its defining feature is the teevra Madhyam (raised fourth) — the only note that differs from the natural Bilawal scale — which gives it a distinctive, bright, slightly otherworldly character. Yaman is considered an ideal raga for beginners yet offers infinite depth for masters; its simplicity of structure belies its emotional complexity.',
    deepDive: [
      { term: 'Teevra Madhyam', definition: 'The sharp or raised fourth (Ma#) — the defining characteristic of Yaman. This single note transforms the mood from the ordinary to the ethereal.' },
      { term: 'Kalyan Thaat', definition: 'The parent scale of Yaman, featuring teevra Madhyam as its only alteration from the natural scale. All seven notes are shuddha except Ma.' },
      { term: 'Gandhar (Ga)', definition: 'The third note, which serves as the vadi (principal note) of Yaman. The emphasis on Ga gives the raga its warm, romantic quality.' },
      { term: 'Sandhiprakash Ragas', definition: 'Ragas performed at twilight (dawn or dusk). Yaman is the archetypal evening sandhiprakash raga, capturing the luminous quality of sunset.' },
    ],
    quiz: [
      { question: 'What is the defining characteristic note of Yaman?', options: ['Komal Re', 'Teevra Ma', 'Komal Dha', 'Shuddha Ni'], answer: 1 },
      { question: 'At what time of day is Yaman traditionally performed?', options: ['Early morning', 'Afternoon', 'Early evening', 'Midnight'], answer: 2 },
      { question: 'What is the vadi (principal note) of Yaman?', options: ['Sa', 'Re', 'Ga', 'Pa'], answer: 2 },
    ],
  },
  {
    id: 'darbari-kanada',
    name: 'Darbari Kanada',
    tagline: 'Music of the court — grandeur, gravity, the midnight hour',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
    thaat: 'Asavari',
    time: 'Late Night',
    rasa: ['Veera', 'Raudra', 'Gambhir'],
    vadi: 'Re',
    samvadi: 'Pa',
    arohana: 'S R g M P d n S',
    avarohana: 'S n d P M g R S',
    pakad: 'S R g R, g M P d P, M g R S',
    legend: 'Darbari Kanada is one of the most majestic ragas in all of Hindustani music, literally meaning "of the court" (Darbari) from the Kanada family. It was created by the legendary Miyan Tansen for Emperor Akbar\'s court in the 16th century — a raga befitting imperial grandeur. Its characteristic feature is the meen (oscillation) or andolan on the komal Ga and komal Ni — these notes are not held cleanly but approached with a slow, weighty glide that creates a profound sense of gravity and majesty. Darbari is performed late at night and demands exceptional technical mastery from performers.',
    deepDive: [
      { term: 'Andolan', definition: 'A slow, weighted oscillation on certain notes — particularly Ga and Ni in Darbari. This is not a fast vibrato but a deliberate, expressive movement that gives the raga its grave, majestic quality.' },
      { term: 'Kanada Family', definition: 'A group of related ragas sharing characteristic phrases. Darbari is the most prominent; others include Adana, Nayaki Kanada, and Shahana Kanada.' },
      { term: 'Meen (Meend)', definition: 'A smooth glide between two notes, used extensively in Darbari to connect the komal swaras. The quality of meend is a mark of mastery in Darbari performance.' },
      { term: 'Tansen', definition: 'The legendary 16th-century musician of Emperor Akbar\'s court and one of the nine jewels (navratna). He is credited with creating Darbari Kanada and several other important ragas.' },
    ],
    quiz: [
      { question: 'Who is credited with creating Darbari Kanada?', options: ['Baiju Bawra', 'Swami Haridas', 'Miyan Tansen', 'Amir Khusrau'], answer: 2 },
      { question: 'What is the characteristic ornament (gamak) of Darbari Kanada?', options: ['Murki', 'Andolan', 'Kan Svar', 'Khatka'], answer: 1 },
      { question: 'At what time is Darbari Kanada traditionally performed?', options: ['Early morning', 'Afternoon', 'Evening', 'Late night'], answer: 3 },
    ],
  },
  {
    id: 'bhairav',
    name: 'Bhairav',
    tagline: 'The dawn raga — primordial, devotional, still',
    heroImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    thaat: 'Bhairav',
    time: 'Early Morning',
    rasa: ['Bhakti', 'Shanta', 'Karuna'],
    vadi: 'Dha',
    samvadi: 'Re',
    arohana: 'S r G M P d N S',
    avarohana: 'S N d P M G r S',
    pakad: 'S r G M, d M G r S',
    legend: 'Bhairav is one of the most ancient and sacred ragas in the Hindustani tradition, named after Bhairava — a fierce manifestation of Lord Shiva. Yet despite its fearsome name, the raga itself is profoundly peaceful and devotional, evoking the cool stillness of early dawn when the boundary between the human and divine seems thinnest. The use of komal Re and komal Dha against shuddha Ga creates an extraordinary tension — a seeking quality that perfectly captures the spiritual yearning of morning prayer.',
    deepDive: [
      { term: 'Bhairav Thaat', definition: 'The parent scale that bears this raga\'s name, characterized by komal Re and komal Dha. Several important ragas belong to this thaat.' },
      { term: 'Sandhiprakash', definition: 'The "junction of light" — the twilight periods of dawn and dusk. Bhairav belongs to the dawn sandhiprakash and is traditionally performed at the break of day.' },
      { term: 'Komal Re-Komal Dha', definition: 'The two flat notes that define Bhairav\'s character. Their symmetrical placement in the scale (second and sixth notes) creates the raga\'s distinctive, meditative quality.' },
      { term: 'Alap', definition: 'The slow, meditative, non-rhythmic opening of a classical performance. Bhairav\'s alap is particularly celebrated for its ability to capture the silence and serenity of early morning.' },
    ],
    quiz: [
      { question: 'Which deity is Bhairav raga named after?', options: ['Vishnu', 'Brahma', 'Bhairava (Shiva)', 'Indra'], answer: 2 },
      { question: 'What are the two komal swaras in Bhairav?', options: ['Ga and Ni', 'Re and Dha', 'Ma and Pa', 'Re and Ga'], answer: 1 },
      { question: 'When is Bhairav traditionally performed?', options: ['Late night', 'Afternoon', 'Early morning', 'Evening'], answer: 2 },
    ],
  },
  {
    id: 'desh',
    name: 'Desh',
    tagline: 'Monsoon romance — the longing of rain on dry earth',
    heroImage: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1200&q=80',
    thaat: 'Khamaj',
    time: 'Late Night',
    rasa: ['Shringar', 'Karuna'],
    vadi: 'Sa',
    samvadi: 'Pa',
    arohana: 'S R M P N S',
    avarohana: 'S N d P M G R S',
    pakad: 'S M P N S, N d P M G R S',
    legend: 'Desh, literally meaning "the homeland" or "the country," is one of the most widely-used ragas in Bollywood film music. It belongs to the monsoon family of ragas and is associated with the longing and romance of the rainy season. The raga\'s distinctive feature is its audav (pentatonic) ascent — omitting Ga and Dha on the way up — while using all seven notes in the descent. This creates an asymmetry that perfectly captures the bittersweet quality of separation and longing during the rains.',
    deepDive: [
      { term: 'Audav-Sampoorna', definition: 'A raga classification: "audav" (five notes) in ascent, "sampoorna" (all seven) in descent. Desh skips Ga and Dha going up but includes them coming down.' },
      { term: 'Shringar Rasa', definition: 'The rasa (emotion/flavor) of love and beauty — both erotic love and devotional love. Desh is strongly associated with shringar, particularly the longing aspect (vipralambha shringar).' },
      { term: 'Varsha (Monsoon) Ragas', definition: 'A family of ragas associated with the Indian monsoon season (June-September). Desh, Malhaar, and Megh belong to this category, evoking the sights, sounds, and emotions of rain.' },
      { term: 'Film Music Adaptation', definition: 'Desh is perhaps the most-used classical raga in Hindi film music, adapted by composers like S.D. Burman, R.D. Burman, and Naushad for hundreds of songs.' },
    ],
    quiz: [
      { question: 'What does the word "Desh" mean in Hindi?', options: ['Rain', 'Night', 'Homeland/Country', 'River'], answer: 2 },
      { question: 'Desh belongs to which thaat?', options: ['Bhairavi', 'Kalyan', 'Khamaj', 'Asavari'], answer: 2 },
      { question: 'What is the jati (note count) of Desh?', options: ['Sampoorna-Sampoorna', 'Audav-Audav', 'Audav-Sampoorna', 'Shadav-Sampoorna'], answer: 2 },
    ],
  },
]

// Maps alternate/archaic spelling keys → canonical filmSong key so every raga
// finds its songs regardless of which spelling was used in ragaDetails.
const SONG_KEY_ALIASES: Record<string, string> = {
  'kaafi': 'kafi',
  'des': 'desh',
  'hansdhwani': 'hansadhwani',
  'hamsadhvani': 'hansadhwani',
  'hameer': 'hamir',
  'jounpuri': 'jaunpuri',
  'chandrakauns': 'chandra-kauns',
  'kedara': 'kedar',
  'khamaaj': 'khamaj',
  'bagesri': 'bageshri',
  'bhageshri': 'bageshri',
  'jaijaivanti': 'jaijaiwanti',
  'poorvi': 'purvi',
  'miya-malhar': 'miyan-ki-malhaar',
  'gaur-malhaar': 'malhaar',
  'goud-malhaar': 'malhaar',
  'gaud-malhar': 'malhaar',
  'sohini': 'sohni',
  'patdip': 'patdeep',
  'brindabani-sarang': 'vrindavani-sarang',
  'shahana': 'sahana',
  'sindh-bhairavi': 'sindhi-bhairavi',
  'sindhu-bhairavi': 'sindhi-bhairavi',
  'madhmat-sarang': 'madhmad-sarang',
  'miyan-ki-sarang': 'shuddha-sarang',
  'hem-kalyan': 'hem-kalyan',
}

function getSongs(key: string, id: string) {
  const canonical = SONG_KEY_ALIASES[key] ?? SONG_KEY_ALIASES[id]
  return (
    RAGA_FILM_SONGS[key] ??
    RAGA_FILM_SONGS[id] ??
    (canonical ? RAGA_FILM_SONGS[canonical] : undefined) ??
    []
  )
}

export function buildAllRagas(): RaagaRow[] {
  const curatedMap = new Map(curatedList.map(c => [c.id, c]))
  const rows: RaagaRow[] = []
  const seen = new Set<string>()

  for (const [key, detail] of Object.entries(RAGA_DETAILS)) {
    const id = ragaSlug(detail.name)
    if (seen.has(id)) continue
    seen.add(id)

    const curated = curatedMap.get(id)
    const songs = getSongs(key, id)

    rows.push({
      id,
      name: detail.name,
      thaat: detail.thaat,
      time: detail.time,
      rasa: detail.rasa,
      vadi: detail.vadi,
      samvadi: detail.samvadi,
      arohana: detail.arohana,
      avarohana: detail.avarohana,
      pakad: detail.pakad,
      jati: detail.jati,
      nature: detail.nature,
      description: detail.description,
      songCount: songs.length,
      isCurated: !!curated,
      heroImage: curated?.heroImage,
      tagline: curated?.tagline,
      legend: curated?.legend,
      deepDive: curated?.deepDive,
      quiz: curated?.quiz,
    })
  }

  return rows.sort((a, b) => a.name.localeCompare(b.name))
}

export const ALL_RAGAS: RaagaRow[] = buildAllRagas()

export const ALL_THAATS: string[] = [
  ...new Set(ALL_RAGAS.map(r => r.thaat)),
].sort()
