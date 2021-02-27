function minSubArrayLength(target: number, nums: number[]): number {
  let leftIndex = 0;
  let rightIndex = 0;
  let res = 0;
  let currentTotal = 0;
  while (rightIndex < nums.length) {
    // 计算当前窗口的和
    currentTotal += nums[rightIndex];
    while (currentTotal >= target) {
      // 更新结果长度,更新左边下标
      let currentRes = rightIndex - leftIndex + 1;
      if (res === 0) res = currentRes;
      res = res <= currentRes ? res : currentRes;
      currentTotal -= nums[leftIndex++];
    }
    rightIndex++;
  }
  return res;
}

export { minSubArrayLength };
