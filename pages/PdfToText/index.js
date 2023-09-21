'use client'
import React , {useState} from 'react'

const index = () => {
    const [selectedFile , setSelectedFile] = useState(null);

    const fileHandler = (e)=>{
        const file = e.target.files[0];
        setSelectedFile(file)
    }
    console.log(selectedFile)

    const uploadFile = async (e)=>{
        e.preventDefault()
        if (selectedFile) {
            const data = new FormData();
            data.append('file', selectedFile);
      
            try {
              const response = await fetch('/api/text', {
                method: 'POST',
                body: data,
              });
              const res = await response.json();
              console.log(res.message)
            } catch (error) {
              console.error('Error uploading file:', error);
            }
          } else {
            console.error('No file selected');
          }
    }

  return (
    <>
     <div className="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
    </div>
    <div className='w-full h-screen flex justify-center items-center' >
        
        <form onSubmit={uploadFile} className='flex flex-col gap-3' >
            <h1 className='text-center text-red-600' >Upload Your PDF (pdf must have text content) </h1>
            <input type="file" onChange={fileHandler} className='px-4 py-2 shadow-md rounded-2xl bg-green-600 hover:bg-yellow-500 text-white text-xl' />
            <button className='px-4 py-2 shadow-md rounded-2xl bg-green-600 hover:bg-yellow-500 text-white text-xl' >Upload</button>
        </form>
        
        </div>
    </>
  )
}

export default index