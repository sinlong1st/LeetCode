
def get_last_dup_index(string, char):
    temp_index = []
    for i,c in enumerate(string):
        if c == char:
            temp_index.append(i)
    return max(temp_index) if temp_index else -1

def longest_substring_no_repeat(string):
    if not string or len(string) == 0 or len(string) > 50000:
        return 0
    if len(string) == 1:
        return 1

    temp_max = 1
    temp_count = 0
    w_list = []
    for index, char in enumerate(string):
        if char not in w_list:
            # print(f"{char}, {w_list}")
            # print(f"Unique, add count")
            temp_count += 1
            w_list.append(char)
        else:
            # print(f"Exists {char}, count now: {temp_count}")
            if temp_count > temp_max:
                # print(f"New max found: {temp_count}, current max_string: {w_list}")
                temp_max = temp_count

                # Enhance
                # w_list = [string[get_dup_index(w_list, char)+1:index+1]]
            # print(f"Getting new list from {get_last_dup_index(string[:index], char)+1} to {index+1}")
            w_list = list(string[get_last_dup_index(string[:index], char)+1:index+1])

            temp_count = len(w_list)
            # print(f"New list: {w_list}, count: {temp_count}")
    if temp_count > temp_max:
        temp_max = temp_count

    # print(f"\nFinal max: {temp_max}, final list: {w_list}")
    return temp_max

def longest_substring_no_repeat_v1(s: str) -> int:
    last_seen = {}
    start = 0


def longest_substring_no_repeat_v2(s: str) -> int:
    # last seen index of each character
    last = {}
    left = 0
    best = 0

    for right, ch in enumerate(s):
        # if we've seen ch inside the current window, move left
        if ch in last and last[ch] >= left:
            left = last[ch] + 1
        last[ch] = right
        best = max(best, right - left + 1)

    return best

if __name__ == "__main__":

    # Example usage:
    test_suites = ["abcabcbb", "bbbbb", "pwwkew", "dvdf", "a", "ab", "jbpnbwwd"]
    expected_results = [3, 1, 3, 3, 1, 2, 4]
    for i, test in enumerate(test_suites):
        result = longest_substring_no_repeat(test)
        print(test_suites[i])
        print(f"Expected: {expected_results[i]}, Got: {result}\n")
        # print(result == expected_results[i])