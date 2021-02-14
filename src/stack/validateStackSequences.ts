/**
 * 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，
 * 只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。
 */
export default function validateStackSequences(
  pushed: number[],
  popped: number[]
): boolean {
  let pushedIndex = 0;
  let poppedIndex = 0;
  while (pushed.length !== 0) {
    if (pushed[pushedIndex] !== popped[poppedIndex]) {
      pushedIndex++;
      if (pushedIndex >= pushed.length) return false;
    } else {
      poppedIndex++;
      pushed.splice(pushedIndex, 1);
      pushedIndex--;
    }
  }
  return true;
}
