var findMedianSortedArrays = (nums1, nums2) => {
  let p1 = 0;
  let p2 = 0;
  let result = [];

  let total = nums1.length + nums2.length;
  let mid = Math.floor(total / 2);
  if (nums1.length === 0) result = nums2;
  else if (nums2.length === 0) result = nums1;
  else {
    while (p1 < nums1.length && p2 < nums2.length && result.length <= mid) {
      if (nums1[p1] < nums2[p2]) {
        result.push(nums1[p1]);
        p1++;
      } else {
        result.push(nums2[p2]);

        p2++;
      }
    }
    while (p2 < nums2.length && result.length <= mid) {
      result.push(nums2[p2]);

      p2++;
    }
    while (p1 < nums1.length && result.length <= mid) {
      result.push(nums1[p1]);

      p1++;
    }
  }
  if (total % 2 !== 0) {
    return result[mid];
  } else {
    return (result[mid] + result[mid - 1]) / 2;
  }
};
console.log(findMedianSortedArrays([1], [2, 3, 4]));
