import Image from 'next/image';

export default function Cupples({ ladyName, gentlemanName, ladyPhotoName, gentlemanPhotoName,iconName,messageTitle,messageSubtitle }) {
    return (
        <div className="cupple-container">
            <div className="cupple-photos-container">
                <div className="cupple-item">
                    <Image src={`/${ladyPhotoName}`} alt={ladyName} width={200} height={200} />
                    <label className="cupple-name">{ladyName}</label>
                </div>
                <div className='cupple-icon'>
                    <span className="material-icons-outlined">
                        {iconName}
                    </span>
                </div>
                <div className="cupple-item">
                    <Image src={`/${gentlemanPhotoName}`} alt={gentlemanName} width={200} height={200} />
                    <label className="cupple-name">{gentlemanName}</label>
                </div>
            </div>
            <div className='cupple-message-container'>
                <h2 className='cupple-title'>{messageTitle}</h2>
                <p className='cupple-subtitle'>{messageSubtitle}</p>
            </div>
        </div>
    );
}