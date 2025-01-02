with open('./input/day2.txt') as txtFile:
    input = txtFile.read()

paper = 0
total_paper = 0
for num, box in enumerate(input.splitlines()):
    if "x" in box:
        length, width, height = [int(item) for item in box.split("x")]
        areas = [length * width, width * height, height * length]
        areas.sort()
        paper = (3 * areas[0]) + (2 * areas[1]) + (2 * areas[2])
        total_paper += paper

print("total amount of needed paper is", total_paper)
