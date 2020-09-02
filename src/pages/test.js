import React, { useEffect } from 'react'

export default function a() {
    useEffect(() => {
        document.querySelector("button").onclick = async function () {
            const result = await upload();
            // const img = document.getElementById("imgAvatar")
            // img.src = result.path;
            console.log(result)
        }
    })
    async function upload() {
        const inp = document.getElementById("avatar");
        if (inp.files.length === 0) {
            alert("请选择要上传的文件");
            return;
        }
        const formData = new FormData(); //构建请求体

        formData.append("image", inp.files[0]);

        formData.append('userPassWord', 'fdsafddfsjiof');
        formData.append('userNickname', 'fdsafdsdfjiof');
        formData.append('userName', 'tanddfsdsdd');
        const url = "/api/user/addUser"
        const resp = await fetch(url, {
            method: "POST",
            body: formData //自动修改请求头
        });

        const result = await resp.json();
        return result;
    }


    return (
        <>
            <img src="" alt="" id="imgAvatar" />
            <input type="file" id="avatar" />
            <button>上传</button>

        </>
    )
}
