import { useState } from 'react';

/** Styling imports **/
import styles from './ArticlePreview.module.css';
import drawers from '../images/drawers.jpg';
import avatar from '../images/avatar-michelle.jpg';
import shareIcon from '../images/icon-share.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterestIcon from '../images/icon-pinterest.svg';

const ArticlePreview = () => {
  const [showShare, setShowShare] = useState(false);
  const isMobile = window.innerWidth <= 430;

  return (
    <article className={styles.card}>
      <img
        src={drawers}
        alt="Green drawers and vase with framed images"
        className={styles.image}
      />

      <section className={styles.content}>
        <h1 className={styles.title}>
          Shift the overall look and feel by <br className={styles.desktopBreak} />
          adding these wonderful touches to <br className={styles.desktopBreak} />
          furniture in your home
        </h1>
        <p className={styles.description}>
          Ever been in a room and felt like something was missing? <br className={styles.desktopBreak} />
          Perhaps it felt slightly bare and uninviting.
          I've got some <br className={styles.desktopBreak} />
          tips to help you make any room feel complete.
        </p>

        <div className={styles.footerWrapper}>
          {isMobile && showShare ? (
            /** Mobile Share Bar **/
            <div className={styles.mobileShareBar}>
              <span className={styles.shareLabel}>SHARE</span>
              <div className={styles.iconGroup}>
                <img src={facebookIcon} alt="Facebook Icon" />
                <img src={twitterIcon} alt="Twitter Icon" />
                <img src={pinterestIcon} alt="Pinterest Icon" />
              </div>
              <div
                className={styles.shareButton}
                onClick={() => setShowShare(false)}
              >
                <img src={shareIcon} alt="Close share popup" className={styles.share} />
              </div>
            </div>
          ) : (
            /** Regular Footer and Desktop Share Popup **/
            <div className={styles.footer}>
              <div className={styles.profile}>
                <img src={avatar} alt="Michelle Appleton" className={styles.avatar} />
                <div>
                  <p className={styles.name}>Michelle Appleton</p>
                  <p className={styles.date}>28 Jun 2020</p>
                </div>
              </div>

              <div
                className={styles.shareButton}
                onClick={() => setShowShare(!showShare)}
              >
                <img src={shareIcon} alt="Share icon" className={styles.share} />
              </div>

              {showShare && !isMobile && (
                <div className={styles.sharePopup}>
                  <span>SHARE</span>
                  <img src={facebookIcon} alt="Facebook Icon" />
                  <img src={twitterIcon} alt="Twitter Icon" />
                  <img src={pinterestIcon} alt="Pinterest Icon" />
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </article>
  );
};

export default ArticlePreview;
