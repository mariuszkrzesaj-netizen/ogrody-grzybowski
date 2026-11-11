import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Koszenie trawników', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nowe zapytanie z wizytówki od: ${formData.name}`);
    const body = encodeURIComponent(`Imię i nazwisko: ${formData.name}\nTelefon: ${formData.phone}\nWybrana usługa: ${formData.service}\n\nWiadomość:\n${formData.message}`);
    
    window.location.href = `mailto:e-dogreenserwis@o2.pl?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', service: 'Koszenie trawników', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#06180e] text-[#f4f4f4] font-sans antialiased selection:bg-[#d4af37] selection:text-black">
      
      {/* NAGŁÓWEK / NAWIGACJA */}
      <header className="sticky top-0 z-50 bg-[#06180e]/95 border-b border-[#d4af37]/30 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a7323] flex items-center justify-center text-[#06180e] font-bold text-xl shadow-lg shadow-[#d4af37]/20">
              🌿
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wider text-[#d4af37]">EDWARD GRZYBOWSKI</h1>
              <p className="text-xs text-[#a3b899] tracking-widest uppercase">Usługi Ogrodnicze i Porządkowe</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'home' ? 'bg-[#d4af37] text-[#06180e] shadow-lg shadow-[#d4af37]/30 font-semibold' : 'bg-[#0f2e1a] text-[#d1ded0] hover:bg-[#153b23]'}`}
            >
              Strona Główna
            </button>
            <button 
              onClick={() => setActiveTab('offer')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'offer' ? 'bg-[#d4af37] text-[#06180e] shadow-lg shadow-[#d4af37]/30 font-semibold' : 'bg-[#0f2e1a] text-[#d1ded0] hover:bg-[#153b23]'}`}
            >
              Oferta
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'about' ? 'bg-[#d4af37] text-[#06180e] shadow-lg shadow-[#d4af37]/30 font-semibold' : 'bg-[#0f2e1a] text-[#d1ded0] hover:bg-[#153b23]'}`}
            >
              O Mnie
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'contact' ? 'bg-[#d4af37] text-[#06180e] shadow-lg shadow-[#d4af37]/30 font-semibold' : 'bg-[#0f2e1a] text-[#d1ded0] hover:bg-[#153b23]'}`}
            >
              Kontakt
            </button>
          </nav>
        </div>
      </header>

      {/* TREŚĆ GŁÓWNA */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* ZAKŁADKA: STRONA GŁÓWNA */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* HERO SECTION */}
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#0f2e1a] shadow-2xl">
              <div className="absolute inset-0 z-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop" 
                  alt="Zadbany ogród" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#06180e] via-[#06180e]/90 to-transparent z-10"></div>
              
              <div className="relative z-20 p-8 md:p-16 max-w-2xl space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold tracking-wider uppercase">
                  Siechnice, Wrocław i Okolice
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Twój ogród w <span className="text-[#d4af37]">dobrych rękach!</span>
                </h2>
                <p className="text-[#d1ded0] text-base md:text-lg">
                  Profesjonalne usługi ogrodnicze i porządkowe. Rzetelność, terminowość i podejście typu „robię jak u siebie!”.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="bg-[#d4af37] hover:bg-[#c29d30] text-[#06180e] font-bold px-8 py-3.5 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
                  >
                    Darmowa Wycena
                  </button>
                  <button 
                    onClick={() => setActiveTab('offer')}
                    className="bg-[#0f2e1a]/80 hover:bg-[#153b23] border border-[#d4af37]/50 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
                  >
                    Zobacz Usługi
                  </button>
                </div>
              </div>
            </div>

            {/* DLACZEGO MY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0f2e1a]/60 border border-[#d4af37]/20 p-6 rounded-2xl shadow-xl space-y-3">
                <div className="text-3xl">⏱️</div>
                <h3 className="text-xl font-bold text-[#d4af37]">Szybkie Terminy</h3>
                <p className="text-[#a3b899] text-sm">Szybka reakcja na zgłoszenie i sprawne wykonanie zleconych prac ogrodowych.</p>
              </div>
              <div className="bg-[#0f2e1a]/60 border border-[#d4af37]/20 p-6 rounded-2xl shadow-xl space-y-3">
                <div className="text-3xl">🛠️</div>
                <h3 className="text-xl font-bold text-[#d4af37]">Sprzęt Profesjonalny</h3>
                <p className="text-[#a3b899] text-sm">Pracujemy na wysokiej klasy niezawodnym sprzęcie spalinowym i akumulatorowym.</p>
              </div>
              <div className="bg-[#0f2e1a]/60 border border-[#d4af37]/20 p-6 rounded-2xl shadow-xl space-y-3">
                <div className="text-3xl">🤝</div>
                <h3 className="text-xl font-bold text-[#d4af37]">Uczciwe Podejście</h3>
                <p className="text-[#a3b899] text-sm">Darmowa wycena na miejscu u klienta i dokładność w każdym detalu – robię jak u siebie!</p>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: OFERTA */}
        {activeTab === 'offer' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold text-[#d4af37]">Kompleksowa Oferta Usług</h2>
              <p className="text-[#a3b899]">Zadbaj o swój zielony zakątek przez cały rok z profesjonalną pomocą.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Karta 1 */}
              <div className="bg-[#0f2e1a] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-[#06180e]">
                  <img src="https://images.unsplash.com/photo-1592417817098-8f3d6eb26b6e?q=80&w=800&auto=format&fit=crop" alt="Koszenie trawników" className="w-full h-full object-cover block" />
                  <span className="absolute top-3 right-3 bg-[#06180e]/90 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">🌿 Podstawa</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-[#d4af37]">🌱</span> Koszenie i Wertykulacja
                    </h3>
                    <p className="text-[#a3b899] text-sm mt-2">
                      Regularne koszenie trawników o małych i dużych powierzchniach. Wertykulacja i aeracja poprawiające napowietrzenie i gęstość darni.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#06180e] font-semibold py-2.5 rounded-xl border border-[#d4af37]/40 transition-all text-sm">
                    Zapytaj o wycenę
                  </button>
                </div>
              </div>

              {/* Karta 2 */}
              <div className="bg-[#0f2e1a] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-[#06180e]">
                  <img src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop" alt="Przycinanie żywopłotów" className="w-full h-full object-cover block" />
                  <span className="absolute top-3 right-3 bg-[#06180e]/90 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">✂️ Pielęgnacja</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-[#d4af37]">✂️</span> Przycinanie Drzew i Krzewów
                    </h3>
                    <p className="text-[#a3b899] text-sm mt-2">
                      Formowanie i cięcie żywopłotów, krzewów ozdobnych oraz prześwietlanie drzewek owocowych. Dbanie o estetyczny i zdrowy wygląd roślin.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#06180e] font-semibold py-2.5 rounded-xl border border-[#d4af37]/40 transition-all text-sm">
                    Zapytaj o wycenę
                  </button>
                </div>
              </div>

              {/* Karta 3 */}
              <div className="bg-[#0f2e1a] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-[#06180e]">
                  <img src="https://images.unsplash.com/photo-1584467735818-f2f9f8c8d84d?q=80&w=800&auto=format&fit=crop" alt="Prace porządkowe" className="w-full h-full object-cover block" />
                  <span className="absolute top-3 right-3 bg-[#06180e]/90 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">🍂 Sezonowe</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-[#d4af37]">🍂</span> Prace Porządkowe
                    </h3>
                    <p className="text-[#a3b899] text-sm mt-2">
                      Grabienie liści, sprzątanie działek po zimie lub okresie letnim, wywóz odpadów zielonych oraz przygotowanie ogrodów do sezonu zimowego.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#06180e] font-semibold py-2.5 rounded-xl border border-[#d4af37]/40 transition-all text-sm">
                    Zapytaj o wycenę
                  </button>
                </div>
              </div>

              {/* Karta 4 */}
              <div className="bg-[#0f2e1a] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-[#06180e]">
                  <img src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800&auto=format&fit=crop" alt="Plewienie i karczowanie" className="w-full h-full object-cover block" />
                  <span className="absolute top-3 right-3 bg-[#06180e]/90 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">🌿 Gleba</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-[#d4af37]">🪵</span> Karczowanie i Plewienie
                    </h3>
                    <p className="text-[#a3b899] text-sm mt-2">
                      Usuwanie uciążliwych chwastów, karczowanie zaniedbanych fragmentów działek, plewienie rabat kwiatowych oraz nawożenie ziemi.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#06180e] font-semibold py-2.5 rounded-xl border border-[#d4af37]/40 transition-all text-sm">
                    Zapytaj o wycenę
                  </button>
                </div>
              </div>

              {/* Karta 5 */}
              <div className="bg-[#0f2e1a] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-[#06180e]">
                  <img src="https://images.unsplash.com/photo-1599685315840-f1d7a364bc9d?q=80&w=800&auto=format&fit=crop" alt="Pielęgnacja całoroczna" className="w-full h-full object-cover block" />
                  <span className="absolute top-3 right-3 bg-[#06180e]/90 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">🌟 Kompleks</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-[#d4af37]">🏡</span> Całoroczna Pielęgnacja
                    </h3>
                    <p className="text-[#a3b899] text-sm mt-2">
                      Stała opieka nad ogrodem prywatnym lub firmowym. Regularne wizyty dostosowane do potrzeb Twoich roślin i trawnika przez cały rok.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#06180e] font-semibold py-2.5 rounded-xl border border-[#d4af37]/40 transition-all text-sm">
                    Zapytaj o wycenę
                  </button>
                </div>
              </div>

              {/* Karta 6 */}
              <div className="bg-[#0f2e1a] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-[#06180e]">
                  <img src="https://images.unsplash.com/photo-1527845583681-807e153cb824?q=80&w=800&auto=format&fit=crop" alt="Czyszczenie tarasów i ogrodzeń" className="w-full h-full object-cover block" />
                  <span className="absolute top-3 right-3 bg-[#06180e]/90 px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] border border-[#d4af37]/30">✨ Czystość</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="text-[#d4af37]">✨</span> Mycie Tarasów i Podjazdów
                    </h3>
                    <p className="text-[#a3b899] text-sm mt-2">
                      Profesjonalne czyszczenie i mycie ciśnieniowe tarasów, ogrodzeń oraz podjazdów z zabrudzeń atmosferycznych i mchu.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#06180e] font-semibold py-2.5 rounded-xl border border-[#d4af37]/40 transition-all text-sm">
                    Zapytaj o wycenę
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ZAKŁADKA: O MNIE */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8 bg-[#0f2e1a] border border-[#d4af37]/30 p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-xl bg-[#06180e]">
                  <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop" alt="Edward Grzybowski" className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase">O fachowcu</span>
                <h2 className="text-3xl font-bold text-white">Edward Grzybowski</h2>
                <p className="text-[#d1ded0] leading-relaxed">
                  Od lat zajmuję się profesjonalną pielęgnacją terenów zielonych. Moje podejście opiera się na prostych zasadach: <strong className="text-[#d4af37]">robimy jak u siebie</strong>, dbamy o terminowość i nie zostawiamy po sobie bałaganu.
                </p>
                <p className="text-[#a3b899] text-sm">
                  Działam głównie na terenie Siechnic, Wrocławia i okolicznych miejscowości. Posiadam profesjonalny sprzęt, który pozwala mi sprawnie realizować zarówno małe zadania przydomowe, jak i większe zlecenia porządkowe.
                </p>
                <div className="pt-2 flex gap-4">
                  <div className="bg-[#06180e] px-4 py-3 rounded-xl border border-[#d4af37]/20">
                    <span className="block text-xl font-bold text-[#d4af37]">100%</span>
                    <span className="text-xs text-[#a3b899]">Zaangażowania</span>
                  </div>
                  <div className="bg-[#06180e] px-4 py-3 rounded-xl border border-[#d4af37]/20">
                    <span className="block text-xl font-bold text-[#d4af37]">Darmowa</span>
                    <span className="text-xs text-[#a3b899]">Wycena na miejscu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ZAKŁADKA: KONTAKT */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0f2e1a] border border-[#d4af37]/30 p-8 rounded-3xl shadow-2xl space-y-6">
              <div>
                <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase">Bądźmy w kontakcie</span>
                <h2 className="text-3xl font-bold text-white mt-1">Zadzwoń lub napisz</h2>
                <p className="text-[#a3b899] text-sm mt-2">Masz pytania? Chcesz umówić wycenę ogrodu? Skontaktuj się bezpośrednio:</p>
              </div>

              <div className="space-y-4">
                <a href="tel:505505740" className="flex items-center gap-4 bg-[#06180e] p-4 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xl group-hover:scale-110 transition-transform">📞</div>
                  <div>
                    <span className="text-xs text-[#a3b899] block">Telefon główny</span>
                    <span className="text-lg font-bold text-white tracking-wider">505 505 740</span>
                  </div>
                </a>

                <a href="tel:571212525" className="flex items-center gap-4 bg-[#06180e] p-4 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xl group-hover:scale-110 transition-transform">📱</div>
                  <div>
                    <span className="text-xs text-[#a3b899] block">Telefon pomocniczy</span>
                    <span className="text-lg font-bold text-white tracking-wider">571 212 525</span>
                  </div>
                </a>

                <a href="mailto:e-dogreenserwis@o2.pl" className="flex items-center gap-4 bg-[#06180e] p-4 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xl group-hover:scale-110 transition-transform">✉️</div>
                  <div>
                    <span className="text-xs text-[#a3b899] block">Adres e-mail</span>
                    <span className="text-sm font-semibold text-white">e-dogreenserwis@o2.pl</span>
                  </div>
                </a>
              </div>

              <div className="text-xs text-[#a3b899] pt-2">
                📍 Obszar działania: <strong className="text-white">Siechnice, Wrocław i okolice</strong>
              </div>
            </div>

            <div className="bg-[#0f2e1a] border border-[#d4af37]/30 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Szybkie Zapytanie</h3>
              {submitted ? (
                <div className="bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] p-4 rounded-xl text-center font-medium">
                  Dziękujemy! Otwieramy program pocztowy, aby wysłać wiadomość na adres e-dogreenserwis@o2.pl.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-[#a3b899] mb-1">Twoje Imię</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#06180e] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                      placeholder="np. Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#a3b899] mb-1">Numer Telefonu</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#06180e] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                      placeholder="np. 500 600 700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#a3b899] mb-1">Wybierz usługę</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-[#06180e] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                    >
                      <option>Koszenie trawników</option>
                      <option>Przycinanie krzewów i żywopłotów</option>
                      <option>Prace porządkowe i grabienie</option>
                      <option>Karczowanie i plewienie</option>
                      <option>Całoroczna pielęgnacja</option>
                      <option>Mycie tarasów i podjazdów</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#a3b899] mb-1">Treść wiadomości / Opis</label>
                    <textarea 
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-[#06180e] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37]"
                      placeholder="Krótko opisz co jest do zrobienia..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#d4af37] hover:bg-[#c29d30] text-[#06180e] font-bold py-3.5 rounded-xl transition-all shadow-lg">
                    Wyślij Zapytanie (E-mail)
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* STOPKA */}
      <footer className="mt-20 border-t border-[#d4af37]/20 bg-[#06180e] py-8 text-center text-xs text-[#a3b899] space-y-2">
        <p>© {new Date().getFullYear()} Edward Grzybowski – Usługi Ogrodnicze i Porządkowe.</p>
        <p className="tracking-widest uppercase text-[#d4af37]/80">PROJEKT: SOMIKO DIGITAL STUDIO</p>
      </footer>

    </div>
  );
}