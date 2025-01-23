'''
    Task: make a function that takes a string and returns its complementary side A --> T
    C --> G

    e.g.
    ATTCG --> TAAGC
    AGATAC --> TCTATG
'''
def DNA_strand(dna):
    tempArr = []
    tempStr = ''

    for i in dna:
        if i == 'A':
            tempArr.append('T')
        if i == 'T':
            tempArr.append('A')
        if i == 'C':
            tempArr.append('G')
        if i == 'G':
            tempArr.append('C')

    for i in tempArr:
        #this will take array element add add to string
        tempSrt+=i

    return tempStr
