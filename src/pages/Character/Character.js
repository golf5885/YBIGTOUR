import React from 'react';
import { Link } from 'react-router-dom';
import Guide from './Guide';
import '../../App.css';
import '../../css/Character.css';
import '../../css/Home.css';

function Character() {
  const characters = [
    { name: '민성우', style: '먹는 것에 돈을 아끼지 않는다.', img_url: 'https://w7.pngwing.com/pngs/390/806/png-transparent-rilakkuma-kakaotalk-kakao-friends-south-korea-kakaofriends-sticker-desktop-wallpaper-snout-thumbnail.png' },
    { name: '박유찬', style: '박물관과 미술관을 좋아한다.', img_url: 'https://e7.pngegg.com/pngimages/982/1017/png-clipart-kakaotalk-kakao-friends-sticker-line-ryan-smiley-sticker.png' },
    { name: '서우석', style: '현지인들과 어울리기를 좋아한다.', img_url: 'https://e7.pngegg.com/pngimages/825/741/png-clipart-kakaotalk-kakao-friends-sticker-iphone-iphone-electronics-smiley.png' },
  ];

  return (
    <div className="background-color">
    <div className="many_guides">
      {characters.map((character) => (
        <Link key={character.name} to={`/${character.name}/map`} className='guide'>
          <Guide name={character.name} style={character.style} img_url={character.img_url} />
        </Link>
      ))}
    </div>
    </div>
  );

}

export default Character;
