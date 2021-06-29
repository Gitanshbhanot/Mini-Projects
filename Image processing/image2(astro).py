from PIL import Image, ImageFilter
img = Image.open('./astro.jpg')
# new_img = img.resize((400, 400))  # doesn't keep aspect ratio
img.thumbnail((400, 200))  # keeps ratio so assigns size accordingly
print(img.size)
img.save('thumbnail.jpg')
