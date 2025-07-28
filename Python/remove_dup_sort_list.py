

def remove_dup(num_l):
    if len(num_l) == 0:
        return 0
    unique = set(num_l)
    total_l = len(num_l)

    num_l.clear()
    num_l.extend(unique)
    num_l.sort()

    for i in range(total_l - len(num_l)):
        num_l.append("_")

    return len(unique)

def remove_dup_2(num_l):
    unique = []
    for i in range(len(num_l)):
        if i != len(num_l)-1:
            if num_l[i+1] != num_l[i]:
                unique.append(num_l[i])
            else:
                pass
        else:
            unique.append(num_l[i])
    num_l.clear()
    num_l.extend(unique)
    return len(unique)


if __name__ == "__main__":

    nums = [1,1,2]
    expectedNums = [1,2]
    k = len(expectedNums)

    if len(nums) == 0:
        print(0, [])
        exit()

    k_num = remove_dup_2(nums)
    assert k_num == len(expectedNums)
    print(nums)

    for i in range(k_num):
        print(nums[i], expectedNums[i])
        assert nums[i] == expectedNums[i]