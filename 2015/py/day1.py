with open('../js/input/day1.txt') as txtFile:
    input = txtFile.read()

print(input)
count = 0
basement = 0

for i, ch in enumerate(input):
    if ch == "(" :
        count += 1
    elif ch == ")":
        count -= 1
    if basement == 0 and count == -1:
       basement = i + 1 
        
       
print ("total characters", len(input))
print ("the total amount of presents delivered", count)
print ("Santa goes to basement on step", basement)
