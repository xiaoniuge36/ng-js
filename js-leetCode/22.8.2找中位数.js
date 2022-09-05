/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
   nums3=nums1.concat(nums2).sort((a,b)=> a-b);
   let mid=0
   if(nums3.length%2==0){
       let a=nums3.length/2
       mid=((nums3[a-1]+nums3[a])/2).toFixed(5)
       return mid
   }else{
       let a=Math.floor(nums3.length/2);
       mid=nums3[a]
       mid=mid.toFixed(5)
       return mid

   }
};
