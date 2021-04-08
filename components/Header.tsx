import HeaderStyle from '../styles/header.module.scss';

type Props = {
  title?: string;
};

const Header = ({ title = 'OnLib' }: Props) => (
  <header className={HeaderStyle.header}>
    <p>{title}</p>
  </header>
);

export default Header;
