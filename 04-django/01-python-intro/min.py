def min(mini):
    result = mini[0]
    print(result)
    for i in mini:
        if i > result:
         return result

result = min([8,5,2,3,4])
print(result)