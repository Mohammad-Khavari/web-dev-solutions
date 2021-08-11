import random
import string


password = '  '.join(random.choice(string.printable) for i in range(12))
print("Second password is:",password)




#char = string.ascii_letters + string.digits + string.punctuation
#password = ''.join(random.choice(char) for i in range(12))
#print("First password is:", password)