/*
  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

  createPhoneNumber(int[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"

  The returned format must be correct in order to complete this challenge.
  Don't forget the space after the closing parentheses!
*/
#include <iostream>
using namespace std;

string createPhoneNumber(const int arr [10]){
  string phoneNumber = "(";
  phoneNumber += to_string(arr[0])+to_string(arr[1])+to_string(arr[2]);
  phoneNumber += ") ";
  phoneNumber += to_string(arr[3])+to_string(arr[4])+to_string(arr[5]);
  phoneNumber += "-";
  phoneNumber += to_string(arr[6])+to_string(arr[7])+to_string(arr[8])+to_string(arr[9]);
  return phoneNumber;
}

int main(){
  int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
  cout<<createPhoneNumber(arr)<<endl;
}
