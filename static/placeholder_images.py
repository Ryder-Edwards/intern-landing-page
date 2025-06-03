"""
Script to create placeholder images for the LineIntel landing page
Run this to generate the required image files
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_images():
    # Create static directory if it doesn't exist
    os.makedirs('static', exist_ok=True)
    
    # Create logo placeholder
    logo = Image.new('RGBA', (200, 200), (20, 160, 133, 255))
    draw = ImageDraw.Draw(logo)
    
    # Draw circuit-like pattern for logo
    for i in range(0, 200, 20):
        draw.line([(i, 0), (i, 200)], fill=(255, 255, 255, 50), width=1)
        draw.line([(0, i), (200, i)], fill=(255, 255, 255, 50), width=1)
    
    # Add "LI" text in center
    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        font = ImageFont.load_default()
    
    text = "LI"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (200 - text_width) // 2
    y = (200 - text_height) // 2
    draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)
    
    logo.save('static/logo.png')
    
    # Create powerline demo image
    demo = Image.new('RGB', (800, 450), (135, 206, 235))  # Sky blue background
    draw = ImageDraw.Draw(demo)
    
    # Draw power lines
    draw.line([(0, 200), (800, 180)], fill=(64, 64, 64), width=3)
    draw.line([(0, 220), (800, 200)], fill=(64, 64, 64), width=3)
    draw.line([(0, 240), (800, 220)], fill=(64, 64, 64), width=3)
    
    # Draw power poles
    draw.rectangle([(150, 100), (160, 300)], fill=(139, 69, 19))
    draw.rectangle([(650, 90), (660, 290)], fill=(139, 69, 19))
    
    # Draw some vegetation
    draw.ellipse([(280, 250), (350, 320)], fill=(34, 139, 34))
    draw.ellipse([(500, 240), (580, 330)], fill=(34, 139, 34))
    
    demo.save('static/powerline-demo.jpg')
    
    print("Placeholder images created successfully!")
    print("- static/logo.png")
    print("- static/powerline-demo.jpg")

if __name__ == "__main__":
    create_placeholder_images()
