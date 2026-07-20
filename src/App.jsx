import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import bentoTonnankotsu from './assets/bento_tonnankotsu.png';
import bentoDaily from './assets/bento_daily.png';
import tonnankotsuReal from './assets/tonnankotsu_real.png';
import bentoReal1 from './assets/bento_real1.jpg';
import bentoReal2 from './assets/bento_real2.jpg';
import nishimeReal from './assets/nishime_real.jpg';
import inariReal from './assets/inari_real.jpg';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    menu: '豚軟骨弁当',
    quantity: 1,
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <header>
        <div className="container header-container">
          <a href="#" className="logo-link">
            <img src={logo} alt="華ちゃんお弁当" className="logo-img" />
          </a>
          
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="メニューを開く">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={menuOpen ? 'nav-active' : ''}>
            <ul>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>お店の紹介</a></li>
              <li><a href="#hors-doeuvre" onClick={() => setMenuOpen(false)}>オードブル・大量注文</a></li>
              <li><a href="#online-shop" onClick={() => setMenuOpen(false)}>全国通販</a></li>
              <li><a href="#vending" onClick={() => setMenuOpen(false)}>自販機情報</a></li>
              <li><a href="#access" onClick={() => setMenuOpen(false)}>店舗情報</a></li>
              <li><a href="#instagram" onClick={() => setMenuOpen(false)}>Instagram</a></li>
              {/* <li><a href="#order" onClick={() => setMenuOpen(false)}>簡単予約</a></li> */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero animate-fade-in">
        <div className="container hero-content">
          <img src={logo} alt="華ちゃんお弁当 ロゴ" className="hero-logo-large" />
          <h1 className="hero-title">
            まごころ込めた手作りの味を、<br />
            ボリュームたっぷりお届け！
          </h1>
          <p className="hero-desc">
            宮崎県都城市の「華ちゃんお弁当」です。<br />
            名物のいなり寿司やトロトロ豚軟骨、ボリュームたっぷりのお弁当まで、お腹いっぱいになれる美味しい手作り料理をお届けしています。
          </p>
          <div className="cta-group">
            <a href="tel:080-1711-3429" className="btn btn-primary">
              📞 お電話で注文する
            </a>
            {/* <a href="#order" className="btn btn-outline">
              📅 Web予約（店頭受取）
            </a> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">お店のこだわり</h2>
          <p className="section-desc">
            「お腹いっぱい食べて元気に！」をモットーに、<br />
            毎日心を込めて手作りしています。
          </p>
          
          <div className="about-grid">
            <div className="about-text">
              <h3>毎日食べても飽きない手作り惣菜</h3>
              <p>華ちゃんお弁当では、地元の新鮮な食材を使って、安心でほっとする味付けのおかずを毎日用意しています。</p>
            </div>
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">🔥</div>
                <h4>出来たて・手作り</h4>
                <p>機械に頼らず、愛情込めて一からお店で手作りしています。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🐷</div>
                <h4><span style={{ whiteSpace: 'nowrap' }}>宮崎名物「豚軟骨」</span></h4>
                <p>じっくりトロトロになるまで煮込んだ極上の味わいです。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🍱</div>
                <h4>日替わり弁当</h4>
                <p>毎日通っても楽しい、バラエティ豊かな献立をご用意。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🪙</div>
                <h4>安心の700円以下</h4>
                <p>お財布に優しく、家計を応援する価格設定です。</p>
              </div>
            </div>
          </div>

          {/* Dish Photo Gallery */}
          <div style={{ marginTop: '56px' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '24px', color: 'var(--text-main)' }}>手作りお弁当・お惣菜の様子</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <img src={bentoReal1} alt="手作りお弁当" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>ボリューム満点 手作りお弁当</div>
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <img src={bentoReal2} alt="手作りおかずお弁当" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>ぎっしり詰まった人気おかず</div>
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <img src={nishimeReal} alt="自家製 煮しめ" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>味が染みた自家製 煮しめ</div>
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <img src={inariReal} alt="手作り いなり寿司" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>ほっとする美味しさ いなり寿司</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hors d'oeuvre & Bulk Order Section */}
      <section id="hors-doeuvre" className="section">
        <div className="container">
          <h2 className="section-title">オードブル・大人数のお弁当</h2>
          <p className="section-desc">
            ご予算やご用途に合わせて、<br />
            ご希望の内容でお作りいたします。
          </p>

          <div className="about-grid">
            <div className="feature-card" style={{ padding: '32px' }}>
              <div className="feature-icon" style={{ fontSize: '2rem' }}>🎉</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>特製オードブル</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                お子様用から大人用まで、集まりやイベントに合わせた華やかなオードブルをご用意いたします。
              </p>
              <ul style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>子供用・大人用のご要望に対応</li>
                <li>お料理の内容・品数のご相談可能</li>
                <li>ご予算に応じたお値段のご相談可能</li>
              </ul>
            </div>

            <div className="feature-card" style={{ padding: '32px' }}>
              <div className="feature-icon" style={{ fontSize: '2rem' }}>🍱</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>大人数のお弁当注文</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                スポーツ大会、会議、地域のお集まりなど、大口のご注文も承ります。
              </p>
              <ul style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>大人数分のお弁当も柔軟に対応</li>
                <li>ご予算に応じた価格帯のご調整</li>
                <li>ご希望のボリュームやおかず内容のご相談可能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Online Shop Section */}
      <section id="online-shop" className="section section-alt">
        <div className="container">
          <h2 className="section-title">豚軟骨の通販（全国発送）</h2>
          <p className="section-desc">
            当店名物のトロトロ豚軟骨を、<br />
            <span className="nobreak">遠方の方にもお届けいたします！</span>
          </p>

          <div className="vending-card" style={{ maxWidth: '850px', margin: '0 auto', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
                <img src={tonnankotsuReal} alt="特製 豚軟骨" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>

              <div style={{ textAlign: 'left' }}>
                <span className="vending-badge" style={{ backgroundColor: '#FFE6D6', color: '#D35400' }}>全国発送対応中！</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>名物「豚軟骨」選べる4つの味</h3>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)', margin: '12px 0 16px' }}>
                  1パック（3個入り / 200g）：450円 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>(税込)</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  時間をかけてじっくりトロトロになるまで煮込んだ当店自慢の極上豚軟骨。味がしっかり染み込み、ご飯やお酒の肴にも最高です。
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ background: 'white', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.85rem' }}>
                    🧄 <strong>ニンニク醤油味</strong>
                  </div>
                  <div style={{ background: 'white', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.85rem' }}>
                    🌶️ <strong>キムチ味</strong>
                  </div>
                  <div style={{ background: 'white', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.85rem' }}>
                    🍲 <strong>だし醤油</strong>
                  </div>
                  <div style={{ background: 'white', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.85rem' }}>
                    🥣 <strong>味噌味</strong>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px', fontWeight: '500', lineHeight: '1.6' }}>
                  💳 <strong>お支払い方法</strong>：現金 / 銀行振込<br />
                  <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>(クレジットカード・QRコード決済は準備中)</span>
                </p>

                <a href="https://www.instagram.com/mimimimichiyo?utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                  📸 Instagram DMから注文・相談
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vending Machine Section */}
      <section id="vending" className="section">
        <div className="container vending">
          <h2 className="section-title">24時間いつでも買える自販機</h2>
          <p className="section-desc">
            お店が開いていない時間でも、<br />
            すぐにお召し上がりいただけます。
          </p>
          
          <div className="vending-card">
            <span className="vending-badge" style={{ backgroundColor: '#FFF3CD', color: '#856404' }}>設置予定！（現在準備中）</span>
            <h3>お店の前に24時間自販機を準備中です</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.7' }}>
              店休日や夜間・早朝でも、名物の「豚軟骨（パック）」をはじめ、手作りのお惣菜や冷たいお飲み物などをいつでも購入できる24時間自動販売機を設置予定です。稼働開始まで今しばらくお待ちください！
            </p>
            <p style={{ fontSize: '0.85rem', color: '#D35400', fontWeight: 'bold' }}>
              ※稼働開始時期はInstagram等で随時お知らせいたします。
            </p>
          </div>
        </div>
      </section>

      {/* Access/Info Section */}
      <section id="access" className="section section-alt">
        <div className="container">
          <h2 className="section-title">アクセス・店舗情報</h2>
          <p className="section-desc">都城市上川東の店舗へのお越しをお待ちしております。</p>

          <div className="access-grid">
            <div className="access-info">
              <h3>店舗詳細</h3>
              <table className="info-table">
                <tbody>
                  <tr>
                    <th>店舗名</th>
                    <td>華ちゃんお弁当</td>
                  </tr>
                  <tr>
                    <th>住所</th>
                    <td>宮崎県都城市上川東2-16-8</td>
                  </tr>
                  <tr>
                    <th>営業時間</th>
                    <td>
                      10:00 〜 完売まで<br />
                      <span style={{ fontSize: '0.8rem', color: '#D35400', fontWeight: 'bold' }}>※当日のご予約はお電話にて 9:30 まで</span>
                    </td>
                  </tr>
                  <tr>
                    <th>定休日</th>
                    <td>不定休（自販機は設置準備中）</td>
                  </tr>
                  <tr>
                    <th>お支払い</th>
                    <td>現金</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="https://www.instagram.com/mimimimichiyo?utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>
                  📸 Instagramを見る
                </a>
              </div>
            </div>
            <div className="map-container">
              <iframe
                title="華ちゃんお弁当の地図"
                src="https://maps.google.com/maps?q=%E5%AE%AE%E5%B4%8E%E7%9C%8C%E9%83%BD%E5%9F%8E%E5%B8%82%E4%B8%8A%E5%B7%9D%E6%9D%B12-16-8&t=&z=16&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="section">
        <div className="container">
          <h2 className="section-title">公式 Instagram</h2>
          <p className="section-desc">
            日々の手作りお弁当、限定メニュー、<br />
            最新情報を毎日更新しています！
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--color-bg-card)', padding: '32px', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '2rem' }}>📸</span>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>@mimimimichiyo</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>華ちゃんお弁当 公式アカウント</span>
              </div>
            </div>

            {/* Instagram Grid Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              <a href="https://www.instagram.com/mimimimichiyo?utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', display: 'block', transition: 'transform 0.2s ease' }} className="menu-card">
                <img src={tonnankotsuReal} alt="豚軟骨投稿" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  🐷 名物 トロトロ豚軟骨
                </div>
              </a>
              <a href="https://www.instagram.com/mimimimichiyo?utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', display: 'block', transition: 'transform 0.2s ease' }} className="menu-card">
                <img src={bentoReal1} alt="お弁当投稿" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  🍱 ボリューム満点 手作りお弁当
                </div>
              </a>
              <a href="https://www.instagram.com/mimimimichiyo?utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', display: 'block', transition: 'transform 0.2s ease' }} className="menu-card">
                <img src={inariReal} alt="いなり寿司投稿" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  🦊 できたて手作り いなり寿司
                </div>
              </a>
              <a href="https://www.instagram.com/mimimimichiyo?utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', display: 'block', transition: 'transform 0.2s ease' }} className="menu-card">
                <img src={bentoReal2} alt="日替わりおかず投稿" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '10px', fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  ✨ 本日の手作りおかず
                </div>
              </a>
            </div>

            <a href="https://www.instagram.com/mimimimichiyo?utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '12px 32px' }}>
              📸 Instagramで最新投稿を見る・フォロー
            </a>
          </div>
        </div>
      </section>

      {/* Easy Order / Web Reservation Form (Hidden for now) */}
      <section id="order" className="section">
        <div className="container">
          {/*
          <h2 className="section-title">店頭受取の簡単予約</h2>
          <p className="section-desc">Webから事前にお弁当をご予約いただけます。ご指定の時間に店頭でお待たせせずにお渡しいたします。</p>

          <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <span style={{ fontSize: '3rem' }}>🎉</span>
                <h3 style={{ marginTop: '16px', marginBottom: '8px' }}>予約のお申し込みを承りました！</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  お弁当のご準備を開始いたします。念のため確認のお電話、またはご登録 of 連絡先へご連絡させていただく場合がございます。
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: '24px' }}>
                  戻る
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>お名前</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>お電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>受取日</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>受取時間</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>メニュー</label>
                    <select
                      name="menu"
                      value={formData.menu}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none', background: 'white' }}
                    >
                      <option value="豚軟骨弁当">豚軟骨弁当 (¥650)</option>
                      <option value="日替わり弁当">日替わり弁当 (¥600)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>個数</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      max="100"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none' }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>備考・ご要望 (アレルギー等)</label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="大量注文やアレルギーなどのご相談はこちらにご記入ください。"
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)', outline: 'none', resize: 'vertical' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', borderRadius: '30px' }}>
                  予約内容を送信する
                </button>
              </form>
            )}
          </div>
          */}

          <div className="contact-cta" style={{ marginTop: 0 }}>
            <h3>お急ぎの場合はお電話ください</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              日替わり弁当の取り置きや、当日のご注文はお電話にてスピーディに対応いたします。
            </p>
            <a href="tel:080-1711-3429" className="contact-tel">
              080-1711-3429
            </a>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.6' }}>
              【営業時間】10:00 〜 完売まで<br />
              <span style={{ color: '#D35400', fontWeight: 'bold' }}>※当日のご予約はお電話にて 9:30 までにお願いいたします。</span>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} 華ちゃんお弁当. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
