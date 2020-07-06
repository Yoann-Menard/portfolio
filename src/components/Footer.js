import React from 'react';
import github from '../assets/logo/github.png';
import gitlab from '../assets/logo/gitlab.png';
import linkedin from '../assets/logo/linkedin.png';

const Footer = () => {
  return (
    <div className='Footer'>
      <footer class='page-footer red darken-3'>
        <div class='container'>
          <div class='row'>
            <div class='col l6 s12'>
              <h5 class='white-text'>Footer Content</h5>
              <p class='grey-text text-lighten-4'>lorem ipsum dolor sit amet</p>
            </div>
            <div class='col l4 offset-l2 s12'>
              <h5 class='white-text'>Social</h5>
              <ul>
                <li>
                  <a href='https://github.com/yoann-menard'>@GitHub</a>
                  <a
                    onClick={() =>
                      window.open('https://github.com/yoann-menard', '_blank')
                    }
                  >
                    <img
                      className='github-profile'
                      alt='github logo'
                      src={github}
                    />
                  </a>
                </li>
                <li>
                  <a href='https://gitlab.com/Yoann-Menard'>@GitLab</a>
                  <a
                    onClick={() =>
                      window.open('https://gitlab.com/Yoann-MENARD', '_blank')
                    }
                  >
                    <img
                      className='gitlab-profile'
                      alt='gitlab logo'
                      src={gitlab}
                    />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/yoann-menard/'>
                    @Linkedin
                  </a>
                  <a
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/yoann-menard/',
                        '_blank'
                      )
                    }
                  >
                    <img
                      className='linkedin-profile'
                      alt='linkedin logo'
                      src={linkedin}
                    />
                  </a>
                </li>
                <li>
                  <a class='grey-text text-lighten-3' href='#!'></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='footer-copyright'>
          <div class='container'>
            © 2020 Copyright Yoann Menard
            <a class='grey-text text-lighten-4 right' href='#!'></a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
