import axios from 'axios'

const GOT_TRANSCRIPTIONS_FROM_SERVER = 'GOT_TRANSCRIPTIONS_FROM_SERVER'
const GOT_TRANSCRIPTION  = 'GOT_ONE_TRANSCRIPTION'
const REMOVE_TRANSCRIPTION = 'REMOVE_TRANSCRIPTION'
const EDIT_TRANSCRIPTION = 'EDIT_TRANSCRIPTION'

export function gotTranscriptionsFromServer(transcriptions){
  return {
    type: GOT_TRANSCRIPTIONS_FROM_SERVER,
    transcriptions,
  }
}

export function gotTranscription(transcription){
  return {
    type: GOT_TRANSCRIPTION,
    transcription,
  }
}

export function removeTranscription(transcription){
  return {
    type: REMOVE_TRANSCRIPTION,
    transcription,
  }
}

export function editTranscription(transcription)
{
  return {
    type: EDIT_TRANSCRIPTION,
    transcription,
  }
}

export function putTranscription(transcription){
  return function thunk(dispatch){
    axios.put(`/api/transcriptions/${transcription.id}`)
    .then(res => res.data)
    .then(editedTranscription => dispatch(editTranscription(editedTranscription)))
  }
}

export function getAllTranscriptions(){
  return function thunk(dispatch){
    axios.get('/api/transcriptions')
    .then(res => res.data)
    .then(transcriptions => dispatch(gotTranscriptionsFromServer(transcriptions)))
  }
}

export function postTranscription(transcription){
  return function thunk(dispatch){
    axios.post('/api/transcriptions', transcription)
    .then(res => res.data)
    .then(posted => dispatch(gotTranscription(posted)))
  }
}

export function deleteTranscription(id){
  return function thunk(dispatch){
    axios.delete(`/api/transcriptions/${id}`)
    .then(res => res.data)
    .then(deleted => dispatch(removeTranscription(deleted)))
  }
}
export default function transcriptionsReducer(state = [], action){
  switch(action.type){
    case GOT_TRANSCRIPTIONS_FROM_SERVER:
      return action.transcriptions
    case GOT_TRANSCRIPTION:
      return [...state, action.transcription]
    case REMOVE_TRANSCRIPTION:
      return [...state.filter(transcript => +transcript.id !== +action.transcription.id)]
    case EDIT_TRANSCRIPTION:
      return [...state.map(transcription => +transcription.id === +action.transcription.id ? action.transcription : transcription)]
    default:
      return state
  }
}
