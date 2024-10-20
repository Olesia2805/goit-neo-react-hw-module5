import { Link } from 'react-router-dom';
import notFoundCss from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={notFoundCss.page_404}>
      <div className={notFoundCss.container}>
        <div className={notFoundCss.row}>
          <div className={notFoundCss.colSm12}>
            <div className={`${notFoundCss.colSm10} ${notFoundCss.colSmOffset1} text-center`}>
              <div className={notFoundCss.fourZeroFourBg}>
                <h1 className="text-center">404</h1>
              </div>
              <div className={notFoundCss.contantBox404}>
                <h3 className={notFoundCss.h2}>Looks like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <Link to="/" className={notFoundCss.link404}>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
