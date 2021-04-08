import Link from 'next/link';
import { useRouter } from 'next/router';
import Style from '../styles/navigation.module.scss';

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className={Style.stickyNavigation}>
      <ul className={Style.navList}>
        <li>
          <Link href='/'>
            <a className={router.pathname === '/' ? Style.activeLink : ''}>
              <i className='fas fa-home'></i>
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/books'>
            <a className={router.pathname === '/books' ? Style.activeLink : ''}>
              <i className='fas fa-book'></i>
              <span>Books</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/libraries'>
            <a
              className={
                router.pathname === '/libraries' ? Style.activeLink : ''
              }>
              <i className='fas fa-hotel'></i>
              <span>Libraries</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/profile'>
            <a
              className={
                router.pathname === '/profile' ? Style.activeLink : ''
              }>
              <i className='fas fa-user-alt'></i>
              <span>Profile</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
