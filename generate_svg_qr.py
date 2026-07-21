import base64

def get_base64(filepath):
    with open(filepath, 'rb') as f:
        return base64.b64encode(f.read()).decode('utf-8')

logo_b64 = get_base64('src/assets/logo.png')
qr_b64 = get_base64('src/assets/qr_code.png')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="600" height="840" viewBox="0 0 600 840">
  <rect width="600" height="840" rx="24" fill="#FFFBF7"/>
  <rect x="16" y="16" width="568" height="808" rx="16" fill="none" stroke="#D35400" stroke-width="4" stroke-dasharray="8 6"/>
  
  <!-- Header BG -->
  <rect x="40" y="40" width="520" height="150" rx="16" fill="#FFE6D6"/>
  <image href="data:image/png;base64,{logo_b64}" x="140" y="55" width="320" height="120" preserveAspectRatio="xMidYMid meet"/>
  
  <!-- Title & Desc -->
  <text x="300" y="235" font-family="sans-serif" font-size="24" font-weight="bold" fill="#2C3E50" text-anchor="middle">公式ホームページ QRコード</text>
  <text x="300" y="270" font-family="sans-serif" font-size="15" fill="#7F8C8D" text-anchor="middle">お弁当・お惣菜・名物「豚軟骨」の通販情報はこちら！</text>
  
  <!-- QR Container -->
  <rect x="130" y="300" width="340" height="340" rx="20" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="2"/>
  <image href="data:image/png;base64,{qr_b64}" x="150" y="320" width="300" height="300"/>
  
  <!-- Bottom Info -->
  <rect x="80" y="670" width="440" height="50" rx="25" fill="#E67E22"/>
  <text x="300" y="702" font-family="sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">https://hanachanobento.pages.dev/</text>

  <text x="300" y="760" font-family="sans-serif" font-size="15" font-weight="bold" fill="#D35400" text-anchor="middle">華ちゃんお弁当 ｜ 宮崎県都城市上川東2-16-8</text>
  <text x="300" y="790" font-family="sans-serif" font-size="14" fill="#7F8C8D" text-anchor="middle">📞 080-1711-3429 （受付時間 10:00〜）</text>
</svg>'''

output_svg = '/Users/mukulogi/.gemini/antigravity/brain/febb6b26-2ca8-4b7f-b793-9cfc2f4520ee/hanachan_official_qr.svg'
with open(output_svg, 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("SVG created successfully at", output_svg)
