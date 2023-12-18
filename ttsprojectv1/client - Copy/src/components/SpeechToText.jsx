import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const SpeechToText = () => {
  const { transcript, listening, resetTranscript, startListening, stopListening } = useSpeechRecognition();

  const handleStart = () => {
    console.log("Starting listening...");
    startListening();
  };

  const handleStop = () => {
    console.log("Stopping listening...");
    stopListening();
  };

  const handleReset = () => {
    console.log("Resetting transcript...");
    resetTranscript();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Speech recognition not supported by your browser!</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Speech-to-Text Example</h2>
      <div style={styles.controls}>
        <button style={styles.button} onClick={handleStart} disabled={listening}>
          Start
        </button>
        <button style={styles.button} onClick={handleStop}>
          Stop
        </button>
        <button style={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
      <p style={styles.transcript}>{transcript}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  controls: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px',
    margin: '0 5px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  transcript: {
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  },
};

export default SpeechToText;
