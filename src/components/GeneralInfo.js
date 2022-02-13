import BeforeYouFollow from './BeforeYouFollow';
import DoNotFollowIf from './DoNotFollowIf';

const GeneralInfo = () => {
  return (
    <div className="gen-info">
      <BeforeYouFollow />
      <DoNotFollowIf />
    </div>
  );
};

export default GeneralInfo;
