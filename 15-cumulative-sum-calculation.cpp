/*
    You are given a list of integers. Your task is to calculate the cumulative sum of the elements in the
    list and then find the total of all cumulative sums.

    A vector of integers values where values[i] (1 ≤ i ≤ 100) represents the i-th element of the list.
    For this problem, you can assume that the vector will always contain at least one element.

    Return a single integer representing the total of all cumulative sums.

    Example 1:
    Input: nums = {3,7,12}
    Output: 22
*/

#include <iostream>
#include <vector>
using namespace std;

 int main(){
	int totalValue = 0;
	vector<int> values = {3,4,5};
	vector<int> placeholderArr;
	int arr = 0;

	for(int i = 0; i < 3; i++){
		totalValue = totalValue + values[i];
		placeholderArr.push_back(totalValue);
		cout<<"current total value: " <<totalValue<<endl;
	}
	for(int j = 0; j < 3; j++){
		arr += placeholderArr[j];	
	}
	cout<<"output: "<<arr;

	return 0;
 }
