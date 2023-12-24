print("Welcome")

def printMenu():
    print("Select an algorithm:")
    print("1. Caesar")
    
    
def algo1(text): 
    textList = list(text)
    print(textList)
    x = 0
    for item in textList:
        textList[x] = ord(item)
        textList[x] += 1
        textList[x] = chr(textList[x])
        print(textList[x])
        x+=1

  
def getInput():
    selection = input("")
    print(selection)    
    inputText = input("Enter text\n")
    print(inputText)
    algo1(inputText)
    
    
printMenu()
getInput()



