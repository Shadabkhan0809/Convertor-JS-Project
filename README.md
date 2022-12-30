# Convertor-JS-Project

Given an string of binary number n. Convert binary fractional n into it’s decimal equivalent.

Examples:

Input: n = 110.101
Output: 6.625

Input: n = 101.1101
Output: 5.8125


We strongly recommend that you click here and practice it, before moving on to the solution.
Following are the steps of converting binary fractional to decimal.

A) Convert the integral part of binary to decimal equivalent
1. Multiply each digit separately from left side of radix point till the first digit by 20, 21, 22,… respectively.
2. Add all the result coming from step 1.
3. Equivalent integral decimal number would be the result obtained in step 2

B) Convert the fractional part of binary to decimal equivalent.
1. Divide each digit from right side of radix point till the end by 21, 22, 23, … respectively.
2. Add all the result coming from step 1.
3. Equivalent fractional decimal number would be the result obtained in step 2.


C) Add both integral and fractional part of decimal number.
Illustration
Let's take an example for n = 110.101

Step 1: Conversion of 110 to decimal
=> 1102 = (1*22) + (1*21) + (0*20)
=> 1102 = 4 + 2 + 0
=> 1102 = 6
So equivalent decimal of binary integral is 6.

Step 2: Conversion of .101 to decimal
=> 0.1012 = (1*1/2) + (0*1/22) + (1*1/23)
=> 0.1012 = 1*0.5 + 0*0.25 + 1*0.125
=> 0.1012 = 0.625
So equivalent decimal of binary fractional is 0.625

Step 3: Add result of step 1 and 2.
=> 6 + 0.625 = 6.625
