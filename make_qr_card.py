from PIL import Image, ImageDraw, ImageFont
import os

# Create canvas
card_w, card_h = 800, 1000
canvas = Image.new('RGB', (card_w, card_h), '#FFF9F5')
draw = ImageDraw.Draw(canvas)

# Border & Header bg
draw.rectangle([(20, 20), (card_w-20, card_h-20)], outline='#D35400', width=6)
draw.rectangle([(30, 30), (card_w-30, 200)], fill='#FFE6D6')

# Load Logo
logo_path = 'src/assets/logo.png'
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert('RGBA')
    logo.thumbnail((320, 140))
    logo_w, logo_h = logo.size
    canvas.paste(logo, ((card_w - logo_w) // 2, 45), logo)

# Load QR Code
qr_path = 'src/assets/qr_code.png'
if os.path.exists(qr_path):
    qr = Image.open(qr_path).convert('RGBA')
    qr = qr.resize((380, 380))
    # Draw white card bg for QR
    draw.rectangle([(card_w//2 - 210, 340), (card_w//2 + 210, 760)], fill='white', outline='#E5E7EB', width=2)
    canvas.paste(qr, ((card_w - 380) // 2, 360), qr)

# Save image
output_path = '/Users/mukulogi/.gemini/antigravity/brain/febb6b26-2ca8-4b7f-b793-9cfc2f4520ee/hanachan_qr_card.png'
canvas.save(output_path)
print("QR Card created successfully at", output_path)
