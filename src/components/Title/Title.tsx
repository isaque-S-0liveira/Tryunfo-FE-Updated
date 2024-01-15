import './Title.css';

type TitleProps = {
  className: string;
  title: string;
  color: string;
};

function Title({ className, title, color }: TitleProps) {
  return (
    <p id="Title" style={ { color } } className={ className }>{title}</p>
  );
}

export default Title;
