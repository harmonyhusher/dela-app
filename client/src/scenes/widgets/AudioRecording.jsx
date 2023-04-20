import React, { useState } from 'react';
import FlexBetween from 'components/FlexBetween';
import { Button } from '@mui/material';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioDuration, setAudioDuration] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleRecord = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.addEventListener('dataavailable', (event) => {
          chunks.push(event.data);
        });

        recorder.addEventListener('stop', () => {
          const audioBlob = new Blob(chunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioURL(audioUrl);
          const audio = new Audio(audioUrl);
          setAudioDuration(audio.duration);
        });

        recorder.start();
        setMediaRecorder(recorder);
        setRecording(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStop = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  const handlePlay = () => {
    const audio = new Audio(audioURL);
    audio.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    const audio = new Audio(audioURL);
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <FlexBetween>
      <Button onClick={handleRecord} disabled={recording}>
        Record
      </Button>
      <Button onClick={handleStop} disabled={!recording}>
        Stop
      </Button>
      {audioURL && (
        <FlexBetween>
          <audio controls src={audioURL}  sx={{
    width: 200,
    color: 'success.main',
  }}/>
        </FlexBetween>
      )}
    </FlexBetween>
  );
};

export default AudioRecorder;