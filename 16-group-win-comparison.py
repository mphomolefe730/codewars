'''
	You are given two lists of integers representing scores for two different groups. 
	Your task is to determine how many times the sum of scores from combinations of two 
	distinct members from the first group exceeds the sum of scores from the corresponding combinations in the second group.
	
	group_1: A list of integers representing scores for the first group.
	group_2: A list of integers representing scores for the second group.
	
	Return a tuple containing two integers: 
	* The first integer represents the number of times group_1 wins.
	* The second integer represents the number of times group_2 wins.
	
	Example:
	Input:
	group_1 = [12, 5, 8, 9]
	group_2 = [7, 11, 6, 4]
	
	Output:
	(5, 0) #In this example, group_1 wins a total of 5 times, while group_2 wins 0 times.
	
	Both lists will have the same length (1 ≤ n ≤ 100).
'''

def compare_group_wins(group_1: list[int], group_2: list[int]) -> tuple[int, int]:
	combination_arr = []
	total_wins = 0
	total_wins_2 = 0

	for i in range(0,len(group_1)):
		for j in range(1,len(group_1)):
			if(j!=i and i< j):
				combination_arr.append([i,j])

	for i in combination_arr:
		total_value_group_1 = group_1[i[0]] + group_1[i[1]]
		#print(f"Array combo: {i}, Group_1: {group_1[i[0]]} + {group_1[i[1]]} = {total_value_group_1}")
		total_value_group_2 = group_2[i[0]] + group_2[i[1]]
		#print(f"Array combo: {i}, Group_2: {group_2[i[0]]} + {group_2[i[1]]} = {total_value_group_2}")
		#print("---------------")
		if(total_value_group_1>total_value_group_2):
			total_wins += 1
		elif(total_value_group_1<total_value_group_2):
			total_wins_2 += 1

	print(f"Group 1 won: {total_wins} time")
	print(f"Group 2 won: {total_wins_2} time")
	return (total_wins, total_wins_2)

compare_group_wins([12,5,8,9], [7,11,6,4])

