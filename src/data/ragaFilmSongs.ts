export interface FilmSong {
  title: string
  movie: string
  year: number
  musicDirector: string
  singers: string[]
  lyricist?: string
  sourceUrl?: string
}

export const RAGA_FILM_SONGS: Record<string, FilmSong[]> = {
  'bhairavi': [
    { title: 'Albela Sajan Aayo Re', movie: 'Hum Dil De Chuke Sanam', year: 1999, musicDirector: 'Ismail Darbar', singers: ['Kavita Krishnamurthy'] },
    { title: 'Babul Mora', movie: 'Street Singer', year: 1938, musicDirector: 'R.C. Boral', singers: ['K.L. Saigal'] },
    { title: 'Lag Ja Gale', movie: 'Woh Kaun Thi', year: 1964, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
    { title: 'Tere Bina Zindagi Se', movie: 'Aandhi', year: 1975, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar', 'Lata Mangeshkar'] },
    { title: 'Piya Tose Naina Laage Re', movie: 'Guide', year: 1965, musicDirector: 'S.D. Burman', singers: ['Lata Mangeshkar'] },
    { title: 'Mohe Panghat Pe', movie: 'Mughal-E-Azam', year: 1960, musicDirector: 'Naushad', singers: ['Lata Mangeshkar'] },
    { title: 'Nain So Nain', movie: 'Hungama', year: 1971, musicDirector: 'R.D. Burman', singers: ['Lata Mangeshkar'] },
    { title: 'Woh Kaagaz Ki Kashti', movie: 'Ijaazat', year: 1987, musicDirector: 'R.D. Burman', singers: ['Asha Bhosle'] },
    { title: 'Jab Dil Hi Toot Gaya', movie: 'Shahjehan', year: 1946, musicDirector: 'Naushad', singers: ['K.L. Saigal'] },
    { title: 'Ab Ke Sawan', movie: 'Silsila', year: 1981, musicDirector: 'Shiv-Hari', singers: ['Lata Mangeshkar'] },
    { title: 'Kuchh Na Kaho', movie: '1942: A Love Story', year: 1994, musicDirector: 'R.D. Burman', singers: ['Kumar Sanu', 'Lata Mangeshkar'] },
    { title: 'Dil Dhoondta Hai', movie: 'Mausam', year: 1975, musicDirector: 'Madan Mohan', singers: ['Bhupinder Singh'] },
  ],
  'yaman': [
    { title: 'Kahe Tarsaaye', movie: 'Devdas', year: 2002, musicDirector: 'Ismail Darbar', singers: ['Kavita Krishnamurthy'] },
    { title: 'Aaj Jaane Ki Zid Na Karo', movie: 'Faasle', year: 1985, musicDirector: 'Jaidev', singers: ['Fareeda Khanum'] },
    { title: 'Mhare Hiwda Mein', movie: 'Lamhe', year: 1991, musicDirector: 'Shiv-Hari', singers: ['Lata Mangeshkar'] },
    { title: 'Yeh Jo Mohabbat Hai', movie: 'Kati Patang', year: 1970, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Jeeye To Jeeye Kaise', movie: 'Saajan', year: 1991, musicDirector: 'Nadeem-Shravan', singers: ['S.P. Balasubrahmanyam'] },
    { title: 'Bahut Pyar Karte Hain', movie: 'Saajan', year: 1991, musicDirector: 'Nadeem-Shravan', singers: ['Kumar Sanu'] },
    { title: 'Dil Deewana', movie: 'Maine Pyar Kiya', year: 1989, musicDirector: 'Raam Laxman', singers: ['S.P. Balasubrahmanyam'] },
    { title: 'Abhi Na Jao Chhod Kar', movie: 'Hum Dono', year: 1961, musicDirector: 'Jaidev', singers: ['Mohammed Rafi', 'Asha Bhosle'] },
    { title: 'Neele Neele Ambar Par', movie: 'Kalakar', year: 1983, musicDirector: 'Bappi Lahiri', singers: ['Mohammed Rafi'] },
    { title: 'Tujhe Dekha To Yeh Jaana Sanam', movie: 'Dilwale Dulhania Le Jayenge', year: 1995, musicDirector: 'Jatin-Lalit', singers: ['Kumar Sanu', 'Lata Mangeshkar'] },
    { title: 'Meri Duniya Hai Tujh Mein Kahin', movie: 'Khel Khel Mein', year: 1975, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Ae Meri Zohra Jabeen', movie: 'Waqt', year: 1965, musicDirector: 'Ravi', singers: ['Manna Dey'] },
    { title: 'Jo Wada Kiya Woh', movie: 'Taj Mahal', year: 1963, musicDirector: 'Roshan', singers: ['Mohammed Rafi', 'Lata Mangeshkar'] },
  ],
  'darbari-kanada': [
    { title: 'Jhanak Jhanak Tori', movie: 'Mughal-E-Azam', year: 1960, musicDirector: 'Naushad', singers: ['Bade Ghulam Ali Khan'] },
    { title: 'Tohe Piya Milan Ki', movie: 'Sanjog', year: 1971, musicDirector: 'Laxmikant-Pyarelal', singers: ['Lata Mangeshkar'] },
    { title: 'Mann Tadpat Hari', movie: 'Baiju Bawra', year: 1952, musicDirector: 'Naushad', singers: ['Mohammed Rafi'] },
    { title: 'Dil Ke Jharokhe Mein', movie: 'Brahmacharya', year: 1968, musicDirector: 'S.D. Burman', singers: ['Mohammed Rafi'] },
    { title: 'O Duniya Ke Rakhwale', movie: 'Baiju Bawra', year: 1952, musicDirector: 'Naushad', singers: ['Mohammed Rafi'] },
    { title: 'Tu Ganga Ki Mauj', movie: 'Baiju Bawra', year: 1952, musicDirector: 'Naushad', singers: ['Mohammed Rafi', 'Lata Mangeshkar'] },
    { title: 'Aadha Hai Chandrama', movie: 'Navrang', year: 1959, musicDirector: 'C. Ramchandra', singers: ['Asha Bhosle', 'Mahendra Kapoor'] },
  ],
  'bhairav': [
    { title: 'Bhaj Man Ram Charan', movie: 'Baiju Bawra', year: 1952, musicDirector: 'Naushad', singers: ['D.V. Paluskar'] },
    { title: 'Jyoti Kalash Chalke', movie: 'Bhabhi Ki Chudiyan', year: 1961, musicDirector: 'Sudhir Phadke', singers: ['Lata Mangeshkar'] },
    { title: 'Prabhu Tero Nam', movie: 'Hariyali Aur Raasta', year: 1962, musicDirector: 'Shankar-Jaikishan', singers: ['Mohammed Rafi'] },
    { title: 'Mohe Bhool Gaye Sanwariya', movie: 'Baiju Bawra', year: 1952, musicDirector: 'Naushad', singers: ['Lata Mangeshkar'] },
    { title: 'Tora Man Darpan Kehlaaye', movie: 'Kaajal', year: 1965, musicDirector: 'Ravi', singers: ['Mohammed Rafi'] },
    { title: 'Hai Apna Dil Toh Awara', movie: 'Solva Saal', year: 1958, musicDirector: 'S.D. Burman', singers: ['Hemant Kumar'] },
  ],
  'desh': [
    { title: 'Vande Mataram', movie: 'Anand Math', year: 1952, musicDirector: 'Hemant Kumar', singers: ['Lata Mangeshkar', 'Hemant Kumar'] },
    { title: 'Sare Jahan Se Accha', movie: 'Various', year: 1952, musicDirector: 'Various', singers: ['Various'] },
    { title: 'Rimjhim Gire Sawan', movie: 'Manzil', year: 1979, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar', 'Lata Mangeshkar'] },
    { title: 'Barsaat Ki Raat', movie: 'Barsaat Ki Raat', year: 1960, musicDirector: 'Roshan', singers: ['Mohammed Rafi'] },
    { title: 'Jab Pyar Kiya Toh Darna Kya', movie: 'Mughal-E-Azam', year: 1960, musicDirector: 'Naushad', singers: ['Lata Mangeshkar'] },
    { title: 'Aana Meri Jaan Meri Jaan', movie: 'Dillagi', year: 1949, musicDirector: 'Naushad', singers: ['Mohammed Rafi', 'Shamshad Begum'] },
    { title: 'Sawan Ka Mahina', movie: 'Milan', year: 1967, musicDirector: 'Laxmikant-Pyarelal', singers: ['Mukesh', 'Lata Mangeshkar'] },
  ],
  'bageshri': [
    { title: 'Kaun Aaya Mere Man Ke', movie: 'Chitralekha', year: 1964, musicDirector: 'Roshan', singers: ['Lata Mangeshkar'] },
    { title: 'Aapki Nazron Ne Samjha', movie: 'Anpadh', year: 1962, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
    { title: 'Tum Jo Mil Gaye Ho', movie: 'Hanste Zakhm', year: 1973, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar', 'Mohammed Rafi'] },
    { title: 'Parbat Ke Peechhe', movie: 'Mera Saaya', year: 1966, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
    { title: 'Woh Shaam Kuch Ajeeb', movie: 'Khamoshi', year: 1969, musicDirector: 'Hemant Kumar', singers: ['Kishore Kumar'] },
    { title: 'Bade Armaanon Se', movie: 'Lal Patthar', year: 1971, musicDirector: 'Laxmikant-Pyarelal', singers: ['Lata Mangeshkar'] },
  ],
  'todi': [
    { title: 'Mohe Panghat Pe Nandlal', movie: 'Mughal-E-Azam', year: 1960, musicDirector: 'Naushad', singers: ['Lata Mangeshkar'] },
    { title: 'Man Dole Mera Tan Dole', movie: 'Nagin', year: 1954, musicDirector: 'Hemant Kumar', singers: ['Lata Mangeshkar'] },
    { title: 'Tum Bin Jeevan', movie: 'Saathi', year: 1968, musicDirector: 'Laxmikant-Pyarelal', singers: ['Mohammed Rafi'] },
    { title: 'Piyu Bole', movie: 'Parineeta', year: 2005, musicDirector: 'Shantanu Moitra', singers: ['Sonu Nigam', 'Shreya Ghoshal'] },
  ],
  'kafi': [
    { title: 'Holi Aayi Re Kanhaai', movie: 'Mother India', year: 1957, musicDirector: 'Naushad', singers: ['Shamshad Begum', 'Others'] },
    { title: 'Aaja Ri Aaja', movie: 'Noorie', year: 1979, musicDirector: 'R.D. Burman', singers: ['Lata Mangeshkar'] },
    { title: 'Rang Barse', movie: 'Silsila', year: 1981, musicDirector: 'Shiv-Hari', singers: ['Amitabh Bachchan'] },
    { title: 'Sajan Re Jhooth Mat Bolo', movie: 'Teesri Kasam', year: 1966, musicDirector: 'Shankar-Jaikishan', singers: ['Mukesh'] },
    { title: 'Yeh Raat Bheegi Bheegi', movie: 'Chori Chori', year: 1956, musicDirector: 'Shankar-Jaikishan', singers: ['Lata Mangeshkar', 'Manna Dey'] },
  ],
  'bilawal': [
    { title: 'Itna Na Mujhse Tu Pyar Badha', movie: 'Chhaya', year: 1961, musicDirector: 'Salil Chowdhury', singers: ['Talat Mahmood'] },
    { title: 'Ae Dil Mujhe Bata De', movie: 'Bhai Bhai', year: 1956, musicDirector: 'O.P. Nayyar', singers: ['Geeta Dutt'] },
    { title: 'Zindagi Bhar Nahin Bhoolegi', movie: 'Barsaat Ki Raat', year: 1960, musicDirector: 'Roshan', singers: ['Rafi', 'Lata'] },
    { title: 'Naina Barse Rimjhim Rimjhim', movie: 'Woh Kaun Thi', year: 1964, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
  ],
  'khamaj': [
    { title: 'Jhoomta Mausam', movie: 'Sangam', year: 1964, musicDirector: 'Shankar-Jaikishan', singers: ['Lata Mangeshkar'] },
    { title: 'Ang Laga De Re', movie: 'Ram-Leela', year: 2013, musicDirector: 'Sanjay Leela Bhansali', singers: ['Arijit Singh', 'Shreya Ghoshal'] },
    { title: 'Mast Magan', movie: '2 States', year: 2014, musicDirector: 'Shankar-Ehsaan-Loy', singers: ['Arijit Singh'] },
    { title: 'Dheere Dheere Se', movie: 'Aashiqui', year: 1990, musicDirector: 'Nadeem-Shravan', singers: ['Kumar Sanu'] },
  ],
  'bhimpalasi': [
    { title: 'Kaise Kahunga', movie: 'Chashme Buddoor', year: 1981, musicDirector: 'Raj Kamal', singers: ['Roop Kumar Rathod'] },
    { title: 'Aaj Phir Tum Pe', movie: 'Guide', year: 1965, musicDirector: 'S.D. Burman', singers: ['Mohammed Rafi'] },
    { title: 'Aye Meri Zohrajabeen', movie: 'Waqt', year: 1965, musicDirector: 'Ravi', singers: ['Manna Dey'] },
    { title: 'Pag Ghungroo Bandh', movie: 'Namak Halaal', year: 1982, musicDirector: 'Bappi Lahiri', singers: ['Kishore Kumar'] },
    { title: 'Jaa Re Jaa Re Udja Re Panchhi', movie: 'Mayurpankh', year: 1954, musicDirector: 'Vasant Desai', singers: ['Lata Mangeshkar'] },
    { title: 'Mohe Lagaa Re', movie: 'Devdas', year: 2002, musicDirector: 'Ismail Darbar', singers: ['Kavita Krishnamurthy'] },
    { title: 'Piya Bina', movie: 'Alaap', year: 1977, musicDirector: 'Jaidev', singers: ['Yesudas'] },
  ],
  'kirwani': [
    { title: 'Tere Liye', movie: 'Veer-Zaara', year: 2004, musicDirector: 'Madan Mohan (posthumous)', singers: ['Lata Mangeshkar', 'Roop Kumar Rathod'] },
    { title: 'Surmayee Ankhiyon Mein', movie: 'Sadma', year: 1983, musicDirector: 'Ilaiyaraaja', singers: ['S. Janaki'] },
    { title: 'Ek Pyar Ka Naghma Hai', movie: 'Shor', year: 1972, musicDirector: 'Laxmikant-Pyarelal', singers: ['Mukesh', 'Lata Mangeshkar'] },
    { title: 'Mere Naina Sawan Bhadon', movie: 'Mehbooba', year: 1976, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar'] },
  ],
  'pahadi': [
    { title: 'Aa Chal Ke Tujhe', movie: 'Door Gagan Ki Chhaon Mein', year: 1964, musicDirector: 'Roshan', singers: ['Kishore Kumar'] },
    { title: 'Yeh Desh Hai Veer Jawaanon Ka', movie: 'Naya Daur', year: 1957, musicDirector: 'O.P. Nayyar', singers: ['Mohammed Rafi'] },
    { title: 'Mere Desh Ki Dharti', movie: 'Upkar', year: 1967, musicDirector: 'Kalyanji-Anandji', singers: ['Mahendra Kapoor'] },
    { title: 'Phool Tumhe Bheja Hai Khat Mein', movie: 'Saraswatichandra', year: 1968, musicDirector: 'Kalyanji-Anandji', singers: ['Mukesh', 'Lata Mangeshkar'] },
  ],
  'shivranjani': [
    { title: 'Rooth Na Jaana', movie: 'Sadma', year: 1983, musicDirector: 'Ilaiyaraaja', singers: ['S.P. Balasubrahmanyam'] },
    { title: 'Jane Do Mujhe', movie: 'Various', year: 1990, musicDirector: 'Various', singers: ['Various'] },
    { title: 'Ae Dil Hai Mushkil', movie: 'Ae Dil Hai Mushkil', year: 2016, musicDirector: 'Pritam', singers: ['Arijit Singh'] },
    { title: 'Teri Aankhon Ke Siwa', movie: 'Chirag', year: 1969, musicDirector: 'Madan Mohan', singers: ['Mohammed Rafi'] },
    { title: 'Jab Hum Jawan Honge', movie: 'Betaab', year: 1983, musicDirector: 'R.D. Burman', singers: ['Shabbir Kumar'] },
  ],
  'marwa': [
    { title: 'Mere Toh Giridhar Gopal', movie: 'Meera', year: 1979, musicDirector: 'Pandit Ravi Shankar', singers: ['Vani Jairam'] },
    { title: 'Phoolo Ka Taaron Ka', movie: 'Hare Rama Hare Krishna', year: 1971, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar'] },
  ],
  'malkauns': [
    { title: 'Aaj Socha Toh Aansu Bhar Aaye', movie: 'Hanste Zakhm', year: 1973, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
    { title: 'Maina Boli Re', movie: 'Goonj Uthi Shehnai', year: 1959, musicDirector: 'Vasant Desai', singers: ['Lata Mangeshkar'] },
    { title: 'Chandna Re Jaa', movie: 'Seema', year: 1955, musicDirector: 'Shankar-Jaikishan', singers: ['Lata Mangeshkar'] },
  ],
  'bhupali': [
    { title: 'Suno Sajna', movie: 'Dastak', year: 1970, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
    { title: 'Awaara Hoon', movie: 'Awara', year: 1951, musicDirector: 'Shankar-Jaikishan', singers: ['Mukesh'] },
    { title: 'Chanda Hai Tu', movie: 'Aradhana', year: 1969, musicDirector: 'S.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Maan Tarpat', movie: 'Baiju Bawra', year: 1952, musicDirector: 'Naushad', singers: ['Mohammed Rafi'] },
  ],
  'pilu': [
    { title: 'Chingari Koi Bhadke', movie: 'Amar Prem', year: 1971, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Kabhi Kabhi Mere Dil Mein', movie: 'Kabhi Kabhi', year: 1976, musicDirector: 'Khayyam', singers: ['Mukesh', 'Lata Mangeshkar'] },
    { title: 'Aane Wala Pal', movie: 'Golmaal', year: 1979, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar'] },
  ],
  'malhaar': [
    { title: 'Garjat Barsat Sawan Aayo Re', movie: 'Tansen', year: 1943, musicDirector: 'Khemchand Prakash', singers: ['K.L. Saigal'] },
    { title: 'Barkha Rani Zara Jamke Barso', movie: 'Do Dooni Char', year: 1968, musicDirector: 'Sachin Dev Burman', singers: ['Mohammed Rafi'] },
    { title: 'Bole Re Papihara', movie: 'Guddi', year: 1971, musicDirector: 'Vasant Desai', singers: ['Vani Jairam'] },
  ],
  'kedar': [
    { title: 'Raghupati Raghav Raja Ram', movie: 'Various', year: 1940, musicDirector: 'Various', singers: ['Various'] },
    { title: 'Koi Hamdam Na Raha', movie: 'Jhoomka', year: 1961, musicDirector: 'Ravi', singers: ['Mohammed Rafi'] },
  ],
  'durga': [
    { title: 'Woh Chand Khila', movie: 'Anari', year: 1959, musicDirector: 'Shankar-Jaikishan', singers: ['Mukesh', 'Lata Mangeshkar'] },
    { title: 'Aaj Ki Raat', movie: 'Ram Aur Shyam', year: 1967, musicDirector: 'Naushad', singers: ['Mohammed Rafi'] },
  ],
  'hansadhwani': [
    { title: 'Vandana', movie: 'Various', year: 1960, musicDirector: 'Various', singers: ['Various'] },
    { title: 'Vaishnav Jana To', movie: 'Various', year: 1940, musicDirector: 'Various', singers: ['Various'] },
  ],
  'tilak-kamod': [
    { title: 'Badi Der Bhai', movie: 'Waqt', year: 1965, musicDirector: 'Ravi', singers: ['Mohammed Rafi', 'Asha Bhosle'] },
    { title: 'Phir Aai Bahaar', movie: 'Qaidi', year: 1984, musicDirector: 'Laxmikant-Pyarelal', singers: ['Mohammed Rafi'] },
  ],
  'jaunpuri': [
    { title: 'Mujhe Dard-E-Dil', movie: 'Various', year: 1960, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
    { title: 'Seene Mein Sulagte Hain Armaan', movie: 'Sone Ki Chidiya', year: 1958, musicDirector: 'O.P. Nayyar', singers: ['Mohammed Rafi'] },
  ],
  'lalit': [
    { title: 'Nain Hain To Nain', movie: 'Rani Roopmati', year: 1959, musicDirector: 'S.D. Burman', singers: ['Lata Mangeshkar'] },
    { title: 'Kahan Se Aaye Badaraa', movie: 'Swami', year: 1977, musicDirector: 'Rajesh Roshan', singers: ['Lata Mangeshkar'] },
  ],
  'purvi': [
    { title: 'Mere Piya Gaye Rangoon', movie: 'Patanga', year: 1949, musicDirector: 'C. Ramchandra', singers: ['Shamshad Begum'] },
  ],
  'madhuvanti': [
    { title: 'Teri Umeed Tera Intezaar', movie: 'Deewana', year: 1992, musicDirector: 'Nadeem-Shravan', singers: ['Kumar Sanu', 'Kavita Krishnamurthy'] },
    { title: 'Kuch Kuch Hota Hai', movie: 'Kuch Kuch Hota Hai', year: 1998, musicDirector: 'Jatin-Lalit', singers: ['Udit Narayan', 'Kavita Krishnamurthy'] },
  ],
  'jaijaiwanti': [
    { title: 'Jooma Chumma De De', movie: 'Hum', year: 1991, musicDirector: 'Laxmikant-Pyarelal', singers: ['Amit Kumar'] },
    { title: 'Woh Bhoolein Ya Yaad Karein', movie: 'Shola Aur Shabnam', year: 1961, musicDirector: 'Ravi', singers: ['Mohammed Rafi'] },
  ],
  'charukesi': [
    { title: 'Tum Se Milke', movie: 'Parinda', year: 1989, musicDirector: 'R.D. Burman', singers: ['Asha Bhosle'] },
    { title: 'Mera Joota Hai Japani', movie: 'Shree 420', year: 1955, musicDirector: 'Shankar-Jaikishan', singers: ['Mukesh'] },
  ],
  'tilang': [
    { title: 'Hari Om Tatsat', movie: 'Various', year: 1960, musicDirector: 'Various', singers: ['Various'] },
    { title: 'Man Bhavna', movie: 'Various', year: 1960, musicDirector: 'Various', singers: ['Various'] },
  ],
  'hamir': [
    { title: 'O Mere Sona Re', movie: 'Teesri Manzil', year: 1966, musicDirector: 'R.D. Burman', singers: ['Mohammed Rafi'] },
    { title: 'Kahin Door Jab Din Dhal Jaaye', movie: 'Anand', year: 1971, musicDirector: 'Salil Chowdhury', singers: ['Mukesh'] },
  ],
  'rageshri': [
    { title: 'Mere Naina Sawan Bhadon', movie: 'Mehbooba', year: 1976, musicDirector: 'R.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Aaja Tujhko Pukare', movie: 'Neel Kamal', year: 1968, musicDirector: 'Ravi', singers: ['Mohammed Rafi'] },
    { title: 'Tujhe Jeevan Ki Dor Se', movie: 'Asli Naqli', year: 1962, musicDirector: 'Shankar-Jaikishan', singers: ['Lata Mangeshkar'] },
    { title: 'Aap Ke Haseen Rukh Pe', movie: 'Baharen Phir Bhi Aayengi', year: 1966, musicDirector: 'O.P. Nayyar', singers: ['Mohammed Rafi'] },
  ],
  'sindhi-bhairavi': [
    { title: 'Aaja Sanam Madhur Chandni Mein', movie: 'Chori Chori', year: 1956, musicDirector: 'Shankar-Jaikishan', singers: ['Lata Mangeshkar', 'Manna Dey'] },
    { title: 'Pyar Hua Iqraar Hua', movie: 'Shree 420', year: 1955, musicDirector: 'Shankar-Jaikishan', singers: ['Lata Mangeshkar', 'Manna Dey'] },
  ],

  // ── EXPANDED SONGS ──────────────────────────────────────────────────────
  'bihag': [
    { title: 'Chhod Do Aanchal', movie: 'Paying Guest', year: 1957, musicDirector: 'S.D. Burman', singers: ['Hemant Kumar', 'Geeta Dutt'] },
    { title: 'Baharon Phool Barsao', movie: 'Suraj', year: 1966, musicDirector: 'Shankar-Jaikishan', singers: ['Mohammed Rafi'] },
    { title: 'Tum Bin Jaoon Kahan', movie: 'Pyar Ka Mausam', year: 1969, musicDirector: 'S.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Teri Pyari Pyari Surat Ko', movie: 'Sasural', year: 1961, musicDirector: 'Shankar-Jaikishan', singers: ['Mohammed Rafi'] },
  ],
  'adana': [
    { title: 'Aaj Ki Raat Mere Dil Ki', movie: 'Ram Aur Shyam', year: 1967, musicDirector: 'Naushad', singers: ['Mohammed Rafi'] },
    { title: 'Tasveer Teri Dil Mein', movie: 'Maya', year: 1961, musicDirector: 'Salil Chowdhury', singers: ['Talat Mahmood'] },
  ],
  'ahir-bhairav': [
    { title: 'Piya Bawri', movie: 'Khoobsurat', year: 1980, musicDirector: 'R.D. Burman', singers: ['Asha Bhosle'] },
    { title: 'Aaye Bahar Bane Na Bane', movie: 'Shagird', year: 1967, musicDirector: 'Laxmikant-Pyarelal', singers: ['Mohammed Rafi'] },
    { title: 'Woh Subah Kabhi To Aayegi', movie: 'Phir Subah Hogi', year: 1958, musicDirector: 'Khayyam', singers: ['Mohammed Rafi', 'Asha Bhosle'] },
  ],
  'alhaiya-bilawal': [
    { title: 'Albela Sajan Aayo Re', movie: 'Hum Dil De Chuke Sanam', year: 1999, musicDirector: 'Ismail Darbar', singers: ['Kavita Krishnamurthy'] },
    { title: 'Mausam Hai Aashiqana', movie: 'Prem Pujari', year: 1970, musicDirector: 'S.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Ek Radha Ek Meera', movie: 'Ram Teri Ganga Maili', year: 1985, musicDirector: 'Ravindra Jain', singers: ['Lata Mangeshkar'] },
  ],
  'bahar': [
    { title: 'Aayi Bahaar Jhoom Ke', movie: 'Talash', year: 1969, musicDirector: 'S.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'O Sajana Barkha Bahar Aayi', movie: 'Parakh', year: 1960, musicDirector: 'Salil Chowdhury', singers: ['Lata Mangeshkar'] },
  ],
  'basant-bahar': [
    { title: 'Ketaki Gulab Juhi', movie: 'Basant Bahar', year: 1956, musicDirector: 'Shankar-Jaikishan', singers: ['Manna Dey'] },
    { title: 'Sur Na Saje', movie: 'Basant Bahar', year: 1956, musicDirector: 'Shankar-Jaikishan', singers: ['Manna Dey', 'Bhimsen Joshi'] },
    { title: 'Nain Mile Chain Kahan', movie: 'Basant Bahar', year: 1956, musicDirector: 'Shankar-Jaikishan', singers: ['Lata Mangeshkar', 'Manna Dey'] },
  ],
  'jog': [
    { title: 'Beqaraar Karke Hame', movie: 'Bees Saal Baad', year: 1962, musicDirector: 'Hemant Kumar', singers: ['Lata Mangeshkar'] },
    { title: 'Hum Tere Bin Kahin Reh Nahin Sakte', movie: 'Bees Saal Baad', year: 1962, musicDirector: 'Hemant Kumar', singers: ['Hemant Kumar'] },
    { title: 'Ek Akela Is Sheher Mein', movie: 'Gharaonda', year: 1977, musicDirector: 'Jaidev', singers: ['Bhupinder Singh'] },
  ],
  'mand': [
    { title: 'Kesariya Balam', movie: 'Lekin', year: 1990, musicDirector: 'Hridaynath Mangeshkar', singers: ['Lata Mangeshkar'] },
    { title: 'Padharo Mhare Desh', movie: 'Various', year: 1960, musicDirector: 'Various', singers: ['Various'] },
    { title: 'Shekhar Pichhahe Aawo', movie: 'Rajputani', year: 1946, musicDirector: 'Naushad', singers: ['Various'] },
  ],
  'puria': [
    { title: 'Raat Bhi Hai Kuch Bheegi Bheegi', movie: 'Anuraag', year: 1972, musicDirector: 'S.D. Burman', singers: ['Kishore Kumar'] },
    { title: 'Bairagan', movie: 'Various', year: 1965, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
  ],
  'puriya-dhanashri': [
    { title: 'Badi Mushkil Hai', movie: 'Lakhon Mein Ek', year: 1971, musicDirector: 'Madan Mohan', singers: ['Lata Mangeshkar'] },
    { title: 'Mohe Laag Rahi', movie: 'Chitralekha', year: 1964, musicDirector: 'Roshan', singers: ['Lata Mangeshkar'] },
    { title: 'Aaja Re Pardesi', movie: 'Madhumati', year: 1958, musicDirector: 'Salil Chowdhury', singers: ['Lata Mangeshkar'] },
  ],
  'hem-kalyan': [
    { title: 'Tere Liye Palkon Ki', movie: 'Woh Kaagaz Ki Kashti', year: 1975, musicDirector: 'Various', singers: ['Lata Mangeshkar'] },
  ],
  'hemant': [
    { title: 'Jaane Kahan Gaye Woh Din', movie: 'Mera Naam Joker', year: 1970, musicDirector: 'Shankar-Jaikishan', singers: ['Mukesh'] },
    { title: 'Ae Dil Hai Mushkil Jeena Yahan', movie: 'C.I.D.', year: 1956, musicDirector: 'O.P. Nayyar', singers: ['Mohammed Rafi', 'Geeta Dutt'] },
    { title: 'Tere Ghar Ke Samne', movie: 'Tere Ghar Ke Samne', year: 1963, musicDirector: 'S.D. Burman', singers: ['Mohammed Rafi'] },
  ],
  'chandra-kauns': [
    { title: 'Yeh Dil Aur Unki', movie: 'Ustaadon Ke Ustaad', year: 1963, musicDirector: 'O.P. Nayyar', singers: ['Mohammed Rafi'] },
    { title: 'Zara Sa Jhoom Loon Main', movie: 'Dilwale Dulhania Le Jayenge', year: 1995, musicDirector: 'Jatin-Lalit', singers: ['Udit Narayan', 'Lata Mangeshkar'] },
  ],
  'desi': [
    { title: 'Koi Sone Ki Nagri', movie: 'Naag Panchami', year: 1972, musicDirector: 'Laxmikant-Pyarelal', singers: ['Lata Mangeshkar'] },
    { title: 'O Re Manjhi', movie: 'Do Dooni Char', year: 1968, musicDirector: 'S.D. Burman', singers: ['Hemant Kumar'] },
  ],
  'gorakh-kalyan': [
    { title: 'Kabhi Kabhi Aditi', movie: 'Jaane Tu Ya Jaane Na', year: 2008, musicDirector: 'A.R. Rahman', singers: ['Rashid Ali'] },
    { title: 'In Ankhon Ki Masti', movie: 'Umrao Jaan', year: 1981, musicDirector: 'Khayyam', singers: ['Asha Bhosle'] },
  ],
  'sindhu-bhairavi': [
    { title: 'Bahut Pyar Karte Hain Tumko Sanam', movie: 'Saajan', year: 1991, musicDirector: 'Nadeem-Shravan', singers: ['S.P. Balasubrahmanyam'] },
    { title: 'O Saathi Re', movie: 'Muqaddar Ka Sikandar', year: 1978, musicDirector: 'Kalyanji-Anandji', singers: ['Kishore Kumar'] },
  ],
  'desh-malhaar': [
    { title: 'Rimjhim Ke Tarane Leke', movie: 'Chhote Nawab', year: 1961, musicDirector: 'R.D. Burman', singers: ['Mohammed Rafi'] },
    { title: 'Barse Badra Sawan Ke', movie: 'Chotti Si Baat', year: 1975, musicDirector: 'Salil Chowdhury', singers: ['Lata Mangeshkar'] },
  ],
  'nat-malhar': [
    { title: 'Garjat Barsat Bheegi Rat Aayi Re', movie: 'Tansen', year: 1943, musicDirector: 'Khemchand Prakash', singers: ['K.L. Saigal'] },
  ],
}
