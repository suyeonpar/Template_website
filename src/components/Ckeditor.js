import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { addDoc, collection, doc, getFirestore, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { faList, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import { useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage' //0927 추가

const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Button = styled.button`
    border-radius: 0.5rem;
    margin: 20px 12px;
    background-color: rgb(126,34,206);
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    &:nth-child(2){
        background-color: rgb(29,78,216);
    }
    a{color: #fff;}
    svg{margin-right: 12px}
`

function Ckeditor({title, postData}) {
    const memberProfile = useSelector(state => state.user);
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();
    const {board, view} = useParams();
    const [writeData, setWriteData] = useState("");
    //console.log(memberProfile)
    const [message, setMessage] = useState();
    const [editorInstance, setEditorInstance] = useState(null); // 0927 추가
    const [fileUrl, setFileUrl] = useState(""); //0927 추가
    

    useEffect(()=>{
        if(postData){
            setWriteData(postData.content);
        }
    },[postData])

    const dataSubmit = async () =>{
        if(title.length === 0){
            setIsModal(!isModal);
            setMessage("제목을 입력해주세요");
            return;
        }else if(writeData.length === 0){
            setIsModal(!isModal);
            setMessage("내용을 입력해주세요");
            return;
        }
        try{
            if(board && view){
                const postRef = doc(getFirestore(), board, view);
                await updateDoc(postRef, {
                    title: title,
                    content: writeData
                })
                alert("내용이 수정되었습니다.") // 글 수정할수 있는 함수
            }else{
                const fileInput = document.querySelector("#file").files[0]; //file 가져오는 기본문법
                console.log(fileInput)
                uploadToFirebase(fileInput)
                if(fileInput){
                    uploadToFirebase(fileInput)
                }
                // await addDoc(collection(getFirestore(), board),{
                //     title : title,
                //     content : writeData,
                //     view : 1,
                //     uid : memberProfile.uid,
                //     name: memberProfile.data.name,
                //     email: memberProfile.data.email,
                //     nickname: memberProfile.data.nickname,
                //     file: FileUrl,
                //     timestamp: serverTimestamp()
                // })
                // alert("게시글이 성공적으로 등록되었습니다.");
            }
            // navigate(`/service/${board}`)
        }catch(error){
            setIsModal(!isModal);
            setMessage(error);
        }
    }

    //이미지 업로드 함수 
    const uploadToFirebase = async (file) =>{
        const storageRef = ref(getStorage(), 'images/' + file.name); //내가 업로드한 파일명으로 올라간다
        const upload = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) =>{
            upload.on('state_changed',
            (snapshot) =>{

            },
            (error) =>{
                reject(error)
            },
            () =>{
                getDownloadURL(upload.snapshot.ref).then((result)=>{
                    resolve(result)
                    console.log(result)
                    setFileUrl(result);
                })
            }
            )
        })
    }

    function uploadAdepter(editor){
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) =>{
            return{
                upload: async () =>{
                    const file = await loader.file;
                    const downURL = await uploadToFirebase(file);
                    return {default : downURL}
                }
            }
        }
    } //이해하기보단 검색해서 쓰는것

  return (
    <>
    {
        isModal && <Modal error={message} onClose={()=>{setIsModal(false)}} />
    }
    <CKEditor
        editor={ClassicEditor}
        data = {writeData}
        config={{
            placeholder: "내용을 입력하세요.",
            extraPlugins: [uploadAdepter] //0927 추가
        }}
        onReady={ editor => {
            setEditorInstance(editor); //0927 추가
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
            onChange={ ( event, editor ) => {
            const data = editor.getData();
            setWriteData(data);
            console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
        console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
        console.log( 'Focus.', editor );
        } }
    />
    <input type='file' id='file' />
        <ButtonWrap>
            <Button onClick={dataSubmit}><FontAwesomeIcon icon={faPen} />완료</Button>
            <Button><FontAwesomeIcon icon={faList} /><Link to="/service/notice">목록</Link></Button>
        </ButtonWrap>
    </>
  )
}

export default Ckeditor