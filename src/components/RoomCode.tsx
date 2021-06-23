import copyImag from '../assets/images/copy.svg';
import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText('-Mcqic_MC4Nkzrp53aTY');
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImag} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}
