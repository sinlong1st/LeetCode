

def longest_common_prefix(strs):
    index = 1
    if not strs or len(strs) == 0 or len(strs[0]) == 0:
        return ""
    b_string = strs[0]
    for i, char in enumerate(b_string):
        for j in range(1, len(strs)):
            if len(strs[j]) >= i+1:
                # print(f"Comparing {char} with {strs[j][i]} at index {i} of string {j}")
                if char == strs[j][i]:
                    continue
                else:
                    # print(f"Character mismatch at index {i} for string {j}, Return index {i}")
                    index = i
                    if index < 1:
                        return ""
                    else:
                        return b_string[:index]
            else:
                index = i
                if index < 1:
                    return ""
                else:
                    return b_string[:index]
        index += 1


    if index < 1:
        return ""
    else:
        return b_string[:index]



if __name__ == "__main__":

    # Example usage:
    test_suites = [ ["flower", "flow", "flight"],
                   ["dog", "racecar", "car"],
                   ["", "b"],
                   ["a", "a", "a"],
                   ["ab", "a"],
                    ["flower","flower","flower","flower"]]
    expected_results = ["fl", "", "", "a", "a", "flower"]
    for i, test in enumerate(test_suites):
        result = longest_common_prefix(test)
        print(test_suites[i])
        print(f"Expected: {expected_results[i]}, Got: {result}\n")
        # print(result == expected_results[i])