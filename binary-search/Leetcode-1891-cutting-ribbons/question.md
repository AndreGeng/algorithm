# 1891. Cutting Ribbons 🔒

You are given an integer array ribbons, where ribbons[i] represents the length of the ith ribbon, and an integer k. You may cut any of the ribbons into any number of segments of positive integer lengths, or perform no cuts at all.

For example, if you have a ribbon of length 4, you can:

<ul>
	<li>Keep the ribbon of length <code>4</code>,</li>
	<li>Cut it into one ribbon of length <code>3</code> and one ribbon of length <code>1</code>,</li>
	<li>Cut it into two ribbons of length <code>2</code>,</li>
	<li>Cut it into one ribbon of length <code>2</code> and two ribbons of length <code>1</code>, or</li>
	<li>Cut it into four ribbons of length <code>1</code>.</li>
</ul>
</li>
Your task is to determine the maximum length of ribbon, x, that allows you to cut at least k ribbons, each of length x. You can discard any leftover ribbon from the cuts. If it is impossible to cut k ribbons of the same length, return 0.

## Example 1:

Input: ribbons = [9,7,5], k = 3
Output: 5
Explanation:

- Cut the first ribbon to two ribbons, one of length 5 and one of length 4.
- Cut the second ribbon to two ribbons, one of length 5 and one of length 2.
- Keep the third ribbon as it is.
  Now you have 3 ribbons of length 5.

## Example 2:

Input: ribbons = [7,5,9], k = 4
Output: 4
Explanation:

- Cut the first ribbon to two ribbons, one of length 4 and one of length 3.
- Cut the second ribbon to two ribbons, one of length 4 and one of length 1.
- Cut the third ribbon to three ribbons, two of length 4 and one of length 1.
  Now you have 4 ribbons of length 4.

## Example 3:

Input: ribbons = [5,7,9], k = 22
Output: 0
Explanation: You cannot obtain k ribbons of the same positive integer length.

# Constraints:

1 <= ribbons.length <= 105
1 <= ribbons[i] <= 105
1 <= k <= 109
