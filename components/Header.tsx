import HeaderStyle from '../styles/header.module.scss';

type Props = {
  title?: string;
};

const Header = ({ title = 'OnLib' }: Props) => (
  <header className={HeaderStyle.header}>
    <img src='logo_v4.png'></img>
  </header>
);

export default Header;
