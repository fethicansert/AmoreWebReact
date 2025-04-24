import React from 'react'
import InputContainer from '../../../copmonents/input_container'
import CustomTextArea from '../../../copmonents/custom_textarea'
import { CrossCloseIcon, PenIcon, UploadImageIcon } from '../../../assets/svg/svg_package'
import { colors } from '../../../utils/theme'

const UserNewTicket = ({  
    title,
    setTitle,
    question, 
    setQuestion,
    questionImage,
    setQuestionImage,
    hideTitle = false}) => {

  return (
    <div>
    {
        !hideTitle &&  <InputContainer
                            value={title}
                            setValue={setTitle}
                            border={`1px solid ${colors.borderColor1}`} 
                            inputClass={"user-profile-input"}
                            leading={<PenIcon />}
                            height='53px'
                            placeholder='Başlık'
                        />
    }

   <CustomTextArea value={question} onChange={setQuestion}  icon={<PenIcon />} placeholder={'Açıklama Yazısı'} containerStyle={{marginTop:'15px'}}/>

   {
       !questionImage?.image  &&  <div className='dashed-border' >
           <input
               className='input-file'
               type='file'
               onChange={(e) => handleImageChange(e)}
               accept="image/*" />
           <UploadImageIcon color={colors.fadedText} width='23' height='23'/>
           <span style={{color:colors.fadedText,fontSize:'.92rem'}}> Konu ile alakalı fotoğraf </span>
       </div>
   }
  
   {
       questionImage?.image && <div style={{maxWidth:'400px',marginTop:'25px', position:'relative'}}>

           <div onClick={() => setQuestionImage({image:'', imageFile:''})} style={{cursor:'pointer',width:'25px', height:'25px', background:colors.negativeBlack,position:'absolute',right:'-12.5px', top:'-12.5px',borderRadius:'50%',display:'flex', alignItems:'center', justifyContent:'center'}}>
               <CrossCloseIcon width='20' height='20'/>
           </div>
           <img style={{width:'100%', borderRadius:'12px'}} src={questionImage.image.url}/>
       </div>
   }
</div>
  )

  function handleImageChange(e) {    
    if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = function () {
            setQuestionImage({image:{ url: reader.result }, imageFile:file});
        };
        reader.readAsDataURL(file);
    }
}
}

export default UserNewTicket
