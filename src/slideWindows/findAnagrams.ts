function findAnagrams(s: string, p: string): number[] {
  const res: number[] = [];
  if (p.length > s.length) return res;
  let left = 0;
  let right = 0;
  const countObj = {};
  let count = 0;
  let missingType = 0;
  // 统计出现次数
  for (let i = 0; i < p.length; i++) {
    if (countObj[p[i]] === undefined) {
      countObj[p[i]] = 1;
      missingType++;
    } else {
      countObj[p[i]]++;
    }
  }
  while (right < s.length) {
    const currentValue = s[right];
    right++;
    if (--countObj[currentValue] === 0) {
      count++;
    }
    // 收窄
    while (count === missingType) {
      if (right - left === p.length) {
        res.push(left);
      }
      const leftValue = s[left];
      left++;
      // 剔除额外字母
      if (++countObj[leftValue] > 0) {
        count--;
      }
    }
  }
  return res;
}

export { findAnagrams };
