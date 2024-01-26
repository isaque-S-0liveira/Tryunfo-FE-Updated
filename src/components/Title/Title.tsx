import './Title.css';

type TitleProps = {
  className: string;
  title: string;
  color?: string;
};

function Title({ className, title, color = '' }: TitleProps) {
  return (
    <header>
      <p id="Title" style={ { color } } className={ className }>{title}</p>
    </header>
  );
}

export default Title;
