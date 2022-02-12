import itzy from '../img/itzy.jpg';
import twone1 from '../img/2ne1.png';
import skz from '../img/skz.jpg';
import exo from '../img/exo.png';
import chungha from '../img/chungha.jpg';
import hyuna from '../img/hyuna.jpg';

const Groups = () => {
  const groups = [
    {
      name: 'ITZY',
      videoURL:
        'https://www.youtube.com/watch?v=MjCZfZfucEc&ab_channel=JYPEntertainment',
      img: `${itzy}`,
      id: 1,
    },
    {
      name: '2ne1',
      videoURL:
        'https://www.youtube.com/watch?v=_Sm_BIkbJkw&ab_channel=MnetK-POP',
      img: `${twone1}`,
      id: 2,
    },
    {
      name: 'skz',
      videoURL:
        'https://www.youtube.com/watch?v=YLtEc-kvOqA&ab_channel=StrayKids',
      img: `${skz}`,
      id: 3,
    },
    {
      name: 'exo',
      videoURL: 'https://www.youtube.com/watch?v=RuqaVryDRd0',
      img: `${exo}`,
      id: 4,
    },
    {
      name: 'chung ha',
      videoURL: 'https://www.youtube.com/watch?v=RHw1a0WESuA',
      img: `${chungha}`,
      id: 5,
    },
    {
      name: 'hyuna',
      videoURL: 'https://www.youtube.com/watch?v=_yXEnhyOTQo',
      img: `${hyuna}`,
      id: 6,
    },
  ];

  const groupsList = groups.map((group) => {
    return (
      <div key={group.id} className={`l-g-c ${group.name.toLowerCase()}-c`}>
        <a
          className={`l-g-t ${group.name.toLowerCase()}-t`}
          href={group.videoURL}
          style={{
            background: `linear-gradient(rgba(92, 0, 128, 0.7), 100%, rgba(92, 0, 128, 0.2)), url(${group.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top left',
            backgroundSize: 'cover',
            borderRadius: '50%',
          }}
        >
          {group.name.toUpperCase()}
        </a>
      </div>
    );
  });

  return (
    <div className="i-like">
      <span className="title">besties</span>
      {groupsList}
    </div>
  );
};

export default Groups;
