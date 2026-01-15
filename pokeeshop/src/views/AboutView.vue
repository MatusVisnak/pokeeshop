<template>
  <div class="about-view">
    <div class="container">
      <h1 class="page-title">ℹ️ O nás</h1>

      <div class="about-section">
        <div class="section-icon">🎮</div>
        <h2>Kto sme?</h2>
        <p>Sme nadšenci Pokémon kariet a produktov s viac ako 5-ročnými skúsenosťami v tomto odvetví. Náš obchod ponúka najširší výber Pokémon TCG produktov na Slovensku.</p>
        <p>Začali sme v roku 2020 ako malý rodinný obchod a dnes sme jedným z najväčších predajcov Pokémon produktov v regióne. Naša misia je priniesť radosť z Pokémon sveta každému fanúšikovi.</p>
      </div>

      <div class="about-section">
        <div class="section-icon">⭐</div>
        <h2>Prečo si vybrať nás?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">✅</div>
            <h3>Originálne produkty</h3>
            <p>Všetky produkty sú originálne a pochádzajú priamo od oficiálnych distribútorov.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🚚</div>
            <h3>Rýchle dodanie</h3>
            <p>Dodanie do 3 pracovných dní po celom Slovensku.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Najlepšie ceny</h3>
            <p>Ponúkame konkurencieschopné ceny a pravidelné zľavy.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3>Zákaznícka podpora</h3>
            <p>Sme tu pre vás 7 dní v týždni.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎁</div>
            <h3>Vernostný program</h3>
            <p>Stáli zákazníci získavajú bonusy a špeciálne ponuky.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Vrátenie tovaru</h3>
            <p>Možnosť vrátenia do 14 dní bez udania důvodu.</p>
          </div>
        </div>
      </div>

      <div class="about-section">
        <div class="section-icon">📞</div>
        <h2>Kontakt</h2>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div>
              <strong>Email:</strong>
              <p>info@pokemonshop.sk</p>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <div>
              <strong>Telefón:</strong>
              <p>+421 900 123 456</p>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div>
              <strong>Adresa:</strong>
              <p>Hlavná 123, 811 01 Bratislava, Slovensko</p>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">🕐</span>
            <div>
              <strong>Otváracie hodiny:</strong>
              <p>Pondelok - Piatok: 9:00 - 18:00</p>
              <p>Sobota: 10:00 - 16:00</p>
              <p>Nedeľa: Zatvorené</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section team-section">
        <div class="section-icon">👥</div>
        <h2>Náš tím</h2>
        <p>Za našim úspechom stojí skvelý tím ľudí, ktorí milujú Pokémon rovnako ako vy. Od skladníkov po zákaznícku podporu - každý člen nášho tímu sa snaží poskytnúť vám tú najlepšiu skúsenosť.</p>
        <div class="team-values">
          <div class="value-item">
            <strong>🎯 Naša vízia:</strong>
            <p>Byť jedničkou v Pokémon produktoch na Slovensku</p>
          </div>
          <div class="value-item">
            <strong>💪 Naše hodnoty:</strong>
            <p>Originalita, rýchlosť, spoľahlivosť a zákaznícky servis</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h2>Pripravení začať?</h2>
        <p>Prezrite si našu ponuku a pridajte sa k tisíckam spokojných zákazníkov!</p>
        <RouterLink to="/products" class="cta-btn">
          Preskúmať produkty →
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-view {
  padding: 40px 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;
}

.about-section {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.section-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
}

.about-section h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.about-section p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  padding: 25px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.feature-card h3 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.contact-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
}

.contact-icon {
  font-size: 2rem;
}

.contact-item strong {
  display: block;
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.contact-item p {
  margin: 0;
  color: #666;
  font-size: 1rem;
}

.team-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.team-section h2 {
  color: white;
}

.team-section p {
  color: rgba(255,255,255,0.95);
}

.team-values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.value-item {
  padding: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.value-item strong {
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.value-item p {
  margin: 0;
  color: rgba(255,255,255,0.9);
}

.cta-section {
  background: linear-gradient(135deg, #ffcb05 0%, #f7b500 100%);
  padding: 60px 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-section h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: bold;
}

.cta-section p {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 30px;
}

.cta-btn {
  display: inline-block;
  padding: 18px 50px;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.cta-btn:hover {
  background: #1a252f;
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .about-section {
    padding: 25px;
  }
  
  .about-section h2 {
    font-size: 1.5rem;
  }
  
  .features-grid,
  .contact-info,
  .team-values {
    grid-template-columns: 1fr;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
}
</style>