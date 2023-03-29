// 定义全局变量
let fileChunkList = []; // 存储文件切片列表
let uploadedChunkList = []; // 存储已上传的文件切片列表

// 切片上传
function uploadChunks(file) {
  const chunkSize = 2 * 1024 * 1024; // 每个切片大小为 2MB
  const chunkCount = Math.ceil(file.size / chunkSize); // 计算文件切片数量

  // 生成文件切片列表
  for (let i = 0; i < chunkCount; i++) {
    // 生成文件切片列表
    const start = i * chunkSize; // 切片起始位置
    const end = Math.min(file.size, start + chunkSize); // 切片结束位置
    const chunk = file.slice(start, end); // 生成文件切片
    fileChunkList.push(chunk); // 将文件切片添加到文件切片列表中
  }

  // 判断上一个文件是否上传完成
  const lastFile = localStorage.getItem("lastFile"); // 获取本地记录的上一个文件
  if (
    lastFile &&
    lastFile === file.name &&
    localStorage.getItem("uploadedChunks") // 如果上一个文件上传未完成
  ) {
    uploadedChunkList = JSON.parse(localStorage.getItem("uploadedChunks")); // 获取本地记录的已上传切片列表
  } else {
    localStorage.setItem("lastFile", file.name); // 记录本次上传的文件
  }

  // 上传文件切片
  uploadChunk(0, file.name); // 从第一个切片开始上传
}

// 上传单个切片
function uploadChunk(index, fileName) {
  // 上传单个切片
  if (index >= fileChunkList.length) {
    // 如果所有切片上传完成
    mergeChunks(fileName); // 合并文件切片
    return;
  }

  if (uploadedChunkList.includes(index)) {
    // 如果该切片已经上传过
    uploadChunk(index + 1, fileName);
    return;
  }

  const chunk = fileChunkList[index]; // 获取切片
  const formData = new FormData(); // 创建表单数据对象
  formData.append("file", chunk); // 将切片添加到表单数据对象中
  formData.append("fileName", fileName); // 将文件名添加到表单数据对象中
  formData.append("chunkIndex", index); // 将切片编号添加到表单数据对象中

  // 发送切片上传请求
  fetch("/upload/chunk", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json()) // 将响应结果转换为 JSON 对象
    .then((result) => {
      // 处理响应结果
      if (result.code === 0) {
        // 切片上传成功
        uploadedChunkList.push(index); // 记录已上传的切片编号
        localStorage.setItem(
          // 将已上传的切片列表保存到本地
          "uploadedChunks",
          JSON.stringify(uploadedChunkList) // 将数组转换为 JSON 字符串
        ); // 将已上传的切片列表保存到本地
        uploadChunk(index + 1, fileName); // 上传下一个切片
      } else {
        // 切片上传失败
        console.log(result.message); // 打印错误信息
      }
    })
    .catch((error) => {
      console.log(error); // 打印错误信息
    });
}

// 合并文件切片
function mergeChunks(fileName) {
  const formData = new FormData();
  formData.append("fileName", fileName);
  formData.append("chunkCount", fileChunkList.length);

  // 发送合并文件切片请求
  fetch("/upload/merge", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.code === 0) {
        // 文件上传成功
        console.log("File uploaded successfully!");
        localStorage.removeItem("lastFile"); // 删除本地记录的上一个文件
        localStorage.removeItem("uploadedChunks"); // 删除本地记录的已上传切片列表
      } else {
        // 文件上传失败
        console.log(result.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// 文件上传按钮点击事件
document.querySelector("#file-upload").addEventListener("change", (event) => {
  const file = event.target.files[0]; // 获取上传的文件
  if (file) {
    // 如果文件存在
    fileChunkList = []; // 清空文件切片列表
    uploadedChunkList = []; // 清空已上传的文件切片列表
    uploadChunks(file); // 开始文件上传
  }
});

// 上面的代码实现主要包括三个部分：

// 1. 切片上传：将大文件分割成多个小文件进行上传，上传过程中需要判断前一个文件是否上传完成。

// 2. 上传单个切片：将单个文件切片上传到后端，上传成功后记录已上传的切片列表，并上传下一个切片。

// 3. 合并文件切片：将所有切片合并成一个完整的文件，上传成功后删除本地记录的上一个文件和已上传切片列表。

// 另外，还需要在文件上传按钮点击事件中调用 `uploadChunks` 函数来开始文件上传。

// 需要注意的是，在切片上传过程中，需要记录已经上传的切片列表，以便下次上传时可以跳过已经上传的部分。这里使用了 `localStorage` 来记录上传的信息，也可以使用后端接口来记录上传信息。

// 另外，如果需要实现断点续传功能，还需要在上传前检查本地记录的已上传切片列表，将未上传的切片进行上传，已上传的切片跳过即可。
