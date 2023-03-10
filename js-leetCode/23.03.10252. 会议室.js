function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // 按照开始时间排序
  for (let i = 0; i < intervals.length - 1; i++) {
    //只需要比较两次
    console.log(1);
    //如果后面一个数的开头小于结尾
    if (intervals[i + 1][0] < intervals[i][1]) {
      return false; // 存在重叠会议
    }
  }
  return true; // 所有会议均不重叠
}

canAttendMeetings([
  [0, 30],
  [31, 40],
  [41, 50],
]);
