import loaderCss from './Loader.module.css';
import { DNA } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={loaderCss.loaderWrapper}>
      <DNA
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
