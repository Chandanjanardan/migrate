// // import React ,{useEffect,useState,useRef}from 'react'

// // function TextBox() {

// //     const [text, setText] = useState("");
// //     const textareaRef = useRef(null);
  
// //     const handleInputChange = (e) => {
// //       setText(e.target.value);
// //     };
// //     let data={text,lang:"en"}
  
// //     useEffect(() => {
// //       const textarea = textareaRef.current;
// //       textarea.style.height = "auto"; 
// //       textarea.style.height = `${textarea.scrollHeight}px`; 
// //     }, [text]);


// //     // ----------------functions
// //     async function handleSubmit() {
// //       try {
// //         const response = await fetch("https://2225-49-249-159-230.ngrok-free.app/TTS/", {
// //           method: "POST",
// //           credentials: "include",
// //           headers: {
// //             'Content-Type': 'application/json'
// //           },
// //           body: JSON.stringify(data)
// //         });
    
// //         if (response.ok) {
// //           const audioBlob = await response.blob();
          
// //           // Now you can use the audioBlob as needed
// //           console.log(audioBlob);
    
// //           // Example: Convert Blob to URL and play it using an audio element
// //           const audioURL = URL.createObjectURL(audioBlob);
// //           const audioElement = new Audio(audioURL);
// //           audioElement.play();
// //         } else {
// //           console.error('Error:', response.status, response.statusText);
// //         }
// //       } catch (error) {
// //         console.error('Fetch error:', error);
// //       }
// //     }
    
  
// //     return (
// //       <div className='tts-container'>
// //         <h1 className='index-heading'>Text To Speech</h1>
// //         <textarea
// //         className='textarea'
// //           ref={textareaRef}
// //           value={text}
// //           onChange={handleInputChange}
// //           placeholder="Enter Text To Run..."
// //           style={{
// //             resize: "none",
// //             overflow: "hidden",
// //           }}
// //         />
// //         {/* <h3>Enter Slider Scale</h3>
// //         <input className='slider' type='range'/>
// //           <div className="controls">
// //             <div className="translitiration control">
// //                 <input type='checkbox' defaultChecked/>
// //                 <p>Translitiration</p>
// //             </div>
// //             <div className="translitiration control">
// //                 <input type='checkbox' defaultChecked/>
// //                 <p>Number Conversion</p>
// //             </div>
// //             <div className="translitiration control">
// //                 <input type='checkbox' defaultChecked/>
// //                 <p>Split Sentence</p>
// //             </div>
// //           </div> */}
// //           <button onClick={handleSubmit}>Test submit</button>
// //       </div>
      
// //     );
// //   };

// // export default TextBox

// // ----------------------------------------------------

// import React, { useEffect, useState, useRef } from 'react';
// import Loading from './Loading';

// function TextBox() {

//   const [text, setText] = useState('');
//   const [loading, setLoading] = useState(false);
//   const textareaRef = useRef(null);

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };


//   let data = { text:text.trim(), lang: 'en' };

//   useEffect(() => {
//     const textarea = textareaRef.current;
//     textarea.style.height = 'auto';
//     textarea.style.height = `${textarea.scrollHeight}px`;
//   }, [text]);

//   async function handleSubmit() {
//     try {
//       setLoading(true); // Set loading to true when starting the request

//       const response = await fetch('http://35.239.199.30:6006/TTS', {
//         method: 'POST',
//         credentials: 'include',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const audioBlob = await response.blob();
//         const audioURL = URL.createObjectURL(audioBlob);
//         const audioElement = new Audio(audioURL);

//         // Set up an event listener for when the audio has finished loading
//         audioElement.addEventListener('canplaythrough', () => {
//           setLoading(false); // Set loading to false when audio has finished loading
//           audioElement.play(); // Start playing the audio
//         });
//       } else {
//         console.error('Error:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setLoading(false); // Set loading to false in case of an error
//     }
//   }

//   return (
//     <div className="tts-container">
//       <h1 className="index-heading">Text To Speech</h1>
//       <textarea
//         className="textarea"
//         ref={textareaRef}
//         value={text}
//         onChange={handleInputChange}
//         placeholder="Enter Text To Run..."
//         style={{
//           resize: 'none',
//           overflow: 'hidden',
//         }}
//       />
//       {/* <h3>Enter Slider Scale</h3>
//       <input className="slider" type="range" />
//       <div className="controls">
//         <div className="translitiration control">
//           <input type="checkbox" defaultChecked />
//           <p>Translitiration</p>
//         </div>
//         <div className="translitiration control">
//           <input type="checkbox" defaultChecked />
//           <p>Number Conversion</p>
//         </div>
//         <div className="translitiration control">
//           <input type="checkbox" defaultChecked />
//           <p>Split Sentence</p>
//         </div>
//       </div> */}
//       {/* <button onClick={handleSubmit}>Test submit</button> */}
//       <div className="audiobtn">
//             <button className="clear">
//                 Clear
//             </button>
//             { text.length!==0 ?
//             <button onClick={handleSubmit}className="submit">
//                 Submit
//             </button>
//               :<button disabled={true}>Submit</button>
// }
//         </div> 

//       {loading && <div className="loader"><Loading/></div>}
//     </div>
//   );
// }

// export default TextBox;



// -----------------------------------------
import React, { useEffect, useState, useRef } from 'react';
import Loading from './Loading';

function TextBox() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  let data = { text: text.trim(), lang: 'en' };

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [text]);

  async function handleSubmit() {
    try {
      setLoading(true);
      setAudioSrc("")

      // const response = await fetch('https://2225-49-249-159-230.ngrok-free.app/TTS/', {
      const response = await fetch('http://108.59.85.65:6006/TTS', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioSrc(audioURL);
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="tts-container">
      <h1 className="index-heading">Text To Speech</h1>
      <textarea
        className="textarea"
        ref={textareaRef}
        value={text}
        onChange={handleInputChange}
        placeholder="Enter Text To Run..."
        style={{
          resize: 'none',
          overflow: 'hidden',
        }}
      />
      <div className="audiobtn">
        <button className="clear">Clear</button>
        {text.length !== 0 ? (
          <button onClick={handleSubmit} className="submit">
            Submit
          </button>
        ) : (
          <button disabled={true}>Submit</button>
        )}
        {audioSrc && (
          <audio controls style={{ position:"absolute",transform:"translatey(120px) translateX(300px)" }}>
            <source src={audioSrc} type="audio/wav" />
            Your browser does not support the audio tag.
          </audio>
        )}
        {/* <button onClick={handlePlayPause}> */}
          {/* {isPlaying ? 'Pause' : 'Play'} */}
        {/* </button> */}
      </div>
      {loading && <div className="loader"><Loading/></div>}
    </div>
  );
}

export default TextBox;
