(function () {
  /* ================= DATA TOPIK ================= */
  /* Pembantu kecil untuk menyusun tampilan materi (dipakai oleh data di bawah) */
  function fig(svg) { return '<div class="diagram">' + svg + '</div>'; }
  function fact(t) {
    return '<div class="fact"><span class="fact-ico" aria-hidden="true">💡</span><div><strong>Tahukah kamu?</strong><p>' + t + '</p></div></div>';
  }
  function note(title, t) {
    return '<div class="note"><strong>' + title + '</strong><p>' + t + '</p></div>';
  }
  function safe(t) { return '<div class="safe"><span aria-hidden="true">⚠️</span><p>' + t + '</p></div>'; }
  function terms(list) {
    return '<h3 class="terms-title">📚 Istilah penting</h3><div class="terms' + (list.length === 4 ? ' c4' : '') + '">' +
      list.map(function (x) { return '<div class="term"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>';
  }
  function ask(q, hint) {
    return '<div class="ask"><p class="ask-h">🤔 Coba pikirkan</p><p class="q">' + q + '</p>' +
      (hint ? '<details class="peek"><summary>Intip petunjuk</summary><div>' + hint + '</div></details>' : '') + '</div>';
  }
  function chain(items) {
    return '<div class="chain">' + items.map(function (x) {
      if (typeof x === 'string') return '<span class="' + (x === '+' ? 'plus' : 'arr') + '" aria-hidden="true">' + x + '</span>';
      return '<div class="node"><em aria-hidden="true">' + x[0] + '</em>' + x[1] + '</div>';
    }).join('') + '</div>';
  }
  function steps(list) {
    return '<ol class="steps">' + list.map(function (x) { return '<li><span>' + x + '</span></li>'; }).join('') + '</ol>';
  }
  function cause(title, rows) {
    return '<h3>' + title + '</h3><div class="cause">' + rows.map(function (r) {
      return '<div class="row"><span class="why">' + r[0] + '</span><span class="arr" aria-hidden="true">➜</span><span class="then">' + r[1] + '</span></div>';
    }).join('') + '</div>';
  }
  function cards(list) {
    return '<div class="cards' + (list.length === 4 ? ' c4' : '') + '">' + list.map(function (c) {
      return '<div class="mini"><div class="em" aria-hidden="true">' + c[0] + '</div><h3>' + c[1] + '</h3><p>' + c[2] + '</p>' +
        (c[3] ? '<div class="sb">' + c[3] + '</div>' : '') + '</div>';
    }).join('') + '</div>';
  }
  function versus(a, b, flip) {
    function box(x, cls) { return '<div class="vs ' + cls + '"><div class="em" aria-hidden="true">' + x[0] + '</div><h3>' + x[1] + '</h3><p>' + x[2] + '</p></div>'; }
    return '<div class="versus">' + box(a, flip ? 'v2' : 'v1') + box(b, flip ? 'v1' : 'v2') + '</div>';
  }
  function chips(list) {
    return '<div class="chips">' + list.map(function (x) { return '<span class="chip"><span aria-hidden="true">' + x[0] + '</span> ' + x[1] + '</span>'; }).join('') + '</div>';
  }
  function examples(list) {
    return '<div class="examples">' + list.map(function (x) {
      return '<div class="example"><span class="emoji" aria-hidden="true">' + x[0] + '</span><span>' + x[1] + (x[2] ? ' <em class="help">Penolong: ' + x[2] + '</em>' : '') + '</span></div>';
    }).join('') + '</div>';
  }
  function tf(list) {
    return '<div class="tf">' + list.map(function (x) {
      return '<details class="peek"><summary>' + x[0] + '</summary><div><strong>' + x[1] + '</strong> ' + x[2] + '</div></details>';
    }).join('') + '</div>';
  }

  var P1 = `<svg viewBox="0 0 380 190" role="img" aria-label="Sinar matahari memanaskan air sehingga sebagian air menjadi uap air yang naik ke udara">
  <circle cx="52" cy="44" r="20" fill="#F2B84B"/><g stroke="#F2B84B" stroke-width="3" stroke-linecap="round"><line x1="78" y1="44" x2="85" y2="44"/><line x1="26" y1="44" x2="19" y2="44"/><line x1="52" y1="70" x2="52" y2="77"/><line x1="52" y1="18" x2="52" y2="11"/><line x1="70" y1="62" x2="75" y2="67"/><line x1="34" y1="62" x2="29" y2="67"/><line x1="70" y1="26" x2="75" y2="21"/><line x1="34" y1="26" x2="29" y2="21"/></g>
  <text x="92" y="30" font-size="13" font-weight="700" fill="#4E3A00">panas matahari</text>
  <g fill="#fff" stroke="#1E78B8" stroke-width="2"><ellipse cx="262" cy="46" rx="48" ry="20"/><ellipse cx="236" cy="54" rx="24" ry="13"/></g>
  <text x="266" y="52" font-size="13" font-weight="700" fill="#0F2E4D" text-anchor="middle">uap air</text>
  <g fill="#1E78B8">
    <circle cx="200" cy="128" r="4"><animate attributeName="cy" values="128;78" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0" dur="2.4s" repeatCount="indefinite"/></circle>
    <circle cx="245" cy="130" r="3"><animate attributeName="cy" values="130;76" dur="2.8s" begin="0.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0" dur="2.8s" begin="0.5s" repeatCount="indefinite"/></circle>
    <circle cx="290" cy="128" r="3.5"><animate attributeName="cy" values="128;80" dur="2.1s" begin="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0" dur="2.1s" begin="1s" repeatCount="indefinite"/></circle>
  </g>
  <path d="M0 142 Q45 124 90 142 T180 142 T270 142 T360 142 T450 142 V190 H0 Z" fill="#3B9AD9"/>
  <text x="180" y="168" font-size="15" font-weight="700" fill="#fff">air (cair)</text>
</svg>`, P2 = `<svg viewBox="0 0 380 230" role="img" aria-label="Partikel air di dalam gelas berdesakan, sebagian partikel di permukaan lepas ke udara menjadi uap air">
  <defs><marker id="a2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1E78B8"/></marker></defs>
  <circle cx="38" cy="36" r="14" fill="#F2B84B"/><g stroke="#F2B84B" stroke-width="3" stroke-linecap="round"><line x1="58" y1="36" x2="65" y2="36"/><line x1="18" y1="36" x2="11" y2="36"/><line x1="38" y1="56" x2="38" y2="63"/><line x1="38" y1="16" x2="38" y2="9"/><line x1="52" y1="50" x2="57" y2="55"/><line x1="24" y1="50" x2="19" y2="55"/><line x1="52" y1="22" x2="57" y2="17"/><line x1="24" y1="22" x2="19" y2="17"/></g>
  <text x="74" y="41" font-size="13" font-weight="700" fill="#4E3A00">panas</text>
  <path d="M22 118 H228 V200 Q228 210 218 210 H32 Q22 210 22 200 Z" fill="#BFE0F7"/>
  <circle cx="40" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="62" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="84" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="106" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="128" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="150" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="172" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="194" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="216" cy="134" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="51" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="73" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="95" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="117" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="139" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="161" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="183" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="205" cy="154" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="40" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="62" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="84" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="106" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="128" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="150" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="172" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="194" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="216" cy="174" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="51" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="73" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="95" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="117" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="139" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="161" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="183" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/><circle cx="205" cy="194" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/>
  <path d="M20 84 V200 Q20 212 32 212 H218 Q230 212 230 200 V84" fill="none" stroke="#435A63" stroke-width="2.5"/>
  <line x1="22" y1="118" x2="228" y2="118" stroke="#1E78B8" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="92" y="112" font-size="12" font-weight="600" fill="#0F2E4D">permukaan air</text>
  <g fill="#fff" stroke="#1E78B8" stroke-width="2" stroke-dasharray="3 2"><circle cx="58" cy="96" r="7"/><circle cx="150" cy="84" r="7"/><circle cx="200" cy="100" r="7"/></g>
  <g stroke="#1E78B8" stroke-width="2.5" stroke-linecap="round" fill="none"><path d="M58 84 V60" marker-end="url(#a2)"/><path d="M150 72 V48" marker-end="url(#a2)"/><path d="M200 88 V64" marker-end="url(#a2)"/></g>
  <circle cx="266" cy="120" r="8" fill="#4DA3E0" stroke="#1E78B8" stroke-width="1.5"/>
  <text x="282" y="118" font-size="13" font-weight="700" fill="#0F2E4D">partikel air</text><text x="282" y="134" font-size="12" fill="#435A63">berdesakan</text>
  <circle cx="266" cy="172" r="8" fill="#fff" stroke="#1E78B8" stroke-width="2" stroke-dasharray="3 2"/>
  <text x="282" y="170" font-size="13" font-weight="700" fill="#0F2E4D">partikel lepas</text><text x="282" y="186" font-size="12" fill="#435A63">= uap air</text>
</svg>`, P3 = `<svg viewBox="0 0 380 215" role="img" aria-label="Air yang sama banyak lebih cepat menguap di piring lebar daripada di gelas sempit">
  <defs><marker id="a3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1E78B8"/></marker></defs>
  <path d="M22 118 L178 118 L162 158 Q160 165 152 165 L48 165 Q40 165 38 158 Z" fill="#fff" stroke="#435A63" stroke-width="2.5"/>
  <path d="M28 126 L172 126 L160 155 Q158 160 152 160 L48 160 Q42 160 40 155 Z" fill="#6DB8E8"/>
  <g stroke="#1E78B8" stroke-width="2.5" stroke-linecap="round" fill="none"><path d="M45 114 V88" marker-end="url(#a3)"/><path d="M75 114 V88" marker-end="url(#a3)"/><path d="M105 114 V88" marker-end="url(#a3)"/><path d="M135 114 V88" marker-end="url(#a3)"/><path d="M160 114 V88" marker-end="url(#a3)"/></g>
  <text x="100" y="72" font-size="13" font-weight="700" fill="#0F2E4D" text-anchor="middle">banyak partikel lepas</text>
  <path d="M262 50 V150 Q262 165 277 165 H283 Q298 165 298 150 V50" fill="#fff" stroke="#435A63" stroke-width="2.5"/>
  <path d="M264 72 H296 V150 Q296 160 283 160 H277 Q264 160 264 150 Z" fill="#6DB8E8"/>
  <path d="M280 66 V44" stroke="#1E78B8" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#a3)"/>
  <text x="280" y="30" font-size="13" font-weight="700" fill="#0F2E4D" text-anchor="middle">sedikit yang lepas</text>
  <text x="100" y="188" font-size="14" font-weight="700" fill="#0F2E4D" text-anchor="middle">Piring (lebar)</text>
  <text x="280" y="188" font-size="14" font-weight="700" fill="#0F2E4D" text-anchor="middle">Gelas (sempit)</text>
  <text x="190" y="208" font-size="12" fill="#435A63" text-anchor="middle">Jumlah air kira-kira sama, tetapi permukaannya berbeda</text>
</svg>`, P5 = `<svg viewBox="0 0 380 255" role="img" aria-label="Menguap terjadi pelan di permukaan air, mendidih terjadi cepat dengan gelembung di seluruh bagian air">
  <defs><marker id="a5" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1E78B8"/></marker></defs>
  <path d="M30 60 V168 Q30 180 42 180 H138 Q150 180 150 168 V60" fill="none" stroke="#435A63" stroke-width="2.5"/>
  <path d="M32 100 H148 V168 Q148 178 138 178 H42 Q32 178 32 168 Z" fill="#8CC8F0"/>
  <g stroke="#1E78B8" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M58 96 V78" marker-end="url(#a5)"/><path d="M90 96 V78" marker-end="url(#a5)"/><path d="M122 96 V78" marker-end="url(#a5)"/></g>
  <path d="M220 60 V168 Q220 180 232 180 H328 Q340 180 340 168 V60" fill="none" stroke="#435A63" stroke-width="2.5"/>
  <path d="M222 100 H338 V168 Q338 178 328 178 H232 Q222 178 222 168 Z" fill="#8CC8F0"/>
  <g fill="#EAF6FF" stroke="#1E78B8" stroke-width="1.5"><circle cx="245" cy="160" r="7"/><circle cx="262" cy="138" r="9"/><circle cx="288" cy="158" r="8"/><circle cx="305" cy="128" r="7"/><circle cx="320" cy="152" r="6"/><circle cx="276" cy="116" r="5"/><circle cx="240" cy="122" r="4"/></g>
  <g stroke="#1E78B8" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M245 94 V52" marker-end="url(#a5)"/><path d="M280 94 V44" marker-end="url(#a5)"/><path d="M315 94 V52" marker-end="url(#a5)"/></g>
  <path d="M280 208 C264 198 266 188 274 183 C274 192 282 190 280 182 C294 190 296 200 280 208 Z" fill="#F58A1F"/>
  <text x="90" y="228" font-size="15" font-weight="700" fill="#0F2E4D" text-anchor="middle">Menguap</text><text x="90" y="246" font-size="12" fill="#435A63" text-anchor="middle">di permukaan, pelan</text>
  <text x="280" y="232" font-size="15" font-weight="700" fill="#0F2E4D" text-anchor="middle">Mendidih</text><text x="280" y="250" font-size="12" fill="#435A63" text-anchor="middle">di seluruh air, cepat</text>
</svg>`, P6 = `<svg viewBox="0 0 380 255" role="img" aria-label="Siklus air: air menguap dari laut, mengembun menjadi awan, turun sebagai hujan, lalu mengalir kembali ke laut">
  <defs><marker id="a6" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1E78B8"/></marker></defs>
  <clipPath id="c6"><rect width="380" height="255" rx="18"/></clipPath>
  <g clip-path="url(#c6)"><rect width="380" height="255" fill="#F4FAFF"/>
  <circle cx="44" cy="44" r="18" fill="#F2B84B"/><g stroke="#F2B84B" stroke-width="3" stroke-linecap="round"><line x1="68" y1="44" x2="75" y2="44"/><line x1="20" y1="44" x2="13" y2="44"/><line x1="44" y1="68" x2="44" y2="75"/><line x1="44" y1="20" x2="44" y2="13"/><line x1="61" y1="61" x2="66" y2="66"/><line x1="27" y1="61" x2="22" y2="66"/><line x1="61" y1="27" x2="66" y2="22"/><line x1="27" y1="27" x2="22" y2="22"/></g>
  <g fill="#fff" stroke="#1E78B8" stroke-width="2"><ellipse cx="290" cy="50" rx="46" ry="19"/><ellipse cx="266" cy="58" rx="24" ry="13"/><ellipse cx="316" cy="58" rx="24" ry="13"/></g>
  <text x="232" y="22" font-size="13" font-weight="700" fill="#0F2E4D">② Mengembun</text>
  <path d="M0 192 Q45 180 90 192 T175 192 V255 H0 Z" fill="#3B9AD9"/>
  <path d="M175 205 Q235 176 300 186 L380 178 V255 H175 Z" fill="#9AD7A7"/>
  <rect x="313" y="158" width="8" height="28" fill="#8B5E3C"/><circle cx="317" cy="146" r="21" fill="#2E9E5B"/>
  <path d="M104 186 C92 160 116 140 104 108" fill="none" stroke="#1E78B8" stroke-width="3" stroke-linecap="round" marker-end="url(#a6)"/>
  <text x="120" y="152" font-size="13" font-weight="700" fill="#0F2E4D">① Menguap</text>
  <path d="M104 104 C150 80 200 64 236 60" fill="none" stroke="#1E78B8" stroke-width="2.5" stroke-dasharray="5 4" stroke-linecap="round" marker-end="url(#a6)"/>
  <g stroke="#1E78B8" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6 5"><line x1="262" y1="82" x2="262" y2="122"/><line x1="280" y1="86" x2="280" y2="126"/><line x1="298" y1="82" x2="298" y2="122"/></g>
  <text x="196" y="112" font-size="13" font-weight="700" fill="#0F2E4D">③ Hujan</text>
  <path d="M268 198 Q222 190 182 206" fill="none" stroke="#1E78B8" stroke-width="3" stroke-linecap="round" marker-end="url(#a6)"/>
  <text x="196" y="236" font-size="13" font-weight="700" fill="#0F3D22">④ Mengalir</text>
  <g stroke="#1E78B8" stroke-width="2" stroke-dasharray="3 4" stroke-linecap="round" fill="none"><path d="M330 122 V104" marker-end="url(#a6)"/><path d="M344 128 V110" marker-end="url(#a6)"/></g>
  <text x="350" y="78" font-size="11.5" font-weight="600" fill="#0F2E4D" text-anchor="middle">uap air dari</text><text x="350" y="91" font-size="11.5" font-weight="600" fill="#0F2E4D" text-anchor="middle">daun</text>
  </g>
</svg>`,
      F1 = `<svg viewBox="0 0 380 175" role="img" aria-label="Daun menerima cahaya matahari untuk membuat makanan">
  <circle cx="56" cy="44" r="22" fill="#F2B84B"/><g stroke="#F2B84B" stroke-width="3" stroke-linecap="round"><line x1="84" y1="44" x2="91" y2="44"/><line x1="28" y1="44" x2="21" y2="44"/><line x1="56" y1="72" x2="56" y2="79"/><line x1="56" y1="16" x2="56" y2="9"/><line x1="76" y1="64" x2="80" y2="68"/><line x1="36" y1="64" x2="32" y2="68"/><line x1="76" y1="24" x2="80" y2="20"/><line x1="36" y1="24" x2="32" y2="20"/></g>
  <text x="20" y="98" font-size="13" font-weight="700" fill="#4E3A00">cahaya matahari</text>
  <path d="M250 165 V70" stroke="#23784A" stroke-width="7" stroke-linecap="round"/>
  <path d="M250 112 C210 108 194 76 202 52 C232 58 248 84 250 112 Z" fill="#3FA34D"/>
  <path d="M250 88 C290 84 306 56 298 34 C268 40 252 62 250 88 Z" fill="#2E8B57"/>
  <g stroke="#F2B84B" stroke-width="2.5" stroke-dasharray="4 4" stroke-linecap="round" fill="none"><path d="M96 56 L196 62" marker-end="url(#a1)"/><path d="M92 70 L200 92"/></g>
  <defs><marker id="a1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#F2B84B"/></marker></defs>
  <text x="262" y="150" font-size="13" font-weight="700" fill="#0F3D22">daun membuat</text><text x="262" y="166" font-size="13" font-weight="700" fill="#0F3D22">makanan</text>
</svg>`, F2 = `<svg viewBox="0 0 380 235" role="img" aria-label="Bagian-bagian daun: helai daun, tulang daun, klorofil, dan stomata yang diperbesar">
  <path d="M30 170 C30 80 110 30 220 40 C225 130 150 190 30 170 Z" fill="#4CB56E" stroke="#23784A" stroke-width="3"/>
  <path d="M30 170 L205 60" stroke="#23784A" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <g stroke="#DFF5E4" stroke-width="2" stroke-linecap="round"><line x1="72" y1="138" x2="76" y2="98"/><line x1="115" y1="112" x2="128" y2="70"/><line x1="157" y1="86" x2="176" y2="56"/><line x1="72" y1="138" x2="104" y2="162"/><line x1="115" y1="112" x2="150" y2="146"/><line x1="157" y1="86" x2="196" y2="110"/></g>
  <circle cx="70" cy="120" r="2.6" fill="#1B6B3E"/><circle cx="96" cy="100" r="2.6" fill="#1B6B3E"/><circle cx="124" cy="96" r="2.6" fill="#1B6B3E"/><circle cx="150" cy="84" r="2.6" fill="#1B6B3E"/><circle cx="176" cy="72" r="2.6" fill="#1B6B3E"/><circle cx="100" cy="132" r="2.6" fill="#1B6B3E"/><circle cx="132" cy="122" r="2.6" fill="#1B6B3E"/><circle cx="160" cy="108" r="2.6" fill="#1B6B3E"/><circle cx="188" cy="90" r="2.6" fill="#1B6B3E"/><circle cx="84" cy="146" r="2.6" fill="#1B6B3E"/><circle cx="118" cy="148" r="2.6" fill="#1B6B3E"/><circle cx="150" cy="136" r="2.6" fill="#1B6B3E"/><circle cx="60" cy="150" r="2.6" fill="#1B6B3E"/><circle cx="200" cy="70" r="2.6" fill="#1B6B3E"/><circle cx="140" cy="110" r="2.6" fill="#1B6B3E"/>
  <path d="M30 170 L14 190" stroke="#23784A" stroke-width="4" stroke-linecap="round"/>
  <text x="60" y="26" font-size="13" font-weight="700" fill="#0F3D22">helai daun</text>
  <line x1="120" y1="30" x2="150" y2="52" stroke="#0F3D22" stroke-width="1.5"/>
  <text x="34" y="212" font-size="13" font-weight="700" fill="#0F3D22">tulang daun</text>
  <line x1="100" y1="200" x2="88" y2="146" stroke="#0F3D22" stroke-width="1.5"/>
  <text x="140" y="198" font-size="13" font-weight="700" fill="#0F3D22">klorofil</text>
  <line x1="168" y1="184" x2="150" y2="138" stroke="#0F3D22" stroke-width="1.5"/>
  <line x1="200" y1="96" x2="252" y2="118" stroke="#435A63" stroke-width="1.8" stroke-dasharray="4 3"/>
  <circle cx="306" cy="140" r="58" fill="#fff" stroke="#435A63" stroke-width="2.5"/>
  <path d="M306 112 C276 120 276 160 306 168 C293 150 293 130 306 112 Z" fill="#2E9E5B"/>
  <path d="M306 112 C336 120 336 160 306 168 C319 150 319 130 306 112 Z" fill="#2E9E5B"/>
  <text x="306" y="99" font-size="11.5" font-weight="700" fill="#0F2E4D" text-anchor="middle">CO₂ masuk ↓</text>
  <text x="306" y="184" font-size="11.5" font-weight="700" fill="#0F2E4D" text-anchor="middle">O₂ keluar ↑</text>
  <text x="306" y="222" font-size="13" font-weight="700" fill="#0F3D22" text-anchor="middle">stomata (diperbesar)</text>
</svg>`, F3 = `<svg viewBox="0 0 380 275" role="img" aria-label="Tumbuhan menerima cahaya matahari, karbon dioksida dari udara, dan air dari tanah">
  <defs><marker id="a7" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1E78B8"/></marker><marker id="a7s" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#C98A1B"/></marker></defs>
  <clipPath id="c7"><rect width="380" height="275" rx="18"/></clipPath>
  <g clip-path="url(#c7)"><rect width="380" height="275" fill="#F4FAFF"/>
  <circle cx="52" cy="40" r="20" fill="#F2B84B"/><g stroke="#F2B84B" stroke-width="3" stroke-linecap="round"><line x1="78" y1="40" x2="85" y2="40"/><line x1="26" y1="40" x2="19" y2="40"/><line x1="52" y1="66" x2="52" y2="73"/><line x1="52" y1="14" x2="52" y2="7"/><line x1="70" y1="58" x2="75" y2="63"/><line x1="34" y1="58" x2="29" y2="63"/><line x1="70" y1="22" x2="75" y2="17"/><line x1="34" y1="22" x2="29" y2="17"/></g>
  <text x="52" y="86" font-size="13" font-weight="700" fill="#4E3A00" text-anchor="middle">cahaya matahari</text>
  <path d="M0 214 H380 V275 H0 Z" fill="#D8B48A"/>
  <path d="M0 214 H380" stroke="#6BB56F" stroke-width="6"/>
  <path d="M190 214 V112" stroke="#2E8B57" stroke-width="7" stroke-linecap="round"/>
  <path d="M190 156 C150 154 128 126 132 102 C160 106 184 126 190 156 Z" fill="#3FA34D"/>
  <path d="M190 132 C230 130 252 102 248 78 C220 82 196 102 190 132 Z" fill="#2E8B57"/>
  <path d="M190 116 C176 104 176 88 186 78 C198 88 198 104 190 116 Z" fill="#3FA34D"/>
  <g stroke="#7A5230" stroke-width="3" stroke-linecap="round" fill="none"><path d="M190 214 V262"/><path d="M190 228 L162 256"/><path d="M190 228 L218 256"/></g>
  <path d="M84 62 L128 92" stroke="#C98A1B" stroke-width="2.5" stroke-dasharray="4 4" stroke-linecap="round" fill="none" marker-end="url(#a7s)"/>
  <text x="330" y="52" font-size="13" font-weight="700" fill="#0F2E4D" text-anchor="middle">karbon dioksida</text><text x="330" y="68" font-size="12" fill="#435A63" text-anchor="middle">(gas di udara)</text>
  <path d="M292 82 L256 92" stroke="#1E78B8" stroke-width="2.5" stroke-linecap="round" fill="none" marker-end="url(#a7)"/>
  <path d="M204 210 V150" stroke="#3B9AD9" stroke-width="3" stroke-dasharray="4 4" stroke-linecap="round" fill="none" marker-end="url(#a7)"/>
  <text x="216" y="172" font-size="12" font-weight="700" fill="#0F2E4D">air naik lewat batang</text>
  <text x="236" y="240" font-size="12.5" font-weight="700" fill="#3A2410">akar menyerap</text><text x="236" y="256" font-size="12.5" font-weight="700" fill="#3A2410">air dari tanah</text>
  </g>
</svg>`, F4 = `<svg viewBox="0 0 380 205" role="img" aria-label="Daun menerima cahaya, air, dan karbon dioksida lalu menghasilkan glukosa dan oksigen">
  <defs><marker id="a8" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#0F3D22"/></marker></defs>
  <text x="66" y="28" font-size="14" font-weight="700" fill="#0F3D22" text-anchor="middle">Bahan masuk</text>
  <text x="314" y="28" font-size="14" font-weight="700" fill="#0F3D22" text-anchor="middle">Hasil keluar</text>
  <rect x="128" y="46" width="124" height="118" rx="22" fill="#BDE9C8" stroke="#23784A" stroke-width="3"/>
  <text x="190" y="96" font-size="17" font-weight="700" fill="#0F3D22" text-anchor="middle">Daun</text>
  <text x="190" y="116" font-size="12" fill="#0F3D22" text-anchor="middle">dapur kecil</text>
  <text x="190" y="134" font-size="12" fill="#0F3D22" text-anchor="middle">+ klorofil</text>
  <g stroke="#0F3D22" stroke-width="2.5" stroke-linecap="round" fill="none"><path d="M14 72 H120" marker-end="url(#a8)"/><path d="M14 106 H120" marker-end="url(#a8)"/><path d="M14 140 H120" marker-end="url(#a8)"/><path d="M258 84 H360" marker-end="url(#a8)"/><path d="M258 132 H360" marker-end="url(#a8)"/></g>
  <text x="16" y="64" font-size="12" font-weight="700" fill="#4E3A00">cahaya matahari</text>
  <text x="16" y="98" font-size="12" font-weight="700" fill="#0F2E4D">air</text>
  <text x="16" y="132" font-size="12" font-weight="700" fill="#0F2E4D">karbon dioksida</text>
  <text x="262" y="76" font-size="13" font-weight="700" fill="#0F3D22">glukosa</text>
  <text x="262" y="124" font-size="13" font-weight="700" fill="#0F2E4D">oksigen</text>
  <text x="190" y="190" font-size="12" fill="#435A63" text-anchor="middle">glukosa = makanan, oksigen dilepas ke udara</text>
</svg>`;

  /* Pembantu tambahan untuk materi Rantai Makanan */
  var WEB = `<svg viewBox="0 0 420 258" role="img" aria-label="Jaring-jaring makanan: rumput dimakan belalang dan tikus, belalang dimakan katak, katak dan tikus dimakan ular, ular dan tikus dimakan elang">
  <defs><marker id="aw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#4E2C08"/></marker></defs>
  <g stroke="#4E2C08" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M85 98 L111 78" marker-end="url(#aw)"/><path d="M85 158 L111 178" marker-end="url(#aw)"/><path d="M191 48 L221 48" marker-end="url(#aw)"/><path d="M262 78 L262 98" marker-end="url(#aw)"/><path d="M191 179 L221 157" marker-end="url(#aw)"/><path d="M303 128 L333 128" marker-end="url(#aw)"/><path d="M191 204 L333 142" marker-end="url(#aw)"/></g>
  <rect x="8" y="101" width="76" height="54" rx="14" fill="#fff" stroke="#B85F0A" stroke-width="2"/><text x="46" y="132" font-size="26" text-anchor="middle">🌿</text><text x="46" y="150" font-size="12" font-weight="700" fill="#4E2C08" text-anchor="middle">Rumput</text><rect x="112" y="21" width="76" height="54" rx="14" fill="#fff" stroke="#B85F0A" stroke-width="2"/><text x="150" y="52" font-size="26" text-anchor="middle">🦗</text><text x="150" y="70" font-size="12" font-weight="700" fill="#4E2C08" text-anchor="middle">Belalang</text><rect x="112" y="181" width="76" height="54" rx="14" fill="#fff" stroke="#B85F0A" stroke-width="2"/><text x="150" y="212" font-size="26" text-anchor="middle">🐭</text><text x="150" y="230" font-size="12" font-weight="700" fill="#4E2C08" text-anchor="middle">Tikus</text><rect x="224" y="21" width="76" height="54" rx="14" fill="#fff" stroke="#B85F0A" stroke-width="2"/><text x="262" y="52" font-size="26" text-anchor="middle">🐸</text><text x="262" y="70" font-size="12" font-weight="700" fill="#4E2C08" text-anchor="middle">Katak</text><rect x="224" y="101" width="76" height="54" rx="14" fill="#fff" stroke="#B85F0A" stroke-width="2"/><text x="262" y="132" font-size="26" text-anchor="middle">🐍</text><text x="262" y="150" font-size="12" font-weight="700" fill="#4E2C08" text-anchor="middle">Ular</text><rect x="336" y="101" width="76" height="54" rx="14" fill="#fff" stroke="#B85F0A" stroke-width="2"/><text x="374" y="132" font-size="26" text-anchor="middle">🦅</text><text x="374" y="150" font-size="12" font-weight="700" fill="#4E2C08" text-anchor="middle">Elang</text>
</svg>`, HUB = `<svg viewBox="0 0 380 240" role="img" aria-label="Matahari membantu tumbuhan membuat makanan. Ulat, kambing, kelinci, dan sapi memakan tumbuhan.">
  <defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#4E2C08"/></marker></defs>
  <text x="40" y="52" font-size="36" text-anchor="middle">☀️</text>
  <text x="40" y="78" font-size="12" font-weight="700" fill="#4E2C08" text-anchor="middle">Matahari</text>
  <path d="M70 52 L142 78" stroke="#4E2C08" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="5 4" fill="none" marker-end="url(#ah)"/>
  <circle cx="190" cy="88" r="42" fill="#fff" stroke="#23784A" stroke-width="3"/>
  <text x="190" y="104" font-size="46" text-anchor="middle">🌿</text>
  <text x="246" y="82" font-size="14" font-weight="700" fill="#0F3D22">Tumbuhan</text>
  <text x="246" y="98" font-size="12" fill="#4E2C08">membuat makanan</text>
  <text x="246" y="112" font-size="12" fill="#4E2C08">sendiri</text>
  <g stroke="#4E2C08" stroke-width="2.4" stroke-linecap="round" fill="none">
    <path d="M168 126 L76 166" marker-end="url(#ah)"/><path d="M182 130 L148 164" marker-end="url(#ah)"/>
    <path d="M198 130 L232 164" marker-end="url(#ah)"/><path d="M212 126 L308 166" marker-end="url(#ah)"/>
  </g>
  <g font-size="34" text-anchor="middle"><text x="60" y="206">🐛</text><text x="140" y="206">🐐</text><text x="240" y="206">🐇</text><text x="322" y="206">🐄</text></g>
  <g font-size="12.5" font-weight="700" fill="#4E2C08" text-anchor="middle"><text x="60" y="228">ulat</text><text x="140" y="228">kambing</text><text x="240" y="228">kelinci</text><text x="322" y="228">sapi</text></g>
</svg>`;
  function foodchain(items) {
    return '<div class="fchain">' + items.map(function (x, i) {
      return (i ? '<span class="farr" aria-hidden="true">➜</span>' : '') +
        '<div class="fnode ' + (x[3] || '') + '"><span class="fe" aria-hidden="true">' + x[0] + '</span><b>' + x[1] + '</b>' + (x[2] ? '<small>' + x[2] + '</small>' : '') + '</div>';
    }).join('') + '</div>';
  }
  function legend() {
    return '<div class="legend"><span class="lg p">🟢 Tumbuhan</span><span class="lg h">🟡 Pemakan tumbuhan</span><span class="lg c">🟠 Pemakan hewan</span><span class="lg o">🟣 Pemakan tumbuhan dan hewan</span></div>';
  }
  function readrow(ok, pair, text) {
    return '<div class="rrow ' + (ok ? 'ok' : 'no') + '"><span class="badge">' + (ok ? '✅ Benar' : '❌ Salah') + '</span><span class="rpair">' + pair + '</span><span class="rtext">' + text + '</span></div>';
  }
  function habitats(list) {
    return '<div class="tabbox"><div class="tabs" role="tablist">' + list.map(function (h, i) {
      return '<button type="button" role="tab" class="tab' + (i === 0 ? ' on' : '') + '" aria-selected="' + (i === 0) + '" onclick="skTab(this,' + i + ')">' + h[0] + ' ' + h[1] + '</button>';
    }).join('') + '</div>' + list.map(function (h, i) {
      return '<div class="tabpane' + (i === 0 ? ' on' : '') + '" role="tabpanel">' + foodchain(h[2]) + '<h3>Bagaimana mereka berhubungan?</h3>' + examples(h[3]) + '</div>';
    }).join('') + '</div>';
  }
  window.skTab = function (btn, i) {
    var box = btn.closest('.tabbox');
    box.querySelectorAll('.tab').forEach(function (t, j) { t.classList.toggle('on', j === i); t.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
    box.querySelectorAll('.tabpane').forEach(function (p, j) { p.classList.toggle('on', j === i); });
  };
  var HILANG_DEFAULT = 'Ketuk salah satu makhluk hidup di atas. Lihat apa yang terjadi pada yang lain!';
  var HILANG = [
    ['🌿', 'Rumput', 'Rumput hilang! Belalang tidak punya makanan, jadi belalang berkurang. Lalu katak, ular, dan elang ikut kekurangan makanan. Semua terkena, karena semuanya bergantung pada awal rantai.', 'p', ['gone', 'less', 'less', 'less', 'less']],
    ['🦗', 'Belalang', 'Belalang hilang! Katak kehilangan makanannya, lalu ular dan elang ikut terpengaruh. Rumput jadi lebih banyak karena tidak ada yang memakannya.', 'h', ['more', 'gone', 'less', 'less', 'less']],
    ['🐸', 'Katak', 'Katak hilang! Belalang bertambah banyak karena tidak ada yang memakannya. Ular kekurangan makanan, dan elang ikut terpengaruh.', 'c', ['', 'more', 'gone', 'less', 'less']],
    ['🐍', 'Ular', 'Ular hilang! Katak bertambah banyak, lalu belalang jadi lebih sedikit karena banyak dimakan katak. Elang kekurangan makanan.', 'c', ['', 'less', 'more', 'gone', 'less']],
    ['🦅', 'Elang', 'Elang hilang! Ular bertambah banyak, sehingga katak jadi lebih sedikit.', 'c', ['', '', 'less', 'more', 'gone']]
  ];
  function hilangBox() {
    return '<div class="hilang" id="hilang"><div class="fchain">' + HILANG.map(function (h, i) {
      return (i ? '<span class="farr" aria-hidden="true">➜</span>' : '') +
        '<button type="button" class="fnode hbtn ' + h[3] + '" aria-pressed="false" onclick="skHilang(' + i + ')"><span class="fe" aria-hidden="true">' + h[0] + '</span><b>' + h[1] + '</b><small class="hstate">&nbsp;</small></button>';
    }).join('') + '</div><div class="hmsg" id="hmsg" role="status" aria-live="polite">' + HILANG_DEFAULT + '</div></div>';
  }
  window.skHilang = function (i) {
    var box = document.getElementById('hilang'); if (!box) return;
    var btns = box.querySelectorAll('.hbtn');
    var already = btns[i].classList.contains('gone');
    btns.forEach(function (b) { b.classList.remove('gone', 'more', 'less'); b.setAttribute('aria-pressed', 'false'); b.querySelector('.hstate').innerHTML = '&nbsp;'; });
    var msg = document.getElementById('hmsg');
    if (already) { msg.textContent = HILANG_DEFAULT; return; }
    HILANG[i][4].forEach(function (st, j) {
      if (!st) return;
      btns[j].classList.add(st);
      btns[j].querySelector('.hstate').textContent = st === 'gone' ? '❌ hilang' : (st === 'more' ? '🔺 bertambah' : '🔻 berkurang');
    });
    btns[i].setAttribute('aria-pressed', 'true');
    msg.textContent = HILANG[i][2];
  };

  var TOPICS = {
    penguapan: {
      name: "Penguapan Air", emoji: "💧", color: "#1E78B8", soft: "#CFE8FA", ink: "#0F2E4D", edge: "#A9D3F0",
      blurb: "Ke mana perginya air di jemuran dan piring?",
      tujuanIntro: "Menjelaskan apa yang terjadi pada air saat menguap, dan menyebutkan contoh penguapan yang kamu temui sendiri di rumah atau sekolah.",
      tujuanPoints: [
        ["🎯","Memahami bahwa air yang menguap tidak hilang, tetapi berubah menjadi uap air."],
        ["🔎","Mengenali kejadian penguapan dalam kehidupan sehari-hari."],
        ["💬","Menceritakan hasil pengamatanmu dengan kata-katamu sendiri."]
      ],

      submateri: [
        /* 1 — Pengertian penguapan & perubahan wujud */
        { title: "Ke Mana Perginya Air?", html:
          `<h2>Air tidak lenyap, ia berubah wujud</h2>
          <p class="lead">Pernahkah kamu melihat genangan air di halaman perlahan mengecil sampai kering? Air itu tidak lenyap, lho. Air berubah menjadi <strong>uap air</strong> dan naik ke udara.</p>
          ${fig(P1)}
          <p>Air yang biasa kita minum berwujud <strong>cair</strong>. Saat mendapat panas, misalnya dari sinar matahari, sebagian air berubah menjadi <strong>gas</strong> yang disebut uap air. Uap air tidak bisa dilihat mata, jadi air yang mengering terasa seperti menghilang. Padahal air hanya berpindah ke udara.</p>
          <p>Peristiwa air cair berubah menjadi uap air ini disebut <strong>penguapan</strong>. Penguapan terjadi di bagian atas air, yaitu permukaannya.</p>
          ${chain([['💧','Air<br>(wujud cair)'], '➜', ['☀️','Mendapat<br>panas'], '➜', ['☁️','Uap air<br>(wujud gas)']])}
          ${fact('Baju yang sudah kering tidak berarti airnya hilang. Airnya sudah pindah ke udara di sekitar jemuran sebagai uap air.')}
          ${terms([['Penguapan','Perubahan air cair menjadi uap air.'],['Uap air','Air yang berwujud gas, tidak terlihat oleh mata.'],['Wujud zat','Bentuk zat: padat, cair, atau gas. Air bisa berwujud es, air, atau uap air.']])}
          ${ask('Baju basahmu sudah kering di jemuran. Menurutmu, air yang tadi ada di baju sekarang ada di mana?', 'Ingat: air tidak hilang. Ia berubah menjadi uap air dan ada di udara.')}` },

        /* 2 — Partikel air */
        { title: "Mengintip Partikel Air", html:
          `<h2>Air tersusun dari butiran yang sangat kecil</h2>
          <p class="lead">Air tampak tenang. Tetapi kalau kita bisa memperbesarnya jauh sekali, kita akan melihat air tersusun dari butiran-butiran sangat kecil yang disebut <strong>partikel</strong>.</p>
          <p>Partikel air terlalu kecil untuk dilihat, bahkan dengan kaca pembesar. Di dalam air cair, partikel-partikelnya berdekatan dan terus bergerak saling bergeser, seperti anak-anak yang berdesakan sambil bergoyang di lapangan.</p>
          ${fig(P2)}
          <h3>Apa yang terjadi saat air menguap?</h3>
          ${steps(['Sinar matahari memberi <b>panas</b> pada air.', 'Panas membuat partikel air <b>bergerak makin cepat</b>.', 'Partikel di <b>permukaan</b> yang paling cepat geraknya bisa lepas dari air.', 'Partikel yang lepas menjadi <b>uap air</b> dan melayang di udara. Di udara, partikelnya berjauhan dan bergerak bebas.'])}
          ${fact('Air tidak harus panas untuk menguap. Di hari yang sejuk, genangan tetap bisa mengering, hanya saja lebih lambat. Masih ada partikel di permukaan yang cukup cepat geraknya untuk lepas.')}
          ${terms([['Partikel','Butiran sangat kecil penyusun benda. Tidak terlihat oleh mata.'],['Permukaan air','Bagian atas air yang bersentuhan dengan udara.']])}
          ${ask('Kalau air dipanaskan, partikelnya bergerak lebih cepat atau lebih lambat? Apa pengaruhnya pada penguapan?', 'Partikel bergerak lebih cepat, jadi lebih banyak yang lepas dari permukaan. Penguapan pun jadi lebih cepat.')}` },

        /* 3 — Faktor yang memengaruhi */
        { title: "Apa yang Membuat Air Cepat Menguap?", html:
          `<h2>Empat penolong penguapan</h2>
          <p class="lead">Ada air yang mengering dalam hitungan menit, ada yang butuh berhari-hari. Cepat atau lambatnya penguapan dipengaruhi beberapa hal yang disebut <strong>faktor</strong>. Yuk kenali empat yang penting.</p>
          ${cards([
            ['🔥','Panas','Makin panas, makin cepat partikel air bergerak, dan makin banyak yang lepas ke udara.','Baju cepat kering saat matahari terik.'],
            ['💨','Angin','Angin membawa pergi uap air yang ada di dekat permukaan, sehingga partikel lain lebih mudah lepas.','Rambut cepat kering di depan kipas angin.'],
            ['📏','Luas permukaan','Makin luas bagian air yang terkena udara, makin banyak partikel yang bisa lepas.','Air di piring lebih cepat habis daripada air di gelas.'],
            ['💦','Kelembapan udara','Kelembapan adalah banyaknya uap air di udara. Udara yang sudah sangat lembap sulit menerima uap air baru, jadi penguapan pelan.','Saat musim hujan, jemuran lama keringnya.']
          ])}
          ${fig(P3)}
          ${cause('Sebab dan akibatnya', [['Panas kuat','penguapan lebih cepat'],['Ada angin','penguapan lebih cepat'],['Permukaan air luas','penguapan lebih cepat'],['Udara sangat lembap','penguapan lebih lambat']])}
          ${terms([['Faktor','Hal yang memengaruhi sesuatu.'],['Luas permukaan','Seberapa lebar bagian air yang terkena udara.'],['Kelembapan','Banyaknya uap air di udara.']])}
          ${ask('Kamu punya dua handuk basah yang sama. Handuk A dilipat, handuk B dibentangkan di bawah matahari. Handuk mana yang lebih cepat kering? Kenapa?', 'Handuk B. Bentangan membuat permukaannya luas, ditambah ada panas matahari dan angin.')}` },

        /* 4 — Contoh sehari-hari */
        { title: "Penguapan di Sekitar Kita", html:
          `<h2>Penguapan ada di mana-mana</h2>
          <p class="lead">Setelah tahu caranya, kamu akan mulai menemukan penguapan di banyak tempat. Lihat contoh berikut, lengkap dengan faktor yang membantunya.</p>
          ${examples([
            ['👕','<b>Jemuran menjadi kering.</b> Air di kain menguap ke udara.','panas matahari, angin'],
            ['🍽️','<b>Piring dan gelas basah mengering di rak.</b> Lapisan air tipis punya permukaan yang luas.','luas permukaan'],
            ['🌧️','<b>Genangan air mengering setelah hujan.</b> Air di tanah menguap terkena matahari.','panas matahari, luas permukaan'],
            ['🧂','<b>Garam dari air laut.</b> Air laut dijemur di ladang garam. Airnya menguap, garamnya tertinggal.','panas matahari, angin'],
            ['🥵','<b>Keringat mengering.</b> Saat keringat menguap, badan terasa lebih sejuk.','angin, kipas'],
            ['🪴','<b>Tanah di pot menjadi kering.</b> Sebagian air di tanah menguap, sebagian lagi diserap akar tanaman.','panas, angin']
          ])}
          ${fact('Sejak dulu manusia memanfaatkan penguapan: menjemur padi, ikan asin, dan kerupuk. Setelah airnya menguap, makanan itu jadi lebih awet.')}
          ${ask('Coba cari satu contoh penguapan di rumahmu hari ini. Faktor apa yang membuatnya cepat atau lambat?')}` },

        /* 5 — Menguap vs mendidih */
        { title: "Menguap atau Mendidih?", html:
          `<h2>Sama-sama jadi uap air, tetapi berbeda</h2>
          <p class="lead">Air yang direbus di panci juga berubah menjadi uap air. Apakah itu juga penguapan? Hasilnya sama, yaitu uap air, tetapi cara terjadinya berbeda.</p>
          ${fig(P5)}
          <div class="table-wrap"><table class="compare">
            <thead><tr><th></th><th>Menguap</th><th>Mendidih</th></tr></thead>
            <tbody>
              <tr><th>Tempat terjadi</th><td>Hanya di permukaan air</td><td>Di seluruh bagian air</td></tr>
              <tr><th>Suhu</th><td>Bisa pada suhu apa saja, panas maupun sejuk</td><td>Saat air mencapai sekitar 100 °C</td></tr>
              <tr><th>Kecepatan</th><td>Pelan dan lama</td><td>Cepat</td></tr>
              <tr><th>Tandanya</th><td>Tidak ada gelembung, air perlahan berkurang</td><td>Gelembung besar naik, air bergolak</td></tr>
              <tr><th>Contoh</th><td>Jemuran, genangan, piring basah</td><td>Air dalam teko di atas kompor</td></tr>
            </tbody>
          </table></div>
          ${safe('Air mendidih sangat panas. Jangan mendekati kompor atau teko tanpa ditemani orang dewasa.')}
          ${fact('Uap air itu tidak terlihat. Kabut putih di atas air panas sebenarnya titik-titik air yang sangat kecil, terbentuk ketika uap air mendingin di udara.')}
          ${terms([['Mendidih','Air berubah menjadi uap air di seluruh bagiannya, ditandai gelembung.'],['Titik didih','Suhu saat air mulai mendidih, sekitar 100 °C.']])}
          ${ask('Air di kolam ikan tidak pernah mendidih, tetapi lama-lama tetap berkurang. Itu menguap atau mendidih? Kenapa?', 'Menguap. Airnya tidak bergelembung dan suhunya jauh di bawah 100 °C.')}` },

        /* 6 — Siklus air & transpirasi */
        { title: "Air Berkeliling: Siklus Air dan Tumbuhan", html:
          `<h2>Penguapan membuat air berkeliling bumi</h2>
          <p class="lead">Matahari memanaskan air di laut, sungai, danau, dan tanah basah. Air menguap, naik ke udara, lalu turun lagi sebagai hujan. Perjalanan ini berputar terus, karena itu disebut <strong>siklus air</strong>.</p>
          ${fig(P6)}
          ${steps(['<b>Menguap.</b> Panas matahari mengubah air menjadi uap air yang naik ke udara.', '<b>Mengembun.</b> Di tempat tinggi udara lebih dingin. Uap air mendingin dan menjadi titik-titik air kecil yang berkumpul membentuk awan.', '<b>Hujan.</b> Saat titik-titik air makin banyak dan berat, air jatuh sebagai hujan.', '<b>Mengalir dan meresap.</b> Air hujan mengalir ke sungai dan laut, atau meresap ke tanah. Lalu air menguap lagi.'])}
          <h3>Tumbuhan juga menguapkan air</h3>
          <p>Akar tumbuhan menyerap air dari tanah. Air itu naik lewat batang sampai ke daun. Sebagian air kemudian keluar dari daun sedikit demi sedikit sebagai uap air, lewat lubang-lubang sangat kecil di daun. Peristiwa ini disebut <strong>transpirasi</strong>.</p>
          ${chain([['🌱','Akar<br>menyerap air'], '➜', ['🌿','Batang<br>mengalirkan air'], '➜', ['🍃','Daun melepas<br>uap air']])}
          <p>Uap air dari daun ikut naik ke udara dan menjadi bagian dari siklus air.</p>
          ${fact('Berteduh di bawah pohon terasa lebih sejuk. Selain teduh, daun-daunnya juga melepaskan uap air ke udara.')}
          ${terms([['Mengembun','Uap air mendingin lalu berubah kembali menjadi titik-titik air.'],['Awan','Kumpulan titik-titik air kecil di langit.'],['Siklus air','Perputaran air: menguap, mengembun, hujan, lalu menguap lagi.'],['Transpirasi','Tumbuhan melepas uap air lewat daunnya.']])}
          ${ask('Kalau matahari tidak pernah memanaskan laut, apa yang akan terjadi pada awan dan hujan?', 'Penguapan berkurang, uap air yang naik jadi sedikit, sehingga awan dan hujan sulit terbentuk.')}` },

        /* 7 — Pengamatan */
        { title: "Ayo Amati: Siapa Lebih Cepat Menguap?", html:
          `<h2>Jadi ilmuwan cilik!</h2>
          <p class="lead">Saatnya membuktikan sendiri. Kita akan menguji satu faktor saja: <strong>luas permukaan</strong>.</p>
          <div class="lab">
            <p class="lab-h">🔬 Pertanyaan percobaan</p>
            <p><strong>Apakah air di wadah lebar lebih cepat berkurang daripada air di wadah sempit?</strong></p>
            <p class="lab-h">Alat dan bahan</p>
            <ul><li>1 piring kecil (lebar) dan 1 gelas (sempit)</li><li>Air dan sendok makan untuk menakar</li><li>Selotip atau spidol untuk menandai tinggi air di gelas</li><li>Kertas dan pensil untuk mencatat</li></ul>
            <p class="lab-h">Langkah kerja</p>
            ${steps(['<b>Tebak dulu!</b> Tuliskan dugaanmu: wadah mana yang airnya berkurang lebih cepat?', 'Tuang air dengan jumlah <b>sama banyak</b> ke piring dan ke gelas. Pakai sendok makan agar adil.', 'Tandai tinggi air di gelas dengan selotip.', 'Letakkan keduanya berdampingan di tempat yang sama, tanpa ditutup.', 'Amati setelah 3 jam dan besok harinya, lalu isi tabel.'])}
            <div class="table-wrap"><table class="obs">
              <thead><tr><th>Waktu</th><th>Piring (lebar)</th><th>Gelas (sempit)</th></tr></thead>
              <tbody><tr><th>Awal</th><td>Air sesuai takaran</td><td>Air sesuai takaran</td></tr><tr><th>Setelah 3 jam</th><td>……</td><td>……</td></tr><tr><th>Besok</th><td>……</td><td>……</td></tr></tbody>
            </table></div>
            ${safe('Lakukan percobaan dengan izin orang tua atau guru. Gunakan air biasa, jangan air panas.')}
          </div>
          ${note('Percobaan yang adil', 'Ubah satu hal saja, yaitu bentuk wadah. Jumlah air, tempat, dan waktu pengamatan harus sama, supaya hasilnya bisa dipercaya.')}
          <h3>Tantangan: mengamati tumbuhan</h3>
          <p>Dengan bantuan orang dewasa, bungkus satu daun tanaman pot dengan kantong plastik bening, ikat longgar di tangkainya, lalu taruh di tempat terang. Setelah beberapa jam, lihat bagian dalam plastik: akan ada butir-butir air. Itu uap air dari daun (transpirasi) yang mengembun di plastik. Setelah selesai, lepas plastiknya.</p>
          ${ask('Kalau percobaan diulang saat udara sangat lembap, menurutmu hasilnya sama? Kenapa?', 'Udara yang lembap sulit menerima uap air baru, jadi penguapan lebih lambat.')}` }
      ],
      aktivitas: {
        title: "Cari contoh penguapan di sekitarmu",
        intro: "Lihat sekelilingmu sekarang atau ingat kejadian kemarin. Tuliskan satu contoh penguapan yang pernah kamu lihat sendiri.",
        label1: "Contoh penguapan yang pernah kamu lihat:", ph1: "Contoh: air di botol minumku berkurang setelah dijemur di jok motor...",
        label2: "Menurutmu, kenapa hal itu bisa terjadi?", ph2: "Coba jelaskan dengan katamu sendiri..."
      },
      quiz: [
        { q: "Penguapan terjadi karena air berubah menjadi...", opts: ["Uap air","Es batu","Garam"], correct: 0, why: "Air berubah wujud menjadi gas yang disebut uap air." },
        { q: "Manakah contoh penguapan yang paling sering kamu lihat di rumah?", opts: ["Baju basah menjadi kering di jemuran","Air membeku di dalam freezer","Gula larut dalam air"], correct: 0, why: "Baju kering karena air di kainnya menguap ke udara." },
        { q: "Apa yang membuat air lebih cepat menguap?", opts: ["Cuaca dingin dan mendung","Cuaca panas dan berangin","Wadah ditutup rapat"], correct: 1, why: "Panas dan angin membantu air menguap lebih cepat." },
        { q: "Saat air menguap, air tersebut sebenarnya...", opts: ["Hilang selamanya","Berubah menjadi uap air dan naik ke udara","Berubah menjadi es"], correct: 1, why: "Air tidak hilang, hanya berubah wujud menjadi uap air." }
      ]
    },

    fotosintesis: {
      name: "Fotosintesis", emoji: "🌱", color: "#23784A", soft: "#D2EFD9", ink: "#0F3D22", edge: "#A5DDB4",
      blurb: "Bagaimana daun membuat makanannya sendiri?",
      tujuanIntro: "Menjelaskan bahwa daun tumbuhan bisa membuat makanannya sendiri menggunakan cahaya matahari, air, dan karbon dioksida dari udara, lalu menyebutkan contoh tumbuhan yang tumbuh subur karena cukup cahaya.",
      tujuanPoints: [
        ["🎯","Memahami bahwa daun bekerja seperti dapur kecil yang membuat makanan untuk tumbuhan."],
        ["🔎","Mengenali tumbuhan yang tumbuh subur karena cukup cahaya matahari."],
        ["💬","Menceritakan tanaman yang pernah kamu amati sendiri."]
      ],

      submateri: [
        /* 1 — Pengertian & alasan */
        { title: "Tumbuhan Membuat Makanannya Sendiri", html:
          `<h2>Tumbuhan tidak perlu belanja makanan</h2>
          <p class="lead">Kita makan nasi dan sayur. Hewan makan rumput atau hewan lain. Kita bisa berjalan mencari makanan, tetapi tumbuhan tidak bisa berpindah tempat. Jadi tumbuhan membuat makanannya sendiri, tepat di tempatnya tumbuh.</p>
          ${versus(['🧒','Manusia dan hewan','Mencari makanan yang sudah jadi, lalu memakannya.'], ['🌳','Tumbuhan','Membuat makanan sendiri di daun.'])}
          ${fig(F1)}
          <p>Cara tumbuhan membuat makanan disebut <strong>fotosintesis</strong>. Kata <em>foto</em> berarti cahaya dan <em>sintesis</em> berarti membuat. Jadi fotosintesis artinya membuat sesuatu dengan bantuan cahaya.</p>
          <p>Dalam fotosintesis, tumbuhan memakai cahaya matahari, air, dan karbon dioksida untuk membuat makanan berupa sejenis gula bernama <strong>glukosa</strong>. Selain itu, tumbuhan melepaskan <strong>oksigen</strong>.</p>
          ${fact('Banyak orang mengira tumbuhan makan tanah. Padahal tanah memberi air dan zat-zat penting untuk membantu tumbuh. Makanannya, yaitu glukosa, dibuat sendiri oleh daun.')}
          ${terms([['Fotosintesis','Cara tumbuhan membuat makanan dengan bantuan cahaya matahari.'],['Glukosa','Sejenis gula yang menjadi makanan tumbuhan.'],['Produsen','Makhluk hidup yang bisa membuat makanannya sendiri, seperti tumbuhan hijau.']])}
          ${ask('Kalau temanmu bertanya, "Makanan tumbuhan itu apa dan dari mana asalnya?", apa jawabanmu?', 'Makanan tumbuhan adalah glukosa, dibuat sendiri di daun lewat fotosintesis.')}` },

        /* 2 — Daun & klorofil */
        { title: "Daun, Dapur Kecil Tumbuhan", html:
          `<h2>Kenali bagian-bagian dapur di daun</h2>
          <p class="lead">Fotosintesis terjadi terutama di <strong>daun</strong>. Kebanyakan daun lebar dan tipis, sehingga mudah menangkap cahaya matahari.</p>
          ${fig(F2)}
          ${cards([
            ['🍃','Helai daun','Bagian daun yang lebar dan pipih untuk menangkap cahaya.'],
            ['🟢','Klorofil','Zat hijau di dalam daun yang menangkap cahaya matahari. Karena klorofil, daun berwarna hijau.'],
            ['🧵','Tulang daun','Saluran yang membawa air ke daun dan mengantar makanan ke bagian lain tumbuhan.'],
            ['🕳️','Stomata','Lubang-lubang sangat kecil di daun. Karbon dioksida masuk dan oksigen keluar lewat sini. Uap air juga keluar lewat sini.']
          ])}
          ${cause('Sebab dan akibatnya', [['Daun lebar dan tipis','banyak cahaya matahari yang tertangkap'],['Daun punya klorofil','cahaya matahari bisa dipakai untuk membuat makanan']])}
          ${fact('Satu daun punya sangat banyak stomata. Ukurannya begitu kecil sehingga hanya terlihat dengan mikroskop.')}
          ${terms([['Klorofil','Zat hijau daun penangkap cahaya matahari.'],['Stomata','Lubang kecil di daun untuk keluar masuk gas.'],['Helai daun','Bagian daun yang lebar dan pipih.']])}
          ${ask('Kenapa kebanyakan daun berbentuk lebar dan tipis? Apa untungnya bagi tumbuhan?', 'Bentuk lebar membuat daun menangkap banyak cahaya, dan bentuk tipis membuat cahaya dan gas mudah menjangkau bagian dalam daun.')}` },

        /* 3 — Bahan */
        { title: "Bahan-Bahan Masakan Daun", html:
          `<h2>Tiga bahan yang dibutuhkan daun</h2>
          <p class="lead">Kamu butuh bahan untuk memasak. Daun juga. Bahan yang dibutuhkan fotosintesis adalah <strong>cahaya matahari</strong>, <strong>air</strong>, dan <strong>karbon dioksida</strong>.</p>
          ${fig(F3)}
          ${cards([
            ['☀️','Cahaya matahari','Sumber tenaga untuk membuat makanan. Ditangkap oleh klorofil di daun.'],
            ['💧','Air','Diserap akar dari tanah, lalu naik lewat batang sampai ke daun.'],
            ['CO₂','Karbon dioksida','Gas yang ada di udara dan masuk ke daun lewat stomata. Kita juga mengeluarkan karbon dioksida saat bernapas.']
          ])}
          <h3>Perjalanan air dan karbon dioksida</h3>
          ${chain([['🌱','Akar<br>menyerap air'], '➜', ['🌿','Batang<br>mengalirkan air'], '➜', ['🍃','Air tiba<br>di daun']])}
          ${chain([['CO₂','Karbon dioksida<br>di udara'], '➜', ['🕳️','Masuk lewat<br>stomata'], '➜', ['🍃','Tiba<br>di daun']])}
          ${cause('Sebab dan akibatnya', [['Tanah kering, air kurang','bahan untuk fotosintesis berkurang'],['Tempat gelap, tanpa cahaya','fotosintesis tidak bisa berjalan']])}
          ${fact('Udara bukan hanya oksigen. Udara adalah campuran beberapa gas, dan karbon dioksida hanya sebagian sangat kecil. Walau sedikit, jumlahnya sudah cukup untuk tumbuhan.')}
          ${terms([['Karbon dioksida','Gas di udara. Kita keluarkan saat bernapas, dan tumbuhan memakainya untuk fotosintesis.'],['Menyerap','Mengambil dan memasukkan ke dalam, seperti akar menyerap air.']])}
          ${ask('Kalau tanaman di pot lupa disiram berhari-hari, bahan apa yang kurang? Apa dampaknya bagi daun?', 'Air kurang, sehingga daun sulit membuat makanan. Tanaman jadi lemas dan layu.')}` },

        /* 4 — Proses & hasil */
        { title: "Dari Bahan Menjadi Makanan", html:
          `<h2>Proses fotosintesis selangkah demi selangkah</h2>
          <p class="lead">Semua bahan sudah tiba di daun. Bagaimana daun mengubahnya menjadi makanan?</p>
          ${steps(['<b>Klorofil</b> di daun menangkap cahaya matahari.', '<b>Air</b> dari akar sampai ke daun, dan <b>karbon dioksida</b> masuk lewat stomata.', 'Dengan tenaga cahaya, daun mengolah air dan karbon dioksida.', 'Terbentuklah <b>glukosa</b> (makanan) dan <b>oksigen</b>.', 'Glukosa dialirkan ke seluruh tubuh tumbuhan. Oksigen dilepaskan ke udara lewat stomata.'])}
          ${fig(F4)}
          ${chain([['💧','Air'], '+', ['CO₂','Karbon<br>dioksida'], '+', ['☀️','Cahaya<br>matahari'], '➜', ['🍬','Glukosa<br>(makanan)'], '+', ['O₂','Oksigen']])}
          <h3>Ke mana perginya glukosa?</h3>
          <p>Glukosa dipakai tumbuhan untuk tumbuh, misalnya membuat akar, batang, daun baru, bunga, dan buah. Sebagian disimpan untuk cadangan.</p>
          ${examples([['🍠','Ubi dan singkong menyimpan cadangan makanan di akarnya.'],['🌾','Padi menyimpan cadangan makanan di bulirnya. Itulah yang menjadi beras.'],['🍎','Buah menyimpan makanan yang membuat rasanya manis.']])}
          ${fact('Fotosintesis hanya berjalan jika ada cahaya. Di malam hari, saat tidak ada cahaya matahari, fotosintesis berhenti.')}
          ${terms([['Glukosa','Sejenis gula hasil fotosintesis, makanan bagi tumbuhan.'],['Oksigen','Gas hasil fotosintesis yang dilepaskan ke udara dan kita hirup untuk bernapas.']])}
          ${ask('Sebutkan dua hasil fotosintesis. Mana yang dipakai tumbuhan sebagai makanan, dan mana yang dilepaskan ke udara?', 'Glukosa dipakai sebagai makanan. Oksigen dilepaskan ke udara.')}` },

        /* 5 — Cahaya & contoh tumbuhan */
        { title: "Cahaya dan Tumbuhan yang Sehat", html:
          `<h2>Kenapa tumbuhan butuh cahaya?</h2>
          <p class="lead">Cahaya adalah tenaga untuk fotosintesis. Tanpa cukup cahaya, daun sulit membuat makanan.</p>
          ${versus(['🪴','Cukup cahaya','Daun hijau dan segar, tumbuhan kuat, dan makanan yang dibuat banyak.'], ['🌑','Kurang cahaya','Daun pucat atau kekuningan, batang lemas, tumbuh lambat, dan bisa layu.'], true)}
          <p>Tumbuhan juga cenderung tumbuh miring ke arah cahaya. Coba lihat tanaman di dekat jendela: daunnya biasanya menghadap ke luar.</p>
          ${cause('Sebab dan akibatnya', [['Cahaya cukup','fotosintesis lancar, makanan banyak, tumbuhan sehat'],['Cahaya kurang','fotosintesis pelan, makanan sedikit, tumbuhan pucat dan lemah'],['Tidak ada cahaya (malam)','fotosintesis berhenti sementara']])}
          <h3>Siapa saja yang berfotosintesis?</h3>
          <p>Hampir semua tumbuhan yang kita kenal melakukan fotosintesis, dari yang kecil sampai yang besar.</p>
          ${chips([['🌾','Padi'],['🌽','Jagung'],['🥭','Pohon mangga'],['🥬','Bayam'],['🌿','Kangkung'],['🪷','Teratai'],['🍀','Lumut']])}
          ${fact('Bayam merah dan daun berwarna ungu juga berfotosintesis. Klorofilnya tetap ada, hanya tertutup warna lain.')}
          <h3>Benar atau salah?</h3>
          ${tf([['Semua tumbuhan butuh cahaya sebanyak yang sama.','Salah.','Ada tumbuhan yang suka tempat terik, seperti jagung, dan ada yang cukup di tempat teduh, seperti lumut. Namun semuanya tetap butuh cahaya.'],['Makanan utama tumbuhan berasal dari tanah.','Salah.','Makanan tumbuhan dibuat sendiri di daun lewat fotosintesis. Tanah memberi air dan zat penting untuk membantu tumbuh.']])}
          ${ask('Kenapa tanaman di sudut ruangan yang gelap sebaiknya dipindahkan ke tempat yang lebih terang?', 'Di tempat terang, daun mendapat cukup cahaya untuk membuat makanan, sehingga tanaman lebih sehat.')}` },

        /* 6 — Manfaat */
        { title: "Manfaat Fotosintesis untuk Semua", html:
          `<h2>Bukan hanya tumbuhan yang untung</h2>
          <p class="lead">Fotosintesis terjadi di daun yang kecil, tetapi manfaatnya sampai ke banyak makhluk hidup.</p>
          ${cards([
            ['🌱','Bagi tumbuhan','Glukosa menjadi makanan untuk tumbuh: akar panjang, batang tinggi, daun baru, bunga, dan buah.'],
            ['🐛','Bagi hewan','Hewan memakan tumbuhan, atau memakan hewan yang makan tumbuhan. Rantai makanan biasanya berawal dari tumbuhan.'],
            ['🧑','Bagi manusia','Kita mendapat nasi, sayur, buah, dan kayu dari tumbuhan, serta oksigen untuk bernapas.'],
            ['🌍','Bagi lingkungan','Tumbuhan memakai karbon dioksida dari udara. Pohon juga menjadi rumah hewan dan memberi tempat teduh.']
          ])}
          ${note('Catat baik-baik: oksigen', 'Yang dilepaskan tumbuhan saat fotosintesis adalah gas oksigen. Udara terdiri dari beberapa gas, dan oksigen adalah gas yang kita hirup untuk bernapas.')}
          <h3>Energi matahari berpindah lewat makanan</h3>
          ${chain([['☀️','Matahari'], '➜', ['🌾','Padi membuat<br>makanan'], '➜', ['🐛','Ulat<br>memakan padi'], '➜', ['🐦','Burung<br>memakan ulat']])}
          <p>Kamu akan mempelajari urutan makan dan dimakan ini lebih jauh di topik Rantai Makanan.</p>
          ${fact('Nasi yang kamu makan berasal dari padi. Padi membuat makanan lewat fotosintesis, lalu menyimpannya di bulir.')}
          ${ask('Kalau semua pohon di sekitarmu ditebang, hal apa saja dalam kehidupanmu yang akan terpengaruh? Tulis dua.', 'Misalnya: makanan dan tempat tinggal hewan berkurang, oksigen berkurang, dan tempat berteduh hilang.')}` },

        /* 7 — Pengamatan */
        { title: "Ayo Amati: Tanaman dan Cahaya", html:
          `<h2>Buktikan sendiri kebutuhan cahaya tumbuhan</h2>
          <p class="lead">Kita akan membandingkan kecambah yang tumbuh di tempat terang dan di tempat gelap.</p>
          <div class="lab">
            <p class="lab-h">🔬 Pertanyaan percobaan</p>
            <p><strong>Apakah kecambah di tempat terang tumbuh berbeda dari kecambah di tempat gelap?</strong></p>
            <p class="lab-h">Alat dan bahan</p>
            <ul><li>2 gelas plastik</li><li>Tanah atau kapas basah</li><li>Biji kacang hijau (jumlah sama untuk kedua gelas)</li><li>Kardus atau lemari gelap</li><li>Penggaris dan alat tulis</li></ul>
            <p class="lab-h">Langkah kerja</p>
            ${steps(['<b>Tebak dulu!</b> Tuliskan dugaanmu tentang perbedaan kedua kecambah.', 'Isi kedua gelas dengan tanah atau kapas basah, lalu tanam biji kacang hijau dalam jumlah sama.', 'Beri label <b>T</b> (terang) dan <b>G</b> (gelap).', 'Letakkan gelas T di dekat jendela yang terang. Letakkan gelas G di dalam kardus atau lemari gelap.', 'Siram keduanya dengan air yang sama banyak setiap hari.', 'Amati selama 5–7 hari. Ukur tinggi dan perhatikan warna daunnya, lalu isi tabel.'])}
            <div class="table-wrap"><table class="obs">
              <thead><tr><th>Hari</th><th>Gelas T (terang)</th><th>Gelas G (gelap)</th></tr></thead>
              <tbody><tr><th>Hari ke-3</th><td>Tinggi: …… Warna: ……</td><td>Tinggi: …… Warna: ……</td></tr><tr><th>Hari ke-5</th><td>Tinggi: …… Warna: ……</td><td>Tinggi: …… Warna: ……</td></tr><tr><th>Hari ke-7</th><td>Tinggi: …… Warna: ……</td><td>Tinggi: …… Warna: ……</td></tr></tbody>
            </table></div>
            ${safe('Lakukan percobaan dengan izin orang tua atau guru. Cuci tangan setelah memegang tanah.')}
            <details class="peek"><summary>Intip hasil yang biasanya terjadi</summary><div>Kecambah di tempat gelap biasanya tumbuh panjang tetapi pucat kekuningan dan lemas. Kecambah di tempat terang biasanya lebih kokoh dengan daun hijau. Catat apa yang benar-benar kamu lihat, karena hasilnya bisa sedikit berbeda.</div></details>
          </div>
          ${note('Percobaan yang adil', 'Ubah satu hal saja, yaitu cahaya. Jumlah biji, tanah, air, dan gelasnya harus sama, supaya perbedaan hasilnya benar-benar karena cahaya.')}
          <h3>Tantangan</h3>
          <p>Dengan bantuan guru atau orang tua, tutup sebagian satu daun dengan kertas hitam dan jepit dengan klip selama 5–7 hari. Setelah dibuka, bandingkan warna bagian yang tertutup dengan bagian yang tidak.</p>
          ${ask('Dari pengamatanmu, apa buktinya bahwa cahaya penting bagi tumbuhan? Tulis satu kalimat kesimpulan.', 'Bandingkan warna daun dan kekuatan batang kecambah di tempat terang dan di tempat gelap.')}` }
      ],
      aktivitas: {
        title: "Amati tanaman di sekitarmu",
        intro: "Ingat-ingat tanaman yang pernah kamu lihat, di rumah, sekolah, atau taman.",
        label1: "Tanaman apa yang pernah kamu lihat tumbuh subur karena banyak cahaya matahari?", ph1: "Contoh: bunga di pot dekat jendela kelasku daunnya lebar dan hijau...",
        label2: "Pernahkah kamu melihat tanaman yang layu karena kurang cahaya? Ceritakan!", ph2: "Coba jelaskan dengan katamu sendiri..."
      },
      quiz: [
        { q: "Bagian tumbuhan mana yang paling banyak membuat makanan?", opts: ["Daun","Akar","Batang"], correct: 0, why: "Daun adalah bagian yang paling banyak membuat makanan lewat fotosintesis." },
        { q: "Apa yang dibutuhkan daun untuk membuat makanan?", opts: ["Cahaya matahari, air, dan udara","Hanya air saja","Tanah dan pasir"], correct: 0, why: "Fotosintesis membutuhkan cahaya matahari, air, dan udara." },
        { q: "Kenapa tanaman di tempat gelap biasanya terlihat layu?", opts: ["Karena kurang cahaya matahari","Karena kebanyakan air","Karena kedinginan"], correct: 0, why: "Tanpa cukup cahaya, daun sulit membuat makanan sehingga tanaman layu." },
        { q: "Salah satu manfaat fotosintesis bagi manusia adalah...", opts: ["Menghasilkan oksigen yang kita hirup untuk bernapas","Menghasilkan air hujan","Menghasilkan tanah subur"], correct: 0, why: "Saat fotosintesis, tumbuhan melepaskan oksigen ke udara. Oksigen inilah yang kita hirup untuk bernapas." }
      ]
    },

    rantaimakanan: {
      name: "Rantai Makanan", emoji: "🦋", color: "#B85F0A", soft: "#FFE3B5", ink: "#4E2C08", edge: "#F6C67E",
      blurb: "Siapa memakan siapa di kebun sekolah?",
      tujuanIntro: "Menjelaskan urutan makan dan dimakan yang sederhana antara tumbuhan dan hewan di sekitar kita, lalu memberi contoh rantai makanan yang pernah kamu lihat sendiri.",
      tujuanPoints: [
        ["🎯","Memahami bahwa makhluk hidup saling berkaitan lewat makanan."],
        ["➡️","Membaca arah panah: makanan dan energi berpindah ke pemakannya."],
        ["🔎","Mengenali dan menyusun rantai makanan di kebun, sawah, atau kolam."],
        ["💬","Menjelaskan apa yang terjadi jika satu bagian rantai berkurang."]
      ],
      submateri: [
        /* 1 — Apa itu rantai makanan */
        { title: "Apa Itu Rantai Makanan?", html:
          `<h2>Semua makhluk hidup butuh makan</h2>
          <p class="lead">Kamu makan supaya punya tenaga untuk belajar dan bermain. Hewan dan tumbuhan juga butuh makanan. Tenaga dari makanan disebut <strong>energi</strong>.</p>
          ${cards([['🏃','Bergerak','Berlari, terbang, dan berenang butuh energi.'],['🌱','Tumbuh','Menjadi lebih besar juga butuh energi.'],['❤️','Tetap hidup','Tubuh bisa terus bekerja karena ada energi.']])}
          <h3>Contoh di kebun sekolah</h3>
          <p>Ulat makan daun tanaman. Lalu burung makan ulat itu.</p>
          ${foodchain([['🌿','Tanaman','','p'],['🐛','Ulat','','h'],['🐦','Burung','','c']])}
          <p class="cap">Tanaman dimakan ulat. Ulat dimakan burung.</p>
          <p>Urutan makan dan dimakan seperti ini disebut <strong>rantai makanan</strong>. Setiap makhluk hidup saling terhubung, seperti mata rantai.</p>
          ${fact('Energi pertama berasal dari Matahari. Tumbuhan memakai cahaya matahari untuk membuat makanan. Lalu energi itu berpindah ke hewan yang memakan tumbuhan.')}
          ${terms([['Rantai makanan','Urutan makan dan dimakan antara makhluk hidup.'],['Energi','Tenaga untuk bergerak, tumbuh, dan tetap hidup.']])}
          ${ask('Coba ingat sarapanmu tadi. Makanan itu berasal dari tumbuhan atau dari hewan?', 'Nasi, sayur, dan buah berasal dari tumbuhan. Telur, ikan, dan susu berasal dari hewan.')}` },

        /* 2 — Tumbuhan sebagai sumber makanan */
        { title: "Tumbuhan sebagai Sumber Makanan", html:
          `<h2>Tumbuhan, si pembuat makanan</h2>
          <p class="lead">Hewan tidak bisa membuat makanan sendiri. Mereka makan tumbuhan atau makan hewan lain. Tumbuhan berbeda: tumbuhan bisa membuat makanannya sendiri.</p>
          <p>Ingat topik Fotosintesis? Daun memakai cahaya matahari, air, dan karbon dioksida untuk membuat makanan. Karena itu, tumbuhan menjadi sumber makanan bagi banyak hewan.</p>
          ${fig(HUB)}
          <p class="cap">Panah menunjukkan makanan berpindah dari tumbuhan ke hewan.</p>
          <h3>Bagian tumbuhan yang dimakan hewan</h3>
          ${cards([['🍃','Daun','Dimakan ulat, kambing, dan sapi.'],['🍎','Buah','Dimakan burung dan monyet.'],['🌾','Biji','Dimakan ayam dan burung pipit.'],['🥕','Akar','Dimakan kelinci.']])}
          ${cause('Sebab dan akibatnya', [['Tumbuhan tumbuh subur','hewan pemakan tumbuhan punya banyak makanan'],['Tumbuhan sedikit','hewan pemakan tumbuhan bisa kekurangan makanan']])}
          ${terms([['Produsen','Makhluk hidup yang membuat makanannya sendiri, yaitu tumbuhan.'],['Sumber makanan','Tempat makanan berasal.']])}
          ${ask('Sebutkan satu hewan di sekitarmu yang makan tumbuhan. Bagian tumbuhan apa yang ia makan?', 'Contoh: kambing makan daun, ayam makan biji jagung, kelinci makan wortel.')}` },

        /* 3 — Siapa memakan siapa */
        { title: "Siapa Memakan Siapa?", html:
          `<h2>Ada yang makan tumbuhan, ada yang makan hewan</h2>
          <p class="lead">Setiap hewan punya makanan yang berbeda. Kita bisa mengelompokkannya menjadi tiga.</p>
          ${cards([['🐄','Pemakan tumbuhan','Hanya makan tumbuhan.','Sapi, belalang, kelinci, ulat'],['🐍','Pemakan hewan','Makan hewan lain.','Katak, ular, elang'],['🧑','Pemakan tumbuhan dan hewan','Makan keduanya.','Manusia, ayam']])}
          <h3>Membaca arah panah</h3>
          <p>Dalam rantai makanan, kita menggambar panah. Panah menunjuk ke <strong>pemakan</strong>.</p>
          ${foodchain([['🌿','Rumput','','p'],['🦗','Belalang','','h']])}
          <p class="cap">Rumput dimakan belalang. Makanan dan energi berpindah searah panah.</p>
          ${readrow(true, '🌿 ➜ 🦗', 'Rumput dimakan belalang.')}
          ${readrow(false, '🦗 ➜ 🌿', 'Belalang tidak dimakan rumput. Panahnya terbalik.')}
          ${note('Ingat!', 'Panah tidak berarti menyerang. Panah menunjukkan ke mana makanan dan energi berpindah.')}
          <h3>Tebak, dia termasuk kelompok mana?</h3>
          ${tf([['Ulat','Pemakan tumbuhan.','Ulat makan daun.'],['Katak','Pemakan hewan.','Katak memakan serangga, seperti belalang.'],['Ayam','Pemakan tumbuhan dan hewan.','Ayam makan biji-bijian dan juga serangga kecil.']])}
          ${terms([['Herbivora','Hewan pemakan tumbuhan.'],['Karnivora','Hewan pemakan hewan.'],['Omnivora','Pemakan tumbuhan dan hewan.']])}
          ${ask('Ada panah dari 🐸 katak ke 🐍 ular. Apa artinya? Siapa yang memakan siapa?', 'Panah menunjuk ke pemakan. Katak dimakan ular, jadi makanan dan energi berpindah dari katak ke ular.')}` },

        /* 4 — Urutan */
        { title: "Urutan dalam Rantai Makanan", html:
          `<h2>Rantai makanan yang lebih panjang</h2>
          <p class="lead">Rantai makanan bisa pendek, bisa juga panjang. Ini salah satu contohnya.</p>
          ${legend()}
          ${foodchain([['🌿','Rumput','','p'],['🦗','Belalang','','h'],['🐸','Katak','','c'],['🐍','Ular','','c'],['🦅','Elang','','c']])}
          <h3>Kenalan dengan setiap makhluk</h3>
          ${steps(['<b>🌿 Rumput</b> adalah tumbuhan. Ia membuat makanannya sendiri dengan bantuan cahaya matahari. Rumput selalu ada di awal rantai.', '<b>🦗 Belalang</b> memakan rumput.', '<b>🐸 Katak</b> memakan belalang.', '<b>🐍 Ular</b> memakan katak.', '<b>🦅 Elang</b> memakan ular.'])}
          <p><strong>Cara membacanya:</strong> Rumput dimakan belalang. Belalang dimakan katak. Katak dimakan ular. Ular dimakan elang.</p>
          <h3>Contoh rantai lain</h3>
          ${foodchain([['🌿','Rumput','','p'],['🐄','Sapi','','h'],['🧑','Manusia','','o']])}
          ${foodchain([['🌿','Tumbuhan air','','p'],['🐌','Siput','','h'],['🦆','Bebek','','c']])}
          ${fact('Makin ke ujung rantai, biasanya jumlah hewannya makin sedikit. Di kebun ada banyak rumput, tetapi hanya sedikit ular dan elang.')}
          ${terms([['Pemangsa','Hewan yang memakan hewan lain.'],['Mangsa','Hewan yang dimakan hewan lain.']])}
          ${ask('Susun urutan dari rumput, belalang, dan burung. Bagaimana rantai makanannya?', 'Rumput ➜ belalang ➜ burung. Belalang dimakan burung.')}` },

        /* 5 — Sekitar kita */
        { title: "Rantai Makanan di Sekitar Kita", html:
          `<h2>Cari rantai makanan di sekitarmu</h2>
          <p class="lead">Rantai makanan ada di banyak tempat. Pilih satu tempat di bawah ini.</p>
          ${habitats([
            ['🌳','Kebun',[['🌿','Rumput','','p'],['🦗','Belalang','','h'],['🐸','Katak','','c']],[['🌿','Rumput tumbuh di tanah kebun dan menjadi makanan belalang.'],['🦗','Belalang melompat di antara rumput. Katak menangkapnya untuk dimakan.'],['🔗','Kalau rumput banyak, belalang punya banyak makanan. Katak pun ikut punya makanan.']]],
            ['🌾','Sawah',[['🌾','Padi','','p'],['🐭','Tikus','','h'],['🐍','Ular','','c']],[['🌾','Padi tumbuh di sawah. Tikus suka memakan bulir padi.'],['🐍','Ular memakan tikus. Jadi ular membantu petani menjaga padi.'],['🦉','Di beberapa desa, petani menjaga burung hantu karena burung hantu memakan tikus.']]],
            ['🏞️','Kolam',[['🌿','Tumbuhan air','','p'],['🐌','Siput','','h'],['🦆','Bebek','','c']],[['🌿','Tumbuhan air tumbuh di kolam dan menjadi makanan siput.'],['🦆','Bebek mencari siput di air yang dangkal untuk dimakan.'],['💧','Air kolam yang bersih membuat tumbuhan air dan siput bisa hidup dengan baik.']]]
          ])}
          ${fact('Manusia juga bagian dari rantai makanan. Nasi berasal dari padi, dan ikan berasal dari kolam atau sungai.')}
          ${ask('Di dekat rumahmu ada tempat apa: kebun, sawah, kolam, atau taman? Sebutkan satu rantai makanan di sana.', 'Mulai dari tumbuhan, lalu cari hewan yang memakannya, dan hewan yang memakan hewan itu.')}` },

        /* 6 — Kalau hilang */
        { title: "Kalau Salah Satu Bagian Hilang...", html:
          `<h2>Semua bagian saling membutuhkan</h2>
          <p class="lead">Bayangkan sebuah rantai sungguhan. Kalau satu mata rantainya putus, rantai itu tidak bisa bekerja dengan baik. Rantai makanan juga begitu.</p>
          <h3>Ayo coba! Hilangkan satu makhluk hidup</h3>
          ${hilangBox()}
          <p class="cap">Satu bagian berubah, bagian lain ikut berubah.</p>
          ${cause('Contoh sebab dan akibat', [['Belalang berkurang','katak kekurangan makanan'],['Katak berkurang','belalang bertambah banyak dan memakan lebih banyak rumput'],['Rumput berkurang','belalang kekurangan makanan, lalu katak dan ular ikut terkena']])}
          <h3>Kita bisa menjaga keseimbangan lingkungan</h3>
          ${cards([['🌳','Jangan menebang pohon sembarangan','Pohon dan tumbuhan adalah awal rantai makanan.'],['🚯','Jangan buang sampah ke sungai atau kolam','Air yang bersih menjaga tumbuhan dan hewan air.'],['🐸','Jangan menangkap hewan liar sembarangan','Setiap hewan punya peran di lingkungan.'],['🌱','Tanam dan rawat tanaman','Tanaman memberi makanan bagi banyak hewan.']])}
          ${note('Semua penting', 'Katak dan ular mungkin terlihat menakutkan, tetapi mereka membantu menjaga jumlah serangga dan tikus tidak terlalu banyak.')}
          ${terms([['Keseimbangan','Keadaan ketika jumlah makhluk hidup tidak terlalu banyak dan tidak terlalu sedikit.'],['Lingkungan','Semua yang ada di sekitar kita: tanah, air, tumbuhan, dan hewan.']])}
          ${ask('Kamu melihat temanmu membuang sampah ke kolam. Apa yang akan kamu katakan? Kenapa itu berbahaya bagi rantai makanan?', 'Sampah membuat air kotor, sehingga tumbuhan air, siput, dan ikan sulit hidup. Hewan yang memakan mereka pun ikut kekurangan makanan.')}` },

        /* 7 — Pengayaan */
        { title: "Pengayaan: Jaring-Jaring Makanan", html:
          `<h2>Banyak rantai yang saling bertemu</h2>
          <p class="lead">Di alam, satu hewan sering punya lebih dari satu makanan. Jadi rantai makanan saling bersilangan dan membentuk <strong>jaring-jaring makanan</strong>. Ini materi pengayaan, jadi nikmati saja!</p>
          <div class="diagram scroll">${WEB}</div>
          <p class="cap">Setiap panah menunjuk ke pemakan.</p>
          ${examples([['🌿','Rumput dimakan belalang <b>dan</b> tikus.'],['🐍','Ular memakan katak <b>dan</b> tikus.'],['🦅','Elang memakan ular <b>dan</b> tikus.']])}
          ${fact('Karena punya lebih dari satu pilihan makanan, hewan sering lebih mudah bertahan saat salah satu makanannya berkurang.')}
          ${terms([['Jaring-jaring makanan','Kumpulan rantai makanan yang saling terhubung.']])}
          ${ask('Lihat gambar di atas. Temukan satu rantai makanan selain Rumput ➜ Belalang ➜ Katak ➜ Ular ➜ Elang.', 'Contoh: Rumput ➜ Tikus ➜ Ular ➜ Elang, atau Rumput ➜ Tikus ➜ Elang.')}` }
      ],
      aktivitas: {
        title: "Susun rantai makananmu sendiri",
        intro: "Mainkan Susun Rantai Makanan di bawah ini. Setelah itu, ingat-ingat hewan dan tumbuhan yang pernah kamu lihat di kebun, taman, atau halaman rumah.",
        label1: "Hewan apa yang pernah kamu lihat, dan menurutmu ia makan apa?", ph1: "Contoh: aku pernah lihat capung di taman, mungkin ia makan nyamuk...",
        label2: "Apakah ada hewan lain yang mungkin memakan hewan tadi?", ph2: "Coba jelaskan dengan katamu sendiri..."
      },
      susun: { rounds: [
        { title: "Ronde 1: Kebun", tip: "Ada tiga makhluk hidup di kebun. Susun dari awal rantai sampai pemakan terakhir.",
          chain: [{id:"rumput",e:"🌿",n:"Rumput"},{id:"belalang",e:"🦗",n:"Belalang"},{id:"katak",e:"🐸",n:"Katak"}],
          story: "Rumput dimakan belalang. Belalang dimakan katak." },
        { title: "Ronde 2: Sawah", tip: "Sekarang ada empat makhluk hidup di sawah. Mulai dari tumbuhan, ya!",
          chain: [{id:"padi",e:"🌾",n:"Padi"},{id:"tikus",e:"🐭",n:"Tikus"},{id:"ular",e:"🐍",n:"Ular"},{id:"elang",e:"🦅",n:"Elang"}],
          story: "Padi dimakan tikus. Tikus dimakan ular. Ular dimakan elang." },
        { title: "Ronde 3: Rantai panjang", tip: "Yang ini paling panjang. Kamu pasti bisa!",
          chain: [{id:"rumput",e:"🌿",n:"Rumput"},{id:"belalang",e:"🦗",n:"Belalang"},{id:"katak",e:"🐸",n:"Katak"},{id:"ular",e:"🐍",n:"Ular"},{id:"elang",e:"🦅",n:"Elang"}],
          story: "Rumput dimakan belalang. Belalang dimakan katak. Katak dimakan ular. Ular dimakan elang." }
      ] },
      quiz: [
        { q: "Rantai makanan menunjukkan urutan...", opts: ["Tumbuhan tumbuh","Makan dan dimakan antar makhluk hidup","Hewan tidur"], correct: 1, why: "Rantai makanan adalah urutan makan dan dimakan antar makhluk hidup." },
        { q: "Contoh urutan rantai makanan yang benar adalah...", opts: ["Katak → rumput → belalang","Belalang → katak → rumput","Rumput → belalang → katak"], correct: 2, why: "Rumput dimakan belalang, lalu belalang dimakan katak." },
        { q: "Apa yang terjadi jika belalang di kebun habis?", opts: ["Hewan pemakan belalang bisa kekurangan makanan","Tidak terjadi apa-apa","Rumput akan mati semua"], correct: 0, why: "Hewan seperti katak atau burung yang memakan belalang bisa kekurangan makanan." },
        { q: "Makhluk hidup yang biasanya berada di awal rantai makanan adalah...", opts: ["Manusia","Awan","Tumbuhan"], correct: 2, why: "Tumbuhan bisa membuat makanannya sendiri, jadi rantai makanan biasanya dimulai dari tumbuhan." },
        { q: "Dalam rantai Rumput → Belalang → Katak, apa arti tanda panah?", opts: ["Hewan yang kuat mengalahkan hewan yang lemah","Makanan dan energi berpindah ke pemakannya","Hewan berjalan mengikuti panah"], correct: 1, why: "Panah menunjuk ke pemakan. Makanan dan energi berpindah dari yang dimakan ke yang memakan." },
        { q: "Di sawah ada padi, ular, dan tikus. Urutan rantai makanan yang benar adalah...", opts: ["Padi → tikus → ular","Ular → tikus → padi","Tikus → padi → ular"], correct: 0, why: "Padi dimakan tikus, lalu tikus dimakan ular." },
        { q: "Rumput → belalang → katak → ular. Kalau katak banyak berkurang, apa yang paling mungkin terjadi pada belalang?", opts: ["Belalang ikut berkurang","Belalang bisa bertambah banyak","Belalang berubah menjadi katak"], correct: 1, why: "Belalang bisa bertambah banyak karena hewan yang memakannya berkurang." },
        { q: "Cara yang baik untuk menjaga rantai makanan di lingkungan kita adalah...", opts: ["Membuang sampah ke sungai","Menangkap semua belalang di kebun","Tidak menebang pohon sembarangan"], correct: 2, why: "Pohon dan tumbuhan adalah awal rantai makanan. Menjaganya membuat banyak hewan tetap punya makanan." }
      ]
    }
  };

  var TOPIC_ORDER = ["penguapan", "fotosintesis", "rantaimakanan"];
  var STEPS = ["beranda","tujuan","materi","aktivitas","kuis","refleksi"];
  var LABELS = { beranda:"Beranda", tujuan:"Tujuan", materi:"Materi", aktivitas:"Aktivitas", kuis:"Kuis", refleksi:"Refleksi" };
  var current = "beranda";
  var currentTopic = null;
  var visited = safeGet("sainsku_visited", ["beranda"]);

  function safeGet(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function safeSet(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} }
  function tkey(field) { return "sainsku_" + field + "_" + currentTopic; }
  function T() { return TOPICS[currentTopic]; }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]; });
  }

  /* ---------- Beranda: daftar topik ---------- */
  function renderTopicList() {
    var wrap = document.getElementById("topicList");
    wrap.innerHTML = "";
    TOPIC_ORDER.forEach(function (key) {
      var t = TOPICS[key];
      var quiz = safeGet("sainsku_kuis_" + key, null);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "topic";
      btn.style.setProperty("--tc", t.color);
      btn.style.setProperty("--tc-soft", t.soft);
      btn.style.setProperty("--tc-ink", t.ink);
      btn.style.setProperty("--tc-edge", t.edge);
      btn.innerHTML =
        '<div class="icon">' + t.emoji + '</div>' +
        '<div class="topic-info"><strong>' + t.name + '</strong><span>' + t.blurb + '</span></div>' +
        (quiz && quiz.done && quiz.total === t.quiz.length ? '<span class="progress-pill">Skor ' + quiz.score + '/' + t.quiz.length + '</span>' : '') +
        '<span class="topic-arrow">→</span>';
      btn.onclick = function () { selectTopic(key); };
      wrap.appendChild(btn);
    });
  }

  function selectTopic(key) {
    currentTopic = key;
    safeSet("sainsku_topic", key);
    document.documentElement.style.setProperty("--accent", TOPICS[key].color);
    document.documentElement.style.setProperty("--accent-soft", TOPICS[key].soft);
    var tag = document.getElementById("topicTag");
    tag.textContent = TOPICS[key].emoji + " " + TOPICS[key].name;
    tag.classList.add("show");
    goTo("tujuan");
  }

  function renderNav() {
    var nav = document.getElementById("stepnav");
    var cur = STEPS.indexOf(current);
    nav.innerHTML = "";
    STEPS.forEach(function (id, i) {
      var state = i < cur ? "done" : (i === cur ? "active" : "todo");
      var locked = id !== "beranda" && !currentTopic;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "st " + state + (locked ? " locked" : "");
      if (state === "active") b.setAttribute("aria-current", "step");
      b.setAttribute("aria-label", "Langkah " + (i + 1) + " dari " + STEPS.length + ": " + LABELS[id] + (state === "done" ? " (selesai)" : (state === "active" ? " (sedang dibuka)" : "")));
      b.innerHTML = '<span class="st-dot" aria-hidden="true">' + (state === "done" ? "✓" : (i + 1)) + '</span><span class="st-label">' + LABELS[id] + '</span>';
      b.onclick = function () { if (id === "beranda" || currentTopic) goTo(id); };
      nav.appendChild(b);
    });
    document.getElementById("stepCaption").innerHTML = "Langkah <b>" + (cur + 1) + "</b> dari " + STEPS.length + " · <b>" + LABELS[current] + "</b>";
  }

  window.goTo = function (id) {
    if (id !== "beranda" && !currentTopic) id = "beranda";
    current = id;
    if (visited.indexOf(id) === -1) { visited.push(id); safeSet("sainsku_visited", visited); }
    document.querySelectorAll(".panel").forEach(function (p) {
      p.classList.toggle("active", p.getAttribute("data-panel") === id);
    });
    document.getElementById("subnav").classList.toggle("show", id !== "beranda");
    document.getElementById("homeBtn").classList.toggle("show", id !== "beranda");
    if (id === "beranda") document.getElementById("topicTag").classList.remove("show");
    renderNav();
    if (id === "beranda") renderTopicList();
    if (id === "tujuan") renderTujuan();
    if (id === "materi") renderMateri(safeGet(tkey("submateri"), 0));
    if (id === "aktivitas") renderAktivitas();
    if (id === "kuis") renderQuiz();
    if (id === "refleksi") renderRefleksi();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------- Tujuan ---------- */
  function renderTujuan() {
    var t = T();
    document.getElementById("tujuanTitle").textContent = "Yuk pelajari " + t.name.toLowerCase() + "!";
    document.getElementById("tujuanIntro").textContent = t.tujuanIntro;
    var wrap = document.getElementById("tujuanPoints");
    wrap.innerHTML = "";
    t.tujuanPoints.forEach(function (pt) {
      var d = document.createElement("div");
      d.className = "example";
      d.innerHTML = '<span class="emoji">' + pt[0] + '</span><span>' + pt[1] + '</span>';
      wrap.appendChild(d);
    });
  }

  /* ---------- Materi ---------- */
  function renderMateri(idx) {
    var list = T().submateri;
    if (idx < 0) idx = 0;
    if (idx > list.length - 1) idx = list.length - 1;
    safeSet(tkey("submateri"), idx);
    document.getElementById("materiEyebrow").textContent =
      "Materi · Sub-materi " + (idx + 1) + " dari " + list.length + " — " + list[idx].title;
    document.getElementById("materiArea").innerHTML = list[idx].html;
    window.scrollTo(0, 0);
    var dots = document.getElementById("subdots");
    dots.innerHTML = "";
    list.forEach(function (s, i) {
      var d = document.createElement("span");
      if (i === idx) d.className = "active"; else if (i < idx) d.className = "done";
      dots.appendChild(d);
    });
    document.getElementById("materiBack").onclick = function () { if (idx === 0) goTo("tujuan"); else renderMateri(idx - 1); };
    document.getElementById("materiNext").onclick = function () { if (idx === list.length - 1) goTo("aktivitas"); else renderMateri(idx + 1); };
    document.getElementById("materiNext").textContent = (idx === list.length - 1) ? "Lanjut ke aktivitas" : "Lanjut";
  }

  /* ---------- Aktivitas ---------- */
  function renderAktivitas() {
    var a = T().aktivitas;
    document.getElementById("aktTitle").textContent = a.title;
    document.getElementById("aktIntro").textContent = a.intro;
    document.getElementById("aktLabel1").textContent = a.label1;
    document.getElementById("act1").placeholder = a.ph1;
    document.getElementById("aktLabel2").textContent = a.label2;
    document.getElementById("act2").placeholder = a.ph2;
    var d = safeGet(tkey("aktivitas"), null);
    document.getElementById("act1").value = d ? (d.contoh || "") : "";
    document.getElementById("act2").value = d ? (d.alasan || "") : "";
    renderSusun();
  }
  window.saveActivity = function () {
    safeSet(tkey("aktivitas"), { contoh: document.getElementById("act1").value, alasan: document.getElementById("act2").value });
    flashNote("actSaveNote");
  };
  function flashNote(id) {
    var el = document.getElementById(id);
    el.classList.add("show");
    setTimeout(function () { el.classList.remove("show"); }, 2200);
  }


  /* ---------- Aktivitas interaktif: Susun Rantai Makanan ---------- */
  var S = { round: 0, slots: [], msg: null, tries: 0, solved: false, result: null, order: [] };
  function shuffled(arr) {
    var a = arr.slice(), tries = 0;
    do {
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      tries++;
    } while (tries < 10 && a.every(function (x, i) { return x === arr[i]; }));
    return a;
  }
  function startRound(n) {
    var r = T().susun.rounds[n];
    S.round = n; S.slots = r.chain.map(function () { return null; });
    S.order = shuffled(r.chain.map(function (c) { return c.id; }));
    S.msg = null; S.tries = 0; S.solved = false; S.result = null;
  }
  function renderSusun() {
    var area = document.getElementById("susunArea");
    var g = T().susun;
    if (!g) { area.innerHTML = ""; area.style.display = "none"; return; }
    area.style.display = "block";
    startRound(0);
    drawSusun();
  }
  function cardOf(r, id) { return r.chain.filter(function (c) { return c.id === id; })[0]; }
  function placeCard(id, idx) {
    var at = S.slots.indexOf(id);
    if (at > -1) S.slots[at] = null;
    S.slots[idx] = id; S.result = null; S.msg = null;
  }
  function drawSusun() {
    var g = T().susun, r = g.rounds[S.round], last = S.round === g.rounds.length - 1;
    var saved = safeGet(tkey("susun"), { done: 0 });
    var html = '<div class="susun"><div class="susun-head"><b>🧩 Susun Rantai Makanan</b><span>Ronde ' + (S.round + 1) + ' dari ' + g.rounds.length + '</span></div>' +
      '<p class="susun-tip"><b>' + r.title + '.</b> ' + r.tip + '</p>' +
      '<p class="susun-how">Ketuk atau seret makhluk hidup ke kotak. Mulai dari tumbuhan, dan panah menunjuk ke pemakannya.</p><div class="slots">';
    r.chain.forEach(function (c, i) {
      var id = S.slots[i], card = id ? cardOf(r, id) : null;
      var cls = 'slot' + (card ? ' filled' : '') + (S.result ? (S.result[i] ? ' ok' : ' no') : '');
      html += (i ? '<span class="sarr" aria-hidden="true">➜</span>' : '') +
        '<button type="button" class="' + cls + '" data-slot="' + i + '" aria-label="Kotak ' + (i + 1) + (card ? ': ' + card.n + '. Ketuk untuk mengembalikan' : ': kosong') + '"' + (S.solved ? ' disabled' : '') + '>' +
        (card ? '<span class="se">' + card.e + '</span><span class="sn">' + card.n + '</span>' : '<span class="num">' + (i + 1) + '</span>') + '</button>';
    });
    html += '</div><div class="bank" aria-label="Pilihan makhluk hidup">';
    S.order.forEach(function (id) {
      if (S.slots.indexOf(id) > -1) return;
      var c = cardOf(r, id);
      html += '<button type="button" class="sc" data-id="' + id + '" draggable="' + (S.solved ? 'false' : 'true') + '"' + (S.solved ? ' disabled' : '') + '><span class="se">' + c.e + '</span><span>' + c.n + '</span></button>';
    });
    html += '</div><div class="susun-actions">';
    if (!S.solved) html += '<button type="button" class="btn" id="susunCheck">Periksa</button><button type="button" class="btn secondary" id="susunHint">💡 Petunjuk</button><button type="button" class="btn secondary" id="susunReset">Ulang</button>';
    else html += '<button type="button" class="btn" id="susunNext">' + (last ? 'Main lagi dari awal' : 'Ronde berikutnya') + '</button>';
    html += '</div><div class="susun-msg' + (S.msg ? ' ' + S.msg.cls : '') + '" role="status" aria-live="polite">' + (S.msg ? S.msg.text : (saved.done >= g.rounds.length ? '✅ Kamu sudah menyelesaikan semua ronde. Main lagi kapan saja!' : '')) + '</div></div>';
    var area = document.getElementById("susunArea");
    area.innerHTML = html;
    bindSusun(r);
  }
  function bindSusun(r) {
    var area = document.getElementById("susunArea");
    area.querySelectorAll(".sc").forEach(function (b) {
      b.onclick = function () {
        var i = S.slots.indexOf(null); if (i < 0) { S.msg = { cls: "warn", text: "Semua kotak sudah terisi. Ketuk kotak untuk mengembalikan makhluk hidup." }; drawSusun(); return; }
        placeCard(b.getAttribute("data-id"), i); drawSusun();
      };
      b.ondragstart = function (e) { e.dataTransfer.setData("text/plain", b.getAttribute("data-id")); };
    });
    area.querySelectorAll(".slot").forEach(function (b) {
      var i = parseInt(b.getAttribute("data-slot"), 10);
      b.onclick = function () { if (S.slots[i]) { S.slots[i] = null; S.result = null; S.msg = null; drawSusun(); } };
      b.ondragover = function (e) { e.preventDefault(); };
      b.ondrop = function (e) { e.preventDefault(); var id = e.dataTransfer.getData("text/plain"); if (id && cardOf(r, id)) { placeCard(id, i); drawSusun(); } };
    });
    var chk = document.getElementById("susunCheck");
    if (chk) chk.onclick = function () {
      if (S.slots.indexOf(null) > -1) { S.msg = { cls: "warn", text: "Isi semua kotak dulu, ya." }; drawSusun(); return; }
      var wrong = 0;
      S.result = r.chain.map(function (c, i) { var ok = S.slots[i] === c.id; if (!ok) wrong++; return ok; });
      if (!wrong) {
        S.solved = true;
        var sv = safeGet(tkey("susun"), { done: 0 });
        if (sv.done < S.round + 1) safeSet(tkey("susun"), { done: S.round + 1 });
        S.msg = { cls: "good", text: "🎉 Hebat! " + r.story };
      } else {
        S.tries++;
        S.msg = { cls: "bad", text: wrong + " kotak belum tepat. Ingat: rantai dimulai dari tumbuhan, dan panah menunjuk ke pemakannya." + (S.tries >= 2 ? " Kamu bisa pakai Petunjuk." : "") };
      }
      drawSusun();
    };
    var hint = document.getElementById("susunHint");
    if (hint) hint.onclick = function () {
      var i = -1;
      for (var k = 0; k < r.chain.length; k++) { if (S.slots[k] !== r.chain[k].id) { i = k; break; } }
      if (i < 0) return;
      placeCard(r.chain[i].id, i);
      S.msg = { cls: "warn", text: "Petunjuk: " + (i === 0 ? "rantai dimulai dari tumbuhan, yaitu " + r.chain[0].n + "." : r.chain[i].n + " memakan " + r.chain[i - 1].n.toLowerCase() + ".") };
      drawSusun();
    };
    var rs = document.getElementById("susunReset");
    if (rs) rs.onclick = function () { startRound(S.round); drawSusun(); };
    var nx = document.getElementById("susunNext");
    if (nx) nx.onclick = function () {
      var g = T().susun;
      startRound(S.round === g.rounds.length - 1 ? 0 : S.round + 1); drawSusun();
    };
  }

  /* ---------- Kuis ---------- */
  var qIndex = 0, score = 0, answered = [];
  function renderQuiz() {
    var saved = safeGet(tkey("kuis"), null);
    var qs = T().quiz;
    if (saved && saved.done && saved.total === qs.length) { qIndex = qs.length; score = saved.score; answered = saved.answers || []; showScore(); return; }
    if (saved && saved.done) safeSet(tkey("kuis"), { done: false });
    qIndex = 0; score = 0; answered = [];
    showQuestion();
  }
  function showQuestion() {
    var qs = T().quiz;
    var area = document.getElementById("quizArea");
    var item = qs[qIndex];
    var html = '<div class="qcount">Pertanyaan ' + (qIndex + 1) + ' dari ' + qs.length + '</div>';
    html += '<div class="question">' + item.q + '</div><div class="options">';
    item.opts.forEach(function (opt, i) { html += '<button type="button" class="opt" data-i="' + i + '">' + opt + '</button>'; });
    html += '</div><div class="feedback" id="qFeedback"></div>';
    area.innerHTML = html;
    var buttons = area.querySelectorAll(".opt");
    buttons.forEach(function (btn) {
      btn.onclick = function () {
        buttons.forEach(function (b) { b.disabled = true; });
        var i = parseInt(btn.getAttribute("data-i"), 10);
        var fb = document.getElementById("qFeedback");
        if (i === item.correct) { btn.classList.add("correct"); fb.textContent = "Benar! " + item.why; fb.className = "feedback good"; score++; }
        else { btn.classList.add("wrong"); buttons[item.correct].classList.add("correct"); fb.textContent = "Belum tepat. " + item.why; fb.className = "feedback bad"; }
        answered.push(i === item.correct);
        var nextBtn = document.createElement("button");
        nextBtn.className = "btn"; nextBtn.style.marginTop = "16px";
        nextBtn.textContent = (qIndex === qs.length - 1) ? "Lihat hasil" : "Pertanyaan berikutnya";
        nextBtn.onclick = function () {
          qIndex++;
          if (qIndex < qs.length) showQuestion();
          else { safeSet(tkey("kuis"), { done: true, score: score, total: qs.length, answers: answered.slice() }); showScore(); }
        };
        area.appendChild(nextBtn);
      };
    });
  }
  function showScore() {
    var qs = T().quiz, total = qs.length, name = T().name.toLowerCase();
    var right = score, wrong = total - score, pct = Math.round(right / total * 100);
    var tier = pct >= 90 ? { e: "🏆", t: "Luar biasa!", m: "Kamu sudah paham sekali tentang " + name + ". Hebat! Kamu boleh lanjut ke refleksi atau mencoba lagi untuk seru-seruan." }
      : pct >= 70 ? { e: "🌟", t: "Bagus sekali!", m: "Kamu sudah paham sebagian besar materi " + name + ". Lihat lagi soal yang belum benar, lalu coba lagi kalau ingin nilai yang lebih tinggi." }
      : pct >= 50 ? { e: "😊", t: "Kamu sudah berusaha!", m: "Ayo pelajari materi " + name + " sekali lagi supaya makin paham, lalu coba kuisnya lagi." }
      : { e: "🌱", t: "Ayo semangat!", m: "Tidak apa-apa kalau masih ada yang salah. Baca materi " + name + " pelan-pelan, lalu coba lagi. Kamu pasti bisa!" };
    var map = "";
    if (answered.length === total) {
      map = '<p class="result-sub">Ringkasan jawabanmu</p><div class="qmap">' + answered.map(function (ok, i) {
        return '<span class="qd ' + (ok ? "ok" : "no") + '" aria-label="Soal ' + (i + 1) + ': ' + (ok ? "benar" : "belum benar") + '">' + (i + 1) + (ok ? " ✓" : " ✗") + '</span>';
      }).join("") + '</div>';
    }
    var area = document.getElementById("quizArea");
    area.innerHTML =
      '<div class="result">' +
        '<h2 class="result-title" id="resultTitle" tabindex="-1">Kuis selesai!</h2>' +
        '<div class="result-grid">' +
          '<div class="rtile main"><div class="rl">Nilai akhir</div><div class="rn">' + pct + '</div><div class="rs">Skor ' + right + ' dari ' + total + ' soal</div></div>' +
          '<div class="rtile good"><div class="rn"><span aria-hidden="true">✅</span> ' + right + '</div><div class="rl">Jawaban benar</div></div>' +
          '<div class="rtile bad"><div class="rn"><span aria-hidden="true">❌</span> ' + wrong + '</div><div class="rl">Belum benar</div></div>' +
        '</div>' +
        '<div class="result-msg"><div class="re" aria-hidden="true">' + tier.e + '</div><div><b>' + tier.t + '</b><p>' + tier.m + '</p></div></div>' +
        map +
        '<div class="result-actions">' +
          '<button class="btn retry" type="button" id="retryBtn">🔄 Coba Lagi</button>' +
          '<button class="btn secondary" type="button" id="reviewBtn">📖 Pelajari Materi Lagi</button>' +
          '<button class="btn" type="button" onclick="goTo(\'refleksi\')">Lanjut ke Refleksi</button>' +
        '</div>' +
      '</div>';
    document.getElementById("retryBtn").onclick = function () {
      safeSet(tkey("kuis"), { done: false });
      qIndex = 0; score = 0; answered = [];
      renderQuiz();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    document.getElementById("reviewBtn").onclick = function () { safeSet(tkey("submateri"), 0); goTo("materi"); };
    document.getElementById("resultTitle").focus({ preventScroll: true });
  }

  /* ---------- Refleksi ---------- */
  function renderRefleksi() {
    document.getElementById("ref1").placeholder = T().name.toLowerCase();
    var moodEls = document.querySelectorAll(".mood");
    var selectedMood = safeGet(tkey("mood"), null);
    moodEls.forEach(function (m) {
      m.classList.toggle("selected", m.getAttribute("data-mood") === selectedMood);
      m.onclick = function () {
        moodEls.forEach(function (x) { x.classList.remove("selected"); });
        m.classList.add("selected");
        safeSet(tkey("mood"), m.getAttribute("data-mood"));
      };
    });
    var d = safeGet(tkey("refleksi"), null);
    document.getElementById("ref1").value = d ? (d.paham || "") : "";
    document.getElementById("ref2").value = d ? (d.sulit || "") : "";
    renderRecap();
  }
  window.saveReflection = function () {
    safeSet(tkey("refleksi"), { paham: document.getElementById("ref1").value, sulit: document.getElementById("ref2").value });
    flashNote("refSaveNote");
    renderRecap();
  };
  function renderRecap() {
    var quiz = safeGet(tkey("kuis"), null);
    var act = safeGet(tkey("aktivitas"), null);
    var wrap = document.getElementById("recapWrap");
    var recap = document.getElementById("recap");
    var rows = "";
    if (quiz && quiz.done && quiz.total === T().quiz.length) rows += '<div class="recap-item"><span>Skor kuis</span><b>' + quiz.score + ' / ' + T().quiz.length + '</b></div>';
    if (act && act.contoh) rows += '<div class="recap-item"><span>Jawaban aktivitas yang kamu catat</span><b>' + escapeHtml(act.contoh) + '</b></div>';
    recap.innerHTML = rows;
    wrap.style.display = rows ? "block" : "none";
  }

  renderNav();
  renderTopicList();
  goTo("beranda");
})();
