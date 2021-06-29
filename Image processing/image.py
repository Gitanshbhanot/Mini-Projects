from PIL import Image, ImageFilter

img = Image.open('../Pikachu.jpg')
# filtered_image = img.filter(ImageFilter.SHARPEN)
filtered_image = img.convert('L')
box = (100, 100, 400, 400)
region = filtered_image.crop(box)
# crooked = filtered_image.rotate(90)
# resize = crooked.resize((500, 500))
region.save("crop", 'png')
print(img.format)
print(img.size)
print(img.mode)
# filtered_image.show()
