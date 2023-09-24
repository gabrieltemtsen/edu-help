"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useCompletion } from "ai/react";

export default function Home() {
  // When a file is dropped in the dropzone, call the `/api/addData` API to train our bot on a new PDF File
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF");
      return;
    }

    const formData = new FormData();
    formData.set("file", file);

    const response = await fetch("/api/addData", {
      method: "POST",
      body: formData,
    });

    const body = await response.json();

    if (body.success) {
      alert("Data added successfully");
    }
  }, []);

  // Configure react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  // Vercel AI hook for generating completions through an AI model
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion({
      api: "/api/chat",
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <div className="relative h-screen">
  <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  

   
    <div className="text-center">
      

      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
        Welcome to EDU-HELP AI
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Your AI-powered Educational Helper for the web
      </p>
    </div>

    <div
        {...getRootProps({
          className:
            "dropzone mt-5 bg-gray-900 border border-gray-800 p-10 rounded-md hover:bg-gray-800 transition-colors duration-200 ease-in-out cursor-pointer",
        })}
      >
       <input {...getInputProps()} />
        <p>Upload a PDF You would like to ask questions about</p>
      </div>


    <ul className="mt-16 space-y-5">
      
      <li className="flex gap-x-2 sm:gap-x-4">
        <svg className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="38" rx="6" fill="#2563EB"/>
          <path d="M10 28V18.64C10 13.8683 14.0294 10 19 10C23.9706 10 28 13.8683 28 18.64C28 23.4117 23.9706 27.28 19 27.28H18.25" stroke="white" stroke-width="1.5"/>
          <path d="M13 28V18.7552C13 15.5104 15.6863 12.88 19 12.88C22.3137 12.88 25 15.5104 25 18.7552C25 22 22.3137 24.6304 19 24.6304H18.25" stroke="white" stroke-width="1.5"/>
          <ellipse cx="19" cy="18.6554" rx="3.75" ry="3.6" fill="white"/>
        </svg>

      {/* bot */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700">
          <h2 className="font-medium text-gray-800 dark:text-white">
          {completion === "" ? "Thinking..." : completion}
          </h2>
         
        </div>
        
      </li>
     

      {/* user */}
      {/* <li className="max-w-2xl ml-auto flex justify-end gap-x-2 sm:gap-x-4">
        <div className="grow text-end space-y-3">
        
          <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-white">
              {'text'}
            </p>
          </div>
         
        </div>

        <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
          <span className="text-sm font-medium text-white leading-none">You</span>
        </span>
      </li> */}
      

      
      
 
    
    </ul>
  </div>


  <footer className="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0 dark:bg-slate-900 dark:border-gray-700">
    <div className="flex justify-between items-center mb-3">
     

      
    </div>

    <div className="relative">
      <textarea onChange={handleInputChange} className="p-4 pb-12 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Ask me anything..."></textarea>

      <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900">
        <div className="flex justify-between items-center">
       
          <div className="flex items-center">
         
            
     
            
        
          </div>
        

          <div className="flex items-center gap-x-1">
          
          
           
          <form onSubmit={handleSubmit}>
            <button type="submit" className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
              <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
              </svg>
            </button>
          </form>
           
            
 
          </div>

        </div>
      </div>

    </div>

  </footer>

</div>
    </main>
  );
}